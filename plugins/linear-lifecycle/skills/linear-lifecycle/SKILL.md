---
name: linear-lifecycle
description: Use when working with Linear issues, issue tracking, or project management. Uses the Linear CLI for zero-context issue management as a CLI alternative to MCP.
---

# Linear Lifecycle Management with Linear CLI

## Table of Contents

- [Overview](#overview)
- [Setup](#setup)
- [When to Use](#when-to-use)
- [Token Check](#token-check)
- [Quick Reference](#quick-reference)
- [Reference Files](#reference-files)

## Overview

**Core principle:** Use the Linear CLI for all Linear operations instead of loading the 20k token Linear MCP. CLI returns structured output for parsing without context overhead.

**Tool:** [linear-cli](https://github.com/schpet/linear-cli) - Linear CLI with ~1000 token footprint vs 13k+ for MCP. Install via `brew install schpet/tap/linear`.

**Context savings:** 100% at session start. No MCP loaded, just bash commands. See [advanced.md](reference/advanced.md) for the full comparison table.

## Setup

**One-time install:** Use `/linear-setup` to install the Linear CLI and authenticate (required for this skill to work).

**Authentication:** Run `linear auth login` after creating an API key at linear.app/settings/account/security. See [troubleshooting.md](reference/troubleshooting.md) for auth issues.

**Get your token:** Linear Settings > Security & Access > Personal API keys

## When to Use

**Use this skill when:**

- Starting work on a Linear issue (need issue details)
- Creating new issues from bugs or features discovered
- Updating issue status during development
- Adding comments or progress updates
- Searching for issues across teams/projects

**Don't use when:**

- Issue tracking not needed for current work
- Working on non-Linear projects

## Token Check

**IMPORTANT: Always verify auth on first Linear operation in a skill invocation:**

```bash
linear issue list
```

If the command fails with an auth error, prompt the user to run `linear auth login` and provide their API token.

## Quick Reference

| Operation | Command Pattern |
|-----------|----------------|
| List recent issues | `linear issue list` |
| Get issue details | `linear issue view ABC-123` |
| Create issue | `linear issue create -t "Title" -d "Desc" --team TEAM_KEY` |
| Update status | `linear issue update ABC-123 -s "In Progress"` |
| Add comment | `linear issue comment add ABC-123 "Comment text"` |
| List teams | `linear team list` |

**Key rules for issue creation:**

- Use `--team TEAM_KEY` (e.g. BET, ENG)
- Use `-t` for title, `-d` for description
- Use `-s` for state changes on update

## Reference Files

Detailed walkthroughs, troubleshooting, and advanced usage are in reference files that load on demand:

- [Command Examples](reference/examples.md) - Step-by-step walkthroughs for each operation
- [Troubleshooting](reference/troubleshooting.md) - Common mistakes, error handling patterns, and auth setup issues
- [Advanced Usage](reference/advanced.md) - Multi-team operations and context budget comparison table
