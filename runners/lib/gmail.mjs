#!/usr/bin/env node
// The mailbox pull the pipeline runner reads: every message in the last sixty
// days that touches a funnel domain or a funnel contact's address, from both
// of Forni's mailboxes, so a reply the HubSpot extension missed and a bounce on
// a send are already on disk when the model starts. No dependencies, node 20.
//
//   node gmail.mjs <terms-file> <out-dir>
//       terms-file: one domain or email address per line (the Atelic repo's hubspot.mjs sweep
//       writes mail-terms.txt). Writes mailbox.json and mailbox.md.
//
// Access tokens arrive in the environment, minted by the entrypoint from the
// vaulted authorized_user JSON for each profile (runner.sh google_access_token):
//   GMAIL_TOKEN_ATELIC      matt@atelic.me
//   GMAIL_TOKEN_PERSONAL    mattforni@gmail.com
// A mailbox whose token is absent is skipped and said so in the output; a
// mailbox whose token is present but whose control query returns nothing
// fails the pull, because an empty result from a broken read looks exactly
// like a quiet week (gws-zero-results-means-wrong-mailbox).
//
// The bodies are pulled only for incoming messages of the last three weeks,
// since those are the replies the roster owes and the rest is context.

import { readFileSync, writeFileSync, mkdirSync, realpathSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const LOOKBACK_DAYS = Number(process.env.GMAIL_LOOKBACK_DAYS || 60);
const BODY_DAYS = Number(process.env.GMAIL_BODY_DAYS || 21);
const OWN = (process.env.OWN_ADDRESSES || "matt@atelic.me,mattforni@gmail.com,claude@atelic.me").toLowerCase().split(",").map((s) => s.trim()).filter(Boolean);
const MAILBOXES = [
    ["atelic", process.env.GMAIL_TOKEN_ATELIC || ""],
    ["personal", process.env.GMAIL_TOKEN_PERSONAL || ""],
];
const log = (s) => process.stderr.write(`gmail: ${s}\n`);
// The terms the pull was handed, read in main and matched against below.
let terms = [];

// Gmail meters each user by the minute, and every client of that user draws
// on the one allowance, so a refusal for rate says nothing is wrong and
// clears by waiting. One of them used to end a whole unattended run. A
// request refused for rate, answered with a 5xx, or lost to the network is
// tried again, TRIES times in all, the wait doubling from BACKOFF_MS up to
// BACKOFF_CAP_MS: about two and a half minutes of patience by default, which
// outlasts the one minute window with room to spare. The three are read from
// the environment so a test can run in milliseconds.
const TRIES = Number(process.env.GMAIL_TRIES || 6);
const BACKOFF_MS = Number(process.env.GMAIL_BACKOFF_MS || 5000);
const BACKOFF_CAP_MS = Number(process.env.GMAIL_BACKOFF_CAP_MS || 60000);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// The moment before which no request leaves. One refusal for rate moves it
// and every call waits for it, so the pool slows together where each worker
// would otherwise knock again at once and burn its own tries on the same
// closed door. It is one moment for both mailboxes, which costs nothing
// because they are read one after the other.
let notBefore = 0;

// A 403 is also how Gmail says a token may not read the mailbox, and that
// one never clears by waiting. Only a refusal that names rate or quota, by
// its status, a reason, or its message, is worth the patience.
const isRateRefusal = (status, text) => {
    if (status === 429) return true;
    if (status !== 403) return false;
    let error;
    try { error = JSON.parse(text).error; } catch { /* not JSON: the words decide */ }
    if (!error || typeof error !== "object") return /quota exceeded|rate limit exceeded/i.test(text);
    const reasons = [...(error.errors || []), ...(error.details || [])].map((e) => String(e?.reason || ""));
    return error.status === "RESOURCE_EXHAUSTED"
        || reasons.some((r) => /^(user)?rateLimitExceeded$|^RATE_LIMIT_EXCEEDED$/.test(r))
        || /quota exceeded|rate limit exceeded/i.test(String(error.message || ""));
};
// Retry-After is a count of seconds or a date; either way, how long from now.
const retryAfterMs = (value) => {
    if (!value) return 0;
    const seconds = Number(value);
    const ms = Number.isFinite(seconds) ? seconds * 1000 : Date.parse(value) - Date.now();
    return ms > 0 ? ms : 0;
};

export async function gmail(token, path, params = {}) {
    const url = new URL(`https://gmail.googleapis.com/gmail/v1/users/me/${path}`);
    for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== "") url.searchParams.set(k, v);
    for (let attempt = 1; ; attempt++) {
        // A timer can fire a hair early and the moment can move while this
        // call sleeps, so it is asked again until it has truly passed.
        for (let left = notBefore - Date.now(); left > 0; left = notBefore - Date.now()) await sleep(left);
        let ok = false, status = 0, text = "", retryAfter = "";
        try {
            const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
            text = await res.text();
            ({ ok, status } = res);
            retryAfter = res.headers?.get("retry-after") || "";
        } catch (error) {
            // A fetch that rejects never reached an answer. Its code is all
            // that is kept, since nothing else it says is this file's to print.
            text = String(error?.cause?.code || error?.message || "fetch failed");
        }
        if (ok) return JSON.parse(text);
        const rate = isRateRefusal(status, text);
        const what = status ? `Gmail ${status} on ${path}` : `Gmail network error on ${path}`;
        // A real permission error and every other 4xx is the same answer
        // however often it is asked, so those fail at once.
        if (status && !rate && status < 500) throw new Error(`${what}: ${text.slice(0, 300)}`);
        if (attempt >= TRIES) throw new Error(`${what} after ${attempt} tries: ${text.slice(0, 300)}`);
        // What the server asks for is honored when it asks; otherwise the
        // doubling wait, with up to a quarter more so the workers of a pool
        // do not all come back in the same instant. The cap holds either way:
        // an unattended run does not sleep an hour on one header.
        const backoff = BACKOFF_MS * 2 ** (attempt - 1) * (1 + Math.random() / 4);
        const wait = Math.min(BACKOFF_CAP_MS, Math.max(retryAfterMs(retryAfter), backoff));
        if (rate) notBefore = Math.max(notBefore, Date.now() + wait);
        log(`${rate ? "rate limited" : status ? `server error ${status}` : "network error"}, waiting ${(wait / 1000).toFixed(1)}s (try ${attempt} of ${TRIES}) on ${path}`);
        await sleep(wait);
    }
}

