# Refine Process Learned Rules

Corrections and calibration for how `assist:refine-process` should reason about reshaping a recurring process. Overrides SKILL.md. Read on every invocation.

- The skill was seeded 2026-07-19 from the plan-week refinement (9 phases to 8, spine reordered to gather/clean/place/show, calendar labels adopted). First live run of this skill should confirm the workflow ordering holds for a process that is not calendar shaped.
- A user reorder that breaks a design heuristic (generators upstream of placers) is signal, not error. Accept the reorder and design the mitigation into the phase that inherits the tension. From the 2026-08-09 plan-week refinement: tasks moved ahead of meals, so meal generated work beyond the standing blocks now slots inline in Plan Meals.
- When the user asks for a new agent, check the roster first; the seat may already be filled. From the 2026-08-09 plan-week refinement: the requested trainer turned out to be the existing coach agent. Standardize on what exists rather than minting a twin.
- The confidence band shape for rollups: the high band is grouped with the rule cited, the medium band is listed individually for spot check, and anything below medium is by definition a Decision, never auto handled. Settled 2026-08-09 during the plan-week signal contract design.
