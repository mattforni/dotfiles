---
name: assist:meals
description: Weekly meal planning, shopping list generation, and pantry aware grocery runs. Produces a plant based, seasonal, batch prep friendly meal plan for the week, plus a consolidated shopping list grouped by store. Use this skill whenever the user mentions meal planning, wants to plan the week's food, asks for a shopping list, wants help figuring out what to cook, mentions batch prep, macros, recipes, a grocery run, a Sprouts or Costco trip, or says things like "back on the healthy eating train" or "kick the takeout habit." Also trigger for "/assist:meals", "meals for the week", or "what should I cook". Prefer invoking this skill even when the user's ask is oblique (e.g., "I want to stop eating out" or "I need to hit my macros this week") since meal planning is usually the underlying need.
argument-hint: "[optional week, e.g. 2026-W17]"
allowed-tools:
  - Bash
  - mcp__claude_ai_Google_Calendar__*
  - mcp__atelic__*
  - WebFetch
  - Read
  - Edit
  - Write
  - Glob
  - AskUserQuestion
---

# Meals Assist

Help Forni plan a week of plant based, seasonal, batch prep friendly meals and produce a single primary shopping list. The goal is less decision fatigue mid week and more momentum on the healthy eating front.

## Why This Matters

Forni's 2026 growth edge is eliminating overconsumption. The most visible form is defaulting to takeout when the week gets tired. A good meal plan removes the decision and the cravings compound. A bad plan (boring, unrealistic, mismatched to his week) is worse than no plan; it generates friction and a story to push against. Aim for plans he wants to eat, sized to his actual week, using ingredients he actually has or can easily get.

The shopping list is the primary artifact. The meal plan exists mostly to produce a good list and to guide batch prep day.

## Before Every Invocation

1. Read [learned-rules.md](learned-rules.md) in this directory
2. Read the canonical nutrition context:
   - `~/Eudaimonia/Constitution/Nutrition/README.md` — daily macro targets, meal budgets, supplement stack
   - **Pantry inventory and staples live in the Atelic api db** (migrated from `pantry.md` and `staples.md` on 2026-05-15 in ATE-141), reached through the Atelic MCP tools (`mcp__atelic__list_pantry`, etc.) — see the Pantry Access section below.
3. Read the most recent plan file in `~/Eudaimonia/Constitution/Nutrition/plans/` (sort by filename) for format reference and to see what we just ate
4. Read [references/recipe-sources.md](references/recipe-sources.md) for the preferred recipe sites and what's worked in the past
5. Determine the target week. Default to the current ISO week. Use `date +"%G-W%V"` for the week identifier.

## Pantry Access

Pantry and staples live in the Atelic api db, reached through the Atelic MCP tools (no `rails runner`, no SQL). Each tool is typed and routes writes through the model, so store normalization and restock bookkeeping happen automatically.

- **`mcp__atelic__list_pantry`** — read the pantry. Optional filters: `staple` (only staples), `needs_restock` (only items at or below their restock threshold), `store`. Returns a `collection` of items plus `distinct_stores`. Each item carries per-user state (`staple`, `level` 0 to 4, `restock_at`, `needs_restock`, `store`, `notes`) and delegated product fields (`name`, `brand`, `variant`, `organic`). Stock is quantitative: an item needs restocking when `needs_restock` is true (i.e. `level <= restock_at`), not a boolean in/out.
- **`mcp__atelic__add_pantry_item`** — add something new to the pantry. Identify the product by `name` (plus optional `brand`/`variant`/`organic`); the consumable is created in the catalog if it does not exist. Optional `staple`, `level` (0 to 4, default 4), `restock_at`, `store`, `notes`. Errors if the item is already in the pantry; use update for that.
- **`mcp__atelic__update_pantry_item`** — change `staple`, `level`, `restock_at`, `store`, or `notes` on an existing item. Locate it by `name` (plus optional `brand`/`variant`/`organic` to disambiguate) or by `id`. If a name matches more than one item, the error lists the candidates with ids; retry with an id or a disambiguator. Only the fields you pass change.

A storeless item (no `store` set) surfaces under any `store` filter, so staples with no fixed store are never hidden by a store-filtered read.

## Source of Truth

| Source | Purpose |
|--------|---------|
| `Constitution/Nutrition/README.md` | Daily macros and meal slot budgets |
| Atelic api db (`PantryItem`, `Consumable`) via MCP | What is already on hand + brand preferences. Read with `mcp__atelic__list_pantry`. See Pantry Access above |
| `Constitution/Nutrition/plans/*` | Prior weekly plans (format reference) |
| `references/recipe-sources.md` | Approved recipe sites and historical ratings |
| `learned-rules.md` | Corrections learned through use |

