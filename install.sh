#!/bin/bash


HOME=$(readlink -f ~)
echo -n "Install productivity tools to '$HOME'? [Y/n] "
read INSTALL
if [[ "$INSTALL" == "y" || "$INSTALL" == "Y" ]]; then
    CURR_DIRECTORY=$(dirname `readlink -f $0`)
    cp -r $CURR_DIRECTORY/* $HOME
    rm -f $HOME/$(basename $0)
    source $HOME/.bashrc
    echo "Productivity tools installed!"
else
    echo "Productivity tools not installed."
fi

