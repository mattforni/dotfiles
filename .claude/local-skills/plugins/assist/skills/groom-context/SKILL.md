---
name: assist:groom-context
description: Audit and redesign the context architecture (every CLAUDE.md, learned-rules.md, and tool doc that loads into Claude Code sessions) so load-bearing rules are surfaced and enforced at the point of use rather than scattered, duplicated, or buried. Use this skill whenever Forni says "groom context", "groom-context", "we forgot a basic again", "the context is sprawling", "the rules keep getting lost", "clean up the context", or invokes "/assist:groom-context". Also invoked as a closing step by the monthly path of assist:reflect. This is the cleanup counterpart to assist:codify-context, which writes knowledge into the same architecture.
argument-hint: "[optional starting topic, e.g. 'code review' or 'a layer to start from']"
allowed-tools:
  - Bash
  - Read
  - Edit
  - Write
  - Glob
  - Grep
  - AskUserQuestion
  - TodoWrite
  - Agent
---

# Groom Context

Keep the context architecture honest. The failure this skill exists to fix is **encoded but not applied**: a rule was written down somewhere, but it was scattered, duplicated, at the wrong altitude, or buried in a file too large to read with attention, so Claude dropped it anyway. The fix is not more documentation. It is **placement and enforcement over volume** — surface a load-bearing rule (and ideally enforce it) exactly where it is needed.

## Before Every Invocation

1. Read this skill's [learned-rules.md](learned-rules.md) for accumulated corrections about how Forni wants grooming to run.
2. Read the plugin-level [learned-rules.md](../../learned-rules.md) for cross-skill corrections.
3. Read GC's **Context Architecture** section (in `~/.claude/CLAUDE.md`). That section is the spec: which layer owns what, and the placement and enforcement principle. You audit everything against it. If grooming changes the intended architecture, update that GC section as part of the pass.

## Principles

- **Placement and enforcement beat volume.** A rule in the right place, enforced by the flow that needs it, beats three copies of it in always-loaded prose.
- **Full pass every run.** Audit the whole surface, not a slice. Culling shrinks the surface over time, so coverage gets cheaper, not more expensive.
- **Cull without sentiment.** Removing stale, unused, and duplicated content is the point, not a side effect. When in doubt, propose the cull and let Forni veto.
- **Reorganize in layers.** Align the shape first (renames, creates, deletes, the authoritative homes), then move content into it. Saves rework when a filled structure turns out to need reshaping.
- **Propose, then apply.** Present the full diff for approval before touching anything. Never silently edit context files.

## The Layers (The Grooming Surface)

- **GC** (`~/.claude/CLAUDE.md`, a symlink to homebase `.claude/CLAUDE.md`): always-loaded behavioral conventions and pointers.
- **Eudaimonia CLAUDE.md chain**: root and nested (`Craft/`, `Craft/Development/`, `Admin/`, pillar dirs), loaded by location.
- **Repo CLAUDE.md chain**: per-repo and nested (e.g. `zero/public-web/CLAUDE.md` and its `app/...` children), loaded when working in-repo.
- **Skill files**: `SKILL.md` and `learned-rules.md` per skill in the `assist` plugin (`.claude/local-skills/plugins/assist/skills/*`) and the `skillset` plugins (`sdlc`, `linear-lifecycle`).
- **Tool docs**: `~/Eudaimonia/Admin/tools/<tool>.md`, reference loaded on relevance.
- **Auto memory**: the Claude Code per-project memory store (MEMORY.md index plus topic files). A first class layer since 2026-07-04: Claude-discovered learnings live there (per Anthropic's division of labor), so groom it for staleness and duplication against the repo-file layers, but do not treat its existence as a smell.

## Workflow

The audit produces proposed changes. It never edits silently.

### Step 1: Map (Fan Out)

Spawn parallel readers, roughly one per layer, using the Agent tool. Each reader returns the rules it found as a topic to location list plus any smells it noticed (duplication, a stale reference, a tool detail living outside its tool doc, a process gate with no enforcement). Aggregate the returns into a single topic to location map so every place a rule is encoded is visible at once. If a starting topic was passed as an argument, lead with it, but still cover the whole surface.

### Step 2: Cull

Propose removing information that is not pulling its weight: rules naming files, flags, or skills that no longer exist; one-off notes that never recurred; guidance fully superseded by enforcement that now lives in a skill or hook. Verify a reference is actually dead before proposing its removal.

### Step 3: Dedup and Reconcile Contradictions

Find the same rule encoded in several places, and rules that conflict. Choose one authoritative home (per the GC Context Architecture spec), keep the canonical statement there, and replace the other copies with a one-line cross reference. Progressive disclosure: pointer at the top layer, depth one hop down.

### Step 4: Relocate by Altitude

Move each rule to the layer that owns it. In particular: tool-specific content goes to its `Admin/tools/<tool>.md`; cross-project behavior goes to GC; repo specifics go to that repo's CLAUDE.md; skill decisions go to the skill's learned-rules. Behavior in GC, depth one hop away.

### Step 5: Salience Check

Ask whether GC, or any always-loaded file, has grown too large to be read with attention, and whether the load-bearing rules are visually prioritized. Recommend trimming the always-loaded layer toward pointers plus a short list of non-negotiables, pushing detail down a layer.

### Step 6: Enforcement Check (The Highest Value Step)

For each load-bearing process gate, ask "what actually makes me follow this?" A prose line is weak. A step inside the relevant flow skill, a checklist item, or a hook in `settings.json` is strong. Recommend migrating enforcement to where the flow runs. Example: review-before-merge belongs enforced inside `sdlc:land`, not only stated in GC prose.

### Step 7: Present a Diff for Approval

Group the proposed culls, moves, merges, and enforcement migrations by repo, since changes can span the Eudaimonia, homebase, and skillset repos plus gitignored zero repos, each landing by its own convention. Reorganize in layers (shape first, then content). Apply only after Forni signs off.

### Step 8: Log

Append a short dated entry to [log.md](log.md) in this skill's directory: scope covered, what was culled, moved, and migrated, and anything deferred. This is the grooming history, co-located with the skill so the two never drift.

## Output Shape

A compact report: the topic to location map (or the slice that had findings), then the proposal grouped as Cull / Dedup / Relocate / Enforce, then the per-repo change plan. Lead with the load-bearing fixes (enforcement migrations, contradictions), not the cosmetic ones.

## Anti Patterns

- **Do not** audit only a slice and call it done. Full pass, every run.
- **Do not** apply edits before presenting the diff.
- **Do not** add a new rule when the real fix is moving or enforcing an existing one. This skill removes and relocates more than it writes.
- **Do not** let this skill, or its own files, become the next source of sprawl. Keep it tight.

## Learned Rules

See [learned-rules.md](learned-rules.md).
