// The Atelic pull for the Sunday retro: what outreach went out this week and
// what came back, as three finished tables.
//
// The arithmetic lives here rather than in the prompt on purpose. The joins
// below have two traps that a model asked to eyeball a pile of JSON would get
// wrong quietly, and the retro would read as authoritative anyway. The model's
// job is the sentence underneath; this file's job is the numbers.
//
// Usage: node hubspot.mjs <monday> <next-monday> > atelic.json
//
// Credentials: HUBSPOT_SERVICE_KEY, which Cloud Run injects from the vault.
// Without it, and only then, this falls back to shelling out to the `hs` shim,
// so the same file runs on a laptop where the key lives in the Keychain.

import { execFileSync } from "node:child_process";

const [MONDAY, NEXT_MONDAY] = process.argv.slice(2);
if (!MONDAY || !NEXT_MONDAY) {
    console.error("usage: node hubspot.mjs <YYYY-MM-DD monday> <YYYY-MM-DD next monday>");
    process.exit(2);
}

const KEY = process.env.HUBSPOT_SERVICE_KEY || "";
const ACCOUNT = process.env.HS_ACCOUNT || "hs-pat-atelic";
const SELF_COMPANY = process.env.ATELIC_COMPANY_ID || "342531943133";

async function api(path, body) {
    if (KEY) {
        const res = await fetch(`https://api.hubapi.com/${path}`, {
            method: body ? "POST" : "GET",
            headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
            body: body ? JSON.stringify(body) : undefined,
        });
        const text = await res.text();
        if (!res.ok) throw new Error(`HubSpot ${res.status} on ${path}: ${text.slice(0, 300)}`);
        return JSON.parse(text);
    }
    const args = ["api", path, "--account=" + ACCOUNT];
    if (body) args.push("-X", "POST", "--data", JSON.stringify(body));
    return JSON.parse(execFileSync("hs", args, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }));
}

const EMAIL_PROPS = [
    "hs_timestamp", "hs_email_subject", "hs_email_direction", "hs_email_open_count",
    "hs_email_click_count", "hs_not_tracking_opens_or_clicks", "hs_email_thread_id",
];

// Calendar traffic and auto responders land on the timeline as ordinary email
// engagements, and counting them turns a courtesy into a touch and an out of
// office into a reply. Both happened in W35: Galvant read as three sends
// because a forwarded cancellation and an invite acceptance were among them,
// and Urban Sanctuary read as answered on an out of office. This is a denylist
// and will need tending; the alternative, guessing from the sender, misses the
// ones Forni's own calendar sends on his behalf.
const NOISE = [
    /^(accepted|declined|tentative|cancelled|canceled|invitation|updated invitation|automatic reply|auto|out of office):/i,
    /^(re|fwd|fw):\s*(accepted|declined|tentative|cancelled|canceled|invitation|updated invitation|automatic reply):/i,
    /^out of office\b/i,
    /^\d+\s*min(ute)?s?\s+meeting\b/i,
];
const isNoise = (p) => NOISE.some((re) => re.test((p.hs_email_subject || "").trim()));

// A touch is one outreach at one company, not one message. The same first
// touch can go to two addresses an hour apart and pick up a reply to an auto
// responder on the way, which is how Urban Sanctuary read as three touches on
// what Forni correctly remembered as one email. Stripping the reply prefixes
// collapses all of that back to the thing he actually did.
const normSubject = (s) => (s || "").replace(/^((re|fwd|fw)\s*:\s*)+/i, "").trim().toLowerCase();

const searchAll = async (obj, body) => {
    const out = [];
    let after;
    do {
        const page = await api(`crm/v3/objects/${obj}/search`, { ...body, limit: 100, ...(after ? { after } : {}) });
        out.push(...(page.results || []));
        after = page.paging?.next?.after;
    } while (after);
    return out;
};

