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
# Walks up the directory tree from PWD looking for .env.local
# Falls back to global ~/.env.local if no local file is found
if type find_and_source_env &>/dev/null; then
    find_and_source_env
fi

# Always source global .env.local for tokens and secrets
[[ -f ~/.env.local ]] && source ~/.env.local

directories=("/usr/local/opt/postgresql@15/bin", "$HOME/bin")
for directory in "${directories[@]}"; do
  if [[ -s "${directory}" ]] && [[ ":$PATH:" != *":${directory}:"* ]]; then
    export PATH="${PATH}:${directory}"
  fi
done

export EDITOR=vim
eval "$(fzf --zsh)"

# Load RVM into a shell session *as a function*
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"

# Add RVM to PATH for scripting
export PATH="$PATH:$HOME/.rvm/bin"

# Enable RVM to automatically use Ruby version from .ruby-version files
cd . # Trigger RVM auto-switch on shell start
export PATH="$HOME/.local/bin:$PATH"

# Prepend $HOME/bin so homebase wrappers (e.g., `claude`) intercept the
# real binaries that other installers (Anthropic's claude, etc.) drop into
# $HOME/.local/bin. Appending in the earlier loop is not enough because
# .local/bin gets prepended above.
export PATH="$HOME/bin:$PATH"

# bun completions
[ -s "$HOME/.bun/_bun" ] && source "$HOME/.bun/_bun"

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
