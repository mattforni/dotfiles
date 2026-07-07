---
name: assist:plan-week
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

## Source of Truth

The weekly template lives at `~/Eudaimonia/schedule.md`. It defines the recurring skeleton: work hours, training sessions, transitions, recovery, and community commitments. The Google Calendar holds the live reality, including one-off events and Reclaim work blocks.

When there is a conflict between the template and the calendar, the calendar is the current truth. The template describes what a "normal" week should look like.

## Constraints

These constraints exist for real physiological and practical reasons. They are not suggestions.

**Transitions**: Every movement between locations gets a 30-minute buffer. This is not travel time alone; it includes the mental shift between contexts. Do not schedule events back-to-back without a transition unless they are at the same location. Transitions are placeholders — when a scheduled meeting claims part of a transition's time slot, shrink the transition to fit the remaining gap rather than flagging it as a conflict.

**Work hours**: No W2 as of 2026-06-29 and the weekly skeleton is being rebuilt. Treat `~/Eudaimonia/schedule.md` as the source of truth for anchors and do not assume office days.

**Training adjacent constraints**: Cold plunge sequencing (4 to 6 hour gap after strength), sauna timing post strength, and Thursday SPRC morning protection live in the `assist:plan-training` skill. Defer to that skill when validating moves of training, sauna, contrast, or Thursday morning events.

**Personal anchors (not conflicts)**: Forni's last meal cutoff (currently 19:30) and lights out (currently 22:00) live in `~/Eudaimonia/schedule.md` Daily Anchors. These are personal constraints Forni manages himself — do not flag events that push past them as conflicts.

## Mode: plan (default)

The Monday morning planning session. This is the primary use case. It runs isolated in a worktree, looks back, looks forward, then plans the week ahead.

### Phase 1: Retrospective

Look back at the week that is ending, read as a **compass, not a verdict**. Bring both quantitative spines first, then the felt sense.

- **Movement (Strava):** pull the just closed ISO week with `mcp__claude_ai_Strava__list_activities` (`range_start` / `range_end`). Summarize the runs, lifts, hikes, and swims against the V2MOM frame. The connector returns metric, so convert (miles = m / 1609.344, feet = m * 3.28084). This is the broad life movement view; the training specific coverage retro runs later inside `assist:plan-training`.
- **Overconsumption (Gmail):** the conscious consumption measure has no automatic log, so build one. Count the week's delivery confirmations via `gws gmail`, searching `(Domino OR "Illegal Pete" OR DoorDash OR Grubhub OR "Uber Eats" OR Postmates) after:YYYY/MM/DD before:YYYY/MM/DD` bounding the week. Gmail's `before:` is exclusive, so set it to the Monday after the week so Sunday's orders are not missed. Then confirm each hit is a real order.
- **Felt sense:** present the two spines tightly, name the one or two things that stand out lightly, then ask the open felt sense question (a word or two for the week). Follow the live thread, and surface the one thing to carry forward. A deeper dialogue can invoke `assist:reflect` in `week` mode, but the planning retro carries the spines itself.

Read it all gently. In the current frame the retro course corrects, it does not grade. Surface anything that should become a planning input (a task, a guardrail, a measure to watch) and carry it into the phases below.

### Phase 2: Prospective

The look forward, the mirror of the Retrospective. Holding the retro's carry forward as the lens, name **one to three focuses** for the week ahead, and convert each into a concrete planning input:

- An **anchor to protect** (a held block, a wind down ritual)
- A **block to confirm or create** on the calendar
- A **measure to watch** through the week

The Prospective sets the week's intention before the mechanical planning begins. Its outputs flow into Load and Rectify and into Slotting.

**Name the week's theme, and write it onto the calendar.** The Prospective produces a short theme for the week, a word or a brief phrase (for example "Presence", or "Point the Energy at the Forge"). The theme is the compass, not a task. Codify it onto the week opening banner, the all day training week event that sits at the start of the week (created by `assist:plan-training`, for example "Wk 10: Deload (LA)"):

- **Title** becomes the theme, led by an emoji chosen to match the theme (for example `🪷 Presence`). The theme owns the title; nothing else sits there.
- **Body** carries a one sentence theme framing, then the full training block: the week label and phase, the mileage and vert numbers, the week's run shape, and the guardrails. Every training detail moves off the title and into the body. The run shape is produced by `assist:plan-training` (its Phase 3, Week Run Shape) and written into this block when training scheduling runs in Phase 4, so a plan-week pass writes the theme and framing first, and the run shape joins the block once training runs.

