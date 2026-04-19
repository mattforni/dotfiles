#!/bin/bash
# Get the default branch name from the remote
# Usage: BASE_BRANCH=$(./scripts/get-base-branch.sh)

BASE=$(git symbolic-ref refs/remotes/origin/HEAD 2>/dev/null | sed 's@^refs/remotes/origin/@@')
if [ -z "$BASE" ]; then
  # Fallback to parsing 'git remote show origin'
  BASE=$(git remote show origin 2>/dev/null | sed -n 's/^  HEAD branch: //p')
fi

if [ -z "$BASE" ]; then
  echo "Error: Could not determine the default branch." >&2
  exit 1
fi

echo "$BASE"
