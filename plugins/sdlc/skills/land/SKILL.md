---
name: sdlc:land
description: Drive the back half of SDLC autonomously — open the PR if needed, iterate with the bot reviewer until feedback is addressed, merge (squash), then clean up. The agent (not GitHub) judges when feedback is addressed. Bails to the user on human review, hard CI failure, merge conflict, or time budget exceeded. Default next step after implementation; use when the user says "land it", "ship this", "merge when ready", or invokes /sdlc:land.
argument-hint: "[PR number - auto-detected if on feature branch]"
allowed-tools:
  - Bash(git *)
  - Bash(gh *)
  - Bash(*get-base-branch.sh*)
  - Bash(*get-review-command.sh*)
  - Read
  - Edit
  - Monitor
  - Skill(sdlc:review)
  - Skill(sdlc:iterate)
  - Skill(sdlc:complete)
---

# Land a PR

Take an implementation from "ready for review" through "merged and cleaned up". Wraps `sdlc:review` → poll → (`sdlc:iterate`)* → merge → `sdlc:complete`. The agent owns the feedback-completeness judgment because GitHub's `mergeStateStatus: CLEAN` only reflects branch protection and required checks, not whether bot suggestions have been addressed.

In all bash steps below, substitute placeholder names (like PR_NUMBER, HEAD_SHA, BOT_LOGIN) with the actual values you stored earlier.

## Workflow

1. **Identify PR or open one** (call `sdlc:review` if no PR exists for the branch)
2. **Detect bot reviewer** by scanning recent PRs (a fresh PR has no reviews yet)
3. **Poll** for state changes via Monitor — exits on bot re-review, CI failure, human review, or timeout
4. **Decide and act**: merge / address feedback / bail
5. **Merge and complete** when ready — invoke `sdlc:complete` for cleanup

## Step 1: Identify PR or Open One

If `$ARGUMENTS` is provided, use it as PR_NUMBER and skip to Step 2.

Otherwise try to detect from the current branch:

```bash
gh pr view --json number --jq '.number' 2>/dev/null
```

If empty, no PR exists yet — invoke `sdlc:review` to open one, then re-run the detection. Store the result as PR_NUMBER. If still empty after `sdlc:review`, stop with error: "No PR could be opened for the current branch".

Get the repo identifier:

```bash
gh repo view --json nameWithOwner --jq '.nameWithOwner'
```

Store as REPO (format: `owner/repo`).

## Step 2: Detect Bot Reviewer

Identify the repo's review bot (Gemini Code Assist or CodeRabbit are the common ones). **Do not look only at the current PR.** A freshly opened PR usually has no reviews yet, so a current-PR-only query returns empty and you would wrongly conclude the repo has no bot, then merge before its first pass. Scan recent PRs to learn which bot reviews this repo:

```bash
BOT_LOGIN=$(
  gh api "repos/REPO/pulls?state=all&per_page=15&sort=updated&direction=desc" --jq '.[].number' 2>/dev/null \
  | while read -r pr; do
      gh api "repos/REPO/pulls/$pr/reviews" \
        --jq '.[].user.login | select(test("(?i)gemini|coderabbit"))' 2>/dev/null
    done | sort | uniq -c | sort -rn | head -1 | awk '{print $2}'
)
```

Store as BOT_LOGIN. If empty after the scan, the repo genuinely has no review bot (or has no reviewed history yet) — the loop still works, it just skips the iterate cycles and merges as soon as CI passes. Once BOT_LOGIN is set, Step 3 waits for that bot to review THIS PR's HEAD before declaring READY, which closes the cold-start race.

## Step 3: Poll for State Changes

Always resolve HEAD fresh inside the loop. Your own iterate pushes will move it, and a snapshot taken at start will silently miss the bot's reviews on the new SHA.

Run via Monitor (one notification per terminal event):

