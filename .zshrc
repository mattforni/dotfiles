# ~/.zshrc: executed by zsh(1) for non-login shells.

## Configure the history file
# Set all zsh(1) session to append to history instead of overwriting
setopt APPEND_HISTORY
# When appending a command to the history remove all previous instances from the history
setopt HIST_IGNORE_ALL_DUPS
# Remove command lines from the history list when the first character on the line is a space
setopt HIST_IGNORE_SPACE
# Remove superfluous blanks from each command line being added to the history list
setopt HIST_REDUCE_BLANKS
# Save 1000 lines to the history
SAVEHIST=1000

# Include any alias definitions which have been abstracted into
# their own file to keep this file lean and mean.
ALIAS_FILE=~/.bashrc.aliases
if [ -f $ALIAS_FILE ]; then
    . $ALIAS_FILE
fi

# Include any function definitions which have been abstracted into
# their own file to keep this file lean and mean.
FUNCTION_FILE=~/.bashrc.functions
if [ -f $FUNCTION_FILE ]; then
    . $FUNCTION_FILE
fi

# Include any local definitions which have been abstracted into
# their own file to keep this file lean and mean.
LOCAL_FILE=~/.bashrc.local
if [ -f $LOCAL_FILE ]; then
    . $LOCAL_FILE
fi

