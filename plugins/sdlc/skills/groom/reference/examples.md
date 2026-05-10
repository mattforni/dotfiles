# SDLC Groom Examples

Walkthroughs for the four common grooming situations. Each assumes the Linear CLI is installed and authenticated to the target workspace (`linear auth list` shows it).

Set `$LINEAR_TEAM` to the team key for the session if you have not already.

## Backlog Walkthrough

The most common case for solo or small-team projects with no active cycle. The backlog has accumulated, priorities have drifted, and the user wants strategic focus.

This is calibrated against the Atelic 2026-05 groom (118 backlog items, solo, no roadmap doc).

### 1. Scope

Pull the backlog and characterize the shape:

```bash
linear issue query --team "$LINEAR_TEAM" --state backlog --json --limit 250 > /tmp/backlog.json
jq '.nodes | length' /tmp/backlog.json
```

Distribution by status, priority, label, and last-updated date. The MCP equivalent works but `list_issues` can exceed token limits on large teams; pipe to a file and use `jq` either way.

Report the shape: total count, status breakdown, priority distribution, label frequency, oldest items.

### 2. Identify the deferral label

Per [conventions.md](conventions.md), find the team's "intentionally deferred" label. Atelic uses `👋 Later`. The signal is: a single non-priority label appearing on a large fraction (30 percent or more) of older Backlog items.

Once identified, treat it as walk-past in the stale sweep.

### 3. Stale sweep candidates

```jq
# Items without the deferral label, no priority, untouched in 9+ months
.nodes[] | select(.state.name == "Backlog")
        | select((.labels.nodes | map(.name) | index("👋 Later")) | not)
        | select(.priority == 0)
        | select(.updatedAt < "<cutoff>")
```

Surface these for the user. They are the truly orphaned candidates; the user decides cancel vs keep.

### 4. Cluster by topic

Cluster the rest of the backlog by topic, not by label. Labels in solo backlogs are mostly the deferral label. Topic clustering surfaces real signal.

Topical clusters that came out of Atelic: Pantry, Meal Planning, Recipes, Nutrition Scoring, Training Plan, Strava/Activity, Jobs/Piper, Aspirational off-focus, Auth/Onboarding, Marketing/Pages.

Use simple title keyword grep against the Backlog issue titles to bucket. Not every item lands cleanly; that is fine, the long tail goes into Misc.

### 5. Meta-question first

Before walking each cluster, ask one high-leverage meta-question: what is the policy on the deferral label?

- Universal walk-past: trust the label, skip every item carrying it. Fastest path. The decision space shrinks dramatically.
- Walk per-cluster: ask cluster by cluster.
- No shortcut: re-evaluate every Later item.

If the user picks universal walk-past, the remaining decision space is items WITHOUT the label. On Atelic this cut 118 items down to 46 actual decisions.

### 6. Verify shipped work against the actual code

For implementation tickets that look stale (no priority, low recent activity, no obvious blocker), check whether the code already exists. Atelic example: 9 Piper tickets all had corresponding files in `app/services/ai_scoring_service.rb`, `app/controllers/v1/jobs_controller.rb`, etc. They had been implemented without explicit ticket closure.

The decision then becomes: mark Done, or demote to Low priority for any follow-up. Either is valid; ask.

### 7. Cluster batch decisions

For each cluster, propose one of:

- Keep parked (apply deferral label, walk past)
- Demote to Low priority (research/competitor cluster, shipped-with-followup cluster)
- Cancel cluster (off-focus aspirational)
- Pull subset into next cycle (focused cluster aligned with stated direction)
- Walk individually (gray zone)

Use AskUserQuestion with up to four batched questions per round. Each option has a label and one-sentence rationale.

### 8. Walk the gray zone individually

For items where the cluster decision does not fit, use per-ticket AskUserQuestion with three to four labeled options (Keep at current priority / Set Low priority / Defer with Later label / Cancel / Hard delete + recommended). Include a brief rationale per option.

