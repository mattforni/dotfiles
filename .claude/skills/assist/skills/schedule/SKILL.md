---
name: assist:schedule
description: Weekly schedule planning, calendar management, and Monday morning task slotting. Use this skill whenever the user mentions their schedule, weekly planning, Monday planning session, slotting tasks, finding free time, checking what their week looks like, moving or swapping calendar events, or wants help fitting something into their week. Also trigger when the user asks about training schedule, sauna timing, or whether they're covering their V2MOM measures.
argument-hint: "[plan | week | slot | move]"
allowed-tools:
  - Bash
  - mcp__claude_ai_Google_Calendar__*
  - mcp__claude_ai_Todoist__*
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

### Phase 1: Load Context

1. Fetch this week's calendar events (Monday through Sunday)
2. Fetch Todoist tasks that are due this week or scheduled for this week
3. Read the weekly template to know the recurring skeleton

### Phase 2: Week Overview

Present the week at a glance, day by day. For each day show:

- Recurring events from the template (training, transitions, recovery)
- Work meetings and Reclaim blocks from the calendar
- One-off events (social plans, appointments)
- Open slots where tasks could be scheduled

Highlight any conflicts between the template and the calendar (e.g., a work meeting during lunch yoga).

### Phase 3: Task Slotting

Present the Todoist tasks that need scheduling. For each task, suggest a time slot based on:

- The task's priority and due date
- Available open slots in the calendar
- Context: deep work tasks go in morning blocks, admin in smaller gaps
- Location: if a task requires being somewhere specific, match it to the right day

Present suggestions via AskUserQuestion, one at a time or in small batches. The user can:

- **Accept** the proposed slot (create a calendar event)
- **Move** to a different slot
- **Defer** to next week (reschedule in Todoist)
- **Skip** for now

When creating calendar events for tasks, use the task name as the event summary. Include a 30 min transition before and after if the task requires a location change.

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
5. Create the calendar event in the chosen slot

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

- `find-tasks-by-date`: Get tasks due in a date range
- `find-tasks`: Search for specific tasks
- `reschedule-tasks`: Move task due dates (always use this instead of update-tasks for date changes, to preserve recurrence)
- `update-tasks`: Modify task properties (but NOT dates)

When slotting tasks, respect Todoist priorities:
- p1 (highest): Slot these first, in prime time
- p2: Important but flexible
- p3: Can go in smaller gaps
- p4 (default): Lowest priority, fill remaining time
