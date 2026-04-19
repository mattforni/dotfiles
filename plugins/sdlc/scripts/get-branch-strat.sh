#!/bin/bash
# Get the configured branching strat from git config, env var, or default
# Usage: ../../scripts/get-branch-strat.sh
# Checks: git config sdlc.branch-strat > $SDLC_BRANCH_STRAT > "worktree"
# Valid values: "worktree", "branch"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
STRAT=$("$SCRIPT_DIR/get-config.sh" sdlc.branch-strat SDLC_BRANCH_STRAT worktree)

case "$STRAT" in
  worktree|branch)
    ;;
  *)
    echo "Error: Invalid branch strat '$STRAT'. Must be 'worktree' or 'branch'." >&2
    exit 1
    ;;
esac

echo "$STRAT"
