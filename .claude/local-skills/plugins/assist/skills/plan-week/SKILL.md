---
name: plan-week
description: Weekly planning, calendar management, and Monday morning task slotting. Use this skill whenever the user mentions weekly planning, the Monday planning session, slotting tasks, finding free time, checking what their week looks like, moving or swapping calendar events, or wants help fitting something into their week. Also trigger when the user asks about V2MOM measure coverage. Training plan scheduling lives in `assist:plan-training` and meal planning in `assist:plan-meals`; this skill calls into both during Monday planning.
argument-hint: "[plan | week | slot | move]"
allowed-tools:
  - Skill
  - Bash
  - mcp__claude_ai_Strava__*
  - mcp__claude_ai_Todoist__*
  - mcp__claude_ai_Notion__*
  - Read
  - Edit
  - Write
  - AskUserQuestion
---

# Plan Week Assist

Help Forni plan his week: review the calendar, slot Todoist tasks into open time, and make calendar adjustments while respecting training and recovery constraints.

## Before Every Invocation

1. Read [learned-rules.md](../../learned-rules.md) for any schedule-specific corrections
2. Read the weekly template: `~/Eudaimonia/schedule.md`
3. Determine the ISO week being planned (Monday through Sunday) based on today's date
4. **Cut and enter a `wk-<ISO week>` worktree** in each repo the session will touch (Eudaimonia for planning artifacts, homebase for skill or config edits). Planning runs in an isolated worktree, never on a shared branch, so a branch switch in another terminal cannot move the ground under the session. All planning edits land in the worktree copy.

**Calendar access:** reads and writes go through the `gws` CLI via Bash, not a Google Calendar MCP. The personal calendar is `🌱 Life` (`mattforni@gmail.com`); find IDs with `gws calendar calendarList list`. Pull with `gws calendar events list`, patch a recurring series with `gws calendar events patch` (only the fields you change), create with `events insert`, delete a whole series by its `recurringEventId`. The `gws` output is prefixed with a `Using keyring backend` line, so strip it before parsing JSON. See `~/Eudaimonia/Admin/tools/gws.md` for the exact invocation syntax: `calendarId` goes inside `--params`, the event body (and any array fields) go in `--json`.

**Event coloring goes through named labels, never `colorId`.** Every event write sets `eventLabelId` in the `--json` body, with `eventLabelVersion: 1` in `--params`. Putting `eventLabelId` in `--params` is silently dropped and the label never applies (bit on insert 2026-07-26). The label table (names, hexes, IDs) lives in `~/Eudaimonia/Admin/tools/google-calendar.md`. The legacy `colorId` field is a backward compat synthesis that returns different values from different endpoints; never read it, never write it.

## Source of Truth

The weekly template lives at `~/Eudaimonia/schedule.md`. It defines the recurring skeleton: work hours, training sessions, transitions, recovery, and community commitments. The Google Calendar holds the live reality, including one off events and Reclaim work blocks.

When there is a conflict between the template and the calendar, the calendar is the current truth. The template describes what a "normal" week should look like.

## Constraints

These constraints exist for real physiological and practical reasons. They are not suggestions.

**Transitions**: Every movement between locations gets a 30 minute buffer. This is not travel time alone; it includes the mental shift between contexts. Do not schedule events back to back without a transition unless they are at the same location. Transitions are placeholders: when a one off meeting claims part of a transition's time slot that week, shrink that week's instance to fit the remaining gap rather than flagging it as a conflict. This applies only to the single affected instance; the standing transition series is always 30 minutes and is never resized (see `assist:plan-training` learned rules).

**Work hours**: No W2 as of 2026-06-29 and the weekly skeleton is being rebuilt. Treat `~/Eudaimonia/schedule.md` as the source of truth for anchors and do not assume office days.

**Training adjacent constraints**: Cold plunge sequencing (4 to 6 hour gap after strength), sauna timing post strength, and Thursday SPRC morning protection live in the `assist:plan-training` skill. Defer to that skill when validating moves of training, sauna, contrast, or Thursday morning events.

**Personal anchors (not conflicts)**: Forni's last meal cutoff (currently 19:30) and lights out (currently 22:00) live in `~/Eudaimonia/schedule.md` Daily Anchors. These are personal constraints Forni manages himself — do not flag events that push past them as conflicts.

## Mode: plan (default)

