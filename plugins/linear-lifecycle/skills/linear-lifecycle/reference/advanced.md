# Advanced Usage

Multi-team operations, context budget analysis, and performance comparisons.

## Multi-Team Operations

The Linear CLI accepts `--team` for cross-team operations within the same Linear workspace. No workspace switching needed.

**List issues for a specific team:**

```bash
linear issue list --team Frontend
```

```bash
linear issue list --team Backend
```

**Create issue in a specific team:**

```bash
linear issue create -t "Fix API timeout" --team Backend -d "API requests timing out after 30s under load."
```

## Context Budget Comparison

| Metric | Linear MCP | Linear CLI | Savings |
|--------|-----------|------------|---------|
| Tokens at session start | ~20,000 | 0 | 100% |
| Tool definitions loaded | All Linear tools | None (bash only) | 100% |
| Reference material size | ~13,000 tokens | ~1,000 tokens | 92% |
| Context budget remaining | 180k / 200k | 200k / 200k | +20k tokens |

**Key insight:** MCP loads all tool definitions into context immediately. The Linear CLI uses zero context at session start. Reference material (this skill) loads on demand and is 92% smaller than MCP tool definitions.

## When to Use MCP Instead

The Linear CLI covers the most common Linear operations. Consider the Linear MCP if you need:

- Webhook management
- Custom view creation
- Batch operations across hundreds of issues
- Integration configuration
- Advanced filtering with Linear's query language
