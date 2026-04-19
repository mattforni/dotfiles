---
name: sdlc:complete
description: Finish work and reset local environment for next task. Use this when the user is done with a feature branch, wants to clean up after a merged PR, or needs to reset their workspace.
allowed-tools:
  - Bash(git *)
  - Bash(gh *)
  - Bash(linear *)
  - Bash(*get-base-branch.sh*)
  - Bash(test *)
  - Bash(*get-linear-issue-id.sh*)
---

# Complete Work

Finish the current task and reset the local environment for the next piece of work.

In all bash steps below, substitute placeholder names (like BASE_BRANCH, CURRENT_BRANCH, etc.) with the actual values you stored earlier.

## Workflow

1. **Verify PR is merged** to confirm the work is done
2. **Update Linear issue** to Done (if applicable)
3. **Detect environment and cleanup** worktree or branch
4. **Prune stale branches** that have been merged remotely
5. **Confirm clean state**

## Step 1: Verify PR is Merged

Follow [Branch Verification](../../reference/common-patterns.md#branch-verification).

If CURRENT_BRANCH equals BASE_BRANCH, note "Already on default branch" and skip to Step 4.

Otherwise, check PR status:

```bash
gh pr view --json state --jq '.state'
```

Store the output as PR_STATE (or "NONE" if the command fails).

- If OPEN: warn the user the PR is still open and ask if they want to continue anyway
- If MERGED: note "PR merged successfully"
- If NONE: note "No PR found for branch" and proceed

## Step 2: Update Linear Issue

Try to extract a Linear issue ID from the branch name:

```bash
../../scripts/get-linear-issue-id.sh "CURRENT_BRANCH"
```

If it succeeds, store the output as ISSUE_ID and update:

```bash
linear issue update ISSUE_ID -s "Done"
```

If the Linear CLI is not available or the command fails, continue silently.

## Step 3: Detect Environment and Cleanup

Follow [Linked Worktree Detection](../../reference/common-patterns.md#linked-worktree-detection) to determine if the current directory is a linked worktree. Then follow the matching case below.

### Case A: Linked worktree with SDLC marker

Applies when worktree detection indicates a linked worktree AND the marker file exists:

```bash
test -f .sdlc-worktree
```

Get the current worktree path:

```bash
git rev-parse --show-toplevel
```

Store as WORKTREE_PATH. Get the main worktree path:

```bash
git worktree list --porcelain
```

The first line has the format `worktree /path/to/main`. Extract the path and store as MAIN_WORKTREE.

Remove the worktree:

```bash
git -C "MAIN_WORKTREE" worktree remove "WORKTREE_PATH"
```

If this fails because the worktree has uncommitted changes, inform the user and advise manual cleanup. Do not force-remove, as that risks losing work.

### Case B: Linked worktree without SDLC marker

This worktree was not created by `sdlc:design`. Warn the user and advise manual cleanup. Do not attempt any removal.

### Case C: Main working tree

Switch back to the default branch and clean up the feature branch:

```bash
git checkout "BASE_BRANCH"
```

```bash
git pull origin "BASE_BRANCH"
```

```bash
git branch -d "CURRENT_BRANCH"
```

The `-d` flag (lowercase) only deletes if the branch is fully merged, which is a safety net against accidental deletion of unmerged work.

## Step 4: Prune Stale Branches

From the main worktree, clean up remote tracking branches that no longer exist:

```bash
git fetch --prune
```

List branches to identify those whose remote was deleted after merge:

```bash
git branch -vv
```

For each branch showing `[gone]` in the output, delete it:

```bash
git branch -d <branch-name-here>
```

## Step 5: Confirm Reset

```bash
git worktree list
```

```bash
git branch --show-current
```

```bash
git status --short
```

## Output

```
Environment reset complete
Branch: main
Status: (clean)

Ready for next task. Use /sdlc:design <issue-id> to start.
```
