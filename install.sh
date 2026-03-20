#!/bin/bash

EXCLUDED=($(basename $0) README.md .git .gitignore brew)
echo -n "Do you want to install dotfiles to '$HOME'? [Y/n] "
read INSTALL
if [[ "$INSTALL" == "y" || "$INSTALL" == "Y" ]]; then
    DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
    echo "Installing dotfiles from $DIR ..."
    cp -r $DIR/. $HOME
    for ITEM in ${EXCLUDED[@]}; do
        rm -rf $HOME/$ITEM
    done
    source $HOME/.bashrc
    echo "dotfiles installed!"

    # Install IDE extensions from canonical list
    EXTENSIONS_FILE="$DIR/.vscode/extensions.txt"
    if [ -f "$EXTENSIONS_FILE" ]; then
        for CLI in code cursor; do
            if command -v $CLI &> /dev/null; then
                echo "Installing extensions for $CLI..."
                while IFS= read -r ext || [ -n "$ext" ]; do
                    [ -z "$ext" ] && continue
                    $CLI --install-extension "$ext" --force 2>/dev/null
                done < "$EXTENSIONS_FILE"
                echo "$CLI extensions installed!"
            else
                echo "$CLI not found, skipping extension install."
            fi
        done
    fi
else
    echo "Unable to install dotfiles."
fi

