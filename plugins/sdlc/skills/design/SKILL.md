---
name: design
description: Start work on an issue with branch setup and implementation design. Use this whenever the user wants to begin a new task, start on a ticket, or set up a feature branch for development work.
argument-hint: <issue-id>
allowed-tools:
  - Bash(git *)
  - Bash(linear *)
  - Bash(*get-base-branch.sh*)
  - Bash(*get-branch-strat.sh*)
  - Bash(*get-linear-issue-id.sh*)
  - Bash(*sanitize-branch-name.sh*)
  - Bash(grep *)
  - Bash(echo *)
  - Read
  - TodoWrite
  - EnterWorktree
  - EnterPlanMode
  - ExitPlanMode
  - AskUserQuestion
---

# Start Design

Starting work on issue $ARGUMENTS. Setting up git branch and fetching issue details.

In all bash steps below, substitute placeholder names (like BASE_BRANCH, BRANCH_NAME, etc.) with the actual values you stored earlier. Each placeholder appears in ALL_CAPS.

## Workflow

1. **Fetch issue details** from Linear (optional)
2. **Handle uncommitted changes** if any exist
3. **Set up work environment** (worktree or branch)
4. **Enter plan mode** for implementation design

## Step 1: Fetch Issue Details

Try to extract a Linear issue ID from the argument:

```bash
../../scripts/get-linear-issue-id.sh "$ARGUMENTS"
```

If the script succeeds, store the output as ISSUE_ID and fetch the full issue:

```bash
linear issue view ISSUE_ID
```

Parse and display:

- **Issue ID and Title**
- **Description** (full text)
- **Current Status**
- **Labels** (if any)

If the Linear CLI is not installed or the fetch fails, continue without issue details. The user can provide context manually.

## Step 2: Handle Uncommitted Changes

```bash
git status --porcelain
```

If output is non-empty, use AskUserQuestion to prompt:

- **Stash changes** to save them and continue
- **Commit changes** to create a quick commit first
- **Abort** to stop and let the user handle it

If clean, proceed.

## Step 3: Set Up Work Environment

Follow [Branch Verification](../../reference/common-patterns.md#branch-verification) to get BASE_BRANCH and CURRENT_BRANCH.

Sanitize the argument into a valid branch name:

```bash
../../scripts/sanitize-branch-name.sh "$ARGUMENTS"
```

Store the output as BRANCH_NAME. Check if it already exists:

```bash
git rev-parse --verify "BRANCH_NAME"
```

If the branch exists, use AskUserQuestion:

- **Use existing branch** to check it out
- **Choose a different name** to provide a new one
- **Abort** to stop

Determine the branching strategy:

```bash
../../scripts/get-branch-strat.sh
```

Store the output as BRANCH_STRAT. Fetch the latest from remote:

```bash
git fetch origin "BASE_BRANCH"
```

### If BRANCH_STRAT is "worktree"

Use Claude Code's native worktree tool. Track whether BRANCH_NAME is a brand new branch (default) or a pre existing branch the user chose to reuse via "Use existing branch" earlier in this step. Store this as BRANCH_IS_NEW (`true` or `false`). The branches diverge below.

Call `EnterWorktree` with `name` set to BRANCH_NAME. Claude creates `.claude/worktrees/BRANCH_NAME`, opens a fresh branch named `worktree-BRANCH_NAME` from current HEAD, and switches the session into the worktree.

#### Case 1: BRANCH_IS_NEW is `true`

Drop the `worktree-` prefix so the branch matches the issue identifier:

```bash
git branch -m "worktree-BRANCH_NAME" "BRANCH_NAME"
```

Anchor the new branch to the latest base ref. This matches the prior `git worktree add ... origin/BASE_BRANCH` semantics regardless of where the main worktree's HEAD was:

```bash
git reset --hard origin/"BASE_BRANCH"
```

#### Case 2: BRANCH_IS_NEW is `false` (reusing an existing branch)

Do NOT rename and do NOT hard reset. The rename target already exists on disk, so `git branch -m` would fail; the hard reset would obliterate the user's prior commits on BRANCH_NAME. Instead, switch the worktree to the existing branch and discard the throwaway one Claude just created:

```bash
git switch "BRANCH_NAME"
```

```bash
git branch -d "worktree-BRANCH_NAME"
```

The existing branch's commits and tracking information are preserved.

#### Both cases

Report to the user: "Worktree created at .claude/worktrees/BRANCH_NAME"

### If BRANCH_STRAT is "branch"

```bash
git checkout -b "BRANCH_NAME" origin/"BASE_BRANCH"
```

## Step 4: Create Implementation Plan

> ### 🛑 STOP — CALL `EnterPlanMode` BEFORE ANYTHING ELSE IN THIS STEP. 🛑
>
> **This is not a suggestion. This is not a vibe. This is a hard requirement.**
>
> The very first tool call in Step 4 **MUST** be `EnterPlanMode`. Not after a quick exploration. Not after a small Read. Not "I'll enter plan mode once I'm ready to draft." **FIRST. ALWAYS. NO EXCEPTIONS.**
>
> Plan mode is the safety rail that prevents accidental writes while requirements are still being discussed. Skipping it has caused real incidents where code was written before the user signed off. Saying "you are now in plan mode" in prose does not put you in plan mode — only the `EnterPlanMode` tool call does.
>
> If you find yourself reading a file, drafting a plan, or calling any tool other than `EnterPlanMode` as your first action in Step 4: **STOP, back up, and call `EnterPlanMode` first.**

Once plan mode is active, your task is to:

1. **Understand the requirement** from the issue description
2. **Explore the codebase** to understand relevant files and patterns
3. **Design the implementation approach**
4. **Create a detailed plan** using TodoWrite with specific tasks
5. **Present the plan to the user** for approval

Do not start implementing until the user approves. The plan exists so the user can course-correct before any code is written. When the plan is ready, use `ExitPlanMode` to request approval.

After approval, if a valid ISSUE_ID was found in Step 1, check if the Linear CLI is available:

```bash
command -v linear
```

If the command fails, skip the Linear updates and continue. Otherwise:

Write a design summary capturing the planning iterations, key decisions, and the chosen approach. Structure it as:

- **Summary**: One to two sentences on what will be built and why
- **Key decisions**: Bulleted list of choices made during planning and the reasoning
- **Approach**: The implementation strategy in brief

Post the summary as a comment on the ticket:

```bash
linear issue comment add ISSUE_ID "DESIGN_SUMMARY"
```

Then update the issue status:

```bash
linear issue update ISSUE_ID -s "In Progress"
```
