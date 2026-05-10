# SDLC Groom: Learned Rules

Session specific gotchas and calibration captured from real grooming runs. These override the generic guidance in SKILL.md and reference/ when they conflict.

Read this file before each groom. Add to it after.

## Format

Each rule states the rule, the reason, and how to apply it. Keep them tight; the value is in the specifics.

## Rules

(empty — to be populated as the skill is used)

### Lifted from `zero:linear-groom`

The following rules came from real Growth team groom runs and are likely to apply to most cycle grooming work. Validate during cycle mode runs; promote into the rules above if they hold.

- **Pillar first matching trumps keyword matching.** A project's description lists its pillars. An issue that maps to a pillar belongs with that project in whichever cycle that project is in focus, regardless of surface level keyword matches to other cycles' bullets.
- **In Progress beats alignment.** When a ticket is In Progress or In Review, leave it in its current cycle even if the plan does not call for it. Disrupting flowing work is worse than temporary misalignment.
- **Default to next cycle and defer, not multi cycle projection.** When unsure whether work belongs in C5 vs C6, push to the next cycle and plan to re groom at its start.
- **Bulk delete is broken.** `linear issue delete --bulk <ids> --confirm` still prompts interactively in CLI v2.0.0. Loop single deletes. Bulk also pulls in child issues automatically.
- **`--state Backlog` clears the cycle field automatically.** Don't chain a separate cycle reset; the state change is sufficient.
- **Walk the gray zone individually with AskUserQuestion.** Forni's preferred UX: per ticket question with three to four labeled options (Keep / Move / Backlog / Cancel + recommended). Reserve batch tables for auto keep and structurally uniform clusters.
- **Course correction cascade.** When a directional decision lands mid groom (e.g., "kill X wholesale"), revisit earlier decisions in the same session that depended on the now stale assumption.
- **Bulk cross project moves trip the safety gate.** A loop of more than ~10 project reassignments via Bash gets denied as mass modification. Surface the explicit target list via AskUserQuestion before re attempting.
- **Effort matters in classification.** A title that sounds campaign shaped might be a 30 minute audit. Ask about effort when the cycle plan match is fuzzy. A low effort high value ticket can stay even if it does not perfectly match.
- **Capacity multiplier starts at 0.9.** First C3 run predicted 10 Keep but reality was 16; multiplier was too conservative at 0.6. Recalibrate per team.
- **Project deletion needs `--force`.** `linear project delete <id>` errors with "Interactive confirmation required." Issue delete uses `--confirm` instead. Different flag names for similar gates.
