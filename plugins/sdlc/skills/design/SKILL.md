---
name: sdlc:design
description: Start work on an issue with branch setup and implementation design. Use this whenever the user wants to begin a new task, start on a ticket, or set up a feature branch for development work.
argument-hint: <issue-id>
allowed-tools:
  - Bash(git *)
  - Bash(linear *)
  - Bash(*get-base-branch.sh*)
  - Bash(*get-branch-strat.sh*)
  - Bash(*get-linear-issue-id.sh*)
  - Bash(*get-worktree-dir.sh*)
  - Bash(*sanitize-branch-name.sh*)
  - Bash(grep *)
  - Bash(echo *)
  - Bash(mkdir *)
  - Read
  - TodoWrite
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

Get the worktree directory:

```bash
../../scripts/get-worktree-dir.sh
```

Store the output as WORKTREE_DIR.

Ensure the worktree directory is in `.gitignore`:

```bash
test -f .gitignore && grep -qxF "WORKTREE_DIR/" .gitignore
```

If the command exits non-zero (file missing or pattern not found), append it:

```bash
echo "WORKTREE_DIR/" >> .gitignore
```

Ensure the parent directory exists:

```bash
mkdir -p "WORKTREE_DIR"
```

Create the worktree with a new branch based on the latest remote:

```bash
git worktree add "WORKTREE_DIR/BRANCH_NAME" -b "BRANCH_NAME" origin/"BASE_BRANCH"
```

Report to the user: "Worktree created at WORKTREE_DIR/BRANCH_NAME"

Create a marker file so `sdlc:complete` knows this worktree is SDLC-managed:

```bash
echo "" > "WORKTREE_DIR/BRANCH_NAME/.sdlc-worktree"
```

### If BRANCH_STRAT is "branch"

```bash
git checkout -b "BRANCH_NAME" origin/"BASE_BRANCH"
```

## Step 4: Create Implementation Plan

You are now in **plan mode**. Your task is to:

1. **Understand the requirement** from the issue description
2. **Explore the codebase** to understand relevant files and patterns
3. **Design the implementation approach**
4. **Create a detailed plan** using TodoWrite with specific tasks
5. **Present the plan to the user** for approval

Do not start implementing until the user approves. The plan exists so the user can course-correct before any code is written. When the plan is ready, use ExitPlanMode to request approval.

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
