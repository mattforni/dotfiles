#!/bin/bash
# merge-gate.sh
#
# PreToolUse(Bash) hook. When a `gh pr merge` is about to run, inject a
# review/CI checklist so the bot-review gate is not silently bypassed by a
# manual merge outside /sdlc:land.
#
# Non-blocking by design: it nudges, it does not deny. /sdlc:land legitimately
# runs `gh pr merge` after polling for the bot review on HEAD, so a hard block
# would break the very flow we want people to use. The reminder fires at the
# point of use (right before the merge), which is the enforcement the
# GROW-316 incident was missing: review-before-merge was encoded in prose but
# nothing surfaced it at merge time.
#
# Input: hook JSON on stdin with .tool_input.command.
# Output: JSON on stdout with hookSpecificOutput.additionalContext when a
#         `gh pr merge` is detected. Empty output otherwise.

set -euo pipefail

HOOK_INPUT=$(cat)

CMD=$(printf '%s' "$HOOK_INPUT" | jq -r '.tool_input.command // empty' 2>/dev/null || true)

if [[ -z "$CMD" ]]; then
  exit 0
fi

if printf '%s' "$CMD" | grep -qE 'gh[[:space:]]+pr[[:space:]]+merge'; then
  jq -n '{
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      additionalContext: "Merge gate (GROW-316): before merging, confirm the review bot (gemini-code-assist / CodeRabbit) has reviewed the CURRENT head SHA and that CI is green. Re-review is NOT automatic on later pushes — request it with a `/gemini review` PR comment and wait for the fresh review. Green CI alone is not sufficient. Prefer driving merges through /sdlc:land, which polls for the bot review on HEAD via Monitor and bails to you on human review or CI failure."
    }
  }'
fi

exit 0
