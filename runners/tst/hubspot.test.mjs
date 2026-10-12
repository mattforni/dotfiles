import assert from "node:assert/strict";
import { test } from "node:test";
import {
    clearedOnPurpose,
    clearOf,
    foldTouches,
    isOutboundCall,
    portalRow,
    sectionOf,
    statusTrueUp,
    touchLine,
} from "../lib/hubspot.mjs";

/*
 * The gate on the sweep's pure parts (ATE-652): how a Lead Status cleared on
 * purpose is told from one never set, and how a logged call becomes a touch.
 * Every record here is invented, as in pipeline.test.mjs, because this
 * repository is public and the portal is not.
 *
 *   node --test runners/tst/hubspot.test.mjs
 */

const ms = (iso) => Date.parse(iso);
const at = (value, timestamp) => ({ value, timestamp, sourceType: "INTEGRATION" });

/** An email engagement as the search returns it. */
const email = (id, iso, extra = {}) => ({
    id, properties: {
        hs_timestamp: iso, hs_email_direction: "EMAIL", hs_email_subject: `Subject ${id}`,
        hs_email_open_count: "0", hs_email_click_count: "0", hs_not_tracking_opens_or_clicks: "false", hs_email_thread_id: `t${id}`,
        ...extra,
    },
});
/** A call engagement as the search returns it. */
const call = (id, iso, extra = {}) => ({
    id, properties: { hs_timestamp: iso, hs_call_title: `Call ${id}`, hs_call_direction: "OUTBOUND", hs_call_status: "COMPLETED", hs_call_body: "", ...extra },
});
const links = (pairs) => new Map(pairs.map(([id, contacts]) => [id, contacts]));

/* ---------- a cleared status stays cleared ---------- */

// The shape of the real case, newest first: set NEW, moved to CONTACTED by the
// first send, then cleared by hand when the person left the business.
const clearedHistory = [
    at("", "2026-10-08T16:26:15Z"),
    at("CONTACTED", "2026-09-13T17:02:14Z"),
    at("NEW", "2026-09-13T16:17:21Z"),
];

test("an empty Lead Status with a value in its history was cleared on purpose", () => {
    assert.equal(clearedOnPurpose("", clearedHistory), true);
    assert.equal(clearedOnPurpose("", []), false, "a status never set is not a clear");
    assert.equal(clearedOnPurpose("", [at("", "2026-10-01T00:00:00Z")]), false, "an empty history entry alone is not a clear");
    assert.equal(clearedOnPurpose("CONTACTED", clearedHistory), false, "a status that holds a value is not cleared");
});

test("the groom leaves a cleared status cleared, and still fills in one never set", () => {
    const touches = [{ kind: "email", date: "2026-09-13", ts: ms("2026-09-13T17:00:00Z") }];
    assert.deepEqual(statusTrueUp({ status: "", touches, history: clearedHistory }), { next: "", why: "", cleared: true });
    assert.deepEqual(statusTrueUp({ status: "", touches, history: [] }), { next: "CONTACTED", why: "a logged touch and no Lead Status" });
    assert.equal(statusTrueUp({ status: "", touches: [], history: clearedHistory }).cleared, undefined, "no touch, nothing to report");
    assert.equal(statusTrueUp({ status: "NEW", touches }).next, "CONTACTED");
    assert.equal(statusTrueUp({ status: "CONTACTED", touches, replies: [{}] }).next, "ENGAGED");
    assert.equal(statusTrueUp({ status: "CONTACTED", touches, customer: true }).next, "QUALIFIED");
});

test("a clear reports what the status was and the Denver day it was cleared", () => {
    assert.deepEqual(clearOf(clearedHistory), { was: "CONTACTED", cleared_at: "2026-10-08" });
    // Set back by a groom and cleared again: the latest clear is the one named.
    const twice = [at("", "2026-10-12T14:49:24Z"), at("CONTACTED", "2026-10-12T12:38:13Z"), ...clearedHistory];
    assert.deepEqual(clearOf(twice), { was: "CONTACTED", cleared_at: "2026-10-12" });
});

/* ---------- calls are touches ---------- */

test("an outbound call that was placed is a touch; an inbound one or a queued record is not", () => {
    assert.equal(isOutboundCall(call("1", "2026-10-08T15:31:50Z").properties), true);
    assert.equal(isOutboundCall(call("2", "2026-10-08T15:31:50Z", { hs_call_direction: "INBOUND" }).properties), false);
    assert.equal(isOutboundCall(call("3", "2026-07-01T12:39:07Z", { hs_call_direction: null, hs_call_status: "QUEUED" }).properties), false);
    assert.equal(isOutboundCall(call("4", "2026-10-08T15:31:50Z", { hs_call_status: "NO_ANSWER" }).properties), true, "an attempt nobody picked up is still a touch");
});

