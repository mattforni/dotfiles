---
name: email-assist
description: Triage Gmail inbox by labeling, starring, and archiving emails. Also creates filters for recurring senders. Use this skill whenever the user mentions email triage, inbox cleanup, email labels, email filters, or wants to process their inbox. Default subcommand is triage.
argument-hint: "[triage | filters]"
allowed-tools:
  - mcp__claude_ai_Gmail__*
  - mcp__gmail__*
  - mcp__claude_ai_Google_Calendar__*
  - mcp__claude_ai_Linear__*
  - mcp__claude_ai_Todoist__*
  - Read
  - Edit
  - Write
  - AskUserQuestion
  - WebFetch
---

# Email Assist

Triage the Gmail inbox and create filters for recurring senders.

## Before Every Invocation

1. Read [learned-rules.md](learned-rules.md) for prior corrections
2. Read [triage-rules.md](reference/triage-rules.md) and [label-map.md](reference/label-map.md) for classification rules
3. Call `gmail_list_labels` once to resolve label name -> ID mapping

## Mode: triage (default)

Process inbox emails via `gmail_search_messages` with query `in:inbox`.

For each email, classify using triage-rules.md. Key behaviors:

**Auto-process purchases**: Order confirmations, shipping notifications, receipts, delivery updates. Apply `📑 Admin/🛒 Purchases` label, remove `INBOX` and `UNREAD`. Use batch modify tools when available for efficiency. Only auto-process when classification confidence is high (exact sender match in triage-rules.md or unambiguous subject pattern). If uncertain, include in the confirmation batch.

**Multi-label routing**: Emails can take multiple labels. An Anthropic receipt is both `📑 Admin/🛒 Purchases` and `🛠️ Craft/💻 Development`. Always route to the most specific sublabel, never a parent pillar alone.

**Star assignment**: Apply colored stars via system label IDs. Never star emails that get archived.
- `GREEN_STAR`: Needs action but NOT a response (download a document, review something)
- `YELLOW_STAR`: Needs a response from me
- `RED_STAR`: Urgent or overdue response needed

**Family emails come first**: Always surface family emails for response. Read the full email content. When they share articles, fetch and summarize the article so the user can review before replying. Offer to draft a reply. Label `🤝 Community/👨‍👩‍👦‍👦 Family`. Yellow or red star. Family emails get no sign off (no "Cheers and chat soon!").

**When in doubt, ask**: If there is any ambiguity about classification, or an email could take multiple labels, ask the user. Do not guess. Defaulting to asking is always correct.

**Drafting replies**: Never send emails directly. Always create a draft, present it for review, and wait for explicit approval to send. Never reference people or sources the user does not know. Always read full email content and download attachments when relevant (e.g. to check expiration dates, document details) before making assumptions.

**Calendar awareness**: When someone proposes a date/time, check the calendar to see if it works. If it does, help draft an acceptance and offer to send an invite. If not, propose an alternative (prefer Fridays for in person meetings).

**External actions**: Some emails trigger actions outside Gmail (e.g. create a Todoist task, create a Linear ticket, check the calendar). Track these as an array of pending external actions. Do not archive an email until all its external actions have been completed. If an external tool is unavailable (e.g. auth failure), prompt the user to fix it before proceeding.

After processing:
1. Present family emails first with content overview and reply offer
2. Present remaining emails grouped by proposed action for confirmation
3. Execute external actions (Todoist tasks, Linear tickets, calendar checks) for each email that needs them
4. When user corrects a classification, append the rule to `learned-rules.md`
5. Identify senders appearing 3+ times, suggest creating filters
6. **Urgent digest**: List all RED_STAR emails remaining in inbox with subject, sender, age, and what action is needed. This is the "respond to these" list.
7. Print summary: counts by action, external actions completed, new learned rules, filter suggestions

## Mode: filters

Create Gmail server-side filters for high-frequency senders.

Note: existing filters in the Gmail web UI are not readable via the MCP (scope limitation). The MCP can only create new filters.

1. Read `learned-rules.md` for any previously created filters (stored under `## Created Filters`)
2. Analyze learned rules and recent triage to identify candidates
3. Skip any sender that already has a filter recorded in learned-rules.md
4. Propose filters using available Gmail filter tools
5. Default action: apply appropriate label, mark read, skip inbox
6. User approves each filter before creation
7. After creating a filter, record it in `learned-rules.md` under `## Created Filters` to prevent duplicates
