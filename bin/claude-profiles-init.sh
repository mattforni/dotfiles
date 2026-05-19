#!/usr/bin/env bash
# Bootstrap ~/.claude-zero/ and ~/.claude-home/ from the legacy ~/.claude/.
#
# Splits sessions/memory by project path: entries under Eudaimonia/Craft/
# Development/zero go to zero; other Eudaimonia entries go to home; everything
# else goes to zero (ambient on this machine). Copies user-level settings into
# both profiles. Symlinks the shared homebase surface (skills, commands,
# references, local-skills, statusline, project CLAUDE.md) into both.
#
# Idempotent: re-running on already-split dirs is a no-op for the parts that
# survive (it never overwrites an existing entry).

set -euo pipefail

LEGACY="$HOME/.claude"
ZERO="$HOME/.claude-zero"
HOME_PROFILE="$HOME/.claude-home"
# Resolve HOMEBASE_CLAUDE from this script's physical location so the script
# works whether invoked directly from homebase/bin or via the $HOME/bin
# symlink. `cd -P` forces physical resolution, following the symlink.
SCRIPT_DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HOMEBASE_CLAUDE="$(dirname "$SCRIPT_DIR")/.claude"

for d in "$ZERO" "$HOME_PROFILE"; do
    mkdir -p "$d"/{projects,sessions,plugins,hooks}
done

# Per-profile settings: copy from legacy if not already present.
for d in "$ZERO" "$HOME_PROFILE"; do
    for f in settings.json settings.local.json; do
        [[ -f "$d/$f" ]] && continue
        [[ -f "$LEGACY/$f" ]] && cp -a "$LEGACY/$f" "$d/$f"
    done
done

# Symlinks back to homebase (shared surface).
for d in "$ZERO" "$HOME_PROFILE"; do
    for item in skills commands references local-skills statusline.sh CLAUDE.md; do
        target="$HOMEBASE_CLAUDE/$item"
        link="$d/$item"
        if [[ -e "$target" ]] && [[ ! -e "$link" ]] && [[ ! -L "$link" ]]; then
            ln -s "$target" "$link"
        fi
    done
done

# Migrate ~/.claude/projects/ by path. Project entries are named after the
# absolute path with `/` replaced by `-`, so we derive the same encoding
# from $HOME rather than hardcoding the username.
HOME_PATTERN="${HOME//\//-}"
if [[ -d "$LEGACY/projects" ]]; then
    for entry in "$LEGACY/projects"/*; do
        [[ -d "$entry" ]] || continue
        name=$(basename "$entry")
        case "$name" in
            "${HOME_PATTERN}-Eudaimonia-Craft-Development-zero"*)
                dest="$ZERO/projects/$name" ;;
            "${HOME_PATTERN}-Eudaimonia"*)
                dest="$HOME_PROFILE/projects/$name" ;;
            *)
                dest="$ZERO/projects/$name" ;;
        esac
        if [[ ! -e "$dest" ]]; then
            mv "$entry" "$dest"
        fi
    done
fi

# Sessions: copy to zero only (short-lived; OK to start fresh on home).
if [[ -d "$LEGACY/sessions" ]] && [[ ! -e "$ZERO/sessions/.migrated" ]]; then
    cp -a "$LEGACY/sessions"/. "$ZERO/sessions/" 2>/dev/null || true
    touch "$ZERO/sessions/.migrated"
fi

echo "Done. ~/.claude-zero/ and ~/.claude-home/ ready."
echo "Next: populate Keychain entries if missing:"
echo "  security add-generic-password -a \$USER -s claude-code-oauth-zero -w '<token>' -U"
echo "  security add-generic-password -a \$USER -s claude-code-oauth-home -w '<token>' -U"
