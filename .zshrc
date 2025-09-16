# ~/.zshrc: executed by zsh(1) for non-login shells.

source ~/.zsh/history.zsh

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

# Load environment variables from .env.local if it exists
# Using set -a to export all variables automatically
env_file=~/.env.local
if [ -f $env_file ]; then
    set -a
    . $env_file
    set +a
fi

directories=("/usr/local/opt/postgresql@15/bin", "$HOME/bin")
for directory in "${directories[@]}"; do
  if [[ -s "${directory}" ]] && [[ ":$PATH:" != *":${directory}:"* ]]; then
    export PATH="${PATH}:${directory}"
  fi
done

export EDITOR=vim
eval "$(fzf --zsh)"

