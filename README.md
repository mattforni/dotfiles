# Homebase

Personal development environment: shell configs, Claude Code skills, dev tooling, and workstation setup.

Homebase is where every dotfile and configuration file lives so it can be iterated on in one place and shared across machines through `./setup.sh`. It is public; [Eudaimonia](https://github.com/mattforni/Eudaimonia), the personal library, is private and loads this repo's `CLAUDE.md` through the `~/CLAUDE.md` link the deploy table creates, which is how the workstation conventions reach every Claude Code session. Depth that only matters when a particular file is being edited lives in path scoped rules under `.claude/rules/`, so the always loaded file stays short.

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

#### Per clone config

`sdlc:review` and `sdlc:iterate` read the re review trigger from `git config sdlc.review-command`. The plugin default is `/gemini review`, but this repo uses CodeRabbit. `setup.sh` sets the local config automatically, or you can run it by hand:

```bash
git config sdlc.review-command "@coderabbitai review"
```

### local-skills (private)

Personal productivity skills. Lives under [.claude/local-skills](.claude/local-skills/) and is added as a local `directory` source only. Not installable via GitHub.

| Plugin | Description |
|--------|-------------|
| [assist](.claude/local-skills/plugins/assist/) | Emails, schedule, codify, sharpen, BD, job apply, meals, permissions. |
