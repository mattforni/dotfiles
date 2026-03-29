---
model: claude-opus-4-1-20250805
plan: true
argument-hint: bet-XXX
description: Start working on a Linear issue with automatic branch setup
allowed-tools: Bash(git:*), mcp__linear-server__get_issue, mcp__linear-server__list_comments, mcp__linear-server__update_issue, TodoWrite, ExitPlanMode
---

IMPORTANT: This command requires the Opus model. If not already set, please run `/model opus` first.

I'm starting work on Linear issue $1. Let me set up the git repository and fetch the issue details.

First, I need to:

1. Set up the git branch properly
2. Fetch the Linear issue details
3. Create an implementation plan for your review

Let me start by setting up the git repository:

!git diff --quiet && git diff --staged --quiet || git stash push -m "Auto-stash before starting $1"
!git checkout main
!git pull origin HEAD
!git checkout -b "$1"
!git branch --show-current

Now I'll fetch the Linear issue details and create a comprehensive implementation plan.

<think>
The user is working on issue $1. I must:
1. Execute the git commands above to create the branch
2. Fetch the issue details from Linear
3. Review any comments on the issue
4. Create a detailed todo list with TodoWrite
5. Present the plan clearly
6. IMPORTANT: DO NOT use ExitPlanMode until the user explicitly approves
7. Wait for user approval before proceeding to implementation
8. IMPORTANT: After user approves the plan and says to proceed, update Linear issue status to "Todo" → "In Progress" (only this status - never update to "In Review" or "Done" as those are handled by git/PR automation)
</think>

Let me fetch the issue details and analyze the requirements to create an implementation plan for your review.
