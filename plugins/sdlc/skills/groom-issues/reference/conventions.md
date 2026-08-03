# Groom Issues Conventions

Classification heuristics, capacity math, and priority rules. SKILL.md is the workflow; this file is how to make the judgment calls inside that workflow.

## Pre-Groom Checks

Before classification, do two cheap checks. Each saves hours later.

### 1. Identify the team's deferral label

Most teams use a single label to mean "intentionally deferred, save the intent". Common conventions: `👋 Later`, `🔮 Future`, `Someday`, `🏝️ Parked`. The label distribution will give it away — if one non-priority label appears on a large fraction (30 percent or more) of older Backlog items, that is almost certainly the deferral signal.

**Why it matters.** This label is sacred. Items carrying it are working as designed. Bulk canceling them erases real intent. Treat them as walk-past in any stale sweep.

### 2. Sync roadmap taxonomy to Linear (cycle mode only)

If a roadmap doc is in play, confirm it uses Linear's taxonomy: **Initiative → Project → Issue + Cycle**. If the doc collapses layers, classification cascades fail. Fix the doc first as a single commit, then proceed.

## Cycle Mode: Bucket Classification

Apply rules in order. First match wins. Ordering matters: "in progress" beats "pillar match" beats "keyword match."

### Keep

- State is `In Progress` or `In Review` (work is flowing; disrupting is worse than the cycle being overstuffed)
- OR pillar-matched to an in-focus project this cycle (pillars come from project descriptions, not cycle plan keywords)
- OR named in the roadmap's cycle plan
- OR priority is Urgent (override cycle plan; live fires)

### Move to Next Cycle

- Planned in the roadmap for a later cycle that overlaps with this one
- OR assigned but not started AND `business_days_remaining < estimated_days`
- OR blocked on external dependency that will not clear this cycle
- OR owner unavailable for remainder of the cycle

### Return to Backlog

- Unassigned AND not updated in 14+ days AND not in cycle plan
- OR priority Low AND not in progress
- OR placeholder/stub body
- OR superseded by a newer issue

### Reprioritize

In the right cycle but priority drifts from the plan emphasis.

### Cancel/Delete

Duplicate, superseded, or won't do. Deletion only on explicit user direction.

## Backlog Mode: Bucket Classification

Calibrated from the Atelic 2026-05 groom (118 backlog items, solo team, no roadmap doc).

Apply in order. First match wins.

### Walk Past (Sacred Deferral)

- Carries the team's deferral label (see pre-groom check)

This bucket frequently dominates. Atelic: 56 of 118 (47 percent). Treat as walk-past unless the user explicitly opts into walking by cluster.

### Mark Done

- Implementation completed but ticket never closed (verify against the actual code, not the ticket status)
- OR superseded by shipped work

Atelic: 9 Piper tickets verified against `app/services/ai_scoring_service.rb`, `app/controllers/v1/jobs_controller.rb`, etc. Forni opted to keep them in Backlog at Low priority instead of Done, since they may surface follow-up work. Both are valid; ask.

### Set Low Priority, Leave in Backlog

- Research, competitor investigation, or "go read X" tasks. Not implementation work.
- OR shipped-but-may-need-polish (Piper case above)
- OR off-focus relative to the current cycle's domain

The honest signal of "not shipping work right now" is Low priority. Demoting prevents High items from cluttering the queue.

### Hard Delete

- Off-focus aspirational items the user explicitly says do not resonate
- OR notes that belong in markdown (Eudy, working docs) not as Linear tickets
- OR subsumed by retitled / expanded work

Use the CLI: `linear issue delete <ID> --confirm`. The MCP cannot hard delete.

### Pull Into Active Cycle

- Aligns with the user's stated focus for the next 1-2 weeks
- AND has a clear scope (or scope can be defined in 60 seconds)
- AND fits remaining capacity (see math below)

## Capacity Math

```
capacity = business_days_remaining × active_owners × multiplier
```

### Active owners

Count distinct assignees in the bucket being measured. Do not use team headcount.

For solo or part-time projects, owners is often 1 but the owner is fractional. The Atelic groom set Cycle 1 to 10 items for 10 work days × 1 owner × 0.9 = 9 (slightly over). Real-world calibration showed the part-time multiplier is closer to 0.5 to 0.7 when the owner has a day job + other repos.

### Starting multiplier

- Full-time team on cycle work: 0.9
- Solo project, part-time: 0.5 to 0.7
- Anything In Review counts as near-zero capacity
- If the multiplier ever exceeds 1.0, the Keep definition is wrong (likely In-Review items being counted as active work)

### After the groom

Log `predicted_keep` vs `actual_keep` and adjust the multiplier per team. The right number depends on:

- How many In-Review items are in the count
- Whether assignees are full-time on cycle work
- Meeting load, context switching, review cycles

## Priority Normalization

| Linear value | Name | Convention |
|---|---|---|
| 1 | Urgent | Live fire. Override cycle plan. |
| 2 | High | Must land. |
| 3 | Normal / Medium | Expected but slippable. |
| 4 | Low | Stretch, or research, or shipped-but-followup. |
| 0 | None | Untriaged. Treat as Low for scheduling. |

When demoting research and competitor tickets to Low, the queue's High items become an honest list of "actually shipping work right now."

Project priority tiers in a roadmap (P0/P1/P2/Parked) map to the issue priorities as follows:

| Project priority | Default issue priority |
|---|---|
| P0 | High (2) |
| P1 | Normal (3) |
| P2 | Low (4) |
| Parked | Low (4) |

## Rationale Style

Every proposed move needs a rationale. One line, plain English, names the cause.

Good:

- "Move, blocked on external dep, won't clear this cycle"
- "Backlog, unassigned, untouched 28 days, not in plan"
- "Reprioritize High to Normal, project is P1 this cycle, not P0"
- "Keep, in progress, cycle plan item"
- "Cancel, superseded by ATE-200"
- "Demote to Low, research work, not implementation"

Bad:

- "Move, not realistic" (realistic why?)
- "Backlog, stale" (stale how? for how long?)
- "Reprioritize, seems wrong" (what does wrong mean here?)

The reader is the user scanning the diff table for items to push back on. If the rationale does not help them decide, rewrite it.

## When the Cycle Plan or Roadmap Is Missing

Some teams (especially solo/personal teams) have no roadmap doc. Backlog mode handles this directly.

In cycle mode without a plan:

1. Report the gap: "No cycle plan found for this cycle."
2. Fall back to user judgment via AskUserQuestion.
3. Ask the user for the cycle's focus before proposing moves.
4. Offer to draft a plan after triage as future-cycle source of truth.

## Tool Selection

Default to the Linear CLI for grooming actions. Use the MCP only for read-only inspection when the CLI is not auth'd to the target workspace.

The CLI is more precise (state names map directly), supports hard delete, and avoids the MCP's fuzzy state mapping (the `state: "Canceled"` to "Duplicate" gotcha). Before grooming, run `linear auth list` and confirm the target workspace is configured.

If `LINEAR_API_KEY` is set in the environment, it shadows the keychain auth and forces a single-workspace mode. Either unset it for grooming sessions or update it to the target workspace's token.
