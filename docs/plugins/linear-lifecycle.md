# linear-lifecycle

Linear issue management using the Linear CLI with zero-context overhead.

## Overview

The `linear-lifecycle` plugin enables Claude to manage Linear issues efficiently without loading heavy MCP servers. Instead of consuming 20k tokens with Linear MCP tools, it uses the lightweight [Linear CLI](https://github.com/schpet/linear-cli) which returns structured output for parsing.

**Context savings: 100%** - No MCP loaded, just bash commands.

## Features

### Zero Context Overhead

- Uses the Linear CLI instead of 20k token Linear MCP
- Returns structured output for parsing
- Saves ~92% of context even for reference material
- 200k/200k tokens remain available for actual work

### Complete Linear Workflow Integration

- Get issue details when starting work
- Create new issues from discovered bugs/features
- Update issue status during development
- Add comments and progress updates
- Search across teams and projects
- Close issues when work is complete

## Requirements

- **Homebrew** (for Linear CLI installation)
- **jq** - JSON processor for parsing Linear API responses
  - macOS: `brew install jq`
  - Debian/Ubuntu: `sudo apt-get install jq`
  - Other systems: See [jq installation guide](https://jqlang.github.io/jq/download/)

## Installation

```bash
# Add the marketplace
claude plugin marketplace add mattforni/homebase

# Install the plugin
claude plugin install linear-lifecycle@skillset
```

> **Migrating from `mattforni/skillset`?** The `skillset` marketplace moved to `mattforni/homebase`. Remove the old source first: `claude plugin marketplace remove skillset`, then follow the steps above.

## Setup

After installing the plugin, configure it:

### Automated Setup (Recommended)

Run the setup command in Claude Code:

```
/linear-setup
```

This will:

1. Install the Linear CLI if not present (via `brew install schpet/tap/linear`)
2. Authenticate with `linear auth login`
3. Verify connection to Linear API

### Manual Setup

```bash
# 1. Install Linear CLI
brew install schpet/tap/linear

# 2. Authenticate (requires API key from Linear Settings > Security & Access)
linear auth login

# 3. Verify connection
linear issue list
```

## Usage Examples

Once installed and configured, Claude will automatically use the linear-lifecycle skill when appropriate:

### Start Work on an Issue

```
You: Start working on BET-123

Claude: Fetching issue details...

Issue: BET-123 - Implement dark mode toggle
Status: Todo
Description: Add dark mode toggle to settings page with persistent preference storage
Labels: feature, ui
Branch: bet-123-dark-mode-toggle

Creating branch bet-123-dark-mode-toggle...
```

### Create a New Issue

```
You: Create a Linear issue for fixing the avatar crop bug

Claude: Created issue BET-145: Fix avatar crop bug
https://linear.app/your-workspace/issue/BET-145

Avatar images are cropping incorrectly on mobile devices. Need to adjust aspect ratio handling.
```

### Update Issue Status

```
You: Update BET-456 to in progress

Claude: Updated BET-456 to In Progress
```

### Add Comments

```
You: Add comment to BET-789 about the refactor being done

Claude: Added comment to BET-789
"Completed auth refactor. Moved from Context API to Zustand for better performance. All tests passing."
```

### Close Completed Work

```
You: Close BET-789, PR merged

Claude: Added completion comment to BET-789
Marked BET-789 as Done

Feature complete. PR #456 merged to main.
```

## How It Works

The skill:

1. Executes Linear CLI commands with appropriate flags
2. Parses output to extract relevant information
3. Formats results cleanly for the user
4. Never consumes context with MCP tool definitions

## Performance Comparison

### Before (Linear MCP)

- 20k tokens consumed at session start
- All tools loaded in context
- Context budget: 180k/200k remaining (10% overhead)

### After (Linear CLI via this plugin)

- 0 tokens in session (just bash commands)
- Lightweight per operation
- Context budget: 200k/200k remaining (0% overhead)
- **100% context savings**

## Troubleshooting

### Not Authenticated

If you see authentication errors:

1. Run `linear auth login`
2. Provide your Linear API token
3. Token source: **Linear Settings > Security & Access > Personal API keys**
4. Verify with `linear issue list`

### Linear CLI Not Installed

```bash
brew install schpet/tap/linear
```

## Credits

- **Linear CLI**: [github.com/schpet/linear-cli](https://github.com/schpet/linear-cli) by schpet
- **Plugin Author**: Matthew Fornaciari [@mattforni](https://github.com/mattforni)

## License

MIT License - see LICENSE for details

## Support

- Issues: [GitHub Issues](https://github.com/mattforni/homebase/issues)
- Discussions: [GitHub Discussions](https://github.com/mattforni/homebase/discussions)
