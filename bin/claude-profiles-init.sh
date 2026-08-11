#!/usr/bin/env bash
# Bootstrap the per-account Claude profile dirs from the legacy ~/.claude/.
#
# Moves ~/.claude/projects/ entries into the home profile, copies user-level
# settings, and symlinks the shared homebase surface (skills, commands,
# references, local-skills, statusline, project CLAUDE.md) into each profile.
# Active profiles: home (personal) and tpf (The Product Forge, added
# 2026-08-06). The zero profile retired with the Zero W2, 2026-06-29.
#
# Idempotent: re-running on already-split dirs is a no-op for the parts that
# survive (it never overwrites an existing entry).

set -euo pipefail

LEGACY="$HOME/.claude"
HOME_PROFILE="$HOME/.claude-home"
TPF_PROFILE="$HOME/.claude-tpf"
PROFILES=("$HOME_PROFILE" "$TPF_PROFILE")
# Resolve HOMEBASE_CLAUDE from this script's physical location so the script
# works whether invoked directly from homebase/bin or via the $HOME/bin
# symlink. `cd -P` forces physical resolution, following the symlink.
SCRIPT_DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HOMEBASE_CLAUDE="$(dirname "$SCRIPT_DIR")/.claude"

# Which .claude entries to mirror comes from the shared deploy table rather than
# a list kept here. The local copy had already drifted: it named skills,
# commands, references, local-skills, statusline.sh and CLAUDE.md, and had never
# gained agents, hooks or workflows.
DEPLOY_TABLE_LIB="$SCRIPT_DIR/lib/deploy-table.sh"
if [[ ! -r "$DEPLOY_TABLE_LIB" ]]; then
  echo "claude-profiles-init: cannot read $DEPLOY_TABLE_LIB" >&2
  exit 1
fi
# shellcheck source=lib/deploy-table.sh
. "$DEPLOY_TABLE_LIB"

for d in "${PROFILES[@]}"; do
    mkdir -p "$d"/{projects,sessions,plugins,hooks}
done

# Per-profile settings: copy from legacy if not already present.
for d in "${PROFILES[@]}"; do
    for f in settings.json settings.local.json; do
        [[ -f "$d/$f" ]] && continue
        [[ -f "$LEGACY/$f" ]] && cp -a "$LEGACY/$f" "$d/$f"
    done
done

# Symlinks back to homebase (shared surface).
mapfile -t CLAUDE_LINKS < <(deploy_table_claude_links)
for d in "${PROFILES[@]}"; do
    for item in "${CLAUDE_LINKS[@]}"; do
        target="$HOMEBASE_CLAUDE/$item"
        link="$d/$item"
        if [[ -e "$target" ]] && [[ ! -e "$link" ]] && [[ ! -L "$link" ]]; then
            ln -s "$target" "$link"
        fi
    done
done

# Migrate ~/.claude/projects/ into the home profile. Project entries are named
# after the absolute path with `/` replaced by `-`, so we derive the same
# encoding from $HOME rather than hardcoding the username.
if [[ -d "$LEGACY/projects" ]]; then
    for entry in "$LEGACY/projects"/*; do
        [[ -d "$entry" ]] || continue
        name=$(basename "$entry")
        dest="$HOME_PROFILE/projects/$name"
        if [[ ! -e "$dest" ]]; then
            mv "$entry" "$dest"
        fi
    done
fi

# Sessions: copy to the home profile. No-clobber so a retry never overwrites
# entries already in the profile; mark migrated only on a successful copy so
# a failed run retries instead of silently losing sessions.
if [[ -d "$LEGACY/sessions" ]] && [[ ! -e "$HOME_PROFILE/sessions/.migrated" ]]; then
    if cp -an "$LEGACY/sessions"/. "$HOME_PROFILE/sessions/"; then
        touch "$HOME_PROFILE/sessions/.migrated"
    else
        echo "warn: session copy failed; will retry on next run" >&2
    fi
fi

echo "Done. ~/.claude-home/ ready."
echo "Next: cd into the profile's territory and run \`claude\` once."
echo "Claude Code will open an OAuth browser flow and store the resulting"
echo "credential under a per-CLAUDE_CONFIG_DIR Keychain entry. Each profile"
echo "needs its own login (sign in as the right Anthropic account)."
