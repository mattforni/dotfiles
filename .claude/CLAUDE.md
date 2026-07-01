> *One does nothing, and nothing is left undone.* (Tao Te Ching, via Ram Dass)

## About This File

This is "GC" (Global Claude): the user's private global instructions for every project. When Forni says "GC", he means this file.

## Koans

Open questions carried over time, revisited not resolved (full text in `~/Eudaimonia/koans/`). Let them inform the posture of the work, not only its answers. Surface them when they are relevant; they are the watcher's standing inquiries.

- **What genuinely feels like reward?** Interrogate what actually nourishes versus what merely numbs.
- **Die in the morning so that you need not die at night.** Release attachment daily; aliveness comes from holding nothing too tightly.
- **Develop the watcher.** Cultivate the witness that sees the doing, the fear, and the win without being swept into any of them.

## Communication

- Ask interactive questions one at a time when clarification is needed
- Please ask any clarifying questions one at a time so I can be thoughtful in responding?
- I do not want you to use dashes of any kind, ever. This means hyphens (-), en dashes (–), and em dashes (—). No exceptions, including in emails, Slack, and documents. Restructure the sentence instead: split into two sentences, use a comma, or recast. An em dash is not a stylistic exception to the no hyphens rule, it is the same violation.
- Always run tests in the foreground. When they run in the background too many threads get tied up and the machine grinds to a halt
- Ask clarifying questions one at a time and present options to select from with an option to provide additional context
- Only run tests in the foreground and do not leave tests running. There have been several instances where my computer has ground to a stop due to a bunch of long running, unfettered test processes that I have to go manually kill

## Writing Style

- **Title Case for all document headers.** Capitalize as if a book title; lowercase short prepositions (of, in, to, for, by) and articles (a, an, the) unless they start the heading. Applies to every heading level in Google Docs, markdown files, slide decks, Linear issue titles, and any structured written output.
- **Distance and elevation in imperial, always.** Present distance in miles and elevation in feet, never metric, in every context (training analysis, Strava readouts, adventure and gear planning, anywhere). Convert at the presentation layer; do not show metric even alongside imperial. Forni reads imperial at a glance and finds metric harder to parse.
- **Implementation plans are readable prose, not code blueprints.** Describe *what* gets done and *what the user experiences*, in plain language Forni can read without switching into engineering mode. No literal code, no framework jargon (hook names, casing transforms, attribute syntax). Name the files to touch as light pointers, but each step is a sentence of intent. Pseudocode over real code wherever a snippet is unavoidable. Applies to every plan and design doc, including plan-mode output.

## General Behavior

- When the user asks you to do something specific, act on that request immediately. Do not start autonomous codebase exploration unless explicitly asked to explore. If you need context, ask a targeted question rather than broadly reading files.
- Do not overstate or exaggerate the quality of results. If something looks like it works but has not been thoroughly validated, say so. Let the user judge quality.
- **Verify transformed outputs before publishing them.** When the work involves a transform (cropping, rotating, OCR, merging, format conversion) and the destination is shared (Drive upload, email attachment, content replacement), spot check the result before pushing it out. Read the produced file or render a preview. A 5 second visual check catches mistakes that are awkward to undo once published.

## Bash Commands

- **Never use `cd` in Bash tool calls.** Compound commands like `cd path && cmd` trigger permission prompts because they do not match single command allowlist entries such as `Bash(git:*)`. Use path aware flags instead:
  - `git -C <path> <subcommand>` instead of `cd <path> && git <subcommand>`
  - `gh --repo <owner>/<repo> <subcommand>` instead of `cd <path> && gh <subcommand>`
  - Absolute paths for file operations: `grep X /abs/path/foo`, `wc -l /abs/path/*.md`
  - Pass paths explicitly to scripts and tools: `python3 /abs/path/script.py`
