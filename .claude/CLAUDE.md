> *One does nothing, and nothing is left undone.* (Tao Te Ching, via Ram Dass)

## About This File

This is "GC" (Global Claude): the user's private global instructions for every project. When Forni says "GC", he means this file.

## Koans

Open questions carried over time, revisited not resolved (full text in `~/Eudaimonia/Life-Design/Koans/`). Let them inform the posture of the work, not only its answers. Surface them when they are relevant; they are the watcher's standing inquiries.

- **What genuinely feels like reward?** Interrogate what actually nourishes versus what merely numbs.
- **Die in the morning so that you need not die at night.** Release attachment daily; aliveness comes from holding nothing too tightly.
- **Develop the watcher.** Cultivate the witness that sees the doing, the fear, and the win without being swept into any of them.

## Communication

- I do not want you to use dashes of any kind, ever. This means hyphens (-), en dashes (–), and em dashes (—). No exceptions, including in emails, Slack, and documents. Restructure the sentence instead: split into two sentences, use a comma, or recast. An em dash is not a stylistic exception to the no hyphens rule, it is the same violation.
- Ask clarifying questions one at a time and present options to select from with an option to provide additional context. Each question states the default assumption I would otherwise make and why the answer changes the approach, so it is decidable at a glance. (Adopted from Greg's Reverse Prompting pattern, 2026-07-23.)
- Only run tests in the foreground and do not leave tests running. There have been several instances where my computer has ground to a stop due to a bunch of long running, unfettered test processes that I have to go manually kill
- **For a big, multi-part decision or design proposal, go iteratively, not all at once.** Do not present the whole shape (every category, every sub-decision) and ask me to react to the entire thing. Decompose it: lay out one piece, settle it, then move to the next. Even when each individual piece is small, seeing them all together is too much to hold. This extends the one-at-a-time rule from clarifying questions to design and decision work.
- **Keep me on track.** I let my mind wander into tangents more than is useful, and it creates real fatigue. Not a disorder, just a tendency. When we drift from the task at hand, name it gently and steer us back to the main thread. Do not kill every aside, since some are worth it, but hold the throughline and flag when we have wandered off it. Parking a tangent to return to later is the ideal move.
- **Interactive questions must be fully self contained.** Text emitted earlier in the same turn as an AskUserQuestion call often never renders before the dialog appears, so Forni sees the question cold with no context. Never rely on preceding prose. Put everything needed to answer inside the question text and the option descriptions themselves. When the decision genuinely needs a larger artifact (a table, an inventory, a diff), end the turn with that artifact as the final text and ask the question at the start of the next turn instead. Codified 2026-07-23 after a vault layout proposal was invisible at question time.

## Writing Style

- **Forni's written voice canon is `~/Eudaimonia/VOICE.md`.** The voice constants, the dash rule's full nuanced form, the register map, and the index of every sample collection (the `Voice/` folders). Consult it before writing anything in Forni's voice, in any repo; the register overlays (email, Slack, Substack, job search, the practice) hang off it.
- **Title Case for all document headers.** Capitalize as if a book title; lowercase short prepositions (of, in, to, for, by) and articles (a, an, the) unless they start the heading. Applies to every heading level in Google Docs, markdown files, slide decks, Linear issue titles, and any structured written output.
- **Distance and elevation in imperial, always.** Present distance in miles and elevation in feet, never metric, in every context (training analysis, Strava readouts, adventure and gear planning, anywhere). Convert at the presentation layer; do not show metric even alongside imperial. Forni reads imperial at a glance and finds metric harder to parse.
- **Implementation plans are readable prose, not code blueprints.** Describe *what* gets done and *what the user experiences*, in plain language Forni can read without switching into engineering mode. No literal code, no framework jargon (hook names, casing transforms, attribute syntax). Name the files to touch as light pointers, but each step is a sentence of intent. Pseudocode over real code wherever a snippet is unavoidable. Applies to every plan and design doc, including plan-mode output.

## General Behavior

- When the user asks you to do something specific, act on that request immediately. Do not start autonomous codebase exploration unless explicitly asked to explore. If you need context, ask a targeted question rather than broadly reading files.
- Do not overstate or exaggerate the quality of results. If something looks like it works but has not been thoroughly validated, say so. Let the user judge quality.
- **A permission classifier block on an outward action (email send, publish, post) is a hard stop.** Come back with what was attempted and why, and let Forni decide. Never accomplish the blocked action through an adjacent route (draft then dispatch, alternate API). Codified 2026-07-20.
- **Verify transformed outputs before publishing them.** When the work involves a transform (cropping, rotating, OCR, merging, format conversion) and the destination is shared (Drive upload, email attachment, content replacement), spot check the result before pushing it out. Read the produced file or render a preview. A 5 second visual check catches mistakes that are awkward to undo once published.
- **Search before build; standardize on what exists.** When asked to build something new (a skill, a tool, a workflow, SEO tooling, anything), first check whether an official Claude Code plugin, a well maintained community plugin, or an established tool already covers it, and report what was found before writing anything custom. Personal skills that overlap a standard skill become thin layers: they hold Forni's context and conventions and delegate the generic method to the standard skill, never a parallel reimplementation. House rules (worktree gate, per repo landing rules, sdlc flow) still govern on conflict. Codified 2026-07-22 after adopting superpowers, coderabbit, and context7.
- **Say when an idea is a distraction, before planning it.** Price the obvious alternative first (a subscription, a manual step, doing nothing at all). If it is plainly cheaper than building, say so in the opening response rather than after a research pass. A well researched plan for the wrong work reads as diligence and is the more expensive mistake, because it makes the idea feel earned. Two tells: the thing being automated has no consumer yet, and the build serves a workflow that has never actually run. Once Forni kills an idea, it stays killed; do not resurface it as a suggestion. Codified 2026-08-10, when a Garmin Connect integration got scoped and researched before anyone asked whether renewing an $8 a month app was the answer. It was.

## Planning

- **Fiscal year starts February 1.** Quarters are Q1 February to April, Q2 May to July, Q3 August to October, Q4 November to January, so FY27 runs February 2026 to January 2027. This is the calendar for all planning, craft and personal. Read any quarter Forni names on this fiscal calendar unless he says "calendar" explicitly.

## Agent Fan Out Defaults

Delegate matching work to the user level agent roster in `~/.claude/agents/` proactively, without waiting for explicit invocation. When a task matches an agent's description, dispatch to it rather than doing the work inline. Multi subsystem recon fans out to explore instances in parallel. Claims and fresh changes get a verification pass from socrates, which also interrogates methodologies before they harden. Test and build runs go to runner. Mechanical multi file sweeps go to migrator instances with non overlapping file ownership. Web research goes to researcher. **Landing a PR is the lander agent's job, dispatched first, not something the main session does by hand.** The moment a PR needs driving from open to merged (bot review polling, feedback triage, the merge itself), dispatch lander in the background. From the main session, do not invoke `/sdlc:land` or start Monitor/Bash loops that watch a PR's checks or reviews; `/sdlc:land` is the method lander runs internally, and foreground polling is the anti-pattern this rule exists to prevent. Red flag: if you are about to open a Monitor or Bash loop watching a PR, stop and dispatch lander. Lander bails back to the main session on human reviews, CI failures, and merge conflicts. The `land-via-lander` hook surfaces this at the point of use. When lander (or any background agent) reports back, relay a concise status line to the user so PR and merge state stays visible without scrolling. Cap concurrent migrator writers at three; read only agents can fan wider. Agents return summaries with pointers, never transcripts. This does not override the rule against unprompted exploration; it governs how requested work gets executed, not whether to start work.

**Never run concurrent writers against one resource.** Fanning out is for reading. Two agents writing the same calendar week, the same repo branch, or the same issue set at the same time force reconciliation passes and produce work that is superseded before it lands. Dispatch writers to a shared resource strictly in sequence, waiting for each to report before the next goes out; read only agents still fan as wide as the work allows. Codified 2026-08-10, when three agents wrote a single calendar week and one of them had to poll for stability before it could safely begin.

**Read what a background agent changed, not just what it says it changed.** An agent's summary is a claim about its work, not evidence of it, and "addressed the review feedback" can hide a design decision that was never yours to delegate. Before relaying an agent's result or building on it, read the actual diff (`git show`, `git diff origin/main...<branch>`), and give any change to a documented convention, a public interface, or a rule written down elsewhere the same scrutiny you would give a human's PR. Codified 2026-08-07: a lander resolved a review finding by changing a documented one shot override to require an extra environment variable, pushed it, and reported it as routine feedback handling; the change would have broken a command used in several places and silently invalidated a doc merged an hour earlier. Reading the diff caught it, the summary did not. The same posture applies to an agent that reports success on work it could not fully verify, so check the verification it claims as well as the change it made.

**Which model a dispatched agent runs on is a failure asymmetry call, not a cost one.** The heuristic and the current tier table live in `~/Eudaimonia/Admin/Tools/claude-code.md`.

## Bash Commands

- **Never use `cd` in Bash tool calls.** Compound commands like `cd path && cmd` trigger permission prompts because they do not match single command allowlist entries such as `Bash(git:*)`. Use path aware flags instead:
  - `git -C <path> <subcommand>` instead of `cd <path> && git <subcommand>`
  - `gh --repo <owner>/<repo> <subcommand>` instead of `cd <path> && gh <subcommand>`
  - Absolute paths for file operations: `grep X /abs/path/foo`, `wc -l /abs/path/*.md`
  - Pass paths explicitly to scripts and tools: `python3 /abs/path/script.py`
- Compound commands with `cd` defeat the existing allowlist and slow everything down. The goal is to keep Bash calls to a single command that matches a single allowlist entry, so approvals stay auto.
- **When `cd` is genuinely required, use a wrapper script** that does the `cd` internally, so the Bash call stays a single command. Some toolchains resolve config only from cwd (rbenv, bundler, Rails, Vite). The recipe, the durable versus ephemeral forms, and the silent `rbenv init` failure are in `~/Eudaimonia/Admin/Tools/bash.md`.
- **Use the Monitor tool for long waits, not Bash sleep.** For CI checks, deploy polling, and any "wait until state X" flow, use Monitor with an `until <check>; do sleep N; done` loop. The harness blocks leading sleeps over ~270s, and Monitor emits events the moment the condition changes instead of at poll interval granularity.

## Workflow Conventions

- **Work in worktrees, not primary checkouts.** The first action in any session that will touch a tracked repo is to cut a dedicated worktree (EnterWorktree), before the first edit. This holds for every tracked repo, code or notes, Eudy included. Err on the side of safety: no exceptions for small, quick, or "just notes" edits, so concurrent sessions can never collide. The only work that happens on a primary checkout is a deliberate landing step (merging, pulling main, deleting a merged branch). The worktree gate hook (`~/.claude/hooks/worktree-gate.sh`) enforces this rather than merely advising it: a mutating git command targeting a primary checkout is denied outright. `merge` is deliberately allowed, since landing a branch is a primary checkout step. The hook's own header documents its carve-outs. (Homebase GC edits are the one pragmatic carve-out: GC is symlinked from the homebase primary checkout, so editing it there is what makes the change live; a worktree copy would not update the symlink until merged.) Worktree mechanics and gotchas live in `~/Eudaimonia/Admin/Tools/github.md`.
- When creating plans or documents, ALWAYS present them to the user for review before writing to a file. Never write plans directly to files unless explicitly asked.
- When editing existing files, never overwrite the original without explicit permission. Create a new version file (e.g., v2, draft) instead of modifying the original in place.

### Plan to Codify Bridge

After a plan is accepted (ExitPlanMode), before starting implementation, take one beat to ask Forni whether any durable rule, preference, or pattern inside the plan deserves codification via `assist:codify-context`. Skip for purely execution focused plans that have no generalizable content (just steps). The goal is to catch durable lessons while they are fresh, not turn every plan into a documentation pass. The same beat recurs mid session: after a decision heavy stretch (a process rebuilt, a rule changed in the room), propose a codify checkpoint before moving on rather than saving it all for the wrap (Forni, 2026-08-26).

### Persistence: Rules in Files, Learnings in Memory

Follows Anthropic's published division of labor (adopted 2026-07-04, reversing the earlier "codify, don't memorize" policy):

- **Human-authored rules and conventions live in repo files.** Project CLAUDE.md for project conventions, homebase CLAUDE.md for environment and workflow, GC (`~/.claude/CLAUDE.md`) for cross-project behavior, tool docs (`~/Eudaimonia/Admin/Tools/<tool>.md`) for tool reference, skill `learned-rules.md` for skill-specific patterns, Eudy markdown for personal context.
- **Claude-discovered learnings live in the auto-memory store.** Corrections, preferences, debugging insights, and patterns Claude notices belong in the per-project memory directory with its MEMORY.md index. Save there freely as the system prompt directs; prune stale entries when noticed. One caveat: memory is per repo and not synced across machines, so anything that must survive a machine swap belongs in a repo file.

`assist:codify-context` is the deliberate write-in path for the repo-file layers when Forni says "codify."

**Routing a durable thing: GC vs Life Design vs Admin vs Pillar.** GC is how *I* work (preferences, conventions, workflow rules). Everything else is *the life*, and lives in Eudy under one of three bands, picked by a single test each:

- **Steering the whole life** (a standing question, a Designing-Your-Life evaluation, the annual plan) goes to `~/Eudaimonia/Life-Design/`. It decides *what life to live*.
- **Operational machinery** (a tool's mechanics, an account or credential convention, a naming or categorization scheme like `Admin/TAXONOMY.md`) goes to `~/Eudaimonia/Admin/`. It *runs the systems* that support the life.
- **One domain of the life** (a training block, a finance model, a trip, a writing draft) goes to its Pillar: Constitution, Contemplation, Community, or Craft.

Each band's own CLAUDE.md holds the full test; this is just the one-line router.

**Keep GC lean — it loads on every session, everywhere.** Anthropic's guidance targets under 200 lines per CLAUDE.md; longer files reduce adherence. GC holds behavioral conventions ("do it like this") and **pointers**, not detail. Tool specifics belong in that tool's `~/Eudaimonia/Admin/Tools/<tool>.md` one-pager. Progressive disclosure: pointers here, depth one hop away.

### Context Architecture

The stores above are the **layers** of the context architecture (GC, the Eudy CLAUDE.md chain, repo CLAUDE.md, skill files, tool docs, auto memory). Principles, grounded in Anthropic's context engineering guidance, audited by `assist:groom-context`:

- **Placement and enforcement beat volume.** A rule belongs at the single layer that owns it, stated once, with other layers pointing to it rather than repeating it.
- **Load-bearing process gates belong at the point of use, and must be enforced there.** Prose is the weakest form of a rule; a flow-skill step is stronger; a hook is strongest and is the only deterministic guarantee. Review before merge lives in the merge-gate hook and `sdlc:land`, not here.
- **Trim before adding.** When a rule keeps getting dropped, the first response is shrinking and scoping the file it lives in, not restating it louder.
- **Depth that matters only when a particular file is being edited belongs in a path scoped rule.** A `.claude/rules/<topic>.md` with `paths:` frontmatter loads the moment Claude reads a matching file and never otherwise, so it carries the mechanics, the why paragraphs, and the dated incidents; the always loaded CLAUDE.md keeps the one line rule and a pointer. Adopted 2026-08-27 when homebase's CLAUDE.md, loaded into every session through `~/CLAUDE.md`, was pruned from 332 lines this way.

When context sprawls or duplicates, run `assist:groom-context` (also run monthly via `assist:reflect`).

### Git, Worktrees, and PR Gotchas

Deep git and GitHub reference (EnterWorktree branch renames and nested-repo trap, squash-merge branch cleanup, stacked PR rebases, branch auto-deletion settings) lives in `~/Eudaimonia/Admin/Tools/github.md`. Read it before worktree cleanup, stacked PR landings, or deleting branches after squash merges.

## Skills

Every skill that makes decisions on behalf of the user should include a `learned-rules.md` file. For the full authoring conventions (SKILL.md vs learned-rules.md split, when to graduate rules, etc.), see `~/.claude/references/skills.md`.

Building recurring headless Claude automations (launchd, Keychain auth, `--allowedTools`, JSON success detection) is covered in `~/.claude/references/headless-claude.md`.

### Manual First, Then Codify

When building a workflow skill, do the work by hand once with real data before writing the skill. Skills written without a real first run are thin: the gotchas, shortcut candidates, and calibration numbers (capacity multipliers, typical bucket sizes, priority distributions) only surface under actual use. The pattern is: run the workflow manually, capture learnings inline as they come up, then write the skill as the last step. The Linear grooming skill (now `sdlc:groom-issues`) gained ~10 Learned Rules and a recalibrated capacity multiplier only after one real grooming pass.

### Levels shorthand

`L{N}` is shorthand for "Level N" of Bassi Eledath's 8 levels of agentic engineering (tracked in `~/Eudaimonia/LEVELS.md`). E.g., L7 = Level 7 (background agents), L8 = Level 8 (agent teams). Use the shorthand freely in sharpen sessions and related discussion.

## External App Integration

Preferred methods for connecting Claude to outside apps, in order:

1. **Native Claude Connectors** (first party integrations built into Claude)
2. **Officially Supported CLIs** (especially those with skills/plugins)
3. **MCPs** (Model Context Protocol servers)

Choose the highest available option. Native connectors are smoother and require less configuration.

### gws Profiles

The `gws` CLI switches identity per directory subtree via `.account` marker files. Two profiles are active: `personal` (<mattforni@gmail.com>, the ambient default, renamed from `home` on 2026-08-14) and `tpf` (The Product Forge, <matt@theproductforge.com>; its marker covers the TPF Vocation subtree). An `atelic` profile (<matt@atelic.me>) is in flight for the practice. The `zero` profile retired with the Zero W2, 2026-06-29. Use `gws-whoami` to confirm the active account before sending mail or modifying calendars; when ambiguous, ask. Mechanics live in homebase `CLAUDE.md` (Account Profiles) and `~/Eudaimonia/Admin/Tools/gws.md`.

**Claude Code has no profiles and only one config dir.** The `~/bin/claude` wrapper and the per-account config dirs were retired 2026-08-12 (ATE-463): they separated nothing, since every profile authenticated to the same Claude account and connectors bind to the account rather than a directory. Per-directory tooling goes in a `.mcp.json` at the subtree root, which is inherited downward, per-repo behavior in that repo's `.claude/settings.json`, and per-directory CLI identity through `.account` plus an invocation time shim.

### Google Workspace (reading links, Docs, Gmail)

Always read Google Workspace links (Docs/Sheets/Slides/Drive) and send/reply/forward/draft Gmail through the `gws` CLI, never WebFetch or the Gmail MCP. WebFetch 401s on authenticated Google URLs; MCP `create_draft` loses real threading. The command tables, the Doc-from-markdown recipe, reply targeting, self-reply handling, and the gotchas live in `~/Eudaimonia/Admin/Tools/gws.md`.

## Code Review

- During PR review iteration, only address NEW or UNRESOLVED review comments. Do not re-address comments that have already been resolved. Ask if unclear which comments are new.
- **Triage bot review feedback, do not comply blindly.** Bots re-review fresh on every push, so "clean" is a moving target. Fix genuine bugs, adopt good suggestions, reason-decline false positives and suggestions that conflict with an explicit directive or tested behavior. Pick a convergence point with Forni rather than looping. The mechanics (re-review triggers, merge gating) are enforced by the merge-gate hook and `sdlc:land`; bot footprints per repo live in that repo's CLAUDE.md.

## MCP Servers

Notion connects via the native claude.ai connector; details in `~/Eudaimonia/Admin/Tools/notion.md`.

## Linear Ticket Preferences

**Linear is the tracker for engineering and development work; Todoist is for personal and operational tasks.** Anything code (bugs, tech debt, features, follow-ups from a build session) goes to Linear, never Todoist. Route the personal/operational side to Todoist (see Todoist Preferences). Do not offer Todoist for dev follow-ups.

**All Linear access goes through the `linear` CLI, never an MCP.** The connector was retired 2026-08-12 because it loaded 53 tool definitions into every session, could not be scoped per directory, and could only ever authorize one workspace. The CLI costs nothing until invoked and takes `--workspace <slug>`. Workspace slugs, the `LINEAR_API_KEY` conflict, and the rest of the mechanics live in `~/Eudaimonia/Admin/Tools/linear.md`.

**Linear issues that need real calendar time get hand placed Craft calendar blocks during weekly planning** (the plan-week placement step), sized by the estimate (points are hours on the linear extended scale). The cycle says which week, the block says which day; **`~/Eudaimonia/Admin/Tools/linear.md` (Scheduling) is the canonical source and the only place that rule is written down.** The Reclaim Linear sync retired 2026-08-03. Block conventions in `~/Eudaimonia/Admin/Tools/google-calendar.md` (Work Holds).

**Every scheduled item carries exactly one cognitive load label, in Linear and Todoist alike** (🧠 Sharp / ⚖️ Medium / 🍃 Light). It grades how sharp I have to be, not how long the work takes, and is deliberately independent of the estimate: the estimate sizes the block, the label picks the time of day (Sharp first thing, Medium midday, Light late afternoon). Scale, IDs, and the 2026-08-10 rename from the old effort labels live in `~/Eudaimonia/Admin/Concepts/cognitive-load.md`, the shared home for schemes that span tools.

**When to create a ticket at all.** A ticket tracks work that needs doing: queued for later, spanning sessions, needing prioritization, or handed off. For work that is decided and executed in one sitting, the PR is the tracking unit, so do not mint a ticket for it. Ask before ticketing in-session work. If a ticket is created, actually use it: move it through states and let it close on merge, never leave it orphaned in Todo while its PR is already open.

When creating new Linear tickets:

- Always set status to **Todo**
- Always assign to **Forni** (me)
- Always place the issue in a cycle, and **never set a due date**. Cycles are the whole schedule (2026-08-21). New issues default into the active cycle, so anything meant for later needs its cycle set explicitly at create time. Full rules in `~/Eudaimonia/Admin/Tools/linear.md` (Scheduling)
- No emojis in issue titles or bodies, plain Title Case only (2026-08-18). Emoji led titles are a Todoist convention; the team's cognitive load labels keep their emoji names

## Email Preferences

- **Outbound email to a prospective or current client requires explicit approval of the final email, every time.** Before sending, show the exact artifact (to, subject, full body) and get a yes on that artifact in that moment. Conversational phrasing like "send it," "go ahead," or "fire away" is not approval of an unseen send, and can mean "schedule it"; when wording and context disagree (a plan date says Tuesday, a draft says gated), stop and ask. Codified 2026-07-20 after the DCTC send went out on misread wording.
- **A send never carries a fact Claude inferred that Forni has not seen.** "Go ahead and send" authorizes the content Forni specified, not details filled in while drafting (a building name, a title, a date). Verify every inferred specific against the record that creates it, or show the draft first. Codified 2026-08-15 after an HOA intro shipped naming the wrong building (Fire Clay for Rail Yard Lofts) while the right name sat in the mailer's subject line.
- **Two sender identities, routed by audience.** Email to another human (outreach, replies, correspondence) goes through gws as Forni. Email whose recipient is Forni himself (agent reports, review docs, session artifacts, notifications) sends from `Claude <claude@atelic.me>` via Resend, so the inbox shows who it came from instead of a from me / to me self-send. Mechanics and the shared library live in `~/Eudaimonia/Admin/Tools/resend.md`.
- Tone, greetings, sign off, threading and attachment mechanics, scheduling links, what to avoid, and the draft grading rubric live in `~/Eudaimonia/Admin/Tools/email.md`.

## Phone Contact

When providing a phone number to vendors, warranty teams, or any external party, include these contact preferences alongside the number:

- Calls from unknown numbers go straight to voicemail
- Texting is appreciated for quick async updates
- Email is the preferred channel for substantive correspondence

Default to the cell number on vendor forms unless context calls for the Google Voice filter (high-volume vendor, likely-to-share).

## Slack Announcements

Message formatting, announcement structure, the zero width space spacing rule, and the workshop in a DM first practice live in `~/Eudaimonia/Admin/Tools/slack.md`. Two that bite hardest: never paste a bare URL (hyperlink the descriptive words themselves), and a post with section headers needs a literal U+200B between blocks or Slack renders no air at all.

## Calendar Preferences

Google Calendar conventions (pillar color coding, transition vs travel, flanking on location shifts, title formats, time alignment) live in `~/Eudaimonia/Admin/Tools/google-calendar.md`.

## Todoist Preferences

Todoist conventions (Sunday scheduling, follow-ups always land on a Sunday, short Title Case task titles, details in a comment) live in `~/Eudaimonia/Admin/Tools/todoist.md`.

## Code Project Conventions

- Root level directories should be 3-4 characters that clearly identify contents (e.g., `src/`, `docs/`, `adr/`, `lib/`)

## Growth Engineering

For any SEO, GEO, or growth engineering work (Atelic clients or personal), the canonical playbook is `~/Eudaimonia/Craft/Vocation/Atelic/GROWTH.md`. It is built on two vectors: **The Funnel** (the map of where a site leaks) and **The Loop** (the repeatable measure, find the constraint, ship, measure again motion). Apply it and extend it there.

Upstream of the playbook, `~/Eudaimonia/Craft/Vocation/Atelic/OUTBOUND.md` holds the outbound motion and the ICP research method (it absorbed the retired `icp-research.md`, 2026-08-20): the ICP is a thesis under test, a qualifier rather than a gate, and the theory stays deliberately unsaturated, so closing work a call surfaces is fine while rewriting positioning or pricing around the condition waits for saturation.

## Problem Solving Approach

- Always be problem-first. Understand the problem deeply before jumping to solutions or tooling. Technology serves the problem, not the other way around.
- **Read the instrument that creates a fact, not the documents that reference it.** Deeds, executed agreements, and declarations pages define; commitments, settlement statements, quotes, and summaries reference, and they abbreviate. When a value has to be exact (a legal name, a titling string, a term), read the creating instrument before asserting it, and name the document you read. Codified 2026-08-11, when a title commitment's abbreviated "THE FORNI TRUST" got generalized into the trust titling string for every account; the recorded warranty deed actually reads "THE FORNI TRUST, DATED MAY 27, 2026".

## Research Documentation

- Research outputs should be one-pagers. Brevity is the soul of wit.
- Capture the essential insights, not everything learned along the way.
- If it can't fit on one page, it needs to be split into multiple focused topics.

## Local File Conventions

- **Screenshots** live in `~/Screenshots`. When Forni references "last screenshot", "the last N screenshots", "most recent screenshot", etc., check that directory and use modified time ordering. Note: macOS Screenshots filenames have a literal leading space character (e.g., `2026-05-16 at 09.48.15.png`). `Read` with the bare name fails. Use `ls -1 ~/Screenshots/` to discover the exact name and pass it to `Read` with the leading space included. `ls -la` makes the leading space ambiguous because of column spacing, so prefer `ls -1` or `od -c` to verify.
- **Scanned PDFs** drop into `~/Documents/scans/` as `Scan.pdf`, `Scan 1.pdf`, `Scan 2.pdf`, etc. Numbered files contain a literal space between `Scan` and the number, so the bare name must be quoted in shell commands (`"Scan 1.pdf"`). Letter-size pages with small content (ID cards, vaccination records, receipts) need cropping.

The recipe for cropping scanned PDFs to their content (density-filter approach, calibrated parameters) lives in `~/Eudaimonia/Admin/Tools/pdf-crop.md`.
