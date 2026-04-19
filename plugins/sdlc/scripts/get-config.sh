#!/bin/bash
# Generic config value lookup: git config > env var > default
# Usage: ../../scripts/get-config.sh <git-config-key> <env-var-name> <default-value>
# Example: ../../scripts/get-config.sh sdlc.branch-strat SDLC_BRANCH_STRAT worktree

if [ $# -lt 3 ]; then
  echo "Usage: get-config.sh <git-config-key> <env-var-name> <default-value>" >&2
  exit 1
fi

GIT_KEY="$1"
ENV_VAR="$2"
DEFAULT="$3"

VALUE=$(git config --get "$GIT_KEY" 2>/dev/null)
if [ -z "$VALUE" ]; then
  env_val=${!ENV_VAR}
  VALUE=${env_val:-"$DEFAULT"}
fi

echo "$VALUE"
