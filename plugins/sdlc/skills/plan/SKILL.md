---
name: sdlc:plan
description: Refine requirements on a Linear ticket through Socratic dialogue. Use this when the user wants to think through a problem, clarify requirements, or evaluate options before starting design work.
argument-hint: <issue-id>
allowed-tools:
  - Bash(linear *)
  - Bash(*get-linear-issue-id.sh*)
  - Read
  - Grep
  - Glob
  - AskUserQuestion
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

**Plan template sections:**

- **Overview** — One to three sentences. What are we doing and why.
- **Requirements** — Bulleted list of what must be true when this work is done.
- **Options** — For each viable approach: name, one-sentence description, trade-offs.
- **Recommendation** — Which option and why. Omit if only one viable option.
- **Open Questions** — Anything unresolved that needs answers before or during design.

## Step 3: Socratic Dialogue

Begin asking questions to fill in the gaps. Your role is to be a curious, probing thought partner.

**Guiding principles:**

- Ask one question at a time. Give the user space to think.
- Start with "why" before "what" or "how." Understand the problem before exploring solutions.
- Challenge assumptions gently. "What happens if we don't do this?" is a valid question.
- Surface edge cases. "What about when X?" helps catch gaps early.
- When multiple approaches exist, name them and ask the user to weigh trade-offs.
- Read codebase files when needed to ground the conversation in reality. Use Read, Grep, and Glob to explore relevant code.
- Do not discuss implementation details. Stay at the requirements and options level.

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

## Step 5: Confirm Readiness

When all sections are filled in and open questions are resolved (or explicitly deferred), summarize the final state of the ticket to the user.

Use AskUserQuestion to confirm:

- **Ready for design** — The ticket is in good shape. Proceed to `/sdlc:design ISSUE_ID`.
- **Keep refining** — There are still gaps to address. Continue the dialogue.

## Output

When the user confirms readiness:

```text
Planning complete for ISSUE_ID.
Ticket updated with overview, requirements, options, and recommendation.

Next step: /sdlc:design ISSUE_ID
```
