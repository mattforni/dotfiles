---
name: sdlc:iterate
description: Address PR review feedback and request re-review. Use this when the user needs to handle PR comments, respond to code review, or iterate on feedback from reviewers.
argument-hint: [PR number - auto-detected if on feature branch]
allowed-tools:
  - Bash(git *)
  - Bash(gh *)
  - Bash(*get-review-command.sh*)
  - Grep
  - Read
  - Edit
---

# Iterate on PR Feedback

Fetch review comments, address each issue, and request re-review.

In all bash steps below, substitute placeholder names (like PR_NUMBER, REVIEW_CMD, etc.) with the actual values you stored earlier.

## Workflow

1. **Identify PR** from branch or argument
2. **Fetch review comments** focusing on new and unresolved feedback
3. **Address each comment** with fixes
4. **Commit and push** changes
5. **Request re-review** with a summary of what was addressed

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

## Step 5: Request Re-Review

Get the configured review command:

```bash
../../scripts/get-review-command.sh
```

Store the output as REVIEW_CMD.

Post a summary comment on the PR listing what was addressed. This helps the reviewer quickly see what changed without re-reading the entire diff:

```bash
gh pr comment PR_NUMBER --body "$(cat <<'EOF'
## Feedback Addressed

- bullet list of changes made per comment

REVIEW_CMD
EOF
)"
```

Replace the bullet list content and REVIEW_CMD with actual values.

## Output

```
PR #<number> updated
Addressed <N> review comments
Re-review requested via: <REVIEW_CMD>
```