Confirm the theme with Forni first. Present the title and the body shape, then patch the banner via `gws` (summary and description only). If the banner does not exist yet this week, let `assist:plan-training` create it first, then set the theme.

### Phase 3: Load and Rectify

1. Fetch this week's calendar events (Monday through Sunday) via `gws` (the `🌱 Life` calendar)
2. Fetch Todoist tasks using the **Schedule filter**. The MCP cannot resolve the saved filter by ID, so pass its raw query to `find-tasks`: `(!(@⏰ Scheduled | @⏲️ Recurring) | overdue) & due before: next monday` — overdue tasks plus non-recurring, non-scheduled tasks due before next Monday.
3. Read the weekly template to know the recurring skeleton

**Free vs Busy events**: Check the `transparency` field on each calendar event. Events with `transparency: "transparent"` are "free" (informational only, no action required). Filter them out of the working set. Do not treat free events as conflicts or as consuming time slots. Only `opaque` (busy) events block time.

**Rectify against the calendar and the frame**: Compare the live calendar against the template and against itself, and also reconcile the template against the current V2MOM frame, since a frame rebuild leaves the skeleton stale. Identify:

- Overlapping busy events (two events claiming the same time)
- One-off events that displace recurring template activities (e.g., a party during sauna time)
- Constraint violations (missing transitions, fasting window breaches, training adjacent issues per `assist:plan-training`)
- Stale skeleton: recurring blocks the frame has retired (a closed venue, a dropped commitment) still sitting on the template or calendar

Present all conflicts to the user, one at a time or in small batches. For each conflict, propose a resolution:

- **Keep one, cut the other** (delete or decline)
- **Move one** to an open slot (check constraints before suggesting)
- **Accept the displacement** (skip the recurring activity this week, or reschedule it to another day)

**Never modify existing events without explicit permission.** Always present the conflict and proposed resolution, then wait for approval before taking any action. This is especially critical for events with other attendees or events booked via Reclaim.ai scheduling links (those were scheduled by other people). Be aware that deleting or moving adjacent events can cause Reclaim to auto-reschedule nearby flexible events as a side effect.

Execute only the agreed changes before moving on. The calendar should be clean and conflict-free before the overview.

### Phase 4: Training Scheduling

Before the week overview and triage, ensure the week's training events are scheduled. Invoke the `assist:plan-training` skill in `week` mode via the Skill tool. It will detect existing recurring placeholders (Mon yoga, Tue lift, Thu SPRC, Wed climb, etc.), surface what's missing, lay out the week's run shape (days, rough distance, purpose, adapted to the block phase), and create the variable one offs (Friday long run + paired drive blocks) following its own constraint logic. Return here once training scheduling is complete.

### Phase 5: Week Overview

Present the rectified week at a glance, day by day. For each day show:

- Training, transitions, and recovery from the calendar (post-rectification)
- Work meetings and Reclaim blocks
- One-off events (social plans, appointments)
- Open slots where tasks could be scheduled

This is a clean view of what the week actually looks like after conflicts are resolved.

### Phase 6: Triage

Before slotting, triage the Todoist tasks from the Schedule filter. Prune hard: the filter routinely surfaces far too many items, so default to aggressively deleting notes, deferring the non-critical, and combining duplicates rather than slotting everything. This is a collaborative pass through all tasks to:

1. **Identify notes vs tasks**: Forni uses Todoist as a quick notepad. Items that are bookmarks, quotes, links, or ideas get moved to their proper home (Notion, Eudaimonia koans, etc.) and **deleted** from Todoist (not completed, since they were never real tasks). Use Notion MCP for pages like AI Research, and write files to Eudaimonia for things like koans.
2. **Combine related tasks**: When multiple tasks are clearly part of the same effort (e.g., "Rebalance Portfolio" and "Update 1% Donation" both being financial), suggest merging them into a single task with details in a comment. Always confirm with the user before merging.
3. **Reprioritize**: Review priorities and flag anything that looks off. Use best judgment, then confirm with the user.
4. **Clear p4**: All p4 tasks either get bumped to a real priority or punted to the following Monday. p4 items do not get slotted into the current week.

### Phase 7: Task Slotting

Present the remaining tasks that need scheduling. For each task, suggest a time slot based on:

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
3. The `⏰ Scheduled` label removes the task from the Schedule filter so it does not resurface during triage
4. Todoist's calendar integration automatically shows scheduled tasks on Google Calendar

Google Calendar is still used directly for non-task events: meetings, transitions, sauna sessions, social events, etc.

