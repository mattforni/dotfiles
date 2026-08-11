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
DRY_RUN=false

usage() {
  cat <<'USAGE'
Usage: ./setup.sh [-f|--force] [-n|--dry-run]

  -f, --force     Reinstall or refresh even where something looks up to date
  -n, --dry-run   Print every change the home reconciliation would make,
                  removals included, and touch nothing
  -h, --help      This message
USAGE
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    -f|--force) FORCE=true; shift ;;
    -n|--dry-run) DRY_RUN=true; shift ;;
    -h|--help) usage; exit 0 ;;
    *) usage >&2; exit 1 ;;
  esac
done

# Detect interactive terminal (auth prompts require one)
INTERACTIVE=true
[[ ! -t 0 ]] && INTERACTIVE=false

# The deploy table, the legacy cleanup list and the manifest path live in
# bin/lib/deploy-table.sh so bin/claude-profiles-init.sh can share them rather
# than keeping its own copy, which is how the lists drifted apart before.
#
# Unlike bin/claude, which must still launch Claude Code if its library is
# unreadable, setup.sh has nothing to do without this one: every phase that
# touches $HOME reads from it. Failing loudly is the correct degraded behaviour.
DEPLOY_TABLE_LIB="$DIR/bin/lib/deploy-table.sh"
if [[ ! -r "$DEPLOY_TABLE_LIB" ]]; then
  printf 'setup.sh: cannot read %s; there is nothing to deploy without it\n' "$DEPLOY_TABLE_LIB" >&2
  exit 1
fi
# shellcheck source=bin/lib/deploy-table.sh
. "$DEPLOY_TABLE_LIB"

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
    # Every flag has to be forwarded by hand here. A new flag that is not added
    # to this list is silently dropped on the first run of a fresh machine,
    # which is the run where it matters most.
    local reexec_args=("$0")
    [[ "$FORCE" == true ]] && reexec_args+=("--force")
    [[ "$DRY_RUN" == true ]] && reexec_args+=("--dry-run")
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

###############################################################################
# Home reconciliation
#
# Converge $HOME on what DEPLOY_TABLE declares, and remove what homebase used to
# deploy and no longer does. The record at $MANIFEST is what makes removal
# possible at all: without it the script cannot tell a path it placed from one
# it never touched, which is why the old rsync could only ever add.
#
# Nothing is removed unless provenance checks out. setup_auth writes SSH keys
# and gws credentials into $HOME that cannot be regenerated without a terminal,
# so "only touch what we put there" is load bearing rather than defensive.
###############################################################################

dry() { printf "${YELLOW}[dry]${NC} %s\n" "$1"; }

# Byte equality against the repo source. Used for the copy to symlink migration,
# where the question is whether replacing a real file loses anything.
same_content() {
  if [[ -d "$1" ]]; then
    diff -rq "$1" "$2" >/dev/null 2>&1
  else
    cmp -s "$1" "$2"
  fi
}

# Has homebase ever tracked this path? The right question for pruning, because
# a copy left behind by an older run is expected to be STALE, not identical:
# ~/plugins still carries sdlc/skills/groom, deleted when it became groom-issues.
# Byte equality would refuse to clean exactly the paths most in need of it.
# A file homebase never tracked means something else owns the directory, so
# refuse. Consulting git history rather than the working tree is what lets this
# recognise files the repo has since deleted.
path_is_ours() {
  local home_path="$1" repo_rel="$2"
  local history
  history=$(git -C "$DIR" log --all --pretty=format: --name-only -- "$repo_rel" 2>/dev/null | sed '/^$/d' | sort -u)
  [[ -n "$history" ]] || return 1

  if [[ -L "$home_path" || -f "$home_path" ]]; then
    grep -qxF "$repo_rel" <<<"$history"
    return
  fi

  local f
  while IFS= read -r f; do
    grep -qxF "$repo_rel/$f" <<<"$history" || return 1
  done < <(cd "$home_path" && find . \( -type f -o -type l \) | sed 's|^\./||')
  return 0
}

