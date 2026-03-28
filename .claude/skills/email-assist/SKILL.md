---
name: email-assist
description: Triage Gmail inbox by labeling, starring, and archiving emails. Also consolidates legacy labels and creates filters. Use this skill whenever the user mentions email triage, inbox cleanup, email labels, email filters, or wants to process their inbox. Default subcommand is triage.
argument-hint: "[triage | cleanup | filters]"
allowed-tools:
  - Bash
  - Read
  - Edit
  - Write
  - AskUserQuestion
  - WebFetch
---

# Email Assist

Triage the Gmail inbox, clean up legacy labels, and create filters for recurring senders.

All Gmail operations use the `gws` CLI. Read [gws-shared](../gws-shared/SKILL.md) for auth and global flags. Read [gws-gmail](../gws-gmail/SKILL.md) for the full command index.

## Before Every Invocation

1. Read [learned-rules.md](learned-rules.md) for prior corrections
2. Read [triage-rules.md](reference/triage-rules.md) and [label-map.md](reference/label-map.md) for classification rules
3. Load label name -> ID mapping:

   ```bash
   gws gmail users labels list --params '{"userId":"me"}' --format json
   ```

   Store the mapping for all subsequent modify/batchModify calls.

## gws Command Reference

### Reading emails

Use the helper commands for human-facing read operations. See [gws-gmail-triage](../gws-gmail-triage/SKILL.md) and [gws-gmail-read](../gws-gmail-read/SKILL.md) for full flag reference.

```bash
# Inbox summary (returns message IDs, sender, subject, date, labels)
gws gmail +triage --max 50 --query 'in:inbox' --format json --labels

# Read a single email body with headers
gws gmail +read --id <MSG_ID> --headers
```

### Modifying messages

```bash
# Modify labels/stars on a single message
gws gmail users messages modify --params '{"userId":"me","id":"<MSG_ID>"}' \
  --json '{"addLabelIds":["<LABEL_ID>"],"removeLabelIds":["INBOX","UNREAD"]}'

# Batch modify multiple messages at once
gws gmail users messages batchModify --params '{"userId":"me"}' \
  --json '{"ids":["<ID1>","<ID2>"],"addLabelIds":["<LABEL_ID>"],"removeLabelIds":["INBOX","UNREAD"]}'
```

### Label management

```bash
# Create a label
gws gmail users labels create --params '{"userId":"me"}' --json '{"name":"Label Name"}'

# Delete a label
gws gmail users labels delete --params '{"userId":"me","id":"<LABEL_ID>"}'
```

**Get or create pattern**: Check the already loaded label list for the name. If found, use its ID. If not, create it and capture the returned ID.

### Composing emails

Use helper commands for drafts and replies. See [gws-gmail-send](../gws-gmail-send/SKILL.md), [gws-gmail-reply](../gws-gmail-reply/SKILL.md), [gws-gmail-reply-all](../gws-gmail-reply-all/SKILL.md), and [gws-gmail-forward](../gws-gmail-forward/SKILL.md).

```bash
# Draft a new email
gws gmail +send --to recipient@example.com --subject 'Subject' --body '<p>Body</p>' --html --draft

# Draft a reply (handles threading automatically)
gws gmail +reply --message-id <MSG_ID> --body '<p>Reply text</p>' --html --draft

# Draft a reply-all
gws gmail +reply-all --message-id <MSG_ID> --body '<p>Reply text</p>' --html --draft

# Draft a forward
gws gmail +forward --message-id <MSG_ID> --to recipient@example.com --body 'FYI' --draft
```

### Filters

```bash
# List existing server-side filters
gws gmail users settings filters list --params '{"userId":"me"}' --format json

# Create a filter
gws gmail users settings filters create --params '{"userId":"me"}' \
  --json '{"criteria":{"from":"sender@example.com"},"action":{"addLabelIds":["<LABEL_ID>"],"removeLabelIds":["INBOX"]}}'
```

### Attachments

```bash
# Download an attachment to a file
gws gmail users messages attachments get \
  --params '{"userId":"me","messageId":"<MSG_ID>","id":"<ATTACHMENT_ID>"}' \
  -o downloaded-file.ext
```

### Calendar

```bash
# Check upcoming events (replaces Google Calendar MCP)
gws calendar +agenda

# Create an event (see gws-calendar-insert skill for full flags)
gws calendar +insert --summary 'Meeting' --start '2026-03-28T10:00:00-07:00' --end '2026-03-28T11:00:00-07:00'
```