The weekly plan file format mirrors `Constitution/Nutrition/plans/2026-W14-meal-plan.md`. Do not invent a new format unless the user asks.

## Principles

- **Plant based.** No meat. Tofu and lentils are the protein backbone. Eggs and Greek yogurt are acceptable but not required.
- **Seasonal.** Lean on what is actually in season at the target week. Check the date when deciding. Spring (now) favors asparagus, snap peas, radishes, artichokes, spring greens, strawberries, new potatoes. Summer favors tomatoes, stone fruit, corn, zucchini, peppers, cucumbers. Use this as a guideline, not a rule.
- **Batch prep friendly.** One prep session on Sunday or Monday carries most of the week. A mid week refresh handles the rest. Favor ingredients that survive the fridge for several days.
- **Macro anchored.** The daily target is 2,112 cal / 118g P / 257g C / 68g F. The shake handles ~32g of protein and ~225 cal. The remaining three meals should roughly split the rest as laid out in README.
- **Realistic for the week.** Social events, travel, and team lunches eat meals. Do not prep for meals that will not happen.
- **Repeatable, not boring.** Repeating a lunch twice in a week is fine (batch prep reality). Three or four times in a row is a trap; rotate a second lunch option in.

## The Plan Flow

### Phase 1: Frame the Week

1. Compute the target week's Monday through Sunday dates
2. Fetch Google Calendar events for that range. Filter out `transparency: "transparent"` (free/informational) events
3. Identify meals we should NOT plan for:
   - Social dinners (restaurants, invited events)
   - Team lunches (e.g., Thursday at Zero Homes)
   - Out of town travel
   - Wednesday evening Wine Down (flexible, social)
4. Note which shopping day is likely this week. Default assumption: Sprouts run after High Noon on Wednesday or Friday. Confirm with Forni if the calendar makes it unclear.

Present the week back as a simple list of planned vs skipped meal slots. Ask Forni if anything is missing before continuing.

### Phase 2: Inventory Check

1. Pull the full pantry with `mcp__atelic__list_pantry` (see Pantry Access above)
2. The restock signal (staple + `needs_restock`) and any items with "low" in `notes` are the first candidates to ask about. Favor items that get used heavily week to week (tofu, soy milk, kimchi, hummus, greens, lentils, rice, oats)
3. Ask Forni in one batch (use AskUserQuestion) for what's on hand. Group the questions by category (produce, refrigerated, dry goods, condiments) to keep it scannable. Keep it targeted; do not ask about every staple
4. Update the api db with his answers before generating the plan, using `mcp__atelic__update_pantry_item` (or `mcp__atelic__add_pantry_item` for something new). The pantry gets more accurate over time, which matters more here than the small overhead of the write

### Phase 3: Draft the Plan

1. Pull a small set of candidate recipes from the preferred sites (see recipe-sources.md). Use WebFetch sparingly; favor recipes already referenced in prior plans or recipes Forni has rated. You do not need to fetch every recipe, only the ones being introduced this week.
2. Build the plan in the format of `2026-W14-meal-plan.md`:
   - Daily macro budget header
   - Meal structure (7:30 to 18:30 IF window)
   - Batch prep section (grains/legumes, proteins, vegetables, sauces)
   - Daily meals: breakfast, lunch (per day table), dinner (per day table)
   - Daily macro summary
3. For meals skipped on social days, show "Social" or the event name in the table rather than leaving blank.
4. Repeat lunches up to twice per week. Keep breakfast mostly consistent (batch prep reality). Dinners vary more.

Present the draft plan inline before saving. Let Forni redirect before committing to the shopping list.

### Phase 4: Shopping List

The shopping list is the primary artifact. Group by section and store.

```
## Shopping List

### Sprouts (Wed or Fri after High Noon)
#### Produce
- [ ] Asparagus, 1 bunch
...
#### Refrigerated
...

### Costco (if due for a run)
...

### Already Stocked (from list_pantry)
...
```

Rules for the list:
- Only include items that need restocking. From `list_pantry`, an item needs buying when `needs_restock` is true; items above their restock threshold are already on hand
- Flag staples that are low (`needs_restock` true, or "low" in `notes`) and include them if Forni confirms
- Use the brand stored on the underlying Consumable where one is specified
- Separate produce by grocery section for efficient store flow (leafy greens, alliums, roots, fruits, etc.)
- Put anything that is specific to a single recipe in a `recipe specific` subsection so it's easy to skip if Forni decides to cut that meal

### Phase 5: Save and Record

1. Write the full plan to `~/Eudaimonia/Constitution/Nutrition/plans/YYYY-WNN-meal-plan.md` (ISO week). Do not overwrite an existing plan for the same week without confirmation.
2. Append the recipes used to `references/recipe-sources.md` under "Recipes Used" with week, site, and rating left blank (Forni fills the rating in later).
3. Push the primary shopping list (the store being shopped today) to Apple Reminders using the Groceries list. See the Apple Reminders Integration section below. Items for other stores (e.g., Costco next run) stay in the plan file only.
4. Print the shopping list in chat as a preview and backup.

