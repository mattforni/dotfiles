---
name: assist:plan-training
description: Training plan scheduling, weekly retrospectives, and training adjacent constraint validation. Use this skill whenever the user mentions training, lifts, runs, climbs, the Friday long run, sauna timing, cold plunge timing, recovery days, cutback weeks, altitude weeks, race week, training restructure, Fitbod, asking to schedule a training session, or asking to look back / retrospect on a past training week. Also trigger for "/assist:plan-training", "schedule my long run", "what does training look like this week", "how did last week go", "training retro", or any request that touches the training plan in `Constitution/Fitness/`. Independently usable, and also called by `/assist:plan-week` during Monday planning.
argument-hint: "[week | long-run | move | retro]"
allowed-tools:
  - Bash
  - mcp__claude_ai_Google_Calendar__*
  - mcp__strava__*
  - WebSearch
  - WebFetch
  - Read
  - Edit
  - Write
  - AskUserQuestion
---

# Plan Training Assist

Help Forni schedule the week's training events from the active block plan, validate training adjacent constraints, and move training sessions safely. The skill is independently invocable, and also gets called by `/assist:plan-week` during Monday planning before triage and slotting.

## Before Every Invocation

1. Read [learned-rules.md](learned-rules.md) in this directory
2. Read the canonical training context:
   - `~/Eudaimonia/Constitution/Fitness/2026-training-plan.md` — current block plan with weekly Long mi, Vert ft, Fri shape
   - `~/Eudaimonia/Constitution/Fitness/CLAUDE.md` — training conventions
   - `~/Eudaimonia/schedule.md` — recurring weekly anchors (yoga, lifts, climbs, SPRC, sauna)
3. Determine the target week. Default to the current ISO week. Use `date +"%G-W%V"` for the week identifier.

## Source of Truth

The training plan lives at `Constitution/Fitness/2026-training-plan.md`. The weekly skeleton (recurring anchors) lives at `schedule.md`. Google Calendar holds the live scheduled reality, including one off events (Friday long run + paired drives, race weekends, altitude trips).