The Monday morning planning session. This is the primary use case. It runs isolated in a worktree and moves through eight phases: gather, then clean, then place, then show. Every phase that generates work runs before the phase that places work.

1. **Review Week** — look back
2. **Set Intention** — theme and banner
3. **Sweep Inbox** — email becomes tasks
4. **Sweep Calendar** — make the calendar true
5. **Plan Training** — every training event placed
6. **Plan Meals** — food plus its calendar footprint
7. **Plan Tasks** — prioritize, then slot
8. **Present Week** — the finished board

### Phase 1: Review Week

Look back at the week that is ending, read as a **compass, not a verdict**. Bring both quantitative spines first, then the felt sense.

- **Movement (Strava):** pull the just closed ISO week with `mcp__claude_ai_Strava__list_activities` (`range_start` / `range_end`). Summarize the runs, lifts, hikes, and swims against the V2MOM frame. The connector returns metric, so convert (miles = m / 1609.344, feet = m * 3.28084). This is the broad life movement view; the training specific coverage retro runs later inside `assist:plan-training`.
- **Overconsumption (Gmail):** the conscious consumption measure has no automatic log, so build one. Count the week's delivery confirmations via `gws gmail`, searching `(Domino OR "Illegal Pete" OR DoorDash OR Grubhub OR "Uber Eats" OR Postmates) after:YYYY/MM/DD before:YYYY/MM/DD` bounding the week. Gmail's `before:` is exclusive, so set it to the Monday after the week so Sunday's orders are not missed. Then confirm each hit is a real order.
- **Felt sense:** present the two spines tightly, name the one or two things that stand out lightly, then ask the open felt sense question (a word or two for the week). Follow the live thread, and surface the one thing to carry forward. A deeper dialogue can invoke `assist:reflect` in `week` mode, but the planning retro carries the spines itself.

Read it all gently. In the current frame the retro course corrects, it does not grade. Surface anything that should become a planning input (a task, a guardrail, a measure to watch) and carry it into the phases below.

### Phase 2: Set Intention

The look forward, the mirror of Review Week. Holding the retro's carry forward as the lens, name **one to three focuses** for the week ahead, and convert each into a concrete planning input:

- An **anchor to protect** (a held block, a wind down ritual)
- A **block to confirm or create** on the calendar
- A **measure to watch** through the week

**Name the week's theme, and write it onto the calendar.** Set Intention produces a short theme for the week, a word or a brief phrase (for example "Presence", or "Point the Energy at the Forge"). The theme is the compass, not a task. Confirm the theme with Forni, then **create the week banner**: an all day event spanning Monday through Sunday, transparency `"free"`, carrying the 🧭 Theme label.

- **Title** is the theme, led by an emoji chosen to match it (for example `🪷 Presence`). The theme owns the title; nothing else sits there.
- **Body** opens with a one sentence theme framing. The training block (week label and phase, mileage and vert, run shape, guardrails) is appended to the body by `assist:plan-training` when Plan Training runs; every training detail lives in the body, never the title.

This skill owns the banner. `assist:plan-training` writes into its body but never creates or retitles it.

### Phase 3: Sweep Inbox

Turn the inbox into tasks before the task list is loaded, so email follow ups ride the same prioritization and slotting pass as everything else instead of living only in Gmail.

**Dispatch the `clerk` agent for the parse.** At the start of this phase, launch clerk (the inbox parsing agent in `~/.claude/agents/clerk.md`, Sonnet) in the background to fetch the working set, apply the learned rules, and return the classified board with Gmail links. The main session walks the board's decisions with Forni one item at a time; clerk classifies, never decides, never mutates. Adopted 2026-08-02 (validated against a manual sweep the same session). If clerk is unavailable, fall back to the manual parse below.

1. Pull the actionable inbox via `gws` (Bash): unread messages plus starred ones. Yellow and red stars mean the next move is ours (see the star semantics in the assist plugin learned-rules.md).
2. Classify each email by the action it implies:
   - **Follow up, not a reply** (schedule something, pay something, chase a vendor, gather documents): create a Todoist task. Emoji prefix, short title linked to the Gmail thread, due the Monday of the week being planned so it lands in this pass, priority by judgment, details in a comment per Todoist conventions.
   - **Needs an actual reply**: leave it in the inbox for a proper `assist:triage-inbox` session. Note that it exists; do not draft or send replies during this phase.
   - **No action**: skip it.
