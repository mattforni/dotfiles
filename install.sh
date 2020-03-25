#!/bin/bash

EXCLUDED=($(basename $0) README.md .git .gitignore)
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
else
    echo "Unable to install dotfiles."
fi

