# Learned Rules

Training specific rules tied to current life shape. Read on every invocation. Stable training conventions live in [SKILL.md](SKILL.md); rules that need updating as the season, plan, or body changes go here.

## Pace and Distance

- **Long run pace budget**: ~15 to 16 min/mi for moderate trail pace with vert. Use this when computing duration (e.g., 8 mi @ 1,500 ft is ~2 hr). Adjust upward for altitude weeks.
- **Default long run start time**: 07:00. Front Range trailheads are ~30 min from Denver, so the drive block starts at 06:30. Altitude weeks (9, 10) need longer drive flanks; surface before creating events.

## Calendar Mechanics

- **30 min alignment for travel blocks**: Drive events use 30 minute increments aligned to 30 minute blocks (06:30 to 07:00, not 06:15 to 07:00). Transitions default to 30 minutes (size, not alignment).
- **Always create both drive flanks**: A long run event without a paired `🚙 <Trailhead>` and `🚙 Home` is incomplete. Create all three together.

## Mon Flex

- **Never auto schedule Mon flex**: The Monday easy ~4 mi run is energy dependent. Surface as an option, never create without explicit user confirmation.

## Recurring Placeholders

- **Do not silently create missing recurring events**: If a Mon yoga / Tue lift / Thu SPRC is missing this week, surface it to the user. They may have skipped intentionally.

## Constraint Hygiene

- **Cold plunge after strength**: 4 to 6 hour gap is non-negotiable. Sauna (heat only) is fine after strength; the gap rule applies to cold immersion only.
- **Thursday morning is protected**: SPRC at 06:00 displaces all morning practices on Thursday. No prayer, meditation, or journaling slotted into Thu AM.

## Long Run Day

- **Long runs are Friday, not Saturday.** WFH Fri is the slot that makes the long run in the mountains possible; Saturday is open / adventure. A Fri-to-Sat slip should be a deliberate one-time choice, never a default. Flag it explicitly when retros show the long landing on a non-Friday.

## Retro Evaluation

- **Retro precedes scheduling.** The Mon morning training pass starts with the previous week's retro. Never schedule the current week without knowing what happened last week — drift compounds. The week mode (Phase 1) enforces this; standalone scheduling without a prior retro is the wrong shape.

  **Why:** Wk 2 was scheduled forward without a retro on Wk 1's slip; by Wk 3 planning the gap was a full week behind. Codified 2026-05-18 (Wk 3 planning session).

  **How to apply:** Always run retro before scheduling, even when the user invokes the skill mid week or for an ad hoc pass.

- **Strava is the source of truth for completion, not the calendar.** Calendar events represent scheduled intent, not evidence anything happened. For Strava tracked sessions (runs), the activity is the proof. For non Strava sessions (yoga, lifts, sauna, contrast), ask the user directly via `AskUserQuestion`. Do not pull calendar data into retro coverage tables.

  **Why:** Calendar inference produces false positives on adherence. An event sitting on the calendar tells you it was planned, not that it happened. Codified 2026-05-18.

  **How to apply:** Strava query first for runs; user question for non Strava sessions; calendar stays out of retro source data entirely.

- **Use retro findings to adjust the current week.** When the previous week shows significant under coverage, propose stepping down the current week's targets rather than pressing forward on the original plan. Annotate adjustments inline in the plan table (e.g., `20 (adjusted from 22)`) so both the original and adjusted targets stay visible for trend reading.

  **Why:** Pressing forward on a plan that already slipped multiplies the gap. Adjusting in response to reality keeps adherence honest. Codified 2026-05-18.

  **How to apply:** Phase 7 of retro mode does this explicitly. If the retro shows missed long run, mileage 30%+ under, or back to back misses, surface adjustment options before continuing to schedule.

- **Interrogate significant deltas, don't just record them.** When retro numbers diverge sharply from plan, the read is incomplete without knowing the cause. Ask the user via `AskUserQuestion` about category (injury / schedule / motivation / conditions), then prompt for detail in chat. The cause drives the adjustment more than the numbers do. When the cause is medical, ask for any provider notes or AI consults the user wants captured in the retro.

  **Why:** Wk 2 (ISO 2026-W20) came in -51% on mileage and -89% on vert. Numbers alone read as "fell off." Actual cause was a left heel injury (suspected plantar fasciitis). Without interrogating, the adjustment would have been wrong — push harder Wk 3 rather than step back and prioritize healing. Codified 2026-05-18.

  **How to apply:** Phase 5 of retro mode. Always run it when the gap is 30%+ on any tracked metric or when a marquee session (long run, Thu SPRC) is fully missed.

- **Vert is co-equal with mileage.** The training plan tracks both Long mi and Vert ft per week. A retro that only evaluates mileage misses half the point. Always pull elevation gain from Strava activity details and total against the plan's Vert ft target.
- **Lifts at Movement RiNo do not show in Strava.** When a lift is missing from Strava, the status is **open**, not missed. Confirm with the user before logging it as a miss in the retro. Same applies to climbing at Movement.
- **Strava run elevation in meters; convert to feet.** `meters * 3.28084`. Worth doing per activity then summing, since the plan's vert target is in feet.

- **PAH is transit, not training.** Wed 13:00 to 15:00 PAH (Project Angel Heart Kitchen Assistant) is service, not a training session. The bike ride to and from PAH shows up in Strava as a commute but does not count as a training anchor.

  **Why:** Wk 2 retro counted "Strava bike to PAH (4.36 mi)" as evidence of "Wed PAH ✅" — confusing transit with training. PAH itself is kitchen volunteering; the bike commute is logistics, not the prescribed Wed recovery anchor. Codified 2026-05-25 (Wk 3 planning session).

  **How to apply:** In retro Coverage tables, mark PAH as `n/a` with a note "transit, not training" rather than listing it as a session. Bike commute miles do not contribute to Total miles or vert. The actual Wed training anchor is contrast therapy at Naosu; evaluate that separately.
