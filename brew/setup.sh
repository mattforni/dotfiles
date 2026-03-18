#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BOLD='\033[1m'
NC='\033[0m'

info()  { printf "${GREEN}[+]${NC} %s\n" "$1"; }
warn()  { printf "${YELLOW}[!]${NC} %s\n" "$1"; }
error() { printf "${RED}[x]${NC} %s\n" "$1" >&2; }
header() { printf "\n${BOLD}=== %s ===${NC}\n\n" "$1"; }

# Track what was installed for summary
SUMMARY=()

###############################################################################
# Prerequisites
###############################################################################
header "Checking prerequisites"

# Homebrew
if ! command -v brew &>/dev/null; then
  error "Homebrew is not installed. Install it from https://brew.sh"
  exit 1
fi
info "Homebrew found"

# Rosetta 2 on Apple Silicon
if [[ "$(uname -m)" == "arm64" ]]; then
  if ! /usr/bin/pgrep -q oahd; then
    warn "Installing Rosetta 2..."
    softwareupdate --install-rosetta --agree-to-license
    SUMMARY+=("Rosetta 2 installed")
  fi
  info "Rosetta 2 ready"
fi

# Xcode CLI tools
if ! xcode-select -p &>/dev/null; then
  warn "Installing Xcode Command Line Tools..."
  xcode-select --install
  echo "Press Enter after Xcode CLI tools installation completes."
  read -r
fi
info "Xcode CLI tools ready"

###############################################################################
# Machine name
###############################################################################
header "Machine name"

CURRENT_NAME=$(scutil --get ComputerName 2>/dev/null || echo "unknown")
info "Current machine name: ${BOLD}${CURRENT_NAME}${NC}"
read -rp "${BOLD}Change it? [y/N]${NC} " RENAME_CHOICE

if [[ "$RENAME_CHOICE" =~ ^[Yy]$ ]]; then
  read -rp "${BOLD}New machine name:${NC} " NEW_NAME
  if [[ -n "$NEW_NAME" ]]; then
    sudo scutil --set ComputerName "$NEW_NAME"
    sudo scutil --set LocalHostName "$NEW_NAME"
    info "Machine name set to ${BOLD}${NEW_NAME}${NC}"
    SUMMARY+=("Machine name set to $NEW_NAME")
  else
    warn "No name provided, skipping"
  fi
fi

###############################################################################
# Core tooling
###############################################################################
header "Installing core tooling"

brew bundle --file="$SCRIPT_DIR/Brewfile"
SUMMARY+=("Core tooling installed")

###############################################################################
# Post core setup (gh auth, SSH key)
###############################################################################
header "Post core setup"

# GitHub CLI authentication
if command -v gh &>/dev/null; then
  if ! gh auth status &>/dev/null 2>&1; then
    read -rp "  ${BOLD}Authenticate GitHub CLI (gh auth login)? [y/N]${NC} " GH_AUTH
    if [[ "$GH_AUTH" =~ ^[Yy]$ ]]; then
      gh auth login
      SUMMARY+=("GitHub CLI authenticated")
    fi
  else
    info "GitHub CLI already authenticated"
  fi
fi

# SSH key generation
if [[ ! -f "$HOME/.ssh/id_ed25519" ]]; then
  read -rp "  ${BOLD}Generate ed25519 SSH key? [y/N]${NC} " SSH_CHOICE
  if [[ "$SSH_CHOICE" =~ ^[Yy]$ ]]; then
    read -rp "  ${BOLD}Email for SSH key:${NC} " SSH_EMAIL
    if [[ -n "$SSH_EMAIL" ]]; then
      ssh-keygen -t ed25519 -C "$SSH_EMAIL"
      eval "$(ssh-agent -s)"
      ssh-add "$HOME/.ssh/id_ed25519"
      warn "Remember to add your public key to GitHub: https://github.com/settings/keys"
      echo ""
      cat "$HOME/.ssh/id_ed25519.pub"
      echo ""
      SUMMARY+=("SSH key generated (add to GitHub!)")
    fi
  fi
else
  info "SSH key already exists"
fi

###############################################################################
# Optional packages (prompted per item)
###############################################################################
header "Optional packages"

TEMP_BREWFILE=$(mktemp)
trap "rm -f '$TEMP_BREWFILE'" EXIT

prompt_install() {
  local label="$1" brew_line="$2"
  read -rp "  ${BOLD}Install ${label}? [y/N]${NC} " choice
  if [[ "$choice" =~ ^[Yy]$ ]]; then
    [[ -n "$brew_line" ]] && echo "$brew_line" >> "$TEMP_BREWFILE"
    return 0
  fi
  return 1
}

# IDEs
info "IDEs:"
prompt_install "Cursor (app)" 'cask "cursor"' || true
prompt_install "Cursor CLI" 'brew "cursor-cli"' || true
prompt_install "VS Code" 'cask "visual-studio-code"' || true

# CLI Agents
INSTALL_CLAUDE=false
INSTALL_COPILOT=false
INSTALL_GEMINI=false
echo ""
info "CLI Agents:"
prompt_install "Claude Code" "" && INSTALL_CLAUDE=true || true
prompt_install "Copilot CLI" "" && INSTALL_COPILOT=true || true
prompt_install "Gemini CLI" "" && INSTALL_GEMINI=true || true

