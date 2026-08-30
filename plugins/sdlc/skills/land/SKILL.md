---
name: land
description: Drive the back half of SDLC autonomously. Run the CodeRabbit CLI review as the gate, watch CI, triage findings, merge (squash), then clean up. The agent (not GitHub) judges when feedback is addressed. Bails to the user on human review, hard CI failure, merge conflict, or time budget exceeded. Default next step after implementation; use when the user says "land it", "ship this", "merge when ready", or invokes /sdlc:land.
argument-hint: "[PR number - auto-detected if on feature branch]"
allowed-tools:
  - Bash(git *)
  - Bash(gh *)
  - Bash(coderabbit *)
  - Bash(*get-base-branch.sh*)
  - Read
  - Edit
  - Monitor
  - Skill(sdlc:review)
  - Skill(sdlc:iterate)
  - Skill(sdlc:complete)
---

# Land a PR

Take an implementation from "ready for review" through "merged and cleaned up". Wraps `sdlc:review` → CLI review → watch CI → (`sdlc:iterate`)* → merge → `sdlc:complete`. The agent owns the feedback-completeness judgment because GitHub's `mergeStateStatus: CLEAN` only reflects branch protection and required checks, not whether the review's findings have been addressed.

In all bash steps below, substitute placeholder names (like PR_NUMBER, HEAD_SHA) with the actual values you stored earlier.

## Workflow

1. **Identify PR or open one** (call `sdlc:review` if no PR exists for the branch)
2. **Review the branch yourself with the CodeRabbit CLI.** This is the gate.
3. **Watch CI** on a bounded poll, exiting on settled checks, CI failure, human review, or timeout
4. **Decide and act**: merge / address findings / bail
5. **Merge and complete** when ready, invoking `sdlc:complete` for cleanup

Never wait on the CodeRabbit PR bot. On a private repo the free plan posts a walkthrough comment and never a review object, so a loop that polls for one polls forever while gating on nothing. On a public repo the free Open Source plan does review properly, so read its findings if they have already arrived, but merge on your own CLI review plus CI regardless. Adopted 2026-08-29; the full reasoning and mechanics live in `~/Eudaimonia/Admin/Tools/coderabbit.md`.

## Step 1: Identify PR or Open One

If `$ARGUMENTS` is provided, use it as PR_NUMBER and skip to Step 2.

Otherwise try to detect from the current branch:

```bash
gh pr view --json number --jq '.number' 2>/dev/null
```

If empty, no PR exists yet, so invoke `sdlc:review` to open one, then re-run the detection. Store the result as PR_NUMBER. If still empty after `sdlc:review`, stop with error: "No PR could be opened for the current branch".

Get the repo identifier:

```bash
gh repo view --json nameWithOwner --jq '.nameWithOwner'
```

Store as REPO (format: `owner/repo`).

## Step 2: Run the CodeRabbit CLI Review

This is the review gate, and it runs against the branch's current HEAD in the PR's worktree or checkout:

```bash
coderabbit review --base origin/main --committed --agent
```

Substitute the repo's real base branch (`scripts/get-base-branch.sh`) when it is not `main`, and fetch first so `origin/main` is current. The command needs a working directory and offers no flag that selects one, so drive it through a small wrapper script that changes directory internally and echoes `pwd` back for confirmation.

It returns in a couple of minutes, needs no trigger comment, and has no PR queue. Parse the JSONL it emits: `finding` lines carry `severity` and `fileName`, and the closing `complete` line carries the count. Do not gate on the exit code, which is undocumented. Free tier allows three CLI reviews per hour, so spend them on real HEADs rather than on speculative re-runs.

Store the findings for Step 4. A run that produces no findings is a clean gate.

## Step 3: Watch CI

Always resolve HEAD fresh inside the loop. Your own iterate pushes will move it, and a snapshot taken at start will silently miss the checks on the new SHA.

The loop waits for CI and for the human signals that force a bail. It does not wait on any bot.

```bash
END=$(($(date +%s) + 1800))   # 30 min cap per polling window
while [ $(date +%s) -lt $END ]; do
  HEAD_SHA=$(gh api repos/REPO/pulls/PR_NUMBER --jq '.head.sha' 2>/dev/null)
  HUMAN=$(gh api repos/REPO/pulls/PR_NUMBER/reviews \
    --jq "[.[] | select(.user.type != \"Bot\" and .commit_id == \"$HEAD_SHA\")] | length" 2>/dev/null)
  FAILED=$(gh api repos/REPO/commits/$HEAD_SHA/check-runs \
    --jq '[.check_runs[] | select(.conclusion=="failure" or .conclusion=="cancelled" or .conclusion=="timed_out")] | length' 2>/dev/null || echo 0)
  PENDING_CI=$(gh api repos/REPO/commits/$HEAD_SHA/check-runs \
    --jq '[.check_runs[] | select(.status!="completed")] | length' 2>/dev/null || echo 0)

  if [ "${HUMAN:-0}" -gt 0 ];  then echo "HUMAN_REVIEW head=$HEAD_SHA";   exit 3; fi
  if [ "${FAILED:-0}" -gt 0 ]; then echo "CHECKS_FAILED head=$HEAD_SHA";  exit 2; fi
  if [ "${PENDING_CI:-0}" -eq 0 ]; then echo "READY head=$HEAD_SHA"; exit 0; fi
  sleep 60
done
echo "TIMEOUT head=$HEAD_SHA"; exit 1
```

