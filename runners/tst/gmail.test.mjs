import assert from "node:assert/strict";
import { test } from "node:test";

/*
 * The gate on the Gmail request (runners/lib/gmail.mjs): a refusal for rate,
 * a 5xx and a lost connection are waited out and tried again, the pool slows
 * together, and a real refusal still fails at once. Every answer here comes
 * from a stubbed fetch; nothing reaches a mailbox, and the token is invented.
 *
 *   node --test runners/tst/gmail.test.mjs
 *
 * The timings are read from the environment when the file loads, so they are
 * set here before it is imported: the waits are milliseconds, and the cap is
 * left high enough that a Retry-After of one second is honored whole.
 *
 * These live beside runners/lib and not inside it: that directory is copied
 * flat into every runner's image, and a directory in it breaks the copy.
 */

process.env.GMAIL_TRIES = "4";
process.env.GMAIL_BACKOFF_MS = "5";
process.env.GMAIL_BACKOFF_CAP_MS = "2000";
// Importing must not run the pull: with no arguments it would exit 2 here.
const { gmail } = await import("../lib/gmail.mjs");

const TOKEN = "ya29.INVENTEDTOKEN";
const answer = (body, status = 200, headers = {}) => new Response(JSON.stringify(body), { status, headers });
// The refusal a run died on, in the shape Gmail sends it.
const quota = () => answer({
    error: {
        code: 403,
        message: "Quota exceeded for quota metric 'Total Query Cost' and limit 'Units per minute per user' of service 'gmail.googleapis.com'",
        errors: [{ message: "Quota exceeded", domain: "usageLimits", reason: "rateLimitExceeded" }],
        status: "RESOURCE_EXHAUSTED",
    },
}, 403);
const forbidden = () => answer({
    error: { code: 403, message: "Request had insufficient authentication scopes.", errors: [{ reason: "insufficientPermissions" }], status: "PERMISSION_DENIED" },
}, 403);

/*
 * Runs `fn` against a fetch that answers from `script` in order (a function
 * is called, so a row can throw or look at the clock), and hands back what
 * it returned with the calls made and the lines written to stderr.
 */
async function stubbed(script, fn) {
    const calls = [];
    const lines = [];
    const realFetch = globalThis.fetch;
    const realWrite = process.stderr.write;
    globalThis.fetch = async (url, init) => {
        const next = script[Math.min(calls.length, script.length - 1)];
        calls.push({ url: String(url), init, at: Date.now() });
        return next();
    };
    process.stderr.write = (chunk) => { lines.push(String(chunk)); return true; };
    try {
        const value = await fn();
        return { value, calls, lines };
    } catch (error) {
        return { error, calls, lines };
    } finally {
        globalThis.fetch = realFetch;
        process.stderr.write = realWrite;
    }
}

test("a quota 403 is waited out and the next answer is returned", async () => {
    const { value, calls, lines } = await stubbed([quota, () => answer({ id: "m1" })], () => gmail(TOKEN, "messages/m1", { format: "metadata" }));
    assert.deepEqual(value, { id: "m1" });
    assert.equal(calls.length, 2);
    assert.equal(calls[0].init.headers.Authorization, `Bearer ${TOKEN}`);
    assert.match(calls[1].url, /\/users\/me\/messages\/m1\?format=metadata$/);
    assert.equal(lines.length, 1);
    assert.match(lines[0], /^gmail: rate limited, waiting \d+\.\ds \(try 1 of 4\) on messages\/m1\n$/);
    assert.ok(!lines.join("").includes(TOKEN), "a wait never prints the token");
});

test("a rate refusal is known by its reason, its status or its message alone, and a 429 by its number", async () => {
    const shapes = [
        () => answer({ error: { code: 403, message: "User-rate limit exceeded.", errors: [{ reason: "userRateLimitExceeded" }] } }, 403),
        () => answer({ error: { code: 403, message: "refused", status: "RESOURCE_EXHAUSTED" } }, 403),
        () => answer({ error: { code: 403, message: "Quota exceeded for quota metric 'Queries'" } }, 403),
        () => answer({ error: { code: 429, message: "Too many concurrent requests for user." } }, 429),
    ];
    for (const shape of shapes) {
        const { value, calls } = await stubbed([shape, () => answer({ ok: 1 })], () => gmail(TOKEN, "messages"));
        assert.deepEqual(value, { ok: 1 });
        assert.equal(calls.length, 2);
    }
});

