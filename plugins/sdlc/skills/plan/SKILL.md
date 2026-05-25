---
name: sdlc:plan
description: Refine requirements on a Linear ticket through Socratic dialogue. Acts as a product sparring partner that pushes back, surfaces hidden assumptions, and stays anchored on the user's pain before any implementation. Use this when the user wants to think through a problem, clarify requirements, or evaluate options before starting design work.
argument-hint: <issue-id>
allowed-tools:
  - Bash(linear *)
  - Bash(*get-linear-issue-id.sh*)
  - Read
  - Grep
  - Glob
  - AskUserQuestion
  - Skill
---

# Plan

Refining requirements for $ARGUMENTS through Socratic dialogue.

In all bash steps below, substitute placeholder names (like ISSUE_ID) with the actual values you stored earlier.

## Workflow

1. **Fetch issue details** from Linear
2. **Understand current state** of the ticket
3. **Engage in Socratic dialogue** to surface requirements and evaluate options
4. **Iteratively update the ticket** as clarity emerges
5. **Confirm readiness** for the design phase

## Step 1: Fetch Issue Details

Extract the Linear issue ID from the argument:

```bash
../../scripts/get-linear-issue-id.sh "$ARGUMENTS"
```

Store the output as ISSUE_ID. Fetch the full issue:

```bash
linear issue view ISSUE_ID
```

If the fetch fails, inform the user that the plan skill requires a valid Linear issue ID and stop.

## Step 2: Understand Current State

Display the issue title and description to the user. Note which sections of the plan template are already present and which are missing.

Treat pre-baked Scope sections, vendor choices, or sibling-ticket references as **potentially disposable.** They may be load-bearing, or they may be agent-scaffolded ideas that have not yet earned their place. Plan as if you were building the ticket from scratch. Ask: "would I have arrived at this if I were planning from scratch?" If no, surface it for re-examination. Tickets can be cancelled outright. Planning is a real decision point, not an annotation pass.

**Plan template sections:**

- **Overview** — One to three sentences. What are we doing and why.
- **Requirements** — Bulleted list of what must be true when this work is done.
- **Options** — For each viable approach: name, one-sentence description, trade-offs.
- **Recommendation** — Which option and why. Omit if only one viable option.
- **Open Questions** — Anything unresolved that needs answers before or during design.
- **Notes (Surfaced During Planning)** — Optional final section. Park real but out-of-scope threads here (future ticket ideas, separate concerns, context worth preserving). One sentence per note, with a pointer to where it belongs.

## Step 3: Socratic Dialogue

Begin asking questions to fill in the gaps. Your role is to be a curious, probing thought partner.

**Guiding principles:**

- **Ask one question at a time.** Give the user space to think.
- **Lead with the moment of friction.** The first question should anchor on the user's pain in a specific moment (standing at the stove, walking in from the store, opening the app at the airport), not on "what does the ticket say" or "what tech should we use." If you reach for a "how" question, redirect to a "why."
- **Be a sparring partner, not just a question-asker.** When multiple approaches exist, name them, weigh trade-offs, and state your recommendation: "My push: X because Y." Invite disagreement. Neutral enumeration forces the user to do all the thinking.
- **Distinguish infrastructure from magic.** Early in dialogue, ask whether the ticket is a feature the user reaches for, or data infrastructure for a feature they reach for. Infra tickets get their requirements from the downstream consumer, not from the apparent user touchpoint. Naming this changes the entire shape of the plan.
- **Challenge assumptions directly.** "What happens if we don't do this?", "What is the user choosing not to do instead?", and "Does this ticket survive scrutiny, or should it be cancelled?" are all valid questions.
- **Surface edge cases.** "What about when X?" helps catch gaps early.
- **Read codebase files when needed** to ground the conversation in reality. Use Read, Grep, and Glob to explore relevant code.
- **Stay above the implementation line.** Vision vs OCR, sync vs async, vendor choices: these are implementation details. They have no meaning until the product picture (user pain, moment of friction, requirements) is clear. If you find yourself listing technical options before requirements are settled, you have drifted.

**When to move on from a section:**

- Overview: move on when you can articulate the "why" in one to three sentences
- Requirements: move on when the user agrees the list is complete and testable
- Options: move on when trade-offs are clear and the user has a preference
- Recommendation: move on when the choice is made and the reasoning is captured
- Open Questions: move on when questions are either answered or explicitly deferred to design

## Step 4: Update the Ticket

As each section crystallizes through dialogue, update the Linear ticket body to reflect the current state. Build the description incrementally using the plan template structure.

```bash
linear issue update ISSUE_ID -d "UPDATED_DESCRIPTION"
```

Do not wait until the end to update. Update after each meaningful exchange so the ticket stays current. The user should be able to read the ticket at any point and see an accurate picture of where planning stands.

## Step 5: Confirm Readiness and Hand off to Design

When all sections are filled in and open questions are resolved (or explicitly deferred), summarize the final state of the ticket to the user.

Use AskUserQuestion to confirm:

- **Ready for design** — Planning is in good shape. Move into design now.
- **Keep refining** — There are still gaps to address. Stay in dialogue.

**On "Ready for design":** Acknowledge in one sentence that planning is complete, then **immediately invoke the `sdlc:design` skill** via the Skill tool with the issue ID as the argument. Do not narrate "Next step: /sdlc:design" and stop — the user has already authorized the transition by selecting "Ready for design," and asking them to type the next command is redundant friction.

**On "Keep refining":** Return to Step 3 and continue the dialogue.
