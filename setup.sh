#!/usr/bin/env bash
set -uo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Re-exec under Homebrew bash (4+) when available for associative array support.
# On first run, system bash (3.2) handles everything up through brew install,
# which installs modern bash. Subsequent runs pick it up immediately.
BREW_BASH=""
for candidate in /opt/homebrew/bin/bash /usr/local/bin/bash; do
  if [[ -x "$candidate" ]]; then
    BREW_BASH="$candidate"
    break
  fi
done
if [[ "${BASH_VERSINFO[0]}" -lt 4 ]] && [[ -n "$BREW_BASH" ]]; then
  exec "$BREW_BASH" "$0" "$@"
fi

# Parse flags
FORCE=false
while [[ $# -gt 0 ]]; do
  case "$1" in
    -f|--force) FORCE=true; shift ;;
    *) echo "Usage: ./setup.sh [-f|--force]"; exit 1 ;;
  esac
done

# Detect interactive terminal (auth prompts require one)
INTERACTIVE=true
[[ ! -t 0 ]] && INTERACTIVE=false

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
FAILURES=()

run_phase() {
  local name="$1"
  if ! "$name"; then
    FAILURES+=("$name")
  fi
}

###############################################################################
# Phase functions
###############################################################################

setup_prerequisites() {
  header "Prerequisites"

  if ! command -v brew &>/dev/null; then
    warn "Installing Homebrew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
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
    if [[ "$INTERACTIVE" == true ]]; then
      warn "Installing Xcode Command Line Tools..."
      xcode-select --install
      echo "Press Enter after Xcode CLI tools installation completes."
      read -r
    else
      error "Xcode CLI tools missing (install manually: xcode-select --install)"
      return 1
    fi
  fi
  info "Xcode CLI tools ready"
}

install_brew_packages() {
  header "Brew packages"

  # Casks that require sudo for installation. Skip them in non-interactive
  # sessions (e.g. Claude Code) so they don't cause repeated failures.
  local sudo_casks="whatsapp zoom"
  local skip_env=""
  if [[ "$INTERACTIVE" != true ]]; then
    skip_env="$sudo_casks"
    info "Non-interactive session, skipping sudo casks: $sudo_casks"
  fi

  if [[ "$FORCE" != true ]]; then
    local check_pass=true
    if [[ -n "$skip_env" ]]; then
      HOMEBREW_BUNDLE_CASK_SKIP="$skip_env" brew bundle check --file="$DIR/brew/Brewfile" &>/dev/null || check_pass=false
    else
      brew bundle check --file="$DIR/brew/Brewfile" &>/dev/null || check_pass=false
    fi
    if [[ "$check_pass" == true ]]; then
      info "All brew packages already installed"
      eval "$(brew shellenv)"
      hash -r
      return 0
    fi
  fi

  # Allow individual failures without aborting.
  if HOMEBREW_BUNDLE_CASK_SKIP="$skip_env" brew bundle --file="$DIR/brew/Brewfile" 2>&1; then
    SUMMARY+=("Brew packages installed")
  else
    warn "Some brew packages failed to install (see output above)"
    SUMMARY+=("Brew packages installed (with warnings)")
  fi

  eval "$(brew shellenv)"
  hash -r

  # Re-exec under modern bash if we just installed it
  if [[ "${BASH_VERSINFO[0]}" -lt 4 ]] && [[ -n "$BREW_BASH" ]]; then
    warn "Modern bash now available, re-launching setup..."
    local reexec_args=("$0")
    [[ "$FORCE" == true ]] && reexec_args+=("--force")
    exec "$BREW_BASH" "${reexec_args[@]}"
  fi
}

setup_node() {
  header "Node setup"

  if ! command -v fnm &>/dev/null; then
    warn "fnm not found, skipping Node setup"
    return 0
  fi

  eval "$(fnm env)"
  local lts_installed
  lts_installed=$(fnm ls | grep -c "lts" || true)

  if [[ "$lts_installed" -gt 0 ]] && [[ "$FORCE" != true ]]; then
    info "Node $(node --version) active"
  else
    info "Installing Node LTS via fnm..."
    fnm install --lts || return 1
    fnm default lts-latest || return 1
    SUMMARY+=("Node LTS installed via fnm")
    info "Node $(node --version) active"
  fi
}

