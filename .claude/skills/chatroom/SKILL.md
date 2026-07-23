---
name: chatroom
description: Spawn role diverse agents into a shared multi round debate that converges on a recommendation. Use for architecture decisions, design tradeoffs, venture strategy, or any judgment call that benefits from adversarial reasoning with cross visibility. Triggers on "chatroom", "have agents debate", "agent debate", "let them argue it out", "multi agent discussion", or /chatroom. Differs from independent skeptic or judge panels because agents read each other's arguments across rounds, concede points, and change their minds.
---

# Chatroom

Run the `chatroom` named workflow (Workflow tool, `{name: "chatroom"}`), then synthesize the debate yourself as the orchestrator. Adopted from Greg's Agent Chatrooms pattern, 2026-07-23, adapted from a chat.json file loop to the native Workflow tool.

## When to Reach for This vs a Judge Panel

Independent verdicts (skeptic passes, Workflow judge panels) are right when you want uncorrelated opinions. A chatroom is right when the *argument itself* matters: agents see each other's reasoning each round, respond to the strongest counterargument, and either converge or surface a genuine tradeoff. Mind changes and surviving disagreements are the signal.

## Execution

1. **Sharpen the problem first.** A vague prompt produces a vague debate. One sentence problem, plus whatever context (code, constraints, prior decisions) the agents need.
2. **Pick roles for productive tension.** Defaults are Architect / Pragmatist / Critic. Override by domain: product debates want a user advocate, a business strategist, and an engineer; strategy debates want an optimist, a skeptic, and a synthesizer. Pass custom roles when the user names them.
3. **Invoke the workflow:**
   `Workflow({name: "chatroom", args: {problem, context, roles?, rounds?}})`
   Defaults: 3 roles, 3 rounds, early stop when every agent reports confidence 8 or higher after round 2.
4. **Synthesize yourself.** Do not spawn a synthesis agent. Read the returned rounds and report: where agents converged (high confidence conclusions), where they stayed split (genuine tradeoffs for the user to decide), unresolved concerns (risks to monitor), and any mind changes (strong signals). Confidence without proposal alignment is a deadlock, not consensus; say so honestly.
5. **Deliver** a one paragraph synthesis, the recommended action, and the sharpest surviving disagreement.

## Cost Shape

Roles times rounds agent calls (default 9). Early convergence saves the tail. Scale roles or rounds up only when the user asks for a deeper debate.
