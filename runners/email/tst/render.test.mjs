import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { canonicalize, firstDifference } from "../parity.mjs";
import { spawnSync } from "node:child_process";
import { bundlePath, CASES, FORMATS, goldenPath, render, renderRaw } from "./fixtures.mjs";

/*
 * The gate on the renderer. Every fixture renders through its runner's built
 * bundle and has to come back byte for byte what the frozen golden says, html and text
 * alike, so a padding, a column width or a conditional that moves is a failed
 * build rather than a surprise in Monday's inbox.
 *
 * The fixtures are invented: the names, the numbers and the urls are all made
 * up, because this repository is public and the drafts the runners actually
 * produce are not.
 */

for (const { runner, fixture } of CASES) {
	for (const format of FORMATS) {
		test(`${fixture} renders the frozen ${format}`, () => {
			const result = render(runner, format, fixture);
			assert.equal(result.status, 0, `exit ${result.status}: ${result.stderr}`);
			assert.equal(result.stderr, "");
			assert.equal(result.stdout, readFileSync(goldenPath(fixture, format), "utf8"));
		});
	}

	test(`${fixture} ends its html in exactly one newline`, () => {
		const out = render(runner, "html", fixture).stdout;
		assert.ok(out.endsWith("</html>\n"), "the page ends on the document and one newline");
	});
}

/*
 * The width gate on the two new text twins. The goldens only prove the text
 * has not moved; they cannot say it was right to begin with, and the first
 * recruiter twin was not: fixtures full of short invented strings froze a
 * layout that ran to 172 columns on a real draft and butted a long company
 * name straight into its reason. So the fixtures now carry long values, and
 * this holds every line to the 68 columns prose wraps at. The one excuse is a
 * line whose overflow is a single unbreakable last token (a url): take that
 * token away and the rest has to fit. The retro is exempt on purpose: its twin
 * is a byte for byte port of the jq one, wide session tables included.
 */
const TEXT_WIDTH = 68;
const columns = (line) => [...line].length;
const withoutLastToken = (line) => line.replace(/\S+$/, "");

for (const { runner, fixture } of CASES) {
	if (runner === "retro") continue;
	test(`${fixture} keeps its text inside ${TEXT_WIDTH} columns`, () => {
		const lines = render(runner, "text", fixture).stdout.split("\n");
		const wide = lines.filter(
			(line) => columns(line) > TEXT_WIDTH && columns(withoutLastToken(line)) > TEXT_WIDTH,
		);
		assert.deepEqual(wide, [], "lines past the wrap width for a reason other than one long token");
	});

	test(`${fixture} leaves no trailing whitespace in its text`, () => {
		const lines = render(runner, "text", fixture).stdout.split("\n");
		assert.deepEqual(
			lines.filter((line) => /\s$/.test(line)),
			[],
		);
	});
}

test("a long company name never runs into its reason", () => {
	const out = render("recruiter", "text", "recruiter").stdout;
	const draft = JSON.parse(readFileSync(new URL("../fixtures/recruiter.json", import.meta.url), "utf8"));
	const long = draft.rejected.find((row) => [...row.company].length >= 28);
	assert.ok(long, "the fixture carries a rejected company of 28 characters or more");
	const lines = out.split("\n");
	const lastCompanyWord = long.company.split(" ").at(-1);
	const firstReasonWords = long.reason.split(" ").slice(0, 3).join(" ");
	const reasonAt = lines.findIndex((line) => line === `  ${firstReasonWords}` || line.startsWith(`  ${firstReasonWords} `));
	assert.ok(reasonAt > 0, "the reason opens a line of its own");
	assert.ok(lines[reasonAt - 1].endsWith(lastCompanyWord), "and the company ends the line above it");
	assert.ok(!lines[reasonAt].includes(lastCompanyWord), "with none of the company on the reason's line");
});

/*
 * What a count line says about its drafts (ATE-630). The goldens freeze the
 * mixed case; these hold the rule: a line speaks for its own names, from the
 * fires that went, and says nothing about drafts when none did.
 */
const plumberDraft = () => JSON.parse(readFileSync(new URL("../fixtures/plumber.json", import.meta.url), "utf8"));
const countLines = (draft) => renderRaw("plumber", "text", JSON.stringify(draft)).stdout.split("\n").filter((line) => /^\s+\d+\. (Second touch|First touches)/.test(line));

test("a count line claims only the drafts that fired for its own names", () => {
	assert.deepEqual(countLines(plumberDraft()).map((line) => line.replace(/^\s+\d+\. /, "")), [
		"Second touch to people who opened: 1 draft ready",
		"First touches: 12 of 15 a week, 1 of 12 drafts ready",
		"Second touch to people who have not opened: 1",
	]);
});

