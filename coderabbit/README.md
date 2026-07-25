# CodeRabbit House Standards

Canonical CodeRabbit configs, hosted here because homebase is public so any repo
can point at these files. Two standards, chosen by repo type.

## The Two Standards

| Standard | Profile | Use For | Canonical File |
|----------|---------|---------|----------------|
| **Chill** | `chill` (low noise) | Client-facing / marketing sites (the `atelic-action` repos) | [`coderabbit/chill.yaml`](chill.yaml) |
| **Assertive** | `assertive` (thorough) | Your own code and tooling (homebase, atelic, pinole) | [`.coderabbit.yaml`](../.coderabbit.yaml) at repo root |

The split is deliberate: be low-noise on work handed to clients, be thorough on
your own code. Assertive adds `request_changes_workflow`, shellcheck, and reads
`CLAUDE.md` files as review guidelines; chill stays lean and filters generated
files.

## Applying a Standard to a Repo

Two ways, pick per repo:

1. **Copy in (portable).** Drop the chosen config at the repo root as
   `.coderabbit.yaml`. Best for client deliverables that may leave the org, since
   the config travels with the repo. This is how the `atelic-action` client repos
   are set up.
2. **Reference (edit-once).** Point the repo's `.coderabbit.yaml` at the canonical
   file here via `remote_config`, so a change here propagates everywhere:

   ```yaml
   remote_config:
     repository: "mattforni/homebase"
     ref: "main"
     path: "coderabbit/chill.yaml"   # or ".coderabbit.yaml" for assertive
   ```

   A per-repo file can also override individual fields on top of the referenced
   config. Prefer this for your own code repos.

## Tier Notes (Free)

The Free tier reviews private repos with the same models as Pro, rate-limited to
about 200 files and 4 PR reviews per hour. `tone_instructions` and custom
`knowledge_base` guidelines are Pro features and no-op on Free (harmless if
present). Installing on a GitHub **Organization** funnels through a 14-day Pro
Plus trial, then drops to Free; per the docs the org keeps working on Free after.

## Local Reviews (CLI)

`coderabbit` (installed via the Brewfile cask). Authenticate once with
`cr auth login`, then `coderabbit review --base main --agent` reviews the current
branch against main and emits structured findings. Free tier, daily limits apply.

## Gotcha: pre-commit / pre-push lint hooks

The `atelic-action` client repos run `biome check` in husky pre-commit and
pre-push hooks. `biome` resolves through bun and is not on PATH in a
non-interactive (agent) shell, so the hooks exit 127 and abort the commit/push.
For a config-only change like adding `.coderabbit.yaml`, commit and push with
`--no-verify`; biome does not lint YAML anyway.
