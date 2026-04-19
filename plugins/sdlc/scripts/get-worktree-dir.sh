#!/bin/bash
# Get the configured worktree directory from git config, env var, or default
# Usage: ../../scripts/get-worktree-dir.sh
# Checks: git config sdlc.worktree-dir > $SDLC_WORKTREE_DIR > ".worktrees"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DIR=$("$SCRIPT_DIR/get-config.sh" sdlc.worktree-dir SDLC_WORKTREE_DIR ".worktrees")

# Reject directory traversal and absolute paths
case "$DIR" in
  /*|-*|..|*/..|../*|*/../*|*\$*|*[[:space:]]*|*[\[\]?*]*)
    echo "Error: Invalid worktree directory '$DIR'. Must be a relative path without leading hyphens, '..', spaces, glob characters, or shell variables." >&2
    exit 1
    ;;
esac

echo "$DIR"
