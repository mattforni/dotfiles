#!/bin/bash
# Get the configured review command from git config, env var, or default
# Usage: ../../scripts/get-review-command.sh
# Checks: git config sdlc.review-command > $SDLC_REVIEW_COMMAND > "/gemini review"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
exec "$SCRIPT_DIR/get-config.sh" sdlc.review-command SDLC_REVIEW_COMMAND "/gemini review"
