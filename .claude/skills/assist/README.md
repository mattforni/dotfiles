# Assist Namespace

Personal productivity skills under the `assist:` prefix.

## Skills

| Skill | Command | What it does |
|-------|---------|-------------|
| emails | `/assist:emails` | Triage Gmail inbox: label, star, archive, create filters |
| schedule | `/assist:schedule` | Weekly planning, calendar management, task slotting |

## Directory Structure

```
assist/
├── README.md              # This file
├── learned-rules.md       # Shared corrections across all assist skills
├── reference/             # Shared reference docs
│   ├── label-map.md       # Gmail label taxonomy
│   └── triage-rules.md    # Default email classification rules
└── skills/
    ├── emails/
    │   └── SKILL.md       # Email triage skill
    └── schedule/
        └── SKILL.md       # Schedule planning skill
```

## Adding a New Skill

1. Create `skills/<skill-name>/SKILL.md` with frontmatter:

   ```yaml
   ---
   name: assist:<skill-name>
   description: What it does and when to trigger.
   allowed-tools:
     - Tool1
     - Tool2
   ---
   ```

2. Register it in the marketplace config at `~/.claude/plugins/marketplaces/local-skills/.claude-plugin/marketplace.json`. Add the path to the `skills` array in the `assist` plugin entry:

   ```json
   "skills": [
     "./skills/emails/SKILL.md",
     "./skills/<skill-name>/SKILL.md"
   ]
   ```

3. Reinstall the plugin to refresh the cache:

   ```bash
   claude plugins install assist@local-skills
   ```

4. Start a new Claude Code session. The skill will be available as `/assist:<skill-name>`.

## How the Linkage Works

This directory lives in the homebase repo at `.claude/skills/assist/`. A symlink connects it to the local-skills marketplace:

```
~/.claude/plugins/marketplaces/local-skills/assist
  -> ~/Craft/Development/homebase/.claude/skills/assist
```

When you run `claude plugins install assist@local-skills`, Claude Code copies from the symlinked source into its cache at `~/.claude/plugins/cache/local-skills/assist/1.0.0/`. The cache is what Claude Code actually reads at runtime.

**The flow:**

```
homebase repo (source of truth)
  -> symlink in local-skills marketplace
    -> `claude plugins install` copies to cache
      -> Claude Code reads from cache at startup
```

Changes to SKILL.md files in this repo are NOT live until you reinstall.

## Shared Resources

`learned-rules.md` and `reference/` are shared across all skills in this namespace. Skills reference them with relative paths (e.g., `../../learned-rules.md` from a skill directory). The install process flattens these paths, so the cached version uses `../` instead. This difference is handled automatically.
