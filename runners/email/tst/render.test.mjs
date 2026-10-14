import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { canonicalize, firstDifference } from "../parity.mjs";
import { spawnSync } from "node:child_process";
import { bundlePath, CASES, FORMATS, fixturePath, goldenPath, render, renderRaw } from "./fixtures.mjs";

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
 * The width gate on the recruiter's text twin. The goldens only prove the text
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
	const result = render("recruiter", "html", "recruiter", "retro");
	assert.equal(result.status, 1);
	assert.equal(result.stderr, 'render: unknown runner "recruiter"; one of retro, failure\n');
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

/*
 * The retro prints the stage the pull put on each row. A draft from before
 * the pull carried one still renders, with every company on the page under
 * No Stage and the week's stages at zero, rather than throwing or guessing.
 */
test("a retro row with no stage is listed under No Stage, never dropped", () => {
	const draft = JSON.parse(readFileSync(fixturePath("retro"), "utf8"));
	const tables = ["open_leads", "opportunities", "closed_leads"];
	const companies = [];
	for (const table of tables) {
		for (const row of draft.atelic[table]) {
			delete row.funnel;
			companies.push(row.company);
		}
	}
	draft.atelic.open_leads[0].funnel = "A Stage Nobody Knows";
	assert.equal(companies.length, 10);

	const text = renderRaw("retro", "text", JSON.stringify(draft));
	assert.equal(text.status, 0, text.stderr);
	assert.ok(text.stdout.includes("\nNo Stage · 10\n"), "the group is headed with its count");
	assert.match(text.stdout, /\n  No stage  10\n/);
	assert.match(text.stdout, /\n  Lead      0\n/);
	const listed = text.stdout.slice(text.stdout.indexOf("\nNo Stage · 10\n"));
	for (const company of companies) assert.ok(listed.includes(company), `${company} is listed`);

	const html = renderRaw("retro", "html", JSON.stringify(draft));
	assert.equal(html.status, 0, html.stderr);
	assert.ok(html.stdout.includes("No Stage · 10"));
	for (const company of companies) assert.ok(html.stdout.includes(company), `${company} is on the page`);
});

/*
 * The stages and their order are the pull's, read from `stages` on the week;
 * the page keeps no list of its own. A week that names them in another order
 * prints them in that order, and a stage the week does not name is no stage.
 */
test("the retro's funnel reads its stages and their order from the week", () => {
	const draft = JSON.parse(readFileSync(fixturePath("retro"), "utf8"));
	draft.atelic.stages = ["Closed", "Customer", "Opportunity", "SQL", "MQL"];
	const text = renderRaw("retro", "text", JSON.stringify(draft));
	assert.equal(text.status, 0, text.stderr);
	const funnel = text.stdout.slice(text.stdout.indexOf("\nThe Funnel\n"));
	const order = ["Closed", "Customer", "Oppty", "SQL", "MQL", "No stage"].map((label) =>
		funnel.indexOf(`\n  ${label} `),
	);
	assert.ok(
		order.every((at) => at >= 0),
		"every stage the week names, and No stage, is on the funnel",
	);
	assert.deepEqual([...order].sort((a, b) => a - b), order, "in the week's order");
	assert.match(funnel, /\n {2}No stage {2}2\n/, "the two Lead rows fall to No stage");
	assert.ok(!/\n {2}Lead {6}/.test(funnel), "a stage the week does not name is not printed");
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
