#!/bin/bash

if [ ! -z `which playonlinux` ]; then
  echo "Play on linux is already installed."
  exit 0
fi

wget -q "http://deb.playonlinux.com/public.gpg" -O- | sudo apt-key add -
sudo wget http://deb.playonlinux.com/playonlinux_precise.list -O /etc/apt/sources.list.d/playonlinux.list
sudo apt-get update
sudo apt-get install playonlinux
echo "Play on linux has been installed."