const batch = async (obj, ids, properties) => {
    const out = [];
    for (let i = 0; i < ids.length; i += 100) {
        const page = await api(`crm/v3/objects/${obj}/batch/read`, {
            properties, inputs: ids.slice(i, i + 100).map((id) => ({ id: String(id) })),
        });
        out.push(...(page.results || []));
    }
    return out;
};

const assoc = async (from, to, ids) => {
    const map = new Map();
    for (let i = 0; i < ids.length; i += 100) {
        const page = await api(`crm/v4/associations/${from}/${to}/batch/read`, {
            inputs: ids.slice(i, i + 100).map((id) => ({ id: String(id) })),
        });
        for (const r of page.results || []) {
            map.set(String(r.from.id), (r.to || []).map((t) => String(t.toObjectId)));
        }
    }
    return map;
};

const rawWeek = await searchAll("emails", {
    filterGroups: [{ filters: [
        { propertyName: "hs_timestamp", operator: "GTE", value: `${MONDAY}T00:00:00Z` },
        { propertyName: "hs_timestamp", operator: "LT", value: `${NEXT_MONDAY}T00:00:00Z` },
    ] }],
    properties: EMAIL_PROPS,
    sorts: [{ propertyName: "hs_timestamp", direction: "ASCENDING" }],
});
const rawPrior = await searchAll("emails", {
    filterGroups: [{ filters: [
        { propertyName: "hs_email_direction", operator: "EQ", value: "EMAIL" },
        { propertyName: "hs_timestamp", operator: "LT", value: `${MONDAY}T00:00:00Z` },
    ] }],
    properties: EMAIL_PROPS,
});

const week = rawWeek.filter((e) => !isNoise(e.properties));
const prior = rawPrior.filter((e) => !isNoise(e.properties));

const weekIds = week.map((e) => e.id);
const aCoWeek = await assoc("emails", "companies", weekIds);
const aCtWeek = await assoc("emails", "contacts", weekIds);
const aCoPrior = await assoc("emails", "companies", prior.map((e) => e.id));

const ctIds = [...new Set([...aCtWeek.values()].flat())];
const contacts = new Map((await batch("contacts", ctIds,
    ["firstname", "lastname", "hs_lead_status", "associatedcompanyid"])).map((c) => [c.id, c.properties]));

// Trap one: a send is reliably associated to a contact and unreliably to a
// company. In 2026-W35, 23 of 23 outgoing sends carried a contact link and only
// 18 carried a company one, so a report joined on companies drops five sends
// and the companies behind them. The contact's own company is the fallback,
// and only a fallback: taken as a union it pulls in every contact whose
// company field points at Atelic itself and inflates every number.
const companiesFor = (eid, aCo, aCt) => {
    const direct = (aCo.get(eid) || []).filter((c) => c !== SELF_COMPANY);
    if (direct.length) return [...new Set(direct)];
    const viaContact = (aCt.get(eid) || [])
        .map((ct) => contacts.get(ct)?.associatedcompanyid)
        .filter((c) => c && String(c) !== SELF_COMPANY)
        .map(String);
    return [...new Set(viaContact)];
};

const priorSeen = new Set();
const priorTouches = new Map();
for (const e of prior) {
    for (const c of (aCoPrior.get(e.id) || []).filter((c) => c !== SELF_COMPANY)) {
        const key = `${c}|${normSubject(e.properties.hs_email_subject)}`;
        if (priorSeen.has(key)) continue;
        priorSeen.add(key);
        priorTouches.set(c, (priorTouches.get(c) || 0) + 1);
    }
}

// A thread that has ever carried an inbound message makes the next outbound a
// reply rather than a bump. They are different work and the five and five
// target only counts the latter.
const answered = new Set([...week, ...prior]
    .filter((e) => e.properties.hs_email_direction === "INCOMING_EMAIL" && e.properties.hs_email_thread_id)
    .map((e) => e.properties.hs_email_thread_id));

