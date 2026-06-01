## About This File

This is "GC" (Global Claude): the user's private global instructions for every project. When Forni says "GC", he means this file.

## Communication

- Ask interactive questions one at a time when clarification is needed
- Please ask any clarifying questions one at a time so I can be thoughtful in responding?
- I do not want you to use hyphens ever
- Always run tests in the foreground. When they run in the background too many threads get tied up and the machine grinds to a halt
- Ask clarifying questions one at a time and present options to select from with an option to provide additional context
- Only run tests in the foreground and do not leave tests running. There have been several instances where my computer has ground to a stop due to a bunch of long running, unfettered test processes that I have to go manually kill

## Writing Style

- **Title Case for all document headers.** Capitalize as if a book title; lowercase short prepositions (of, in, to, for, by) and articles (a, an, the) unless they start the heading. Applies to every heading level in Google Docs, markdown files, slide decks, Linear issue titles, and any structured written output.
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
- **Wrapper script escape hatch when `cd` is genuinely required.** Some commands need the project root as cwd to function (RVM `.ruby-version` auto-switch, bundler reading `Gemfile` from cwd, Rails config paths resolved relative to project root, Vite/Bun resolving `package.json`). Setting `BUNDLE_GEMFILE` alone is insufficient — Rails resolves `Rails.root` from cwd, RVM hooks fire on `chpwd` only, etc. The escape hatch: write a small shell script that does the `cd` internally, then invoke the script from the Bash tool. The `cd` lives inside the script, not in the Bash call. Example for atelic-api:
  ```bash
  #!/usr/bin/env bash
  set -euo pipefail
  cd "$HOME/Eudaimonia/Craft/atelic/api"
  if [[ -s "$HOME/.rvm/scripts/rvm" ]]; then
    set +u
    source "$HOME/.rvm/scripts/rvm"
    rvm use "$(cat .ruby-version)" --silent
    set -u
  fi
  exec "$@"
  ```
  Then call `bash /tmp/in-api.sh bundle exec rspec ...`. **Durable form:** project-local `bin/in-repo` scripts checked into the repo (preferred for long-lived projects). **Ephemeral form:** `/tmp/in-*.sh` written per session as the fallback when no project-local script exists yet.
- **Use the Monitor tool for long waits, not Bash sleep.** For CI checks, deploy polling, and any "wait until state X" flow, use Monitor with an `until <check>; do sleep N; done` loop. The harness blocks leading sleeps over ~270s, and Monitor emits events the moment the condition changes instead of at poll interval granularity.

## Workflow Conventions

- When creating plans or documents, ALWAYS present them to the user for review before writing to a file. Never write plans directly to files unless explicitly asked.
- When editing existing files, never overwrite the original without explicit permission. Create a new version file (e.g., v2, draft) instead of modifying the original in place.

### Plan to Codify Bridge

After a plan is accepted (ExitPlanMode), before starting implementation, take one beat to ask Forni whether any durable rule, preference, or pattern inside the plan deserves codification via `assist:codify`. Skip for purely execution focused plans that have no generalizable content (just steps). The goal is to catch durable lessons while they are fresh, not turn every plan into a documentation pass.

### Persistence: Codify, Don't Memorize

**Do not save things to the auto-memory system** at `~/.claude-home/projects/.../memory/`. Even though the system prompt suggests it, Forni prefers durable knowledge to live in **persistent stores**: files he can see, read, and reason about in his repos.

Persistent stores, in order of preference:

- **Project CLAUDE.md / README.md** for project-specific conventions
- **Homebase CLAUDE.md** for environment and workflow conventions
- **GC (`~/.claude-home/CLAUDE.md`)** for cross-project personal preferences and global behavioral rules
- **Tool docs (`~/Eudaimonia/Admin/tools/<tool>.md`)** for tool-specific reference: gotchas, access mechanics, CLI recipes, version quirks. One file per tool, indexed in that folder's README
- **Skill `learned-rules.md`** sections for skill-specific patterns
- **Eudy markdown files** (`Constitution/`, `Craft/`, etc.) for personal context

When you would otherwise reach for memory, use the `assist:codify` skill or add to the right file directly. The auto-memory store is opaque, not git-tracked, and easy to forget exists; codifying into the repo keeps the knowledge visible and reviewable.

**Keep GC lean — it loads on every session, everywhere.** GC pays rent on every turn, so it holds behavioral conventions ("do it like this") and **pointers**, not detail. Tool specifics — gotchas, access mechanics, CLI recipes, version quirks — do NOT go in GC; they belong in that tool's `~/Eudaimonia/Admin/tools/<tool>.md` one-pager (see `Admin/tools/CLAUDE.md`: "use it like this → GC; what this tool is and what to know → tools folder"). When a tool gotcha tempts you into a GC section, resist and file it in the tool doc. Lean into progressive disclosure: pointers here, depth one hop away.