test("a 429 with Retry-After waits at least that long", async () => {
    const { value, calls } = await stubbed([() => answer({ error: { code: 429 } }, 429, { "Retry-After": "1" }), () => answer({ messages: [] })], () => gmail(TOKEN, "messages"));
    assert.deepEqual(value, { messages: [] });
    assert.equal(calls.length, 2);
    assert.ok(calls[1].at - calls[0].at >= 1000, `waited ${calls[1].at - calls[0].at} ms`);
});

test("a 500 and a lost connection are each tried again", async () => {
    const down = await stubbed([() => answer({ error: { code: 500 } }, 500), () => answer({ id: "m2" })], () => gmail(TOKEN, "messages/m2"));
    assert.deepEqual(down.value, { id: "m2" });
    assert.match(down.lines[0], /^gmail: server error 500, waiting /);
    const lost = await stubbed([() => { throw Object.assign(new TypeError("fetch failed"), { cause: { code: "ECONNRESET" } }); }, () => answer({ id: "m3" })], () => gmail(TOKEN, "messages/m3"));
    assert.deepEqual(lost.value, { id: "m3" });
    assert.equal(lost.calls.length, 2);
    assert.match(lost.lines[0], /^gmail: network error, waiting /);
});

test("a permission 403 and any other 4xx fail at once, in one call", async () => {
    const denied = await stubbed([forbidden, () => answer({ id: "never" })], () => gmail(TOKEN, "messages/m4"));
    assert.equal(denied.calls.length, 1);
    assert.match(denied.error.message, /^Gmail 403 on messages\/m4: \{"error":/);
    assert.equal(denied.lines.length, 0);
    const missing = await stubbed([() => answer({ error: { code: 404, message: "Requested entity was not found." } }, 404)], () => gmail(TOKEN, "messages/m5"));
    assert.equal(missing.calls.length, 1);
    assert.match(missing.error.message, /^Gmail 404 on messages\/m5: /);
});

test("patience runs out after the configured tries and says how many", async () => {
    const refused = await stubbed([quota], () => gmail(TOKEN, "messages/m6"));
    assert.equal(refused.calls.length, 4);
    assert.equal(refused.lines.length, 3);
    assert.match(refused.error.message, /^Gmail 403 on messages\/m6 after 4 tries: \{"error":/);
    assert.ok(!refused.error.message.includes(TOKEN));
    const lost = await stubbed([() => { throw Object.assign(new TypeError("fetch failed"), { cause: { code: "ENOTFOUND" } }); }], () => gmail(TOKEN, "messages/m7"));
    assert.equal(lost.calls.length, 4);
    assert.equal(lost.error.message, "Gmail network error on messages/m7 after 4 tries: ENOTFOUND");
});

test("a second call waits for the pause the first one earned, and burns no try of its own", async () => {
    // The first answer is the refusal, asking for one second; every answer
    // after it is a success. The second call starts once the refusal has
    // landed, so without the shared moment it would be answered at once.
    const script = [() => answer({ error: { code: 429 } }, 429, { "Retry-After": "1" }), () => answer({ ok: 1 })];
    const { value, calls } = await stubbed(script, async () => {
        const first = gmail(TOKEN, "messages/first");
        await new Promise((resolve) => setTimeout(resolve, 50));
        const second = gmail(TOKEN, "messages/second");
        return Promise.all([first, second]);
    });
    assert.deepEqual(value, [{ ok: 1 }, { ok: 1 }]);
    const refusedAt = calls[0].at;
    const forSecond = calls.filter((c) => c.url.endsWith("/messages/second"));
    assert.equal(forSecond.length, 1);
    assert.ok(forSecond[0].at - refusedAt >= 1000, `the second call left ${forSecond[0].at - refusedAt} ms after the refusal`);
    assert.equal(calls.length, 3);
});
