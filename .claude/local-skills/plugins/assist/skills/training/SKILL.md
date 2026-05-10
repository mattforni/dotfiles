---
name: assist:training
description: Training plan scheduling and training adjacent constraint validation. Use this skill whenever the user mentions training, lifts, runs, climbs, the Friday long run, sauna timing, cold plunge timing, recovery days, cutback weeks, altitude weeks, race week, training restructure, Fitbod, or asks to schedule a training session. Also trigger for "/assist:training", "schedule my long run", "what does training look like this week", or any request that touches the training plan in `Constitution/Fitness/`. Independently usable, and also called by `/assist:schedule` during Monday planning.
argument-hint: "[week | long-run | move]"
allowed-tools:
  - Bash
  - mcp__claude_ai_Google_Calendar__*
  - WebSearch
  - WebFetch
  - Read
  - Edit
  - Write
  - AskUserQuestion
---

# Training Assist

Help Forni schedule the week's training events from the active block plan, validate training adjacent constraints, and move training sessions safely. The skill is independently invocable, and also gets called by `/assist:schedule` during Monday planning before triage and slotting.

## Before Every Invocation

1. Read [learned-rules.md](learned-rules.md) in this directory
2. Read the canonical training context:
   - `/Users/forni/Eudaimonia/Constitution/Fitness/2026-training-plan.md` — current block plan with weekly Long mi, Vert ft, Fri shape
   - `/Users/forni/Eudaimonia/Constitution/Fitness/CLAUDE.md` — training conventions
   - `/Users/forni/Eudaimonia/schedule.md` — recurring weekly anchors (yoga, lifts, climbs, SPRC, sauna)
3. Determine the target week. Default to the current ISO week. Use `date +"%G-W%V"` for the week identifier.

## Source of Truth

The training plan lives at `Constitution/Fitness/2026-training-plan.md`. The weekly skeleton (recurring anchors) lives at `schedule.md`. Google Calendar holds the live reality, including one off events (Friday long run + paired drives, race weekends, altitude trips).

When there is a conflict between the plan and the calendar, the calendar is the current truth. The plan describes what a "normal" training week should look like.

## Training Constraints

These constraints exist for real physiological and practical reasons. They are not suggestions.

**Cold plunge timing**: No cold water immersion within 4 to 6 hours after strength training. Cold exposure blunts the inflammatory response needed for muscle adaptation. Sauna (heat only) is fine after strength. When moving sauna or contrast sessions, check whether strength training happened earlier that day.

**Thursday mornings**: No prayer, meditation, or journaling on Thursdays. That time is reserved for getting to SPRC at 6:00 AM, which rotates locations.

**Fasting window adjacency**: Last meal at 18:30, first meal at 07:30. Long runs starting at 07:00 begin in the fasted state, ending close to or just after the first meal window. Plan fueling around this. Do not propose long runs that push deep into the fasted window without flagging.

## Calendar Event Conventions

Color coding, transition / travel, and title formats live in GC `Calendar Preferences`. Training specific use:

- Training events use Sage (colorId 2): runs, lifts, yoga, body care, recovery
- Long runs: `🏃 <MILES> mi Long Run`
- Travel to trailheads: `🚙 <LOCATION>` with the destination in the title (Basil, colorId 10)
- Drive home: `🚙 Home` (Basil, colorId 10)
- Travel events use 30 minute increments aligned to 30 minute blocks (e.g., 06:30 to 07:00, not 06:15 to 07:00)
- Every change of location needs flanking transition or travel events. A long run is incomplete without its drive flanks.

## Mode: week (default)

Schedule the week's training events from the active block plan. This is the mode `/assist:schedule` calls during Monday planning.

### Phase 1: Detect Existing Placeholders

Fetch the week's calendar events (Monday through Sunday) and check for already existing recurring or one off events. Do not overwrite or duplicate. Only create what is missing for this specific week.

| Cadence | Items | Action |
|---------|-------|--------|
| Recurring (assumed already on calendar) | Mon yoga 12:15, Tue lift 11:00, Tue DRC eve, Thu SPRC morning, Thu lift 11:00, Wed climb / PAH / sauna | Skip if present |
| One off (variable, per week) | Fri long run + paired drive blocks | Create fresh each week |

If a recurring placeholder is missing, surface it to the user rather than silently creating it. The user may have skipped the session this week intentionally.

### Phase 2: Friday Long Run

Run the Friday long run workflow (see Mode: long-run below). This is the primary one off creation each week.

### Phase 3: Special Week Handling

Check the current week number against the training plan and apply special week logic:

- **Cutback weeks (4, 8)**: Fri long is shorter and on lighter terrain. Same workflow, smaller numbers.
- **Altitude weeks (9, 10)**: Front Range altitude (week 9) or Aspen recon (week 10). Week 10 includes a Thu drive out + overnight; surface logistics to the user before creating events.
- **Race week (13)**: Fri 7/31 is the FPL race itself. Coordinate the race day plan as a separate workflow, not a training long run.

### Phase 4: Mon Flex

Optional easy ~4 mi run on Mon. Energy dependent. Do not auto schedule. Surface as an option, do not create without explicit user confirmation.

## Mode: long-run

Standalone Friday long run workflow. Use when the user wants to plan or replan just the long run without doing a full week pass.

1. Look up the current week row in `2026-training-plan.md` for **Long mi**, **Vert ft**, and **Fri shape** (route candidate or terrain).
2. Pick a specific route matching those numbers. Use `WebSearch` on alltrails.com to find the trail page when needed.
3. Confirm the route with the user via `AskUserQuestion` before creating events.
4. Default start time is **07:00**. Front Range trailheads are ~30 min from Denver; altitude weeks (9, 10) are longer drives.
5. Long run duration: budget ~15 to 16 min/mi for moderate trail pace with vert (e.g., 8 mi @ 1,500 ft is ~2 hr).
6. Create three Fri events per GC Calendar Preferences:
   - `🚙 <Trailhead Name>` — Basil (colorId 10) — drive out. Location = trailhead address. 30 min block aligned to 30 min increments (e.g., 06:30 to 07:00).
   - `🏃 <MILES> mi Long Run` — Sage (colorId 2) — location = AllTrails URL.
   - `🚙 Home` — Basil (colorId 10) — drive back. Same 30 min alignment.

## Mode: move

Move or swap a training event with constraint validation.

1. User describes what to move (e.g., "Move Tuesday's lift to Wednesday", "Reschedule sauna to Friday")
2. Fetch the relevant events
3. Validate against training constraints:
   - Cold plunge sequencing: if moving a cold plunge or contrast session, check that no strength training happened in the prior 4 to 6 hours
   - Thursday SPRC protection: do not propose moves that displace Thu 06:00 SPRC unless the user explicitly intends to skip
   - Transition flanks: if the moved event involves a location change, ensure the destination day has the matching drive or transition blocks
4. Present the proposed change with any downstream impacts
5. Execute after confirmation

When moving recurring events for just one week, modify only that occurrence, not the entire series. When the user wants a permanent change, update the series and flag that `schedule.md` and the training plan may need updating.

**Never modify existing events without explicit permission.** Always present the proposed move and wait for approval. Reclaim auto reschedule effects can ripple through nearby flexible events; warn when they're at risk.

## Key Locations

| Name | Address |
|------|---------|
| Movement RiNo | 3201 Walnut St #107, Denver, CO 80205 |
| Naosu Sauna | 3145 Larimer St, Denver, CO 80205 |

## Learned Rules

See [learned-rules.md](learned-rules.md) for live, mutable training rules. Stable conventions live in this file; corrections and current life shape rules go there.
