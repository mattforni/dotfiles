#!/bin/bash
# wrap-reminder.sh
#
# UserPromptSubmit hook. When Forni signals that the session is ending,
# inject a brief reminder for Claude to run /assist:wrap before exit.
#
# Wrap is the bookend to /assist:mise. It catches loose ends so nothing
# leaves the session "in your head."
#
# Input: hook JSON on stdin with .prompt set to the user's message.
# Output: JSON on stdout with hookSpecificOutput.additionalContext when
#         a signoff signal is detected. Empty output otherwise.

set -euo pipefail

# Read hook payload from stdin.
HOOK_INPUT=$(cat)

# Extract the user's prompt. Fall back to empty string if jq missing
# or the field is absent.
USER_PROMPT=$(printf '%s' "$HOOK_INPUT" | jq -r '.prompt // empty' 2>/dev/null || true)

if [[ -z "$USER_PROMPT" ]]; then
  exit 0
fi

# Signoff patterns. Matches case-insensitive against the user's prompt.
# Tuned to fire on genuine end-of-session signals, not casual mentions
# of the word "exit" or "done" mid-task.
SIGNOFF_REGEX='(^|[[:space:]])(/?exit\b|wrap (it |this )?(up|session)|wrapping up|signing off|done for (the )?(day|night)|good for (the )?(day|night)|i.m (out|done) (for|here)|that.?s a wrap|end of (the )?session|call it (a day|here))'

if printf '%s' "$USER_PROMPT" | grep -qiE "$SIGNOFF_REGEX"; then
  jq -n '{
    hookSpecificOutput: {
      hookEventName: "UserPromptSubmit",
      additionalContext: "The user appears to be winding down the session. Run /assist:wrap now (do not merely propose it). The skill surfaces loose ends (git/PR state, external commitments, codify candidates), triages what is pending, and decides on its own gates whether the session is ready to hand off. Wrap is the bookend to /assist:mise."
    }
  }'
fi

exit 0
