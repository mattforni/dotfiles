---
name: sdlc:groom
description: Groom a Linear team's queue. Two modes — cycle grooming (when the team runs Linear cycles, trim the active cycle to a realistic slate) and backlog grooming (when the team has a backlog without active cycles, triage by priority, staleness, and intent). Use whenever the user mentions Linear grooming, triaging issues, pruning a backlog, sprint grooming, "the cycle is overstuffed", "let's clean up the queue", "groom the backlog", or wants to make decisions across many issues at once. Use the Linear CLI when available; fall back to the Linear MCP otherwise.
allowed-tools:
  - Bash(linear *)
  - mcp__claude_ai_Linear__list_issues
  - mcp__claude_ai_Linear__get_issue
  - mcp__claude_ai_Linear__save_issue
  - mcp__claude_ai_Linear__list_issue_statuses
  - mcp__claude_ai_Linear__list_issue_labels
  - mcp__claude_ai_Linear__list_cycles
  - mcp__claude_ai_Linear__get_team
  - AskUserQuestion
  - Read
  - Grep
---

# SDLC Groom

Keep a Linear team's queue honest. Two modes; same workflow shape: scope, partition, present, apply.

Adapted from `zero:linear-groom` (cycle mode) with backlog mode added for teams that do not run cycles.

## When to Use

Trigger on:

- The cycle is "overstuffed", "bloated", "needs trimming", or scope drifted from plan
- The backlog has accumulated and needs triage ("groom the backlog", "prune the queue")
- "Sprint grooming" (Linear calls them cycles, same concept)
- Mid cycle review when remaining days do not match remaining work
- Quarterly or stand still backlog cleanup
- The user says "groom Linear", "triage the queue", "clean up Linear"

Do NOT use for:

- Single ticket CRUD (create, comment, status update). Use `linear-lifecycle:linear-lifecycle`.
- Cross team structural work (initiatives, projects spanning quarters). Use a roadmap doc.

## Modes

The skill auto detects mode from the team's state. The user may force a mode by saying "groom the backlog" (forces backlog mode) or "groom the cycle" (forces cycle mode).

### Cycle Mode

The team has an active cycle with issues in it. Goal: trim/keep/move/reprioritize to a realistic slate for the remaining days. Mostly lifted from `zero:linear-groom`.

### Backlog Mode

No active cycle, just a backlog (potentially with hundreds of issues). Goal: triage by priority, staleness, label, and user intent. The skill clusters issues by label or theme and walks them with the user.

**This mode is a draft.** The first real backlog groom (Atelic team, 2026-05) will surface concrete heuristics that turn into hard rules. After that run, this section gets calibrated and the loose edges become learned rules.

## Prerequisites

- **Linear access.** Linear CLI preferred (`linear --version` ≥ 2.0.0, `linear issue mine` succeeds). Falls back to Linear MCP if CLI is missing. The CLI is faster, supports hard delete, and avoids the MCP token overhead.
- **Team key.** The user names the team. The skill resolves to the Linear team ID. If unclear, ask.
- **Optional roadmap or vision doc.** Pointer to a markdown file describing strategic focus. The skill reads it for guidance and falls back to user judgment when absent.

## Source of Truth

Hierarchy. Fall through if the prior is absent:

1. **Active cycle plan** in a roadmap doc (cycle mode only).
2. **Project descriptions** in Linear (pillar matching, see conventions.md).
3. **Issue priority + staleness + label** (heuristic baseline, primary signal in backlog mode).
4. **User judgment** via AskUserQuestion. The gray zone is where this skill earns its keep.

## Core Loop

### Cycle Mode

1. **Scope** the active and next cycle. Capture cycle number, date range, business days remaining, and issue count (open / done / total).
2. **Sync** roadmap terminology to Linear's taxonomy (Initiative → Project → Issue + Cycle) before partitioning. If the doc collapses layers, fix the doc first as a one shot commit, then proceed.
3. **Read** the cycle plan from the roadmap doc (if present) and project descriptions for pillars.
4. **List** open issues in the active cycle.
5. **Partition** into Keep / Move / Backlog / Reprioritize / Cancel buckets per [conventions.md](reference/conventions.md).
6. **Present** the diff as a table grouped by action. Auto process only the Keep bucket.
7. **Resolve ambiguity** in a Phase 2 pass, grouped by category. Use AskUserQuestion per ticket in the gray zone.
8. **Apply** via the CLI (or MCP) after approval.
9. **Audit** every kept ticket for project + label attribution.

### Backlog Mode (Draft)

