---
name: refine-process
description: Refine a recurring process (a skill's workflow, a checklist, a pipeline of phases) through a structured, iterative pass with the user. Use this skill whenever Forni says "refine this process", "take a pass at this workflow", "the phases feel off", "let's rework how we do X", or asks for a watchful or deliberate redesign of any multi step process. Also trigger when a process refinement emerges mid session (directives like "move phase X before Y" or "merge these steps") and the user wants it done properly rather than ad hoc. The refinement counterpart to `assist:codify-context` (which writes knowledge) and `assist:groom-context` (which prunes it); this skill reshapes workflows.
argument-hint: "[process or skill to refine]"
---

# Refine Process

Take a recurring process the user runs (usually codified as a skill, sometimes a checklist or convention doc) and reshape it deliberately: reorder, rename, merge, split, and reground it in reality. Born from the 2026-07-19 refinement of `assist:plan-week`, where the moves below were observed live and captured for reuse.

## Posture

- **Iterative, never all at once.** Decompose the refinement into pieces (per GC). Lay out one piece, settle it with the user, then move to the next. Never present the whole redesigned shape for bulk reaction.
- **The user's directives seed the pass.** Capture their explicit changes first and honor them; your own refinement pass builds around them, not over them.
- **Keep a watcher's log.** As the refinement runs, note each *move* made (not just each decision) in a running log. The moves are the reusable material; the log feeds this skill's Learned Rules at the end.
- **Definitions before decisions.** When the user asks what a step means, give a crisp definition of its purpose ("make the calendar true"), not a feature list of its mechanics. A merge or reorder question cannot be settled while a term is fuzzy.

## Workflow

1. **Name the process and its artifact.** Which skill file or doc codifies it, where it lives, which repo. Cut worktrees before any edit (per GC).
2. **State the current shape.** A tight TLDR of the phases as they exist, so the user reacts to the real baseline.
3. **Capture directives.** The user's explicit changes, restated as principles where possible (two directives often point at one underlying principle).
4. **Walk the pieces.** Settle structure first (order, merges, splits), then names, then mechanics. One piece per exchange, AskUserQuestion for forks, recommendation first.
5. **Probe reality before designing on it.** When the refinement touches a tool surface or data, verify live before codifying (see Heuristics). Ground truth beats docs and beats the process's own self description.
6. **Codify.** Rewrite the process doc in its worktree, update every cross referencing doc and skill in the same change, bump plugin versions per repo conventions. Gotchas discovered during the refinement go to the relevant tool doc in the same session, not a someday pile.
7. **Close the watcher's log.** Distill the session's moves; any new generalizable move graduates into the Heuristics or Learned Rules of this skill.
8. **Run the refined process.** When feasible, execute it immediately as validation, the refinement counterpart of "manual first, then codify."

## Heuristics (the Moves)

**Structure**

- **Gather, clean, act.** Align phases to a pipeline: collect every input stream, clean each one, then act on the cleaned whole. Check each phase's inputs exist before it runs; a phase consuming data loaded four phases earlier is a smell.
- **Generators go upstream of placers.** A phase that generates work (email sweep creating tasks, meal planning creating a grocery run) belongs before the phase that places work. Audit every phase for hidden outputs that feed an earlier stage.
- **Verb noun names, and see what resists.** Rename every phase as verb noun. A phase that needs two verbs is two phases bolted together. Two phases producing the same artifact are one phase. The naming convention is a structural diagnostic, not cosmetics.
- **Artifacts belong to the phase that owns their meaning**, not the phase that happened to create them historically (the week theme banner belongs to intention setting, not training scheduling).
- **Symmetry is a signal.** When parallel streams get parallel verbs (Sweep Inbox / Sweep Calendar, Plan Training / Plan Meals / Plan Tasks), the structure is probably right. Forced symmetry is the corresponding smell; do not invent a phase to complete a pattern.

**Grounding**

- **Audit the artifact before trusting the doc.** Pull actual usage (real calendar events, real tasks, real commits) and compare against the codified rules. Drift is either a broken rule or an emergent need announcing itself; each divergence must be classified as one or the other, never silently normalized.
- **Probe the tool surface live before designing conventions on it.** Docs and cached knowledge lie (a colors endpoint stamped 2012 while the real surface had moved to labels). One authenticated CLI call settles what an hour of design conversation cannot.
- **After a platform migration, find the new source of truth.** Legacy fields may return synthesized garbage that differs across endpoints. Never build on a field the platform has superseded.

**Safety**

- **Smallest reversible write first.** Probe a new write API with one minimal change before a bulk operation.
- **Capture a full read before any destructive style write.** A patch that replaces a whole array is only recoverable if the pre state was saved.
- **Hold out the judgment calls.** In any bulk sweep, mechanically apply the unambiguous cases and present the ambiguous ones to the user individually.

**Flow**

- **Park tangents as spikes, but let the user promote one.** A tangent that gates the design (a new tool capability the conventions will build on) is explored inline; one that does not is parked as a slotted task. The user makes the call.
- **The user is the naming authority.** Propose names, but their rename wins, and often carries structural information worth mining.

## Learned Rules

See [learned-rules.md](learned-rules.md).
