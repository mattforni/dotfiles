# Learned Rules

Corrections and calibration for how groom-context should reason. Seeded from the GROW-316 session (2026-06-09), the real incident that motivated this skill. These are worked examples of "encoded but not applied," the exact failure the skill hunts for.

## Seed Cases (GROW-316, 2026-06-09)

- **Review before merge was encoded in GC but not enforced, so it was dropped.** GC's Code Review section already said bots re-review on every push and to triage each round, yet PRs were merged on green CI alone without waiting for the bot review. A process gate living in always-loaded prose is weak. **How to apply:** when you find a load-bearing process gate stated only in prose, the fix is to surface it at the point of use (the repo Workflow) and migrate enforcement into the flow skill that runs it (here, `sdlc:land`), not to restate it louder. This is the Step 6 enforcement check earning its keep.

- **"Use Monitor, not a foreground wait" was encoded in GC but ignored twice.** GC explicitly says use the Monitor tool for CI checks and deploy polling, never a foreground `gh run watch`. It was still violated. **How to apply:** an always-loaded rule that gets violated repeatedly is a salience or enforcement failure, not a wording problem. Flag such rules as candidates for enforcement (a hook or a flow-skill step) rather than leaving them as prose.

- **Gemini re-review needs an explicit `/gemini review` comment on later pushes.** It only auto-reviews when a PR opens, not on subsequent pushes. This was genuinely missing, now encoded in `public-web/CLAUDE.md`. **How to apply:** distinguish the two failure modes when you audit. Some forgotten basics are encoded-but-unenforced (migrate enforcement); some are genuinely absent (codify them, then place at the right altitude).

## Operating Bias

- **The fix is usually placement or enforcement, not a new line.** When an incident reveals a forgotten basic, resist adding another prose rule. Ask first whether the rule already exists somewhere, and whether the real gap is altitude (wrong layer), salience (buried in a too-large file), or enforcement (no flow-skill step or hook makes it stick).

_(Populated further as Forni corrects groom-context's judgment over time. Calibrate how aggressive culling should be from his vetoes.)_
