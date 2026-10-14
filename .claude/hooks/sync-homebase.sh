#!/usr/bin/env bash
# Sync homebase: at session start, bring the primary homebase checkout up to
# origin/main and reconcile $HOME when its commit changed. Link mode files are
# live the moment the checkout moves; copy and merge mode files (settings.json,
# so every hook and permission rule) only reach $HOME through the reconciler,
# which until this hook ran only inside a hand run of mise. SessionStart with
# matcher "startup"; one line of stdout only when something changed. Fails
# OPEN: offline, dirty, off main, locked, or any error means exit 0 in silence.
set -uo pipefail
unset CDPATH
export GIT_TERMINAL_PROMPT=0

HB="$HOME/Eudaimonia/Craft/Development/personal/homebase"
STAMP="$HOME/.claude/.homebase-reconciled"
LOG="$HOME/.claude/.homebase-reconciled.log"
LOCK="$STAMP.lock"

[[ -d "$HB/.git" ]] || exit 0
mkdir "$LOCK" 2>/dev/null || exit 0
trap 'rmdir "$LOCK" 2>/dev/null' EXIT

# Fast forward only when the checkout is on main with no tracked changes;
# untracked paths (the worktrees directory) do not count. A fetch that hangs is
# cut by the hook timeout, and a failed fetch or merge leaves HEAD where it was.
branch=$(git -C "$HB" rev-parse --abbrev-ref HEAD 2>/dev/null)
if [[ "$branch" == "main" ]] && [[ -z "$(git -C "$HB" status --porcelain --untracked-files=no 2>/dev/null)" ]]; then
  git -C "$HB" fetch --quiet origin main 2>/dev/null \
    && git -C "$HB" merge --ff-only --quiet origin/main >/dev/null 2>&1
fi

head=$(git -C "$HB" rev-parse HEAD 2>/dev/null) || exit 0
last=$(cat "$STAMP" 2>/dev/null || true)
[[ "$head" == "$last" ]] && exit 0

if "$HB/setup.sh" --reconcile >"$LOG" 2>&1; then
  printf '%s\n' "$head" >"$STAMP"
  echo "Homebase reconciled to ${head:0:8} (copy and merge mode files are current; log: $LOG)."
else
  echo "Homebase reconcile failed at ${head:0:8}; read $LOG. Hooks and settings merged since the last reconcile may not be live."
fi
exit 0