### Git Worktrees

- Claude Code's `EnterWorktree` tool auto prefixes new branches with `worktree-` (e.g., `worktree-body-comp`). Immediately rename the branch to the bare name (`git branch -m worktree-<name> <name>`) right after the worktree is created. Forni dislikes the prefix.
- The statusline already surfaces the worktree with a `🪵 <name>` marker after `🌿 repo:branch`, so the branch name itself should stay clean.
- **EnterWorktree's session record sticks to `worktree-<name>` even after you rename.** `ExitWorktree(remove)` cleans up the worktree directory but the renamed local branch lingers. After the PR merges it shows `[gone]`; clean up via the squash-merge `-d` → content parity → `-D` flow from the Git and PR Gotchas section.
- **`ExitWorktree(remove)` ancestry check trips on squash merges, same trap as `git branch -d`.** It refuses with "commits on the worktree branch" because the worktree's commits are not ancestors of the squash. Verify content parity with `git diff origin/<base-branch>..HEAD --quiet`; on exit 0 the squash on origin contains the work, safe to re-invoke with `discard_changes: true`. Never auto-discard purely on `PR_STATE = MERGED` — a user can add post-merge commits to the worktree, so the diff check is the real safety guarantee.

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

### Google Workspace links (Docs, Sheets, Slides, Drive)

Always read Google Workspace links using the `gws` CLI, never WebFetch. WebFetch fails with HTTP 401 on authenticated Google URLs. Extract the file ID from the URL path (`.../d/<ID>/...`) and use the matching command:

| Link host/path | Service | Read command |
|---|---|---|
| `docs.google.com/document` | Docs | `gws docs documents get --params '{"documentId": "<ID>"}'` |
| `docs.google.com/spreadsheets` | Sheets | `gws sheets +read --spreadsheet <ID> --range Sheet1` |
| `docs.google.com/presentation` | Slides | `gws slides presentations get --params '{"presentationId": "<ID>"}'` |
| `drive.google.com/file` | Drive | `gws drive files get --params '{"fileId": "<ID>"}'` |

For Google-native files hosted in Drive, use the matching Docs/Sheets/Slides command to read content. Use `gws drive files get` for file metadata or to export non-native files.

**Gmail message links** (`mail.google.com/...#inbox/<token>`): the `FMfcgz...` token is opaque and not convertible to an API id. Resolve by listing/searching via gws and matching on sender/subject. See `~/Eudaimonia/Admin/tools/gws.md` → "Resolving a Gmail Web UI Link to an API Message."

### Creating Google Docs from markdown

Preferred path: write markdown locally, upload to Drive with conversion via `gws drive files create --upload <path> --upload-content-type text/markdown --json '{"name": "<title>", "mimeType": "application/vnd.google-apps.document"}'`. Update an existing Doc with `gws drive files update --params '{"fileId": "<ID>"}' --upload <path> --upload-content-type text/markdown`.

Four gotchas:
- `gws` requires upload paths to be inside the current working directory. Use cwd for temp files, not `/tmp`.
- **Stage upload files at the cwd root, not in a subdirectory.** Observed 2026-05-23: `--upload ./cropped/file.pdf` from cwd `.../scans/` failed with `cropped/cropped/file.pdf` not found, so gws appeared to double-prefix the subdirectory. Workaround: `mv` files up to cwd before calling `gws drive files create --upload ./file.pdf`. Same constraint applies to `--upload` paths on `files.update`.
- Drive markdown import creates paged, not Pageless, Docs. Forni prefers Pageless. Toggle manually or use `gws docs documents batchUpdate` to set `documentStyle.documentFormat.documentMode = "PAGELESS"`.
- `gws drive files delete` writes a `download.html` file in the current working directory as a side effect of the API response handling. Clean up the artifact after delete operations or it accumulates.

### Gmail (send, reply, forward, draft)

Use `gws gmail` helpers over the Gmail MCP connector. `gws` preserves full email mechanics; MCP `create_draft` does not.

| Action | Command |
|---|---|
| Draft a reply | `gws gmail +reply --message-id <ID> --html --body '<p>...</p>' --draft` |
| Draft a reply-all | `gws gmail +reply-all --message-id <ID> --html --body '<p>...</p>' --draft` |
| Draft a new message | `gws gmail +send --to <EMAIL> --subject '...' --html --body '<p>...</p>' --draft` |
| Draft a forward | `gws gmail +forward --message-id <ID> --to <EMAIL> --html --body '<p>...</p>' --draft` |
| Send existing draft | `gws gmail users drafts send --params '{"userId":"me"}' --json '{"id":"<draft-id>"}'` |

