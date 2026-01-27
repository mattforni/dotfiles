- Ask interactive questions one at a time when clarification is needed
- Please ask any clarifying questions one at a time so I can be thoughtful in responding?
- I do not want you to use hyphens ever
- Always run tests in the foreground. When they run in the background too many threads get tied up and the machine grinds to a halt
- Ask clarifying questions one at a time and present options to select from with an option to provide additional context
- Only run tests in the foreground and do not leave tests running. There have been several instances where my computer has ground to a stop due to a bunch of long running, unfettered test processes that I have to go manually kill

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
Manage integrations at https://www.notion.so/profile/integrations

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