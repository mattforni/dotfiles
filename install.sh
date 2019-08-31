#!/bin/bash

EXCLUDED=($(basename $0) README.md .git .gitignore)
echo -n "Install productivity tools to '$HOME'? [Y/n] "
read INSTALL
if [[ "$INSTALL" == "y" || "$INSTALL" == "Y" ]]; then
    DIR=$(pwd)
    echo "Copying files from $DIR ..."
    cp -r $DIR/. $HOME
    for ITEM in ${EXCLUDED[@]}; do
        rm -rf $HOME/$ITEM
    done
    source $HOME/.bashrc
    echo "Productivity tools installed!"
else
    echo "Productivity tools not installed."
fi

