---
name: handle-budget
description: Categorize and approve YNAB transactions, building a payee rules engine that gets smarter each run. Use whenever Forni mentions YNAB, categorizing spend, cleaning up the budget, approving transactions, the unapproved queue, payee cleanup, or wants a clean read on where money is going. Also trigger for "/assist:handle-budget", "tidy the budget", or "categorize my spending".
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
3. Confirm API access (token in Keychain):

   ```bash
   tok=$(security find-generic-password -a "$USER" -s ynab-token -w)
   ```

4. Budget IDs: Personal `a55b71e6-76e4-46d9-a5c6-336b36ddd14c`, RYLLC `e0d471f0-bf90-452c-8232-b1153b7411be`. Default to Personal unless asked.

## Why the API, Not the MCP

Write through the YNAB REST API directly (`curl` plus `jq`, or a small Python script). The `ynab` MCP is fine for browsing but its text output **hides the transaction and category IDs** needed to write, so it cannot drive categorization. The API exposes `id`, `category_id`, `transfer_account_id`, and `approved` cleanly.

Category IDs: resolve by name at runtime so a renamed category never breaks the skill:

```bash
curl -s -H "Authorization: Bearer $tok" "https://api.ynab.com/v1/budgets/$b/categories" \
 | jq -r '.data.category_groups[].categories[] | "\(.name) => \(.id)"'
```

## Phase 1: Pull the Queue

Get everything needing attention. Two relevant filters: `type=uncategorized` and `type=unapproved`.

```bash
curl -s -H "Authorization: Bearer $tok" \
 "https://api.ynab.com/v1/budgets/$b/transactions?since_date=YYYY-MM-DD&type=uncategorized"
```

Decode HTML entities in payee names (`&amp;` to `&`) before matching.

## Phase 2: Partition

For each transaction:

- **Skip** if `transfer_account_id` is set, or the payee matches a transfer/payment pattern (`Transfer`, `CRCARDPMT`, `AUTOPAY`, `External Transfer`, `P2P`, `RECURRING FROM CHK`, `Online Scheduled Payment`, `PAYMENT FROM CHK`, `Confirmation`, `Descriptive Withdrawal/Deposit`). These are account moves, not spend. Leave uncategorized. They can still be approved.
- **Inflow** if the payee is in the Inflows list. Route to `Inflow: Ready to Assign`.
- **Auto** if the payee is in the Auto-Categorize map. Apply silently.
- **Confirm** if the payee is in the Always-Confirm list (split history). Ask before applying.
- **New** otherwise. Ask one-by-one via AskUserQuestion, showing date, amount, payee, and a proposed category with rationale.

Trips: when several charges cluster around a trip (lodging plus out-of-town food and coffee), itemize each into its real category AND set its memo to `<emoji> <Trip Name>` (Forni's convention, e.g. `🏔️ Crested Butte`). Confirm the emoji and trip name with the user once per trip. Do NOT use a YNAB flag for this. Vehicle repair and other non-discretionary charges that happen during a trip stay untagged.

## Phase 3: Apply

Batch the updates into one PATCH (auto-converts dollars to milliunits server-side):

```bash
curl -s -X PATCH -H "Authorization: Bearer $tok" -H "Content-Type: application/json" \
 "https://api.ynab.com/v1/budgets/$b/transactions" \
 -d '{"transactions":[{"id":"...","category_id":"...","memo":"🏔️ Crested Butte","approved":true}]}'
```

Always print the full plan (date, amount, payee, target category, memo) before writing, then confirm the server response count.

## Phase 4: Approve

Imported transactions land **unapproved**, and categorizing does NOT approve them. Until approved, the changes do not flow into the budget/category views, which reads as "my changes aren't showing up." Approve as the final step:

```bash
# all unapproved -> approved
ids=$(curl -s -H "Authorization: Bearer $tok" "https://api.ynab.com/v1/budgets/$b/transactions?type=unapproved" \
  | jq -c '[.data.transactions[] | {id:.id, approved:true}]')
curl -s -X PATCH -H "Authorization: Bearer $tok" -H "Content-Type: application/json" \
  "https://api.ynab.com/v1/budgets/$b/transactions" -d "{\"transactions\":$ids}"
```

Then remind the user to hard-refresh the YNAB app or web tab, since an already-open client uses delta sync and will not show the writes until it re-syncs.

## Phase 5: Learn

When the user corrects a proposed category, or decides a brand-new payee, append the rule to the `## Spend Categorization` section of [learned-rules.md](../../learned-rules.md) so it sticks. One line: `Payee -> Category (note)`.

## Phase 6: Report

Print: counts by action (auto, confirmed, asked, skipped, approved), any trips totaled by memo, anything left flagged for follow-up (e.g. a suspected fraudulent charge), and new learned rules added.

## Refreshing the Map (periodic)

The Auto-Categorize and Always-Confirm lists are mined from history: group every categorized, non-transfer transaction by payee, take the dominant category, list payees with >=2 transactions (auto at >=80% dominance, confirm at 50 to 80%). Re-mine occasionally to absorb newly-recurring payees. The generator lives in the skill's history; re-run it to regenerate `reference/payee-map.md`.

## Notes

- **Payee sprawl**: each Venmo note spawns a new payee, so the budget carries 1,000+ payees. Collapsing them is a separate hygiene pass (rename/merge via the API, or YNAB's native Renaming Rules). Native Renaming Rules and per-payee auto-categorize are app-only and not in the API.
- **Housing line**: `Matthew Bigelow` was Rent; after the June 2026 home purchase the recurring housing line is a mortgage.

## Learned Rules

See [learned-rules.md](learned-rules.md).