## Apple Reminders Integration

Forni's shopping list is pushed into the Apple Reminders "Groceries" list so it shows up natively on his phone during the shopping run. Reminders auto groups the list into store sections (Produce, Dairy, Pantry, etc.) when the list type is set to Grocery.

Use AppleScript via `osascript` with a heredoc:

```bash
osascript <<'APPLESCRIPT'
tell application "Reminders"
    tell list "Groceries"
        make new reminder with properties {name:"Asparagus, 1 bunch"}
        make new reminder with properties {name:"Snap peas, 1 lb"}
        # one line per item
    end tell
end tell
APPLESCRIPT
```

Notes:
- Keep item names concise but include quantity, e.g. `"Sweet potatoes, 4 large"`. Quantities help the checkout/counting moment.
- Include brand hints in parens when the brand matters, e.g. `"Pearl couscous, Bob's Red Mill tri color"`.
- Single quotes inside item names (e.g. "Bob's") are fine inside the heredoc.
- The Groceries list accumulates items across weeks. Assume Forni will clean up completed items himself. If you see a lot of uncompleted items before pushing, ask before adding more (dupes are annoying).

## Meal Plan File Format

Match `Constitution/Nutrition/plans/2026-W14-meal-plan.md`. Key sections in order:

1. `# Meal Plan: Week NN (Mon Date – Sun Date, YYYY)`
2. Short italic subtitle (plant based, seasonal, store)
3. `## Daily Macro Budget` table
4. `## Meal Structure` with IF window and meal slots
5. `## Batch Prep` with grains/legumes, proteins, vegetables, sauces
6. `## Daily Meals` with breakfast description, lunch table, dinner table
7. `### Daily Macro Summary` table
8. `## Shopping List` grouped by store and section

Keep notes and variances in italic after tables. Call out gaps (e.g., "Fat is ~7g under target. Add extra tahini or nuts to close the gap.")

## Recipe Sources

See [references/recipe-sources.md](references/recipe-sources.md) for the full list and ratings history. Primary sites:

- cookieandkate.com
- simpleveganblog.com
- halfbakedharvest.com (filter for plant based)
- budgetbytes.com

When you introduce a new recipe, add a row to the "Recipes Used" table with the week, recipe title, site, and a blank rating. Forni fills ratings in over time. If a recipe turns into a repeat favorite, note it in the "Favorites" section.

Feel free to suggest new sites similar in vibe (plant based, seasonal, approachable). Add candidates to the "Candidate Sites to Try" section rather than introducing them directly.

## Pantry Update Pattern

When Forni mentions outside this skill that he bought or finished something (e.g., "grabbed two blocks of tofu at Sprouts"), update the pantry with `mcp__atelic__update_pantry_item` (set `level` back up when restocked, down when used up), or `mcp__atelic__add_pantry_item` if it is not tracked yet. This keeps the inventory accurate without needing a formal mode. When running the plan, always re query fresh rather than trusting cached state.

## Constraints and Defaults

**Durable constraints** (unlikely to change without Forni flagging):

- **IF window**: 7:30 to 18:30. No dinner scheduled after 18:30.
- **Shake timing**: PLNT v2 + 1 cup Silk soy milk. Usually post workout or mid morning. Count toward daily macros.
- **Weekends**: Saturday is Adventure Day; lunch is often on the go. Sunday is rest and planning; dinner works from leftovers.

**Current weekly pattern** (things that *can* go stale as jobs and seasons change — **always verify against the calendar pulled in Phase 1**, and update the date stamp below when confirmed or corrected):

- **Wednesday evening**: Wine Down. Keep dinner light or flexible. *(Confirmed 2026-04-17.)*
- **Thursday lunch**: Team lunch at Zero Homes around 12:30. Do not plan Thursday lunch unless the calendar contradicts. *(Confirmed 2026-04-17.)*
- **Tuesday evening**: DRC run club meets ~18:00 at Ratio Beerworks. Plan dinner before, optional protein snack after. *(Confirmed 2026-04-17.)*
- **Wednesday midday**: PAH Kitchen Assistant volunteering ~13:00 to 15:00; lunch goes before leaving at 12:30. *(Confirmed 2026-04-17.)*

The calendar is the source of truth. These patterns are hints for interpreting calendar events, not substitutes for them.

## Learned Rules

See [learned-rules.md](learned-rules.md). Append to that file when Forni corrects a choice (wrong recipe type, too many chickpeas, missed a staple, etc.) so the skill improves over time.
