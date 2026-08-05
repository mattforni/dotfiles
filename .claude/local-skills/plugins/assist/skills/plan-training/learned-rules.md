# Learned Rules

Training specific rules tied to current life shape. Read on every invocation. Stable training conventions live in [SKILL.md](SKILL.md); rules that need updating as the season, plan, or body changes go here. Pruned 2026-08-05 at the fall block reshape; FPL era rules (long run pace budgets, route shortlist, Mon flex, vert co-equality, mileage budget math) live in git history.

## The Fall Block Shape (2026-08-05)

- **The skeleton is held loosely.** Every session is a default, not a law. Lifts, swims, and yoga move freely; place yoga and swims against the actual Movement and pool schedules each week rather than assuming the skeleton.
- **Swims are held lap slots.** Tue and Thu 10:30 to 11:30 at Congress Park; the slot straddles the shared lane window into the full lap window, so moving it usually means losing lap access. Tuesday flows into High Noon 12:00; Thursday's High Noon is a maybe, decided in the moment, so never mark a skipped Thursday High Noon as a miss.
- **4K Friday alternates.** Every other Friday, Golden, with the Tootsies / Sexy Pace crew, conversational. Track which Friday the week is in the week banner. Drive flanks required like any trailhead run. Deep work Fridays are the off weeks; Lift C lands Friday afternoon either way.
- **Sun Hatha is opportunistic.** In town means go, traveling means skip without guilt; `n/a` in retros when away, never a miss. Week planning slides to 11:00 on Hatha mornings.
- **Heel guardrail: intensity is the trigger, not volume.** The heel flares after hard efforts (the 6:27 DRC mile, 2026-08-04), not easy miles. Conversational is the default; at most one hard effort a week; skip hard efforts entirely the week after any flare; any heel signal drops the next hard or trail effort. PT is a named focus of the block, form is the fix.
- **Scale trend is directional.** Sunday reads only for the log; single reads are noise. A 2 to 3 lb rebound through mid August is glycogen and water, not failure; the trend restarts from the first standard Sunday reads.

## Strength Programming

- **Claude programs the strength work; Fitbod retired 2026-08-05** (reversible). Template and progression rules live in the block doc. Forni owns form and the in gym call; the skill owns targets and adjustments. Core appears in every session, not just Friday.
- **Progression is double progression.** Top of the rep range on all sets earns about 5 lb (upper) or 10 lb (lower) and a reset to the bottom of the range. Two stalled weeks on a lift proposes a swap or back off, never silent pressing.
- **Template refreshes are presented, never imposed.** Every 4 to 6 weeks (block doc checkpoints), rotate variants inside the same emphases and show Forni before writing.

## Calendar Mechanics

- **30 min alignment for travel blocks**: drive events use 30 minute increments aligned to 30 minute blocks (06:30 to 07:00, not 06:15 to 07:00). Transitions default to 30 minutes (size, not alignment).
- **Always create both drive flanks**: a trailhead run without a paired `🚙 <Trailhead>` and `🚙 Home` is incomplete. Create all three together.
- **Edit training events on the Life calendar only** (🌱 Life, `mattforni@gmail.com`). Surfaced 2026-06-07.
- **A split recurring series can't have its start time changed; recreate it.** When a recurring event's ID ends in `_R<timestamp>`, the Calendar API rejects a start time change with `400 Invalid start time`. Delete and insert fresh. Plain recurring masters shift fine via a full `gws calendar events update` (GET, bump, PUT); a bare `events patch` of start/end fails the same way. Surfaced 2026-06-07.
- **Do not silently create missing recurring events**: surface them; the user may have skipped intentionally.

## Constraint Hygiene

- **Cold plunge after strength**: 4 to 6 hour gap, non-negotiable when contrast therapy returns. Sauna (heat only) is fine after strength.
- **Thursday morning is protected**: SPRC at 06:00 displaces all morning practices on Thursday.
- **Transitions are ALWAYS 30 minutes. Never 15.** Move the adjacent block instead of shrinking the transition. Forni, 2026-07-19: "always 30 minutes for transitions always, always, always."

## Retro Evaluation

- **Retro precedes scheduling.** Never schedule the current week without knowing what happened last week; drift compounds. Codified 2026-05-18 after Wk 2 of the FPL block was scheduled over an unexamined slip.
- **Strava is the source of record for ALL movement; never ask the user to confirm sessions.** Lifts, yoga, swims, runs, all of it. A session absent from Strava did not happen, for retro purposes. Forni, 2026-08-02: "Strava will tell you if lifts or yoga happened. You do not need to ask me again."
- **Tally by sport_type, not distance alone.** Filter activities by type before counting; walks and yoga get miscounted otherwise. The native connector's `list_activities` carries `sport_type`; prefer it. Codified 2026-06-26.
- **Strava distances are metric; convert.** miles = meters / 1609.34, feet = meters * 3.28084.
- **Interrogate significant deltas, don't just record them.** The cause drives the adjustment more than the numbers do; ask category, then leave room for detail. Codified 2026-05-18 (the Wk 2 heel injury read as "fell off" until interrogated).
- **PAH is transit, not training.** The Wednesday bike commute to Project Angel Heart is logistics; mark PAH `n/a` in coverage. Codified 2026-05-25.
- **Coverage misses drive schedule repair, not target step downs.** There is no volume ladder in the fall block; a missed session means the slot needs moving or shrinking, and only a two week weight stall touches nutrition (the 18:30 close lever, proposed not imposed).

## Reference Library

- **Settled research lives in `reference/` beside this skill; consult it before re researching.** `reference/tapering.md` (2026-07-19) is archived FPL material; still authoritative if a race block returns. The `coach` agent (`~/.claude/agents/coach.md`) reads the same block doc and references; delegate progression analysis, retro reads, and load questions to it.

## Weekly Summary

- **Every training pass ends with the one look weekly summary before anything else gets discussed**: sessions by modality, which Friday it is (4K or deep work), and the weight trend in one line, then the day by day table. Surfaced 2026-07-19; reshaped 2026-08-05 from mileage to modality. Write the same summary into the week banner body.
