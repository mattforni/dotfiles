# Runners

Headless Claude routines that run on a schedule as Cloud Run Jobs. One directory per runner, each holding everything that runner is: its container, its pulls, its prompt, and its renderer.

| Runner | What It Does |
|---|---|
| [sunday-retro/](sunday-retro/README.md) | Sunday 07:00 Denver. Pulls the ISO week from Strava, Gmail, and HubSpot, has Claude write the retrospective, and emails it as `YYYY-Www Retro`. |

The runtime one pager (why Cloud Run over Routines and launchd, the service accounts and their secrets, the schedules, the traps) lives in Eudy at `Admin/Tools/cloud-run.md`.

## Iterate Locally, Then Promote

**Every change to a runner is developed and iterated on this machine first, and reaches Cloud Run only once the local result is right.** Editing a routine by rebuilding an image, waiting on Cloud Build, firing the job, and reading the result out of a logging query is a four minute round trip for a one line change, and it puts every experiment into production and into an inbox. The local loops below are seconds, and nothing they do is visible to anyone.

Three loops, each answering a different question. Use the cheapest one that can answer yours.

| Loop | Command | Costs | Use it when |
|---|---|---|---|
| Render | `bin/runner/render-local <name>` | nothing, no network | changing how the email looks: `render.jq`, a table, the type, the palette |
| Draft | `bin/runner/run-local <name> --reuse` | one Claude call | changing what the email says: `prompt.md`, the JSON shape, the reads |
| Full | `bin/runner/run-local <name>` | every pull plus one Claude call | changing the pulls themselves, or a last check before promoting |

Then, and only then:

```bash
bin/runner/mail <name>             # read the draft in Gmail, where it lands
bin/runner/promote <name>          # Cloud Build builds it, the job points at it
bin/runner/fire <name>             # run production now and print its log
```

A browser preview is not the artifact. Gmail collapses styles, rewrites markup,
and renders on a phone, so `mail` is the last check before `promote`: it sends
the exact rendered bytes through the same Resend sender the job uses. Its key
comes from the Keychain through `bin/lib/email-report.sh`, never from the
vault, because the vault copy belongs to the container.

### The Commands

| Command | Role |
|---|---|
| `fetch-env <name>` | Writes `runners/<name>/.env.local` from the **deployed job's own** secret mapping, pulling each value from the vault. Run it once per machine, and again whenever a runner gains a secret. |
| `run-local <name>` | Runs the real `entrypoint.sh` against those real secrets, rendering to `out/retro.html` instead of sending. `--week` drafts another week, `--reuse` skips the pulls, `--send` actually delivers. |
| `render-local <name>` | Pushes the saved `out/retro.json` back through `render.jq`. No network, no model. |
| `promote <name>` | Cloud Build builds the image, the job is pointed at it. Refuses a dirty tree without `--dirty`. |
| `fire <name>` | Executes the job now and prints its log. `--week` is applied, used, and cleared again. |
| `mail <name>` | Mails whatever is rendered in `out/` to the production recipient, so a draft can be read in Gmail rather than a browser. Preview only; production sending stays in the runner. |

`out/` and `.env.local` are gitignored. `.env.local` is mode 600 and holds live credentials in plaintext: never commit it, never print it into a transcript.

### Two Things Worth Knowing

**The secret mapping is never written down twice.** `fetch-env` reads it back out of the deployed job rather than keeping a copy in the repo, so a local run cannot quietly become an older version of production. The cost is that a brand new runner has to be created in Cloud Run before its local loop works.

**The container's jq is older than yours.** The image is `node:20-slim` on Debian bookworm, which ships jq 1.6; a Homebrew mac is on 1.8. A renderer that compiles locally can still fail in the cloud, and it fails at the very last step, after every pull and the whole Claude call have been paid for. The trap that caught us on 2026-08-29 was `label`, a jq keyword that 1.8 tolerates as a `$label` parameter name and 1.6 rejects outright. Prefer plain names, and treat a clean `render-local` as evidence about your jq rather than about the runner's.

**A local run still rotates the real Strava token.** Strava invalidates a refresh token the moment it issues the next one, so a local run that pulls Strava has to write the new one back to the vault or the next cloud run cannot refresh at all. `entrypoint.sh` falls back to the operator's own gcloud credentials when there is no metadata server to ask. This is the one thing a local run changes in the outside world, and it is not optional.

## Adding a Runner

A runner directory needs `entrypoint.sh` (executable) and a `Dockerfile`; `render.jq` and a `README.md` if it emails something. The entrypoint should honor `DRY_RUN` (render, do not send) and `SKIP_PULLS` (reuse what is already in `$WORK`), since those two flags are the whole local loop, and should find its own siblings relative to the script rather than at an absolute container path, so it runs unchanged in both places. Keep the date math portable: the image has GNU date and this machine has BSD date, and `sunday-retro/entrypoint.sh` carries the three helper shims that bridge them.
