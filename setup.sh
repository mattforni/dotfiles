#!/usr/bin/env bash
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Parse flags
FORCE=false
while [[ $# -gt 0 ]]; do
  case "$1" in
    -f|--force) FORCE=true; shift ;;
    *) echo "Usage: ./setup.sh [-f|--force]"; exit 1 ;;
  esac
done

# Colors & helpers
GREEN=$'\033[0;32m'
YELLOW=$'\033[1;33m'
RED=$'\033[0;31m'
BOLD=$'\033[1m'
NC=$'\033[0m'

info()   { printf "${GREEN}[+]${NC} %s\n" "$1"; }
warn()   { printf "${YELLOW}[!]${NC} %s\n" "$1"; }
error()  { printf "${RED}[x]${NC} %s\n" "$1" >&2; }
header() { printf "\n${BOLD}=== %s ===${NC}\n\n" "$1"; }

SUMMARY=()

###############################################################################
# 1. Prerequisites
###############################################################################
header "Prerequisites"

# Homebrew
if ! command -v brew &>/dev/null; then
  warn "Installing Homebrew..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  SUMMARY+=("Homebrew installed")
fi
info "Homebrew ready"

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
# 2. Brew bundle
###############################################################################
header "Brew packages"

if [[ "$FORCE" == true ]]; then
  brew bundle --file="$DIR/brew/Brewfile"
  SUMMARY+=("Brew packages installed (forced)")
else
  if brew bundle check --file="$DIR/brew/Brewfile" &>/dev/null; then
    info "All brew packages already installed"
  else
    brew bundle --file="$DIR/brew/Brewfile"
    SUMMARY+=("Brew packages installed")
  fi
fi

###############################################################################
# 3. Node setup via fnm
###############################################################################
header "Node setup"

if command -v fnm &>/dev/null; then
  eval "$(fnm env)"
  LTS_INSTALLED=$(fnm ls 2>/dev/null | grep -c "lts" || true)
  if [[ "$LTS_INSTALLED" -eq 0 ]] || [[ "$FORCE" == true ]]; then
    info "Installing Node LTS via fnm..."
    fnm install --lts
    fnm default lts-latest
    SUMMARY+=("Node LTS installed via fnm")
  fi
  info "Node $(node --version 2>/dev/null || echo 'pending shell restart') active"
else
  warn "fnm not found, skipping Node setup"
fi

###############################################################################
# 4. Global npm packages
###############################################################################
header "npm globals"

NPM_GLOBALS=(
  "@anthropic-ai/claude-code"
  "markdownlint-cli"
  "typescript"
  "vercel"
  "yarn"
)

