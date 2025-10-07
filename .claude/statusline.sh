#!/bin/bash

# Read JSON input from stdin
input=$(cat)

# Extract Claude info
model_display=$(echo "$input" | jq -r '.model.display_name // "Claude"')
output_style=$(echo "$input" | jq -r '.output_style.name // "default"')
version=$(echo "$input" | jq -r '.version // "unknown"')

# ANSI color codes
BOLD='\033[1m'
RESET='\033[0m'
# Vibrant colors
CYAN='\033[96m'           # Bright cyan for Claude info
MAGENTA='\033[95m'        # Bright magenta for model
YELLOW='\033[93m'         # Bright yellow for version
GREEN='\033[92m'          # Bright green for clean status
RED='\033[91m'            # Bright red for dirty status
BLUE='\033[94m'           # Bright blue for branch
ORANGE='\033[38;5;208m'   # Orange for git stats
PURPLE='\033[38;5;141m'   # Purple for output style

# Git info (skip optional locks for performance)
if git rev-parse --git-dir > /dev/null 2>&1; then
    # Repository name
    repo=$(basename -s .git $(git config --get remote.origin.url 2>/dev/null) || echo "unknown")

    # Branch name
    branch=$(git branch --show-current 2>/dev/null || echo "detached")
    
    # Git status - check if working tree is clean
    if git diff-index --quiet HEAD -- 2>/dev/null; then
        status_symbol="${GREEN}✓${RESET}"
        status_text="${GREEN}clean${RESET}"
    else
        status_symbol="${RED}✗${RESET}"
        status_text="${RED}dirty${RESET}"
    fi
    
    # Additional git stats
    ahead=$(git rev-list --count @{u}..HEAD 2>/dev/null || echo "0")
    behind=$(git rev-list --count HEAD..@{u} 2>/dev/null || echo "0")
    
    # Staged/unstaged/untracked counts
    staged=$(git diff --cached --numstat 2>/dev/null | wc -l | tr -d ' ')
    unstaged=$(git diff --numstat 2>/dev/null | wc -l | tr -d ' ')
    untracked=$(git ls-files --others --exclude-standard 2>/dev/null | wc -l | tr -d ' ')
    
    # Build git info string
    git_info="${BLUE}${BOLD}${repo}:${branch}${RESET} ${status_symbol}"
    
    # Add sync status if ahead/behind
    if [ "$ahead" != "0" ] || [ "$behind" != "0" ]; then
        git_info="${git_info} ${ORANGE}"
        [ "$ahead" != "0" ] && git_info="${git_info}↑${ahead}"
        [ "$behind" != "0" ] && git_info="${git_info}↓${behind}"
        git_info="${git_info}${RESET}"
    fi
    
    # Add change counts if any
    if [ "$staged" != "0" ] || [ "$unstaged" != "0" ] || [ "$untracked" != "0" ]; then
        git_info="${git_info} ${ORANGE}("
        [ "$staged" != "0" ] && git_info="${git_info}+${staged}"
        [ "$unstaged" != "0" ] && git_info="${git_info} ~${unstaged}"
        [ "$untracked" != "0" ] && git_info="${git_info} ?${untracked}"
        git_info="${git_info})${RESET}"
    fi
else
    git_info="${RED}no git${RESET}"
fi

# Build Claude info string
claude_info="${MAGENTA}${BOLD}${model_display}${RESET}"
[ "$output_style" != "default" ] && claude_info="${claude_info} ${PURPLE}[${output_style}]${RESET}"
claude_info="${claude_info} ${YELLOW}v${version}${RESET}"

# Output the complete status line
printf "${CYAN}${BOLD}Claude${RESET} ${claude_info} ${CYAN}│${RESET} ${git_info}\n"