- Compound commands with `cd` defeat the existing allowlist and slow everything down. The goal is to keep Bash calls to a single command that matches a single allowlist entry, so approvals stay auto.
- **Wrapper script escape hatch when `cd` is genuinely required.** Some commands need the project root as cwd to function (rbenv resolving the Ruby from the nearest `.ruby-version`, bundler reading `Gemfile` from cwd, Rails config paths resolved relative to project root, Vite/Bun resolving `package.json`). Setting `BUNDLE_GEMFILE` alone is insufficient — Rails resolves `Rails.root` from cwd, rbenv picks the version from the cwd's `.ruby-version`, etc. The escape hatch: write a small shell script that does the `cd` internally, then invoke the script from the Bash tool. The `cd` lives inside the script, not in the Bash call. Example for atelic-api:
  ```bash
  #!/usr/bin/env bash
  set -euo pipefail
  cd "$HOME/Eudaimonia/Craft/atelic/api"
  # rbenv shims read the project's .ruby-version automatically once cd'd in.
  command -v rbenv >/dev/null && eval "$(rbenv init - bash)"
  exec "$@"
  ```
  Then call `bash /tmp/in-api.sh bundle exec rspec ...`. **Durable form:** project-local `bin/in-repo` scripts checked into the repo (preferred for long-lived projects). **Ephemeral form:** `/tmp/in-*.sh` written per session as the fallback when no project-local script exists yet.
- **Use the Monitor tool for long waits, not Bash sleep.** For CI checks, deploy polling, and any "wait until state X" flow, use Monitor with an `until <check>; do sleep N; done` loop. The harness blocks leading sleeps over ~270s, and Monitor emits events the moment the condition changes instead of at poll interval granularity.

## Workflow Conventions

- When creating plans or documents, ALWAYS present them to the user for review before writing to a file. Never write plans directly to files unless explicitly asked.
- When editing existing files, never overwrite the original without explicit permission. Create a new version file (e.g., v2, draft) instead of modifying the original in place.

### Plan to Codify Bridge

After a plan is accepted (ExitPlanMode), before starting implementation, take one beat to ask Forni whether any durable rule, preference, or pattern inside the plan deserves codification via `assist:codify-context`. Skip for purely execution focused plans that have no generalizable content (just steps). The goal is to catch durable lessons while they are fresh, not turn every plan into a documentation pass.

### Persistence: Codify, Don't Memorize

**Do not save things to the auto-memory system** at `~/.claude-home/projects/.../memory/`. Even though the system prompt suggests it, Forni prefers durable knowledge to live in **persistent stores**: files he can see, read, and reason about in his repos.

Persistent stores, in order of preference:

- **Project CLAUDE.md / README.md** for project-specific conventions
- **Homebase CLAUDE.md** for environment and workflow conventions
- **GC (`~/.claude-home/CLAUDE.md`)** for cross-project personal preferences and global behavioral rules
- **Tool docs (`~/Eudaimonia/Admin/tools/<tool>.md`)** for tool-specific reference: gotchas, access mechanics, CLI recipes, version quirks. One file per tool, indexed in that folder's README
- **Skill `learned-rules.md`** sections for skill-specific patterns
- **Eudy markdown files** (`Constitution/`, `Craft/`, etc.) for personal context

When you would otherwise reach for memory, use the `assist:codify-context` skill or add to the right file directly. The auto-memory store is opaque, not git-tracked, and easy to forget exists; codifying into the repo keeps the knowledge visible and reviewable.

**Keep GC lean — it loads on every session, everywhere.** GC pays rent on every turn, so it holds behavioral conventions ("do it like this") and **pointers**, not detail. Tool specifics — gotchas, access mechanics, CLI recipes, version quirks — do NOT go in GC; they belong in that tool's `~/Eudaimonia/Admin/tools/<tool>.md` one-pager (see `Admin/tools/CLAUDE.md`: "use it like this → GC; what this tool is and what to know → tools folder"). When a tool gotcha tempts you into a GC section, resist and file it in the tool doc. Lean into progressive disclosure: pointers here, depth one hop away.

