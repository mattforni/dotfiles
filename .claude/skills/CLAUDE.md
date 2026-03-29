# Local Skills

This directory contains Claude Code skills that are installed via the `local-skills` marketplace.

## Architecture

```
homebase repo (.claude/skills/)     <- you are here, source of truth
        |
        v (symlink)
~/.claude/plugins/marketplaces/local-skills/<namespace>
        |
        v (claude plugins install)
~/.claude/plugins/cache/local-skills/<namespace>/1.0.0/
        |
        v (loaded at session start)
Claude Code runtime
```

## Marketplace Config

The marketplace metadata lives at `~/.claude/plugins/marketplaces/local-skills/.claude-plugin/marketplace.json`. Each namespace is a plugin entry with a `skills` array listing its SKILL.md files. New skills must be registered there to be discoverable.

## Namespaces

| Namespace | Path | Skills |
|-----------|------|--------|
| assist | `assist/` | emails, schedule |
| bd-email | `bd-email/` | bd-email |
| job-apply | `job-apply/` | job-apply |
| gws-* | `gws-*/` | Gmail and Calendar CLI wrappers |

## Creating a New Skill

See `assist/README.md` for the step-by-step process. The short version:

1. Write the SKILL.md in the appropriate namespace directory
2. Register in marketplace.json
3. `claude plugins install <namespace>@local-skills`
4. New session picks it up

## After Editing a Skill

Changes to SKILL.md files here are not live until reinstalled:

```bash
claude plugins install <namespace>@local-skills
```

Then start a new Claude Code session.
