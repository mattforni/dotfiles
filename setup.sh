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
# Phase functions
###############################################################################

setup_prerequisites() {
  header "Prerequisites"

  if ! command -v brew &>/dev/null; then
    warn "Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    # Ensure brew is in PATH for the rest of this script (Apple Silicon)
    if [[ "$(uname -m)" == "arm64" ]] && [[ -f /opt/homebrew/bin/brew ]]; then
      eval "$(/opt/homebrew/bin/brew shellenv)"
    fi
    SUMMARY+=("Homebrew installed")
  fi
  info "Homebrew ready"

  if [[ "$(uname -m)" == "arm64" ]]; then
    if ! /usr/bin/pgrep -q oahd; then
      warn "Installing Rosetta 2..."
      softwareupdate --install-rosetta --agree-to-license
      SUMMARY+=("Rosetta 2 installed")
    fi
    info "Rosetta 2 ready"
  fi

  if ! xcode-select -p &>/dev/null; then
    warn "Installing Xcode Command Line Tools..."
    xcode-select --install
    echo "Press Enter after Xcode CLI tools installation completes."
    read -r
  fi
  info "Xcode CLI tools ready"
}

install_brew_packages() {
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

  # Refresh PATH so newly installed cask CLIs are found by subsequent phases
  eval "$(brew shellenv)"
  hash -r
}

setup_node() {
  header "Node setup"

  if command -v fnm &>/dev/null; then
    eval "$(fnm env)"
    LTS_INSTALLED=$(fnm ls | grep -c "lts" || true)
    if [[ "$LTS_INSTALLED" -eq 0 ]] || [[ "$FORCE" == true ]]; then
      info "Installing Node LTS via fnm..."
      fnm install --lts
      fnm default lts-latest
      SUMMARY+=("Node LTS installed via fnm")
    fi
    info "Node $(node --version || echo 'pending shell restart') active"
  else
    warn "fnm not found, skipping Node setup"
  fi
}

install_npm_globals() {
  header "npm globals"

  local globals=(
    "@anthropic-ai/claude-code"
    "markdownlint-cli"
    "typescript"
    "vercel"
    "yarn"
  )

  for pkg in "${globals[@]}"; do
    if npm list -g "$pkg" &>/dev/null && [[ "$FORCE" != true ]]; then
      info "$pkg already installed"
    else
      info "Installing $pkg..."
      npm install -g "$pkg"
      SUMMARY+=("$pkg installed")
    fi
  done
}

deploy_homebase() {
  header "Homebase"

  local excluded=(setup.sh README.md .git .github .gitignore .markdownlint.jsonc .markdownlint-cli2.jsonc brew)
  local rsync_opts=('-a')
  for item in "${excluded[@]}"; do
    rsync_opts+=(--exclude="$item")
  done
  rsync "${rsync_opts[@]}" "$DIR/" "$HOME/"
  info "Homebase synced to \$HOME"
  SUMMARY+=("Homebase deployed")
}

install_ide_extensions() {
  header "IDE extensions"

  local extensions_file="$DIR/.vscode/extensions.txt"
  [[ -f "$extensions_file" ]] || return 0

  for CLI in code cursor; do
    if command -v "$CLI" &>/dev/null; then
      local installed
      installed=$("$CLI" --list-extensions | tr '[:upper:]' '[:lower:]')
      declare -A exts_to_install
      while IFS= read -r ext || [[ -n "$ext" ]]; do
        [[ -z "$ext" ]] && continue
        exts_to_install["${ext,,}"]="$ext"
      done < "$extensions_file"
      local total_exts=${#exts_to_install[@]}

      if [[ "$FORCE" != true ]]; then
        while IFS= read -r installed_ext; do
          unset "exts_to_install[$installed_ext]"
        done <<< "$installed"
      fi

      local missing=("${exts_to_install[@]}")

      if [[ ${#missing[@]} -eq 0 ]]; then
        info "$CLI: all $total_exts extensions installed"
      else
        for ext in "${missing[@]}"; do
          "$CLI" --install-extension "$ext" --force
        done
        info "$CLI: ${#missing[@]} extensions installed"
        SUMMARY+=("$CLI: ${#missing[@]} extensions installed")
      fi
    else
      warn "$CLI not found, skipping"
    fi
  done
}

install_claude_plugins() {
  header "Claude Code plugins"

  local sources_file="$HOME/.claude/plugins/marketplace-sources.txt"
  local settings_file="$HOME/.claude/settings.json"

  if ! command -v claude &>/dev/null || [[ ! -f "$settings_file" ]] || [[ ! -f "$sources_file" ]]; then
    warn "Claude Code not found or missing config, skipping plugins"
    return 0
  fi

  [[ -f "$HOME/.claude/plugins/known_marketplaces.json" ]] || echo '{}' > "$HOME/.claude/plugins/known_marketplaces.json"

  while IFS= read -r source || [[ -n "$source" ]]; do
    [[ -z "$source" ]] && continue
    claude plugin marketplace add "$source"
  done < "$sources_file"

  local installed_plugins
  installed_plugins=$(claude plugin list)
  declare -A installed_plugin_set
  while IFS= read -r p; do [[ -n "$p" ]] && installed_plugin_set["${p%@*}"]=1; done <<< "$installed_plugins"

  python3 -c "
import json
with open('$settings_file') as f:
    d = json.load(f)
for k, v in d.get('enabledPlugins', {}).items():
    if v:
        print(k)
" | while read -r plugin; do
    PLUGIN_NAME=${plugin%@*}
    if [[ -n "${installed_plugin_set[$PLUGIN_NAME]+x}" ]] && [[ "$FORCE" != true ]]; then
      info "  Already installed: $plugin"
    else
      info "  Installing: $plugin"
      claude plugin install "$plugin"
    fi
  done
  SUMMARY+=("Claude plugins configured")
}

setup_auth() {
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

  # SSH key (never regenerate, even with --force)
  if [[ -f "$HOME/.ssh/id_ed25519" ]]; then
    info "SSH key exists"
  else
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
}

print_summary() {
  header "Setup complete"

  if [[ ${#SUMMARY[@]} -eq 0 ]]; then
    info "Everything was already up to date"
  else
    for item in "${SUMMARY[@]}"; do
      info "$item"
    done
  fi
  warn "You may need to restart your shell for all changes to take effect"
  echo ""
}

###############################################################################
# Main
###############################################################################

setup_prerequisites
install_brew_packages
setup_node
install_npm_globals
deploy_homebase
install_ide_extensions
install_claude_plugins
setup_auth
print_summary
