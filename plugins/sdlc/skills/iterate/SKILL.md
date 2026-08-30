---
name: iterate
description: Address PR review feedback and re-run the CodeRabbit CLI review on the new HEAD. Use this when the user needs to handle PR comments, respond to code review, or iterate on feedback from reviewers.
argument-hint: [PR number - auto-detected if on feature branch]
allowed-tools:
  - Bash(git *)
  - Bash(gh *)
  - Bash(coderabbit *)
  - Bash(*cr-review.sh*)
  - Bash(*get-review-command.sh*)
  - Grep
  - Read
  - Edit
---

# Iterate on PR Feedback

Fetch review comments, address each issue, and re-review the branch with the CodeRabbit CLI.

In all bash steps below, substitute placeholder names (like PR_NUMBER, REVIEW_CMD, etc.) with the actual values you stored earlier.

## Workflow

1. **Identify PR** from branch or argument
2. **Fetch review comments** focusing on new and unresolved feedback
3. **Address each comment** with fixes
4. **Commit and push** changes
5. **Re-review** with the CodeRabbit CLI, and post a summary of what was addressed

## Step 1: Identify PR

If `$ARGUMENTS` is provided, use it as PR_NUMBER. Otherwise, detect from the current branch:

```bash
gh pr view --json number --jq '.number'
```

If neither produces a PR number, stop with error: "No PR found for current branch".

Get the repo identifier for API calls:

```bash
gh repo view --json nameWithOwner --jq '.nameWithOwner'
```

Store the output as REPO (format: `owner/repo`).

## Step 2: Fetch Review Comments

Only address **new or unresolved** comments. Previously resolved feedback should not be re-addressed, as doing so wastes time and can create confusion. If it is unclear which comments are new, ask the user.

Get inline review comments:

```bash
gh api repos/REPO/pulls/PR_NUMBER/comments --jq '.[] | {id: .id, path: .path, line: .line, body: .body, author: .author.login, created_at: .created_at}'
```

Get review-level summaries:

```bash
gh pr view PR_NUMBER --json reviews --jq '.reviews[] | {author: .author.login, body: .body, state: .state}'
```

Also check for general PR comments (not attached to specific lines):

```bash
gh api repos/REPO/issues/PR_NUMBER/comments --jq '.[] | {id: .id, body: .body, author: .author.login, created_at: .created_at}'
```

Filter out comments that have already been addressed in previous iterations. Look for resolved threads and your own reply comments as signals that work is done.

Triage the remaining comments by impact:

- **High priority**: bugs, security issues, data loss risks, correctness problems
- **Medium priority**: design improvements, best practices, performance
- **Low priority**: style, formatting, naming nitpicks

Address high priority items first. This ordering matters because if something blocks you, the most important fixes are already done.

## Step 3: Address Each Comment

For each unresolved comment:

1. Read the file at the referenced path and line to understand context
2. Apply the fix or improvement
3. If the suggestion is ambiguous, make a reasonable interpretation and note it in the summary
4. Track which comments were addressed and which need clarification

If you disagree with a suggestion, still note it in the summary so the reviewer knows it was considered.

## Step 4: Commit and Push

Follow [Commit and Push](../../reference/common-patterns.md#commit-and-push).

## Step 5: Re-Review the New HEAD

The gate is a local CodeRabbit CLI run against the SHA you just pushed, not a request to the PR bot. A review of a stale SHA gates nothing, so re-run it every time you push:

```bash
coderabbit review --base origin/main --committed --agent
```

Substitute the repo's real base branch when it is not `main`, and fetch first so the base is current. As in `land`, the run counts as clean only when the closing `complete` line arrives with zero findings; a stream that stops short of it did not finish and settles nothing. Free tier allows three CLI runs an hour, so batch your fixes into one push rather than pushing per comment. Full mechanics live in `~/Eudaimonia/Admin/Tools/coderabbit.md`.

Then post a summary comment on the PR listing what was addressed. This helps a human reviewer see what changed without re-reading the entire diff.

On a **public** repo the PR bot is a genuine second look, since the free Open Source plan reviews properly there, and it does not re-review on a bare push. Appending the repo's configured trigger to that same comment is a cheap fallback, so **read the trigger before posting** and send one complete comment rather than posting and then trying to append:

```bash
../../scripts/get-review-command.sh
```

Store the output as REVIEW_CMD. On a public repo make it the comment's last line; on a private repo leave it out entirely, since the bot produces no review there. Either way, never wait on the result: it is a fallback, not the gate.

```bash
gh pr comment PR_NUMBER --body "$(cat <<'EOF'
## Feedback Addressed

- bullet list of changes made per comment

REVIEW_CMD
EOF
)"
```

## Output

```text
PR #<number> updated
Addressed <N> review comments
CLI re-review on <SHA>: <M> findings
```
