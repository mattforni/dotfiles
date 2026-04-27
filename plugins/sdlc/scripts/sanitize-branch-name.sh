#!/bin/bash
# Sanitize input into a valid git branch name
# Usage: ../../scripts/sanitize-branch-name.sh "ATE-123 My Feature Name"
# Outputs the sanitized branch name or exits with code 1 if invalid

INPUT="$1"
if [ -z "$INPUT" ]; then
  echo "Error: No input provided." >&2
  exit 1
fi

BRANCH_NAME=$(printf '%s' "$INPUT" | tr -s '[:space:]' '-' | tr -cd '[:alnum:]-./_')
if [ -z "$BRANCH_NAME" ]; then
  echo "Error: Could not create a valid branch name from '$INPUT'." >&2
  exit 1
fi

if ! git check-ref-format --branch "$BRANCH_NAME" >/dev/null 2>&1; then
  echo "Error: '$BRANCH_NAME' is not a valid git branch name." >&2
  exit 1
fi

echo "$BRANCH_NAME"
