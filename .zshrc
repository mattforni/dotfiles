# ~/.zshrc: executed by zsh(1) for non-login shells.

source ~/.zsh/history.zsh

alias ed-zsh="vim ~/.zshrc"
alias src-zsh="source ~/.zshrc"
alias sendit="cp -R ~/.aliases \
  ~/.bashrc \
  ~/.bash_profile \
  ~/.functions \
  ~/.gitconfig \
  ~/.profile \
  ~/.screenrc \
  ~/.vim \
  ~/.vimrc \
  ~/.zsh \
  ~/.zshrc \
  ~/install.sh \
  ~/Development/dotfiles"

# Include any alias definitions which have been abstracted into
# their own file to keep this file lean and mean.
alias_file=~/.aliases
if [ -f $alias_file ]; then
    . $alias_file
fi

# Include any function definitions which have been abstracted into
# their own file to keep this file lean and mean.
function_file=~/.functions
if [ -f $function_file ]; then
    . $function_file
fi

# Include any local definitions which have been abstracted into
# their own file to keep this file lean and mean.
local_file=~/.local
if [ -f $local_file ]; then
    . $local_file
fi

directories=("/usr/local/opt/postgresql@15/bin")
for directory in "${directories[@]}"; do
  if [[ -s "${directory}" ]] && [[ ":$PATH:" != *":${directory}:"* ]]; then
    export PATH="${PATH}:${directory}"
  fi
done

