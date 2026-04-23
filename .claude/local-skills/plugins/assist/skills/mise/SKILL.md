---
name: assist:mise
description: Morning prep sync for Forni's workstation. Pulls latest in ~/Eudaimonia and ~/Eudaimonia/Craft/Development/personal/homebase, then runs homebase's setup.sh to deploy dotfiles and refresh brew, npm globals, IDE extensions, and Claude plugins. Use this skill whenever Forni says "mise", "mise en place", "prep the station", "morning sync", "get the station ready", or otherwise wants his dev environment neat and tidy before the day's work. Also trigger for "/assist:mise". Named after mise en place: everything in its place before service.
allowed-tools:
  - Bash(git *)
  - Bash(test *)
  - Bash(date *)
  - Bash(./setup.sh)
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
| Eudy | `/Users/forni/Eudaimonia` |
| Homebase | `/Users/forni/Eudaimonia/Craft/Development/personal/homebase` |

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

Run the sync routine below against `/Users/forni/Eudaimonia`. See [Sync Routine](#sync-routine).

If sync produces a merge conflict, stop mise. Do not continue to homebase or setup.sh. Report the conflict so Forni can resolve it.

### Step 2: Sync Homebase

Run the same sync routine against `/Users/forni/Eudaimonia/Craft/Development/personal/homebase`.

Same conflict handling: stop on conflict, do not proceed to setup.sh.

### Step 3: Run setup.sh

From the homebase path, run `./setup.sh` in the foreground so Forni sees output. If it exits non-zero, capture the tail of stderr and stop; do not retry. setup.sh is idempotent, so the right fix for a transient failure is usually to resolve the root cause and re-run mise, not to auto-retry.

### Step 4: Summary

One compact report, per repo:

- branch name at start
- stash applied? (and whether the pop was clean)
- merge from `origin/main` applied? (for non-main case)
- setup.sh outcome

Keep it short. A handful of lines. If everything was already up to date and setup.sh short-circuited, say so in one line.

## Sync Routine

Given a repo path `$REPO`:

### If on `main`

1. Check for dirty tree: `git -C "$REPO" status --porcelain`. Remember whether it was dirty.
2. If dirty, stash with a tagged message: `git -C "$REPO" stash push -u -m "mise auto-stash $(date -Iseconds)"`.
3. `git -C "$REPO" pull --ff-only origin main`.
4. If we stashed, `git -C "$REPO" stash pop`. If the pop reports conflicts, leave the conflict state, abort mise immediately, and surface the details in the summary — do not attempt to resolve, do not proceed to the next repo, and do not run `setup.sh`. A conflicted pop means the working tree has unresolved markers; deploying that state via `setup.sh` would land broken config into `$HOME`.

### If on a non-main branch

The user is mid-feature on this repo. The goal is to preserve any in-flight work, bring main current, and merge main forward so the branch keeps pace.

1. Check for dirty tree: `git -C "$REPO" status --porcelain`.
2. **If dirty**, delegate to `/sdlc:checkpoint` via the Skill tool. That skill handles "save WIP with commit and push, no PR" — exactly what's needed here. `/sdlc:checkpoint` operates on its caller's cwd, so cd into `$REPO` first (or otherwise scope the invocation to the right repo) — do not let it run against the wrong directory.
3. **If clean**, skip the checkpoint call entirely. `/sdlc:checkpoint` refuses on a clean tree, and invoking it would either error or become a wasted interaction. A clean feature branch (e.g., one with an open PR that's awaiting review) should flow straight to the merge step.
4. Fetch and merge main into the current branch:
   ```bash
   git -C "$REPO" fetch origin main
   git -C "$REPO" merge origin/main
   ```
5. If the merge surfaces conflicts, leave the branch in the conflicted state and abort mise. Forni resolves the merge; he can rerun mise after.

## Why each edge case matters

- **Worktree abort:** In a worktree, the current session's cwd and branch are deliberately detached from main. Running mise here would either re-sync main in the parent checkout (leaving the worktree diverged) or silently pull the worktree's branch (surprising). Cleaner to refuse.
- **Stash-pop over force-reset:** Dirty working tree on main is almost always half-finished editing, not intentional divergence. Stash preserves it; pop restores it. Conflict on pop is rare but recoverable.
- **Checkpoint + merge-main over rebase:** On a feature branch, mise keeps the branch alive and in sync rather than rewriting history. Forni's preference is to preserve WIP commits (even ugly ones) and merge main forward. Rebasing would rewrite what was already pushed by checkpoint.
- **Stop on conflict:** Running setup.sh on a repo in a conflicted state would deploy half-merged config into `$HOME`. Better to stop.
- **Don't retry setup.sh:** Failures tend to be environmental (sudo, network, brew API). A blind retry masks the cause.

## Output Shape

```
Mise complete ✓

Eudy (main): pulled, already up to date
Homebase (main): pulled 2 commits, stash popped clean
setup.sh: ✓ (brew cache warm, no changes)
```

Or on partial completion:

```
Mise aborted after Eudy sync

Eudy (feature-branch): checkpoint pushed, merge from origin/main hit conflicts in
  - Craft/write/Substack/draft.md
Homebase: skipped
setup.sh: skipped

Resolve the merge and re-run /assist:mise.
```

## Anti-patterns

- Do not stash on a non-main branch. Use `/sdlc:checkpoint` — it commits to the actual branch, which is what Forni expects to find when he resumes.
- Do not modify `origin` remotes or branches. mise is a local-station operation.
- Do not skip setup.sh because "nothing changed". Brewfile updates and plugin manifest tweaks are common and cheap to apply.
- Do not surface setup.sh's full stdout in the summary. Point at where the output went; keep the summary scannable.

## Learned Rules

_(Empty. Populated as Forni corrects mise's judgment over time.)_