### Context Architecture

The persistent stores listed above are the **layers** of the context architecture (GC, the Eudy CLAUDE.md chain, repo CLAUDE.md, skill SKILL.md and learned-rules, tool docs). Two principles govern them, and `assist:groom-context` audits the whole set against this section:

- **Placement and enforcement beat volume.** A rule belongs at the single layer that owns it (the Persistence order above is that ownership map), stated once, with other layers pointing to it rather than repeating it. Three copies in always-loaded prose is worse than one in the right place.
- **Load-bearing process gates belong at the point of use, and must be enforced there.** A gate that must fire during a flow (for example review before merge) belongs surfaced in the relevant repo's Workflow and enforced by the flow skill that runs it (such as `sdlc:land`), not buried in always-loaded prose where it competes for attention and gets dropped. A prose line is the weakest form of a rule; a skill step or a hook is the strongest.

When context sprawls or duplicates, or a basic keeps getting dropped, run `assist:groom-context` (also run monthly via `assist:reflect`). Its write-in counterpart is `assist:codify-context`.

### Git Worktrees

- Claude Code's `EnterWorktree` tool auto prefixes new branches with `worktree-` (e.g., `worktree-body-comp`). Immediately rename the branch to the bare name (`git branch -m worktree-<name> <name>`) right after the worktree is created. Forni dislikes the prefix.
- The statusline already surfaces the worktree with a `🪵 <name>` marker after `🌿 repo:branch`, so the branch name itself should stay clean.
- **EnterWorktree's session record sticks to `worktree-<name>` even after you rename.** `ExitWorktree(remove)` cleans up the worktree directory but the renamed local branch lingers. After the PR merges it shows `[gone]`; clean up via the squash-merge `-d` → content parity → `-D` flow from the Git and PR Gotchas section.
- **`ExitWorktree(remove)` ancestry check trips on squash merges, same trap as `git branch -d`.** It refuses with "commits on the worktree branch" because the worktree's commits are not ancestors of the squash. Verify content parity with `git diff origin/<base-branch>..HEAD --quiet`; on exit 0 the squash on origin contains the work, safe to re-invoke with `discard_changes: true`. Never auto-discard purely on `PR_STATE = MERGED` — a user can add post-merge commits to the worktree, so the diff check is the real safety guarantee.
- **`EnterWorktree` acts on the session-root repo, not nested repos.** When the session is anchored at one repo (e.g. Eudaimonia) but the work targets a *separate nested* git repo inside it (e.g. `Craft/atelic/api`, or the `Craft/Development/personal/*` repos, which are their own repos and gitignored by the parent), `EnterWorktree` creates a worktree of the *session-root* repo, not the nested one. A "worktree" branch strategy would silently branch the wrong repo. Skip EnterWorktree for nested repos and cut a plain branch directly: `git -C <nested-repo-path> checkout -b <branch> origin/<base>`. Hit during an sdlc:design run where the branch strategy returned "worktree" but the work lived in `atelic/api` (2026-06-05).

### Git and PR Gotchas

- **Never rename a PR's head branch via the GitHub API.** `POST /repos/.../branches/<name>/rename` renames the branch but detaches the PR. GitHub auto closes the PR because its `headRefName` still points at the old, now missing branch. If a branch rename is needed, do it in the GitHub UI (which properly updates attached PRs), or close the current PR and open a new one from the renamed branch.
- **Stacked PR rebase after the base merges.** When PR A is stacked on PR B and B squash merges to main, A's history no longer traces to main. Recovery:
  1. `git rebase --onto main <last-commit-of-old-base> <stacked-branch>` to replay only A's own commits on main
  2. `gh pr edit <N> --base main` to update the PR's base ref
  3. `git push --force-with-lease` to update the remote
