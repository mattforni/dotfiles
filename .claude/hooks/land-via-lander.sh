#!/bin/bash
# land-via-lander.sh
#
# PreToolUse(Bash, Monitor) hook. Landing a PR (bot-review polling, feedback
# triage, the merge itself) is the lander agent's job, dispatched in the
# background (GC "Agent Fan Out Defaults"). The recurring failure is the main
# session drifting into foreground landing instead: invoking /sdlc:land by hand
# and spinning up Monitor/Bash loops to watch a PR's checks or reviews. This
# hook surfaces the routing at the point of use, right as such a command is
# about to run, because the rule lived only in prose and got skipped when a
# skill procedure (sdlc:land's own foreground polling) out-competed it.
#
# Non-blocking by design, exactly like merge-gate.sh: it nudges, it does not
# deny. A hard block is unsafe here because the lander agent legitimately runs
# these same `gh` polling and merge commands; denying them would break the very
# flow this hook steers toward. The injected context carries an explicit escape
# for the lander (and any other background PR-driver) to ignore it and proceed.
# In practice the auto-mode classifier reads the injected context and enforces
# it for the main session.
#
# Input:  hook JSON on stdin with .tool_input.command (Bash command or Monitor
#         script; the ws-source Monitor variant has no command and is ignored).
# Output: JSON on stdout with hookSpecificOutput.additionalContext when a
#         PR-polling or merge command is detected. Empty output otherwise.

set -euo pipefail

HOOK_INPUT=$(cat)

CMD=$(printf '%s' "$HOOK_INPUT" | jq -r '.tool_input.command // empty' 2>/dev/null || true)

if [[ -z "$CMD" ]]; then
  exit 0
fi

# Monitor scripts (and multiline Bash) arrive as one string with embedded
# newlines, but grep -E is line oriented, so a gh invocation split across
# physical lines would slip the guard. Flatten newlines to spaces first; the
# pipe/semicolon/ampersand boundaries the signatures exclude are preserved.
CMD=$(printf '%s' "$CMD" | tr '\n' ' ')

# PR-landing / PR-polling command signatures (scope: polling + merge, per the
# 2026-07-26 codification decision):
#   - gh pr merge                          (the merge itself)
#   - gh pr checks                         (CI status polling)
#   - gh pr view ... mergeStateStatus / statusCheckRollup / reviewDecision
#   - gh api .../commits/<sha>/check-runs | check-suites | statuses
#   - gh api .../pulls/<n>/reviews
LAND_RE='gh[[:space:]]+pr[[:space:]]+merge'
LAND_RE+='|gh[[:space:]]+pr[[:space:]]+checks'
LAND_RE+='|gh[[:space:]]+pr[[:space:]]+view[^|;&]*(mergeStateStatus|statusCheckRollup|reviewDecision)'
LAND_RE+='|gh[[:space:]]+api[^|;&]*/(check-runs|check-suites|statuses)'
LAND_RE+='|gh[[:space:]]+api[^|;&]*/pulls/[0-9]+/reviews'

if printf '%s' "$CMD" | grep -qE "$LAND_RE"; then
  jq -n '{
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      additionalContext: "Land-via-lander (fan-out default): polling or merging a PR from the MAIN session is the anti-pattern this hook guards. Driving a PR from open to merged (bot-review polling, feedback triage, the merge) is the lander agent'"'"'s job. Dispatch lander in the background instead of watching the PR here or running /sdlc:land by hand. If you ARE the lander agent (or another background PR-driver already dispatched for this), this does not apply: proceed."
    }
  }'
fi

exit 0
