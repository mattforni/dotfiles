#!/bin/bash

echo "Enter author name for git"
read name
echo -e "Enter email address for git"
read email
echo -e "Do you want to use password caching? [Y/n]"
read use_caching

git config --global --replace-all user.name "$name"
echo -e "\nGit username set to '`git config --get user.name`'"

git config --global --replace-all user.email "$email"
echo "Git email set to '`git config --get user.email`'"

# TODO git config --global credential.helper cache
# TODO git config --global credential.helper 'cache --timeout=<num_secs>'

