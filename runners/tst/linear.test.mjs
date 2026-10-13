import assert from "node:assert/strict";
import { test } from "node:test";
import { spawnSync } from "node:child_process";
import { activeCycleIssues, LinearError } from "../lib/linear.mjs";

/*
 * The gate on the Linear read (runners/lib/linear.mjs): one read only query,
 * the active cycle's open issues, whose failures travel into a mail and so
 * may never carry a word of what the tracker sent back. Every issue here is
 * invented.
 *
 *   node --test runners/tst/linear.test.mjs
 *
 * The fold that joins these issues to a customer's line lives with the rest
 * of what the runners know about the business, in the Atelic repo
 * (plugins/atelic/scripts/lib/pipeline.mjs), and is tested there.
 *
 * These live beside runners/lib and not inside it: that directory is copied
 * flat into every runner's image, and a directory in it breaks the copy.
 */

const answer = (body, status = 200) => ({ ok: status === 200, status, text: async () => JSON.stringify(body) });

test("the Linear read pages through the active cycle and sends the key bare", async () => {
    const calls = [];
    const pages = [
        { data: { issues: { nodes: [{ identifier: "EXA-1", title: "One", url: "u1", priority: 2, dueDate: "2026-10-08", project: { name: "Westbrook" } }], pageInfo: { hasNextPage: true, endCursor: "c1" } } } },
        { data: { issues: { nodes: [{ identifier: "EXA-2", title: "Two", url: "u2", priority: null, dueDate: null, project: null }], pageInfo: { hasNextPage: false } } } },
    ];
    const { issues, truncated } = await activeCycleIssues({ key: "lin_test", fetchImpl: async (endpoint, init) => { calls.push(init); return answer(pages[calls.length - 1]); } });
    assert.equal(truncated, false);
    assert.deepEqual(issues, [
        { identifier: "EXA-1", title: "One", url: "u1", priority: 2, dueDate: "2026-10-08", project: "Westbrook" },
        { identifier: "EXA-2", title: "Two", url: "u2", priority: 0, dueDate: "", project: "" },
    ]);
    assert.equal(calls[0].headers.Authorization, "lin_test");
    assert.equal(JSON.parse(calls[1].body).variables.after, "c1");
    assert.match(JSON.parse(calls[0].body).query, /isActive: \{ eq: true \}/);
});

test("a failed Linear read never carries the response body, which travels into the mail", async () => {
    const echo = { ok: false, status: 401, text: async () => JSON.stringify({ error: "invalid key lin_api_SECRETSECRET" }) };
    await assert.rejects(activeCycleIssues({ key: "lin_api_SECRETSECRET", fetchImpl: async () => echo }), (error) => !/SECRET/.test(error.message));
});

test("the Linear read fails loudly on a missing key, a bad status, and an error that arrives as a 200", async () => {
    await assert.rejects(activeCycleIssues({ key: "" }), /no LINEAR_API_KEY/);
    await assert.rejects(activeCycleIssues({ key: "k", fetchImpl: async () => answer({ message: "nope" }, 401) }), /^Error: Linear answered 401$/);
    await assert.rejects(activeCycleIssues({ key: "k", fetchImpl: async () => ({ ok: true, status: 200, text: async () => "<html>gateway</html>" }) }), /not JSON/);
    await assert.rejects(activeCycleIssues({ key: "k", fetchImpl: async () => answer({ errors: [{ message: "Query too complex" }] }) }), /^Error: Linear refused the query$/);
});

test("no word of what Linear sends back can reach the mail, on any failure", async () => {
    const leak = "LEAK lin_api_SECRETSECRET";
    const failures = [
        { ok: false, status: 500, text: async () => leak },
        { ok: true, status: 200, text: async () => `<html>${leak}</html>` },
        answer({ errors: [{ message: leak }] }),
        answer({ data: { note: leak } }),
    ];
    for (const failure of failures) {
        await assert.rejects(activeCycleIssues({ key: "k", fetchImpl: async () => failure }), (error) => error instanceof LinearError && !/LEAK|SECRET/.test(error.message));
    }
    // The command line says a failure that is not this file's own as one fixed phrase.
    const run = spawnSync(process.execPath, [new URL("../lib/linear.mjs", import.meta.url).pathname, "issues"], { encoding: "utf8", env: { ...process.env, LINEAR_API_KEY: "" } });
    assert.equal(run.status, 1);
    assert.equal(run.stderr.trim(), "no LINEAR_API_KEY in the environment");
    assert.equal(run.stdout, "");
});

test("a Linear read that stops at the page cap says so", async () => {
    let n = 0;
    const page = () => { n += 1; return answer({ data: { issues: { nodes: [{ identifier: `EXA-${n}`, title: "t", url: "u" }], pageInfo: { hasNextPage: true, endCursor: `c${n}` } } } }); };
    const read = await activeCycleIssues({ key: "k", fetchImpl: async () => page() });
    assert.equal(read.truncated, true);
    assert.equal(read.issues.length, 5);
});
