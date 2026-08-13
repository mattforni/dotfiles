---
name: handle-budget
description: Categorize and approve YNAB transactions, building a payee rules engine that gets smarter each run. Runs as a dry run by default and never writes without explicit approval. Use whenever Forni mentions YNAB, categorizing spend, cleaning up the budget, approving transactions, the unapproved queue, payee cleanup, or wants a clean read on where money is going. Also trigger for "/assist:handle-budget", "tidy the budget", or "categorize my spending".
allowed-tools:
  - Bash
  - Read
  - Edit
  - Write
  - AskUserQuestion
---

# Handle Budget

Pull uncategorized YNAB transactions, file them into the right category, tag trips, and approve. The rules engine is [reference/payee-map.md](../../reference/payee-map.md) (payee to category, mined from history) plus the `## Spend Categorization` section of [learned-rules.md](../../learned-rules.md) (corrections that override the map). Every new decision feeds back into learned-rules so the next run asks less.

## Before Every Invocation

1. Read this skill's local [learned-rules.md](learned-rules.md) for prior corrections about how Forni wants the budget pass to run.
2. Read [reference/payee-map.md](../../reference/payee-map.md) and the `## Spend Categorization` section of the plugin-wide [learned-rules.md](../../learned-rules.md). Learned rules override the map.
3. Confirm access: `ynab auth status` should report `"authenticated": true`.
4. Budget IDs: Personal `a55b71e6-76e4-46d9-a5c6-336b36ddd14c`, Atelic `e0d471f0-bf90-452c-8232-b1153b7411be` (shown as RYLLC before the entity rename). Personal is the CLI's configured default, so **anything touching Atelic needs an explicit `--budget`**.

## Access: the `ynab` CLI

Everything runs through the CLI (`@stephendolan/ynab-cli`), which replaced both the MCP server and the hand rolled curl recipes on 2026-08-13. It returns JSON by default, exposes `id`, `category_id`, `transfer_account_id` and `approved` directly, and reports `amount_formatted` alongside the raw amount, so there is no milliunit conversion to get wrong.

Category IDs: resolve by name at runtime so a renamed category never breaks the skill.

```bash
ynab categories list | jq -r '.[].categories[] | "\(.name) => \(.id)"'
```

## Phase 1: Pull the Queue

Unapproved is a native filter. Uncategorized is not, so filter it client side on a null `category_id`.

```bash
# everything unapproved
ynab transactions list --approved false

# just the uncategorized subset
ynab transactions list --approved false | jq '[.[] | select(.category_id == null)]'

# trimmed for reading, when the full payload is noise
ynab transactions list --approved false --fields id,date,payee_name,amount_formatted
```

Add `--since <YYYY-MM-DD>` to bound the window. Decode HTML entities in payee names (`&amp;` to `&`) before matching.

## Phase 2: Partition

For each transaction:

- **Skip** if `transfer_account_id` is set, or the payee matches a transfer/payment pattern (`Transfer`, `CRCARDPMT`, `AUTOPAY`, `External Transfer`, `P2P`, `RECURRING FROM CHK`, `Online Scheduled Payment`, `PAYMENT FROM CHK`, `Confirmation`, `Descriptive Withdrawal/Deposit`). These are account moves, not spend. Leave uncategorized. They can still be approved.
- **Inflow** if the payee is in the Inflows list. Route to `Inflow: Ready to Assign`.
- **Auto** if the payee is in the Auto-Categorize map. Apply silently.
- **Confirm** if the payee is in the Always-Confirm list (split history). Ask before applying.
- **New** otherwise. Ask one-by-one via AskUserQuestion, showing date, amount, payee, and a proposed category with rationale.

