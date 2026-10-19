# The Brief Runner

A Cloud Run Job (`brief`, project `atelic`, region `us-central1`) fired weekly by Cloud Scheduler, that pulls the ISO week from Strava, Gmail, and HubSpot with curl, has headless Claude Code draft the retrospective as JSON, renders it into the branded email through the node renderer in [../email/](../email/), and sends it through Resend as `YYYY-Www Brief`. Read only against the world except the rotated Strava refresh token, which it writes back to the vault. Tracked as ATE-471; renamed from `retro` on 2026-10-19 (ATE-674), when the Monday planning pass joined the retrospective in the same mail.

The runtime one pager (why Cloud Run over Routines and launchd, the service account and its secrets, the traps) lives in Eudy at `Admin/Tools/cloud-run.md`.

**Iterate locally first.** The loops and the promote step are in [../README.md](../README.md); the short version is `bin/runner/render-local brief` while changing how the email looks, `bin/runner/run-local brief --reuse` while changing what it says, and a merge to main once it is right, which builds the image and points the job at it on its own ([../README.md](../README.md#a-merge-to-main-is-the-promote)). `bin/runner/promote brief` is the same script, kept for a promote by hand.

```bash
bin/runner/fetch-env brief                 # once per machine
bin/runner/run-local brief --week 2026-W35 # renders to out/, sends nothing
bin/runner/render-local brief              # instant re-render after a renderer edit
bin/runner/promote brief                   # by hand only: the merge already does this
bin/runner/fire brief                      # run production now
```

| File | Role |
|---|---|
| `Dockerfile` | `node:24-slim` plus curl, jq, tzdata, and a pinned Claude Code; runs as the non root `runner` user |
| `entrypoint.sh` | The pulls and the Strava write back, on the shared scaffold in `runners/lib/runner.sh` (the week, the `claude -p` call with Read as its only tool, the draft check, the render, the send) |
| `mounts` | The Atelic checkout on this machine, mounted read only into a local container run in place of the deploy key clone |
| `plugins/atelic/scripts/lib/hubspot.mjs`, in the Atelic repo | The Atelic pull (its `week` command), run by `entrypoint.sh` from an Atelic checkout: the one already at `$ATELIC`, or a shallow clone over `ATELIC_DEPLOY_KEY`, which the job needs mapped and which is required up front whenever the pulls run with no checkout in place. The one copy of the funnel rules (ATE-656): the HubSpot joins and the outreach arithmetic, handed to the prompt as finished tables. Each row carries the day of any reply this week, deals included, and the kind of its last touch, where a paper drop off (a meeting titled as one) is its own kind and never a bump |
| `prompt.md` | The brief itself: the block's grading, the JSON shape, the voice rules; `{{WEEK}}`, `{{MONDAY}}`, `{{SUNDAY}}`, `{{TODAY}}`, `{{WORK}}`, `{{EUDY}}` are filled at run time |

The page lands at `out/email.html` and the draft at `out/brief.json`, the names every runner uses.