for pkg in "${NPM_GLOBALS[@]}"; do
  bin_name=${pkg##*/}
  bin_name=${bin_name%%@*}
  if command -v "$bin_name" &>/dev/null && [[ "$FORCE" != true ]]; then
    info "$pkg already installed"
  else
    info "Installing $pkg..."
    npm install -g "$pkg"
    SUMMARY+=("$pkg installed")
  fi
done

###############################################################################
# 5. Dotfiles
###############################################################################
header "Dotfiles"

EXCLUDED=(setup.sh README.md .git .gitignore brew)
rsync_opts=('-a')
for item in "${EXCLUDED[@]}"; do
  rsync_opts+=(--exclude="$item")
done
rsync "${rsync_opts[@]}" "$DIR/" "$HOME/"
info "Dotfiles synced to \$HOME"
SUMMARY+=("Dotfiles deployed")

###############################################################################
# 6. IDE extensions
###############################################################################
header "IDE extensions"

EXTENSIONS_FILE="$DIR/.vscode/extensions.txt"
if [[ -f "$EXTENSIONS_FILE" ]]; then
  for CLI in code cursor; do
    if command -v "$CLI" &>/dev/null; then
      INSTALLED=$("$CLI" --list-extensions 2>/dev/null | tr '[:upper:]' '[:lower:]')
      declare -A exts_to_install
      while IFS= read -r ext || [[ -n "$ext" ]]; do
        [[ -z "$ext" ]] && continue
        exts_to_install["${ext,,}"]="$ext"
      done < "$EXTENSIONS_FILE"
      total_exts=${#exts_to_install[@]}

      while IFS= read -r installed_ext; do
        unset 'exts_to_install[$installed_ext]'
      done <<< "$INSTALLED"

      MISSING=("${exts_to_install[@]}")

      if [[ ${#MISSING[@]} -eq 0 ]]; then
        info "$CLI: all $total_exts extensions installed"
      else
        for ext in "${MISSING[@]}"; do
          "$CLI" --install-extension "$ext" --force 2>/dev/null
        done
        info "$CLI: ${#MISSING[@]} extensions installed"
        SUMMARY+=("$CLI: ${#MISSING[@]} extensions installed")
      fi
    else
      warn "$CLI not found, skipping"
    fi
  done
fi

###############################################################################
# 7. Claude Code plugins
###############################################################################
header "Claude Code plugins"

SOURCES_FILE="$HOME/.claude/plugins/marketplace-sources.txt"
SETTINGS_FILE="$HOME/.claude/settings.json"
if command -v claude &>/dev/null && [[ -f "$SETTINGS_FILE" ]] && [[ -f "$SOURCES_FILE" ]]; then
  [[ -f "$HOME/.claude/plugins/known_marketplaces.json" ]] || echo '{}' > "$HOME/.claude/plugins/known_marketplaces.json"

  while IFS= read -r source || [[ -n "$source" ]]; do
    [[ -z "$source" ]] && continue
    claude plugin marketplace add "$source" 2>/dev/null
  done < "$SOURCES_FILE"

  INSTALLED_PLUGINS=$(claude plugin list 2>/dev/null)
  declare -A installed_plugin_set
  while IFS= read -r p; do [[ -n "$p" ]] && installed_plugin_set["$p"]=1; done <<< "$INSTALLED_PLUGINS"

  python3 -c "
import json
with open('$SETTINGS_FILE') as f:
    d = json.load(f)
for k, v in d.get('enabledPlugins', {}).items():
    if v:
        print(k)
" | while read -r plugin; do
    PLUGIN_NAME=${plugin%@*}
    if [[ -v installed_plugin_set["$PLUGIN_NAME"] ]] && [[ "$FORCE" != true ]]; then
      info "  Already installed: $plugin"
    else
      info "  Installing: $plugin"
      claude plugin install "$plugin" 2>/dev/null
    fi
  done
  SUMMARY+=("Claude plugins configured")
else
  warn "Claude Code not found or missing config, skipping plugins"
fi

###############################################################################
# 8. Auth setup (interactive, skip if already authenticated)
###############################################################################
header "Authentication"

# GitHub CLI
if command -v gh &>/dev/null; then
  if ! gh auth status &>/dev/null 2>&1 || [[ "$FORCE" == true ]]; then
    read -rp "  ${BOLD}Authenticate GitHub CLI? [y/N]${NC} " choice
    if [[ "$choice" =~ ^[Yy]$ ]]; then
      gh auth login
      SUMMARY+=("GitHub CLI authenticated")
    fi
  else
    info "GitHub CLI already authenticated"
  fi
fi

# SSH key
if [[ ! -f "$HOME/.ssh/id_ed25519" ]] || [[ "$FORCE" == true ]]; then
  if [[ ! -f "$HOME/.ssh/id_ed25519" ]]; then
    read -rp "  ${BOLD}Generate ed25519 SSH key? [y/N]${NC} " choice
    if [[ "$choice" =~ ^[Yy]$ ]]; then
      read -rp "  ${BOLD}Email for SSH key:${NC} " email
      if [[ -n "$email" ]]; then
        ssh-keygen -t ed25519 -C "$email"
        warn "Add your public key to GitHub: https://github.com/settings/keys"
        cat "$HOME/.ssh/id_ed25519.pub"
        SUMMARY+=("SSH key generated")
      fi
    fi
  fi
else
  info "SSH key exists"
fi

# Google Cloud
if command -v gcloud &>/dev/null; then
  if ! gcloud config get project &>/dev/null 2>&1 || [[ "$FORCE" == true ]]; then
    read -rp "  ${BOLD}Initialize Google Cloud (gcloud init)? [y/N]${NC} " choice
    if [[ "$choice" =~ ^[Yy]$ ]]; then
      gcloud init
      SUMMARY+=("Google Cloud initialized")
    fi
  else
    info "Google Cloud already configured"
  fi
fi

# Google Workspace CLI
if command -v gws &>/dev/null; then
  if [[ ! -d "$HOME/.config/gws" ]] || [[ "$FORCE" == true ]]; then
    read -rp "  ${BOLD}Authenticate Google Workspace CLI (gws auth setup)? [y/N]${NC} " choice
    if [[ "$choice" =~ ^[Yy]$ ]]; then
      warn "Note: You may need to add yourself as a test user in the GCP OAuth consent screen"
      warn "Go to: https://console.cloud.google.com/apis/credentials/consent > Audience > Add test user"
      gws auth setup
      SUMMARY+=("Google Workspace CLI authenticated")
    fi
  else
    info "Google Workspace CLI already authenticated"
  fi
fi

# Optional: Google Chrome
if ! brew ls --cask --versions "google-chrome" &>/dev/null; then
  read -rp "  ${BOLD}Install Google Chrome? [y/N]${NC} " choice
  if [[ "$choice" =~ ^[Yy]$ ]]; then
    brew install --cask google-chrome
    SUMMARY+=("Google Chrome installed")
  fi
fi

###############################################################################
# 9. Summary
###############################################################################
header "Setup complete"

if [[ ${#SUMMARY[@]} -eq 0 ]]; then
  info "Everything was already up to date"
else
  for item in "${SUMMARY[@]}"; do
    info "$item"
  done
fi
echo ""
