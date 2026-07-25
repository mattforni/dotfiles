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

**Copy the chosen config in.** Drop it at the repo root as `.coderabbit.yaml`.
This is how every wired repo is set up: the `atelic-action` client repos carry
the chill config, and atelic / pinole-api / pinole-app carry the assertive config.
The config travels with the repo, which also suits client deliverables that may
leave the org.

The cost is drift: changing a standard means updating each copy by hand (this
folder's canonical files plus every repo that copied them). There is no automatic
propagation on the Free tier (see below).

### remote_config does not work on Free (do not retry)

`remote_config` (pointing a repo's `.coderabbit.yaml` at a shared file in another
repo) is the obvious edit-once mechanism, and it does not work here. Tried
2026-07-25: even with homebase public, CodeRabbit could not fetch the referenced
file and posted `Could not fetch remote config from
mattforni/homebase/.coderabbit.yaml@main: HttpError: Not Found` on the PR. The
cross-repo content fetch fails on Free regardless of the source repo being public.
So copy the config in; do not burn time re-attempting `remote_config` unless on a
paid tier where cross-repo access behaves differently.

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
