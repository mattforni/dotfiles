---
name: plan-training
description: Training plan scheduling, weekly retrospectives, strength programming, and training adjacent constraint validation. Use this skill whenever the user mentions training, lifts, strength programming, runs, swims, the 4K Friday, yoga placement, recovery days, the fall block, the September seam, Fitbod (retired), asking to schedule a training session, or asking to look back / retrospect on a past training week. Also trigger for "/assist:plan-training", "schedule my training", "what does training look like this week", "how did last week go", "training retro", "this week's lifts", or any request that touches the block plan in `Constitution/Fitness/`. Independently usable, and also called by `/assist:plan-week` during Monday planning.
argument-hint: "[week | program | move | retro]"
allowed-tools:
  - Bash
  - mcp__claude_ai_Google_Calendar__*
  - mcp__claude_ai_Strava__*
  - WebSearch
  - WebFetch
  - Read
  - Edit
  - Write
  - AskUserQuestion
---

# Plan Training Assist

Help Forni schedule the week's training from the active block plan, run the weekly retro, manage strength programming, and move sessions safely with constraint validation. The skill is independently invocable, and also gets called by `/assist:plan-week` during Monday planning before triage and slotting.

## Before Every Invocation

1. Read [learned-rules.md](learned-rules.md) in this directory
2. Read the canonical training context:
   - `~/Eudaimonia/Constitution/Fitness/2026-fall-block.md` — active block (target, weekly shape, strength template, guardrails, checkpoints, weigh-in log)
   - `~/Eudaimonia/Constitution/Fitness/CLAUDE.md` — training conventions
   - `~/Eudaimonia/schedule.md` — weekly skeleton (held loosely by design)
3. Determine the target week. Default to the current ISO week. Use `date +"%G-W%V"` for the week identifier.

The FPL block (`2026-training-plan.md`) is closed and read only for history.

## Source of Truth

The block plan lives at `Constitution/Fitness/2026-fall-block.md`. The weekly skeleton lives at `schedule.md` and is a default, not a law. Google Calendar holds the live scheduled reality.