test("a dry run, a missing token, and a week with no fires make no claim about drafts", () => {
	for (const outcome of ["dry run", "not fired", "failed"]) {
		const draft = plumberDraft();
		for (const fire of draft.drafting.fires) fire.outcome = outcome;
		assert.ok(countLines(draft).every((line) => !/draft/.test(line)), `${outcome}: ${countLines(draft).join(" | ")}`);
	}
	const none = plumberDraft();
	delete none.drafting;
	assert.ok(countLines(none).every((line) => !/draft/.test(line)));
});

test("a fire is one draft, spent on one name, never claimed by two people at one company", () => {
	const draft = plumberDraft();
	const [opened, unopened] = draft.owed.bump;
	// A second person at the opened name's company, on the other second touch line and on the same one.
	draft.owed.bump.push({ ...unopened, person: "Second Contact", company: opened.company, company_url: opened.company_url, contact_url: null });
	draft.owed.bump.push({ ...opened, person: "Third Contact", contact_url: null });
	assert.deepEqual(countLines(draft).filter((line) => /Second touch/.test(line)).map((line) => line.replace(/^\s+\d+\. /, "")), [
		"Second touch to people who opened: 2, 1 of 2 drafts ready",
		"Second touch to people who have not opened: 2",
	]);
});

/*
 * Completed weeks only (ATE-652, Forni 2026-10-12). Every golden renders for
 * 2026-W05, so W05 is the week the mail is for and is never a row; the
 * fixture hands it over the way a Monday run did, W01 to W05.
 */
const weekRowsOf = (draft) =>
	renderRaw("plumber", "text", JSON.stringify(draft))
		.stdout.split("\n")
		.filter((line) => /^\s+W\d+\s/.test(line))
		.map((line) => line.trim().split(/\s+/)[0]);
const sendWeek = (year, n) => ({ week: `${year}-W${String(n).padStart(2, "0")}`, tracked: 10 + n, opened: n, rate: null, responded: 0, respond_rate: null });

test("the week table never draws the week the mail is for, and keeps the oldest completed week", () => {
	const text = renderRaw("plumber", "text", JSON.stringify(plumberDraft())).stdout;
	const rows = text.split("\n").filter((line) => /^\s+W\d+\s/.test(line));
	assert.deepEqual(weekRowsOf(plumberDraft()), ["W4", "W3", "W2", "W1"]);
	assert.ok(!/^\s+W5\s/m.test(text), "the current week is never a row");
	assert.match(rows[0], /^\s+W4\s+30 \(\+10\)\s+18 \(\+6\)\s+60% \(0%\)/, "the newest completed week reads its change off the one before");
	assert.match(rows[3], /^\s+W1\s+10\s+6\s+60%\s+1\s+10%$/, "the oldest completed week is drawn, with no change since nothing completed sits beneath it");
});

test("a run handed only completed weeks draws all but the oldest, which gives the last row its change", () => {
	// The run on the night before its week: five completed weeks, four rows.
	const draft = plumberDraft();
	draft.health.weeks = [sendWeek(2025, 52), ...[1, 2, 3, 4].map((n) => sendWeek(2026, n))];
	assert.deepEqual(weekRowsOf(draft), ["W4", "W3", "W2", "W1"]);
	const text = renderRaw("plumber", "text", JSON.stringify(draft)).stdout;
	assert.ok(!/^\s+W52\s/m.test(text), "the fifth completed week is never drawn");
	assert.match(text, /^\s+W1\s+11 \(-51\)/m, "and the oldest row drawn reads its change off it");
});

test("the week table draws the completed weeks it is handed less one, however many arrive", () => {
	const draft = plumberDraft();
	draft.health.weeks = [40, 41, 42, 43, 44, 45, 46].map((n) => sendWeek(2025, n));
	assert.deepEqual(weekRowsOf(draft), ["W46", "W45", "W44", "W43", "W42", "W41"], "seven handed over, six drawn");
	draft.health.weeks = [3, 4].map((n) => sendWeek(2026, n));
	assert.deepEqual(weekRowsOf(draft), ["W4"]);
	draft.health.weeks = [4].map((n) => sendWeek(2026, n));
	assert.deepEqual(weekRowsOf(draft), ["W4"], "a lone week is drawn as it is");
	draft.health.weeks = [4, 5, 6].map((n) => sendWeek(2026, n));
	assert.deepEqual(weekRowsOf(draft), ["W4"], "the week the mail is for and any after it are never drawn");
	draft.health.weeks = Array.from({ length: 30 }, (_, i) => sendWeek(2025, i + 1));
	assert.equal(weekRowsOf(draft).length, 12, "and a runner that sends a year by mistake is capped");
});

