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

# Paths (relative to both $DIR and $HOME) that are symlinked instead of rsynced.
# deploy_homebase excludes them from rsync so the symlinks survive; sync-dots
# omits them because edits in $HOME already land in the repo.
LINKED_CONFIGS=(
  .aliases
  .functions
  .claude/local-skills
  .claude/CLAUDE.md
  .claude/commands
  .claude/references
  .claude/statusline.sh
  bin
)

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

  # Casks that require sudo in non-interactive sessions, either because the
  # installer prompts (whatsapp, zoom) or because brew needs to adopt an
  # existing /Applications copy (chmod -R a+rX requires sudo). Skip in
  # non-interactive sessions (e.g. Claude Code); run setup.sh in a terminal
  # to pick them up.
  local sudo_casks="whatsapp zoom docker-desktop google-chrome protonvpn raycast slack todoist-app"
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

# Default Ruby. rbenv reads per-project .ruby-version files, so this is just the
# global fallback; bump it when the projects you work in move forward.
RUBY_DEFAULT_VERSION="3.4.7"

setup_ruby() {
  header "Ruby setup"

  # RVM has been replaced by rbenv. Remove any lingering RVM install so its
  # shims and PATH entries can't shadow rbenv. Idempotent: a no-op once gone.
  if [[ -d "$HOME/.rvm" ]]; then
    info "Removing legacy RVM install (~/.rvm)..."
    rm -rf "$HOME/.rvm"
    SUMMARY+=("Removed legacy RVM")
  fi
  rm -f "$HOME/.rvmrc"

  if ! command -v rbenv &>/dev/null; then
    warn "rbenv not found, skipping Ruby setup"
    return 0
  fi

  eval "$(rbenv init - bash)"

  if rbenv versions --bare | grep -qx "$RUBY_DEFAULT_VERSION" && [[ "$FORCE" != true ]]; then
    info "Ruby $RUBY_DEFAULT_VERSION already installed"
  else
    info "Installing Ruby $RUBY_DEFAULT_VERSION via rbenv (compiles from source, slow)..."
    # --force recompiles even if present, so -f genuinely reinstalls (mirrors setup_node).
    local install_opt="--skip-existing"
    [[ "$FORCE" == true ]] && install_opt="--force"
    rbenv install "$install_opt" "$RUBY_DEFAULT_VERSION" || return 1
    SUMMARY+=("Ruby $RUBY_DEFAULT_VERSION installed via rbenv")
  fi

  rbenv global "$RUBY_DEFAULT_VERSION" || return 1
  info "Ruby $(rbenv exec ruby --version | awk '{print $2}') is the global default"
}

