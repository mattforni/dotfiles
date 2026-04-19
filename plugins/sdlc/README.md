# SDLC Plugin

Software development lifecycle skills for planning, designing, implementing, reviewing, and completing work.

## Quick Start

```bash
claude plugin marketplace add mattforni/homebase
claude plugin install sdlc@skillset
```

## Skills

| Skill | Description |
|-------|-------------|
| `/sdlc:plan` | Refine requirements on a Linear ticket through Socratic dialogue |
| `/sdlc:design` | Start work on an issue with branch setup and implementation design |
| `/sdlc:checkpoint` | Save work in progress (commit + push, no PR) |
| `/sdlc:review` | Create PR and request code review |
| `/sdlc:iterate` | Address PR feedback, request re-review |
| `/sdlc:complete` | Reset environment for next task |

## Workflow

```text
/sdlc:plan <issue-id> → /sdlc:design <issue-id> → [implement] → (/sdlc:checkpoint)* → /sdlc:review → (/sdlc:iterate)* → /sdlc:complete
```

## Full Documentation

See [docs/plugins/sdlc.md](../../docs/plugins/sdlc.md) for detailed usage, configuration options, and skill documentation.
