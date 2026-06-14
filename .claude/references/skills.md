# Skill Authoring Conventions

Guidance for authoring and maintaining Claude Code skills. Load when working on a SKILL.md, a learned-rules.md, or when invoking /skill-creator.

## Naming

Skill names lead with a verb. Add an object when it sharpens the meaning (`plan-week`, `triage-email`); a bare verb is fine when it already reads unambiguously (`reflect`, `sharpen`, `wrap`). New skills follow this. Rename an existing skill only when its name actively misleads, not for conformity's sake.

## SKILL.md vs learned-rules.md

The two files have distinct jobs. Keeping them clean takes discipline.

**SKILL.md** is the durable spec. It holds stable skill behavior, workflow decisions that have crystallized, and durable user preferences unlikely to change (food dislikes, formatting conventions, routing rules like which store carries what).

**learned-rules.md** stays lightweight. It holds personal context tied to the current life shape: calendar interpretation, job specific defaults, current commitments. When life changes, these rules need updating; SKILL.md should not.

**Rule of thumb:** If a rule would need a "last confirmed" date stamp to avoid going stale, it belongs in learned-rules.md. If it's just how the skill works, it belongs in SKILL.md.

Periodically audit learned-rules.md. Graduate rules that have stabilized to SKILL.md, and prune rules that no longer apply.

## When to use learned-rules.md

Every skill that makes decisions on behalf of the user should include a `learned-rules.md` file. When the user corrects a decision, append the correction. Read learned rules at the start of every invocation. This applies to all skills, whether created via /skill-creator or manually.
