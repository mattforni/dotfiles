---
name: email-assist
description: Triage Gmail inbox by labeling, starring, and archiving emails. Also consolidates legacy labels and creates filters. Use this skill whenever the user mentions email triage, inbox cleanup, email labels, email filters, or wants to process their inbox. Default subcommand is triage.
argument-hint: "[triage | cleanup | filters]"
allowed-tools:
  - mcp__gmail__search_emails
  - mcp__gmail__read_email
  - mcp__gmail__modify_email
  - mcp__gmail__batch_modify_emails
  - mcp__gmail__list_email_labels
  - mcp__gmail__get_or_create_label
  - mcp__gmail__create_label
  - mcp__gmail__delete_label
  - mcp__gmail__create_filter
  - mcp__gmail__create_filter_from_template
  - mcp__gmail__list_filters
  - Read
  - Edit
  - Write
  - AskUserQuestion
---

# Email Assist

Triage the Gmail inbox, clean up legacy labels, and create filters for recurring senders.

## Before Every Invocation

1. Read [learned-rules.md](learned-rules.md) for prior corrections
2. Read [triage-rules.md](reference/triage-rules.md) and [label-map.md](reference/label-map.md) for classification rules
3. Call `mcp__gmail__list_email_labels` once to resolve label name -> ID mapping

## Mode: triage (default)

Process inbox emails in batches of 50 via `mcp__gmail__search_emails` with query `in:inbox`.

For each email, classify using triage-rules.md. Key behaviors:

**Auto-process purchases**: Order confirmations, shipping notifications, receipts, delivery updates. Apply `📑 Admin/🛒 Purchases` label, remove `INBOX` and `UNREAD`. No confirmation needed. Use `mcp__gmail__batch_modify_emails` for efficiency.

**Multi-label routing**: Emails can take multiple labels. An Anthropic receipt is both `📑 Admin/🛒 Purchases` and `🛠️ Craft/💻 Development`. Always route to the most specific sublabel, never a parent pillar alone.

**Star assignment**: Apply colored stars via system label IDs.
- `GREEN_STAR`: FYI, no response needed (newsletters, statements, notifications)
- `YELLOW_STAR`: Needs action from me (direct emails, meeting requests, account alerts)
- `RED_STAR`: Urgent or overdue (friends/business waiting on response, deadline language)

**Family emails come first**: Always surface family emails for response. Read the full email content, provide an overview (dad likes to send articles), and offer to draft a warm reply. Label `🤝 Community/👨‍👩‍👦‍👦 Family`. Yellow or red star.

**When in doubt, ask**: If there is any ambiguity about classification, or an email could take multiple labels, ask the user. Do not guess. Defaulting to asking is always correct.

After processing:
1. Present family emails first with content overview and reply offer
2. Present remaining emails grouped by proposed action for confirmation
3. When user corrects a classification, append the rule to `learned-rules.md`
4. Identify senders appearing 3+ times, suggest creating filters
5. Print summary: counts by action, new learned rules, filter suggestions

## Mode: cleanup

Merge legacy labels into proper pillar sublabels. Follow [label-map.md](reference/label-map.md) for known merge targets.

For each label:
1. Search the label to show contents
2. Propose merge target (specific sublabel, not parent)
3. User confirms or overrides
4. `mcp__gmail__batch_modify_emails` to add new label, remove old
5. `mcp__gmail__delete_label` to remove old label

Never delete a label without user confirmation. Present all proposed merges as a table first.

## Mode: filters

Create Gmail server-side filters for high-frequency senders.

Note: existing filters in the Gmail web UI are not readable via the MCP (scope limitation). The MCP can only create new filters.

1. Analyze learned rules and recent triage to identify candidates
2. Propose filters via `mcp__gmail__create_filter_from_template` (fromSender template)
3. Default action: apply appropriate label, mark read, skip inbox
4. User approves each filter before creation
