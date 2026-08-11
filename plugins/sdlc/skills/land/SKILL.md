---
name: land
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

In all bash steps below, substitute placeholder names (like PR_NUMBER, HEAD_SHA, BOT_LOGINS) with the actual values you stored earlier.

## Workflow

1. **Identify PR or open one** (call `sdlc:review` if no PR exists for the branch)
2. **Detect bot reviewers** proactively (HEAD check/status probe + recent-PR history); supports more than one bot per repo
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

## Step 2: Detect Bot Reviewers

Build the **set** of review bots configured on this repo, and do it without waiting for any bot to review the current PR. A repo can run more than one (homebase runs both CodeRabbit and Gemini), so this stores a list, `BOT_LOGINS`, which may hold zero, one, or several logins.

GitHub's installed-apps API would be the authoritative source, but it needs app-level auth: a normal user or `gh` token gets a 401 on `repos/REPO/installation` and a 404 on the plural form. So detection unions two signals that a user token can read, neither of which waits on the current review.

Each bot leaves a different footprint, which dictates how it is found:

| Bot | Footprint on HEAD before it reviews | Found via |
|---|---|---|
| CodeRabbit | check-suite (`app.slug == coderabbitai`) + a pending `CodeRabbit` commit status, both within seconds | Signal A (instant) |
| Gemini | none — its only artifact is the review itself | Signal B (history) |

```bash
HEAD_SHA=$(gh api repos/REPO/pulls/PR_NUMBER --jq '.head.sha')

# Signal A — live HEAD probe. Instant; catches any bot that posts a check suite or
# commit status (CodeRabbit and most check-based bots). No review needed.
PROBE=$(
  { gh api "repos/REPO/commits/$HEAD_SHA/check-suites" --jq '.check_suites[].app.slug' 2>/dev/null
    gh api "repos/REPO/commits/$HEAD_SHA/statuses"      --jq '.[].context'            2>/dev/null
  } | tr 'A-Z' 'a-z' \
    | sed -n 's/.*coderabbit.*/coderabbitai[bot]/p; s/.*gemini.*/gemini-code-assist[bot]/p'
)

# Signal B — historical roster. Reads PAST PRs (not the current review), so it catches
# review-only bots like Gemini that leave no footprint on the commit.
HIST=$(
  gh api "repos/REPO/pulls?state=closed&per_page=10&sort=updated&direction=desc" --jq '.[].number' 2>/dev/null \
  | while read -r pr; do
      gh api "repos/REPO/pulls/$pr/reviews" \
        --jq '.[].user.login | select(test("(?i)gemini|coderabbit"))' 2>/dev/null
    done
)

BOT_LOGINS=$(printf '%s\n%s\n' "$PROBE" "$HIST" | grep -v '^$' | sort -u | tr '\n' ' ')
echo "BOT_LOGINS: ${BOT_LOGINS:-<none>}"
```

Store the space-separated result as BOT_LOGINS. If empty, the repo has no review bot (or, for a review-only bot, no PR history yet) — the loop still works, it just skips the iterate cycles and merges as soon as CI passes.

**Residual gap:** a brand-new repo whose first-ever PR is the one being landed has no history for Signal B, so a review-only bot (Gemini) stays invisible until it posts. There is no per-commit signal for it and the app API is closed to us, so accept the early merge there. It is rare and self-corrects on the second PR.

## Step 3: Poll for State Changes

Always resolve HEAD fresh inside the loop. Your own iterate pushes will move it, and a snapshot taken at start will silently miss the bot's reviews on the new SHA.

Run via Monitor (one notification per terminal event):

READY requires that **every** bot in BOT_LOGINS has weighed in on the current HEAD: either a review submitted on HEAD_SHA, or, for a bot whose footprint is a check rather than a review (CodeRabbit), its owned commit status resolved on HEAD_SHA. Waiting on all of them is the fuller-coverage default; the doc-only carve-out in Step 4's learned rules still lets low-risk PRs merge on green CI without the wait.

Run via Monitor (one notification per terminal event):

```bash
END=$(($(date +%s) + 2700))   # 45 min cap per polling window
while [ $(date +%s) -lt $END ]; do
  HEAD_SHA=$(gh api repos/REPO/pulls/PR_NUMBER --jq '.head.sha' 2>/dev/null)
  HUMAN=$(gh api repos/REPO/pulls/PR_NUMBER/reviews \
    --jq "[.[] | select(.user.type != \"Bot\" and .commit_id == \"$HEAD_SHA\")] | length" 2>/dev/null)
  FAILED=$(gh api repos/REPO/commits/$HEAD_SHA/check-runs \
    --jq '[.check_runs[] | select(.conclusion=="failure" or .conclusion=="cancelled" or .conclusion=="timed_out")] | length' 2>/dev/null || echo 0)

  if [ "${HUMAN:-0}" -gt 0 ];  then echo "HUMAN_REVIEW head=$HEAD_SHA";   exit 3; fi
  if [ "${FAILED:-0}" -gt 0 ]; then echo "CHECKS_FAILED head=$HEAD_SHA";  exit 2; fi

  # Which detected bots have NOT yet weighed in on HEAD?
  PENDING=""
  for bot in $BOT_LOGINS; do
    REVIEWED=$(gh api repos/REPO/pulls/PR_NUMBER/reviews \
      --jq "[.[] | select(.user.login==\"$bot\" and .commit_id==\"$HEAD_SHA\")] | length" 2>/dev/null || echo 0)
    [ "${REVIEWED:-0}" -gt 0 ] && continue
    if [ "$bot" = "coderabbitai[bot]" ]; then          # clears via its commit status, not a review
      CR=$(gh api repos/REPO/commits/$HEAD_SHA/statuses \
        --jq '[.[] | select(.context=="CodeRabbit")] | sort_by(.updated_at) | last | .state' 2>/dev/null)
      { [ "$CR" = "success" ] || [ "$CR" = "failure" ]; } && continue
    fi
    PENDING="$PENDING $bot"
  done

  if [ -z "$BOT_LOGINS" ] || [ -z "$PENDING" ]; then
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
- **Iterate**: invoke `sdlc:iterate` with PR_NUMBER. It addresses comments and pushes. **Pushing alone does NOT re-trigger either Gemini Code Assist or CodeRabbit.** After each iterate push you must explicitly post the re-review comment for **every** bot in BOT_LOGINS — `/gemini review` for Gemini, `@coderabbitai review` for CodeRabbit (consult the repo's `sdlc.review-command` config). On a repo running both, post both, or the loop will wait out the timeout on whichever bot was never re-triggered. Then check `mergeStateStatus` and rebase if the PR went `DIRTY` while you were iterating (main can move under you, especially in active repos):

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

One carve out: a conflict confined entirely to plugin version lines is yours to resolve. Merge main into the branch, take the version that is correctly ahead of origin/main under the repo's bump rule, and set every affected manifest to that one value, since a plugin's version is mirrored in `plugins/<plugin>/plugin.json` and `.claude-plugin/marketplace.json` and the two must agree. Confirm that parity, verify that both sides' unrelated changes survived the auto merge, and report the resolution in your summary rather than passing it silently. Any conflict touching real content still bails. (Approved by Forni 2026-08-10, after a stacked branch hit exactly this: main had moved a plugin to 10.0.0 while the branch went 9.0.8 to 10.0.1, so git saw competing edits on one line in two files.)

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