deploy_link() {
  local src="$1" dst="$2" rel="$3"

  if [[ -L "$dst" ]]; then
    local current
    current=$(readlink "$dst")
    [[ "$current" == "$src" ]] && return 0
    if [[ "$DRY_RUN" == true ]]; then dry "relink $rel (currently -> $current)"; return 0; fi
    rm "$dst" || return 1
  elif [[ -e "$dst" ]]; then
    # Promoting a path from copy to symlink on a machine that already has the
    # copy. Two ways to establish that replacing it loses nothing you authored.
    #
    # Byte equality is the obvious one, and the fast path. But it is too strict
    # on its own: a copy left by an older run is expected to be STALE, and byte
    # equality refuses exactly the paths most in need of promotion. ~/.claude/
    # agents had three drifted files and was missing planner.md entirely.
    #
    # So fall back to provenance. If every file under the path is one homebase
    # has tracked at some point, the copy is homebase's own stale output and
    # only staleness is lost. A single file homebase never tracked means
    # something else owns the directory, and then we refuse exactly as before.
    if same_content "$src" "$dst"; then
      if [[ "$DRY_RUN" == true ]]; then dry "migrate $rel from copy to symlink"; return 0; fi
      rm -rf "$dst" || return 1
    elif path_is_ours "$dst" "$rel"; then
      if [[ "$DRY_RUN" == true ]]; then dry "migrate $rel from STALE copy to symlink"; return 0; fi
      rm -rf "$dst" || return 1
      warn "$rel was a stale copy; replaced with a symlink into the repo"
    else
      warn "$rel is a real file or directory at $dst holding files homebase never tracked"
      warn "  refusing to replace it. Diff it, then move or delete it and re run setup.sh"
      return 1
    fi
  else
    if [[ "$DRY_RUN" == true ]]; then dry "link $rel"; return 0; fi
  fi

  mkdir -p "$(dirname "$dst")" || return 1
  ln -s "$src" "$dst" || return 1
  info "linked $rel"
}

deploy_copy() {
  local src="$1" dst="$2" rel="$3"

  if [[ -f "$dst" ]] && cmp -s "$src" "$dst"; then return 0; fi
  if [[ "$DRY_RUN" == true ]]; then dry "copy $rel"; return 0; fi

  mkdir -p "$(dirname "$dst")" || return 1
  cp "$src" "$dst" || return 1
  info "copied $rel"
}

# Merge the repo's top level keys into the destination, leaving keys the repo
# does not declare untouched. Exit 3 means the destination already matches.
deploy_merge() {
  local src="$1" dst="$2" rel="$3"
  local rc=0

  DRY_RUN="$DRY_RUN" python3 - "$src" "$dst" <<'PY' || rc=$?
import json, os, sys

src, dst = sys.argv[1], sys.argv[2]
dry = os.environ.get("DRY_RUN") == "true"

with open(src) as f:
    repo = json.load(f)

current = {}
if os.path.exists(dst):
    with open(dst) as f:
        text = f.read().strip()
    if text:
        try:
            current = json.loads(text)
        except json.JSONDecodeError as exc:
            sys.stderr.write(f"destination is not valid JSON ({exc}); refusing to merge\n")
            sys.exit(2)

# Repo keys win; everything else the app wrote for itself survives.
merged = dict(current)
merged.update(repo)
if merged == current:
    sys.exit(3)

if dry:
    added = sorted(k for k in repo if k not in current)
    changed = sorted(k for k in repo if k in current and current[k] != repo[k])
    kept = sorted(k for k in current if k not in repo)
    sys.stderr.write(f"add={added} update={changed} untouched={kept}\n")
    sys.exit(4)

os.makedirs(os.path.dirname(dst), exist_ok=True)
with open(dst, "w") as f:
    json.dump(merged, f, indent=2)
    f.write("\n")
PY

  case "$rc" in
    0) info "merged $rel" ;;
    3) return 0 ;;
    4) dry "merge $rel" ;;
    *) error "failed to merge $rel into $dst"; return 1 ;;
  esac
}

