#!/bin/bash

INSTALL_PATH="/usr/NX/bin/nxserver"

if [ -e $INSTALL_PATH ]; then
  echo "NX Server is already installed."
  exit 0
fi

BIN_LINK_PATH="/usr/bin/nxserver"

echo "Installing NX Server."
sudo apt-get install nxserver
ln -s $INSTALL_PATH $BIN_LINK_PATH

echo "NX Server has been installed."

