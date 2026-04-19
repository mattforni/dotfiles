# Homebase

Personal development environment: shell configs, Claude Code skills, dev tooling, and workstation setup.

## Claude Code Marketplaces

Homebase hosts two plugin marketplaces.

### skillset (public)

Curated, single purpose plugins for development workflows. Hosted at the repo root (`.claude-plugin/marketplace.json`).

```bash
claude plugin marketplace add mattforni/homebase
claude plugin install sdlc@skillset
claude plugin install linear-lifecycle@skillset
```

| Plugin | Description |
|--------|-------------|
| [sdlc](plugins/sdlc/) | Plan, design, checkpoint, review, iterate, complete. See [docs/plugins/sdlc.md](docs/plugins/sdlc.md). |
| [linear-lifecycle](plugins/linear-lifecycle/) | Manage Linear issues via the Linear CLI with zero context overhead. See [docs/plugins/linear-lifecycle.md](docs/plugins/linear-lifecycle.md). |

> Migrating from `mattforni/skillset`? That repo is deprecated. Run `claude plugin marketplace remove skillset` then re add from `mattforni/homebase`.

### local-skills (private)

Personal productivity skills. Lives under [.claude/local-skills](.claude/local-skills/) and is added as a local `directory` source only. Not installable via GitHub.

| Plugin | Description |
|--------|-------------|
| [assist](.claude/local-skills/plugins/assist/) | Emails, schedule, codify, sharpen, BD, job apply, meals, permissions. |