test("a call folds into the contact's touches in time order, as a call with nothing to read", () => {
    const per = foldTouches({
        // Newest first, as the search returns them.
        emails: [email("e3", "2026-09-28T16:00:00Z"), email("e2", "2026-09-21T16:00:00Z", { hs_email_open_count: "2" }), email("e1", "2026-09-14T16:00:00Z")],
        emailContacts: links([["e1", ["c1"]], ["e2", ["c1"]], ["e3", ["c1"]]]),
        calls: [
            call("k1", "2026-10-08T15:31:50Z", { hs_call_body: "<p>Left a voicemail.</p>" }),
            // A second dial the same day is the same touch.
            call("k2", "2026-10-08T15:23:53Z"),
            call("k3", "2026-10-08T15:40:00Z", { hs_call_direction: "INBOUND" }),
            call("k4", "2026-10-08T15:45:00Z"),
        ],
        callContacts: links([["k1", ["c1"]], ["k2", ["c1"]], ["k3", ["c1"]], ["k4", ["stranger"]]]),
        known: (ct) => ct === "c1",
    });
    assert.deepEqual([...per.keys()], ["c1"], "a contact the sweep does not hold is never read");
    const touches = per.get("c1").touches;
    assert.deepEqual(touches.map((t) => [t.kind, t.date]), [
        ["email", "2026-09-14"], ["email", "2026-09-21"], ["email", "2026-09-28"], ["call", "2026-10-08"],
    ]);
    const k = touches[3];
    assert.deepEqual([k.tracked, k.opens, k.clicks, k.thread, k.status, k.body], [false, null, null, "", "COMPLETED", "Left a voicemail."]);
    assert.equal(touches[1].opens, 2, "an email keeps its opens");
});

const daysSince = (now) => (day) => Math.floor((ms(now) - ms(`${day}T12:00:00Z`)) / 86400000);
const t = (kind, day, extra = {}) => ({ kind, date: day, ts: ms(`${day}T16:00:00Z`), tracked: kind === "email", opens: kind === "email" ? 0 : null, ...extra });

test("a call moves the cadence's clock: three silent sends and a call four days ago is waiting, not a close", () => {
    const now = "2026-10-12T06:00:00Z";
    const sends = [t("email", "2026-09-14"), t("email", "2026-09-21"), t("email", "2026-10-01")];
    const before = sectionOf({ status: "CONTACTED", lifecycle: "lead", touches: sends, daysSince: daysSince(now) });
    assert.equal(before.section, "closes_due");
    const after = sectionOf({ status: "CONTACTED", lifecycle: "lead", touches: [...sends, t("call", "2026-10-08")], daysSince: daysSince(now) });
    assert.deepEqual(after, { section: "waiting", why: "called 3 days ago; nothing due yet" });
});

test("a call counts toward the touches that decide bump, visit and close", () => {
    const now = "2026-10-20T06:00:00Z";
    const one = sectionOf({ status: "CONTACTED", lifecycle: "lead", touches: [t("call", "2026-10-08")], daysSince: daysSince(now) });
    assert.deepEqual(one, { section: "bumps_due", why: "one touch, a call, day 11, untracked" });
    const two = sectionOf({ status: "CONTACTED", lifecycle: "lead", touches: [t("email", "2026-10-01"), t("call", "2026-10-08")], daysSince: daysSince(now) });
    assert.equal(two.section, "visits_due");
    assert.match(two.why, /the last a call on day 11/);
    const reply = { date: "2026-10-05", ts: ms("2026-10-05T16:00:00Z") };
    const answered = sectionOf({ status: "CONTACTED", lifecycle: "lead", touches: [t("email", "2026-10-01"), t("call", "2026-10-08")], replies: [reply], daysSince: daysSince(now) });
    assert.notEqual(answered.section, "replies_owed", "a call after their reply answers it");
});

test("a called name shows the call on its line, and a call never reads as zero opens", () => {
    const row = {
        name: "Pat Example", contact_url: "https://app.example.test/0-1/1", company: "Example Heating", company_url: "https://app.example.test/0-2/1",
        status: "CONTACTED", fit: null, last_touch: "2026-10-08", last_touch_kind: "call", days_since_touch: 3,
        touches: [t("email", "2026-09-14"), t("call", "2026-10-08")], calls: 1, tracked_sends: 0, opens: 0, last_reply: "", why: "waiting",
    };
    const cells = portalRow(row);
    assert.equal(cells[4], "2026-10-08 (call)");
    assert.equal(cells[5], 3);
    assert.equal(cells[6], "2 (1 by phone)");
    assert.equal(cells[7], "untracked");
    const line = touchLine({ kind: "call", date: "2026-10-08", subject: "Voicemail about the writeup", status: "COMPLETED", body: "Left a voicemail." });
    assert.equal(line, "- called 2026-10-08 \"Voicemail about the writeup\" (completed; a call has no opens to read): Left a voicemail.");
    assert.doesNotMatch(line, /0 opens/);
    assert.match(touchLine({ kind: "email", date: "2026-09-14", subject: "Hello", tracked: true, opens: 2, clicks: 0, thread: "t1" }), /^- sent 2026-09-14 "Hello" \(2 opens, 0 clicks\) thread t1$/);
});