1. **Scope** the backlog. Capture total open issue count, distribution by status, priority, label, and last updated date.
2. **Identify** clear stale candidates: items with no priority AND no recent activity (heuristic: 9+ months untouched) AND no assignee AND no project.
3. **Cluster** the rest of the backlog by label or theme. The largest labels usually carry the most signal.
4. **Walk** clusters one at a time. For each issue: keep at current priority, set priority, defer with `Later` (or equivalent label), or cancel. Use AskUserQuestion per ticket in the gray zone; reserve batch tables for structurally uniform clusters (e.g., the obvious stale sweep).
5. **Archive Done items** as a final pass. Linear's archive moves them out of active views without losing the record.
6. **Capture learnings** as rules in [learned-rules.md](learned-rules.md) for the next groom.

The above is a sketch. Calibrate against the Atelic 2026-05 run and replace this section with the specifics.

## Hard Rules

- **Non destructive by default.** Prefer move, reprioritize, or backlog over cancel/delete. Never silently destroy.
- **Diff before apply.** Always present the proposed slate as a table and wait for explicit approval. Auto apply is reserved for the Keep bucket (which by definition changes nothing).
- **Preserve history.** Touch only `cycle`, `priority`, `state`, `project`, `parent`, `labels`. Do not edit descriptions, titles, comments, or assignees unless explicitly asked.
- **One team at a time.** Default scope is whatever the user names. Do not silently widen.
- **Capacity check (cycle mode).** Keep bucket must fit `business_days × active_owners × multiplier` (start at 0.9, calibrate). If over, push back before approving.
- **Walk the gray zone individually.** Per ticket AskUserQuestion with three to four labeled options. Reserve batch tables for the auto keep cluster and structurally uniform clusters.
- **Explain every move.** Each proposed change gets a one line rationale. "Move, owner on vacation" beats "Move".

## Quick Reference

### Linear CLI (preferred where installed)

| Operation | Command |
|---|---|
| List cycles for team | `linear cycle list --team $LINEAR_TEAM` |
| View cycle details | `linear cycle view <cycleRef>` |
| List open in active cycle | `linear issue query --team $LINEAR_TEAM --cycle active --state unstarted --state started --json` |
| List backlog | `linear issue query --team $LINEAR_TEAM --state backlog --json --limit 250` |
| Move issue to cycle N | `linear issue update <ID> --cycle <N>` |
| Return to backlog | `linear issue update <ID> --state Backlog` (auto clears cycle) |
| Reprioritize | `linear issue update <ID> --priority <1-4>` |
| Cancel | `linear issue update <ID> --state Canceled` |
| Hard delete | `linear issue delete <ID> --confirm` |
| View a single issue | `linear issue view <ID>` |

Priority integers: 1 = Urgent, 2 = High, 3 = Normal, 4 = Low.

**State and cycle interaction.** Setting `--state Backlog` clears the ticket's `cycleId` automatically. Setting `--state Canceled` keeps the `cycleId` but flips `statusType` to canceled, dropping the ticket from active views.

**Bulk delete gotcha.** `linear issue delete --bulk <ids> --confirm` still prompts interactively in CLI v2.0.0. Loop single deletes. Bulk also pulls in child issues automatically.

### Linear MCP (fallback)

| Operation | Tool |
|---|---|
| List issues by team and state | `mcp__claude_ai_Linear__list_issues(team, state, limit)` |
| Get issue detail | `mcp__claude_ai_Linear__get_issue(id)` |
| Update issue (state, priority, cycle, labels) | `mcp__claude_ai_Linear__save_issue(id, ...)` |
| List cycles | `mcp__claude_ai_Linear__list_cycles(team)` |
| List statuses | `mcp__claude_ai_Linear__list_issue_statuses(team)` |
| List labels | `mcp__claude_ai_Linear__list_issue_labels(team)` |

The MCP does not expose hard delete. When deletion is required, use the CLI or the Linear UI.

The MCP `list_issues` response can exceed token limits on large teams. Pipe to a file via the harness and `jq` rather than loading inline.

## Conventions

See [reference/conventions.md](reference/conventions.md) for classification heuristics, capacity math, and priority normalization. (Stub for cycle mode lifted from `zero:linear-groom`; backlog mode rules to be filled after the first real run.)

## Walkthroughs

See [reference/examples.md](reference/examples.md) for step by step flows: cycle grooming (mid cycle, end of cycle, start of cycle) and backlog grooming. (Cycle examples lifted; backlog example to be written after the Atelic 2026-05 run.)

## Learned Rules

Real grooming runs surface gotchas, calibration numbers, and edge cases the generic rules miss. Those land in [learned-rules.md](learned-rules.md). Read that file before each groom; a learned rule overrides the generic guidance when they conflict.