### Operational notes

- Use `--format json` for parseable output from list/get commands
- Star system label IDs: `GREEN_STAR`, `YELLOW_STAR`, `RED_STAR`, `STARRED` (verified)
- Label names with emoji work fine in JSON string values
- Wrap `--params` and `--json` in single quotes so the shell does not interpret inner double quotes

## Mode: triage (default)

Process inbox emails in batches of 50 via `gws gmail +triage --max 50 --query 'in:inbox' --format json --labels`.

For each email, classify using triage-rules.md. Key behaviors:

**Auto-process purchases**: Order confirmations, shipping notifications, receipts, delivery updates. Apply `📑 Admin/🛒 Purchases` label, remove `INBOX` and `UNREAD`. Use `gws gmail users messages batchModify` for efficiency. Only auto-process when classification confidence is high (exact sender match in triage-rules.md or unambiguous subject pattern). If uncertain, include in the confirmation batch.

**Multi-label routing**: Emails can take multiple labels. An Anthropic receipt is both `📑 Admin/🛒 Purchases` and `🛠️ Craft/💻 Development`. Always route to the most specific sublabel, never a parent pillar alone.

**Star assignment**: Apply colored stars via system label IDs in modify calls. Never star emails that get archived.
- `GREEN_STAR`: Needs action but NOT a response (download a document, review something)
- `YELLOW_STAR`: Needs a response from me
- `RED_STAR`: Urgent or overdue response needed

**Family emails come first**: Always surface family emails for response. Read the full email content via `gws gmail +read --id <ID> --headers`. When they share articles, fetch and summarize the article so the user can review before replying. Offer to draft a reply. Label `🤝 Community/👨‍👩‍👦‍👦 Family`. Yellow or red star. Family emails get no sign off (no "Cheers and chat soon!").

**When in doubt, ask**: If there is any ambiguity about classification, or an email could take multiple labels, ask the user. Do not guess. Defaulting to asking is always correct.

**Drafting replies**: Never send emails directly. Always create a draft via `gws gmail +reply --draft` or `gws gmail +send --draft`, present it for review, and wait for explicit approval to send. Never reference people or sources the user does not know. Always read full email content and download attachments when relevant (e.g. to check expiration dates, document details) before making assumptions.

**Calendar awareness**: When someone proposes a date/time, check the calendar via `gws calendar +agenda` to see if it works. If it does, help draft an acceptance and offer to send an invite. If not, propose an alternative (prefer Fridays for in person meetings).

**External actions**: Some emails trigger actions outside Gmail (e.g. create a Todoist task, create a Linear ticket, check the calendar). Track these as an array of pending external actions. Do not archive an email until all its external actions have been completed. If an external tool is unavailable (e.g. auth failure), prompt the user to fix it before proceeding.

After processing:
1. Present family emails first with content overview and reply offer
2. Present remaining emails grouped by proposed action for confirmation
3. Execute external actions (Todoist tasks, Linear tickets, calendar checks) for each email that needs them
4. When user corrects a classification, append the rule to `learned-rules.md`
5. Identify senders appearing 3+ times, suggest creating filters
6. **Urgent digest**: List all RED_STAR emails remaining in inbox with subject, sender, age, and what action is needed. This is the "respond to these" list.
7. Print summary: counts by action, external actions completed, new learned rules, filter suggestions

## Mode: cleanup

Merge legacy labels into proper pillar sublabels. Follow [label-map.md](reference/label-map.md) for known merge targets.

For each label:
1. Search the label to show contents
2. Propose merge target (specific sublabel, not parent)
3. User confirms or overrides
4. `gws gmail users messages batchModify` to add new label, remove old
5. `gws gmail users labels delete` to remove old label

Never delete a label without user confirmation. Present all proposed merges as a table first.

## Mode: filters

Create Gmail server-side filters for high-frequency senders.

1. Read `learned-rules.md` for any previously created filters (stored under `## Created Filters`)
2. List existing server-side filters via `gws gmail users settings filters list --params '{"userId":"me"}' --format json` and cross-reference to avoid duplicates
3. Analyze learned rules and recent triage to identify candidates
4. Skip any sender that already has a filter (either in learned-rules.md or in server-side filter list)
5. Propose filters with criteria and action JSON for user review
6. Create approved filters via `gws gmail users settings filters create`
7. Default action: apply appropriate label, mark read, skip inbox
8. User approves each filter before creation
9. After creating a filter, record it in `learned-rules.md` under `## Created Filters` to prevent duplicates
