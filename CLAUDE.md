# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

Homebase is a personal development environment repository for managing shell configurations, aliases, functions, Claude Code skills/plugins, and development tooling across different systems.

## Plugin Versioning

**Every change to anything inside `plugins/<plugin>/...` requires a version bump in two places before the change merges.** Skill prose, scripts, configs, hooks, command definitions, the plugin.json itself, anything inside a plugin directory. Without a version bump, the marketplace cannot tell "you have the old skill" from "you have the new skill," and updates silently fail to propagate.

Bump both, and keep them in sync:

- `plugins/<plugin>/plugin.json`: `version` field
- `.claude-plugin/marketplace.json`: `version` field for the matching plugin entry (must equal the plugin.json value)

Use semver:

- **Patch** (`2.2.1` to `2.2.2`): behavioral tweaks, bug fixes, prose updates, hardening, rule additions inside a skill body.
- **Minor** (`2.2.1` to `2.3.0`): new skill, new command, new hook, new public surface area.
- **Major** (`2.2.1` to `3.0.0`): breaking change to a skill's contract, argument shape, or removed surface.

**Renaming a skill is always a major bump.** A rename removes the old invocation surface (`assist:oldname` stops resolving), so it is a breaking change by definition regardless of how much the body changed. Renaming also has a blast radius beyond the version fields: the skill directory, its `name:` frontmatter, the `skills` array entry in `marketplace.json`, and every cross-reference in other skills or docs (`grep` for the old `assist:<name>`) must all move together in the same change.

Top-level repo files (`CLAUDE.md`, `README.md`, `.gitconfig`, `.aliases`, etc.) do **not** trigger a plugin version bump because they live outside any plugin directory.

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

### Account Profiles (gws + Claude Code)

Both the `gws` CLI and Claude Code switch identity per directory subtree via a shared `.account` marker file (one-line text containing the profile name). Only the `home` profile is active today; the `zero` profile retired with the Zero Homes W2 (2026-06-29), and the machinery below remains for future multi-account needs. Active profile is layered:

1. **Ambient** — recorded in `~/.config/gws-current` and exported as `GOOGLE_WORKSPACE_CLI_CONFIG_DIR` at shell startup. Persists across shells.
2. **Directory override** — a zsh `chpwd` hook walks up from `$PWD` looking for the nearest `.account` marker file and silently swaps the env var for that shell. The `~/bin/claude` wrapper reads the same marker at launch time to pick the Claude Code config dir.
3. **Pin** — `gws-pin` disables the chpwd hook in the current shell.

| Command | Effect |
|---------|--------|
| `gws-use` | List profiles; show current |
| `gws-use <profile>` | Set ambient profile (persists across shells; also unpins) |
| `gws-pin` | Lock to current profile in this shell |
| `gws-unpin` | Resume chpwd hook |
| `gws-whoami` | Show profile, config dir, and `gws auth status` |
| `GOOGLE_WORKSPACE_CLI_CONFIG_DIR=~/.config/gws-home gws ...` | One shot override |

**Claude Code:** `~/bin/claude` is a wrapper that exports `CLAUDE_CONFIG_DIR=~/.claude-<profile>/` and exec's the real binary. Claude Code stores OAuth credentials per CLAUDE_CONFIG_DIR natively in a `Claude Code-credentials-<hash>` Keychain entry, so the wrapper doesn't need to inject a token; setting the config dir is enough. Per-profile dirs are bootstrapped by `bin/claude-profiles-init.sh` (invoked from setup.sh); each profile needs a one time `claude` login from inside its directory to seed its Keychain credential.

OAuth `client_secret.json` files for gws sync across machines via GCP Secret Manager under `gws-oauth-client-<profile>` (vault project: `atelic`, override via `GWS_BOOTSTRAP_PROJECT`). `setup.sh` fetches automatically when a profile dir is missing one. Use `bin/gws/push-secrets` once on the source machine to seed the secrets. Encrypted tokens stay per-machine by design. The full credential vault conventions (naming, push tooling, the credential inventory) live in `~/Eudaimonia/Admin/tools/secret-manager.md`.

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

## Path Conventions

**Never hard-code a username in tracked config or documentation.** Homebase deploys to multiple machines, and absolute paths like `/Users/mattforni/...` or `/Users/forni/...` break on every machine that does not match. Use `$HOME` (preferred for shell scripts and JSON config) or `~` (preferred for markdown documentation and shell aliases) so the same content works everywhere.

Applies to: `.claude/settings.json` permissions and marketplace paths, skill SKILL.md files, shell rc files, any markdown that references a path. If a tool reads the value literally and does not expand `$HOME` or `~`, surface that as a setup.sh templating gap rather than working around it with a hard-coded username.

## setup.sh Phase Conventions

`setup.sh` is split into phases like `setup_prerequisites`, `install_brew_packages`, `deploy_homebase`, and `setup_auth`. The `setup_auth` phase short circuits early when `INTERACTIVE != true`, because OAuth flows and `read -rp` prompts require a TTY.

**Bootstrap operations must NOT live inside `setup_auth`.** File moves, directory creation, marker file seeding, and other no-TTY-required scaffolding belong in their own phases that run regardless of interactivity. If they sit inside `setup_auth`, a non-interactive run (Claude Code background session, headless launchd, CI) will silently skip them along with the auth prompts.