**Recurring catch-up/call tasks**: When a recurring task (e.g., "📱 Ryan Bruno", every 2 months) gets slotted:

1. Create a new one-off Todoist task with the specific date/time, duration, and `⏰ Scheduled` label
2. Complete the recurring task so the next occurrence auto-generates on its cycle
3. The one-off task is the reminder for this week; the recurrence handles the next one

**Email outreach as slotting**: For some recurring catch-ups, the right action is not scheduling a time block but sending an email with a scheduling link. Use `gws gmail +send` (via Bash) to send outreach. Check previous email threads for tone and format. The gws-gmail-send skill has full usage docs. Always confirm with the user before executing the send command.

**Deferred tasks land on Monday**: When deferring tasks to next week or further out, always schedule them for the Monday of the target week. Monday is the landing zone where tasks get triaged during the planning session.

### Phase 8: Meal Planning

With the week's events and tasks set, plan the week's food around the finalized calendar. Invoke the `assist:plan-meals` skill via the Skill tool. It produces a plant based, seasonal, batch-prep friendly meal plan authored into the Atelic app plus a consolidated shopping list grouped by store, reconciling the pantry first. It reads the rectified week so it accounts for nights out, social dinners, and travel (a camp, race weekend, or trip where no home dinner is needed). Return here once meal planning is complete.

### Phase 9: Summary

After slotting is complete, present:

- The final week view with all new events
- Any tasks that could not be slotted (no available time)
- Remaining open slots for spontaneous work

## Mode: week

Quick view of the current or upcoming week. No task slotting, just a clean overview.

1. Fetch calendar events for the requested week
2. Present day-by-day with times, event names, and locations
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
   - **If it is a non-task event** (meeting, transition, sauna session, social event, etc.): propose the event details, confirm with the user, then create a Google Calendar event following the Calendar Event Conventions above.

## Mode: move

Move or swap an existing event.

1. User describes what to move (e.g., "Move my Wednesday sauna to Thursday")
2. Fetch the relevant events
3. Check constraints (transitions, conflicts). Defer to `assist:plan-training` move mode when any of these apply:
   - the target event is training (Sage color, training emoji, or session type like sauna / contrast / lift / run / climb)
   - the proposed destination lands in Thursday morning (SPRC window is protected regardless of what is being moved)
   - the move could affect training adjacent sequencing (e.g., a sauna or contrast block landing on a strength day, an event displacing a recurring training session)

   Include cold plunge sequencing and Thursday SPRC protection in that validation pass.
4. Present the proposed change with any downstream impacts
5. Execute after confirmation

When moving recurring events for just one week, modify only that occurrence, not the entire series. When the user wants a permanent change, update the series and flag that schedule.md may need updating.

## Calendar Event Conventions

Color coding, transition / travel, and title formats live in GC `Calendar Preferences`. The conventions below are skill specific additions.

- **Emoji prefix**: All personal events use an emoji prefix (e.g., "🏋️ Strength", "✍️ Writing")
- **Contemplation events**: Use colorId "4" (Flamingo) for recovery meetings
- **Craft events**: Use colorId "6" (Tangerine) for writing, personal projects
- **Heads Down (deep work)**: Use "🙈 Heads Down" with colorId "8" (Graphite). Protected focus blocks, created as one-offs when a particular day needs a protected window. No transitions needed (block stays at current location). The recurring Tue/Wed container retired with the Zero separation (2026-06-29).
- **Week theme banner**: The all day event that opens the week (the training week banner created by `assist:plan-training`) carries the week's theme as its title, led by a theme matched emoji (for example "🪷 Presence"). Every training detail (week label, phase, mileage and vert, guardrails) lives in the body, never the title. Set during Phase 2 (Prospective).

Include the location when the event is at a specific place.

## Training Plan Scheduling

Training event creation lives in the `assist:plan-training` skill. See that skill for the recurring placeholder table, Friday long run workflow, special weeks (cutback, altitude, race), Mon flex, and training adjacent constraints. Phase 4 above invokes it during Monday planning.

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

- `find-tasks` with `filter`: Pull tasks using the raw Todoist filter string. The saved-filter lookup by ID (`filterIdOrName`) is not supported by this MCP, so pass the Schedule filter's raw query directly (see Phase 3).
- `find-tasks-by-date`: Get tasks due in a date range
- `reschedule-tasks`: Move task due dates (always use this instead of update-tasks for date changes, to preserve recurrence)
- `update-tasks`: Modify task properties (but NOT dates). Use to set duration and labels.
- `complete-tasks`: Complete recurring tasks to fire the next occurrence
- `delete-object`: Delete notes/bookmarks that were never real tasks. Never complete these.
- `add-tasks`: Create one-off tasks (e.g., a scheduled call from a recurring catch-up)
- `add-comments`: Add detail to tasks when combining or enriching them

