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

- **Vert is co-equal with mileage.** The training plan tracks both Long mi and Vert ft per week. A retro that only evaluates mileage misses half the point. Always pull elevation gain from Strava activity details and total against the plan's Vert ft target.
- **Lifts at Movement RiNo do not show in Strava.** When a lift is missing from Strava, the status is **open**, not missed. Confirm with the user before logging it as a miss in the retro. Same applies to climbing at Movement.
- **Strava run elevation in meters; convert to feet.** `meters * 3.28084`. Worth doing per activity then summing, since the plan's vert target is in feet.
