---
name: sdlc:complete
description: Finish work and reset local environment for next task. Use this when the user is done with a feature branch, wants to clean up after a merged PR, or needs to reset their workspace.
allowed-tools:
  - Bash(git *)
  - Bash(gh *)
  - Bash(linear *)
  - Bash(*get-base-branch.sh*)
  - Bash(*get-linear-issue-id.sh*)
  - ExitWorktree
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

Determine whether the current directory is a linked worktree by comparing the git dir with the common dir. They differ in a linked worktree and match in the main working tree:

```bash
git rev-parse --git-dir
```

```bash
git rev-parse --git-common-dir
```

If the two outputs match, follow Case C. Otherwise, get the worktree path:

```bash
git rev-parse --show-toplevel
```

Store as WORKTREE_PATH. If WORKTREE_PATH contains `/.claude/worktrees/`, follow Case A. Otherwise, follow Case B.

### Case A: Claude managed worktree

The worktree lives under `.claude/worktrees/`, so it was created by `sdlc:design` via Claude Code's native worktree tools. Try the native tear down first.

Call `ExitWorktree` with `action: "remove"`. Three outcomes are possible.

#### Outcome 1: Success

The session is the one that created the worktree AND the worktree branch has no commits beyond the original branch. ExitWorktree removes the directory, deletes the branch, and restores the original cwd in one step. Skip to Step 4.

#### Outcome 2: Refused with "commits on the worktree branch"

ExitWorktree's safety check uses DAG ancestry, which always fails after a squash merge (the squash commit on `main` has a different SHA than the worktree branch's commits, even though the content is identical). It also fails for genuinely unmerged work. Use PR_STATE from Step 1 to disambiguate:

- **If PR_STATE is `MERGED`**: the work is on `origin/BASE_BRANCH` as the squash, so the local commits are redundant. Re-invoke `ExitWorktree` with `action: "remove"` and `discard_changes: true`. Then skip to Step 4.
- **If PR_STATE is `OPEN` or `NONE`**: the local commits may represent unpushed work. Do NOT auto-discard. Show the user the unmerged commits:

  ```bash
  git log origin/"BASE_BRANCH"..HEAD --oneline
  ```

  Then use AskUserQuestion to ask whether to:
  - **Discard and remove** — re-invoke `ExitWorktree` with `discard_changes: true`. Then skip to Step 4.
  - **Keep the worktree** — re-invoke `ExitWorktree` with `action: "keep"`. Skill stops here; user resolves manually.

#### Outcome 3: Refused with "no worktree session"

Common when `sdlc:design` ran in a previous session, so the current session has no record of having created this worktree. Fall back to manual removal. Get the main worktree path:

```bash
git worktree list --porcelain
```

The first line has the format `worktree /path/to/main`. Extract the path and store as MAIN_WORKTREE.

Remove the worktree:

```bash
git -C "MAIN_WORKTREE" worktree remove "WORKTREE_PATH"
```

If this fails because the worktree has uncommitted changes, inform the user and advise manual cleanup. Do not pass `--force` automatically, as that risks losing work.

After successful manual removal, the session's cwd is now a deleted directory. **Stop the skill flow here.** Do not continue to Step 4, since every subsequent git command would run against a stale cwd and fail. Tell the user:

> Worktree removed. Your session cwd is now a deleted directory. Run `cd MAIN_WORKTREE` and re run `/sdlc:complete` from the main worktree to finish pruning stale branches.

The user's second invocation will land in Case C, which handles the remaining cleanup correctly.

### Case B: Linked worktree outside `.claude/worktrees/`

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

For each branch showing `[gone]` in the output, attempt deletion. The `-d` flag uses DAG ancestry, which fails on squash merged branches because the squash commit on `BASE_BRANCH` has a different SHA than the branch tip. Try `-d` first; on failure, verify the branch content is identical to `BASE_BRANCH` and force delete:

```bash
git branch -d <branch-name-here>
```

If that fails with "not fully merged", verify the branch content matches `BASE_BRANCH`:

```bash
git diff "BASE_BRANCH".."<branch-name-here>" --quiet
```

Exit code 0 means there is no diff (the branch tip's content is identical to `BASE_BRANCH`, which is the case after a squash merge). Force delete:

```bash
git branch -D <branch-name-here>
```

If the diff is non-empty, do NOT force delete. Warn the user that the branch has content not on `BASE_BRANCH` and skip it.

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

```text
Environment reset complete
Branch: main
Status: (clean)

Ready for next task. Use /sdlc:design <issue-id> to start.
```
