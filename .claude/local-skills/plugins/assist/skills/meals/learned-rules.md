# Learned Rules: assist:meals

Corrections and preferences specific to meal planning. Read on every invocation. Append when Forni corrects a decision so the skill improves over time. General defaults live in SKILL.md.

## Planning Rules

- **Default target week depends on invocation day.** Invoking on Wednesday or later means plan the NEXT week (Mon through Sun), not the current one. Shop on the Fri High Noon Sprouts run, batch prep Sun/Mon.
  - Why: Forni confirmed this pattern on 2026-04-17 when we tested the skill. Matches the Fri shop cadence and avoids half planning a week that is mostly already spent.
  - How to apply: if today is Mon or Tue, default to this week; Wed through Sun, default to next week. Still confirm with Forni in Phase 1.

- **DRC on Tuesday evenings is a running event, not social drinking.** Ratio Beerworks is just the meeting point. Plan a normal dinner BEFORE the run and a high protein snack after.
  - Why: Forni clarified on 2026-04-17 that DRC is Denver Run Club.
  - How to apply: on weeks with DRC, treat Tuesday dinner as a standard slot timed to eat before the ~18:00 start. Do not skip it and do not plan for a brewery meal.

- **Wednesday PAH volunteering (Kitchen Assistant, 13:00 to 15:00) means lunch goes BEFORE leaving at 12:30.** Pack or eat at home around 11:30 to 12:00. Do not plan a lunch for after PAH since he's driving straight home.
  - Why: Forni confirmed on 2026-04-17.
  - How to apply: on weeks with PAH on the calendar, Wednesday lunch is a packed/early lunch slot, not a normal 12:00 to 13:00 window.

- **Thursday "Kitchen Cruising" with Ross is an optional social cooking event**, not a fixed commitment. Don't reorganize the meal plan around it; plan a normal Thursday dinner and let Forni flex if the event is on.
  - Why: Forni clarified on 2026-04-17 that it's a "fun cooking" thing with Ross, not required.

## Shopping Rules

- **All bulk dry goods come from Sprouts, not Costco.** Beans (black, kidney, adzuki), rice (white basmati, brown short grain), lentils (green, red), quinoa, and similar bulk items live in the Sprouts bulk bin section.
  - Why: Forni said on 2026-04-17 "I LOVE their bulk section."
  - How to apply: when generating a shopping list, put dried beans, rice, lentils, quinoa, and related bulk staples under Sprouts. Costco is for jarred/packaged items (kimchi, hummus, olives, artichokes, pickled onions, yogurt, nuts, coffee).

- **The primary shopping list goes into Apple Reminders via AppleScript.** Push items to the "Groceries" list; Reminders auto groups by store section on his phone.
  - Why: Forni confirmed on 2026-04-17 that Reminders is where the list should live, not just inline chat or the plan file.
  - How to apply: See the "Apple Reminders Integration" section of SKILL.md for the osascript pattern. Only push items for the store being shopped that day; other stores stay in the plan file.

## Recipe Rules

- **Forni is experimenting with blender based soups in 2026.** He bought an immersion blender on 2026-04-17 and wants to try pureed soups. Brothy chunky soups remain unappealing; lean toward silky pureed varieties that showcase the blender.
  - Why: Reversed the earlier "no soup" rule the same day he stated it, specifically because of the new blender.
  - How to apply: propose pureed soups when spring/fall seasonality supports it (asparagus, pea, leek, cauliflower, broccoli, butternut). Avoid chunky minestrones, chilis, and brothy bean soups unless explicitly requested.

## Macro Rules

(none yet)

## Pantry Rules

- **Pantry inventory questions go one at a time, not in a batch.** Use AskUserQuestion with structured options rather than asking for a batched reply in chat.
  - Why: Forni corrected this on 2026-04-17. A long checklist in chat feels tedious; one question at a time keeps the rhythm conversational.
  - How to apply: loop through pantry items individually. Each question should offer the common answers (Yes on hand, No need to buy, Have some but low, Skip) plus a free text option for quantity or notes.