Calibration: a 60s poll interval and a 30 min cap fit atelic-style repos, whose CI settles in one to two minutes. The old 45 min window existed to absorb bot latency and is no longer needed. Re-tune per repo if CI is genuinely slower.

Run this under Monitor when landing in the background, and stay resident until it reports a terminal state rather than arming it and returning.

## Step 4: Decide and Act on the Event

- **`READY`**: triage the CLI findings from Step 2, plus any PR bot comments that happen to be sitting on HEAD if the repo is public.
  - Read the actual code before treating any finding as authoritative. Reviewers can be wrong, the CLI included, and a finding that misreads control flow gets declined rather than obeyed.
  - Sort by severity and by whether the item is actionable or advisory.
  - Decide:
    - No findings, or only advisory items you would decline → **merge** (Step 5)
    - Actionable items → **iterate** (next bullet)
    - Mixed → address the actionable ones, decline the advisory ones with reasoning, push, then loop back
  - When a declined item came from the PR bot and is therefore visible to others, reply on that comment with the reasoning so the audit trail shows it was considered rather than ignored.
- **Iterate**: invoke `sdlc:iterate` with PR_NUMBER. It addresses findings and pushes. **After any push, re-run the CLI review from Step 2 against the new HEAD.** A review of a stale SHA gates nothing, which is the whole reason the gate is a local run rather than a status colour. Then check `mergeStateStatus` and rebase if the PR went `DIRTY` while you were iterating, since main can move under you in an active repo:

  ```bash
  gh pr view PR_NUMBER --json mergeStateStatus --jq '.mergeStateStatus'
  ```

  If `DIRTY`, fetch main, rebase, resolve conflicts, force-push with `--force-with-lease`, then re-run the CLI review. Loop back to Step 3.
- **`CHECKS_FAILED`**: fetch failing job logs. If the failure is something you introduced and can fix in place, fix and push; re-run the CLI review and loop back to Step 3. Otherwise bail to the user with the failing job link.
- **`HUMAN_REVIEW`**: bail to the user with the review body. Humans get the final word, so never auto-merge over a human comment even if it looks like a nit.
- **`TIMEOUT`**: bail to the user with the current state summary.

## Step 5: Merge and Complete

Confirm merge readiness. The gate is met when the CLI review ran clean against the current HEAD, CI is green, and:

```bash
gh pr view PR_NUMBER --json mergeStateStatus --jq '.mergeStateStatus'
```

If `CLEAN`:

```bash
gh pr merge PR_NUMBER --squash --delete-branch
```

If `BEHIND` or `DIRTY` (merge conflict against base): bail to user. Rebasing into a conflicting state is judgment-call territory and shouldn't happen silently.

One carve out: a conflict confined entirely to plugin version lines is yours to resolve. Merge main into the branch, take the version that is correctly ahead of origin/main under the repo's bump rule, and set every affected manifest to that one value, since a plugin's version is mirrored in `plugins/<plugin>/plugin.json` and `.claude-plugin/marketplace.json` and the two must agree. Confirm that parity, verify that both sides' unrelated changes survived the auto merge, and report the resolution in your summary rather than passing it silently. Any conflict touching real content still bails. (Approved by Forni 2026-08-10, after a stacked branch hit exactly this: main had moved a plugin to 10.0.0 while the branch went 9.0.8 to 10.0.1, so git saw competing edits on one line in two files.)

After successful merge, invoke `sdlc:complete` to clean up the worktree/branch. `sdlc:complete` already handles the squash-merge gotcha where `git branch -d` fails the DAG ancestry check (uses `-D` after verifying content parity).

## Output

```text
PR #<number> landed
Cycles: <N> iterate, <M> decline
Review: <N> CLI runs, <M> findings on the merged HEAD
Merged: <SHA>
Status: clean
```

If bailed:

```text
PR #<number> needs attention
Reason: <HUMAN_REVIEW | CHECKS_FAILED | TIMEOUT | MERGE_CONFLICT>
Current state: <summary + link>
```
