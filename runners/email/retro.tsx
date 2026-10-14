import { Fragment, type ReactNode } from "react";
import {
	asciiDowncase,
	asciiUpcase,
	Badge,
	Card,
	type Day,
	DayStrip,
	EmptyRow,
	Eyebrow,
	Footer,
	GroupRow,
	Masthead,
	ReadBlock,
	RecordStack,
	type RecordStackItem,
	Records,
	type RecordsCell,
	type RecordsColumn,
	Row,
	recordStackText,
	rpad,
	Scoreboard,
	StatStrip,
	SubEyebrow,
	TargetRow,
	textRead,
	textSection,
	textTable,
	textTarget,
	TitleCard,
	WhatMoved,
	wrap,
} from "@atelic-action/ui/email";
import { renderEmail } from "@atelic-action/ui/email/render";
import {
	alt,
	fromDate,
	isoDate,
	jqToString,
	num,
	numberString,
	rangeOf,
	slice,
	titlecase,
	two,
	unindent,
	weekdayName,
	weekNumber,
	word,
} from "./jq";
import { RecordsRow, SessionsRow, SpacerRow } from "./local";
import { recordCard } from "./records";
import type { Page, RenderContext } from "./types";

/*
 * The Retro email, ported from the jq renderer it replaced (git history,
 * 4985f1a9). An overview card
 * holding every target at a glance and what moved, then one card per area,
 * each opening on its read. The sessions and the day strip are built from
 * strava.json here, never from the model, so the only numbers the model
 * supplies are the graded coverage counts.
 *
 * The plain text half was held to the jq twin byte for byte, and the goldens
 * in tst/ are that agreement frozen, so a change to a space here changes a
 * golden too.
 */

type CoverageRow = { modality?: unknown; logged?: unknown; target?: unknown; note?: unknown };
type TakeoutRow = { day?: unknown; vehicle?: unknown };
type MovedRow = { subject?: unknown; event?: unknown };
type AtelicCoverageRow = { measure?: unknown; logged?: unknown; target?: unknown };

type Activity = {
	name?: string | null;
	sport_type?: string | null;
	start_date_local?: string | null;
	distance_mi?: number | null;
	moving_min?: number | null;
	athlete_count?: number | null;
};

type FunnelRow = {
	company?: unknown;
	funnel?: unknown;
	status?: unknown;
	kind?: unknown;
	touches?: unknown;
	opens?: unknown;
	replied?: unknown;
	stage?: string | null;
	cash?: string | null;
	reason?: unknown;
	last_touch?: unknown;
	last_reply?: unknown;
	/** A sentence the pull adds to a row it wants read twice (a half applied close). */
	note?: unknown;
};

export type RetroDraft = {
	headline?: unknown;
	coverage?: CoverageRow[] | null;
	what_moved?: MovedRow[] | null;
	what_moved_note?: unknown;
	movement_read?: unknown;
	takeout?: TakeoutRow[] | null;
	takeout_read?: unknown;
	atelic_read?: unknown;
	blind_spots?: unknown;
	strava?: Activity[] | null;
	atelic?: {
		/** The funnel's stage names in funnel order, from the pull. */
		stages?: string[] | null;
		coverage?: AtelicCoverageRow[] | null;
		open_leads?: FunnelRow[] | null;
		opportunities?: FunnelRow[] | null;
		closed_leads?: FunnelRow[] | null;
	} | null;
};

/* ---------- the week, derived ---------- */

/** Strava's sport types in the words the week is graded in. */
const KINDS: Record<string, string> = {
	Run: "Run",
	TrailRun: "Run",
	VirtualRun: "Run",
	WeightTraining: "Lift",
	Yoga: "Yoga",
	RockClimbing: "Climb",
	Walk: "Walk",
	Hike: "Hike",
	Ride: "Ride",
	Swim: "Swim",
};

/**
 * PT is not a lift. It is logged as WeightTraining under the name "2026 PT"
 * or "2026 PT Achilles", so it is matched on the name, never the sport type,
 * and graded against its own target (Forni, W41, when the retro counted a PT
 * session as the week's one lift).
 */
const PT_NAME = /^(\d{4}\s+)?PT\b(?!\.)/;

/** The sport types a PT session is logged under; a Run named "PT Reyes" stays a run. */
const PT_SPORTS = new Set(["WeightTraining", "Workout"]);