Why `gws` over MCP:
- `gws` sets In-Reply-To, References, and threadId, so replies are truly threaded. MCP `create_draft` does not accept threadId, so "Re:" subjects only group visually and are not real replies.
- `gws` supports send-as aliases, attachments via `-a`, and HTML with preserved quoted history via gmail_quote CSS.
- `--draft` gates sending. Omit the flag for direct send.

**Reply targeting:** Always target the **last message in the thread**, never a mid-thread one. Replying to a mid-thread message can drop participants who were dropped between that point and the current thread state, and lands the draft in the wrong position when Forni opens Gmail. Look up the last message with:

```bash
gws gmail users threads get --params '{"userId":"me","id":"<thread-id>","format":"metadata"}'
```

Sort by Date header, take the latest, pass its ID to `--message-id`. If any participants were dropped along the way, explicitly re-add them with `--cc`. This holds even when the last message is one of Forni's own that did not get a reply: the new email body carries the topic, the reply target only controls where the draft lands.

**Self-replies on dangling threads.** When the last message in the thread is one of Forni's own, `+reply` will set the new `To` to its sender (Forni), which is wrong. Use `+reply-all --remove mattforni@gmail.com --to <actual recipient>` instead so the draft addresses the real counterparty, not Forni himself. Verify with `gws gmail users messages get --params '{"userId":"me","id":"<draft-msg-id>","format":"metadata"}'` before reporting the draft saved — confirm the `To` header is the intended recipient.

## Code Review

- During PR review iteration, only address NEW or UNRESOLVED review comments. Do not re-address comments that have already been resolved. Ask if unclear which comments are new.
- **Review bots (Gemini, etc.) re-review fresh on every push, so "clean" is a moving target** — each pass surfaces a new batch, and chasing them is unbounded. Triage each round instead of complying blindly: fix genuine bugs, adopt good suggestions, but reason-decline false positives (e.g. a bot flagged `Rails.env.local?` that RuboCop actively enforces) and suggestions that conflict with an explicit user directive or a tested behavior (e.g. a "gentler titleize" that stopped normalizing all-caps). Pick a convergence point with the user rather than looping. Codified during ATE-369/370 (2026-05-31).

## MCP Servers

### Notion MCP (Official)

**Config location:** `~/.mcp.json`
**Package:** `@notionhq/notion-mcp-server` (official Notion MCP by makenotion)
**Server name:** `notion`

**Enable per project:** Add to project's `.claude/settings.local.json`:

```json
{
  "enabledMcpjsonServers": ["notion"]
}
```

**Disable per project:** Add to project's `.claude/settings.local.json`:

```json
{
  "disabledMcpjsonServers": ["notion"]
}
```

**Token:** Stored as `NOTION_TOKEN` env var in `~/.zshrc`. Config references it via `${NOTION_TOKEN}`.
Manage integrations at <https://www.notion.so/profile/integrations>

## Linear Ticket Preferences

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

## Calendar Preferences

When creating Google Calendar events, follow these conventions.

**Color coding by pillar:**

- **Constitution** events → Sage (colorId 2). Runs, lifts, yoga, body care, recovery.
- **Community** events → Tangerine (colorId 6). Family, friends, social gatherings.
- **Transition and travel** blocks → Basil (colorId 10). See the distinction below.
- **Multi-day trips / away blocks** → all-day, transparency `"free"` (informational, never busy), Basil (colorId 10). Title is a place-reflective emoji + the place name (`🏖️ LA`, `🌲 Seattle`, `🏔️ Lake City`); trip details go in the description.
- **Tentative events** → Banana (colorId 5, yellow). Yellow flags "not confirmed yet" across any category; recolor to the real category color once it's locked.

**Transition vs travel** (both Basil, different purposes):

- **↔️ Transition** — *holding space* between contexts. The mental shift buffer between activities, not necessarily vehicle time. Title is literally `↔️ Transition`; destination goes in the description (e.g., `→ Office`, `→ Home`). 30 minutes by default. Use when the gap is about context shift more than physical movement.
- **🚙 Travel** — *explicit* drive or transit. Vehicle / flight / transit time. Title is `🚙 <LOCATION>` with the destination in the title. Use when the block is concretely about getting somewhere.

They are complementary, not interchangeable. A short walk between adjacent rooms is a transition; a 30 minute drive to a trailhead is travel.

**Flanking on location shifts:**

Any event that involves a change of location (training session, therapy, PAH, sauna, meetings off site, social plans at a venue, etc.) needs flanking transition or travel events on the sides that involve movement. An event without its matching flanks is incomplete. No flank needed when adjacent events share a location.