# Browsers
echo ""
info "Browsers:"
prompt_install "Chrome" 'cask "google-chrome"' || true
prompt_install "Firefox" 'cask "firefox"' || true
prompt_install "Brave" 'cask "brave-browser"' || true

# Install selected brew packages
if [[ -s "$TEMP_BREWFILE" ]]; then
  echo ""
  brew bundle --file="$TEMP_BREWFILE"
  SUMMARY+=("Selected optional packages installed")
fi

# Install selected CLI agents (npm/gh based, not brew)
if [[ "$INSTALL_CLAUDE" == true ]]; then
  if ! command -v claude &>/dev/null; then
    info "Installing Claude Code..."
    npm install -g @anthropic-ai/claude-code
    SUMMARY+=("Claude Code installed")
  else
    info "Claude Code already installed"
  fi
fi

if [[ "$INSTALL_COPILOT" == true ]]; then
  if ! gh extension list 2>/dev/null | grep -q "gh-copilot"; then
    info "Installing GitHub Copilot CLI..."
    gh extension install github/gh-copilot
    SUMMARY+=("GitHub Copilot CLI installed")
  else
    info "GitHub Copilot CLI already installed"
  fi
fi

if [[ "$INSTALL_GEMINI" == true ]]; then
  if ! command -v gemini &>/dev/null; then
    info "Installing Gemini CLI..."
    npm install -g @google/gemini-cli
    SUMMARY+=("Gemini CLI installed")
  else
    info "Gemini CLI already installed"
  fi
fi

###############################################################################
# Zero Home tooling
###############################################################################
echo ""
read -rp "${BOLD}Install Zero Home tooling? [y/N]${NC} " ZERO_CHOICE

if [[ "$ZERO_CHOICE" =~ ^[Yy]$ ]]; then
  header "Installing Zero Home tooling"

  brew bundle --file="$SCRIPT_DIR/Brewfile.zero"
  SUMMARY+=("Zero Home tooling installed")

  #############################################################################
  # Post brew automation (Zero Home, idempotent)
  #############################################################################
  header "Running Zero Home post brew automation"

  # nvm + Node
  export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
  NVM_SH="$(brew --prefix)/opt/nvm/nvm.sh"
  if [[ -f "$NVM_SH" ]]; then
    # shellcheck source=/dev/null
    source "$NVM_SH"
    if ! nvm ls 24 &>/dev/null; then
      info "Installing Node 24 via nvm..."
      nvm install 24
    fi
    nvm alias default 24
    info "Node $(node --version) set as default"
    SUMMARY+=("Node 24 configured via nvm")
  else
    warn "nvm.sh not found, skipping Node setup"
  fi

  # Global npm packages
  info "Installing global npm packages..."
  npm install -g pnpm corepack
  SUMMARY+=("pnpm and corepack installed globally")

  # Playwright
  info "Checking Playwright..."
  if ! npx playwright --version 2>/dev/null; then
    info "Installing Playwright globally and chromium (this may take a moment)..."
    npm install -g playwright
    npx playwright install --with-deps chromium
    SUMMARY+=("Playwright chromium installed")
  else
    info "Playwright already available"
  fi

  # tfenv
  if command -v tfenv &>/dev/null; then
    if ! tfenv list 2>/dev/null | grep -Fxq "1.13.3"; then
      info "Installing Terraform 1.13.3..."
      tfenv install 1.13.3
    fi
    tfenv use 1.13.3
    info "Terraform $(tfenv version-name) active"
    SUMMARY+=("Terraform 1.13.3 configured")
  fi

  # Storyblok CLI
  if ! command -v storyblok &>/dev/null; then
    info "Installing Storyblok CLI..."
    npm install -g storyblok
    SUMMARY+=("Storyblok CLI installed")
  else
    info "Storyblok CLI already installed"
  fi

  # Storyblok login
  read -rp "  ${BOLD}Log in to Storyblok CLI? [y/N]${NC} " STORYBLOK_LOGIN
  if [[ "$STORYBLOK_LOGIN" =~ ^[Yy]$ ]]; then
    storyblok login
    SUMMARY+=("Storyblok CLI authenticated")
  fi

  # gcloud
  if command -v gcloud &>/dev/null; then
    info "Updating gcloud components..."
    gcloud components update --quiet
    SUMMARY+=("gcloud components updated")

    read -rp "  ${BOLD}Set up Firestore emulator? [y/N]${NC} " FIRESTORE_CHOICE
    if [[ "$FIRESTORE_CHOICE" =~ ^[Yy]$ ]]; then
      gcloud components install cloud-firestore-emulator --quiet
      SUMMARY+=("Firestore emulator installed")
    fi
  fi
fi

###############################################################################
# Personal additions
###############################################################################
PERSONAL_BREWFILE="$SCRIPT_DIR/Brewfile.personal"
if [[ -f "$PERSONAL_BREWFILE" ]]; then
  header "Installing personal additions"
  brew bundle --file="$PERSONAL_BREWFILE"
  SUMMARY+=("Personal additions installed")
fi

###############################################################################
# Summary
###############################################################################
header "Setup complete"
for item in "${SUMMARY[@]}"; do
  info "$item"
done
echo ""