function kindOf(activity: Activity): string {
	if (PT_SPORTS.has(alt(activity.sport_type, "")) && PT_NAME.test(cleanName(activity).trim())) return "PT";
	const mapped = KINDS[alt(activity.sport_type, "")];
	return mapped === undefined ? alt(activity.sport_type, "Session") : mapped;
}

/**
 * The same test the prompt grades by: a run Strava matched other athletes
 * into, or one whose name says who it was with.
 */
function isSocial(activity: Activity): boolean {
	if (kindOf(activity) !== "Run") return false;
	return alt(activity.athlete_count, 1) >= 2 || /diego|drc|sprc/i.test(alt(activity.name, ""));
}

/** Session names lose their leading emoji; the table is for reading. */
function cleanName(activity: Activity): string {
	return alt(activity.name, "").replace(/^[^A-Za-z0-9'"(]+/, "");
}

type Session = {
	day: string;
	date: string;
	name: string;
	kind: string;
	social: boolean;
	minutes: number;
	miles: number | null;
};

function sessions(draft: RetroDraft): Session[] {
	const activities = [...alt(draft.strava, [])];
	activities.sort((a, b) => {
		const left = alt(a.start_date_local, "");
		const right = alt(b.start_date_local, "");
		return left < right ? -1 : left > right ? 1 : 0;
	});
	return activities.map((activity) => {
		const date = slice(alt(activity.start_date_local, ""), 0, 10);
		const miles = alt(activity.distance_mi, 0);
		return {
			day: weekdayName(fromDate(`${date}T00:00:00Z`)),
			date,
			name: cleanName(activity),
			kind: kindOf(activity),
			social: isSocial(activity),
			minutes: alt(activity.moving_min, 0),
			miles: miles > 0 ? miles : null,
		};
	});
}

function days(monday: string, week: Session[]): Day[] {
	const start = fromDate(`${monday}T00:00:00Z`);
	return rangeOf(7).map((offset) => {
		const at = start + offset * 86400;
		const date = isoDate(at);
		return {
			label: weekdayName(at),
			entries: week
				.filter((session) => session.date === date)
				.map((session) => ({
					name: session.kind,
					strong: session.social,
					badge: session.social ? "S" : "",
				})),
		};
	});
}

function rangeLine(monday: string, sunday: string): string {
	const start = fromDate(`${monday}T00:00:00Z`);
	return `${weekdayName(start)}, ${monday} to ${weekdayName(start + 6 * 86400)}, ${sunday}`;
}

/* ---------- the targets ---------- */

type Target = { label: string; logged: number; target: number | null; note: string };

/** A label as Title Case, an acronym (PT) kept in capitals. */
function modalityLabel(value: unknown): string {
	// Split the way titlecase does (underscores are spaces) so the words line up.
	const acronyms = jqToString(alt(value, "")).replace(/_/g, " ").split(" ");
	return titlecase(value)
		.split(" ")
		.map((word, index) => (/^[A-Z]{2,}$/.test(acronyms[index] ?? "") ? acronyms[index] : word))
		.join(" ");
}

/** The model's coverage, with its note. */
function movementTargets(draft: RetroDraft): Target[] {
	return alt(draft.coverage, []).map((row) => ({
		label: modalityLabel(row.modality),
		logged: num(row.logged),
		target: num(row.target),
		note: jqToString(alt(row.note, "")),
	}));
}

/** Takeout as a bare count: nothing measures it. */
function takeoutTarget(draft: RetroDraft): Target {
	const orders = alt(draft.takeout, []);
	return {
		label: "Takeout",
		logged: orders.length,
		target: null,
		note:
			orders.length === 0
				? "No confirmed orders"
				: orders
						.map((order) => `${jqToString(alt(order.day, ""))} ${jqToString(alt(order.vehicle, ""))}`)
						.join(" · "),
	};
}

/** The outreach measures from HubSpot, each graded against its target. */
function atelicTargets(draft: RetroDraft): Target[] {
	return alt(draft.atelic?.coverage, []).map((row) => {
		const logged = num(row.logged);
		const target = num(row.target);
		return {
			label: titlecase(row.measure),
			logged,
			target,
			note: logged >= target ? "Target met" : `${word(target - logged)} short`,
		};
	});
}

function graded(draft: RetroDraft): Target[] {
	return [...movementTargets(draft), ...atelicTargets(draft)];
}

function verdict(draft: RetroDraft): string {
	const all = graded(draft);
	if (all.length === 0) return "No targets graded.";
	const hit = all.filter((row) => row.target !== null && row.logged >= row.target).length;
	return `${word(hit)} of ${asciiDowncase(word(all.length))} targets hit.`;
}

/* ---------- the funnel ---------- */
/*
 * The stages and their order come from the pull, as `stages` on the week
 * (Lead, MQL, SQL, Opportunity, Customer, Closed today), and which one a
 * company sits in comes from the pull too, as `funnel` on every row. The
 * rule that decides both lives with the pull, in the Atelic repo, and this
 * page keeps no list of its own: it only prints what it is given. A row that
 * carries no stage, or one the week does not name, is listed under No Stage
 * after the rest, so it is still on the page and nobody guesses where it
 * belongs.
 */

const NO_STAGE = "No Stage";

/** A stage name too wide for the stat strip, shortened; any other reads as it is. */
const STAGE_LABELS: Record<string, string> = { Opportunity: "Oppty" };

/** The week's stage names, in funnel order. */
function stageNames(draft: RetroDraft): string[] {
	return alt(draft.atelic?.stages, []).filter((name): name is string => typeof name === "string");
}

type Staged = FunnelRow & { funnel: string; record: (row: FunnelRow) => RecordStackItem };

function staged(
	rows: FunnelRow[] | null | undefined,
	record: (row: FunnelRow) => RecordStackItem,
	names: string[],
): Staged[] {
	return alt(rows, []).map((row) => ({
		...row,
		funnel: typeof row.funnel === "string" && names.includes(row.funnel) ? row.funnel : NO_STAGE,
		record,
	}));
}

/** Every row with its stage, and the card its own table would draw for it. */
function funnel(draft: RetroDraft, names: string[]): Staged[] {
	const atelic = alt(draft.atelic, {});
	return [
		...staged(atelic.open_leads, leadRecord, names),
		...staged(atelic.opportunities, dealRecord, names),
		...staged(atelic.closed_leads, closedRecord, names),
	];
}

/*
 * Every stage lists its companies on a RecordStack, the name on its own line
 * so it wraps instead of squashing on a phone, the way the plumber lists its
 * stages. A fixed column table left the name a letter wide at phone width.
 * A lead reads its status as the badge, its counts on the meta line, and its
 * last touch as the note; a deal reads its stage and its cash; a closed lead
 * reads its outcome and its reason.
 */

/*
 * All three go through the shared card in records.ts, the same one the
 * Pipeline mail uses, so a company reads the same way in both mails
 * (Forni, 2026-09-29). The retro's rows carry counts as strings and no day
 * clock, so the card gets what the week table knows and nothing invented.
 */

/** "Wed 10-07" from 2026-10-07, the way the retro writes a day; "" for none. */
function replyDay(row: FunnelRow): string {
	const date = jqToString(alt(row.last_reply, ""));
	if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return "";
	return `${weekdayName(fromDate(`${date}T00:00:00Z`))} ${slice(date, 5)}`;
}

/**
 * The week's last touch, named by the pull (First, Bump, Reply, Drop off) and
 * shown as it is; a draft from before the pull carried one falls back to the
 * week's touch kinds, title cased the way it always was.
 */
function lastTouchOf(row: FunnelRow): string {
	const named = jqToString(alt(row.last_touch, ""));
	const kind = titlecase(alt(row.kind, ""));
	return named !== "" ? named : kind === "None" ? "" : kind;
}

function leadRecord(row: FunnelRow): RecordStackItem {
	const kind = lastTouchOf(row);
	const touches = row.touches === null || row.touches === undefined ? null : Number(row.touches);
	const opens = row.opens === null || row.opens === undefined || row.opens === "-" ? null : Number(row.opens);
	const replied = replyDay(row);
	// The pull's own note on a row (a half applied close) rides on the muted
	// line under the card, after the last touch.
	const notes = [kind === "" ? "" : `Last touch: ${kind}`, jqToString(alt(row.note, ""))].filter((n) => n !== "");
	return recordCard({
		title: row.company,
		badge: row.status,
		// A dated reply rides on the clock ("replied Wed 10-07"); the bare
		// word is only for a row that says yes with no day.
		touch: { touches, opens, replied: replied === "" && row.replied === "yes", lastReply: replied },
		note: notes.length === 0 ? undefined : notes.join(" · "),
	});
}

/**
 * A deal that heard back this week says so on the funnel, a Replied pill and
 * the day, rather than reading as a stage that held (a deal at Proposal in
 * W41, with its reply that week on the record).
 */
function dealRecord(row: FunnelRow): RecordStackItem {
	const cash = alt(row.cash, "-");
	const replied = replyDay(row);
	// The reason and the pull's note (a lost deal with no reason on the
	// company) ride on the muted line, the way a lead's note does.
	const reason = jqToString(alt(row.reason, ""));
	const notes = [
		replied === "" ? "" : `Replied ${replied}`,
		reason === "" || reason === "-" ? "" : `Reason: ${titlecase(reason.replace(/_/g, " "))}`,
		jqToString(alt(row.note, "")),
	].filter((n) => n !== "");
	return recordCard({
		title: row.company,
		badge: replied !== "" || row.replied === "yes" ? "Replied" : undefined,
		deal: { stage: alt(row.stage, ""), amount: null, cash: cash === "-" ? "" : cash },
		note: notes.length === 0 ? undefined : notes.join(" · "),
	});
}

function closedRecord(row: FunnelRow): RecordStackItem {
	const reason = alt(row.reason, "-");
	const notes = [replyDay(row) === "" ? "" : `Replied ${replyDay(row)}`, jqToString(alt(row.note, ""))].filter(
		(n) => n !== "",
	);
	return recordCard({
		title: row.company,
		badge: row.stage === "Closed Lost" ? "Closed Lost" : row.status,
		closed: reason === "-" ? null : { reason },
		note: notes.length === 0 ? undefined : notes.join(" · "),
	});
}

type Stage = {
	name: string;
	label: string;
	rows: Staged[];
	records: RecordStackItem[];
};

/**
 * The card a stage draws its rows on, where the stage decides it rather than
 * the table the row came in on: a lead whose company became a customer reads
 * as a deal, and a deal that was lost reads as closed. A stage not named here
 * draws each row on its own table's card.
 */
const STAGE_CARDS: Record<string, (row: FunnelRow) => RecordStackItem> = {
	Opportunity: dealRecord,
	Customer: dealRecord,
	Closed: closedRecord,
};

/** Each stage with its rows and the records that list them, in the week's order. */
function stages(draft: RetroDraft): Stage[] {
	const names = stageNames(draft);
	const all = funnel(draft, names);
	const known: Stage[] = names.map((name) => {
		const rows = all.filter((row) => row.funnel === name);
		const card = STAGE_CARDS[name];
		return {
			name,
			label: STAGE_LABELS[name] ?? name,
			rows,
			records: rows.map((row) => (card ? card(row) : row.record(row))),
		};
	});
	// A row with no stage is drawn by the card of the table it came in on,
	// and the group shows only when there is one, so a current pull reads
	// exactly as it did.
	const rest = all.filter((row) => row.funnel === NO_STAGE);
	if (rest.length === 0) return known;
	return [...known, { name: NO_STAGE, label: "No stage", rows: rest, records: rest.map((row) => row.record(row)) }];
}

/* ---------- html ---------- */

function sessionsTable(week: Session[]): ReactNode {
	const columns: RecordsColumn[] = [
		{ label: "Day" },
		{ label: "Session" },
		{ label: "Type", right: true },
		{ label: "Min", right: true },
		{ label: "Mi", right: true },
	];
	const rows: RecordsCell[][] = week.map((session) => [
		{ value: session.day, mono: true, muted: true },
		{ value: session.name },
		{
			value: session.kind,
			html: (
				<>
					{session.kind}
					{session.social ? <Badge letter="S" /> : null}
				</>
			),
		},
		{ value: numberString(session.minutes), mono: true },
		{ value: session.miles === null ? "" : two(session.miles), mono: true },
	]);
	for (const line of totalLines(week)) {
		rows.push([
			{ value: "" },
			{ value: line.label },
			{ value: "" },
			{ value: numberString(line.minutes), mono: true },
			{ value: two(line.miles), mono: true },
		]);
	}
	return <Records columns={columns} rows={rows} />;
}

function totalMinutes(week: Session[]): number {
	return week.reduce((sum, session) => sum + session.minutes, 0);
}

function totalMiles(week: Session[]): number {
	return week.reduce((sum, session) => sum + alt(session.miles, 0), 0);
}

const KIND_PLURALS: Record<string, string> = {
	Run: "runs",
	Ride: "rides",
	Walk: "walks",
	Workout: "workouts",
	Swim: "swims",
	Hike: "hikes",
};

/** "runs, rides, workouts": every kind that carried miles, in the order the week met them. */
function mileageKinds(week: Session[]): string[] {
	const kinds: string[] = [];
	for (const session of week) {
		if (session.miles === null || kinds.includes(session.kind)) continue;
		kinds.push(session.kind);
	}
	return kinds.map((kind) => (kind === "PT" ? kind : KIND_PLURALS[kind] ?? asciiDowncase(kind)));
}

type TotalLine = { label: string; minutes: number; miles: number };

/**
 * The week's mileage is every session's miles, rides and workouts as much as
 * runs, and the total says what it holds so it is never read as running
 * alone (the W41 narrative did, past a 4.93 mile ride). When anything but a
 * run carried miles, the run only figure sits on the line under it.
 */
function totalLines(week: Session[]): TotalLine[] {
	const kinds = mileageKinds(week);
	const lines: TotalLine[] = [
		{
			label: kinds.length === 0 ? "Total" : `Total: ${kinds.join(", ")}`,
			minutes: totalMinutes(week),
			miles: totalMiles(week),
		},
	];
	const runs = week.filter((session) => session.kind === "Run");
	if (runs.length > 0 && kinds.some((kind) => kind !== "runs")) {
		lines.push({ label: "Runs only", minutes: totalMinutes(runs), miles: totalMiles(runs) });
	}
	return lines;
}

export function retroHTML(input: unknown, context: RenderContext): string {
	const draft = input as RetroDraft;
	const week = sessions(draft);
	const movement = [...movementTargets(draft), takeoutTarget(draft)];
	const atelic = atelicTargets(draft);
	const funnelStages = stages(draft);
	const filled = funnelStages.filter((stage) => stage.rows.length > 0);
	const moved = alt(draft.what_moved, []);
	const movedNote = jqToString(alt(draft.what_moved_note, ""));
	const headline = jqToString(alt(draft.headline, ""));

	return renderEmail({
		title: `${context.week} Retro`,
		preheader: headline,
		children: (
			<>
				<Masthead title={`Retro · Week ${weekNumber(context.week)}`} />
				<TitleCard
					eyebrowText={rangeLine(context.monday, context.sunday)}
					headlineLines={[verdict(draft)]}
					lede={headline}
					stats={
						<>
							<Scoreboard>
								<GroupRow text="Movement" first={true} />
								{movement.map((row, index) => (
									<TargetRow
										// biome-ignore lint/suspicious/noArrayIndexKey: a row's position is its identity
										key={index}
										text={row.label}
										logged={row.logged}
										target={row.target}
										note={row.note}
										last={index === movement.length - 1}
									/>
								))}
								{atelic.length === 0 ? null : (
									<>
										<GroupRow text="Atelic" first={false} />
										{atelic.map((row, index) => (
											<TargetRow
												// biome-ignore lint/suspicious/noArrayIndexKey: a row's position is its identity
												key={index}
												text={row.label}
												logged={row.logged}
												target={row.target}
												note={row.note}
												last={index === atelic.length - 1}
											/>
										))}
									</>
								)}
							</Scoreboard>
							{moved.length > 0 || movedNote !== "" ? (
								<WhatMoved
									items={moved.map((item) => ({
										subject: jqToString(item.subject),
										event: jqToString(item.event),
									}))}
									note={movedNote}
								/>
							) : (
								<SpacerRow />
							)}
						</>
					}
				/>

				<Eyebrow text="Movement" />
				<Card>
					<ReadBlock text={jqToString(alt(draft.movement_read, ""))} divider={true} />
					<SubEyebrow text="By Day" />
					<DayStrip days={days(context.monday, week)} last={false} />
					<SubEyebrow text={`Sessions · ${week.length}`} />
					{week.length === 0 ? (
						<EmptyRow text="Nothing logged in Strava this week." />
					) : (
						<SessionsRow>{sessionsTable(week)}</SessionsRow>
					)}
				</Card>

				<Eyebrow text="Takeout" />
				<Card>
					<ReadBlock text={jqToString(alt(draft.takeout_read, ""))} divider={false} />
				</Card>

				<Eyebrow text="Atelic" />
				<Card>
					<ReadBlock text={jqToString(alt(draft.atelic_read, ""))} divider={true} />
					<Row last={false}>
						<StatStrip
							stats={funnelStages.map((stage) => ({ n: stage.rows.length, label: stage.label }))}
						/>
					</Row>
					{filled.map((stage, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: a stage's position is its identity
						<Fragment key={index}>
							<SubEyebrow text={`${stage.name} · ${stage.rows.length}`} />
							<RecordsRow last={index === filled.length - 1}>
								<RecordStack records={stage.records} />
							</RecordsRow>
						</Fragment>
					))}
				</Card>

				<Eyebrow text="Blind Spots" />
				<Card>
					<ReadBlock text={jqToString(alt(draft.blind_spots, ""))} divider={false} />
				</Card>

				<Footer meta={context.meta} />
			</>
		),
	});
}

/* ---------- plain text ---------- */

export function retroText(input: unknown, context: RenderContext): string {
	const draft = input as RetroDraft;
	const week = sessions(draft);
	const number = weekNumber(context.week);
	const movement = [...movementTargets(draft), takeoutTarget(draft)];
	const atelic = atelicTargets(draft);
	const funnelStages = stages(draft);
	const moved = alt(draft.what_moved, []);
	const movedNote = jqToString(alt(draft.what_moved_note, ""));

	let out = `ATELIC · RETRO · WEEK ${number}\n${rangeLine(context.monday, context.sunday)}\n\n`;
	out += `${asciiUpcase(verdict(draft))}\n\n`;
	out += `${unindent(wrap(jqToString(alt(draft.headline, ""))))}\n\n\n`;
	out += `SCOREBOARD\n\nMovement\n${movement.map(textTarget).join("\n")}\n`;
	if (atelic.length > 0) out += `\nAtelic\n${atelic.map(textTarget).join("\n")}\n`;
	if (moved.length > 0 || movedNote !== "") {
		out += `\nWhat Moved\n${moved
			.map((item) => `  ${jqToString(item.subject)} ${jqToString(item.event)}`)
			.join("\n")}`;
		if (movedNote !== "") out += `\n  ${movedNote}`;
		out += "\n";
	}

	out += textSection("Movement") + textRead(jqToString(alt(draft.movement_read, "")));
	out += `\nBy Day\n${days(context.monday, week)
		.map((day) => {
			const entries = day.entries
				.map((entry) => `${entry.name}${entry.strong ? " (S)" : ""}`)
				.join(" · ");
			return `  ${rpad(day.label, 5)}${entries === "" ? "Rest" : entries}`;
		})
		.join("\n")}\n`;
	out += `\nSessions · ${week.length}\n`;
	out +=
		week.length === 0
			? "  Nothing logged in Strava this week."
			: textTable(
					["Day", "Session", "Type", "Min", "Mi"],
					[
						...week.map((session) => [
							session.day,
							session.name,
							`${session.kind}${session.social ? " (S)" : ""}`,
							numberString(session.minutes),
							session.miles === null ? "" : two(session.miles),
						]),
						...totalLines(week).map((line) => [
							"",
							line.label,
							"",
							numberString(line.minutes),
							two(line.miles),
						]),
					],
					[3, 4],
				);
	out += "\n";

	out += textSection("Takeout") + textRead(jqToString(alt(draft.takeout_read, "")));

	out += textSection("Atelic") + textRead(jqToString(alt(draft.atelic_read, "")));
	out += `\nThe Funnel\n${funnelStages
		.map((stage) => `  ${rpad(stage.label, 10)}${stage.rows.length}`)
		.join("\n")}\n`;
	out += funnelStages
		.filter((stage) => stage.rows.length > 0)
		.map((stage) => `\n${stage.name} · ${stage.rows.length}\n${recordStackText(stage.records)}\n`)
		.join("");

	out += textSection("Blind Spots") + textRead(jqToString(alt(draft.blind_spots, "")));
	out += `\n\n${context.meta}\n`;
	return out;
}

/** What the bundle built for this runner renders: build.mjs aliases "runner-page" to this file. */
export const page: Page = { html: retroHTML, text: retroText };
