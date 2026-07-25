---
name: plan-venture
description: Direction-setting session for a venture. First-principles positioning (Dunford), adversarial critique walked one finding at a time, brand and naming decisions, a multi-fidelity roadmap, and full artifact true-up (docs, Linear, calendar, Todoist). Use this skill whenever Forni wants to plan a business's direction, asks "what is this business", wants to work through positioning or strategy from scratch, questions whether the ladder is against the right wall, wants a brand or naming workshop, or invokes "/assist:plan-venture". Also trigger for a Monday planning block that turns strategic ("direct the energy before scheduling more work"). Weekly slotting stays in assist:plan-week; this is the deeper, occasional session that decides what the weeks are for.
argument-hint: "[venture, e.g. atelic]"
allowed-tools:
  - Read
  - Edit
  - Write
  - Bash
  - Glob
  - Grep
  - Agent
  - AskUserQuestion
  - EnterPlanMode
  - ExitPlanMode
  - Skill
  - mcp__claude_ai_Todoist__*
---

# Plan Venture Assist

Help Forni decide what a venture is and where its energy goes, then make every tracker and artifact agree. Born from the 2026-07-20 session that renamed RYLLC to Atelic; the motion below is the one that session actually ran.

## Before Every Invocation

1. Read [learned-rules.md](learned-rules.md) in this directory.
2. Read the plugin-wide [../../learned-rules.md](../../learned-rules.md).
3. Ground in the venture's context: the repo's `CLAUDE.md`, `Brand/positioning.md` if it exists, the `plan/` folder index, and current tracker state (Linear via the CLI, `~/Eudaimonia/Admin/tools/linear.md` for mechanics).

## Posture

**Governing docs are drafts, not doctrine.** A session whose purpose is interrogating direction cannot inherit its conclusions from the documents under interrogation. Rebuild from scratch and see whether you land in the same place; twice in the founding session the rebuild landed somewhere better.

**One chunk at a time.** Socratic questions one at a time. Critique findings one at a time, each settled before the next. Never present the whole shape and ask for a reaction to everything.

**De-bias the options.** Generate answer options from evidence and neutral frames, never from the incumbent plan's vocabulary. When the user says "this feels biased," restart the exercise from zero.

**Thought partner, not facilitator.** Open every contested question with an actual position the user can push against. Adversarial findings get triaged, not obeyed.

## The Motion

### Phase 1: North Star Check

Confirm explicitly what is settled and what this session may reopen. Ask, do not assume; the plan being "governing" does not make it the answer.

### Phase 2: First-Principles Positioning

Run April Dunford's five steps in order, one question each: competitive alternatives, unique attributes (honesty rule: if a competitor could say it, it does not count), value (evidence-first: what did real buyers actually respond to), target customer (a hypothesis to test, not a decision to force), market category (the over-the-counter test: what one owner says to another). **Tag every claim [E] evidence or [A] assumption; assumptions become experiment design**, e.g. stratified sends that answer the target question with designed data.

The gtm-second-brain library (`gtm-second-brain/` in the Atelic repo) is the method shelf: `playbooks/strategy/positioning-dunford.md`, the `positioning-workshop` and `brand-architect` agents, and `playbooks/strategy/strategic-thinking-layer.md` model chains (Chain 2 for validation, Chain 3 for competitive strategy, the life-decision chain for personal-stakes calls).

### Phase 3: Adversarial Critique

Spawn an agent in the positioning-workshop role to attack the draft brief. Walk the findings back to the user **one at a time**, each with your own read attached. Adopt, adapt, or reason-decline each.

### Phase 4: The Venture Layer

Separate the customer-facing layer (what the buyer hears) from the venture layer (practice, playbook, or product). Questions that evidence cannot yet answer get **parked with a named checkpoint**, never forced. Brand and naming decisions get a workshop: criteria first (referral test, phone test, room to grow, founder energy), specialist shortlist second, and founder meaning is allowed to overrule the rubric with the costs priced (pronunciation lock, tagline carrying the category).

### Phase 5: Multi-Fidelity Roadmap

Enter plan mode. Near weeks at task fidelity, next month shaped, further months as loose shapes with named checkpoints. Present for approval; expect rejection to be information.

### Phase 6: Artifact True-Up

Everything the session decided lands somewhere on exit, in this shape:

- **Durable strategy** in `Brand/` (positioning brief, living, evidence-tagged); **time-bound plays** in `plan/` with timeframe-prefixed filenames; `plan/README.md` as the index.
- **Execution in Linear** (projects for motions, issues with due dates, active cycle assignment). Docs hold the why; Linear holds the tasks.
- **Calendar blocks** via gws for the near week (Craft label, Linear ticket in each description).
- **Todoist only for timed reminders** and far-future revisits; completed when migrated to Linear.
- Land repo changes per each repo's convention (Atelic always PRs).

### Phase 7: Codify and Close

Offer `assist:codify-context` for durables (conventions to CLAUDE.md, tool gotchas to `Admin/tools/`), write session learnings to memory, and hand off to `assist:wrap`.

Learned rules live in [learned-rules.md](learned-rules.md).
