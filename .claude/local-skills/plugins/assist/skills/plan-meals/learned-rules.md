# Learned Rules: assist:plan-meals

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
  - How to apply: when generating a shopping list, put dried beans, rice, lentils, quinoa, and related bulk staples under Sprouts. Costco is for jarred/packaged items (kimchi, hummus, olives, artichokes, pickled onions, yogurt, nuts, coffee, vanilla extract).

- **The primary shopping list goes into Atelic via `mcp__atelic__add_shopping_item`.** One call per item, with `store` set and quantity/brand hints in `notes`; it surfaces in the Atelic app for the run.
  - Why: superseded Apple Reminders in ATE-353 (2026-06-16) when meal plans moved into Atelic; the shopping plan now lives alongside the pantry rather than in a separate app.
  - How to apply: See the "Shopping List in Atelic" section of SKILL.md. Only push items for the store being shopped that day; other stores can be added with their own `store`.

- **Quantities in lb, oz, fl oz, or grams. No "1 bag", "1 carton", "1 bunch", "1 container", "1 loaf".** Packaging sizes vary by store and brand; actual weight or volume is what gets Forni the right amount.
  - Why: Forni corrected this on 2026-04-17. Container units are ambiguous.
  - How to apply: convert everything to the unit most natural for the ingredient. Produce by the lb or oz (e.g. asparagus 1 lb, mint 1 oz). Liquids in fl oz. Small specialty amounts in grams or oz. Bread as a loaf weight ("~1 lb loaf"). Bulk bin items by weight.

- **Shopping list groups by store section, not produce subtype.** No "leafy & herbs", "alliums & roots", "fruits & veg" sub buckets. One flat "Produce" section.
  - Why: Forni said "having alliums and roots and leafy and herbs and fruits and veg, it's fine. Just produce is fine" on 2026-05-15.
  - How to apply: shopping list sections are Produce, Refrigerated, Bulk Bins, Center Aisles / Spices, Frozen, Snacks. No further subdivision within a section.

- **Vanilla extract is a Costco staple.** Sprouts does not reliably carry it; Costco does.
  - Why: Forni confirmed on 2026-04-17.
  - How to apply: when vanilla is needed, put it in the Costco section of the shopping list, never Sprouts.

## Recipe Rules

- **No alcohol in any recipe, ever.** No cooking wine, no beer batters, no bourbon glazes, no mirin (which contains alcohol), no rum extract. Even "the alcohol cooks off" is a no.
  - Why: Forni is in twelve step recovery. Cooking with alcohol is adjacent enough that it's not wanted. Confirmed on 2026-05-15 when bourguignon (red wine) and risotto (white wine) were both rejected.
  - How to apply: when a classic recipe calls for wine, substitute vegetable broth + a splash of vinegar (red wine vinegar for red, white wine vinegar or rice vinegar for white) and a touch of tomato paste or miso for umami. For deglazing, broth or balsamic works. Skip any dish where alcohol is structurally essential (bourguignon, risotto, beer can chicken, etc.) and propose something different.

- **"Fun food" does not mean high variety.** Going back to basics with one or two fun centerpieces is what lands. Five new specialty cuisines in one week is too much shopping, too much context switching, and reads as scattered.
  - Why: Forni rejected the W21 draft on 2026-05-15 with "way too much variety." He had asked for fun food but the response (bourguignon + risotto + bibimbap + pad thai + soba) was over indexed.
  - How to apply: pick one or two centerpiece dinners per week. The rest is batch prep variations (bowls, stir fry, leftovers). Specialty ingredient purchases should support the centerpiece, not five different cuisines.

- **Forni is experimenting with blender based soups in 2026.** He bought an immersion blender on 2026-04-17 and wants to try pureed soups. Brothy chunky soups remain unappealing; lean toward silky pureed varieties that showcase the blender.
  - Why: Reversed the earlier "no soup" rule the same day he stated it, specifically because of the new blender.
  - How to apply: propose pureed soups when spring/fall seasonality supports it (asparagus, pea, leek, cauliflower, broccoli, butternut). Avoid chunky minestrones, chilis, and brothy bean soups unless explicitly requested.