# Remove what a previous run deployed and this one does not, plus the one time
# legacy list. Both go through path_is_ours; anything that fails it is left
# alone with a warning rather than removed.
prune_path() {
  local dst="$1" repo_rel="$2" why="$3"

  if [[ -L "$dst" ]]; then
    local target
    target=$(readlink "$dst")
    if [[ "$target" != "$DIR"/* ]]; then
      warn "$dst is a symlink to $target, outside homebase; leaving it alone"
      return 0
    fi
  elif ! path_is_ours "$dst" "$repo_rel"; then
    warn "$dst holds files homebase has never tracked; leaving it alone"
    warn "  remove it by hand if you are sure"
    return 0
  fi

  if [[ "$DRY_RUN" == true ]]; then dry "REMOVE $dst ($why)"; return 0; fi
  rm -rf "$dst" || return 1
  info "removed $dst ($why)"
}

reconcile_home() {
  header "Home"

  # Never point $HOME at a worktree. Symlinks would resolve into a checkout that
  # disappears the moment the branch is merged and the worktree removed, leaving
  # a dangling ~/.zshrc and no working shell. Deploy from the primary checkout.
  local git_dir
  git_dir=$(git -C "$DIR" rev-parse --git-dir 2>/dev/null || true)
  if [[ "$git_dir" == *"/worktrees/"* ]]; then
    if [[ "$DRY_RUN" == true ]]; then
      warn "Running from a git worktree. A real run would refuse; showing the plan anyway."
      warn "  Symlink sources below point at the worktree, not the primary checkout."
    else
      error "Refusing to reconcile \$HOME from a git worktree ($DIR)"
      error "  Symlinks would break when the worktree is removed. Run from the primary checkout."
      return 1
    fi
  fi

  local failed=0
  local -a current=()
  local first_run=false
  [[ -f "$MANIFEST" ]] || first_run=true

  for entry in "${DEPLOY_TABLE[@]}"; do
    local mode="${entry%%|*}"
    local rest="${entry#*|}"
    local rel="${rest%%|*}"
    local dst
    if [[ "$rest" == *"|"* ]]; then
      dst="${rest#*|}"
    else
      dst="$HOME/$rel"
    fi
    local src="$DIR/$rel"

    if [[ ! -e "$src" ]]; then
      warn "$rel is in the deploy table but missing from the repo, skipping"
      failed=1
      continue
    fi

    case "$mode" in
      link)  deploy_link  "$src" "$dst" "$rel" || failed=1 ;;
      copy)  deploy_copy  "$src" "$dst" "$rel" || failed=1 ;;
      merge) deploy_merge "$src" "$dst" "$rel" || failed=1 ;;
      *)     error "unknown deploy mode '$mode' for $rel"; failed=1; continue ;;
    esac
    current+=("$mode	$rel	$dst")
  done

  # Prune anything the last run deployed that this one does not.
  if [[ "$first_run" == true ]]; then
    info "No previous deployment record; seeding one. Nothing pruned from it this run."
  else
    local mode rel dst
    while IFS=$'\t' read -r mode rel dst; do
      [[ -n "$dst" ]] || continue
      printf '%s\n' "${current[@]}" | grep -qxF "$mode	$rel	$dst" && continue
      [[ -e "$dst" || -L "$dst" ]] || continue
      if [[ "$mode" == "merge" ]]; then
        warn "$dst is no longer managed; leaving it in place since the app owns the file"
        continue
      fi
      prune_path "$dst" "$rel" "no longer deployed" || failed=1
    done < "$MANIFEST"
  fi

  prune_legacy || failed=1

  # Record what this run deployed, so the next one can diff against it.
  if [[ "$DRY_RUN" != true ]]; then
    mkdir -p "$(dirname "$MANIFEST")" || return 1
    printf '%s\n' "${current[@]}" > "$MANIFEST" || return 1
  fi

  [[ $failed -eq 0 ]] || return 1
  SUMMARY+=("Home reconciled (${#current[@]} paths)")
}

prune_legacy() {
  local failed=0
  local rel dst
  for rel in "${LEGACY_PATHS[@]}"; do
    dst="$HOME/$rel"
    [[ -e "$dst" || -L "$dst" ]] || continue

    # An empty directory carries no data and no provenance to check.
    if [[ -d "$dst" && ! -L "$dst" && -z "$(ls -A "$dst")" ]]; then
      if [[ "$DRY_RUN" == true ]]; then dry "REMOVE $dst (empty, left by an older run)"; continue; fi
      rmdir "$dst" && info "removed $dst (empty)"
      continue
    fi

    prune_path "$dst" "$rel" "rsynced by an older setup.sh, no longer deployed" || failed=1
  done
  return $failed
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

  local extensions_file="$DIR/ide/extensions.txt"
  [[ -f "$extensions_file" ]] || return 0

  # Antigravity is the only IDE. VS Code and Cursor were dropped 2026-08-11;
  # their casks came out of the Brewfile and the applications were uninstalled
  # by hand. The antigravity-ide cask puts the CLI on PATH under two names, and
  # they are the same binary, so take the first that resolves rather than
  # looping over both and installing everything twice.
  local cli=""
  local candidate
  for candidate in antigravity-ide agy-ide; do
    if command -v "$candidate" &>/dev/null; then
      cli="$candidate"
      break
    fi
  done

  if [[ -z "$cli" ]]; then
    warn "Antigravity CLI not on PATH, skipping extensions"
    warn "  the antigravity-ide cask installs it; a hand-installed app does not"
    return 0
  fi

  local installed
  installed=$("$cli" --list-extensions 2>/dev/null | tr '[:upper:]' '[:lower:]')

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

  # Anything installed that the curated list does not name. Reported rather than
  # removed: an extension you added deliberately should get added to the list,
  # and one you no longer want should be dropped from the editor.
  local extra=()
  while IFS= read -r ext; do
    [[ -n "$ext" ]] || continue
    grep -qix "$ext" "$extensions_file" || extra+=("$ext")
  done <<< "$installed"
  if [[ ${#extra[@]} -gt 0 ]]; then
    warn "installed but not in ide/extensions.txt: ${extra[*]}"
  fi

  if [[ ${#missing[@]} -eq 0 ]]; then
    info "all $total extensions installed"
    return 0
  fi

  local installed_count=0
  for ext in "${missing[@]}"; do
    local output
    if output=$("$cli" --install-extension "$ext" --force 2>&1); then
      ((installed_count++))
    else
      # Surface why. A silent "failed to install" gives you nothing to act on,
      # and the usual causes (extension delisted, not available for this editor,
      # network) are all distinguishable from the CLI's own output.
      warn "failed to install $ext: ${output//$'\n'/ }"
    fi
  done
  info "$installed_count/${#missing[@]} extensions installed"
  SUMMARY+=("$installed_count/${#missing[@]} IDE extensions installed")
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
  local desired_command="@coderabbitai review"
  local current
  current="$(git -C "$DIR" config --get sdlc.review-command 2>/dev/null || true)"
  if [[ "$current" == "$desired_command" ]]; then
    info "sdlc.review-command already set to '$desired_command'"
  else
    git -C "$DIR" config sdlc.review-command "$desired_command" || return 1
    info "sdlc.review-command set to '$desired_command'"
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

# Only dispatch when executed. Sourcing the script defines the phases without
# running them, which is how bin/lint/reconcile-test exercises reconcile_home
# against a scratch $HOME.
if [[ "${BASH_SOURCE[0]}" == "$0" ]]; then
  if [[ "$DRY_RUN" == true ]]; then
    # A dry run is about $HOME: show every create, replace and delete the
    # reconciler would make, and do nothing else. The install phases are skipped
    # outright rather than simulated, because brew, npm and rbenv have no dry
    # run worth trusting and "touch nothing" has to mean it.
    warn "Dry run: installing nothing. Home changes only."
    run_phase reconcile_home
  else
    run_phase setup_prerequisites
    run_phase install_brew_packages
    run_phase setup_node
    run_phase setup_ruby
    run_phase install_npm_globals
    run_phase setup_agent_browser
    run_phase reconcile_home
    run_phase install_launchagents
    run_phase install_ide_extensions
    run_phase install_claude_plugins
    run_phase install_mcp_servers
    run_phase configure_repo
    run_phase setup_auth
  fi
  print_summary
fi