// A small pool, so a mailbox with a few hundred hits is read in a minute
// rather than serially and without tripping the per user rate limit.
async function pool(items, size, fn) {
    const out = new Array(items.length);
    let next = 0;
    await Promise.all(Array.from({ length: Math.min(size, items.length) }, async () => {
        while (next < items.length) { const i = next++; out[i] = await fn(items[i], i); }
    }));
    return out;
}

const header = (msg, name) => (msg.payload?.headers || []).find((h) => h.name.toLowerCase() === name.toLowerCase())?.value || "";
const b64 = (s) => Buffer.from(s.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf8");
const textOf = (payload) => {
    if (!payload) return "";
    if (payload.mimeType === "text/plain" && payload.body?.data) return b64(payload.body.data);
    for (const p of payload.parts || []) { const t = textOf(p); if (t) return t; }
    if (payload.mimeType === "text/html" && payload.body?.data) {
        return b64(payload.body.data).replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
    }
    return "";
};
// The reader wants the new words, not the thread quoted underneath them.
const unquoted = (t) => {
    const lines = t.split("\n");
    const cut = lines.findIndex((l) => /^On .+wrote:\s*$/.test(l.trim()) || /^-{2,}\s*Original Message/i.test(l.trim()) || /^From: .+/.test(l.trim()) && lines.indexOf(l) > 0);
    const kept = (cut > 0 ? lines.slice(0, cut) : lines).filter((l) => !l.trim().startsWith(">"));
    return kept.join("\n").replace(/\n{3,}/g, "\n\n").trim();
};
const addressesIn = (s) => (s.toLowerCase().match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/g) || []);
const isOwn = (from) => addressesIn(from).some((a) => OWN.includes(a));
const termsOf = (msg) => {
    const all = addressesIn(`${msg.from} ${msg.to} ${msg.cc}`);
    const hits = new Set();
    for (const a of all) {
        if (terms.includes(a)) hits.add(a);
        const domain = a.split("@")[1]?.replace(/^www\./, "");
        if (domain && terms.includes(domain)) hits.add(domain);
    }
    return [...hits];
};

