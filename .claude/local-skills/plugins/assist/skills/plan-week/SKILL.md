---
name: plan-week
description: Weekly planning, calendar management, and Sunday planning session task slotting. Use this skill whenever the user mentions weekly planning, the Sunday planning session (formerly the Monday planning session), slotting tasks, finding free time, checking what their week looks like, moving or swapping calendar events, or wants help fitting something into their week. Also trigger when the user asks about V2MOM measure coverage. Training plan scheduling lives in `assist:plan-training` and meal planning in `assist:plan-meals`; this skill calls into both during the weekly planning session.
argument-hint: "[plan | week | slot | move]"
allowed-tools:
  - Skill
  - Bash
  - mcp__claude_ai_Strava__*
  - Read
  - Edit
  - Write
  - AskUserQuestion
---

# Plan Week Assist

Help Forni plan his week: review the calendar, slot Todoist tasks into open time, and make calendar adjustments while respecting training and recovery constraints.

## Before Every Invocation

1. Read this skill's local [learned-rules.md](learned-rules.md) for prior corrections about how Forni wants planning to run
2. Read the plugin-wide [learned-rules.md](../../learned-rules.md) for any schedule-specific corrections
3. Read the weekly template: `~/Eudaimonia/schedule.md`
4. Determine the ISO week being planned: the upcoming Monday through Sunday. The session runs on the Sunday before it, so the week closing today is the retro's subject (Review Week), never the planning target
5. **Cut and enter a `wk-<ISO week>` worktree** in each repo the session will touch (Eudaimonia for planning artifacts, homebase for skill or config edits). Planning runs in an isolated worktree, never on a shared branch, so a branch switch in another terminal cannot move the ground under the session. All planning edits land in the worktree copy.

**Calendar access:** reads and writes go through the `gws` CLI via Bash, not a Google Calendar MCP. The personal calendar is `🌱 Life` (`mattforni@gmail.com`); find IDs with `gws calendar calendarList list`. Pull with `gws calendar events list`, patch a recurring series with `gws calendar events patch` (only the fields you change), create with `events insert`, delete a whole series by its `recurringEventId`. The `gws` output is prefixed with a `Using keyring backend` line, so strip it before parsing JSON. See `~/Eudaimonia/Admin/Tools/gws.md` for the exact invocation syntax: `calendarId` goes inside `--params`, the event body (and any array fields) go in `--json`.

**Event coloring goes through named labels, never `colorId`.** Every event write sets `eventLabelId` in the `--json` body, with `eventLabelVersion: 1` in `--params`. Putting `eventLabelId` in `--params` is silently dropped and the label never applies (bit on insert 2026-07-26). The label table (names, hexes, IDs) lives in `~/Eudaimonia/Admin/Tools/google-calendar.md`. The legacy `colorId` field is a backward compat synthesis that returns different values from different endpoints; never read it, never write it.

## Source of Truth

The weekly template lives at `~/Eudaimonia/schedule.md`. It defines the recurring skeleton: work hours, training sessions, transitions, recovery, and community commitments. The Google Calendar holds the live reality, including one off events and placed work blocks.

When there is a conflict between the template and the calendar, the calendar is the current truth. The template describes what a "normal" week should look like.

## Constraints

These constraints exist for real physiological and practical reasons. They are not suggestions.

**Transitions**: Every movement between locations gets a 30 minute buffer. This is not travel time alone; it includes the mental shift between contexts. Do not schedule events back to back without a transition unless they are at the same location. Transitions are placeholders: when a one off meeting claims part of a transition's time slot that week, shrink that week's instance to fit the remaining gap rather than flagging it as a conflict. This applies only to the single affected instance; the standing transition series is always 30 minutes and is never resized (see `assist:plan-training` learned rules).

**Work hours**: No W2 as of 2026-06-29 and the weekly skeleton is being rebuilt. Treat `~/Eudaimonia/schedule.md` as the source of truth for anchors and do not assume office days.

**Training adjacent constraints**: Cold plunge sequencing (4 to 6 hour gap after strength), sauna timing post strength, and Thursday SPRC morning protection live in the `assist:plan-training` skill. Defer to that skill when validating moves of training, sauna, contrast, or Thursday morning events.

**Personal anchors (not conflicts)**: Forni's last meal cutoff (currently 19:30) and lights out (currently 22:00) live in `~/Eudaimonia/schedule.md` Daily Anchors. These are personal constraints Forni manages himself — do not flag events that push past them as conflicts.

