---
name: mise
description: Morning prep sync for Forni's workstation. Pulls latest in ~/Eudaimonia and homebase, then runs homebase's setup.sh to deploy dotfiles and refresh brew, npm globals, IDE extensions, and Claude plugins. Use when Forni says "mise", "mise en place", or "prep the station".
allowed-tools:
  - Bash(git:*)
  - Bash(test:*)
  - Bash(date:*)
  - Bash(./setup.sh:*)
  - Bash(./bin/sync-marketplaces:*)
  - Read
  - Skill
---

# Mise

Morning prep. Get the station ready for the day's work.

Two repos, one setup script. The skill exists because Forni was running the same three commands by hand every morning: `git pull` in Eudy, `git pull` in homebase, `./setup.sh`. That is a routine, and routines should be automations.

## Before Every Invocation

1. Read this skill's local `learned-rules.md`. It overrides anything below.
2. Read the plugin-wide `../../learned-rules.md` for any cross-skill corrections that also apply.

## Repos

| Shorthand | Absolute path |
|---|---|
| Eudy | `$HOME/Eudaimonia` |
| Homebase | `$HOME/Eudaimonia/Craft/Development/personal/homebase` |

Both are git repos. Homebase contains the authoritative `setup.sh` that deploys configs and refreshes tooling.

## Workflow

### Step 0: Preflight

Refuse to run if either target repo is a linked worktree. A worktree signals in-progress work on an isolated branch; mise's branch logic would either fight that context or silently do the wrong thing. The check must be scoped to each target repo — the session's cwd can be anywhere, so a bare `git rev-parse` might miss a worktree on a repo mise is about to touch.

For each `$REPO` (Eudy and Homebase), detect via:

```bash
test "$(git -C "$REPO" rev-parse --git-dir 2>/dev/null)" = "$(git -C "$REPO" rev-parse --git-common-dir 2>/dev/null)"
```

If the two paths differ for either repo, that repo is a linked worktree. Abort with a short note telling Forni which repo is in a worktree and to `ExitWorktree` first.

### Step 1: Sync Eudy

