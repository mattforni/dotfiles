---
name: sharpen-saws
description: Run a sharpen session to move collaboration one small step toward Levels 7 and 8 of the agentic engineering hierarchy. Evaluate recent activity (git, memory, plans) against LEVELS.md, propose one or two concrete small moves toward background autonomy or agent teams, help implement the chosen move, and append a dated log entry. Use this skill whenever the user says "sharpen", "sharpen saws", asks to "sharpen our process", or explicitly starts a sharpen session. Paired with the weekly Sharpen Saws block on Wednesdays. The sharpener agent carries this method for background dispatch.
argument-hint: "[optional focus area, e.g., 'zero code review' or 'email triage']"
allowed-tools:
  - Agent
  - Bash
  - Read
  - Edit
  - Write
  - Glob
  - Grep
  - AskUserQuestion
---

# Sharpen Assist

Move our collaboration one rung at a time toward Level 7 (background agents) and Level 8 (autonomous agent teams) as framed in [Bassi Eledath's 8 Levels of Agentic Engineering](https://www.bassimeledath.com/blog/levels-of-agentic-engineering). Each session is small. One small move, logged, compounds.

The `sharpener` agent (`~/.claude/agents/sharpener.md`) runs this method in the background and returns to Forni at the pick; the main session hosts the pick and the implementation, and performs every write. Run the method inline only when the sharpener is unavailable or Forni wants to drive together.

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

## The Method

Seven phases. The sharpener owns Ground, Scan, and Board, and drafts the Log; the main session hosts Pick and Implement in dialogue with Forni, and performs every write, including Log and Codify.

### Phase 1: Ground

Anchor on LEVELS.md: the current state table, the last two log entries, and any queued reps, which are standing candidates unless explicitly retired. Read the plugin and skill learned rules. Honor the focus area if the session was given one (e.g., "zero code review"), narrowing every later pull to it.

### Phase 2: Scan

Pull the signal, inline:

- **Recent git activity**: `git -C ~/Eudaimonia log --since="14 days ago" --oneline`, and the same for `~/Eudaimonia/Craft/Development/personal/homebase`
- **Recent auto memory entries**: the Eudaimonia project's `MEMORY.md` index under `~/.claude/projects/`, plus a skim of the newest entries
- **Recent plan files**: `ls -lt ~/.claude/plans/ | head -10` and read titles
- **Patterns to find**: repeated synchronous work (background candidates), friction points (corrections, retries, missing hooks), foundation cracks (Levels 3 to 5 drift), background ready tasks that do not need Forni's judgment each time

Then dispatch the two scouts in parallel, each for capability the scanner lacks, each briefed with objective, output format, and boundaries: **socrates** to critique this skill, its learned rules, and the LEVELS.md framing with fresh eyes, and **claude-code-guide** to surface current Claude Code and Agent SDK capabilities the setup is not using.

### Phase 3: Board

Synthesize the scan and both scout reports into a ranked board of three to five candidate moves. Each row: the move in one line, the level it pushes, the smallest rep this session, the evidence pointer, and whether it is session sized or plan sized. Rank by evidence strength first, then smallest rep size. Route context sprawl to a grooming flag rather than the board.

### Phase 4: Pick

The main session surfaces the top one or two rows to Forni in his voice: tight, facts forward, concrete, never the whole board. Each proposal carries:

- **What it is**: One sentence describing the change
- **Which level it pushes**: 3 (context), 4 (compounding), 5 (skills), 6 (harness), 7 (background), 8 (teams)
- **Concrete next action**: The smallest unit of work to make it real this session
- **Why now**: What in the recent activity triggered this proposal

Ask one question: which move (if any) do we make this session? If Forni picks none, still log the proposals and the board's remaining rows so they persist for next time.

### Phase 5: Implement

The main session, with Forni. Small enough to finish in session. If the chosen move is larger than session size, split it: do the enabling piece now, queue the rest as a Todoist task on next Sunday or as a follow up plan file.

### Phase 6: Log

Resume the sharpener with the pick and the session outcome; it drafts the entry and returns it. The main session reviews the draft and appends it to `~/Eudaimonia/LEVELS.md` under `## Log`:

```markdown
### YYYY-MM-DD — [one line title]

**Picked:** [the move, one line]
**Level pushed:** [which dimension/level]
**Implemented:** [what landed this session]
**Deferred:** [what got queued, if anything]
**Next rep:** [one line hint for future sharpen]
```

If the session altered the Current State table (a dimension's level genuinely changed), update that table as part of the log entry. Be honest: a single move rarely moves a level on its own.

### Phase 7: Codify

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

See [learned-rules.md](learned-rules.md).
