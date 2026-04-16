- Ask interactive questions one at a time when clarification is needed
- Please ask any clarifying questions one at a time so I can be thoughtful in responding?
- I do not want you to use hyphens ever
- Always run tests in the foreground. When they run in the background too many threads get tied up and the machine grinds to a halt
- Ask clarifying questions one at a time and present options to select from with an option to provide additional context
- Only run tests in the foreground and do not leave tests running. There have been several instances where my computer has ground to a stop due to a bunch of long running, unfettered test processes that I have to go manually kill

## General Behavior

- When the user asks you to do something specific, act on that request immediately. Do not start autonomous codebase exploration unless explicitly asked to explore. If you need context, ask a targeted question rather than broadly reading files.
- Do not overstate or exaggerate the quality of results. If something looks like it works but has not been thoroughly validated, say so. Let the user judge quality.

## Workflow Conventions

- When creating plans or documents, ALWAYS present them to the user for review before writing to a file. Never write plans directly to files unless explicitly asked.
- When editing existing files, never overwrite the original without explicit permission. Create a new version file (e.g., v2, draft) instead of modifying the original in place.

## External App Integration

Preferred methods for connecting Claude to outside apps, in order:

1. **Native Claude Connectors** (first party integrations built into Claude)
2. **Officially Supported CLIs** (especially those with skills/plugins)
3. **MCPs** (Model Context Protocol servers)

Choose the highest available option. Native connectors are smoother and require less configuration.

### Google Workspace links (Docs, Sheets, Slides, Drive)

Always read Google Workspace links using the `gws` CLI, never WebFetch. WebFetch fails with HTTP 401 on authenticated Google URLs. Extract the file ID from the URL path (`.../d/<ID>/...`) and use the matching command:

| Link host/path | Service | Read command |
|---|---|---|
| `docs.google.com/document` | Docs | `gws docs documents get --params '{"documentId": "<ID>"}'` |
| `docs.google.com/spreadsheets` | Sheets | `gws sheets +read --spreadsheet <ID> --range Sheet1` |
| `docs.google.com/presentation` | Slides | `gws slides presentations get --params '{"presentationId": "<ID>"}'` |
| `drive.google.com/file` | Drive | `gws drive files get --params '{"fileId": "<ID>"}'` |

For Google-native files hosted in Drive, use the matching Docs/Sheets/Slides command to read content. Use `gws drive files get` for file metadata or to export non-native files.

## Code Review

- During PR review iteration, only address NEW or UNRESOLVED review comments. Do not re-address comments that have already been resolved. Ask if unclear which comments are new.

## MCP Servers

### Notion MCP (Official)

**Config location:** `~/.mcp.json`
**Package:** `@notionhq/notion-mcp-server` (official Notion MCP by makenotion)
**Server name:** `notion`

**Enable per project:** Add to project's `.claude/settings.local.json`:

```json
{
  "enabledMcpjsonServers": ["notion"]
}
```

**Disable per project:** Add to project's `.claude/settings.local.json`:

```json
{
  "disabledMcpjsonServers": ["notion"]
}
```

**Token:** Stored as `NOTION_TOKEN` env var in `~/.zshrc`. Config references it via `${NOTION_TOKEN}`.
Manage integrations at <https://www.notion.so/profile/integrations>

## Linear Ticket Preferences

When creating new Linear tickets:

- Always set status to **Todo**
- Always assign to **Forni** (me)

## Email Preferences

- Subject lines should use title case (capitalize as if a book title)
- Never explicitly sign emails (Gmail handles signatures automatically)
- End emails with "Cheers and chat soon!"
- Reply to existing email threads instead of creating new ones when following up
- When including scheduling link, format as: "Here's [my scheduling link](https://app.reclaim.ai/m/forni/chat) if that's easier."

## Todoist Preferences

- Tasks that need scheduling go on the following Monday
- Monday morning planning sessions are used to schedule these tasks
- Task titles: emoji prefix + short title (e.g., "📧 [Follow Up with Jeff](https://mail.google.com/...)"). Link to source in the title text when available.
- Details go in a comment on the task, not in the description field

## Code Project Conventions

- Root level directories should be 3-4 characters that clearly identify contents (e.g., `src/`, `docs/`, `adr/`, `lib/`)

## Problem Solving Approach

- Always be problem-first. Understand the problem deeply before jumping to solutions or tooling. Technology serves the problem, not the other way around.

## Research Documentation

- Research outputs should be one-pagers. Brevity is the soul of wit.
- Capture the essential insights, not everything learned along the way.
- If it can't fit on one page, it needs to be split into multiple focused topics.