When slotting tasks, respect Todoist priorities:
- p1 (highest): Slot these first, in prime time
- p2: Important but flexible
- p3: Can go in smaller gaps
- p4 (default): Lowest priority, do not slot into the current week

## Gmail Integration

Use the `gws` CLI tool (via Bash) for Gmail operations during planning. Common use case: sending scheduling link emails for recurring catch-ups. Reference the gws-gmail-send skill for full usage. Always check previous email threads for tone and context before drafting. Confirm with the user before executing send commands.

## Learned Rules

- Always schedule tasks for a minimum of 30 minutes. It looks better on the calendar and provides buffer. Even a quick phone call gets 30m.
- Always include "Delete it" as a triage option. Not everything deserves to be relocated.
- Add an appropriate emoji prefix to tasks that lack one. Shorten task names to fit well on a calendar.
- When slotting a task, always set: date/time via reschedule-tasks, then duration + Scheduled label via update-tasks.
- Todoist deadlineDate is Premium-only. Note deadlines in the task description instead.
- Transition and travel conventions are in GC `Calendar Preferences`. Both Basil. Transition is *holding space* (context shift, destination in description). Travel is *explicit* (drive / transit, destination in title).
- When a Todoist bookmark is really an open question rather than an action (description phrased as a question, "Investigate" prefix, no clear next step), capture it as a koan under `~/Eudaimonia/koans/<topic>.md` and delete the Todoist task. Don't punt to next Monday — questions don't get less true with time.
- Worktree mechanics for planning live in Before Every Invocation and the worktree rule below. Cut and enter the `wk-<ISO week>` worktree before any Eudaimonia or homebase edits, never mid session.
- Do not skip Phase 4 (invoke `assist:plan-training` in week mode), even when training decisions feel already made inline during rectify. The training skill carries its own gate, the previous week's retro, which has no other place to live. Surfaced 2026-05-25 when I rationalized skipping it because strength moves had been discussed during conflict resolution; Forni caught it. The retro turned up real signal (PAH as transit, PT miss, weigh-in trend) that would otherwise have stayed invisible until next Monday.
- **Walk slotting one task at a time; never bulk-date the Schedule filter.** Phase 7 means presenting each task's proposed slot via AskUserQuestion (accept / move / defer / skip) and waiting for Forni before touching it. Do NOT batch-reschedule the whole filter onto dates in one shot and summarize after. The collaborative per-task pass *is* the process; bulk-dating erases his input and forces him to re-read and unwind it. Surfaced 2026-05-31: I rescheduled 17 filter tasks at once. Forni: "you just created a bunch of tasks and put them onto dates. That's not really how we go through the scheduling process," and "you took a lot of action without asking me. Now I've got to go back and read through your summary and readjust it."
- **Default to asking before acting throughout planning, not just slotting.** Bias toward confirming each change with Forni rather than executing a batch and reporting. Calendar moves, task reschedules, deferrals — present, then wait. Same-session feedback as above.
- **Do not place training sessions before the training readjustment is done.** The Friday long run distance depends on the week's retro and any special-week adjustment, so run the training readjustment (Phase 4 / `assist:plan-training`) first, then schedule the run. Surfaced 2026-05-31: I placed an 8 mi long run before the Wk 4 retro; the readjusted number was 6 mi off the calf restart.
- **Plan in a `wk-<ISO week>` worktree, not a shared branch.** Each planning pass runs in its own worktree (see Before Every Invocation), cut in every repo it touches: Eudaimonia for planning artifacts (schedule.md, training plan, koans) and homebase for skill or config edits. A plain shared branch is not enough. On 2026-06-14 a branch switch in another terminal moved HEAD under the session mid-plan and scattered commits onto an unrelated branch. A worktree gives the session its own working directory, so concurrent terminal activity cannot collide. All planning edits must target the worktree copy, not the main checkout. **Foot-gun: an absolute path like `~/Eudaimonia/...` resolves to the main checkout even when the session cwd is the worktree, so edits silently land on the wrong tree.** Target the worktree path (`.claude/worktrees/wk-<ISO week>/...`). If a slip happens, move it with `git -C <main> diff -- <file>` piped to `git -C <worktree> apply`, then restore main. Surfaced 2026-06-22. Supersedes the older shared branch and date stamped approaches.