const rows = new Map();
const row = (cid) => {
    if (!rows.has(cid)) rows.set(cid, {
        sends: 0, first: 0, bump: 0, reply: 0,
        replied: false, contacts: new Set(), lastSend: "", touchRefs: [],
    });
    return rows.get(cid);
};

const touchIndex = new Map();

for (const e of week) {
    const p = e.properties;
    const cids = companiesFor(e.id, aCoWeek, aCtWeek);
    if (p.hs_email_direction === "INCOMING_EMAIL") {
        for (const c of cids) row(c).replied = true;
        continue;
    }
    if (p.hs_email_direction !== "EMAIL") continue;
    for (const c of cids) {
        const r = row(c);
        for (const ct of aCtWeek.get(e.id) || []) r.contacts.add(ct);
        const key = `${c}|${normSubject(p.hs_email_subject)}`;
        const opens = Number(p.hs_email_open_count || 0);
        const tracked = p.hs_not_tracking_opens_or_clicks !== "true";

        // A copy of a touch already counted folds into it. Opens take the
        // best copy, because the touch was opened if any copy of it was, and
        // tracking counts if any copy carried it.
        if (touchIndex.has(key)) {
            const t = touchIndex.get(key);
            t.opens = Math.max(t.opens, opens);
            t.clicks = Math.max(t.clicks, Number(p.hs_email_click_count || 0));
            t.tracked = t.tracked || tracked;
            r.lastSend = (p.hs_timestamp || "").slice(0, 10) > r.lastSend
                ? (p.hs_timestamp || "").slice(0, 10) : r.lastSend;
            continue;
        }
        const t = { opens, clicks: Number(p.hs_email_click_count || 0), tracked };
        touchIndex.set(key, t);
        r.touchRefs.push(t);
        r.sends += 1;
        r.lastSend = (p.hs_timestamp || "").slice(0, 10);

        // Reply is tested first: a message into a thread they have answered is
        // a reply even when it is this company's first send of the week, which
        // is what Galvant is. Only then does first outrank bump.
        if (answered.has(p.hs_email_thread_id)) r.reply += 1;
        else if (!priorTouches.get(c) && r.sends === 1) r.first += 1;
        else r.bump += 1;
    }
}

// Fold each company's touches now that every copy has been merged into one.
for (const r of rows.values()) {
    r.opens = r.touchRefs.reduce((n, t) => n + t.opens, 0);
    r.clicks = r.touchRefs.reduce((n, t) => n + t.clicks, 0);
    r.tracked = r.touchRefs.filter((t) => t.tracked).length;
}

const companies = new Map((await batch("companies", [...rows.keys()],
    ["name", "lifecyclestage", "fit", "disqualification_reason"])).map((c) => [c.id, c.properties]));

// An opportunity is not measured in touches. What matters is which stage its
// deal sits at and how much is on the table, so the opportunities table reads
// the deal and the lead columns are dropped for it entirely.
const STAGES = Object.fromEntries((await api("crm/v3/pipelines/deals")).results
    .flatMap((pl) => pl.stages.map((st) => [st.id, st.label])));
const openDeals = (await searchAll("deals", {
    filterGroups: [{ filters: [{ propertyName: "hs_is_closed", operator: "NEQ", value: "true" }] }],
    properties: ["dealname", "dealstage", "amount", "closedate"],
}));
const dealCompanies = await assoc("deals", "companies", openDeals.map((d) => d.id));
const dealByCompany = new Map();
for (const d of openDeals) {
    for (const c of dealCompanies.get(d.id) || []) {
        if (!dealByCompany.has(c)) dealByCompany.set(c, d.properties);
    }
}

// A company is as far along as its warmest contact. Concatenating every
// contact's status reads as a data error, which is exactly how it read the
// first time: Skylight Specialists showed CONNECTED/QUALIFIED because Bradley
// had not caught up with Danny and Josh.
const LADDER = ["NEW", "CONTACTED", "ENGAGED", "CONNECTED", "QUALIFIED"];
const CLOSED = new Set(["UNQUALIFIED", "NO_RESPONSE"]);
const warmest = (ids) => {
    const seen = [...ids].map((c) => contacts.get(c)?.hs_lead_status).filter(Boolean);
    const open = seen.filter((s) => !CLOSED.has(s));
    if (open.length) return open.sort((a, b) => LADDER.indexOf(b) - LADDER.indexOf(a))[0];
    return seen[0] || "";
};