Run the sync routine below against `$HOME/Eudaimonia`. See [Sync Routine](#sync-routine).

If sync produces a merge conflict, stop mise. Do not continue to homebase or setup.sh. Report the conflict so Forni can resolve it.

### Step 2: Sync Homebase

Run the same sync routine against `$HOME/Eudaimonia/Craft/Development/personal/homebase`.

Same conflict handling: stop on conflict, do not proceed to setup.sh.

### Step 3: Sync All Marketplace Clones

setup.sh installs Claude plugins from cached marketplace clones at `~/.claude/plugins/marketplaces/`, not from source repos directly. If any clone lags behind its remote, setup.sh installs stale plugin contents and recently merged skills do not appear after Claude Code restarts. Claude Code does not auto refresh these clones; mise owns keeping them current.

This sync is purely mechanical, so it lives in a committed script rather than in this prose. Run it by its deployed path, exactly as written, so it matches its allow rule:

```bash
~/bin/sync-marketplaces
```

The script iterates every clone, skips non git directories (`claude-plugins-official` is a flat manifest) and scratch `temp_*` clones, detects each clone's default branch, fast forwards it, and hard resets to the remote when a clone has drifted. It always exits 0 so one broken clone never blocks the rest, and it prints one status line per clone plus a final aggregate.

Parse its output for the summary. Each line is one of `PULLED`, `CURRENT`, `RESET`, `FAIL`, or `SKIP`. Fold the counts into the aggregate marketplace line, and call out by name any clone that reported `RESET` (drift recovered) or `FAIL` (could not sync) on its own line so a recovery or breakage stays unmissable. Clean `CURRENT`/`PULLED` clones roll into the aggregate without individual lines.

A `RESET` is safe and expected on occasion: these clones are caches, and anything unique to them is by definition ephemeral state or accidental drift, never real user work. A `FAIL` means setup.sh may install stale content for that one clone, but the rest install current.

Why this was extracted into a script: the headless run (`bin/run-mise`) pre-allows a tight tool list, and compound shell loops authored at runtime cannot match a single-prefix allowlist entry like `Bash(git:*)`. The old prose loops were denied on every headless run, which also widened the window for a transient API/socket drop. One allowlisted script call fixes both.

### Step 4: Run setup.sh

Run `~/Eudaimonia/Craft/Development/personal/homebase/setup.sh` by that path, exactly as written so it matches its allow rule, in the foreground so Forni sees output (setup.sh finds its own directory, so the cwd does not matter). If it exits non-zero, capture the tail of stderr and stop; do not retry. setup.sh is idempotent, so the right fix for a transient failure is usually to resolve the root cause and re-run mise, not to auto-retry.

### Step 5: Summary

One compact report:

- per repo (Eudy, Homebase): commits pulled, and whether local edits were autostashed and reapplied
- marketplaces: aggregate counts plus one line per clone that needed a reset (called out by name with the reason)
- setup.sh outcome

Keep it short. A handful of lines. If everything was already up to date and setup.sh short-circuited, say so in one line. Per marketplace status only shows up when something noteworthy happened (reset, failure) — clean pulls roll into the aggregate.

## Sync Routine

Given a repo path `$REPO`, written out as a literal path (never a variable) in every command:

**Through the gates.** Both targets are primary checkouts, where the worktree gate hook denies `stash`, `commit`, `checkout`, and `reset`, and the auto mode classifier refuses `WT_GATE_BYPASS=1`. So every command mise runs is one plain command whose first word matches an allow rule: `git -C <repo> ...` (the `Bash(git:*)` rule), `~/bin/sync-marketplaces`, and the setup.sh path. Never stash, never prefix the bypass, never chain commands with `&&`, and never wrap git in an inline loop. A refused command is a stop, reported as it stands.

### If on `main`

1. `git -C <repo> pull --ff-only --autostash origin main`. One command: `--autostash` sets aside any tracked edits and puts them back after the fast forward, and untracked files stay where they are. Neither needs a stash on the primary.
2. If the pull refuses (main diverged, an incoming file would overwrite an untracked one, or the autostash cannot reapply cleanly), stop mise and surface git's message in the summary. Do not resolve it, do not continue to the next repo, and do not run setup.sh, which would deploy a half merged tree into `$HOME`.

### If on any other branch

A primary checkout lives on main; a branch belongs in a worktree. Stop mise and name the repo and its branch, so Forni can move the work into a worktree and switch the primary back to main. Committing or switching branches on a primary is exactly what the gate denies.

## Why each edge case matters

- **Worktree abort:** In a worktree, the current session's cwd and branch are deliberately detached from main. Running mise here would either re-sync main in the parent checkout (leaving the worktree diverged) or silently pull the worktree's branch (surprising). Cleaner to refuse.
- **Autostash over a hand stash:** a dirty tree on main is almost always half finished editing. `--autostash` preserves it inside the one pull command, which the gate allows, where a separate `git stash` on a primary is denied.
- **Stop on a branch:** a primary checkout off main is work that belongs in a worktree. Mise used to commit WIP and merge main forward there, which needs a commit on a primary, and the gate denies that.
- **Stop on conflict:** Running setup.sh on a repo in a conflicted state would deploy half-merged config into `$HOME`. Better to stop.
- **Pull every marketplace clone:** Every clone under `~/.claude/plugins/marketplaces/` is the cache that backs its plugin installs. Skipping pulls means setup.sh installs prior versions of those plugins even when their source repos have newer ones. The first time this matters, Forni notices a freshly merged skill missing after restart; the rule prevents that. This includes external mirrors (superpowers, anthropic skills, etc.) — Claude Code does not auto refresh them.
- **Auto reset on drift instead of abort:** Marketplace clones are caches, not user work. When a clone has diverged from its remote (local merge artifact from a prior install, history rewrite upstream, etc.), the right move is `reset --hard origin/<default>` and log it. Aborting mise leaves the clone permanently stale and forces manual cleanup. The 2026-05-12 incident — `~/.claude/plugins/marketplaces/skillset` stuck 235 commits behind on a local merge SHA, sdlc:design running the v2.0.0 instructions with no `EnterWorktree` call — is exactly what this guards against. Log the reset loudly so Forni sees it happened.
- **Don't retry setup.sh:** Failures tend to be environmental (sudo, network, brew API). A blind retry masks the cause.

## Output Shape

```text
Mise complete ✓

Eudy (main): pulled, already up to date
Homebase (main): pulled 2 commits, local edits autostashed and reapplied
Marketplaces (6 total): 4 pulled, 1 reset (skillset — drift), 1 already current
setup.sh: ✓ (brew cache warm, no changes)
```

When a marketplace needed a reset, name it and the reason on its own line so the recovery is unmissable:

```text
Marketplaces (6 total): 4 pulled, 1 already current, 1 reset
  ⚠ skillset: drifted (235 commits behind, local merge artifact), reset to origin/main
```

Or on partial completion:

```text
Mise aborted after Eudy sync

Eudy (feature-branch): checkpoint pushed, merge from origin/main hit conflicts in
  - Craft/write/Substack/draft.md
Homebase: skipped
setup.sh: skipped

Resolve the merge and re-run /assist:mise.
```

## Anti-patterns

- Do not stash, commit, or switch branches on a primary checkout, and do not reach for `WT_GATE_BYPASS=1`. The gate denies the first three and the classifier refuses the last; `pull --ff-only --autostash` is the whole sync.
- Do not modify `origin` remotes or branches. mise is a local-station operation.
- Do not skip setup.sh because "nothing changed". Brewfile updates and plugin manifest tweaks are common and cheap to apply.
- Do not surface setup.sh's full stdout in the summary. Point at where the output went; keep the summary scannable.

## Learned Rules

See [learned-rules.md](learned-rules.md).
