# ~/.zshrc: executed by zsh(1) for non-login shells.

source ~/.zsh/history.zsh

alias edit-zshrc="vim ~/.zshrc"
alias src-zshrc="source ~/.zshrc"

# Include any alias definitions which have been abstracted into
# their own file to keep this file lean and mean.
ALIAS_FILE=~/.aliases
if [ -f $ALIAS_FILE ]; then
    . $ALIAS_FILE
fi

# Include any function definitions which have been abstracted into
# their own file to keep this file lean and mean.
FUNCTION_FILE=~/.functions
if [ -f $FUNCTION_FILE ]; then
    . $FUNCTION_FILE
fi

# Include any local definitions which have been abstracted into
# their own file to keep this file lean and mean.
LOCAL_FILE=~/.local
if [ -f $LOCAL_FILE ]; then
    . $LOCAL_FILE
fi

