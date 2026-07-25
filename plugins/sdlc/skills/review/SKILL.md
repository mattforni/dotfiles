---
name: review
description: Create PR for code review. Use this when the user is ready to submit their work, create a pull request, or send code for review.
allowed-tools:
  - Bash(git *)
  - Bash(gh *)
  - Bash(*get-base-branch.sh*)
  - Grep
  - Read
  - Edit
---

# Submit for Review

Commit, push, and create a PR for code review.

In all bash steps below, substitute placeholder names (like BASE_BRANCH, CURRENT_BRANCH, etc.) with the actual values you stored earlier.

## Workflow

1. **Verify branch state** on a feature branch with changes
2. **Detect and remove dead code** introduced by this branch
3. **Commit and push** all changes
4. **Create PR** with a comprehensive description

## Step 1: Verify Branch State

Follow [Branch Verification](../../reference/common-patterns.md#branch-verification).

If CURRENT_BRANCH equals BASE_BRANCH, stop with error: "Cannot create PR from default branch".

Check if a PR already exists for this branch:

```bash
gh pr view --json number,state --jq '.number,.state'
```

If a PR already exists, report its number and state. If it is open, ask the user whether to update the existing PR (just push new commits) or proceed with a new one.

Check for uncommitted changes:

```bash
git status --porcelain
```

If output is empty, check for unpushed commits:

```bash
git log @{u}..HEAD
```

If both are empty, stop: "No changes to submit."

## Step 2: Dead Code Detection

The goal is to catch orphaned code before it lands in the PR. This matters because deleted imports, renamed functions, and removed type references often leave behind unreferenced code that reviewers have to flag.

Get the full diff against the base branch so you can see what was added and removed:

```bash
git diff BASE_BRANCH...HEAD
```

Analyze what was removed or renamed. Specifically:

1. Identify deleted imports, function calls, class references, or type usages in the diff
2. For each deleted reference, search the codebase to see if anything still uses it
3. If a function, class, or type has zero remaining references (in both implementation and test files), remove it
4. If an import was the only consumer of an exported member, check whether that export is still used elsewhere

**Safety guardrails:**

- Only remove code with zero references across the entire codebase
- Preserve exported members that could be part of a public API
- When uncertain, leave the code and note it in the PR description
- Check test files too, as they are valid consumers

Report what was cleaned up (if anything) before proceeding.

## Step 3: Commit and Push

Follow [Commit and Push](../../reference/common-patterns.md#commit-and-push).

## Step 4: Create PR

Get the commit log for the branch:

```bash
git log BASE_BRANCH..HEAD --pretty=format:"- %s%n%b"
```

Use the commits to write a clear PR title and body. The title should be concise (under 70 chars). The body should summarize what changed and why, plus a test plan.

Create the PR using a HEREDOC for the body to preserve formatting:

```bash
gh pr create --base BASE_BRANCH --title "PR title here" --body "$(cat <<'EOF'
## Summary
- bullet points summarizing the changes

## Test plan
- [ ] verification steps

EOF
)"
```

## Output

Report success with the PR URL from the `gh pr create` output.