**For scheduling decisions** (what's on the calendar this week, what conflicts with what): the calendar is truth.

**For retrospective decisions** (what actually happened last week): Strava is truth for all movement, lifts and yoga and swims included. Calendar events are scheduled intent, never evidence of completion.

**For programming decisions** (what weights and reps this week): the template in the block doc plus last week's logged numbers.

## Training Constraints

These constraints exist for real physiological and practical reasons. They are not suggestions.

**Heel guardrail**: conversational pace is the default for every run. Hard efforts are rationed to at most one per week and skipped entirely the week after any flare. Any heel, calf, or foot signal drops the next hard or trail effort, no pushing through.

**Cold plunge timing**: no cold water immersion within 4 to 6 hours after strength training. Sauna (heat only) is fine after strength. (Dormant while sauna is homeless; keep for its return.)

**Thursday mornings**: no prayer, meditation, or journaling on Thursdays. That time is reserved for getting to SPRC at 06:00, which rotates locations.

**Fasting window adjacency**: last meal 19:30, first meal 07:30. The 18:30 close is the named first lever if the weight trend stalls two consecutive weeks; propose it, never impose it.

## Calendar Event Conventions

The named label table and title formats live in `~/Eudaimonia/Admin/tools/google-calendar.md`; calendar reads and writes go through the `gws` CLI (`~/Eudaimonia/Admin/tools/gws.md`) with `eventLabelVersion: 1` on every write. Events are colored via named labels (`eventLabelId`), never the legacy `colorId`. Training specific use:

- Training events use the 🍏 Constitution label: runs, lifts, swims, yoga, body care
- 4K Friday: `🏃 4K Friday` with paired `🚙 <Trailhead>` and `🚙 Home` drive flanks (🚙 Travel label), 30 minute increments aligned to 30 minute blocks
- Every change of location needs flanking transition or travel events

## Mode: week (default)

The Monday morning training pass. Runs as part of `/assist:plan-week` plan mode (Phase 2), or standalone.

### Phase 1: Retrospective on the Previous Week

Run the full retro workflow on the just-closed ISO week (see Mode: retro). Retro precedes scheduling, always; drift compounds otherwise. If a retro subsection already exists for the just-closed week, skip to Phase 2.

### Phase 2: Detect Existing Placeholders

Fetch the week's calendar events (Monday through Sunday). Do not overwrite or duplicate; only create what is missing for this specific week.

| Cadence | Items | Action |
|---------|-------|--------|
| Recurring (assumed on calendar) | Mon lift 11:30, Wed lift 11:30, Tue swim 10:30, Thu swim 10:30, Tue DRC eve, Thu SPRC 06:00, Thu Alignment 16:30 | Skip if present; surface if missing (may be intentional) |
| Alternating (check which week) | 4K Friday (every other week) + drive flanks | Create on 4K weeks |
| Opportunistic / optional | Sun Hatha 09:30 (in town only), Fri lap window 11:15 (deep work Fridays), Sun Yin 16:15 | Surface as options, never auto create |

### Phase 3: Week Shape

Determine which Friday this is (4K or deep work) from the alternation, then lay out the week as one small table: day, session, purpose. Place yoga and swims against the actual Movement and pool schedules for the week (the skeleton is a default; studio schedules change). Verify the pool and studio still hold the assumed slots when in doubt.

**The one look weekly summary is the deliverable**: sessions by modality (3 lifts, 2 swims, runs, yoga), which Friday it is, and the weight trend in one line. Write it into the week banner body (the banner itself is created by `assist:plan-week` during Set Intention; this skill only writes the training block into its body, and flags back if the banner is missing).

### Phase 4: Strength Targets

Run the weekly half of Mode: program. This week's per lift targets ride along in the week banner body next to the shape.

### Phase 5: Special Week Handling

- **Template refresh weeks** (~Sep 14, mid Oct): run the refresh half of Mode: program.
- **September seam (W37, week of Sep 7)**: outdoor pools close at Labor Day. Walk the swim decision with Forni: indoor laps (Carla Madison, 20th Street) or reallocate the slots.
- **Travel weeks**: swap in the travel variant from the block doc; skeleton sessions become opportunistic, not graded.
- **Block close (W45, week of Nov 8)**: composition read plus the winter shape conversation.

## Mode: program

Strength programming, owned by Claude since 2026-08-05 (Fitbod retired, reversible). Forni owns form and in gym judgment; this skill owns the template, progression math, and adjustment.

**Weekly adjustment**: read last week's logged lifts from Strava (Garmin syncs through). Apply the progression rule: work within the rep range; when every set hits the top of the range, add about 5 lb upper body or 10 lb lower body and drop to the bottom of the range. Output this week's targets per lift per day. Two weeks with no progress on a lift is a stall: propose a swap or a back off set, do not silently press.

**Template refresh** (every 4 to 6 weeks, checkpoints in the block doc): rotate exercise variants while keeping the emphases (core every session, upper body, posterior chain; quads maintenance). Present the new template for review before writing it into the block doc.

## Mode: move

Move or swap a training event with constraint validation.

1. User describes what to move
2. Fetch the relevant events
3. Validate against training constraints: heel guardrail (no stacking hard efforts), Thu SPRC protection, held swim slots (moving one usually means losing the lap window, the pool schedule is specific), cold plunge sequencing when sauna returns, transition flanks on any location change
4. Present the proposed change with downstream impacts
5. Execute after confirmation

When moving recurring events for one week, modify only that occurrence. Permanent changes update the series and flag that `schedule.md` and the block doc may need updating. **Never modify existing events without explicit permission.**

## Mode: retro

Look back on a completed week. Compare planned vs actual coverage and the weight trend. Append the result as a new `### Wk N` subsection under a **Weekly Retrospectives** section of `2026-fall-block.md` (create the section on first use, immediately before References), chronological order, `####` inner headings.

### Phase 1: Determine the Target Week

Default: the most recently completed ISO week. Natural cadence is Monday morning, after Sunday's weigh-in. Heading format: `### Wk N: ISO YYYY-WNN (Mon Date to Sun Date)`, numbering from the block start (2026-W33 = Wk 1).

### Phase 2: Gather Data

1. **Block doc**: the weekly shape and any week specific notes (which Friday, checkpoints).
2. **Strava**: pull the week's activities via `mcp__claude_ai_Strava__list_activities` with `range_start`/`range_end`. Filter by `sport_type`. Strava is the sole source of record for all movement; never ask the user to confirm sessions, never infer from calendar.

### Phase 3: Build the Coverage Table

One row per planned session: Mon lift A, Tue swim, Tue DRC, Wed lift B, Thu SPRC, Thu swim, Thu Alignment, Fri (4K or deep work + lift C), Sun Hatha. Mark `✅` (hit), `❌` (missed), `↪️` (shifted), `n/a` (not applicable). Opportunistic sessions (Hatha away from home, optional Fri lap, Yin) are `n/a` when skipped, never misses. A session that moved days but happened is a hit; the skeleton is a default.

### Phase 4: The Numbers

| Metric | Source |
|---|---|
| Lifts | count vs 3, with progression notes per lift |
| Swims | count vs 2 (season dependent) |
| Runs | sessions + total miles (informational, no target) |
| Yoga | anchor hit or not |
| Weight | Sunday weigh-in, trend vs the 0.5 to 0.7 lb/wk arc |

Run mileage carries no target and no ceiling; it is context, not a grade. Mileage and vert ceilings retired with the FPL block.

### Phase 5: Load Check

Reshaped for the fall block; run every retro:

1. **Hard effort count.** More than one hard run effort in the week is a flag (heel guardrail). Any hard effort the week after a flare is a flag.
2. **Clustering.** Two big days (over 8 mi or over 1,000 ft) within 48 hours is a flag; the pattern to catch is a Saturday adventure stacked on a 4K Friday.
3. **Heel signal.** Any reported heel, calf, or foot signal drops the next week's hard and trail efforts.
4. **Recovery read.** Only when runs look hot: check easy day HR vs the Z2 ceiling via `get_activity_performance`.

### Phase 6: Interrogate Significant Deltas

When coverage shows meaningful misses (a modality at zero, two consecutive weeks of the same miss, weight trend off arc), interrogate cause before writing: injury or body, schedule or life, motivation or state, conditions. One focused question, then room for detail. Medical causes prompt for provider notes worth capturing.

### Phase 7: Write the Retro Subsection

Skeleton: Coverage, Numbers, Load Check, The Read (2 to 4 short paragraphs, direct, no effusive praise), Carry Forward, Open Items. Present the draft and confirm via one `AskUserQuestion` before saving.

### Phase 8: Adjustment Check

Coverage misses drive schedule repair (move the slot, shrink the commitment), not target step downs; there is no volume ladder in this block. A weight trend stall of two consecutive weeks triggers the nutrition lever proposal (18:30 close). A load check flag tightens the next week's run shape. Skip only when the week landed clean.

### Phase 9: Surface Trends

Scan the prior 1 to 2 retros for patterns: repeated misses, weight trend drift, progression stalls. One or two sentences, only when the data is there.

## Retired with the FPL Block

The long-run mode (Friday mountain long run workflow, route selection, vert budgets, mileage ceilings) retired 2026-08-05 with the FPL block. Route taste and the vetted shortlist are archived in git history and `reference/`; a future mountain objective reopens them as adventure planning, not weekly training.

## Key Locations

| Name | Address |
|------|---------|
| Movement RiNo | 3201 Walnut St #107, Denver, CO 80205 |
| Congress Park Pool | 850 Josephine St, Denver, CO 80206 |

## Learned Rules

See [learned-rules.md](learned-rules.md) for live, mutable training rules. Stable conventions live in this file; corrections and current life shape rules go there.
