#!/bin/bash

## TODO this needs a lot of work to be usable

EXCLUDED=($(basename $0) README.md .git .gitignore)
echo -n "Install productivity tools to '$HOME'? [Y/n] "
read INSTALL
if [[ "$INSTALL" == "y" || "$INSTALL" == "Y" ]]; then
    CURR_DIRECTORY=$(dirname `readlink -f $0`)
    cp -r $CURR_DIRECTORY/. $HOME
    for ITEM in ${EXCLUDED[@]}; do
        rm -rf $HOME/$ITEM
    done
    source $HOME/.bashrc
    echo "Productivity tools installed!"
else
    echo "Productivity tools not installed."
fi

