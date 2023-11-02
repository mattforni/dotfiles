#!/usr/bin/env zsh

# Function to checkout a branch based on its numerical position from the 'git branch' command
function checkout_branch_by_number() {
    # Get the list of branches
    local branches=$(git branch | awk '{$1=$1};1')

    # Get the branch at the specified index
    local branch=$(echo "$branches" | sed -n "$1p")

    if [[ -z $branch ]]; then
        echo "No branch found at position $1"
        exit 1
    fi

    # Checkout the branch
    git checkout "$branch"
}

# Check if a number was passed as an argument
if [[ -z $1 || ! $1 =~ ^[0-9]+$ ]]; then
    echo "Usage: $0 <branch-number>"
    exit 1
fi

# Call the function with the specified number
checkout_branch_by_number "$1"