Trips: when several charges cluster around a trip (lodging plus out-of-town food and coffee), itemize each into its real category AND set its memo to `<emoji> <Trip Name>` (Forni's convention, e.g. `🏔️ Crested Butte`). Confirm the emoji and trip name with the user once per trip. Do NOT use a YNAB flag for this. Vehicle repair and other non-discretionary charges that happen during a trip stay untagged.

## Phase 3: Dry Run, Always First

**This skill is a dry run by default. It does not write to YNAB unless Forni explicitly says to, in this session, after seeing the plan.** The CLI has no read only mode and no `--dry-run` flag, so this gate is the only thing standing between a proposed plan and a live budget. Treat it as load bearing.

The dry run produces the full plan as a table and nothing else. One row per transaction: date, amount, payee, current category, proposed category, memo to be set, and which rule decided it (auto map, learned rule, confirmed, or asked). End with the counts and the exact number of transactions that would be written.

Then stop and ask. Do not write in the same turn the plan is first shown, even if Forni pre approved the run when invoking the skill; he asked for a dry run pass precisely so the plan can be read before anything moves. Going live requires a fresh, explicit yes to the plan he just read.

If he asks for changes, revise and show the plan again. The gate resets: a revised plan is a new plan and needs its own yes.

## Phase 4: Apply, Only After a Yes

Batch the approved plan into one call. Amounts are dollars, not milliunits.

```bash
ynab transactions batch-update --transactions \
 '[{"id":"...","category_id":"...","memo":"🏔️ Crested Butte","approved":true}]'
```

Confirm the response count matches the plan's count, and say so. A mismatch means something was rejected silently and needs looking at before moving on.

## Phase 5: Approve the Skipped Remainder

Imported transactions land **unapproved**, and categorizing does NOT approve them. Until approved, the changes do not flow into the budget/category views, which reads as "my changes aren't showing up." Phase 4 already carries `approved: true` for everything it categorized, so what is left here is the deliberate skips: transfers and card payments, which stay uncategorized but should still be approved.

**Approve only IDs that were in the reviewed plan. Never re-query for "everything unapproved" and approve that.** The queue is live, so a blanket approve would sweep up transactions that imported after the plan was built, or that were held back on purpose, and write them without Forni ever seeing them. That would quietly void the dry run guarantee this skill just made.

```bash
# ids come from the reviewed plan, not from a fresh unapproved query
ynab transactions batch-update --transactions \
 '[{"id":"<planned-skip-1>","approved":true},{"id":"<planned-skip-2>","approved":true}]'
```

If the queue has grown since the plan was built, say so and offer a fresh pass rather than folding the new arrivals into this one.

Then remind the user to hard-refresh the YNAB app or web tab, since an already-open client uses delta sync and will not show the writes until it re-syncs.

## Phase 6: Learn

When the user corrects a proposed category, or decides a brand-new payee, append the rule to the `## Spend Categorization` section of [learned-rules.md](../../learned-rules.md) so it sticks. One line: `Payee -> Category (note)`.

## Phase 7: Report

Print: counts by action (auto, confirmed, asked, skipped, approved), any trips totaled by memo, anything left flagged for follow-up (e.g. a suspected fraudulent charge), and new learned rules added. Say plainly whether the run was a dry run or was applied; never let a dry run read as if it wrote.

## Refreshing the Map (periodic)

The Auto-Categorize and Always-Confirm lists are mined from history: group every categorized, non-transfer transaction by payee, take the dominant category, list payees with >=2 transactions (auto at >=80% dominance, confirm at 50 to 80%). Re-mine occasionally to absorb newly-recurring payees. The generator lives in the skill's history; re-run it to regenerate `reference/payee-map.md`.

## Notes

- **Payee sprawl**: each Venmo note spawns a new payee, so the budget carries 1,000+ payees. Collapsing them is a separate hygiene pass (rename/merge via the API, or YNAB's native Renaming Rules). Native Renaming Rules and per-payee auto-categorize are app-only and not in the API.
- **Housing line**: `Matthew Bigelow` was Rent; after the June 2026 home purchase the recurring housing line is a mortgage.

## Learned Rules

See [learned-rules.md](learned-rules.md).
