---
name: sdlc:checkpoint
description: Save work in progress with commit and push (no PR). Use this when the user wants to save progress, push a checkpoint, or back up current work without creating a pull request.
argument-hint: [optional commit message]
allowed-tools:
  - Bash(git *)
  - Bash(*get-base-branch.sh*)
  - Grep
  - Read
---

# Checkpoint

Save current work in progress to remote. Creates a commit and pushes but does not create a PR. This is useful for backing up work, switching contexts, or sharing progress before a formal review.

## Workflow

1. **Verify branch state** on a feature branch, not main
2. **Check for changes** to confirm there is something to commit
3. **Commit and push** to remote

## Step 1: Verify Branch State

Follow [Branch Verification](../../reference/common-patterns.md#branch-verification).

If CURRENT_BRANCH equals BASE_BRANCH, stop with error: "Cannot checkpoint on default branch. Create a feature branch first."

## Step 2: Check for Changes

```bash
git status --porcelain
```

If output is empty, stop: "No changes to checkpoint. Working directory is clean."

Show the user what will be committed:

```bash
git diff --stat
```

## Step 3: Commit and Push

Follow [Commit and Push](../../reference/common-patterns.md#commit-and-push).

## Output

```
Checkpoint saved to <branch-name>
Commit: <short-hash> <message>
```