- **Merging the base of a stack with `--delete-branch` auto-closes the stacked child PR.** A PR whose *base ref* is deleted gets closed by GitHub (the base no longer exists), and a closed PR refuses `gh pr edit --base` and often `gh pr reopen` (its base branch is gone). So when landing a stack, do the child's `--onto main` rebase + `gh pr edit --base main` *before* merging the base, or merge the base **without** `--delete-branch`. If it already closed, the clean recovery is to rebase the child onto main and open a fresh PR rather than fight the closed one. Bit ATE-370's app PR on 2026-05-31.
- **`git branch -d` does NOT work on squash-merged branches.** `-d` only checks DAG ancestry — squash merges create a new commit on main with a different SHA, so the branch tip is never an ancestor. The "upstream gone" indicator doesn't change this. The safety check before `-D` is "the branch's distinguishing work is reachable on main", not "the trees are byte-identical." Get the branch's own touched files via `git log --name-only --pretty=format: main..<branch> | sort -u | grep -v '^$'` (NOT `git diff --name-only`, which would also include files main advanced on while the PR was open). Then run `git diff --quiet main..<branch> -- <those-files>` (two dots, options BEFORE `--`). On exit 0, those paths match between main and the branch, so the squash carried the work — safe to `git branch -D <branch>`. Two foot-guns: (1) `--quiet` placed AFTER `--` becomes a pathspec, silently producing exit 0 even when the trees differ — always put options first. (2) Avoid the three-dot form (`git diff main...<branch>`) for this check — three dots compares from the merge base, so the diff stays non-empty by definition even after a clean squash.

- **Repo-level branch auto-deletion is off by default on GitHub.** The `delete_branch_on_merge` setting (Settings → General → Pull Requests → "Automatically delete head branches") controls whether merged head refs auto-delete. Check it with `gh api repos/<owner>/<repo> --jq '.delete_branch_on_merge'`; flip it on with `gh api -X PATCH repos/<owner>/<repo> -f delete_branch_on_merge=true`. Without it on, merged branches linger on the remote and `-d` cleanup becomes more annoying because of the rule above.

## Skills

Every skill that makes decisions on behalf of the user should include a `learned-rules.md` file. For the full authoring conventions (SKILL.md vs learned-rules.md split, when to graduate rules, etc.), see `~/.claude/references/skills.md`.

Building recurring headless Claude automations (launchd, Keychain auth, `--allowedTools`, JSON success detection) is covered in `~/.claude/references/headless-claude.md`.

### Manual First, Then Codify

When building a workflow skill, do the work by hand once with real data before writing the skill. Skills written without a real first run are thin: the gotchas, shortcut candidates, and calibration numbers (capacity multipliers, typical bucket sizes, priority distributions) only surface under actual use. The pattern is: run the workflow manually, capture learnings inline as they come up, then write the skill as the last step. The `linear-groom` skill gained ~10 Learned Rules and a recalibrated capacity multiplier only after one real C3 grooming pass.

### Levels shorthand

`L{N}` is shorthand for "Level N" of Bassi Eledath's 8 levels of agentic engineering (tracked in `~/Eudaimonia/LEVELS.md`). E.g., L7 = Level 7 (background agents), L8 = Level 8 (agent teams). Use the shorthand freely in sharpen sessions and related discussion.

## External App Integration

Preferred methods for connecting Claude to outside apps, in order:

1. **Native Claude Connectors** (first party integrations built into Claude)
2. **Officially Supported CLIs** (especially those with skills/plugins)
3. **MCPs** (Model Context Protocol servers)

Choose the highest available option. Native connectors are smoother and require less configuration.

### gws Profiles

The `gws` CLI uses `$GOOGLE_WORKSPACE_CLI_CONFIG_DIR` for per-account isolation. Forni's shell auto-loads either `~/.config/gws-zero/` or `~/.config/gws-home/` based on `~/.config/gws-current`. A zsh chpwd hook also walks up from `$PWD` looking for `.account` marker files (a cross-tool convention; the `~/bin/claude` wrapper reads the same marker) and silently switches when one is found, so cd'ing into a home subtree flips you to home for that shell. Use `gws-whoami` to confirm which account is active before sending mail or modifying calendars. When ambiguous, ask which account Forni wants the action against. Per-command override: `GOOGLE_WORKSPACE_CLI_CONFIG_DIR=~/.config/gws-home gws ...`.