test("a run handed no completed week draws no table at all", () => {
	const draft = plumberDraft();
	draft.health.weeks = [sendWeek(2026, 5)];
	const flag = draft.health.flag;
	assert.ok(flag, "the fixture carries a health flag");
	draft.health.flag = "";
	const text = renderRaw("plumber", "text", JSON.stringify(draft)).stdout;
	assert.deepEqual(weekRowsOf(draft), []);
	assert.ok(!text.includes("Opens and Responses by Week"));
	assert.ok(!renderRaw("plumber", "html", JSON.stringify(draft)).stdout.includes("Opens and Responses by Week"));
	// A flag still reaches the mail when no week is drawn.
	draft.health.flag = flag;
	assert.ok(renderRaw("plumber", "text", JSON.stringify(draft)).stdout.replace(/\s+/g, " ").includes(flag.slice(0, 30)));
	assert.ok(renderRaw("plumber", "html", JSON.stringify(draft)).stdout.includes("Flag"));
});

test("the groom line says what moved and nothing about a status left blank", () => {
	// A blank Lead Status has one meaning since ATE-656: the record needs its
	// status set, and the groom sets it. A draft from an older sweep that
	// still carries the retired list renders without it.
	const draft = plumberDraft();
	draft.groom.cleared = [{ name: "An Invented Name", company: "An Invented Company" }];
	const text = renderRaw("plumber", "text", JSON.stringify(draft)).stdout.replace(/\s+/g, " ");
	assert.match(text, /The groom moved \d+ compan(y|ies) and \d+ contacts? to match what the record already showed\./);
	assert.ok(!text.includes("cleared on purpose"));
	assert.ok(!text.includes("An Invented Name"));
});

test("an unknown runner fails loudly", () => {
	const result = render("nosuchrunner", "html", "retro", "retro");
	assert.equal(result.status, 1);
	assert.match(result.stderr, /unknown runner/);
	assert.equal(result.stdout, "");
});

/*
 * A bundle carries its own runner's page and the failure page, and nothing
 * else. A page from another runner is not in the file at all, so asking for
 * it has to read exactly like a name nobody has: one line, exit one, no page.
 */
test("a bundle asked for another runner's page fails the way an unknown runner does", () => {
	const result = render("plumber", "html", "plumber", "retro");
	assert.equal(result.status, 1);
	assert.equal(result.stderr, 'render: unknown runner "plumber"; one of retro, failure\n');
	assert.equal(result.stdout, "");
});

test("every bundle carries the failure page", () => {
	for (const runner of new Set(CASES.map((item) => item.runner))) {
		const result = spawnSync(
			process.execPath,
			[bundlePath(runner), "failure", "html", "--title", "Invented", "--reason", "an invented reason"],
			{ input: "the log's tail\n", encoding: "utf8" },
		);
		assert.equal(result.status, 0, `${runner}: ${result.stderr}`);
		assert.ok(result.stdout.includes("an invented reason"), `${runner} renders the reason`);
		assert.ok(result.stdout.endsWith("</html>\n"));
	}
});

test("an unknown format fails loudly", () => {
	const result = render("retro", "markdown", "retro");
	assert.equal(result.status, 1);
	assert.match(result.stderr, /unknown format/);
});

test("a draft that is not JSON fails loudly", () => {
	const result = renderRaw("retro", "html", "the agent wrote prose again");
	assert.equal(result.status, 1);
	assert.match(result.stderr, /not JSON/);
	assert.equal(result.stdout, "");
});

test("a render that throws fails loudly rather than writing half a page", () => {
	const result = renderRaw("retro", "html", '{"strava": 7}');
	assert.equal(result.status, 1);
	assert.match(result.stderr, /render threw/);
	assert.equal(result.stdout, "");
});

test("the parity canonicalizer ignores what only the markup differs on", () => {
	const jqShape = '<table><tr><td style="color:#FC4A1A; padding:2px;">a &#39;b&#39;</td></tr></table>';
	const reactShape =
		'<table><tbody><tr><td style="color:#fc4a1a;padding:2px">a &#x27;b&#x27;</td></tr></tbody></table>';
	assert.equal(firstDifference(canonicalize(jqShape), canonicalize(reactShape)), null);
});

test("the parity canonicalizer catches a declaration that moved", () => {
	const before = '<p style="padding:2px;color:#151515">x</p>';
	const after = '<p style="padding:3px;color:#151515">x</p>';
	assert.match(firstDifference(canonicalize(before), canonicalize(after)) ?? "", /padding/);
});