**Pattern to follow when adding new tooling to setup.sh:**

- Split the work into a bootstrap step (file ops, idempotent, runs always) and an auth step (interactive prompts, runs only when `INTERACTIVE == true`).
- The bootstrap step goes in its own phase function (e.g., `bootstrap_claude_profiles`) or inside an existing non-auth phase.
- The auth step goes inside `setup_auth`, gated by the existing `INTERACTIVE` check.

**Why it matters:** Codified 2026-05-19. The Claude Code profile-dir bootstrap initially shipped inside `setup_auth`, which meant a non-interactive `./setup.sh` invocation (the way it runs from inside a Claude Code background session) skipped the entire block. The profile dirs never got created until manually invoking `bin/claude-profiles-init.sh` by hand.

### Adding HTTP MCP Entries to `install_mcp_servers`

The desired array supports both stdio and http transports. For http entries that carry an `Authorization: Bearer ${SOME_TOKEN:-}` header, two non-obvious traps apply. Both are documented in `~/Eudaimonia/Admin/tools/claude-code.md`:

- `claude mcp add --header` is variadic, so positionals must precede the flag or the CLI eats them as additional headers.
- Registering with an empty token bakes a broken auth header that the `Already registered` short circuit silently preserves on later runs. Guard with a `[[ -z "${SOME_TOKEN:-}" ]]` skip before the loop body, matching the atelic guard.

## Code Review Bots

**CodeRabbit is the sole review bot on `mattforni/homebase`** (as of 2026-07-17). Gemini Code Assist also reviewed here until that date, when Google sunset the consumer GitHub app; its final review landed on PR #130 the same day, and `/gemini review` triggers in older notes are historical. Google's paid Gemini Code Assist tiers are a separate product and are not in use. CodeRabbit posts a `coderabbitai` check suite and a `CodeRabbit` commit status within seconds of a PR opening, so it is detectable before it reviews. After addressing its feedback and pushing fixes, the "Changes requested" status stays stale until it re-reviews; if all comments are addressed, dismiss the stale review via `gh api -X PUT repos/{owner}/{repo}/pulls/{pr}/reviews/{review_id}/dismissals -f message="All changes addressed"` or in the GitHub UI. It does not re-review on a bare push; trigger it with `@coderabbitai review`. Triage guidance lives in GC's Code Review section.

**Do not wait on CodeRabbit when it is in its rate-limit cooldown.** CodeRabbit enforces a per-developer PR review limit; when hit, it posts a "Review limit reached" comment with a cooldown (often ~30 to 40 minutes) in place of a real review, and its `CodeRabbit` commit status can still read "Review completed" even though no review ran. Treat a cooldown as no review available, not as pending feedback. When landing (`sdlc:land`), bypass it: proceed on CI, any other available review, and your own read rather than blocking on the cooldown window. Paying for usage-based reviews to skip the wait is the user's call, never assumed.

**Two CodeRabbit house standards live in [`coderabbit/`](coderabbit/README.md).** Chill (low noise) for client-facing sites like the `atelic-action` repos, assertive (thorough) for your own code and tooling. homebase is public, so those canonical files can be referenced from any repo via `remote_config`, or copied in for portability. homebase's own root `.coderabbit.yaml` is the assertive canonical. The CLI (`coderabbit`, Brewfile cask) runs local reviews before a PR. See the folder README for the apply methods, Free-tier notes, and the biome pre-commit-hook gotcha.

## Development Workflow

1. Edit files in this repository
2. Test changes locally
3. Run `./setup.sh` to deploy to home directory
4. Make changes in `$HOME` as needed
5. Run `sync-dots` to pull changes back from `$HOME` to repository
6. Use `git wip` for quick commits during development
7. For Ruby projects: Rubocop integration is enabled in VS Code settings

### Landing Changes: Decide Together

**Do not unilaterally pick between direct-to-main and PR workflow on this repo.** Both patterns appear in the log (some commits land direct, some through PRs), and Forni prefers to make the call each time rather than have it picked for him. After staging a change, pause and ask which path to take — even for small changes. The friction of asking is low; the cost of an unwanted push to main is higher than it looks.

### Syncing

Use `sync-dots` to pull changes from your home directory back to this repository:

- `sync-dots` - Sync all tracked files from `$HOME` to repository
- `sync-dots -d` - Dry run to see what would be synced without making changes

The sync function handles both files and directories automatically and includes: .aliases, .bashrc, .functions, .gitconfig, .vimrc, .vscode/, .claude/, bin/, and more.

## Custom Git Branch Checkout

The `git cob` alias uses `bin/checkout-branch.sh` to checkout branches by their numerical position from `git branch` output. Usage: `git cob <number>`

## bin/ Script Conventions

New scripts live in a namespace folder named for their tool or domain, with verb noun filenames: `bin/vault/push-secrets`, `bin/gws/push-secrets`. Because `~/bin` is a single symlink to the repo's `bin/`, nested folders deploy with no extra plumbing. Legacy flat scripts (`checkout-branch.sh`, `sync-marketplaces`) migrate into namespaces opportunistically when next touched.
