# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

Homebase is a personal development environment repository for managing shell configurations, aliases, functions, Claude Code skills/plugins, and development tooling across different systems.

## Installation

Run `./setup.sh` to install homebase to the home directory. The script will:

- Copy all configuration files from this repository to `$HOME`
- Exclude repo tooling (setup.sh, README.md, .git, .github, .gitignore, .markdownlint.jsonc, .markdownlint-cli2.jsonc, brew)
- Install brew packages, Node, npm globals, IDE extensions, and Claude plugins
- Set up authentication (GitHub CLI, SSH, Google Cloud, gws)

## Key Shell Configurations

### Primary Configuration Files

- `.bashrc` - Main bash configuration (sources aliases and functions)
- `.zshrc` - Zsh configuration
- `.profile` - General shell profile
- `.bash_profile` - Bash-specific profile
- `.aliases` - Command aliases
- `.functions` - Shell functions
- `.gitconfig` - Git configuration with extensive aliases

### Development Environment

- `.vimrc` - Vim editor configuration
- `.screenrc` - GNU Screen configuration
- `.vscode/settings.json` - VS Code settings (Ruby-focused with Rubocop integration)

## Common Commands and Aliases

### Git Shortcuts (from .gitconfig)

- `git wip` - Quick work-in-progress commit for current branch
- `git cob` - Uses `bin/checkout-branch.sh` to checkout branches by number
- `git lg` - Pretty formatted git log with graph
- `git aa` - Add all changes (`git add -A`)
- `git cm` - Commit with message (`git commit -m`)

### Development Aliases (from .aliases)

- `cb`, `cr`, `ct` - Cargo build, run, test
- `rc`, `rs`, `rk` - Rails console, server, sidekiq
- `ed-aliases`, `ed-functions` - Edit aliases and functions files
- Docker management: `docker-clean`, `docker-stop`, `docker-clean-all`
- Screen management: `scr`, `sls`, `sra`, `skill`, `sw`

### Useful Functions (from .functions)

- `findg [-p] <pattern> <grep_pattern>` - Find files by pattern and grep content
- `grn <pattern>` - Grep recursively in current directory
- `u [n]` - Go up n directories (default 1)
- `psag [-k] <pattern>` - Grep processes (with optional kill)
- `known-hosts <add|find|remove|show> [host]` - SSH known_hosts management
- `log [-p] <executable>` - Run executable and log output with timestamp
- `numf [-a] [directory]` - Count files in directory

## Project Structure

```text
.
├── .aliases          # Command aliases
├── .functions        # Shell functions
├── .bashrc          # Main bash config
├── .zshrc           # Zsh configuration
├── .gitconfig       # Git aliases and settings
├── .vimrc           # Vim configuration
├── .vscode/         # VS Code settings
├── .claude/         # Claude Code skills, commands, and settings
├── bin/             # Custom scripts
│   └── checkout-branch.sh  # Git branch checkout by number
└── setup.sh         # Installation and setup script
```

## Development Workflow

1. Edit files in this repository
2. Test changes locally
3. Run `./setup.sh` to deploy to home directory
4. Make changes in `$HOME` as needed
5. Run `sync-dots` to pull changes back from `$HOME` to repository
6. Use `git wip` for quick commits during development
7. For Ruby projects: Rubocop integration is enabled in VS Code settings

### Syncing

Use `sync-dots` to pull changes from your home directory back to this repository:

- `sync-dots` - Sync all tracked files from `$HOME` to repository
- `sync-dots -d` - Dry run to see what would be synced without making changes

The sync function handles both files and directories automatically and includes: .aliases, .bashrc, .functions, .gitconfig, .vimrc, .vscode/, .claude/, bin/, and more.

## Custom Git Branch Checkout

The `git cob` alias uses `bin/checkout-branch.sh` to checkout branches by their numerical position from `git branch` output. Usage: `git cob <number>`