The `~/bin/claude` wrapper picks a Claude Code config dir (`~/.claude-zero/` or `~/.claude-home/`) at launch from the same `.account` marker and exec's the real binary. Claude Code's OAuth credential storage is per CLAUDE_CONFIG_DIR natively (Keychain service `Claude Code-credentials-<hash>`), so the right Anthropic account is selected automatically. New sessions in a directory subtree use the right account.

### Google Workspace (reading links, Docs, Gmail)

Always read Google Workspace links (Docs/Sheets/Slides/Drive) and send/reply/forward/draft Gmail through the `gws` CLI, never WebFetch or the Gmail MCP. WebFetch 401s on authenticated Google URLs; MCP `create_draft` loses real threading. The command tables, the Doc-from-markdown recipe, reply targeting, self-reply handling, and the gotchas live in `~/Eudaimonia/Admin/tools/gws.md`.

## Code Review

- During PR review iteration, only address NEW or UNRESOLVED review comments. Do not re-address comments that have already been resolved. Ask if unclear which comments are new.
- **Review bots (Gemini, etc.) re-review fresh on every push, so "clean" is a moving target** — each pass surfaces a new batch, and chasing them is unbounded. Triage each round instead of complying blindly: fix genuine bugs, adopt good suggestions, but reason-decline false positives (e.g. a bot flagged `Rails.env.local?` that RuboCop actively enforces) and suggestions that conflict with an explicit user directive or a tested behavior (e.g. a "gentler titleize" that stopped normalizing all-caps). Pick a convergence point with the user rather than looping. Codified during ATE-369/370 (2026-05-31).

## MCP Servers

Notion MCP config, token, and per-project enable/disable live in `~/Eudaimonia/Admin/tools/notion.md`.

## Linear Ticket Preferences

**Linear is the tracker for engineering and development work; Todoist is for personal and operational tasks.** Anything code (bugs, tech debt, features, follow-ups from a build session) goes to Linear, never Todoist. Route the personal/operational side to Todoist (see Todoist Preferences). Do not offer Todoist for dev follow-ups.

**When to create a ticket at all.** A ticket tracks work that needs doing: queued for later, spanning sessions, needing prioritization, or handed off. For work that is decided and executed in one sitting, the PR is the tracking unit, so do not mint a ticket for it. Ask before ticketing in-session work. If a ticket is created, actually use it: move it through states and let it close on merge, never leave it orphaned in Todo while its PR is already open.

When creating new Linear tickets:

- Always set status to **Todo**
- Always assign to **Forni** (me)

## Email Preferences

- Subject lines should use Title Case (see Writing Style)
- Never explicitly sign emails (Gmail handles signatures automatically)
- End emails with "Cheers and chat soon!"
- Reply to existing email threads instead of creating new ones when following up
- When including a scheduling link, choose by context: Zero / work meetings use `https://app.reclaim.ai/m/forni/zero`; personal / RYLLC use `https://app.reclaim.ai/m/forni/chat`. Format as: "Here's [my scheduling link](<the right link>) if that's easier."

## Phone Contact

When providing a phone number to vendors, warranty teams, or any external party, include these contact preferences alongside the number:

- Calls from unknown numbers go straight to voicemail
- Texting is appreciated for quick async updates
- Email is the preferred channel for substantive correspondence

Default to the cell number on vendor forms unless context calls for the Google Voice filter (high-volume vendor, likely-to-share).

## Slack Announcements

For meeting recaps, ecosystem updates, and similar share out posts to a channel, use this structure:

