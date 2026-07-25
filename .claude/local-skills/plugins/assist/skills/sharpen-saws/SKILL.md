---
name: sharpen-saws
description: Run a sharpen session to move collaboration one small step toward Levels 7 and 8 of the agentic engineering hierarchy. Evaluate recent activity (git, memory, plans) against LEVELS.md, propose one or two concrete small moves toward background autonomy or agent teams, help implement the chosen move, and append a dated log entry. Use this skill whenever the user says "sharpen", "sharpen saws", asks to "sharpen our process", or explicitly starts a sharpen session. Paired with the weekly Sharpen Saws block on Wednesdays.
argument-hint: "[optional focus area, e.g., 'zero code review' or 'email triage']"
allowed-tools:
  - Bash
  - Read
  - Edit
  - Write
  - Glob
  - Grep
  - AskUserQuestion
  - TodoWrite
---

# Sharpen Assist

Move our collaboration one rung at a time toward Level 7 (background agents) and Level 8 (autonomous agent teams) as framed in [Bassi Eledath's 8 Levels of Agentic Engineering](https://www.bassimeledath.com/blog/levels-of-agentic-engineering). Each session is small. One small move, logged, compounds.

## Before Every Invocation

1. Read [learned-rules.md](../../learned-rules.md) for any prior corrections about how Forni wants sharpen to run.
2. Read [LEVELS.md](../../../../../../Eudaimonia/LEVELS.md) (absolute path: `~/Eudaimonia/LEVELS.md`) to anchor on current state and recent log entries.
3. Check this skill's directory for a local `learned-rules.md` and read it if present.
4. When the session will write to a repo, cut its worktree branch named `YYYY-MM-DD-sharpen-saws` (date first so branches sort chronologically). One branch per repo touched (homebase, Eudy).

## Principles

- **One small move per session.** Not a refactor. One concrete rep that shifts posture toward background autonomy.
- **Propose, then ask.** Surface one or two options with Forni's voice, not a menu of five. Let him pick at most one.
- **Levels 3 through 5 are the foundation.** If context engineering, compounding, or skills feel sloppy, sharpening those is a legitimate move even though they are not 7 or 8. Clean foundation lets higher levels scale.
- **Evidence over theory.** Ground proposals in what actually happened in recent sessions, not abstract ideals.
- **Codify what you learn.** If the session surfaces a durable lesson, invoke `assist:codify-context` or append directly to the right learned-rules.md.
- **Sprawl is a grooming job, not a sharpen move.** If the session reveals the context architecture is duplicated, stale, at the wrong altitude, or a basic keeps getting dropped, that is `assist:groom-context` (run monthly via reflect, or on demand), not a sharpen rep.

## Workflow

### Step 1: Gather signal

Pull recent activity to ground the session. Run these in parallel when possible.

- **Recent git activity in Eudaimonia**: `git -C ~/Eudaimonia log --since="7 days ago" --oneline`
- **Recent auto memory entries**: Read `~/.claude/projects/-Users-mattforni-Eudaimonia/memory/MEMORY.md` and skim the most recently added feedback_*.md files
- **Recent plan files**: `ls -lt ~/.claude/plans/ | head -10` and read titles
- **Optional focus area**: If the user gave a focus in arguments (e.g., "zero code review"), narrow the scan to commits, memories, and plans relating to that area

### Step 2: Find patterns

Look for:

- **Repeated synchronous work** — tasks Forni ran manually multiple times that could be scheduled, looped, or delegated to a background agent
- **Friction points** — corrections, retries, or stuck moments that suggest a missing skill, harness constraint, or hook
- **Foundation cracks** — signs that Levels 3, 4, or 5 need shoring up (context noise, missed codifications, skill drift)
- **Background-ready tasks** — anything that follows a predictable pattern and does not require Forni's judgment each time

### Step 3: Propose one or two moves

Present proposals in Forni's voice: tight, facts forward, concrete. Each move should have:

- **What it is**: One sentence describing the change
- **Which level it pushes**: 3 (context), 4 (compounding), 5 (skills), 6 (harness), 7 (background), 8 (teams)
- **Concrete next action**: The smallest unit of work to make it real this session
- **Why now**: What in the recent activity triggered this proposal

Examples of the shape:

- "Schedule a weekly Monday morning background agent to surface new Linear tickets and draft a triage summary. Level 7. Uses CronCreate. Triggered by the fact that Monday planning sessions repeated the same scan four times."
- "Add a pre-commit hook that runs the codify skill when a plan file is finalized. Level 6. Wire via settings.json hook. Triggered by three sessions where plan lessons did not survive into memory."
- "Split the sharpen skill itself into a quick cadence reader and a deeper reflection agent. Level 5 → 7. Triggered by this session feeling too long for a weekly check in."

### Step 4: Let Forni pick

Ask one question: which move (if any) do we make this session? If Forni picks none, still log the proposals so they persist for next time.

### Step 5: Implement the chosen move

Small enough to finish in session. If the chosen move is larger than session size, split it: do the enabling piece now, queue the rest as a Todoist task on next Monday or as a follow up plan file.

### Step 6: Log

Append a new entry to `~/Eudaimonia/LEVELS.md` under `## Log` with:

```markdown
### YYYY-MM-DD — [one line title]

**Picked:** [the move, one line]
**Level pushed:** [which dimension/level]
**Implemented:** [what landed this session]
**Deferred:** [what got queued, if anything]
**Next rep:** [one line hint for future sharpen]
```

If the session altered the Current State table (a dimension's level genuinely changed), update that table as part of the log entry. Be honest: a single move rarely moves a level on its own.

### Step 7: Codify if durable

If the session surfaced a rule, preference, or insight worth preserving:

- **Cross-skill correction** → append to `~/.claude/local-skills/plugins/assist/learned-rules.md`
- **Sharpen-specific rule** → append to this skill's `learned-rules.md` (create if missing)
- **Broader Eudaimonia convention** → invoke `assist:codify-context` for the full three-layer write up

## Output Shape

A sharpen session produces:

1. A short summary of signals found (2 to 4 bullets max)
2. One or two proposed moves
3. Whatever got implemented
4. A new log entry in LEVELS.md
5. Any learned-rules additions

Keep the session tight. If it starts to feel like an essay, it is too long. One page.

## Anti-patterns

- **Do not** propose five moves. Forni will feel decision fatigue and pick zero.
- **Do not** restate the full LEVELS.md table in the session output. Reference it, do not duplicate.
- **Do not** make a large structural change disguised as a sharpen move. If it needs a plan file, it needs a plan file.
- **Do not** skip the log entry. The compounding value is in the running record, not any single session.
- **Do not** sharpen and also try to do unrelated work in the same turn. Sharpen is its own session.

## Learned Rules

_(Empty. Populated as Forni corrects sharpen's judgment over time.)_