## Mode: plan (default)

The Sunday planning session. This is the primary use case. It runs isolated in a worktree and moves through eight phases: look back quietly, then gather, then clean, then place, then show. Every phase that generates work runs before the phase that places work, with one deliberate exception: Plan Meals runs after Plan Tasks and slots its own generated work inline (see Phase 7).

1. **Review Week** — look back, quietly, before any agents
2. **Set Intention** — theme and banner
3. **Sweep Inbox** — email becomes tasks
4. **Sweep Calendar** — make the calendar true
5. **Plan Training** — every training event placed
6. **Plan Tasks** — work slate first, then personal, then slot
7. **Plan Meals** — food plus its calendar footprint, slotted inline
8. **Present Week** — the finished board

### Agent Fan Out (After the Retro, Never Before)

Review Week runs solo: no background agents are dispatched until the retro dialogue closes. Boards landing mid felt sense question kept interrupting and flooding the session on 2026-08-09; the quiet comes first. The moment Review Week closes, dispatch the three background specialists in parallel:

- **clerk** (`~/.claude/agents/clerk.md`): pulls the full inbox and returns the proposed disposition board consumed by Sweep Inbox.
- **groomer** (`~/.claude/agents/groomer.md`): triages the Linear queue and returns the work decision slate consumed by Plan Tasks.
- **planner** (`~/.claude/agents/planner.md`): makes the wide pulls (calendar week with labels, Todoist Schedule filter plus the Sunday drop date, Strava week, overconsumption count) and runs the transition and overlap lint on the calendar pull.

**The planner assembles the unified brief.** When clerk's board and groomer's slate return, resume planner with both; it merges everything into one three tier brief (Decisions, Handled, FYI, per the Signal Contract below) that the rest of the session works from. Boards landing in the background never interrupt a dialogue in progress; fold each in at the phase that consumes it.

**Dispatch briefs that authorize external writes must quote Forni's authorizing words verbatim, never a paraphrase.** The agent executing a write needs the exact words that granted it; a relayed authorization in the dispatcher's own words tripped the security layer on 2026-08-09.

### Signal Contract

Every phase presents in the same shape, leading with judgment and compressing the rest:

- **Decisions**: judgment calls only, one line each, ranked most consequential first, each carrying a proposed default so a nod is enough.
- **Handled**: the rollup of actions taken under rule cover after the phase nod, grouped with confidence bands:
  - **High**: an exact codified rule covers the action. Group by action type and cite the rule.
  - **Medium**: a rule family applied with interpretation. List each item individually for spot check.
  - **Below medium** is by definition a Decision, never an auto handled action.
- **FYI**: counted one liners (event count, task count, mileage, order count). Detail on ask.

Full boards (every thread, every task, every event) surface only on request. The brief leads with decisions, never inventories.

**The contract carries hard numeric limits** on how many items ride in one message and how many decisions ride with them. They live in [learned-rules.md](learned-rules.md), they govern every phase's presentation, and they override anything here.

### Phase 1: Review Week

Look back at the week that is ending, read as a **compass, not a verdict**. This phase is a quiet dialogue: the agent fan out waits until it closes, so nothing lands mid question. The session makes its own two light pulls for the quantitative spines, then follows the felt sense.

- **Movement (Strava):** pull the just closed ISO week with `mcp__claude_ai_Strava__list_activities` (`range_start` / `range_end`). Summarize the runs, lifts, hikes, and swims against the V2MOM frame. The connector returns metric, so convert (miles = m / 1609.344, feet = m * 3.28084). This is the broad life movement view; the training specific coverage retro runs later inside `assist:plan-training`.
- **Overconsumption (Gmail):** the conscious consumption measure has no automatic log, so build one. Count the week's delivery confirmations via `gws gmail`, searching `(Domino OR "Illegal Pete" OR DoorDash OR Grubhub OR "Uber Eats" OR Postmates) after:YYYY/MM/DD before:YYYY/MM/DD` bounding the week. Gmail's `before:` is exclusive, so set it to the Monday after the week so Sunday's orders are not missed. Then confirm each hit is a real order.
- **Felt sense:** present the two spines tightly, name the one or two things that stand out lightly, then ask the open felt sense question (a word or two for the week). Follow the live thread, and surface the one thing to carry forward. A deeper dialogue can invoke `assist:reflect` in `week` mode, but the planning retro carries the spines itself.