install_npm_globals() {
  header "npm globals"

  if ! command -v npm &>/dev/null; then
    warn "npm not found, skipping"
    return 0
  fi

  local globals=(
    "@anthropic-ai/claude-code"
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

setup_agent_browser() {
  header "agent-browser"

  if ! command -v agent-browser &>/dev/null; then
    warn "agent-browser not found, skipping"
    return 0
  fi

  # `agent-browser install` downloads Chrome for Testing into
  # ~/.agent-browser/browsers/ on first run and no-ops once present.
  if [[ "$FORCE" != true ]] && compgen -G "$HOME/.agent-browser/browsers/chrome-*" > /dev/null; then
    info "agent-browser Chrome already installed"
    return 0
  fi

  if agent-browser install; then
    SUMMARY+=("agent-browser Chrome installed")
  else
    warn "agent-browser install failed"
    return 1
  fi
}

deploy_homebase() {
  header "Homebase"

  # Paths in LINKED_CONFIGS are symlinked (see link_tracked_configs below) so
  # edits in $HOME go live without re running setup.sh. Exclude them from rsync
  # so we do not clobber the symlinks with copies.
  local excluded=(setup.sh README.md .git .github .gitignore .markdownlint.jsonc .markdownlint-cli2.jsonc .coderabbit.yaml brew launchagents)
  for item in "${LINKED_CONFIGS[@]}"; do
    excluded+=("$item")
  done
  local rsync_opts=('-a' '--force')
  for item in "${excluded[@]}"; do
    rsync_opts+=(--exclude="$item")
  done
  rsync "${rsync_opts[@]}" "$DIR/" "$HOME/" || return 1
  info "Homebase synced to \$HOME"
  SUMMARY+=("Homebase deployed")
}

link_tracked_configs() {
  header "Tracked config symlinks"

  local failed=0
  local linked=0
  for item in "${LINKED_CONFIGS[@]}"; do
    local src="$DIR/$item"
    local dst="$HOME/$item"

    if [[ ! -e "$src" ]]; then
      warn "Source $src does not exist, skipping"
      continue
    fi

    if [[ -L "$dst" ]]; then
      local current
      current=$(readlink "$dst")
      if [[ "$current" == "$src" ]]; then
        info "$item symlink already points at $src"
        continue
      fi
      warn "Replacing $item symlink (was $current)"
      rm "$dst"
    elif [[ -e "$dst" ]]; then
      warn "$item is a real file/directory at $dst; refusing to remove automatically"
      warn "Move or delete it manually, then re run setup.sh"
      failed=1
      continue
    fi

    mkdir -p "$(dirname "$dst")"
    if ! ln -s "$src" "$dst"; then
      error "Failed to link $dst -> $src"
      failed=1
      continue
    fi
    info "Linked $dst -> $src"
    linked=$((linked + 1))
  done

  if [[ $failed -ne 0 ]]; then
    return 1
  fi
  if [[ $linked -gt 0 ]]; then
    SUMMARY+=("$linked tracked configs linked")
  fi
}

install_launchagents() {
  header "Launch agents"

  # Plists in launchagents/ are templates: {{HOME}} is substituted with the
  # current user's $HOME at install time. The rendered plist lives at
  # $HOME/Library/LaunchAgents/ as a real file (not a symlink) so launchd
  # sees absolute, user specific paths. Re running setup.sh re renders and
  # re bootstraps.
  local src_dir="$DIR/launchagents"
  local dst_dir="$HOME/Library/LaunchAgents"
  local domain
  domain="gui/$(id -u)"

  if [[ ! -d "$src_dir" ]]; then
    info "No launchagents/ directory in repo, skipping"
    return 0
  fi

  mkdir -p "$dst_dir"

  local count=0
  local failed=0
  for src in "$src_dir"/*.plist; do
    [[ -f "$src" ]] || continue
    local base
    base=$(basename "$src")
    local label="${base%.plist}"
    local dst="$dst_dir/$base"

    # Render the template with $HOME substituted. sed uses | delimiter to
    # avoid escaping / in the path.
    local rendered
    rendered=$(sed "s|{{HOME}}|$HOME|g" "$src")

    # Track whether the installed plist actually changed. Avoids tearing down
    # and re bootstrapping an unchanged agent on every setup.sh run, which
    # would kill an in flight job if one were running.
    local changed=1
    if [[ -f "$dst" ]] && [[ ! -L "$dst" ]] && [[ "$(cat "$dst")" == "$rendered" ]]; then
      info "$label plist already rendered"
      changed=0
    elif [[ -L "$dst" ]]; then
      warn "Removing stale symlink at $dst"
      rm "$dst"
      printf '%s\n' "$rendered" > "$dst"
      info "Rendered $dst"
    else
      printf '%s\n' "$rendered" > "$dst"
      info "Rendered $dst"
    fi

    # Reload only when the plist changed or the agent is not currently loaded.
    local loaded=0
    launchctl print "$domain/$label" &>/dev/null && loaded=1

    if [[ $changed -eq 1 ]] || [[ $loaded -eq 0 ]]; then
      [[ $loaded -eq 1 ]] && launchctl bootout "$domain/$label" &>/dev/null || true
      if launchctl bootstrap "$domain" "$dst"; then
        info "Launch agent $label active"
        count=$((count + 1))
      else
        error "Failed to bootstrap $label"
        failed=1
      fi
    else
      info "Launch agent $label already loaded"
    fi
  done

  if [[ $failed -ne 0 ]]; then
    return 1
  fi
  if [[ $count -gt 0 ]]; then
    SUMMARY+=("$count launch agent(s) installed")
  fi
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

  # Refresh marketplace metadata from sources so plugin version bumps become
  # visible to the update step below. `marketplace add` short-circuits when a
  # marketplace is already on disk and does not refresh, so without this a
  # bumped version would never be seen. Git sources do a network fetch here.
  info "Refreshing marketplaces..."
  claude plugin marketplace update >/dev/null 2>&1 || warn "Marketplace refresh hit an error"

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
      # Already installed: proactively update so version bumps actually deploy.
      # setup.sh used to short-circuit here, so a bumped plugin never upgraded
      # until a manual `claude plugin update`. update is a near no-op when the
      # plugin is already current. Changes apply on the next claude launch.
      local update_output
      if update_output=$(claude plugin update "$plugin" 2>&1); then
        if echo "$update_output" | grep -q "updated from"; then
          info "Updated: $plugin"
        else
          info "Already current: $plugin"
        fi
      else
        warn "Failed to update $plugin: $update_output"
      fi
    else
      info "Installing: $plugin"
      claude plugin install "$plugin" || warn "Failed to install $plugin"
    fi
  done <<< "$plugins"

  unset installed_set

  SUMMARY+=("Claude plugins configured")
}

install_mcp_servers() {
  header "Claude Code MCP servers"

  if ! command -v claude &>/dev/null; then
    warn "Claude Code not found, skipping MCP servers"
    return 0
  fi

  # Desired MCP servers at user scope (persist across project entries).
  # Format depends on transport:
  #   stdio: name|stdio|command_and_args
  #   http:  name|http|url|optional_header  (single header, eg. "Authorization: Bearer $TOKEN")
  # First time auth on a new machine: each MCP may require its own credentials
  # (e.g., pinole needs ATELIC_API_TOKEN exported in the shell before this script
  # runs so the Bearer header registers populated). Subsequent runs are idempotent.
  # Strava is connected via the native claude.ai Strava connector (account level,
  # managed in claude.ai Settings > Connectors), so it needs no entry here. The
  # old self hosted servers (community `strava` and the gated `strava-mcp`) were
  # retired 2026-06-14 when the native connector became available.
  # ynab (stdio, Deno) reads YNAB_ACCESS_TOKEN. It is registered with a literal
  # ${YNAB_ACCESS_TOKEN} placeholder (see the stdio branch below) that Claude
  # Code expands at runtime from the env var the bin/claude wrapper injects from
  # the login Keychain. The canonical token lives in BitWarden; setup_auth seeds
  # the Keychain entry on a fresh machine. So no literal token is ever baked in.

  # Self-heal: when the env var is empty (headless runs do not source ~/.zshrc),
  # fall back to the token stashed in the macOS Keychain so a fresh machine can
  # re-register pinole without a manual export. The empty-token guard below still
  # protects us if neither source has it.
  if [[ -z "${ATELIC_API_TOKEN:-}" ]] && command -v security &>/dev/null; then
    ATELIC_API_TOKEN="$(security find-generic-password -s atelic-token -w)" || ATELIC_API_TOKEN=""
  fi

  local desired=(
    "playwright|stdio|npx -y @playwright/mcp@latest"
    "pinole|http|https://api.atelic.me/mcp|Authorization: Bearer ${ATELIC_API_TOKEN:-}"
    "ynab|stdio|deno run --allow-net=api.ynab.com --allow-env=YNAB_ACCESS_TOKEN,YNAB_READ_ONLY,YNAB_DEFAULT_PLAN_ID,YNAB_CACHE_PATH,PORT jsr:@jsclayton/ynab-mcp"
  )

  for entry in "${desired[@]}"; do
    local name="${entry%%|*}"
    local rest="${entry#*|}"
    local transport="${rest%%|*}"
    local target_and_extra="${rest#*|}"

    # Skip pinole when its bearer token is missing. Registering with an empty
    # token bakes a broken entry that the `Already registered` short circuit
    # below would silently preserve on future runs. (Keychain service:
    # atelic-token, per the vault naming convention.)
    if [[ "$name" == "pinole" && -z "${ATELIC_API_TOKEN:-}" ]]; then
      warn "Skipping pinole: ATELIC_API_TOKEN not set in environment"
      continue
    fi

    if claude mcp get "$name" &>/dev/null; then
      info "Already registered: $name"
      continue
    fi

    info "Registering MCP server: $name"
    local add_status=1
    if [[ "$transport" == "http" ]]; then
      local url="${target_and_extra%%|*}"
      local header=""
      if [[ "$target_and_extra" == *"|"* ]]; then
        header="${target_and_extra#*|}"
      fi

      # `--header` is a varargs flag in claude mcp add; positionals must precede
      # it or they get consumed as additional header values.
      if [[ -n "$header" ]]; then
        claude mcp add "$name" "$url" --scope user --transport http --header "$header"
        add_status=$?
      else
        claude mcp add "$name" "$url" --scope user --transport http
        add_status=$?
      fi
    elif [[ "$name" == "ynab" ]]; then
      # Single-quote the placeholder so setup.sh's own shell does not expand it
      # and bake a literal token into .claude.json; Claude Code expands
      # ${YNAB_ACCESS_TOKEN} at runtime. Name precedes --env because, like
      # --header, --env is variadic and would otherwise eat the positional.
      # shellcheck disable=SC2086
      claude mcp add "$name" --scope user --transport stdio \
        --env 'YNAB_ACCESS_TOKEN=${YNAB_ACCESS_TOKEN}' -- $target_and_extra
      add_status=$?
    else
      # shellcheck disable=SC2086
      claude mcp add --scope user --transport "$transport" "$name" -- $target_and_extra
      add_status=$?
    fi

    if [[ $add_status -eq 0 ]]; then
      SUMMARY+=("MCP server registered: $name")
    else
      warn "Failed to register MCP server: $name"
    fi
  done
}

configure_repo() {
  header "Repo config"

  # sdlc:review and sdlc:iterate read the re review trigger from
  # `git config sdlc.review-command`. The plugin default is "/gemini review"
  # but this repo uses CodeRabbit, so pin it locally.
  local desired="@coderabbitai review"
  local current
  current="$(git -C "$DIR" config --get sdlc.review-command 2>/dev/null || true)"
  if [[ "$current" == "$desired" ]]; then
    info "sdlc.review-command already set to '$desired'"
  else
    git -C "$DIR" config sdlc.review-command "$desired" || return 1
    info "sdlc.review-command set to '$desired'"
    SUMMARY+=("git config: sdlc.review-command set")
  fi
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

  # Google Workspace CLI (multi-profile)
  if command -v gws &>/dev/null; then
    # Migrate legacy single-profile layout. Detect whether the legacy config
    # has an authenticated account; any detected account maps to "home" (the
    # zero profile retired with the Zero W2, 2026-06-29).
    local migrated_profile=""
    if [[ -d "$HOME/.config/gws" ]]; then
      local legacy_user=""
      legacy_user=$(GOOGLE_WORKSPACE_CLI_CONFIG_DIR="$HOME/.config/gws" gws auth status \
        | jq -r '.user // empty' \
        || true)

      local legacy_profile=""
      case "${legacy_user,,}" in
        "") legacy_profile="" ;;
        *) legacy_profile=home ;;
      esac

      if [[ -z "$legacy_profile" ]]; then
        warn "Could not detect account in ~/.config/gws (no auth state to inspect)."
        warn "Rename it manually before re-running setup:"
        warn "  mv ~/.config/gws ~/.config/gws-home"
      else
        local migration_target="$HOME/.config/gws-$legacy_profile"
        if [[ -e "$migration_target" ]]; then
          warn "Both ~/.config/gws (account: $legacy_user) and $migration_target exist. Inspect and remove the stale one manually."
        else
          info "Migrating ~/.config/gws -> $migration_target (detected account: $legacy_user)"
          mv "$HOME/.config/gws" "$migration_target" || return 1
          SUMMARY+=("gws: migrated legacy config to $legacy_profile profile ($legacy_user)")
          migrated_profile="$legacy_profile"
        fi
      fi
    fi

    # Seed the active-profile pointer. Prefer the just-migrated profile;
    # otherwise default to home (the zero profile retired with the Zero W2,
    # 2026-06-29; add profiles back to the loop below if multi-account
    # returns).
    [[ -f "$HOME/.config/gws-current" ]] || printf '%s\n' "${migrated_profile:-home}" > "$HOME/.config/gws-current"

    # Migrate a stale zero pointer to home (the zero profile is retired and
    # its config dirs are deleted; a leftover pointer would break resolution).
    if [[ -r "$HOME/.config/gws-current" ]] \
        && [[ "$(tr -d '[:space:]' < "$HOME/.config/gws-current")" == "zero" ]]; then
      info "Rewriting retired zero profile pointer to home in ~/.config/gws-current"
      printf '%s\n' "home" > "$HOME/.config/gws-current"
    fi

    local gws_bootstrap_project="${GWS_BOOTSTRAP_PROJECT:-atelic}"
    local gws_profile gws_dir
    for gws_profile in home tpf; do
      gws_dir="$HOME/.config/gws-$gws_profile"
      if [[ -f "$gws_dir/client_secret.json" ]] && [[ -f "$gws_dir/credentials.enc" ]] && [[ "$FORCE" != true ]]; then
        info "gws $gws_profile profile already configured ($gws_dir)"
        continue
      fi
      read -rp "  ${BOLD}Authenticate gws $gws_profile profile? [y/N]${NC} " choice
      [[ "$choice" =~ ^[Yy]$ ]] || continue
      mkdir -p "$gws_dir"
      if [[ ! -f "$gws_dir/client_secret.json" ]]; then
        # Try to fetch from GCP Secret Manager first.
        if command -v gcloud &>/dev/null; then
          info "Fetching $gws_profile client_secret from Secret Manager (project: $gws_bootstrap_project)"
          if gcloud secrets versions access latest \
              --secret="gws-oauth-client-$gws_profile" \
              --project="$gws_bootstrap_project" \
              > "$gws_dir/client_secret.json" 2>/dev/null; then
            chmod 600 "$gws_dir/client_secret.json"
            info "Fetched $gws_profile client_secret from Secret Manager"
          else
            rm -f "$gws_dir/client_secret.json"
            warn "Could not fetch from Secret Manager (auth, network, or missing secret)"
          fi
        fi
        if [[ ! -f "$gws_dir/client_secret.json" ]]; then
          warn "Missing $gws_dir/client_secret.json"
          warn "Options:"
          warn "  1. Authenticate gcloud against the GWS bootstrap project and rerun setup:"
          warn "       gcloud auth login && gcloud config set project $gws_bootstrap_project"
          warn "  2. Copy the OAuth client JSON manually to $gws_dir/client_secret.json"
          warn "Press Enter once one of the above is done."
          read -r
          if [[ ! -f "$gws_dir/client_secret.json" ]]; then
            error "Still missing $gws_dir/client_secret.json -- skipping $gws_profile"
            continue
          fi
        fi
      fi
      if GOOGLE_WORKSPACE_CLI_CONFIG_DIR="$gws_dir" gws auth login; then
        SUMMARY+=("gws: $gws_profile profile authenticated")
      else
        error "gws auth login failed for $gws_profile"
      fi
    done
  fi

  # Claude Code (multi-profile)
  if command -v claude &>/dev/null; then
    if [[ ! -d "$HOME/.claude-home" ]]; then
      info "Bootstrapping Claude Code profile dirs..."
      if bash "$DIR/bin/claude-profiles-init.sh"; then
        SUMMARY+=("Claude Code profile dirs bootstrapped")
      else
        warn "claude-profiles-init.sh failed"
      fi
    else
      info "Claude Code profile dirs already present (~/.claude-home)"
    fi
    info "Per-profile auth: cd into each profile's territory and run \`claude\` once."
    info "Claude Code stores credentials per CLAUDE_CONFIG_DIR natively (Keychain"
    info "service \"Claude Code-credentials-<hash>\"). Sign in as the right account."
  fi

  # YNAB personal access token, Keychain-backed for the ynab MCP server. The
  # canonical copy lives in the BitWarden "YNAB" entry (PAT field); the login
  # Keychain is the operational store (service ynab-token, per the vault naming
  # convention) that the bin/claude wrapper reads at launch and injects as
  # YNAB_ACCESS_TOKEN, which Claude Code expands into the ynab MCP
  # placeholder. -s read keeps the pasted token off the terminal.
  if security find-generic-password -a "$USER" -s ynab-token -w &>/dev/null && [[ "$FORCE" != true ]]; then
    info "YNAB token already in Keychain"
  else
    read -rsp "  ${BOLD}Paste YNAB personal access token (from BitWarden, blank to skip):${NC} " ynab_pat
    echo
    if [[ -n "$ynab_pat" ]]; then
      if security add-generic-password -U -a "$USER" -s ynab-token -w "$ynab_pat"; then
        SUMMARY+=("YNAB token stored in Keychain")
      else
        warn "Failed to store YNAB token in Keychain"
      fi
      unset ynab_pat
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
run_phase setup_ruby
run_phase install_npm_globals
run_phase setup_agent_browser
run_phase deploy_homebase
run_phase link_tracked_configs
run_phase install_launchagents
run_phase install_ide_extensions
run_phase install_claude_plugins
run_phase install_mcp_servers
run_phase configure_repo
run_phase setup_auth
print_summary
