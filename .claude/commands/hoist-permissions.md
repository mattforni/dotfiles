---
allowed-tools: Read, Edit
description: Hoist project permissions to user level settings
---

# /hoist-permissions

Move permissions from project-level `.claude/settings.local.json` to user-level `~/.claude/settings.json`.

## Steps

1. Read `.claude/settings.local.json` from current working directory
2. Read `~/.claude/settings.json` (user-level settings)
3. Extract `permissions.allow` arrays from both files
4. Merge the arrays, removing any duplicates
5. Sort the merged array alphabetically
6. Update `~/.claude/settings.json` with the merged permissions
7. Update `.claude/settings.local.json` to set `permissions.allow` to an empty array (preserve other settings like `enabledMcpjsonServers`)
8. Report what was hoisted: list each permission that was moved and the final count in user settings

## Important

- Do NOT delete permissions from user-level settings, only add to them
- Preserve all other settings in both files (only modify `permissions.allow`)
- If project has no permissions to hoist, report that and exit
- Sort is case-sensitive alphabetical