3. Confirm each task creation with Forni before writing, one at a time, consistent with the ask before acting posture.
4. When nothing actionable surfaces, say so in one line and continue.

### Phase 4: Sweep Calendar

Make the calendar true. Fetch this week's events (Monday through Sunday) via `gws` on the `🌱 Life` calendar, with `eventLabelVersion: 1` so labels come back, and read the weekly template for the recurring skeleton.

**Free vs busy events**: Check the `transparency` field on each event. Events with `transparency: "transparent"` are "free" (informational only, no action required). Filter them out of the working set. Do not treat free events as conflicts or as consuming time slots. Only `opaque` (busy) events block time.

**Rectify against the template and the frame**: Compare the live calendar against the template and against itself, and also reconcile the template against the current V2MOM frame, since a frame rebuild leaves the skeleton stale. Identify:

- Overlapping busy events (two events claiming the same time)
- One off events that displace recurring template activities (e.g., a party during sauna time)
- Constraint violations (missing transitions, fasting window breaches, training adjacent issues per `assist:plan-training`)
- Stale skeleton: recurring blocks the frame has retired (a closed venue, a dropped commitment) still sitting on the template or calendar

**Label the unlabeled**: any event in the week without an `eventLabelId`, or sitting on a label that no longer fits its meaning, gets its label proposed per the table in `~/Eudaimonia/Admin/tools/google-calendar.md`. Present in small batches, confirm, patch.

Present all conflicts to the user, one at a time or in small batches. For each conflict, propose a resolution:

- **Keep one, cut the other** (delete or decline)
- **Move one** to an open slot (check constraints before suggesting)
- **Accept the displacement** (skip the recurring activity this week, or reschedule it to another day)

**Never modify existing events without explicit permission.** Always present the conflict and proposed resolution, then wait for approval before taking any action. This is especially critical for events with other attendees or events booked via Reclaim.ai scheduling links (those were scheduled by other people). Be aware that deleting or moving adjacent events can cause Reclaim to auto reschedule nearby flexible events as a side effect.

Execute only the agreed changes before moving on. The calendar should be clean and conflict free before anything new is placed on it.

### Phase 5: Plan Training

Invoke the `assist:plan-training` skill in `week` mode via the Skill tool. It runs its own retro gate, detects existing recurring placeholders (Mon yoga, Tue lift, Thu SPRC, Wed climb, etc.), surfaces what's missing, lays out the week's run shape, writes the training block into the week banner body, and **places every training event for the week**, including the variable one offs (Friday long run plus paired drive blocks), following its own constraint logic. The week leaves this phase with training fully on the calendar, not just shaped. Return here once training scheduling is complete.

### Phase 6: Plan Meals

Invoke the `assist:plan-meals` skill via the Skill tool. It produces a plant based, seasonal, batch prep friendly meal plan authored into the Atelic app plus a consolidated shopping list grouped by store, reconciling the pantry first. It reads the rectified week so it accounts for nights out, social dinners, and travel (a camp, race weekend, or trip where no home dinner is needed).

Meal planning generates schedulable work: the grocery run, and any prep or cook time beyond the recurring Batch Prep and Cook Night blocks. Capture those as tasks (or confirm the recurring blocks cover them) so they enter the Plan Tasks queue and compete for calendar time like everything else. Return here once meal planning is complete.

### Phase 7: Plan Tasks

Prioritize the task list, then place the survivors.

**Load.** Fetch Todoist tasks using the **Schedule filter**. The MCP cannot resolve the saved filter by ID, so pass its raw query to `find-tasks`: `(!(@⏰ Scheduled | @⏲️ Recurring) | overdue | (@⏰ Scheduled & no time)) & due before: next monday` — overdue tasks, non recurring non scheduled tasks due before next Monday, plus Scheduled labeled tasks that never got a time (the label is only honest when a time is attached; see Learned Rules).

**Prioritize.** Prune hard: the filter routinely surfaces far too many items, so default to aggressively deleting notes, deferring the non critical, and combining duplicates rather than slotting everything. This is a collaborative pass through all tasks to:

1. **Identify notes vs tasks**: Forni uses Todoist as a quick notepad. Items that are bookmarks, quotes, links, or ideas get moved to their proper home (Notion, Eudaimonia koans, etc.) and **deleted** from Todoist (not completed, since they were never real tasks). Use Notion MCP for pages like AI Research, and write files to Eudaimonia for things like koans.
2. **Combine related tasks**: When multiple tasks are clearly part of the same effort (e.g., "Rebalance Portfolio" and "Update 1% Donation" both being financial), suggest merging them into a single task with details in a comment. Always confirm with the user before merging.
3. **Reprioritize**: Review priorities and flag anything that looks off. Use best judgment, then confirm with the user.
4. **Clear p4**: All p4 tasks either get bumped to a real priority or punted to the following Monday. p4 items do not get slotted into the current week.

**Slot.** Present the remaining tasks that need scheduling. For each task, suggest a time slot based on:

- The task's priority and due date
- Available open slots in the calendar
- Context: deep work tasks go in morning blocks, admin in smaller gaps
- Location: if a task requires being somewhere specific, match it to the right day

Present suggestions via AskUserQuestion, one at a time or in small batches. The user can:

- **Accept** the proposed slot
- **Move** to a different slot
- **Defer** to next week (reschedule in Todoist to the following Monday)
- **Skip** for now

**Todoist tasks are scheduled via Todoist, not by creating Google Calendar events.** To slot a Todoist task:

1. Use `reschedule-tasks` to set the date and time (e.g., `2026-03-31T07:00:00`)
2. Use `update-tasks` to set the `duration` (e.g., `"2h"`, `"30m"`) and add the `⏰ Scheduled` label
3. The `⏰ Scheduled` label removes the task from the Schedule filter so it does not resurface during prioritization
4. Todoist's calendar integration automatically shows scheduled tasks on Google Calendar

Google Calendar is still used directly for non task events: meetings, transitions, sauna sessions, social events, etc.

**Recurring catch up/call tasks**: When a recurring task (e.g., "📱 Ryan Bruno", every 2 months) gets slotted:

1. Create a new one off Todoist task with the specific date/time, duration, and `⏰ Scheduled` label
2. Complete the recurring task so the next occurrence auto generates on its cycle
3. The one off task is the reminder for this week; the recurrence handles the next one

**Email outreach as slotting**: For some recurring catch ups, the right action is not scheduling a time block but sending an email with a scheduling link. Use `gws gmail +send` (via Bash) to send outreach. Check previous email threads for tone and format. The gws-gmail-send skill has full usage docs. Always confirm with the user before executing the send command.

**Deferred tasks land on Monday**: When deferring tasks to next week or further out, always schedule them for the Monday of the target week. Monday is the landing zone where tasks get triaged during the planning session.

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
   - **If it is a Todoist task**: use `reschedule-tasks` to set the date/time, then `update-tasks` to set the `duration` and add the `⏰ Scheduled` label. Do **not** create a Google Calendar event — Todoist's calendar integration handles visibility automatically.
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

The named label table (names, hexes, label IDs) and the transition / travel / title conventions live in `~/Eudaimonia/Admin/tools/google-calendar.md`; the behavioral rule lives in GC `Calendar Preferences`. The conventions below are skill specific additions.

- **Emoji prefix**: All personal events use an emoji prefix (e.g., "🏋️ Strength", "✍️ Writing")
- **Labels, not colors**: every created event carries the `eventLabelId` matching its meaning (🍏 Constitution, 🧠 Contemplation, 🤝 Community, 🛠️ Craft, and the rest of the table)
- **Deep work**: 🔨 Deep Work blocks carry the 🛠️ Craft label (the Heads Down label retired 2026-07-19; deep work is Craft, not its own category). Protected focus, no transitions needed (block stays at current location).
- **Week banner**: the all day event spanning Monday through Sunday that carries the week's theme, created by Set Intention with the 🧭 Theme label, transparency `"free"`. Title is emoji + theme only; training detail lives in the body, written there by `assist:plan-training`.

Include the location when the event is at a specific place.

## Training Plan Scheduling

Training event creation lives in the `assist:plan-training` skill. See that skill for the recurring placeholder table, Friday long run workflow, special weeks (cutback, altitude, race), Mon flex, and training adjacent constraints. Plan Training (Phase 5) invokes it during Monday planning. The week banner is the one exception: this skill creates it during Set Intention; plan-training only writes the training block into its body.

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

Use the Todoist MCP tools to read and reschedule tasks. Key operations:

- `find-tasks` with `filter`: Pull tasks using the raw Todoist filter string. The saved filter lookup by ID (`filterIdOrName`) is not supported by this MCP, so pass the Schedule filter's raw query directly (see Phase 7).
- `find-tasks-by-date`: Get tasks due in a date range
- `reschedule-tasks`: Move task due dates (always use this instead of update-tasks for date changes, to preserve recurrence)
- `update-tasks`: Modify task properties (but NOT dates). Use to set duration and labels.
- `complete-tasks`: Complete recurring tasks to fire the next occurrence
- `delete-object`: Delete notes/bookmarks that were never real tasks. Never complete these.
- `add-tasks`: Create one off tasks (e.g., a scheduled call from a recurring catch up)
- `add-comments`: Add detail to tasks when combining or enriching them

When slotting tasks, respect Todoist priorities:
- p1 (highest): Slot these first, in prime time
- p2: Important but flexible
- p3: Can go in smaller gaps
- p4 (default): Lowest priority, do not slot into the current week

## Gmail Integration

Use the `gws` CLI tool (via Bash) for Gmail operations during planning. Common use case: sending scheduling link emails for recurring catch ups. Reference the gws-gmail-send skill for full usage. Always check previous email threads for tone and context before drafting. Confirm with the user before executing send commands.

## Learned Rules

