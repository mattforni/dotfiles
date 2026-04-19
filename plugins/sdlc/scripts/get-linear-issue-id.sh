#!/bin/bash
# Extract a Linear issue ID from the given input string
# Usage: ../../scripts/get-linear-issue-id.sh "feature/ATE-123-description"
# Outputs the issue ID (e.g., "ATE-123") or exits with code 1 if no match

INPUT="$1"
if [ -z "$INPUT" ]; then
  echo "Error: No input provided." >&2
  exit 1
fi

if [[ "$INPUT" =~ [a-zA-Z]+-[0-9]+ ]]; then
  ISSUE_ID=$(echo "${BASH_REMATCH[0]}" | tr '[:lower:]' '[:upper:]')
  echo "$ISSUE_ID"
else
  echo "Error: No Linear issue ID found in '$INPUT'." >&2
  exit 1
fi