```bash
END=$(($(date +%s) + 2700))   # 45 min cap per polling window
while [ $(date +%s) -lt $END ]; do
  HEAD_SHA=$(gh api repos/REPO/pulls/PR_NUMBER --jq '.head.sha' 2>/dev/null)
  LATEST_BOT_SHA=$(gh api repos/REPO/pulls/PR_NUMBER/reviews \
    --jq "[.[] | select(.user.login == \"BOT_LOGIN\")] | sort_by(.submitted_at) | last | .commit_id" 2>/dev/null)
  HUMAN=$(gh api repos/REPO/pulls/PR_NUMBER/reviews \
    --jq "[.[] | select(.user.type != \"Bot\" and .commit_id == \"$HEAD_SHA\")] | length" 2>/dev/null)
  FAILED=$(gh api repos/REPO/commits/$HEAD_SHA/check-runs \
    --jq '[.check_runs[] | select(.conclusion=="failure" or .conclusion=="cancelled" or .conclusion=="timed_out")] | length' 2>/dev/null || echo 0)

  if [ "$HUMAN" -gt 0 ];  then echo "HUMAN_REVIEW head=$HEAD_SHA";   exit 3; fi
  if [ "$FAILED" -gt 0 ]; then echo "CHECKS_FAILED head=$HEAD_SHA";  exit 2; fi
  if [ -z "$BOT_LOGIN" ] || [ "$LATEST_BOT_SHA" = "$HEAD_SHA" ]; then
    echo "READY head=$HEAD_SHA"; exit 0
  fi
  sleep 60
done
echo "TIMEOUT head=$HEAD_SHA"; exit 1
```

Calibration: 60s poll interval and 45 min cap fit atelic-style repos (CI 1–2 min, bot latency 3–15 min). Re-tune per repo if needed.

## Step 4: Decide and Act on the Event

- **`READY`**: fetch the latest bot review body and inline comments on HEAD_SHA.
  - Triage each item: high/medium/low severity, actionable vs advisory.
  - Read the actual code before treating any bot suggestion as authoritative. Bots can be wrong — Gemini in particular has been observed to manufacture concerns about control flow it hasn't traced (e.g., claiming a private helper redirects when it doesn't). When a suggestion is wrong, decline with reasoning in the iterate summary comment.
  - Bots don't track resolved threads the same way humans do. Gemini re-raises advisory items every cycle; that's expected — decline again or merge through it. CodeRabbit tracks resolution and may need explicit dismissal via the GitHub API for stale reviews after fixes are pushed.
  - Decide:
    - No comments / "no feedback" / all advisory you'd decline → **merge** (Step 5)
    - Actionable items → **iterate** (next bullet)
    - Mixed → address actionable, decline advisory with reasoning, push, then loop back to Step 3
- **Iterate**: invoke `sdlc:iterate` with PR_NUMBER. It addresses comments and pushes. **Pushing alone does NOT re-trigger either Gemini Code Assist or CodeRabbit.** After each iterate push you must explicitly post the re-review comment for the configured bot — `/gemini review` for Gemini, `@coderabbitai review` for CodeRabbit (consult the repo's `sdlc.review-command` config). Then check `mergeStateStatus` and rebase if the PR went `DIRTY` while you were iterating (main can move under you, especially in active repos):

  ```bash
  gh pr view PR_NUMBER --json mergeStateStatus --jq '.mergeStateStatus'
  ```

  If `DIRTY`, fetch main, rebase, resolve conflicts, force-push with `--force-with-lease`, then post the re-review trigger. Loop back to Step 3.
- **`CHECKS_FAILED`**: fetch failing job logs. If the failure is something you introduced and can fix in place, fix and push; loop back to Step 3. Otherwise bail to the user with the failing job link.
- **`HUMAN_REVIEW`**: bail to the user with the review body. Humans get the final word — never auto-merge over a human comment even if it looks like a nit.
- **`TIMEOUT`**: bail to the user with the current state summary.

## Step 5: Merge and Complete

Confirm merge readiness:

```bash
gh pr view PR_NUMBER --json mergeStateStatus --jq '.mergeStateStatus'
```

If `CLEAN`:

```bash
gh pr merge PR_NUMBER --squash --delete-branch
```

If `BEHIND` or `DIRTY` (merge conflict against base): bail to user. Rebasing into a conflicting state is judgment-call territory and shouldn't happen silently.

After successful merge, invoke `sdlc:complete` to clean up the worktree/branch. `sdlc:complete` already handles the squash-merge gotcha where `git branch -d` fails the DAG ancestry check (uses `-D` after verifying content parity).

## Output

```text
PR #<number> landed
Cycles: <N> iterate, <M> decline
Merged: <SHA>
Status: clean
```

If bailed:

```text
PR #<number> needs attention
Reason: <HUMAN_REVIEW | CHECKS_FAILED | TIMEOUT | MERGE_CONFLICT>
Current state: <summary + link>
```
