#!/bin/bash

VIM_DIR=~/.vim 
NERDTREE_URL=https://github.com/scrooloose/nerdtree/archive/master.zip
NERDTREE_ZIP=nerdtree.zip

# First check to see if the ~/.vim directory exists.
echo -n "Checking if '$VIM_DIR' exists ... "

# If the directory DNE attempt to create it.
if [ -d "$VIM_DIR" ]; then
  echo "yes."
else
  echo "no."
  echo -n "Attempting to create '$VIM_DIR' ... "
  mkdir -p "$VIM_DIR"
  # If unable to create the directory abort.
  if [ $? -ne 0 ]; then
    echo "failed."
    echo "Aboring."
  else
    echo "succeeded."
  fi
fi

cd "$VIM_DIR"
echo "Retrieving nerdtree from '$NERDTREE_URL'"
# TODO check to see if nerdtree zip exists
wget -O "$NERDTREE_ZIP" "$NERDTREE_URL" 
# TODO unzip and merge the files, then remove zip
#unzip "$NERDTREE_ZIP" 