- **No bananas.** Forni does not eat them, anywhere.
  - Why: Forni said so on 2026-04-17.
  - How to apply: do not propose recipes that use bananas, and do not include bananas on any shopping list. For the quinoa breakfast alt (previously sweetened with banana), use dates, a small drizzle of agave, or seasonal berries instead.

## Food Preferences

Standing likes, dislikes, and avoid foods. Read before drafting any plan, cross-check the draft against this list, and append here whenever Forni states a new preference during planning. New entries follow the same Why / How to apply structure as the rules above. A durable product home for preferences and allergies is tracked as an Atelic ticket; until it ships, this section is the source of truth.

**Dislikes / avoid:**

- **Corn.** Keep it off menus and shopping lists entirely.
  - Why: Dislikes the taste, and it disagrees with his digestion. Stated 2026-06-21.
  - How to apply: Do not propose recipes containing corn, and never add it to a shopping list.
- **Pasta.** Favor grain bowls and skillet formats over pasta dishes.
  - Why: Not a fan of pasta. Stated 2026-06-21.
  - How to apply: Reach for quinoa or rice instead of building a meal around pasta.
- **Bananas.** Does not eat them, anywhere.
  - Why: Stated 2026-04-17. See the dedicated rule under Recipe Rules above.
  - How to apply: No bananas in recipes or on shopping lists; sweeten with dates or berries instead.

**Grain preference:**

- **Quinoa over rice** when a recipe leaves the grain open.
  - Why: Stated preference on 2026-06-21.
  - How to apply: Default to quinoa unless the recipe specifically calls for rice or Forni asks for it.

**Already well stocked (do not add to a list by default, confirm first):**

- **Tahini.** Do not add to a list by default; confirm first.
  - Why: Owns plenty. Stated 2026-06-21.
  - How to apply: Use lemon juice plus olive oil for bowl dressings rather than defaulting to tahini.

## Macro Rules

(none yet)

## Plan Format Rules

- **Use a single combined daily table for lunch + dinner, not two separate tables.** Same Day column, Lunch column, Dinner column. Easier to scan.
  - Why: Forni called the split "weird and hard to read" on 2026-05-15.
  - How to apply: in the "Daily Meals" section, render one table with Day / Lunch / Dinner columns. Keep breakfast as a separate paragraph above since it's mostly constant.

- **Weights and amounts apply to BATCH PREP too, not just the shopping list.** No "3 sweet potatoes", "1 bag spinach", "1 bunch asparagus" in the prep section either. Use lb, oz, fl oz, grams.
  - Why: Forni corrected this on 2026-05-15 — "I don't know how much that is" applies to the prep section just like the list.
  - How to apply: every quantity, everywhere in the plan, in weight or volume units. Pantry references can stay loose since they're identity not quantity.

- **Sweet potatoes scale down.** ~1 lb (about 2 medium) per week is plenty if they're a side / oat bowl topping, not a centerpiece. 3+ lb lasts way too long.
  - Why: Forni said 3 large last week (W17) lasted too long on 2026-05-15.
  - How to apply: default to 1 lb / 2 medium unless the menu has sweet potatoes as a main two or more nights.

## Pantry Rules

- **Pantry inventory questions go one at a time, not in a batch.** Use AskUserQuestion with structured options rather than asking for a batched reply in chat.
  - Why: Forni corrected this on 2026-04-17. A long checklist in chat feels tedious; one question at a time keeps the rhythm conversational.
  - How to apply: loop through pantry items individually. Each question should offer the common answers (Yes on hand, No need to buy, Have some but low, Skip) plus a free text option for quantity or notes.