const tables = { opportunities: [], open_leads: [], closed_leads: [] };
for (const [cid, r] of rows) {
    const c = companies.get(cid) || {};
    const stage = c.lifecyclestage || "";
    if (stage !== "lead" && stage !== "opportunity" && stage !== "customer") continue;
    const status = warmest(r.contacts);
    // No lead status on any contact means the company is not in the motion,
    // which is exactly what clearing the status is for. It also keeps rows
    // that only ever received mail (Forni's PT, his lawyers) out of a table
    // about outreach.
    if (!status) continue;
    const kinds = [];
    if (r.first) kinds.push(r.first > 1 ? `${r.first} first` : "first");
    if (r.bump) kinds.push(r.bump > 1 ? `${r.bump} bumps` : "bump");
    if (r.reply) kinds.push(r.reply > 1 ? `${r.reply} replies` : "reply");
    const deal = dealByCompany.get(cid);
    const entry = {
        company: c.name || `(company ${cid})`,
        status: status || "none",
        kind: kinds.join(", ") || "none",
        sends: r.sends,
        touches: (priorTouches.get(cid) || 0) + r.sends,
        // Opens are only readable on a send that carried tracking, so an
        // untracked send reports as unknown rather than as a zero.
        opens: r.tracked ? String(r.opens) : "untracked",
        clicks: r.tracked ? String(r.clicks) : "untracked",
        tracked: `${r.tracked}/${r.sends}`,
        replied: r.replied ? "yes" : "no",
        last_send: r.lastSend,
    };
    // Closed is decided by the contact's status, never by the presence of a
    // Disqualification Reason: a reason can sit stale on a company whose
    // contact is live again, which is how EZEC read as closed while a thread
    // with it was still moving.
    const closed = CLOSED.has(status);
    if (stage === "opportunity" || stage === "customer") {
        tables.opportunities.push({
            company: entry.company,
            deal: deal?.dealname || "(no deal record)",
            stage: deal ? (STAGES[deal.dealstage] || deal.dealstage) : "-",
            amount: deal?.amount ? `$${Number(deal.amount).toLocaleString("en-US")}` : "-",
            close: (deal?.closedate || "").slice(0, 10) || "-",
            last_send: entry.last_send,
        });
    }
    else if (closed) { entry.reason = c.disqualification_reason || "-"; tables.closed_leads.push(entry); }
    else tables.open_leads.push(entry);
}
// Leads sort by how far along they are, then by when they were last touched,
// so the table reads as a funnel rather than as a mailbox.
const depth = (s) => { const i = LADDER.indexOf(s); return i < 0 ? -1 : i; };
for (const t of [tables.open_leads, tables.closed_leads]) {
    t.sort((a, b) => depth(b.status) - depth(a.status) || b.last_send.localeCompare(a.last_send));
}
tables.opportunities.sort((a, b) => b.last_send.localeCompare(a.last_send));

const all = [...rows.values()];
console.log(JSON.stringify({
    ...tables,
    totals: {
        companies: tables.opportunities.length + tables.open_leads.length + tables.closed_leads.length,
        sends: all.reduce((n, r) => n + r.sends, 0),
        first: all.reduce((n, r) => n + r.first, 0),
        bumps: all.reduce((n, r) => n + r.bump, 0),
        replies_sent: all.reduce((n, r) => n + r.reply, 0),
        tracked: all.reduce((n, r) => n + r.tracked, 0),
        opens: all.reduce((n, r) => n + r.opens, 0),
        clicks: all.reduce((n, r) => n + r.clicks, 0),
    },
}, null, 2));