1. 📣 + bold title naming what's being shared
2. One line lede sentence framing what's covered
3. Sectional body. Each topical section uses a thematic emoji + bold section name with colon, followed by 1-2 sentences of narrative context to set the stage, then bulleted specifics. Pick thematic emojis matching section content rather than reusing ✅ for every section.
4. 🤔 *Open:* section for unresolved threads (narrative + bullets, same shape as topical sections)
5. 📚 *Other Resources:* footer with standardized links:
   - 📄 More info in `<doc name>` (the name itself is the link; no "Working doc:" prefix)
   - 🎟️ Linear ticket reference
   - 🎙️ Granola recording link (voice). Use 🎥 only for actual video recordings.
6. 🖼️ *Photos in Thread* 🧵 closing line when photos will be added in thread

**Forced section spacing via ZWSP.** Slack collapses consecutive newlines into a single line break, so to force visible air between sections, place a literal zero width space (U+200B, the invisible character itself) on its own line between blocks. Use tight single newlines on either side of the ZWSP. Do not bracket it with blank lines — bracketing compounds into 4 to 5 line breaks of vertical whitespace and reads as excessive padding. Example (⟨ZWSP⟩ stands in for the literal U+200B character):

```
First section.
⟨ZWSP⟩
Second section.
```

Apply every time a Slack post has section headers. Do not skip because the draft looks fine in the editor — Slack does not render the air until U+200B is there.

**Workshop Slack posts in a DM to yourself.** Send the draft with the channel set to your own user ID. Real `<@USER_ID>` mentions render as the named user but don't ping — Slack only fires notifications when the tagged user is a member of the conversation. Iterate until the render is right (table widths, ZWSP spacing, emoji, mention rendering), then re-send the same content to the actual channel.

## Calendar Preferences

Google Calendar conventions (pillar color coding, transition vs travel, flanking on location shifts, title formats, time alignment) live in `~/Eudaimonia/Admin/tools/google-calendar.md`.

## Todoist Preferences

Todoist conventions (Monday scheduling, follow-ups always land on a Monday, short Title Case task titles, details in a comment) live in `~/Eudaimonia/Admin/tools/todoist.md`.

## Code Project Conventions

- Root level directories should be 3-4 characters that clearly identify contents (e.g., `src/`, `docs/`, `adr/`, `lib/`)

## Growth Engineering

For any SEO, GEO, or growth engineering work (Zero, RYLLC clients, or personal), the canonical playbook is `~/Eudaimonia/Craft/Growth/README.md`. It is built on two vectors: **The Funnel** (the map of where a site leaks) and **The Loop** (the repeatable measure, find the constraint, ship, measure again motion). Apply it and extend it there.

## Problem Solving Approach

- Always be problem-first. Understand the problem deeply before jumping to solutions or tooling. Technology serves the problem, not the other way around.

## Research Documentation

- Research outputs should be one-pagers. Brevity is the soul of wit.
- Capture the essential insights, not everything learned along the way.
- If it can't fit on one page, it needs to be split into multiple focused topics.

## Local File Conventions

- **Screenshots** live in `~/Screenshots`. When Forni references "last screenshot", "the last N screenshots", "most recent screenshot", etc., check that directory and use modified time ordering. Note: macOS Screenshots filenames have a literal leading space character (e.g., ` 2026-05-16 at 09.48.15.png`). `Read` with the bare name fails. Use `ls -1 ~/Screenshots/` to discover the exact name and pass it to `Read` with the leading space included. `ls -la` makes the leading space ambiguous because of column spacing, so prefer `ls -1` or `od -c` to verify.
- **Scanned PDFs** drop into `~/Documents/scans/` as `Scan.pdf`, `Scan 1.pdf`, `Scan 2.pdf`, etc. Numbered files contain a literal space between `Scan` and the number, so the bare name must be quoted in shell commands (`"Scan 1.pdf"`). Letter-size pages with small content (ID cards, vaccination records, receipts) need cropping.

The recipe for cropping scanned PDFs to their content (density-filter approach, calibrated parameters) lives in `~/Eudaimonia/Admin/tools/pdf-crop.md`.