**For scheduling decisions** (what's on the calendar this week, what conflicts with what): the calendar is truth.

**For retrospective decisions** (what actually happened last week): Strava is truth for runs; the user is truth for everything else. Calendar events are not evidence of completion — they reflect scheduled intent, nothing more.

## Training Constraints

These constraints exist for real physiological and practical reasons. They are not suggestions.

**Cold plunge timing**: No cold water immersion within 4 to 6 hours after strength training. Cold exposure blunts the inflammatory response needed for muscle adaptation. Sauna (heat only) is fine after strength. When moving sauna or contrast sessions, check whether strength training happened earlier that day.

**Thursday mornings**: No prayer, meditation, or journaling on Thursdays. That time is reserved for getting to SPRC at 6:00 AM, which rotates locations.

**Fasting window adjacency**: Last meal at 19:30, first meal at 07:30. Long runs starting at 07:00 begin in the fasted state, ending close to or just after the first meal window. Plan fueling around this.

## Calendar Event Conventions

Color coding, transition / travel, and title formats live in GC `Calendar Preferences`. Training specific use:

- Training events use Sage (colorId 2): runs, lifts, yoga, body care, recovery
- Long runs: `🏃 <MILES> mi Long Run`
- Travel to trailheads: `🚙 <LOCATION>` with the destination in the title (Basil, colorId 10)
- Drive home: `🚙 Home` (Basil, colorId 10)
- Travel events use 30 minute increments aligned to 30 minute blocks (e.g., 06:30 to 07:00, not 06:15 to 07:00)
- Every change of location needs flanking transition or travel events. A long run is incomplete without its drive flanks.

## Mode: week (default)

The Monday morning training pass. Runs as part of `/assist:plan-week` plan mode (Phase 2), or standalone for ad hoc training planning.

The pass has two stages: **retrospective** on the just-closed week, then **scheduling** the current week. Retro first is non-negotiable — scheduling without knowing what happened last week causes drift to compound.

### Phase 1: Retrospective on the Previous Week

Run the full retro workflow on the just-closed ISO week (see Mode: retro below). The retro produces:

- A new `### Wk N` subsection appended to the training plan
- An adherence read on what hit, what slipped
- A plan adjustment check: do the current week's targets still hold, or do they step down?

When the retro reveals drift (long run missed, weekly mileage 30%+ under plan, two consecutive weeks of misses, or weight off trajectory), pause before scheduling. Propose adjustments to the current week's targets and get user confirmation before continuing to Phase 2.

If a `### Wk N` subsection already exists in the plan for the just-closed week, skip Phase 1 and continue to Phase 2.

### Phase 2: Detect Existing Placeholders

Fetch the week's calendar events (Monday through Sunday) and check for already existing recurring or one off events. Do not overwrite or duplicate. Only create what is missing for this specific week.

| Cadence | Items | Action |
|---------|-------|--------|
| Recurring (assumed already on calendar) | Mon yoga 12:15, Tue lift 11:00, Tue DRC eve, Thu SPRC morning, Thu lift 11:00, Wed PAH / sauna | Skip if present |
| One off (variable, per week) | Fri long run + paired drive blocks | Create fresh each week |

If a recurring placeholder is missing, surface it to the user rather than silently creating it. The user may have skipped the session this week intentionally.

### Phase 3: Friday Long Run

Run the Friday long run workflow (see Mode: long-run below). This is the primary one off creation each week.

### Phase 4: Special Week Handling

Check the current week number against the training plan and apply special week logic:

- **Cutback weeks (4, 8)**: Fri long is shorter and on lighter terrain. Same workflow, smaller numbers.
- **Altitude weeks (9, 10)**: Front Range altitude (week 9) or Aspen recon (week 10). Week 10 includes a Thu drive out + overnight; surface logistics to the user before creating events.
- **Race week (13)**: Fri 7/31 is the FPL race itself. Coordinate the race day plan as a separate workflow, not a training long run.

### Phase 5: Mon Flex

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

## Mode: retro

Look back on a completed (or in progress) training week. Compare planned vs actual coverage, mileage, vert, and qualitative shape. Append the result as a new `### Wk N` subsection under the **Weekly Retrospectives** section of `2026-training-plan.md`, in chronological order, so adherence is tracked alongside the plan itself.

### Phase 1: Determine the Target Week

- Default: the most recently completed ISO week (`date -v-mon -v-7d +"%G-W%V"` style logic, or simply the prior Monday-to-Sunday window).
- The natural cadence is Monday morning, when Sunday's weigh-in has been logged and the just-closed Mon-Sun week is the unambiguous target.
- If invoked outside Monday, default to the most recently completed week. Confirm with the user when intent is ambiguous (e.g., mid-week ad hoc retros).
- The subsection heading uses the ISO week identifier (e.g., `### Wk 1: ISO 2026-W19 (May 4 to May 10)`).

### Phase 2: Gather Data

Pull from two sources in parallel:

1. **Training plan**: read the row in `2026-training-plan.md` for the target week. Note **Long mi**, **Vert ft**, **Fri shape**, **Weight** target, **Nutrition focus**.
2. **Strava**: pull all activities for the week via `mcp__strava__get-all-activities` with `startDate` and `endDate`. Then call `mcp__strava__get-activity-details` on each run to get **distance** and **elevation gain in meters** (convert to ft: meters * 3.28084).

**Strava is the source of truth for what happened.** Do not pull calendar data for retro purposes. The calendar shows scheduled intent, not completion. A calendar event existing is not evidence the session happened.

### Phase 3: Build the Coverage Table

For every planned session in the week, record actual status:

- **Runs (DRC, SPRC, long run, Mon flex)**: match Strava activities by date and approximate distance. No matching Strava activity = miss.
- **Yoga, lifts, climbing, sauna, contrast therapy**: not captured in Strava. Ask the user explicitly via `AskUserQuestion` whether each happened. Batch the questions when there are several. Do not infer completion from calendar events existing.

Mark each session as `✅` (hit), `❌` (missed), `↪️` (shifted), `❓` (open / status unknown), or `n/a` (not applicable this week).

### Phase 4: Compute the Numbers

| Metric | Sources |
|---|---|
| Total miles | Sum of Strava run distances (km * 0.621371) |
| Long run miles | The longest run / trail run of the week |
| Vert ft | Sum of Strava elevation gain across runs (m * 3.28084) |
| Weight | Sunday morning weigh-in if available; otherwise note as `pending` |

Compare each against the plan row. Express delta as percentage and direction.

**Vert is co-equal with mileage.** The plan tracks both; the retro evaluates against both. Hitting mileage and missing vert (e.g., long run on flat terrain instead of trail) is a partial hit, not a hit.

### Phase 5: Interrogate Significant Deltas

When the numbers show significant divergence from plan — mileage 30%+ under, long run missed entirely, two consecutive weeks of misses, or weight off trajectory — interrogate the cause before writing the retro. Numbers alone are not the read; they are the symptom. The cause shapes the adjustment.

Categories worth surfacing via `AskUserQuestion`:

- **Injury or body**: pain, soreness, illness, recovery debt
- **Schedule / life**: travel, work compression, family obligations, social
- **Motivation / state**: low energy, emotional load, post hard week dip
- **Conditions**: weather, gear, route or logistics

Ask one focused question for category, then leave room for the user to fill in detail in chat. When the cause is medical (injury, illness), explicitly prompt for any provider notes, AI consults, or external feedback the user wants captured verbatim or summarized. Capture that context in the retro's "The Read" — it shapes adjustment more than the numbers do.

Skip this phase only when the retro lands at or above plan with no meaningful gap.

### Phase 6: Write the Retro Subsection

Append a new subsection at the bottom of the **Weekly Retrospectives** section in `2026-training-plan.md`. Use this skeleton (note the heading levels: `###` for the week, `####` for the inner sections so the table of contents stays clean):

```markdown
### Wk N: ISO YYYY-WNN (Mon Date to Sun Date)

*Phase: <phase>.*

#### Coverage

| Session | Plan | Actual |
|---|---|---|
...

#### Numbers

| Metric | Plan | Actual | Delta |
|---|---|---|---|
| Total miles | ... | ... | ... |
| Long run miles | ... | ... | ... |
| Vert ft | ... | ... | ... |
| Weight | ... | ... | ... |

#### The Read

<2 to 4 short paragraphs on what hit, what slipped, what's open. Be specific and direct. Avoid effusive praise or hedging.>

#### Carry Forward

<Bullets for next week: structural fixes, defended slots, calibration adjustments.>

#### Open Items

<Things unresolved at retro time, e.g. lift status pending Strava upload or user confirmation.>
```

Before writing, present the draft inline and ask the user one question via `AskUserQuestion`: anything to add or correct? Save after they confirm or redirect. Use `Edit` to insert the new subsection at the end of the Weekly Retrospectives section, immediately before the `## References` heading.

### Phase 7: Plan Adjustment Check

Compare the just-written retro to the **current** week's plan row. When the retro shows under-coverage — long run missed, weekly mileage 30%+ under, two weeks in a row of misses, or weight off trajectory — the current week's targets likely need to step down rather than press forward.

Propose adjustment options to the user via `AskUserQuestion`. Typical levers:

- **Long run target**: hold the plan number, drop to last week's actual, or drop further to rebuild rhythm
- **Vert target**: same logic, often paired with the mileage call
- **Phase shift**: if drift is severe, treat the current week as a recovery / rebuild rather than continuing the build progression

After the user decides, update the row in `2026-training-plan.md` to reflect the adjusted targets. Annotate inline so both numbers stay visible — e.g., `20 (adjusted from 22)`. The original plan and the adjustment trace together.

Skip this phase only when the retro shows the week landed at or above plan.

### Phase 8: Surface Trends

After saving, briefly scan the prior 1 to 2 retro subsections already in the plan file (if they exist). Surface any pattern: repeated misses, drifting metrics, growing or shrinking adherence. Keep this short — one or two sentences. Do not invent patterns when there is not enough data.

## Key Locations

| Name | Address |
|------|---------|
| Movement RiNo | 3201 Walnut St #107, Denver, CO 80205 |
| Naosu Sauna | 3145 Larimer St, Denver, CO 80205 |

## Learned Rules

See [learned-rules.md](learned-rules.md) for live, mutable training rules. Stable conventions live in this file; corrections and current life shape rules go there.
