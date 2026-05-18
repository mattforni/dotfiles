# sdlc

Software development lifecycle skills for planning, designing, implementing, reviewing, and completing work.

## Overview

This plugin provides a complete workflow for managing the software development lifecycle with Claude Code. Each skill maps to a phase of development, creating a consistent and repeatable process.

## Skills

| Skill | Phase | Description |
|-------|-------|-------------|
| `/sdlc:plan` | Plan | Refine requirements on a Linear ticket through Socratic dialogue |
| `/sdlc:design` | Design | Start work on an issue with branch setup and implementation design |
| `/sdlc:checkpoint` | Implement | Save work in progress (commit + push, no PR) |
| `/sdlc:review` | Review | Create PR and request code review |
| `/sdlc:iterate` | Review | Address PR feedback, request re-review |
| `/sdlc:complete` | Complete | Reset environment for next task |
| `/sdlc:land` | Land | Drive the back half autonomously: open PR, iterate with bot reviewer, merge, clean up |

## Workflow

The typical flow is:

```text
/sdlc:plan <issue-id>     # Refine requirements, build out ticket
    ↓
/sdlc:design <issue-id>   # Create branch, explore codebase, design approach
    ↓
[implement features]      # Write code
    ↓
/sdlc:checkpoint          # Save progress (optional, repeatable)
    ↓
/sdlc:land                # Open PR, iterate with bot, merge, clean up
```

`sdlc:land` is the default next step after implementation. It wraps `sdlc:review` → poll → (`sdlc:iterate`)* → merge → `sdlc:complete` and bails to the user on anything ambiguous (human review, hard CI failure, merge conflict, time budget exceeded). Drop down to the individual back-half skills (`/sdlc:review`, `/sdlc:iterate`, `/sdlc:complete`) only when you want manual control over a specific step.

## Installation

```bash
# Add the marketplace
claude plugin marketplace add mattforni/homebase

# Install the plugin
claude plugin install sdlc@skillset
```

> **Migrating from `mattforni/skillset`?** The `skillset` marketplace moved to `mattforni/homebase`. Remove the old source first: `claude plugin marketplace remove skillset`, then follow the steps above.

## Requirements

- **Git** for version control
- **GitHub CLI** (`gh`) for PR operations
- **Linear CLI** (`linear`) for Linear integration (optional, used by plan/design/complete). Install via `brew install schpet/tap/linear`.

## Skill Details

### /sdlc:plan

Refines requirements on a Linear ticket through Socratic dialogue:

1. Fetches issue details from Linear
2. Reads the current title and description
3. Asks probing questions one at a time to surface requirements, context, and options
4. Iteratively updates the Linear ticket body to build out the plan template (Overview, Requirements, Options, Recommendation, Open Questions)
5. Continues until open questions are resolved and the ticket is ready for design

The plan lives on the Linear ticket. No local files are created.

**Usage:** `/sdlc:plan ATE-123`

### /sdlc:design

Starts work on an issue:

1. Fetches issue details from Linear (if available)
2. Prompts user to handle uncommitted changes (stash, commit, or abort)
3. Sets up work environment based on branching strat:
   - **worktree**: uses Claude Code's native worktree tool to create an isolated worktree under `.claude/worktrees/<branch-name>/` with a feature branch (default)
   - **branch**: checks out a new feature branch in the current directory
4. Enters plan mode for implementation design
5. Posts a design summary comment on the Linear ticket after approval
6. Updates Linear status to "In Progress" after approval

**Usage:** `/sdlc:design ATE-123` or `/sdlc:design feature-name`

### /sdlc:checkpoint

Saves work in progress without creating a PR:

1. Verifies on feature branch
2. Stages all changes
3. Generates commit message (or uses provided message)
4. Pushes to remote

**Usage:** `/sdlc:checkpoint` or `/sdlc:checkpoint "WIP: auth refactor"`

### /sdlc:review

Creates a PR and requests review:

1. Detects and removes dead code
2. Creates commit with proper attribution
3. Pushes and creates PR
4. Requests code review (configurable command, defaults to `/gemini review`)

**Usage:** `/sdlc:review`

### /sdlc:iterate

Addresses PR review feedback:

1. Fetches all review comments
2. Addresses each issue
3. Commits and pushes
4. Requests re-review (configurable command)

**Usage:** `/sdlc:iterate` or `/sdlc:iterate 123`

### /sdlc:complete

Finishes work and resets environment:

1. Verifies PR is merged
2. Updates Linear issue to "Done"
3. Cleans up based on how work was set up:
   - **worktree**: tears down the Claude Code worktree (in session: via `ExitWorktree`; cross session: falls back to `git worktree remove`)
   - **branch**: checks out main, pulls latest, and deletes the branch
4. Prunes remote tracking branches

**Usage:** `/sdlc:complete`

### /sdlc:land

Drives the back half of SDLC autonomously, from "ready for review" through "merged and cleaned up":

1. **Identifies PR or opens one** (calls `/sdlc:review` if no PR exists for the current branch)
2. **Detects the bot reviewer** by walking the PR's reviews list (Gemini Code Assist or CodeRabbit)
3. **Polls** for state changes via Monitor: bot re-review on HEAD, CI failure, human review, or timeout
4. **Decides** per event:
   - Bot caught up with no actionable feedback → merges
   - Bot has actionable feedback → invokes `/sdlc:iterate`, loops back to polling
   - CI failure self-introduced → fixes in place and pushes
   - CI failure not self-introduced, human review, merge conflict, or timeout → bails to the user with state summary
5. **Merges** (squash, with branch delete) and invokes `/sdlc:complete` for cleanup

The agent (not GitHub) judges when feedback is addressed. `mergeStateStatus: CLEAN` only reflects branch protection and required checks, not bot opinion. Bot suggestions are not implemented blindly — when the agent disagrees, it replies on the thread with reasoning and merges through.

**Usage:** `/sdlc:land` or `/sdlc:land 248`

## Configuration

All skills use `disable-model-invocation: true`, meaning they are only triggered by explicit user invocation (not automatically by Claude).

### Branching Strat

Controls how `/sdlc:design` sets up your working environment and how `/sdlc:complete` cleans up.

| Strat | Behavior |
|-------|----------|
| `worktree` (default) | Uses Claude Code's native worktree tool to create an isolated worktree under `.claude/worktrees/<branch-name>/` per task. Multiple tasks run in parallel without stashing or switching. |
| `branch` | Traditional checkout. Switches the current directory to a new branch. One task at a time. |

**Git config (recommended):**

```bash
# Set branching strat (default: worktree)
git config sdlc.branch-strat worktree
```

**Environment variable:**

```bash
export SDLC_BRANCH_STRAT="worktree"
```

Worktree mode places worktrees under `.claude/worktrees/`, which is managed by Claude Code. No `.gitignore` changes are required.

### Review Command

The review and iterate skills use a configurable review command. Configure via:

**Git config (recommended):**

```bash
git config sdlc.review-command "/gemini review"
```

**Environment variable:**

```bash
export SDLC_REVIEW_COMMAND="/gemini review"
```

**Default:** `/gemini review`

### Linear Integration

The plan, design, and complete skills optionally integrate with Linear via the Linear CLI. If the CLI is installed and the issue ID looks like a Linear issue (e.g., `ATE-123`), the skills will:

- Fetch issue details for context
- Update issue status ("In Progress", "Done")
- Post design summary comments

Install via `brew install schpet/tap/linear` and authenticate with `linear auth login`.

Without the Linear CLI, the design skill works with any branch name. The plan skill requires it.