Read it all gently. In the current frame the retro course corrects, it does not grade. Surface anything that should become a planning input (a task, a guardrail, a measure to watch) and carry it into the phases below. When the dialogue closes, dispatch the fan out (see Agent Fan Out above) and move to Set Intention.

### Phase 2: Set Intention

The look forward, the mirror of Review Week. Holding the retro's carry forward as the lens, name **one to three focuses** for the week ahead, and convert each into a concrete planning input:

- An **anchor to protect** (a held block, a wind down ritual)
- A **block to confirm or create** on the calendar
- A **measure to watch** through the week

**Name the week's theme, and write it onto the calendar.** Set Intention produces a short theme for the week, a word or a brief phrase (for example "Presence", or "Point the Energy at the Forge"). The theme is the compass, not a task. Confirm the theme with Forni, then **create the week banner**: an all day event spanning Monday through Sunday, transparency `"free"`, carrying the 🧭 Theme label.

- **Title** is the theme, led by an emoji chosen to match it (for example `🪷 Presence`). The theme owns the title; nothing else sits there.
- **Body** opens with a one sentence theme framing. The training block (week label, sessions by modality, which Friday it is, strength targets, guardrails) is appended to the body by `assist:plan-training` when Plan Training runs; every training detail lives in the body, never the title.

This skill owns the banner. `assist:plan-training` writes into its body but never creates or retitles it.

### Phase 3: Sweep Inbox

Turn the inbox into tasks before the task list is loaded, so email follow ups ride the same prioritization and slotting pass as everything else instead of living only in Gmail.

**Clerk was dispatched at the close of Review Week** (see Agent Fan Out); by this phase its board has usually landed inside the planner's brief. Clerk pulls EVERY thread in the inbox (not just unread and starred; read but never archived mail is most of the pile), applies the triage rules, and returns one fully specified proposed disposition per thread, marked ✓ (rule backed) or ? (judgment), with account safe Gmail links. Present per the Signal Contract: ? items and anything outbound are Decisions with proposed defaults; ✓ dispositions execute after the phase nod and report in the rollup grouped by disposition with the rule cited. The full board surfaces only on request. Clerk proposes, Forni corrects, and the corrected board is executed (clerk executes its own board on resume; see the agent file). Fall back to the manual parse below only after clerk has failed or returned nothing, never in parallel with it. Adopted 2026-08-02; widened to the full inbox with proposal dispositions the same day; folded into the post retro fan out 2026-08-09.

1. Pull every thread in the inbox via `gws` (Bash), not just unread and starred; read but never archived mail is most of the pile. Yellow and red stars mean the next move is ours (see the star semantics in the assist plugin reference/email-rules.md).
2. Classify each email by the action it implies:
   - **Follow up, not a reply** (schedule something, pay something, chase a vendor, gather documents): create a task in its landing system per GC conventions (Todoist for personal and operational, Linear for development and work search). Emoji prefix, short title linked to the Gmail thread, due the Sunday of this planning session so it lands in this pass, priority by judgment, details in a comment per Todoist conventions.
   - **Needs an actual reply**: leave it in the inbox for a proper `assist:triage-inbox` session. Note that it exists; do not draft or send replies during this phase.
   - **No action**: skip it.
3. Confirm task creations with Forni before writing, presented per the Signal Contract, consistent with the ask before acting posture.
4. When nothing actionable surfaces, say so in one line and continue.

### Phase 4: Sweep Calendar

Make the calendar true. Fetch this week's events (Monday through Sunday) via `gws` on the `🌱 Life` calendar, with `eventLabelVersion: 1` so labels come back, and read the weekly template for the recurring skeleton. The planner's calendar pull and lint results seed this phase; verify against them rather than re deriving.

**Free vs busy events**: Check the `transparency` field on each event. Events with `transparency: "transparent"` are "free" (informational only, no action required). Filter them out of the working set. Do not treat free events as conflicts or as consuming time slots. Only `opaque` (busy) events block time.

**Rectify against the template and the frame**: Compare the live calendar against the template and against itself, and also reconcile the template against the current V2MOM frame, since a frame rebuild leaves the skeleton stale. Identify:

- Overlapping busy events (two events claiming the same time)
- One off events that displace recurring template activities (e.g., a party during sauna time)
- Constraint violations (missing transitions, fasting window breaches, training adjacent issues per `assist:plan-training`)
- Stale skeleton: recurring blocks the frame has retired (a closed venue, a dropped commitment) still sitting on the template or calendar

**Standing transition lint**: walk the week's location changes and confirm every one has its 30 minute flank per the transition conventions. A location shift without its flank is a lint finding to surface, never a silent fix. And **re pull the week after any batch of writes, before anything new is slotted**: proposing slots off a stale pull lands them on top of fresh reality (Reclaim backfill first bit 2026-07-26; reaffirmed 2026-08-09 when slots were proposed off a stale pull).

**Label the unlabeled**: any event in the week without an `eventLabelId`, or sitting on a label that no longer fits its meaning, gets its label proposed per the table in `~/Eudaimonia/Admin/Tools/google-calendar.md`. Present in small batches, confirm, patch.

Present all conflicts per the Signal Contract. For each conflict, propose a resolution:

- **Keep one, cut the other** (delete or decline)
- **Move one** to an open slot (check constraints before suggesting)
- **Accept the displacement** (skip the recurring activity this week, or reschedule it to another day)

**Never modify existing events without explicit permission.** Always present the conflict and proposed resolution, then wait for approval before taking any action. This is especially critical for events with other attendees or events booked via Reclaim.ai scheduling links (those were scheduled by other people). Be aware that deleting or moving adjacent events can cause Reclaim to auto reschedule nearby flexible events as a side effect.

Execute only the agreed changes before moving on. The calendar should be clean and conflict free before anything new is placed on it.

### Phase 5: Plan Training

Invoke the `assist:plan-training` skill in `week` mode via the Skill tool. It runs its own retro gate, detects existing recurring placeholders (Mon/Wed lifts, Tue/Thu swims, Tue DRC, Thu SPRC, Thu Alignment), surfaces what's missing, lays out the week's shape and strength targets, writes the training block into the week banner body, and **places every training event for the week**, including the alternating one offs (4K Friday plus paired drive blocks on 4K weeks), following its own constraint logic. The week leaves this phase with training fully on the calendar, not just shaped. Return here once training scheduling is complete.

### Phase 6: Plan Tasks

Prioritize the full task slate, work first, then place the survivors.

**The work slate leads.** The groomer's decision slate (dispatched at the close of Review Week, carried in the planner's brief) is the first pass: walk its Decisions, settle the cycle, and carry the placeable issues into slotting. When groomer failed or returned nothing, pull the active cycle inline (`env -u LINEAR_API_KEY linear --workspace atelic issue query --team ATE --cycle active --json`) as the fallback.

**The cycle is the week, and triage has a definition.** The active cycle should hold exactly the work intended for the week being planned; anything undated, unfittable, or unowned goes back to Backlog before slotting starts. An issue counts as triaged only when it carries all four of a cognitive load label (🧠 Sharp / ⚖️ Medium / 🍃 Light), an hourly estimate (points are hours), tagging that describes the work, and a due date matching where the work will actually be done. Missing any one of the four makes it a Decision, not a placeable item, whatever its state says. The drifts to watch live in `sdlc:groom-issues`.

**Work maps INTO the standing deep work and work block calendar series**, not into freshly minted Craft block events (the skeleton series exist as of 2026-08-09). Assign each due dated issue to specific standing blocks sized by its estimate (points are hours), and keep Linear due dates honest with where the work actually lands. Only when the week's work genuinely exceeds the standing series does a one off 🛠️ Craft block get proposed, through the same decision gate as everything else. Title and splitting conventions live in `~/Eudaimonia/Admin/Tools/google-calendar.md` (Work Holds). Linear issues carry the same 🧠 Sharp / ⚖️ Medium / 🍃 Light cognitive load labels as Todoist tasks, so the estimate sizes the block and the label picks the time of day, exactly as it does on the personal side. The Reclaim Linear sync retired 2026-08-03. Capacity overrides are Forni's to make: when he keeps an overcommitted slate, surface the arithmetic (estimate hours against standing block hours) rather than relitigating the cut (2026-08-09).

