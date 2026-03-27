#!/bin/bash

EXCLUDED=($(basename $0) README.md .git .gitignore brew)
echo -n "Do you want to install dotfiles to '$HOME'? [Y/n] "
read INSTALL
if [[ "$INSTALL" == "y" || "$INSTALL" == "Y" ]]; then
    DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
    echo "Installing dotfiles from $DIR ..."
    rsync_opts=('-a')
    for item in "${EXCLUDED[@]}"; do
        rsync_opts+=(--exclude="$item")
    done
    rsync "${rsync_opts[@]}" "$DIR/" "$HOME/"
    source $HOME/.bashrc
    echo "dotfiles installed!"

    # Install IDE extensions from canonical list (skip already installed)
    EXTENSIONS_FILE="$DIR/.vscode/extensions.txt"
    if [ -f "$EXTENSIONS_FILE" ]; then
        for CLI in code cursor; do
            if command -v $CLI &> /dev/null; then
                INSTALLED=$($CLI --list-extensions 2>/dev/null | tr '[:upper:]' '[:lower:]')
                declare -A exts_to_install
                while IFS= read -r ext || [ -n "$ext" ]; do
                    [ -z "$ext" ] && continue
                    exts_to_install["${ext,,}"]="$ext"
                done < "$EXTENSIONS_FILE"
                total_exts=${#exts_to_install[@]}

                while IFS= read -r installed_ext; do
                    unset 'exts_to_install[$installed_ext]'
                done <<< "$INSTALLED"

                MISSING=("${exts_to_install[@]}")

                if [ ${#MISSING[@]} -eq 0 ]; then
                    echo "$CLI extensions: all $total_exts already installed."
                else
                    for ext in "${MISSING[@]}"; do
                        $CLI --install-extension "$ext" --force 2>/dev/null
                    done
                    echo "$CLI extensions: ${#MISSING[@]} installed."
                fi
            else
                echo "$CLI not found, skipping extension install."
            fi
        done
    fi

    # Install Claude Code plugins from settings
    SOURCES_FILE="$HOME/.claude/plugins/marketplace-sources.txt"
    SETTINGS_FILE="$HOME/.claude/settings.json"
    if command -v claude &> /dev/null && [ -f "$SETTINGS_FILE" ] && [ -f "$SOURCES_FILE" ]; then
        echo "Setting up Claude Code plugins..."

        # Ensure known_marketplaces.json exists for marketplace add
        [ -f "$HOME/.claude/plugins/known_marketplaces.json" ] || echo '{}' > "$HOME/.claude/plugins/known_marketplaces.json"

        # Add marketplaces from source list
        while IFS= read -r source || [ -n "$source" ]; do
            [ -z "$source" ] && continue
            echo "  Adding marketplace: $source"
            claude plugin marketplace add "$source" 2>/dev/null
        done < "$SOURCES_FILE"

        # Install enabled plugins (skip already installed)
        INSTALLED_PLUGINS=$(claude plugin list 2>/dev/null)
        declare -A installed_plugin_set
        while IFS= read -r p; do [ -n "$p" ] && installed_plugin_set["$p"]=1; done <<< "$INSTALLED_PLUGINS"

        python3 -c "
import json
with open('$SETTINGS_FILE') as f:
    d = json.load(f)
for k, v in d.get('enabledPlugins', {}).items():
    if v:
        print(k)
" | while read -r plugin; do
            PLUGIN_NAME=${plugin%@*}
            if [[ -v installed_plugin_set["$PLUGIN_NAME"] ]]; then
                echo "  Already installed: $plugin"
            else
                echo "  Installing plugin: $plugin"
                claude plugin install "$plugin" 2>/dev/null
            fi
        done

        echo "Claude Code plugins installed!"
    else
        echo "Claude Code not found or missing config, skipping plugin install."
    fi
else
    echo "Unable to install dotfiles."
fi