Reserve batch tables for structurally-uniform clusters; the gray zone is where the skill earns its keep.

### 9. Apply via CLI

```bash
# Demote to Low
for ID in <list>; do linear issue update ATE-$ID --priority 4; done

# Cancel
linear issue update ATE-<ID> --state Canceled

# Hard delete (one at a time; --bulk is broken in CLI v2.0.0)
for ID in <list>; do linear issue delete ATE-$ID --confirm; done

# Pull into next cycle
linear issue update ATE-<ID> --cycle <N>
```

If `LINEAR_API_KEY` is set in the env and shadows the keychain auth, prefix each call with `LINEAR_API_KEY=` to override per-call, or unset it for the session.

### 10. Verify

```bash
linear issue query --team "$LINEAR_TEAM" --state backlog --json --limit 250 \
  | jq '.nodes | group_by(.priorityLabel) | map({priority: .[0].priorityLabel, count: length})'
```

The new priority distribution tells the story: are the High items now the actual shipping work, or did things slip?

## Mid-Cycle Walkthrough

Cycle started clean, scope crept, remaining days do not match remaining work. Trigger phrases: "let us trim the cycle", "we have too much in here", "what should I drop."

### 1. Scope

```bash
linear cycle list --team "$LINEAR_TEAM"
```

Capture: current cycle number, dates, business days remaining, issue count.

### 2. Read cycle plan

```bash
grep -A 30 "^### Cycle Plan" "$ROADMAP_DOC"
```

Extract the row for the active cycle. Note per-Initiative focus.

For each in-focus project, also read its Linear description for pillars (see conventions.md).

### 3. List open in cycle

```bash
linear issue query \
  --team "$LINEAR_TEAM" \
  --cycle active \
  --state unstarted --state started \
  --json > /tmp/cycle-open.json
```

### 4. Partition

Apply rules from [conventions.md](conventions.md). Bulk lands in Keep; the work is identifying borderline items for Move/Backlog/Reprioritize/Cancel.

### 5. Present the diff

Table format grouped by action. Capacity line at the top: "Keep bucket: 16. Capacity floor: 8 days × 2 owners × 0.9 = 14.4. Mild overcommit, OK if borderline items can slip."

Flag priority mismatches in the Keep bucket so the user can bump if desired.

### 6. Resolve ambiguity

Group ambiguous tickets by category (in-progress-but-off-plan, dependency-adjacent, low-signal, etc.) and walk each group with AskUserQuestion. Do not bulk guess.

### 7. Apply

CLI commands to move, reprioritize, return to backlog, cancel.

## End-of-Cycle Close-Out

The cycle is ending. Decide what spills into the next cycle and what gets reopened as new scope.

1. List open issues in the active cycle, including blocked states
2. Anything In Progress: move to next cycle, keep priority
3. Anything Todo with assignee: ask the user (move or backlog)
4. Anything Todo unassigned: return to backlog by default
5. Anything Canceled: leave it
6. Generate close-out summary with counts per bucket

No capacity math at end of cycle. The math happens at the start of the next cycle.

## Start-of-Cycle Scoping

Next cycle just started, plan is written, cycle is empty in Linear. Pulling in, not pushing out.

1. Read the cycle plan row for the new cycle
2. For each in-focus initiative, list its projects' backlog issues
3. Cross-reference against cycle plan and project pillars
4. Propose a slate sized to capacity
5. Apply by setting `--cycle <N>` on each selected issue
6. Post the slate as a comment on the cycle if requested

**Do not auto-pull issues that were previously moved out** of the prior cycle without surfacing them. The prior move was a signal; repeating the prior mistake is how cycles stay overstuffed.

## Dry-Run Pattern

If the user asks for a dry run, complete steps 1 through 5 of the relevant walkthrough but stop before Apply. End with the diff table and a note: "No changes applied. Say 'apply' to proceed."