**One contiguous block per task, two at the very most.** Contiguity is optimized for ahead of a tidy fit, because a task scattered into three or more slivers across three days is impossible to hold in your head even when the hours add up. When a task will not fit any single container, first hunt for a bigger contiguous window elsewhere in the week: extending a weekend block by 30 minutes is cheaper than splitting the work. Only when no window can be made big enough does the task go into two blocks, and never into three (surfaced 2026-08-10; see Learned Rules).

**Generic containers are placeholders with no standing.** The recurring 🔨 Deep Work and 🔨 Work Block events exist to reserve capacity for this scheduling pass and nothing else. When named work claims a container's time, delete the container rather than keeping it alongside the work. A week that has been through Plan Tasks carries zero generic 🔨 blocks. Forni, 2026-08-10: "We also don't need to hold onto Deep Work blocks. Those are placeholders for the scheduling work."

**Then Todoist.** Fetch tasks using the **Schedule filter** via the `td` CLI. There is no saved filter lookup, so pass its raw query directly: `td task list --filter '(!(@⏰ Scheduled | @⏲️ Recurring) | overdue | (@⏰ Scheduled & no time)) & due before: next monday' --json`. That query pulls overdue tasks, non recurring non scheduled tasks due before next Monday, plus Scheduled labeled tasks that never got a time (the label is only honest when a time is attached; see Learned Rules).

**Prioritize.** Prune hard: the filter routinely surfaces far too many items, so default to aggressively deleting notes, deferring the non critical, and combining duplicates rather than slotting everything. This is a collaborative pass through all tasks to:

1. **Identify notes vs tasks**: Forni uses Todoist as a quick notepad. Items that are bookmarks, quotes, links, or ideas get moved to their proper home (Notion, Eudaimonia koans, etc.) and **deleted** from Todoist (not completed, since they were never real tasks). Use Notion MCP for pages like AI Research, and write files to Eudaimonia for things like koans.
2. **Combine related tasks**: When multiple tasks are clearly part of the same effort (e.g., "Rebalance Portfolio" and "Update 1% Donation" both being financial), suggest merging them into a single task with details in a comment. Always confirm with the user before merging.
3. **Reprioritize**: Review priorities and flag anything that looks off. Use best judgment, then confirm with the user.
4. **Clear p4**: All p4 tasks either get bumped to a real priority or punted to the following Sunday. p4 items do not get slotted into the current week.

**Slot.** Present the remaining tasks that need scheduling per the Signal Contract. For each task, suggest a time slot based on:

- The task's priority and due date
- Available open slots in the calendar
- **Cognitive load, which decides the time of day**: 🧠 Sharp lands first thing in a protected morning, ⚖️ Medium midday, 🍃 Light late afternoon on low fuel. The estimate decides how long the block is; the label decides when it sits (see Slotting Rules in the plugin learned-rules.md)
- Location: if a task requires being somewhere specific, match it to the right day

Present the proposed slots as a board with corrections invited (the board pattern supersedes the one at a time walk; see Learned Rules). Forni can, per task:

- **Accept** the proposed slot
- **Move** to a different slot
- **Defer** to next week (reschedule in Todoist to the following Sunday)
- **Skip** for now

**Todoist tasks are scheduled via Todoist, not by creating Google Calendar events.** To slot a Todoist task (all through the `td` CLI; see Todoist Integration below):

1. Set the date and time with `td task reschedule <ref> "2026-03-31T07:00:00"`. Reschedule preserves recurrence, and a date only value drops an existing time, so pass the full date and time form
2. Set the duration with `td task update <ref> --duration 2h` (duration strings like `2h` or `30m`; bare integers are rejected) and the labels with `--labels`. The flag replaces the entire label set, so pass everything the task keeps in one list: the `⏰ Scheduled` label, exactly one cognitive load label (🧠 Sharp / ⚖️ Medium / 🍃 Light), and any labels already on the task. Move the task out of Inbox into its pillar project with `td task move <ref> --project "<name>"` (see Slotting Rules in the plugin learned-rules.md)
3. The `⏰ Scheduled` label removes the task from the Schedule filter so it does not resurface during prioritization
4. Todoist's calendar integration automatically shows scheduled tasks on Google Calendar

Google Calendar is still used directly for non task events: meetings, transitions, sauna sessions, social events, etc.

**Recurring catch up/call tasks**: When a recurring task (e.g., "📱 Ryan Bruno", every 2 months) gets slotted:

1. Create a new one off Todoist task with the specific date/time, duration, the `⏰ Scheduled` label, exactly one cognitive load label (🧠 Sharp / ⚖️ Medium / 🍃 Light), and its pillar project
2. Complete the recurring task so the next occurrence auto generates on its cycle
3. The one off task is the reminder for this week; the recurrence handles the next one

A recurring catch up that gets deferred instead of slotted lands on the following Sunday, like every other deferral.

**Email outreach as slotting**: For some recurring catch ups, the right action is not scheduling a time block but sending an email with a scheduling link. Use `gws gmail +send` (via Bash) to send outreach. Check previous email threads for tone and format. The gws-gmail-send skill has full usage docs. Always confirm with the user before executing the send command.

**Deferred tasks land on Sunday**: When deferring tasks to next week or further out, always schedule them for the Sunday that plans the target week (the day before the target week's Monday). Sunday is the landing zone where tasks get triaged during the planning session. (Replaced the Monday landing zone 2026-08-09.)

### Phase 7: Plan Meals

Invoke the `assist:plan-meals` skill via the Skill tool. It produces a plant based, seasonal, batch prep friendly meal plan authored into the Atelic app plus a consolidated shopping list grouped by store, reconciling the pantry first. It reads the rectified week so it accounts for nights out, social dinners, and travel (a camp, race weekend, or trip where no home dinner is needed).

Meal planning generates schedulable work, and this phase runs after Plan Tasks, so that work does not flow back into the task queue. The standing blocks (Sprouts run, Batch Prep, Cook Night) already hold their time; confirm they cover the plan. Anything the plan generates beyond them (an extra prep session, a second store run) is **slotted inline in this phase**, through the same decision gate as task slotting, against a fresh calendar pull. Return here once meal planning and its slotting are complete.

### Phase 8: Present Week

The finished board is the Google Calendar week view. Present a link to it (`https://calendar.google.com/calendar/u/0/r/week/YYYY/M/D`). Todoist sync already renders slotted tasks there alongside training, meetings, and events, so do not rebuild the week as prose day lists or summary tables (see the Learned Rules entry).

Supplement the link only with what the calendar cannot show:

- The deferred ledger: any tasks that could not be slotted (no available time)
- Remaining open slots for spontaneous work
- The week's theme

## Mode: week

Quick view of the current or upcoming week. No task slotting, just a clean overview.

1. Fetch calendar events for the requested week
2. Present day by day with times, event names, and locations
3. Highlight open slots
4. Flag any conflicts or constraint violations

## Mode: slot

Slot a specific task or event into the week.

1. User describes what they need to fit in (e.g., "I need 2 hours for Atelic work this week")
2. Fetch the week's calendar
3. Identify available slots that fit the duration
4. Present options via AskUserQuestion
5. Slot into the chosen time:
   - **If it is a Todoist task**: use `td task reschedule` to set the date and time, then `td task update` to set the `--duration` and the full `--labels` set (the `⏰ Scheduled` label, exactly one cognitive load label 🧠 Sharp / ⚖️ Medium / 🍃 Light, plus whatever the task already carries, since the flag replaces the whole set), and `td task move` to land it in its pillar project. Do **not** create a Google Calendar event; Todoist's calendar integration handles visibility automatically.
   - **If it is a non task event** (meeting, transition, sauna session, social event, etc.): propose the event details, confirm with the user, then create a Google Calendar event following the Calendar Event Conventions above.

## Mode: move

Move or swap an existing event.

1. User describes what to move (e.g., "Move my Wednesday sauna to Thursday")
2. Fetch the relevant events
3. Check constraints (transitions, conflicts). Defer to `assist:plan-training` move mode when any of these apply:
   - the target event is training (🍏 Constitution label, training emoji, or session type like sauna / contrast / lift / run / climb)
   - the proposed destination lands in Thursday morning (SPRC window is protected regardless of what is being moved)
   - the move could affect training adjacent sequencing (e.g., a sauna or contrast block landing on a strength day, an event displacing a recurring training session)

   Include cold plunge sequencing and Thursday SPRC protection in that validation pass.
4. Present the proposed change with any downstream impacts
5. Execute after confirmation

When moving recurring events for just one week, modify only that occurrence, not the entire series. When the user wants a permanent change, update the series and flag that schedule.md may need updating.

## Calendar Event Conventions

The named label table (names, hexes, label IDs) and the transition / travel / title conventions live in `~/Eudaimonia/Admin/Tools/google-calendar.md`; the behavioral rule lives in GC `Calendar Preferences`. The conventions below are skill specific additions.

- **Emoji prefix**: All personal events use an emoji prefix (e.g., "🏋️ Strength", "✍️ Writing")
- **Labels, not colors**: every created event carries the `eventLabelId` matching its meaning (🍏 Constitution, 🧠 Contemplation, 🤝 Community, 🛠️ Craft, and the rest of the table)
- **Deep work**: 🔨 Deep Work blocks carry the 🛠️ Craft label (the Heads Down label retired 2026-07-19; deep work is Craft, not its own category). Protected focus, no transitions needed (block stays at current location). The generic block is a capacity placeholder, deleted once named work claims its time (see Phase 6).
- **Week banner**: the all day event spanning Monday through Sunday that carries the week's theme, created by Set Intention with the 🧭 Theme label, transparency `"free"`. Title is emoji + theme only; training detail lives in the body, written there by `assist:plan-training`.

Include the location when the event is at a specific place.

## Training Plan Scheduling

Training event creation lives in the `assist:plan-training` skill. See that skill for the recurring placeholder table, the 4K Friday alternation, strength programming, special weeks (template refresh, September seam, travel), and training adjacent constraints. Plan Training (Phase 5) invokes it during weekly planning. The week banner is the one exception: this skill creates it during Set Intention; plan-training only writes the training block into its body.

## Key Locations

| Name | Address |
|------|---------|
| Movement RiNo | 3201 Walnut St #107, Denver, CO 80205 |
| Improper City | 3201 Walnut St #107, Denver, CO 80205 |
| Ratio Beerworks | 2920 Larimer St, Denver, CO 80205 |
| Hearth | 2500 Lawrence St, Denver, CO 80205 |
| Project Angel Heart | 4950 Washington St Suite 200, Denver, CO 80216 |
| STEP Denver | 2029 Larimer St, Denver, CO 80205 |
| High Noon (1311 York) | 1311 York St, Denver, CO 80206 |

## Todoist Integration

All Todoist access goes through the `td` CLI via Bash; the MCP connector retired 2026-08-13. The owning doc is `~/Eudaimonia/Admin/Tools/todoist.md` (install, auth, everyday shape, the full gotcha list); this section carries only the operations planning leans on, verified against `td --help` on 2026-08-15:

- `td task list --filter '<query>' --json`: pull tasks with a raw Todoist filter query. There is no saved filter lookup, so pass the Schedule filter's raw query directly (see Phase 6). A date range pull uses `--due` (today, overdue, or YYYY-MM-DD).
- `td task reschedule <ref> "<date>"`: move a task's due date. Always use this instead of `td task update --due` for date changes: reschedule preserves recurrence, while `update --due` replaces the whole due string. A date only value drops an existing time of day, so pass the full form (`2026-08-18T09:00:00`) when a time matters.
- `td task update <ref>`: set task properties (but NOT dates). `--duration` takes duration strings (`30m`, `1h`, `2h15m`); bare integers are rejected. `--labels` is plural and replaces the entire label set, so always pass every label the task keeps, not just the addition. `--priority` takes `p1` through `p4`.
- `td task move <ref> --project "<name>"`: move a task out of Inbox into its pillar project.
- `td task complete <ref>`: complete recurring tasks to fire the next occurrence (never `--forever`, which kills the recurrence).
- `td task delete <ref> --yes`: delete notes/bookmarks that were never real tasks. Never complete these. The `--yes` flag is required or nothing is deleted.
- `td task add "<title>" --project "<name>" --due "<date>" --priority p2 --labels "<a,b>" --duration 30m`: create one off tasks (e.g., a scheduled call from a recurring catch up).
- `td comment add <ref> --content "<text>"`: add detail to tasks when combining or enriching them.

When slotting tasks, respect Todoist priorities:

- p1 (highest): Slot these first, in prime time
- p2: Important but flexible
- p3: Can go in smaller gaps
- p4 (default): Lowest priority, do not slot into the current week

## Gmail Integration

Use the `gws` CLI tool (via Bash) for Gmail operations during planning. Common use case: sending scheduling link emails for recurring catch ups. Reference the gws-gmail-send skill for full usage. Always check previous email threads for tone and context before drafting. Confirm with the user before executing send commands.

## Learned Rules

See [learned-rules.md](learned-rules.md).