install_npm_globals() {
  header "npm globals"

  if ! command -v npm &>/dev/null; then
    warn "npm not found, skipping"
    return 0
  fi

  local globals=(
    "@anthropic-ai/claude-code"
    "markdownlint-cli"
    "typescript"
    "vercel"
    "yarn"
  )

  for pkg in "${globals[@]}"; do
    if [[ "$FORCE" != true ]] && npm list -g "$pkg" &>/dev/null; then
      info "$pkg already installed"
    else
      info "Installing $pkg..."
      npm install -g "$pkg" || return 1
      SUMMARY+=("$pkg installed")
    fi
  done
}

deploy_homebase() {
  header "Homebase"

  local excluded=(setup.sh README.md .git .github .gitignore .markdownlint.jsonc .markdownlint-cli2.jsonc .coderabbit.yaml brew)
  local rsync_opts=('-a' '--force')
  for item in "${excluded[@]}"; do
    rsync_opts+=(--exclude="$item")
  done
  rsync "${rsync_opts[@]}" "$DIR/" "$HOME/" || return 1
  info "Homebase synced to \$HOME"
  SUMMARY+=("Homebase deployed")
}

install_ide_extensions() {
  header "IDE extensions"

  local extensions_file="$DIR/.vscode/extensions.txt"
  [[ -f "$extensions_file" ]] || return 0

  for cli in code cursor; do
    if ! command -v "$cli" &>/dev/null; then
      warn "$cli not found, skipping"
      continue
    fi

    local installed
    installed=$("$cli" --list-extensions | tr '[:upper:]' '[:lower:]')

    declare -A installed_set=()
    while IFS= read -r ext; do
      [[ -n "$ext" ]] && installed_set["$ext"]=1
    done <<< "$installed"

    local missing=()
    local total=0
    while IFS= read -r ext || [[ -n "$ext" ]]; do
      [[ -z "$ext" ]] && continue
      ((total++))
      local lower="${ext,,}"
      if [[ "$FORCE" == true ]] || [[ -z "${installed_set[$lower]+x}" ]]; then
        missing+=("$ext")
      fi
    done < "$extensions_file"
    unset installed_set

    if [[ ${#missing[@]} -eq 0 ]]; then
      info "$cli: all $total extensions installed"
    else
      local installed_count=0
      for ext in "${missing[@]}"; do
        local output
        if output=$("$cli" --install-extension "$ext" --force 2>&1); then
          ((installed_count++))
        else
          warn "$cli: failed to install $ext"
        fi
      done
      info "$cli: $installed_count/${#missing[@]} extensions installed"
      SUMMARY+=("$cli: $installed_count/${#missing[@]} extensions installed")
    fi
  done
}

install_claude_plugins() {
  header "Claude Code plugins"

  local sources_file="$HOME/.claude/plugins/marketplace-sources.txt"
  local settings_file="$HOME/.claude/settings.json"

  if ! command -v claude &>/dev/null; then
    warn "Claude Code not found, skipping plugins"
    return 0
  fi
  if [[ ! -f "$settings_file" ]]; then
    warn "Missing $settings_file, skipping plugins"
    return 0
  fi
  if [[ ! -f "$sources_file" ]]; then
    warn "Missing $sources_file, skipping plugins"
    return 0
  fi

  [[ -f "$HOME/.claude/plugins/known_marketplaces.json" ]] || echo '{}' > "$HOME/.claude/plugins/known_marketplaces.json"

  while IFS= read -r source || [[ -n "$source" ]]; do
    [[ -z "$source" ]] && continue
    claude plugin marketplace add "$source"
  done < "$sources_file"

  # Register local-skills marketplace from homebase
  local local_skills_dir="$HOME/.claude/local-skills"
  if [[ -d "$local_skills_dir/.claude-plugin" ]]; then
    info "Registering local-skills marketplace..."
    claude plugin marketplace add "$local_skills_dir"
  fi

  # Extract installed plugin names from formatted `claude plugin list` output.
  # Lines look like: "  ❯ feature-dev@claude-code-plugins"
  local installed_plugins
  local plugin_output
  if ! plugin_output=$(claude plugin list 2>&1); then
    warn "Failed to list Claude plugins: $plugin_output"
    return 1
  fi
  installed_plugins=$(echo "$plugin_output" | grep '❯' | sed 's/.*❯ //' | xargs || true)

  declare -A installed_set=()
  for p in $installed_plugins; do
    installed_set["$p"]=1
  done

  local plugins
  plugins=$(python3 -c "
import json, sys
with open('$settings_file') as f:
    d = json.load(f)
for k, v in d.get('enabledPlugins', {}).items():
    if v:
        print(k)
" 2>/dev/null || true)

  while IFS= read -r plugin; do
    [[ -z "$plugin" ]] && continue

    if [[ -n "${installed_set[$plugin]+x}" ]] && [[ "$FORCE" != true ]]; then
      info "Already installed: $plugin"
    else
      info "Installing: $plugin"
      claude plugin install "$plugin" || warn "Failed to install $plugin"
    fi
  done <<< "$plugins"

  unset installed_set

  SUMMARY+=("Claude plugins configured")
}

setup_auth() {
  header "Authentication"

  if [[ "$INTERACTIVE" != true ]]; then
    info "Non-interactive session, skipping auth (run setup.sh in a terminal to authenticate)"
    return 0
  fi

  # GitHub CLI
  if command -v gh &>/dev/null; then
    if gh auth status &>/dev/null && [[ "$FORCE" != true ]]; then
      info "GitHub CLI already authenticated"
    else
      read -rp "  ${BOLD}Authenticate GitHub CLI? [y/N]${NC} " choice
      if [[ "$choice" =~ ^[Yy]$ ]]; then
        gh auth login || return 1
        SUMMARY+=("GitHub CLI authenticated")
      fi
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
    local gcloud_project
    gcloud_project="$(gcloud config get-value project 2>/dev/null || true)"
    if [[ -n "$gcloud_project" ]] && [[ "$gcloud_project" != "(unset)" ]] && [[ "$FORCE" != true ]]; then
      info "Google Cloud already configured"
    else
      read -rp "  ${BOLD}Initialize Google Cloud (gcloud init)? [y/N]${NC} " choice
      if [[ "$choice" =~ ^[Yy]$ ]]; then
        gcloud init || return 1
        SUMMARY+=("Google Cloud initialized")
      fi
    fi
  fi

  # Google Workspace CLI
  if command -v gws &>/dev/null; then
    if [[ -d "$HOME/.config/gws" ]] && [[ "$FORCE" != true ]]; then
      info "Google Workspace CLI already authenticated"
    else
      read -rp "  ${BOLD}Authenticate Google Workspace CLI (gws auth setup)? [y/N]${NC} " choice
      if [[ "$choice" =~ ^[Yy]$ ]]; then
        warn "Note: You may need to add yourself as a test user in the GCP OAuth consent screen"
        warn "Go to: https://console.cloud.google.com/apis/credentials/consent > Audience > Add test user"
        gws auth setup || return 1
        SUMMARY+=("Google Workspace CLI authenticated")
      fi
    fi
  fi
}

print_summary() {
  header "Setup complete"

  if [[ ${#FAILURES[@]} -gt 0 ]]; then
    for phase in "${FAILURES[@]}"; do
      error "Phase failed: $phase"
    done
    echo ""
  fi

  if [[ ${#SUMMARY[@]} -eq 0 ]]; then
    info "Everything was already up to date"
  else
    for item in "${SUMMARY[@]}"; do
      info "$item"
    done
  fi

  if [[ ${#FAILURES[@]} -gt 0 ]]; then
    warn "Some phases failed. Re-run setup.sh to retry, or fix manually."
  fi

  warn "You may need to restart your shell for all changes to take effect"
  echo ""

  [[ ${#FAILURES[@]} -eq 0 ]]
}

###############################################################################
# Main
###############################################################################

run_phase setup_prerequisites
run_phase install_brew_packages
run_phase setup_node
run_phase install_npm_globals
run_phase deploy_homebase
run_phase install_ide_extensions
run_phase install_claude_plugins
run_phase setup_auth
print_summary
