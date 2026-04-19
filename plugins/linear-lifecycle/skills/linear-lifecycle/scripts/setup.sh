#!/bin/bash
# Linear Lifecycle - Simple Setup Script
# Installs the Linear CLI and authenticates with Linear

set -e

echo "Linear Lifecycle Setup"
echo ""

# Step 1: Check/Install Linear CLI
echo "Step 1: Checking Dependencies..."
if ! command -v linear &> /dev/null; then
  command -v brew > /dev/null 2>&1 || { echo "  Error: Homebrew is required. Install it from https://brew.sh/" >&2; exit 1; }
  echo "  Linear CLI not found. Installing via Homebrew..."
  brew install schpet/tap/linear
  echo "  Done: Linear CLI installed"
else
  echo "  Done: Linear CLI already installed"
fi

echo ""

# Step 2: Authenticate
echo "Step 2: Authenticating with Linear..."
echo ""
echo "  You will need a Linear API key."
echo "  Get one from: Linear Settings > Security & Access > Personal API keys"
echo ""

linear auth login

echo ""

# Step 3: Verify connection
echo "Step 3: Verifying connection..."
if TEST_RESPONSE=$(linear issue list 2>&1); then
  echo "  Done: Successfully connected to Linear API"

  echo ""
  echo "Setup complete!"
  echo ""
  echo "Next steps:"
  echo "  List issues:  linear issue list"
  echo "  View issue:   linear issue view BET-123"
  echo "  Or just ask Claude to manage Linear issues!"
else
  echo "  Warning: Failed to connect to Linear API"
  echo "     Error: $TEST_RESPONSE"
  echo ""
  echo "     Please verify your token is correct."
  echo ""
  echo "To re-authenticate, run: linear auth login"
  exit 1
fi
