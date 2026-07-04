---
name: assist:emails
description: Triage Gmail inbox by labeling, starring, and archiving emails. Also creates filters for recurring senders. Use this skill whenever the user mentions email triage, inbox cleanup, email labels, email filters, or wants to process their inbox. Default mode is triage.
argument-hint: "[triage | filters]"
allowed-tools:
  - Bash
  - mcp__claude_ai_Notion__*
  - mcp__claude_ai_Google_Calendar__*
  - mcp__claude_ai_Todoist__*
  - Read
  - Edit
  - Write
  - AskUserQuestion
  - WebFetch
---

# Email Assist

Triage the Gmail inbox and create filters for recurring senders. All Gmail operations use the `gws` CLI.

## Before Every Invocation

1. Read [learned-rules.md](../../learned-rules.md) for prior corrections (these override defaults)
2. Read [triage-rules.md](../../reference/triage-rules.md) and [label-map.md](../../reference/label-map.md) for classification rules
3. Resolve label name -> ID mapping:

   ```bash
   gws gmail users labels list --params '{"userId":"me"}' --format json 2>&1 | grep -v "^Using"
   ```

## gws CLI Reference

All Gmail operations go through the `gws` CLI via Bash. Every command emits `Using keyring backend: keyring` to stderr; always filter with `2>&1 | grep -v "^Using"` before piping to JSON parsers.

```bash
# Authoritative inbox list (use this, NOT +triage, for the canonical set)
gws gmail users messages list --params '{"userId":"me","q":"in:inbox","maxResults":50}' --format json

# Read email body
gws gmail +read --id <MESSAGE_ID>

# Get message metadata (headers like List-Unsubscribe, From, Subject)
gws gmail users messages get --params '{"userId":"me","id":"<ID>","format":"metadata","metadataHeaders":["From","Subject","Date","List-Unsubscribe"]}' --format json

# Modify labels on a single message
gws gmail users messages modify --params '{"userId":"me","id":"<ID>"}' --json '{"addLabelIds":["<LABEL_ID>"],"removeLabelIds":["INBOX","UNREAD"]}'

# Batch modify labels on multiple messages
gws gmail users messages batchModify --params '{"userId":"me"}' --json '{"ids":["<ID1>","<ID2>"],"addLabelIds":["<LABEL_ID>"],"removeLabelIds":["INBOX","UNREAD"]}'

# Send an email (used for unsubscribe)
gws gmail +send --to "<address>" --subject "<subject>" --body "<body>"

# Create a draft reply within a thread
gws gmail users drafts create --params '{"userId":"me"}' --json '{"message":{"threadId":"<THREAD_ID>","raw":"<BASE64_RFC2822>"}}'
```

## Mode: triage (default)

### Phase 1: Inbox Scan

Get the authoritative inbox via `gws gmail users messages list` with `q=in:inbox`. For each message, fetch headers (From, Subject, Date) to classify. Cross-reference against triage-rules.md and learned-rules.md.

Partition messages into four buckets:

- **Family**: Matches known family senders from triage-rules.md
- **Auto-process**: High-confidence purchases, offers, or notifications matching exact sender/subject patterns from triage-rules.md or learned-rules.md
- **Previously triaged**: Already has user labels and/or stars from a prior session (but still in inbox because action is pending)
- **New**: Everything else that needs user input

### Phase 2: Silent Auto-Process

Batch modify all high-confidence matches without asking. Use `batchModify` for efficiency. Only auto-process when classification confidence is high: exact sender match in triage-rules.md/learned-rules.md or unambiguous subject pattern. If there is any ambiguity, move the email to Phase 4 instead.

- Purchases: add `📑 Admin/🛒 Purchases` label, remove INBOX and UNREAD
- Multi-label purchases (e.g., Anthropic receipts): add all applicable labels
- Offers/promos: add `📑 Admin/🏷 Offers` label, remove INBOX and UNREAD
- Notifications with learned rules (e.g., Sentry weekly reports, Gusto paystubs): apply per learned-rules.md

Report the count and a one-line summary of what was auto-processed after all phases complete.

### Phase 3: Family Emails (one-by-one)

Family emails always come first. For each:

1. Read full content with `gws gmail +read --id <ID>`
2. If the email contains shared articles or links, fetch and summarize via WebFetch so the user can review before replying
3. Present to user via AskUserQuestion with content overview
4. Offer to draft a reply (family emails get no sign-off, no "Cheers and chat soon!")
5. Label `🤝 Community/👨‍👩‍👦‍👦 Family`. Yellow star, or red star if >3 days old

### Phase 4: Remaining Emails (one-by-one)

