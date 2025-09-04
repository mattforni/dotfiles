---
allowed-tools:
  Bash(git add:*),
  Bash(git pull:*),
  Bash(git push:*),
  Bash(git status:*),
  Bash(git stash:*)
argument-hint: [feature-name]
description: Create a new feature branch from latest main and define scope
---

**Usage:** `/checkpoint [optional-message]`

**Description:** Comprehensive checkpoint that analyzes all changes, updates documentation, commits everything, and pushes to remote.

**What it does:**
1. Analyzes all git changes (staged, unstaged, untracked)
2. Updates ENG documentation with relevant technical changes
3. Updates CLAUDE.md with new patterns, components, or guidelines
4. Stages all changes in the working directory
5. Creates an informative commit message based on the changes
6. Commits everything with proper attribution
7. Pushes to the remote branch (if on a remote-tracking branch)

**Examples:**
- `/checkpoint` - Auto-generates commit message from changes
- `/checkpoint "Add LighterPack import feature"` - Uses custom message prefix

**Safety features:**
- Validates we're on a feature/fix branch (not main)
- Shows a summary of changes before committing
- Confirms remote push operation
- Handles merge conflicts gracefully

**Requirements:**
- Must be on a git branch
- Must have remote tracking set up
- Changes must be present to analyze