async function main() {
    const [termsFile, outDir] = process.argv.slice(2);
    if (!termsFile || !outDir) {
        console.error("usage: node gmail.mjs <terms-file> <out-dir>");
        process.exit(2);
    }
    terms = [...new Set(readFileSync(termsFile, "utf8").split("\n").map((t) => t.trim().toLowerCase()).filter(Boolean))];
    if (!terms.length) { log("no terms to search"); process.exit(2); }

    const byTerm = new Map();
    const mailboxes = {};
    const bodyCutoff = Date.now() - BODY_DAYS * 86400000;

    for (const [name, token] of MAILBOXES) {
        if (!token) { mailboxes[name] = { skipped: "no token" }; log(`${name}: skipped, no token`); continue; }
        const control = await gmail(token, "messages", { q: `newer_than:30d`, maxResults: "1" });
        if (!(control.messages || []).length) throw new Error(`${name}: the control query returned nothing; the mailbox read is broken, not quiet`);
        const ids = new Set();
        for (let i = 0; i < terms.length; i += 12) {
            const chunk = terms.slice(i, i + 12);
            const q = `(${chunk.map((t) => `from:${t} OR to:${t} OR cc:${t}`).join(" OR ")}) newer_than:${LOOKBACK_DAYS}d`;
            let pageToken;
            do {
                const page = await gmail(token, "messages", { q, maxResults: "100", pageToken });
                for (const m of page.messages || []) ids.add(m.id);
                pageToken = page.nextPageToken;
            } while (pageToken);
        }
        log(`${name}: ${ids.size} messages across ${terms.length} terms`);
        const metas = await pool([...ids], 5, async (id) => {
            // A metadata fetch returns every header, which is what the record wants.
            const full = await gmail(token, `messages/${id}`, { format: "metadata" });
            const rec = {
                id, mailbox: name, thread: full.threadId, date: new Date(Number(full.internalDate)).toISOString().slice(0, 10),
                ts: Number(full.internalDate), from: header(full, "From"), to: header(full, "To"), cc: header(full, "Cc"),
                subject: header(full, "Subject"), snippet: (full.snippet || "").trim(), labels: full.labelIds || [],
            };
            rec.incoming = !isOwn(rec.from);
            if (rec.incoming && rec.ts >= bodyCutoff) {
                const body = await gmail(token, `messages/${id}`, { format: "full" });
                rec.body = unquoted(textOf(body.payload)).slice(0, 1200);
            }
            return rec;
        });
        mailboxes[name] = { messages: metas.length, control: (control.messages || []).length };
        for (const rec of metas) {
            const hits = termsOf(rec);
            if (!hits.length) hits.push("(matched on a header the terms did not name)");
            for (const t of hits) byTerm.set(t, [...(byTerm.get(t) || []), rec]);
        }
    }

    for (const list of byTerm.values()) list.sort((a, b) => b.ts - a.ts);
    const ordered = [...byTerm.entries()].sort((a, b) => b[1][0].ts - a[1][0].ts);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "mailbox.json"), JSON.stringify({ pulled: new Date().toISOString(), lookback_days: LOOKBACK_DAYS, mailboxes, terms: terms.length, by_term: Object.fromEntries(ordered) }, null, 2));

    const esc = (s) => String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ");
    const md = [
        `# Mailbox pull, ${new Date().toISOString().slice(0, 10)}`,
        "",
        `Both mailboxes searched for ${terms.length} funnel domains and addresses over the last ${LOOKBACK_DAYS} days: ${Object.entries(mailboxes).map(([n, m]) => `${n} ${m.skipped ? "skipped (" + m.skipped + ")" : m.messages + " messages, control ok"}`).join("; ")}. A term with no section below had no mail in either mailbox. Bodies are pulled for incoming mail of the last ${BODY_DAYS} days only; "incoming" means the sender is not one of Forni's own addresses.`,
        "",
        ...ordered.flatMap(([term, list]) => [
            `## ${term}`,
            "",
            `| Date | Mailbox | Direction | From | To | Subject |`,
            `|---|---|---|---|---|---|`,
            ...list.slice(0, 12).map((m) => `| ${m.date} | ${m.mailbox} | ${m.incoming ? "incoming" : "sent"} | ${esc(m.from)} | ${esc(m.to)} | ${esc(m.subject)} |`),
            ...(list.length > 12 ? [`| … | | | ${list.length - 12} older messages in mailbox.json | | |`] : []),
            "",
            ...list.filter((m) => m.body).flatMap((m) => [`**${m.date}, from ${esc(m.from)}: ${esc(m.subject)}**`, "", `> ${m.body.replace(/\n/g, "\n> ")}`, ""]),
        ]),
        ordered.length ? "" : "No mail matched any term in either mailbox.",
    ].join("\n");
    writeFileSync(join(outDir, "mailbox.md"), md);
    log(`wrote mailbox.json and mailbox.md, ${ordered.length} terms with mail`);
    console.log(JSON.stringify({ mailboxes, terms_with_mail: ordered.length }));
}

// The pull runs only when this file is the script node was handed, so a test
// can import the request function without a mailbox. The path is resolved
// first: an image or a host may reach this file through a link, and a guard
// that compared the link's own name would skip the pull without a word.
const invoked = () => {
    try { return import.meta.url === pathToFileURL(realpathSync(process.argv[1])).href; } catch { return false; }
};
if (invoked()) await main();