- Always schedule tasks for a minimum of 30 minutes. It looks better on the calendar and provides buffer. Even a quick phone call gets 30m.
- Always include "Delete it" as a triage option. Not everything deserves to be relocated.
- Add an appropriate emoji prefix to tasks that lack one. Shorten task names to fit well on a calendar.
- When slotting a task, always set: date/time via reschedule-tasks, then duration + Scheduled label via update-tasks.
- Todoist deadlineDate is Premium only. Note deadlines in the task description instead.
- Transition and travel conventions are in `~/Eudaimonia/Admin/tools/google-calendar.md`. Transition is *holding space* (context shift, destination in description). Travel is *explicit* (drive / transit, destination in title). Both carry the single 🚙 Travel label (Basil); the distinction lives in the title. Transitions are always 30 minutes, never 15.
- When a Todoist bookmark is really an open question rather than an action (description phrased as a question, "Investigate" prefix, no clear next step), capture it as a koan under `~/Eudaimonia/Life-Design/Koans/<topic>.md` and delete the Todoist task. Don't punt to next Monday — questions don't get less true with time.
- Worktree mechanics for planning live in Before Every Invocation and the worktree rule below. Cut and enter the `wk-<ISO week>` worktree before any Eudaimonia or homebase edits, never mid session.
- Do not skip Plan Training (invoke `assist:plan-training` in week mode), even when training decisions feel already made inline during Sweep Calendar. The training skill carries its own gate, the previous week's retro, which has no other place to live. Surfaced 2026-05-25 when I rationalized skipping it because strength moves had been discussed during conflict resolution; Forni caught it. The retro turned up real signal (PAH as transit, PT miss, weigh-in trend) that would otherwise have stayed invisible until next Monday.
- **Walk slotting one task at a time; never bulk date the Schedule filter.** The Slot step of Plan Tasks means presenting each task's proposed slot via AskUserQuestion (accept / move / defer / skip) and waiting for Forni before touching it. Do NOT batch reschedule the whole filter onto dates in one shot and summarize after. The collaborative per task pass *is* the process; bulk dating erases his input and forces him to re-read and unwind it. Surfaced 2026-05-31: I rescheduled 17 filter tasks at once. Forni: "you just created a bunch of tasks and put them onto dates. That's not really how we go through the scheduling process," and "you took a lot of action without asking me. Now I've got to go back and read through your summary and readjust it."
- **Default to asking before acting throughout planning, not just slotting.** Bias toward confirming each change with Forni rather than executing a batch and reporting. Calendar moves, task reschedules, deferrals — present, then wait. Same session feedback as above.
- **Do not place training sessions before the training readjustment is done.** The Friday long run distance depends on the week's retro and any special week adjustment, so run Plan Training (`assist:plan-training`) before scheduling the run. Surfaced 2026-05-31: I placed an 8 mi long run before the Wk 4 retro; the readjusted number was 6 mi off the calf restart.
- **Plan in a `wk-<ISO week>` worktree, not a shared branch.** Each planning pass runs in its own worktree (see Before Every Invocation), cut in every repo it touches: Eudaimonia for planning artifacts (schedule.md, training plan, koans) and homebase for skill or config edits. A plain shared branch is not enough. On 2026-06-14 a branch switch in another terminal moved HEAD under the session mid plan and scattered commits onto an unrelated branch. A worktree gives the session its own working directory, so concurrent terminal activity cannot collide. All planning edits must target the worktree copy, not the main checkout. **Foot gun: an absolute path like `~/Eudaimonia/...` resolves to the main checkout even when the session cwd is the worktree, so edits silently land on the wrong tree.** Target the worktree path (`.claude/worktrees/wk-<ISO week>/...`). If a slip happens, move it with `git -C <main> diff -- <file>` piped to `git -C <worktree> apply`, then restore main. Surfaced 2026-06-22. Supersedes the older shared branch and date stamped approaches.
- **Green stars are walked, not auto skipped, during Sweep Inbox.** A green star means "waiting on someone else" as of the moment it was set, but the ball can quietly return: a vendor quote thread that is actually awaiting Forni's decision, or a tracker thread hiding a scheduling action. Present every starred thread for disposition rather than unilaterally classifying green stars as no action. Surfaced 2026-07-13 on the first live sweep: the skylight quote (green) was waiting on Forni's decision, and the new servicer thread (green) contained a launch call to schedule. Both were initially skipped and had to be corrected into tasks.
- **The ⏰ Scheduled label requires a specific time; label without time is an anti pattern.** Slotting means both a datetime and the label (the two Slot steps together); a task carrying the label with a date only due hides from the Schedule filter indefinitely while looking handled. The filter's `(@⏰ Scheduled & no time)` branch (added 2026-07-13) drags offenders back into triage: when one surfaces, either give it a real time or strip the label (or swap to ⏲️ Recurring for genuinely recurring reminders). Surfaced 2026-07-13: two tasks due that very day (Connect for Health enrollment, a site review) were invisible during planning, and one had already spawned an accidental duplicate.
- **Review Week presents movement as a table.** One row per activity (day, name, type, distance, vert, moving time, effort), totals as a bold summary line underneath. Requested 2026-07-19.
- **Sweep Inbox links every email to its Gmail thread.** Use `https://mail.google.com/mail/u/0/#all/<message id>` in the presented board and in every question that references a message. Forni cannot act on an email he cannot open. Surfaced 2026-07-19.
- **Estimate durations honestly during slotting; 30 minutes is a floor, not a default.** After proposing slots, walk the 30 minute tasks and ask which actually need more, then reflow the day around the answers. Surfaced 2026-07-19: several 30 minute slots were clearly hour long work.
- **Present Week is a link to the Google Calendar week view** (`https://calendar.google.com/calendar/u/0/r/week/YYYY/M/D`). Todoist sync already renders scheduled tasks there, so the calendar IS the at a glance board. Do not rebuild it as prose day lists, packed summary tables, or rendered board artifacts; all three were rejected in one sitting on 2026-07-19. Supplement the link only with what the calendar cannot show: the deferred ledger, the open air summary, the week's theme.
- **Never pack multiple items into one table cell, anywhere.** One line per item, times first. Packed cells were rejected twice on 2026-07-19 (a meal grid cell carrying commentary, a week summary cramming whole days into single cells).
- **When several tasks share an undecided direction, collapse them into one planning task instead of slotting them individually.** The planning task gets the slot; the others become its unscheduled subtasks and earn slots only after the direction session. Slotting unconverged work spends the week's open air on intent that has not been decided. Surfaced 2026-07-19 with the RYLLC cluster.
- **Re-pull the calendar after any batch of deletions, before slotting; Reclaim backfills the freed time.** Clearing skeleton or one-off events (e.g. rectifying a travel week when Forni is away) triggers Reclaim to auto-reschedule its flexible task blocks into the newly freed slots. Proposing task slots off a calendar snapshot taken *before* the deletions lands them on top of the fresh Reclaim blocks. Always re-fetch the week after Sweep Calendar deletions and before the Plan Tasks slot step, and read the 🛡 Reclaim blocks as occupied. Surfaced 2026-07-26 (Wk 31, Four Pass Loop trip week): after clearing ~25 Denver skeleton events, Reclaim backfilled ATE-399/419/402 work blocks into the late mornings, and the first three slot proposals all collided until Forni asked "are you not seeing the scheduled blocks from Reclaim?"
