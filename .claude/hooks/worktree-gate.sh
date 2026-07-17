#!/usr/bin/env bash
# Worktree gate: nudge sessions toward worktrees when a git command mutates a
# repo's primary checkout. Non blocking; injects context, never denies.
set -uo pipefail
unset CDPATH

input=$(cat)
cmd=$(jq -r '.tool_input.command // empty' <<<"$input" 2>/dev/null)
[[ -z "$cmd" ]] && exit 0

# Only mutating git operations (working tree or branch state changers).
# Tolerates global options between git and the subcommand: single token
# flags (--no-pager, --git-dir=x) and separate argument forms of -c/-C,
# including quoted paths with spaces. Bare words are deliberately not
# allowed there so "git log | grep commit" cannot false positive.
if ! grep -qE "(^|[;&|[:space:]])git([[:space:]]+-[cC][[:space:]]+(\"[^\"]*\"|'[^']*'|[^[:space:]]+)|[[:space:]]+--?[^[:space:]]+)*[[:space:]]+(commit|checkout|switch|merge|rebase|cherry-pick|reset|restore|stash|revert|am)([[:space:]]|\$)" <<<"$cmd"; then
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

# Linked worktrees have git-dir != git-common-dir; a primary checkout matches
if [[ "$git_dir" == "$common_dir" ]]; then
  cat <<'JSON'
{"hookSpecificOutput":{"hookEventName":"PreToolUse","additionalContext":"Worktree gate: this git command mutates a repo primary checkout. Forni's convention is that session work happens in a dedicated worktree (EnterWorktree) so concurrent sessions never collide. If this is not a deliberate landing step (merging, pulling main, deleting a merged branch), move to a worktree before continuing."}}
JSON
fi
exit 0