Present each email individually via AskUserQuestion. For each email show:

- Sender and subject
- Proposed label(s), star, and action (archive, keep, etc.)
- Brief rationale for the classification

The user can:

- **Approve** the proposed classification
- **Modify** the labels, star, or action
- **Skip** to come back later
- **Request unsubscribe** (triggers the unsubscribe flow below)

When the user corrects a classification, append the new rule to [learned-rules.md](../../learned-rules.md) under the appropriate section. Include enough context so the rule is useful in future sessions.

### Phase 5: Previously Triaged

After all new emails are processed, acknowledge emails that remain in the inbox from prior triage sessions (they have labels and stars already). Present a brief summary: count and list of senders/subjects. Do not re-process these unless the user asks.

### Phase 6: Post-Processing

1. **External actions**: Execute any pending external actions (see below). Do not archive an email until all its external actions are complete.
2. **Urgent digest**: List all RED_STAR emails remaining in inbox with subject, sender, age, and what action is needed. This is the "respond to these" list.
3. **Filter suggestions**: Identify senders appearing 3+ times, suggest creating filters.
4. **Summary**: Print counts by action (auto-processed, labeled, starred, archived), external actions completed, new learned rules, and filter suggestions.

## Key Behaviors

**Multi-label routing**: Emails can take multiple labels. An Anthropic receipt is both `📑 Admin/🛒 Purchases` and `🛠️ Craft/💻 Development`. Always route to the most specific sublabel, never a parent pillar alone.

**Star assignment**: Apply colored stars via system label IDs. Never star emails that get archived. Star meanings follow the governing "Star semantics" rule in [learned-rules.md](../../learned-rules.md) (Behavior Rules); that rule is the single source of truth for which star means what.

**When in doubt, ask**: If there is any ambiguity about classification, or an email could take multiple labels, ask the user via AskUserQuestion. Do not guess. Defaulting to asking is always correct.

**Drafting replies**: Never send emails directly to **people**. Always create a draft, present it for review, and wait for explicit approval to send. Direct sends are acceptable when emailing an automation, robot, or mailing list (e.g., an unsubscribe mailto address). Never reference people or sources the user does not know. Always read full email content before making assumptions.

**Calendar awareness**: When someone proposes a date/time, check the calendar to see if it works. If it does, help draft an acceptance and offer to send an invite. If not, propose an alternative (prefer Fridays for in person meetings).

## Unsubscribe Flow

When the user requests unsubscribe during one-by-one presentation:

1. Fetch the `List-Unsubscribe` header:

   ```bash
   gws gmail users messages get --params '{"userId":"me","id":"<ID>","format":"metadata","metadataHeaders":["List-Unsubscribe"]}' --format json
   ```

2. If a `mailto:` address is found, send an unsubscribe email:

   ```bash
   gws gmail +send --to "<unsubscribe-address>" --subject "Unsubscribe" --body "Unsubscribe"
   ```

3. If only a URL is found, present the URL to the user and note they need to visit it manually
4. If no List-Unsubscribe header exists, inform the user that no automated unsubscribe is available
5. After the unsubscribe action, label and archive the triggering email as normal

## External Actions

Some emails trigger actions outside Gmail. Track these as pending items per email. Do not archive an email until all its external actions are complete. If a tool fails (e.g., auth error), prompt the user to fix it before proceeding.

**Supported action types:**

- **Notion**: Route email content or link to a Notion page per learned-rules.md patterns. Use `mcp__claude_ai_Notion__notion-fetch` to get the current page content, then `mcp__claude_ai_Notion__notion-update-page` to add the link. Example: Claude Team announcement emails get linked on the AI Research page.
- **Todoist**: Create tasks for action items (e.g., meal planner emails -> task in relevant project)
- **Calendar**: Check availability for proposed dates, help schedule meetings

## Mode: filters

Create Gmail server-side filters for high-frequency senders.

1. Read [learned-rules.md](../../learned-rules.md) for any previously created filters (stored under `## Created Filters`)
2. Analyze learned rules and recent triage to identify candidates
3. Skip any sender that already has a filter recorded in learned-rules.md
4. Propose filters to user via AskUserQuestion, one at a time
5. Create approved filters:

   ```bash
   gws gmail users settings filters create --params '{"userId":"me"}' --json '{"criteria":{"from":"<sender>"},"action":{"addLabelIds":["<LABEL_ID>"],"removeLabelIds":["INBOX"]}}'
   ```

6. Default action: apply appropriate label, mark read, skip inbox
7. After creating a filter, record it in [learned-rules.md](../../learned-rules.md) under `## Created Filters` to prevent duplicates
