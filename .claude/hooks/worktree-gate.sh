#!/usr/bin/env bash
# Worktree gate: BLOCK mutating git on a repo's primary checkout, forcing all
# session work into a dedicated worktree so concurrent sessions never collide.
# Denies via the PreToolUse permissionDecision. Two deliberate carve-outs:
#   1. `merge` is allowed on primary (landing a branch into main is a landing step).
#   2. Prefix a command with WT_GATE_BYPASS=1 to override for genuine primary work
#      (a landing step, or committing symlinked homebase config like GC itself).
# Fails OPEN: any resolution error exits 0, never worse than an ungated command.
set -uo pipefail
unset CDPATH

input=$(cat)
cmd=$(jq -r '.tool_input.command // empty' <<<"$input" 2>/dev/null)
[[ -z "$cmd" ]] && exit 0

# Explicit escape hatch. Prefix the command with WT_GATE_BYPASS=1 to allow a
# genuine primary-checkout mutation (landing step, symlinked-config commit).
grep -qE '(^|[[:space:]])WT_GATE_BYPASS=1([[:space:]]|$)' <<<"$cmd" && exit 0

# Only mutating git operations (working tree or branch state changers).
# `merge` is intentionally EXCLUDED from the blocked set: it is the landing step
# that runs on the primary checkout. Tolerates global options between git and
# the subcommand. Read only stash invocations (list/show) are stripped first.
filtered_cmd=$(sed -E "s/(^|[;&|[:space:]])git([[:space:]]+-[cC][[:space:]]+(\"[^\"]*\"|'[^']*'|[^[:space:]]+)|[[:space:]]+--?[^[:space:]]+)*[[:space:]]+stash[[:space:]]+(list|show)([^;&|]*)/ /g" <<<"$cmd")
if ! grep -qE "(^|[;&|[:space:]])git([[:space:]]+-[cC][[:space:]]+(\"[^\"]*\"|'[^']*'|[^[:space:]]+)|[[:space:]]+--?[^[:space:]]+)*[[:space:]]+(commit|checkout|switch|rebase|cherry-pick|reset|restore|stash|revert|am)([[:space:]]|\$)" <<<"$filtered_cmd"; then
  exit 0
fi

# Resolve the repo the command targets: honor git -C <path> (quoted or not),
# else the session cwd
dir=$(sed -nE "s/.*git[[:space:]]+-C[[:space:]]+(\"([^\"]+)\"|'([^']+)'|([^[:space:]]+)).*/\\2\\3\\4/p" <<<"$cmd" | head -1)
dir=${dir/#\~/$HOME}
if [[ -z "$dir" ]]; then
  dir=$(jq -r '.cwd // empty' <<<"$input" 2>/dev/null)
fi
[[ -z "$dir" ]] && dir=$PWD

git_dir=$(git -C "$dir" rev-parse --absolute-git-dir 2>/dev/null) || exit 0
common_dir=$(git -C "$dir" rev-parse --git-common-dir 2>/dev/null) || exit 0
common_dir=$(cd "$dir" 2>/dev/null && cd "$common_dir" 2>/dev/null && pwd) || common_dir="$common_dir"

# Linked worktrees have git-dir != git-common-dir; a primary checkout matches.
if [[ "$git_dir" == "$common_dir" ]]; then
  cat <<'JSON'
{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"Worktree gate: this mutating git command targets a repo PRIMARY checkout. Per GC, session work must run in a dedicated worktree (EnterWorktree) so concurrent sessions never collide. Cut a worktree and rerun there. For a genuine landing step or a symlinked-config commit that must run on primary, prefix the command with WT_GATE_BYPASS=1."}}
JSON
  exit 0
fi
exit 0