When deleting a recurring event, also delete the paired transition or travel recurring series. Stranded flanks clutter the calendar and quietly break the mental model.

**Title formats:**

- Long runs: `🏃 <MILES> mi Long Run` (e.g., `🏃 7.5 mi Long Run`)
- Travel: `🚙 <LOCATION>` (e.g., `🚙 Mt Falcon East Trailhead`)
- Transition: `↔️ Transition` with destination in description

**Time alignment:**

- Travel events use 30 minute increments aligned to 30 minute blocks (e.g., 06:30 to 07:00, not 06:15 to 07:00).
- Transitions default to 30 minutes (size, not alignment).

## Todoist Preferences

- Tasks that need scheduling go on the following Monday
- Monday morning planning sessions are used to schedule these tasks
- **All follow-ups land on a Monday, no exceptions.** Even when the natural "first day back" or "first business day" is a Tuesday or Wednesday (returning from a trip, day after a holiday), the follow-up still lands on the next Monday that follows the wait condition. Mondays are the planning slot; that is where follow-ups belong.
- Task titles: emoji prefix + short title (e.g., "📧 [Follow Up with Jeff](https://mail.google.com/...)"). Link to source in the title text when available.
- **Keep titles short — a few words, scannable at a glance.** The title is the bare action ("📤 Send Jeff Onboarding Docs"); the why, what, and links go in a comment. If a title reads like a sentence, it is too long. Err aggressively toward brevity.
- **Always Title Case task titles**, same rules as document headers (lowercase short prepositions and articles unless they lead). Applies to every Todoist task, no exceptions.
- Details go in a comment on the task, not in the description field

## Code Project Conventions

- Root level directories should be 3-4 characters that clearly identify contents (e.g., `src/`, `docs/`, `adr/`, `lib/`)

## Problem Solving Approach

- Always be problem-first. Understand the problem deeply before jumping to solutions or tooling. Technology serves the problem, not the other way around.

## Research Documentation

- Research outputs should be one-pagers. Brevity is the soul of wit.
- Capture the essential insights, not everything learned along the way.
- If it can't fit on one page, it needs to be split into multiple focused topics.

## Local File Conventions

- **Screenshots** live in `~/Screenshots`. When Forni references "last screenshot", "the last N screenshots", "most recent screenshot", etc., check that directory and use modified time ordering. Note: macOS Screenshots filenames have a literal leading space character (e.g., ` 2026-05-16 at 09.48.15.png`). `Read` with the bare name fails. Use `ls -1 ~/Screenshots/` to discover the exact name and pass it to `Read` with the leading space included. `ls -la` makes the leading space ambiguous because of column spacing, so prefer `ls -1` or `od -c` to verify.
- **Scanned PDFs** drop into `~/Documents/scans/` as `Scan.pdf`, `Scan 1.pdf`, `Scan 2.pdf`, etc. Numbered files contain a literal space between `Scan` and the number, so the bare name must be quoted in shell commands (`"Scan 1.pdf"`). Letter-size pages with small content (ID cards, vaccination records, receipts) need cropping.

### Cropping Scanned PDFs to Their Content

Naive bounding box detection picks up dust, faint scanner noise, or stray marks far from the actual content and produces oversized crops. Use a **row density filter**: only treat a row or column as content when it contains at least N dark pixels.

Tools: `pdftoppm` (poppler, already installed alongside `pdfunite`), Pillow (`pip3 install --user Pillow`).

Recipe per scan:
1. Render page to PNG: `pdftoppm -r 200 -png -f 1 -l 1 <pdf> <prefix>` (writes `<prefix>-1.png`)
2. Open `<prefix>-1.png` in PIL, grayscale convert
3. For each row, count pixels where `gray < 200`. A row counts as "content" only if it has at least 30 such pixels (filters dust and small smudges)
4. First and last content rows define the vertical bounds; same for columns
5. Add ~25px margin
6. Crop the PNG and save as a new single page PDF (`Image.save(out, "PDF", resolution=200)`)
7. For upside down scans, `img.rotate(180, expand=True)` before density analysis
8. Combine front and back of ID cards with `pdfunite` into one multi page PDF

Parameter calibration (validated on a session of 20+ ID card, passport, vehicle reg, immunization record scans):
- `WHITE_THRESHOLD = 200` (gray < 200 = content). 235 is too permissive, picks up paper texture. 150 misses faint text.
- `MIN_ROW_PIXELS = 30` filters single-pixel dust without losing real card edges.
- `MARGIN_PX = 20-25` keeps card borders visible without bloating the page.

The naive bbox (using `getbbox()` on a mask without density filtering) failed on the Colorado driver's license front: a single stray dot below the card pulled the bbox down to near the page bottom. Density filtering caught the card edges correctly.
