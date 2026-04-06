---
name: assist:schedule
description: Weekly schedule planning, calendar management, and Monday morning task slotting. Use this skill whenever the user mentions their schedule, weekly planning, Monday planning session, slotting tasks, finding free time, checking what their week looks like, moving or swapping calendar events, or wants help fitting something into their week. Also trigger when the user asks about training schedule, sauna timing, or whether they're covering their V2MOM measures.
argument-hint: "[plan | week | slot | move]"
allowed-tools:
  - Bash
  - mcp__claude_ai_Google_Calendar__*
  - mcp__claude_ai_Todoist__*
  - mcp__claude_ai_Notion__*
  - Read
  - Edit
  - Write
  - AskUserQuestion
---

# Schedule Assist

Help Forni manage his weekly schedule: review the week, slot Todoist tasks into open time, and make calendar adjustments while respecting training and recovery constraints.

## Before Every Invocation

1. Read [learned-rules.md](../../learned-rules.md) for any schedule-specific corrections
2. Read the weekly template: `/Users/forni/Eudaimonia/schedule.md`
3. Determine the current week (Monday through Sunday) based on today's date

## Source of Truth

The weekly template lives at `/Users/forni/Eudaimonia/schedule.md`. It defines the recurring skeleton: work hours, training sessions, transitions, recovery, and community commitments. The Google Calendar holds the live reality, including one-off events and Reclaim work blocks.

When there is a conflict between the template and the calendar, the calendar is the current truth. The template describes what a "normal" week should look like.

## Constraints

These constraints exist for real physiological and practical reasons. They are not suggestions.

**Cold plunge timing**: No cold water immersion within 4-6 hours after strength training. Cold exposure blunts the inflammatory response needed for muscle adaptation. Sauna (heat only) is fine after strength. When moving sauna/contrast sessions, check whether strength training happened earlier that day.

**Transitions**: Every movement between locations gets a 30-minute buffer. This is not travel time alone; it includes the mental shift between contexts. Do not schedule events back-to-back without a transition unless they are at the same location.

**Fasting window**: Last meal at 18:30, first meal at 07:30 (13:11 intermittent fasting). Do not schedule dinner events after 18:30 without flagging the fasting impact.

**Work hours**: 8:00-16:00 is the target. Mon/Tue/Thu in office at Zero Homes, Wed/Fri from home. Lunch breaks on Mon (yoga 12:15) and Tue (climbing 12:00) are already spoken for.

**Lights out**: 21:30. Events that push past 21:00 should be flagged.

**Thursday mornings**: No prayer/meditation/journaling on Thursdays. That time is reserved for getting to SPRC at 6:00 AM, which rotates locations.

## Mode: plan (default)

The Monday morning planning session. This is the primary use case.

### Phase 1: Load and Rectify

1. Fetch this week's calendar events (Monday through Sunday)
2. Fetch Todoist tasks using the **Schedule filter** (ID: `2327901782`). Use `find-tasks` with `filterIdOrName`. The filter logic is: `(!(@⏰ Scheduled | @⏲️ Recurring) | overdue) & due before: next monday` — this grabs all overdue tasks plus non-recurring, non-scheduled tasks due before next Monday.
3. Read the weekly template to know the recurring skeleton

**Free vs Busy events**: Check the `transparency` field on each calendar event. Events with `transparency: "transparent"` are "free" (informational only, no action required). Filter them out of the working set. Do not treat free events as conflicts or as consuming time slots. Only `opaque` (busy) events block time.

**Conflict resolution**: Compare the live calendar against the weekly template and against itself. Identify:

- Overlapping busy events (two events claiming the same time)
- One-off events that displace recurring template activities (e.g., a party during sauna time)
- Constraint violations (cold plunge timing, missing transitions, fasting window breaches)

Present all conflicts to the user, one at a time or in small batches. For each conflict, propose a resolution:

- **Keep one, cut the other** (delete or decline)
- **Move one** to an open slot (check constraints before suggesting)
- **Accept the displacement** (skip the recurring activity this week, or reschedule it to another day)

**Never modify existing events without explicit permission.** Always present the conflict and proposed resolution, then wait for approval before taking any action. This is especially critical for events with other attendees or events booked via Reclaim.ai scheduling links (those were scheduled by other people). Be aware that deleting or moving adjacent events can cause Reclaim to auto-reschedule nearby flexible events as a side effect.

Execute only the agreed changes before moving on. The calendar should be clean and conflict-free before the overview.

### Phase 2: Week Overview

Present the rectified week at a glance, day by day. For each day show:

- Training, transitions, and recovery from the calendar (post-rectification)
- Work meetings and Reclaim blocks
- One-off events (social plans, appointments)
- Open slots where tasks could be scheduled

This is a clean view of what the week actually looks like after conflicts are resolved.

### Phase 2.5: Triage

Before slotting, triage the Todoist tasks from the Schedule filter. This is a collaborative pass through all tasks to:

1. **Identify notes vs tasks**: Forni uses Todoist as a quick notepad. Items that are bookmarks, quotes, links, or ideas get moved to their proper home (Notion, Eudaimonia koans, etc.) and **deleted** from Todoist (not completed, since they were never real tasks). Use Notion MCP for pages like AI Research, and write files to Eudaimonia for things like koans.
2. **Combine related tasks**: When multiple tasks are clearly part of the same effort (e.g., "Rebalance Portfolio" and "Update 1% Donation" both being financial), suggest merging them into a single task with details in a comment. Always confirm with the user before merging.
3. **Reprioritize**: Review priorities and flag anything that looks off. Use best judgment, then confirm with the user.
4. **Clear p4**: All p4 tasks either get bumped to a real priority or punted to the following Monday. p4 items do not get slotted into the current week.

### Phase 3: Task Slotting

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

### Phase 4: Summary

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
3. Check constraints (cold plunge timing, transitions, conflicts)
4. Present the proposed change with any downstream impacts
5. Execute after confirmation

When moving recurring events for just one week, modify only that occurrence, not the entire series. When the user wants a permanent change, update the series and flag that schedule.md may need updating.

## Calendar Event Conventions

When creating or modifying events, follow these patterns from the existing calendar:

- **Emoji prefix**: All personal events use an emoji prefix (e.g., "🏋️ Strength", "↔️ Transition", "✍️ Writing")
- **Transitions**: Use "↔️ Transition" with colorId "10" (Basil)
- **Constitution events**: Use colorId "2" (Sage) for training, yoga, sauna
- **Community events**: Use colorId "6" (Tangerine) for run clubs, volunteering, social
- **Contemplation events**: Use colorId "4" (Flamingo) for recovery meetings
- **Craft events**: Use colorId "6" (Tangerine) for writing, personal projects

Include the location when the event is at a specific place.

## Key Locations

| Name | Address |
|------|---------|
| Zero Homes | RiNo (office) |
| Movement RiNo | 3201 Walnut St #107, Denver, CO 80205 |
| Improper City | 3201 Walnut St #107, Denver, CO 80205 |
| Naosu Sauna | 3145 Larimer St, Denver, CO 80205 |
| Ratio Beerworks | 2920 Larimer St, Denver, CO 80205 |
| Hearth | 2500 Lawrence St, Denver, CO 80205 |
| Project Angel Heart | 4950 Washington St Suite 200, Denver, CO 80216 |
| STEP Denver | 2029 Larimer St, Denver, CO 80205 |
| High Noon (1311 York) | 1311 York St, Denver, CO 80206 |

## Todoist Integration

Use the Todoist MCP tools to read and reschedule tasks. Key operations:

- `find-tasks` with `filter`: Pull tasks using a raw Todoist filter string, or use `filterIdOrName` to reference the saved Schedule filter by ID (`2327901782`). Either parameter works.
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
