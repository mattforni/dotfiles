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

**Bump against origin/main, never against the local checkout.** A stale checkout carries an old version, and a bump computed from it silently regresses the marketplace: users on the newer version see nothing to update, and skill changes stop propagating with no error anywhere. (Observed 2026-08-04: a commit from a stale checkout took assist from 8.0.11 back to 8.0.7; the regression rode main until the next merge restored the lineage.) Before choosing the next version, fetch and read the current one from origin/main (`git show origin/main:<path to plugin.json>`), and treat any version that moves backward in a diff as a review red flag.

Top-level repo files (`CLAUDE.md`, `README.md`, `.gitconfig`, `.aliases`, etc.) do **not** trigger a plugin version bump because they live outside any plugin directory.

## Installation

Run `./setup.sh` to install homebase to the home directory. The script will:

- Reconcile `$HOME` against the deploy table, creating what is missing, fixing what is wrong, and removing what homebase used to deploy and no longer does. Repo tooling is never deployed. See [How Homebase Reaches `$HOME`](#how-homebase-reaches-home)
- Install brew packages, runtimes via mise, npm globals, IDE extensions, and Claude plugins
- Set up authentication (GitHub CLI, SSH, Google Cloud, gws)

Run `./setup.sh --dry-run` first to see every change it would make to `$HOME`,
removals included, without installing anything.

## Key Shell Configurations

### Primary Configuration Files

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

### Development Environment

- `.vimrc` - Vim editor configuration
- `.screenrc` - GNU Screen configuration
- `ide/settings.json` - Antigravity user settings, deployed to `~/Library/Application Support/Antigravity IDE/User/settings.json`
- `ide/extensions.txt` - Curated extension list, read out of the repo by `setup.sh` and never deployed to `$HOME`

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

Both the `gws` CLI and Claude Code switch identity per directory subtree via a shared `.account` marker file (one-line text containing the profile name). Two profiles are active: `home` (personal, `mattforni@gmail.com`, the ambient default) and `tpf` (The Product Forge, `matt@theproductforge.com`, added 2026-08-06; its marker sits at the TPF Vocation subtree). The `zero` profile retired with the Zero Homes W2 (2026-06-29). Active profile is layered:

1. **Ambient**: recorded in `~/.config/gws-current` and exported as `GOOGLE_WORKSPACE_CLI_CONFIG_DIR` at shell startup. Persists across shells.
2. **Directory override**: a zsh `chpwd` hook walks up from `$PWD` looking for the nearest `.account` marker file and silently swaps the env var for that shell. Convenience only; it fires solely in interactive zsh, and only on an actual directory change.
3. **Invocation time shim (authoritative)**: `~/bin/gws` re-resolves the marker on every single call and exports the config dir before exec'ing the real binary. This is the layer that actually guarantees the right account, because it does not care how the process was started. `~/bin/claude` does the equivalent for `CLAUDE_CONFIG_DIR` at launch.
4. **Pin**: `gws-pin` sets `GWS_AUTO_SWITCH=0`, honored by both the hook and the shim, which then pass through untouched.

**How The One Shot Override Survives The Shim.** A shim that re-resolves on every call would normally stomp a deliberate `GOOGLE_WORKSPACE_CLI_CONFIG_DIR=... gws ...`, since it cannot see the difference between a value you meant and one that leaked in from a parent process. Every resolver therefore stamps `GWS_RESOLVED_DIR` with the config dir it set. A config dir equal to the stamp was inherited, so the shim re-resolves it; one that differs was set on purpose, so the shim honors it and passes through. The stamp has to be present for that to apply: a shell that never ran a resolver has no stamp, which is exactly the case this shim exists to correct, so an unstamped config dir counts as inherited rather than intentional. In stamp free contexts (launchd, cron, a raw `sh -c`), `GWS_AUTO_SWITCH=0` is the way to force a specific account.

**Why the shim exists, and why layers 1 and 2 are not enough.** Both of the first two layers resolve at shell startup, and every non interactive caller skips that moment. Claude Code is the sharpest case: it captures a shell snapshot once per session and replays it for every tool call. The snapshot preserves function definitions but drops top level calls, so the `__gws_resolve_profile` invocation at the bottom of `.functions` never runs. `chpwd` never fires either, because the shell starts already sitting in the target directory instead of changing into it. Both fallbacks fail together, and the agent shell silently inherits whatever profile the launching terminal had while a perfectly good `.account` marker sits one directory away, unread. The same hole applies to launchd jobs, cron, CI, and any `sh -c` caller. Diagnosed 2026-08-07 after a session in the TPF subtree reported `mattforni@gmail.com` instead of `matt@theproductforge.com`. `gws` has no `--config-dir` flag, so the environment variable is the only lever, which is what makes a PATH shim the right shape.

| Command | Effect |
|---------|--------|
| `gws-use` | List profiles; show current |
| `gws-use <profile>` | Set ambient profile (persists across shells; also unpins) |
| `gws-pin` | Lock to current profile in this shell |
| `gws-unpin` | Resume chpwd hook |
| `gws-whoami` | Re-resolve from `$PWD`, then show profile, config dir, and `gws auth status` |
| `GOOGLE_WORKSPACE_CLI_CONFIG_DIR=~/.config/gws-home gws ...` | One shot override |

**Claude Code:** `~/bin/claude` is a wrapper that exports `CLAUDE_CONFIG_DIR=~/.claude-<profile>/` and exec's the real binary. Claude Code stores OAuth credentials per CLAUDE_CONFIG_DIR natively in a `Claude Code-credentials-<hash>` Keychain entry, so the wrapper doesn't need to inject a token; setting the config dir is enough. Per-profile dirs are bootstrapped by `bin/claude-profiles-init.sh` (invoked from setup.sh); each profile needs a one time `claude` login from inside its directory to seed its Keychain credential.

OAuth `client_secret.json` files for gws sync across machines via GCP Secret Manager under `gws-oauth-client-<profile>` (vault project: `atelic`, override via `GWS_BOOTSTRAP_PROJECT`). `setup.sh` fetches automatically when a profile dir is missing one. Use `bin/vault/push-gws-secrets` once on the source machine to seed the secrets. Encrypted tokens stay per-machine by design. The full credential vault conventions (naming, push tooling, the credential inventory) live in `~/Eudaimonia/Admin/Tools/secret-manager.md`.

## Project Structure

```text
.
├── .aliases          # Command aliases
├── .functions        # Shell functions
├── .zshrc           # Zsh configuration (the only shell rc)
├── .gitconfig       # Git aliases and settings
├── .vimrc           # Vim configuration
├── ide/             # Antigravity settings + curated extension list
├── mise/            # Runtime version pins (node, ruby)
├── .claude/         # Claude Code skills, commands, and settings
├── bin/             # Custom scripts
│   ├── lib/         #   Shared, sourced rather than duplicated
│   │   └── deploy-table.sh  # What gets deployed to $HOME, and how
│   └── lint/        #   shell + reconciler checks, run by CI and pre-commit
├── .githooks/       # Tracked git hooks; activate with core.hooksPath
└── setup.sh         # Installation and setup script
```

## Path Conventions

**Never hard-code a username in tracked config or documentation.** Homebase deploys to multiple machines, and absolute paths like `/Users/mattforni/...` or `/Users/forni/...` break on every machine that does not match. Use `$HOME` (preferred for shell scripts and JSON config) or `~` (preferred for markdown documentation and shell aliases) so the same content works everywhere.

Applies to: `.claude/settings.json` permissions and marketplace paths, skill SKILL.md files, shell rc files, any markdown that references a path. If a tool reads the value literally and does not expand `$HOME` or `~`, surface that as a setup.sh templating gap rather than working around it with a hard-coded username.

## setup.sh Phase Conventions

`setup.sh` is split into phases like `setup_prerequisites`, `install_brew_packages`, `reconcile_home`, and `setup_auth`. The `setup_auth` phase short circuits early when `INTERACTIVE != true`, because OAuth flows and `read -rp` prompts require a TTY.

**Phase order is load bearing in three places.** `reconcile_home` deploys
`mise/config.toml`, which `setup_runtimes` reads. `setup_runtimes` puts node on
`PATH`, which `install_npm_globals` needs. And `reconcile_home` deploys the
`.claude` tree that `install_claude_plugins` and `install_mcp_servers` read back
out of `$HOME`.

**Bootstrap operations must NOT live inside `setup_auth`.** File moves, directory creation, marker file seeding, and other no-TTY-required scaffolding belong in their own phases that run regardless of interactivity. If they sit inside `setup_auth`, a non-interactive run (Claude Code background session, headless launchd, CI) will silently skip them along with the auth prompts.

**Pattern to follow when adding new tooling to setup.sh:**

- Split the work into a bootstrap step (file ops, idempotent, runs always) and an auth step (interactive prompts, runs only when `INTERACTIVE == true`).
- The bootstrap step goes in its own phase function (e.g., `bootstrap_claude_profiles`) or inside an existing non-auth phase.
- The auth step goes inside `setup_auth`, gated by the existing `INTERACTIVE` check.

**Why it matters:** Codified 2026-05-19. The Claude Code profile-dir bootstrap initially shipped inside `setup_auth`, which meant a non-interactive `./setup.sh` invocation (the way it runs from inside a Claude Code background session) skipped the entire block. The profile dirs never got created until manually invoking `bin/claude-profiles-init.sh` by hand.

### Adding HTTP MCP Entries to `install_mcp_servers`

The desired array supports both stdio and http transports. For http entries that carry an `Authorization: Bearer ${SOME_TOKEN:-}` header, two non-obvious traps apply. Both are documented in `~/Eudaimonia/Admin/Tools/claude-code.md`:

- `claude mcp add --header` is variadic, so positionals must precede the flag or the CLI eats them as additional headers.
- Registering with an empty token bakes a broken auth header that the `Already registered` short circuit silently preserves on later runs. Guard with a `[[ -z "${SOME_TOKEN:-}" ]]` skip before the loop body, matching the atelic guard.

## Code Review Bots

**CodeRabbit is the sole review bot on `mattforni/homebase`** (as of 2026-07-17). Gemini Code Assist also reviewed here until that date, when Google sunset the consumer GitHub app; its final review landed on PR #130 the same day, and `/gemini review` triggers in older notes are historical. Google's paid Gemini Code Assist tiers are a separate product and are not in use. CodeRabbit posts a `coderabbitai` check suite and a `CodeRabbit` commit status within seconds of a PR opening, so it is detectable before it reviews. After addressing its feedback and pushing fixes, the "Changes requested" status stays stale until it re-reviews; if all comments are addressed, dismiss the stale review via `gh api -X PUT repos/{owner}/{repo}/pulls/{pr}/reviews/{review_id}/dismissals -f message="All changes addressed"` or in the GitHub UI. It does not re-review on a bare push; trigger it with `@coderabbitai review`. Triage guidance lives in GC's Code Review section.

**Do not wait on CodeRabbit when it is in its rate-limit cooldown.** CodeRabbit enforces a per-developer PR review limit; when hit, it posts a "Review limit reached" comment with a cooldown (often ~30 to 40 minutes) in place of a real review, and its `CodeRabbit` commit status can still read "Review completed" even though no review ran. Treat a cooldown as no review available, not as pending feedback. When landing (`sdlc:land`), bypass it: proceed on CI, any other available review, and your own read rather than blocking on the cooldown window. Paying for usage-based reviews to skip the wait is the user's call, never assumed.

**Two CodeRabbit house standards live in [`coderabbit/`](coderabbit/README.md).** Chill (low noise) for client-facing sites like the `atelic-action` repos, assertive (thorough) for your own code and tooling. homebase is public, so those canonical files can be referenced from any repo via `remote_config`, or copied in for portability. homebase's own root `.coderabbit.yaml` is the assertive canonical. The CLI (`coderabbit`, Brewfile cask) runs local reviews before a PR. See the folder README for the apply methods, Free-tier notes, and the biome pre-commit-hook gotcha.

## Development Workflow

1. Edit files in this repository. Most configs are symlinked into `$HOME`, so the edit is already live
2. Test changes locally
3. Run `./setup.sh` when the deploy table itself changed, or to pick up brew, node and plugin updates
4. Use `git wip` for quick commits during development

There is no step for copying changes back out of `$HOME`. That was `sync-dots`,
and it retired when everything human-authored became a symlink.

### Landing Changes: Decide Together

**Do not unilaterally pick between direct-to-main and PR workflow on this repo.** Both patterns appear in the log (some commits land direct, some through PRs), and Forni prefers to make the call each time rather than have it picked for him. After staging a change, pause and ask which path to take — even for small changes. The friction of asking is low; the cost of an unwanted push to main is higher than it looks.

**A direct merge is linted only after the fact, so check `main` afterward.** The lint workflow fires on pull requests and on pushes to `main` alike (it has since the workflow shipped in #40), but nothing gates a direct push: a failing commit lands anyway, `main` goes red, and the breakage stays invisible until someone looks at the Actions run or the next PR inherits it and appears to have caused it. Observed 2026-08-07: `e2c36dcb` landed direct with two `MD034` bare URL errors, `main` sat red for hours, and the breakage surfaced on an unrelated PR whose own diff was clean. After any direct merge, run the relevant check locally (`npx markdownlint-cli2 "*.md"` for prose, the matching linter otherwise), or open the Actions tab and confirm the push's own run went green. When a PR reports a failure in a file it did not touch, suspect inherited breakage before debugging your own diff, and confirm with `git log` on the offending line.

### Linting

Two gates, both running the same scripts locally and in CI.

- **Markdown** — `npx markdownlint-cli2`. Globs live in both `.markdownlint-cli2.jsonc` and the workflow's `globs:` input, kept in sync. **Do not remove the workflow's `globs:` input.** The action's default is a single-asterisk `*.{md,markdown}` that matches only the repo root; without an explicit glob this job linted exactly two files from the day it shipped until 2026-08-11, while 94 findings accumulated behind it.
- **Shell** — `bin/lint/shell` runs shellcheck plus `bash -n` plus `zsh -n`, gated at warning severity so style noise does not train you into `--no-verify`. The `zsh -n` pass is the point: `.functions` must be zsh clean, and `bash -n` cannot see that class of bug.
- **Reconciler** — `bin/lint/reconcile-test` clones to a scratch path and exercises `reconcile_home` against a throwaway `$HOME`, asserting migration, refusal, pruning, merge behaviour and idempotence.

A tracked `.githooks/pre-commit` runs the first two on staged files. Activate it
once per clone:

```bash
git config core.hooksPath .githooks
```

**A comment whose first word is the analyzer's own name is parsed as a
directive**, whitespace-insensitively, and errors as SC1072 or SC1124. Lead
explanatory prose with something else. This bit three separate files while the
gate was being written, including the linter itself.

### How Homebase Reaches `$HOME`

`bin/lib/deploy-table.sh` is the single source of truth. `setup.sh` reconciles
`$HOME` against it: it creates what is missing, fixes what is wrong, and removes
what homebase used to deploy and no longer does. `bin/claude-profiles-init.sh`
sources the same table so the per-profile config dirs cannot drift from it.

Three deploy modes, chosen per path:

- **link** — symlink into the repo, so a `git pull` is live with no deploy step. Only for paths nothing but a human or git ever writes. **A tool that saves by writing a temp file and renaming over the target replaces the symlink with a regular file**; Claude Code ([#40857](https://github.com/anthropics/claude-code/issues/40857), closed as not planned), VS Code and macOS `sed -i` all do this, with no error. Never link a directory that receives foreign writes, which is why `~/.claude` is listed child by child.
- **copy** — a tracked file living inside a directory that receives foreign writes. Files only.
- **merge** — JSON merge by top-level key. Keys the repo declares are replaced whole; keys it does not are left alone, so Claude Code's `theme` and `effortLevel` and Antigravity's UI toggles survive every run. Because a declared key is replaced whole, dropping an entry from inside one (a permission out of `permissions.allow`) does reach `$HOME`. **Deleting an entire top-level key from the repo does not remove it downstream**: once undeclared it is indistinguishable from a key the app owns, so delete those by hand.

Removal is what the record at `~/.local/state/homebase/manifest` exists for.
Without it the script cannot tell a path it placed from one it never touched,
which is why the old rsync could only ever add. **Nothing is removed unless
provenance checks out**: every file under the path must be one homebase has
tracked at some point in git history. Staleness is expected and fine; a file
homebase never tracked means something else owns the directory, so it is left
alone with a warning. That guard matters because `setup_auth` writes SSH keys
and gws credentials into `$HOME` that cannot be regenerated without a terminal.

Inspect before committing to it:

```bash
./setup.sh --dry-run    # every create, replace and delete; installs nothing
```

`setup.sh` refuses to reconcile from a git worktree, since the symlinks would
resolve into a checkout that disappears when the branch merges.

## Custom Git Branch Checkout

The `git cob` alias uses `bin/checkout-branch.sh` to checkout branches by their numerical position from `git branch` output. Usage: `git cob <number>`

## bin/ Script Conventions

New scripts live in a namespace folder named for their tool or domain, with verb noun filenames: `bin/vault/push-secrets`, `bin/vault/push-gws-secrets`. Because `~/bin` is a single symlink to the repo's `bin/`, nested folders deploy with no extra plumbing. Legacy flat scripts (`checkout-branch.sh`, `sync-marketplaces`) migrate into namespaces opportunistically when next touched.

**Flat files are shims; directories are namespaces.** A shim shadows a real binary of the same name on PATH (`bin/claude`, `bin/gws`), so it has to be a flat executable sitting directly in `bin/` where PATH lookup finds it. Everything else goes in a namespace folder. The two collide the moment a tool needs both, and the shim wins the bare name: `bin/gws/push-secrets` moved to `bin/vault/push-gws-secrets` on 2026-08-07 to free `bin/gws` for the profile shim, which also consolidated the two secret pushers under one namespace. When adding a shim, check that `bin/<tool>` is not already a directory, and remember a directory is also `-x`, so any "find the real binary on PATH" loop needs a `! -d` guard or it will happily try to exec the folder.

**Shared logic lives in `bin/lib/`, sourced rather than duplicated.** `bin/lib/account-profile.sh` is the single implementation of `.account` marker parsing and profile resolution, sourced by `bin/claude`, `bin/gws`, and `.functions`. It exists because three copies drifted: a path traversal fix on 2026-08-07 had to be written three separate times and the `bin/claude` copy was missed twice before review caught it. Two rules when adding to `bin/lib/`:

- **A sourced library must never take the caller down.** `bin/claude` launches Claude Code itself, so it warns and falls back to the home profile when the library is unreadable rather than exiting. `bin/gws` passes through untouched. `.functions` leaves its resolver a no-op so the shell still starts. Guard every source with `[[ -r ... ]]` and define the degraded behavior explicitly.
- **Anything `.functions` sources must be zsh clean, not just bash clean.** Shims run under bash where `path` is an ordinary variable; `.functions` is read by zsh, where **`path` is special and tied to `$PATH` as an array**. A `local path=...` there silently clobbers command lookup for the rest of the function, so `tr` stops resolving and every marker reads as empty with the error swallowed by `2>/dev/null`. Avoid the zsh special names entirely: `path`, `status`, `prompt`, `cdpath`, `manpath`, `dirstack`, `argv`. Run `zsh -n` and an actual zsh resolution test, since `bash -n` cannot see this class of bug.
