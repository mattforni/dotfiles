---
paths:
  - ".zshrc"
  - ".aliases"
  - ".functions"
  - ".gitconfig"
---

# Shell Configuration

Loaded when a shell rc file, the aliases, the functions, or the git config is read. The inventories below are derivable from the files themselves and live here rather than in every session.

## Primary Configuration Files

- `.zshrc` - Zsh configuration, and the only shell rc file. It sources `.aliases` and `.functions`
- `.aliases` - Command aliases
- `.functions` - Shell functions
- `.gitconfig` - Git configuration with extensive aliases

**There is no bash configuration, deliberately.** The login shell is zsh, and
`.bashrc`, `.bash_profile`, `.profile` and `.bashrc.go` were removed 2026-08-11.
They were dead: `.bashrc` was a stock Debian skeleton whose Linux-specific body
(`debian_chroot`, `lesspipe`, `dircolors`, `notify-send`, `/etc/bash_completion`)
is inert on macOS, and it sourced `~/.bashrc.aliases`, `~/.bashrc.functions` and
`~/.bashrc.local`, none of which have ever existed, so it would not have loaded
your aliases or functions even if bash ran. `.profile` is not read by zsh at all,
and its only unique content started postgres and redis, which already run as
persistent brew services. `.bashrc.go` was sourced by nothing and pointed
`GOROOT` at the Intel homebrew path.

Headless and non-interactive shells are unaffected, since `.bashrc` returned
early on a non-interactive prompt anyway. If bash config is ever wanted again,
write it fresh for macOS rather than restoring the skeleton.

## Git Shortcuts (from .gitconfig)

- `git wip` - Quick work-in-progress commit for current branch
- `git cob` - Uses `bin/checkout-branch.sh` to checkout branches by number
- `git lg` - Pretty formatted git log with graph
- `git aa` - Add all changes (`git add -A`)
- `git cm` - Commit with message (`git commit -m`)

## Development Aliases (from .aliases)

- `cb`, `cr`, `ct` - Cargo build, run, test
- `rc`, `rs`, `rk` - Rails console, server, sidekiq
- `ed-aliases`, `ed-functions` - Edit aliases and functions files
- Docker management: `docker-clean`, `docker-stop`, `docker-clean-all`
- Screen management: `scr`, `sls`, `sra`, `skill`, `sw`

## Useful Functions (from .functions)

- `findg [-p] <pattern> <grep_pattern>` - Find files by pattern and grep content
- `grn <pattern>` - Grep recursively in current directory
- `u [n]` - Go up n directories (default 1)
- `psag [-k] <pattern>` - Grep processes (with optional kill)
- `known-hosts <add|find|remove|show> [host]` - SSH known_hosts management
- `log [-p] <executable>` - Run executable and log output with timestamp
- `numf [-a] [directory]` - Count files in directory
