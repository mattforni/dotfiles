# The Brief Runner

A Cloud Run Job (`brief`, project `atelic`, region `us-central1`) fired weekly by Cloud Scheduler. It pulls the closing ISO week from Strava, Gmail, and HubSpot and the week ahead from both inboxes, all three calendars, both YNAB budgets, the active Linear cycle, and Todoist; has headless Claude Code write the retrospective and the first pass of the Monday planning session as one JSON object; applies the rows an exact rule covers when writes are on; renders it all into the branded email through the node renderer in [../email/](../email/); and sends it through Resend as `YYYY-Www Brief`, with the YNAB plan attached. Tracked as ATE-471 (the retrospective) and ATE-674 (the planning pass); renamed from `retro` on 2026-10-19, when the planning pass joined the retrospective in the same mail.

The runtime one pager (why Cloud Run over Routines and launchd, the service account and its secrets, the traps) lives in Eudy at `Admin/Tools/cloud-run.md`. The planning session that reads the mail is the assist plugin's `plan-week` skill.

## What It Writes, and When

The runner fetches, the model reads and bands, and code applies. Every row the model proposes carries a band: **high** when an exact codified rule names the payee or the sender and states the disposition, with the rule cited; **medium** when a rule family applied with interpretation; **decision** for everything else, and always for a delete, a trip memo, a star, a trash, an unsubscribe, a reply, a task, and any Linear, calendar or Todoist change. Only high rows are ever applied, only when `BRIEF_WRITE=1` in `job.json` and the run is not a dry run, and only two kinds exist: a YNAB transaction approved at its mapped category, and a Gmail message labeled, marked read and archived. The scripts resolve every category and label name to an id through their own pulls and drop a row whose name does not resolve, so a misspelling is a line in the mail and never a guess in the books. Medium rows are listed for a spot check, decision rows are numbered on the board at the top of the mail, and the Monday session applies what Forni confirms.

The flag ships off. The first week is propose only; Forni corrects the bands on Monday, and the flag turns on in `job.json` for the second week, applied with `bin/runner/apply-job brief --apply`. The one write the flag does not gate is the rotated Strava refresh token, written back to the vault as the retro always did.

## Iterate Locally First

The loops and the promote step are in [../README.md](../README.md); the short version is `bin/runner/render-local brief` while changing how the email looks, `bin/runner/run-local brief --reuse` while changing what it says, and a merge to main once it is right, which builds the image and points the job at it on its own ([../README.md](../README.md#a-merge-to-main-is-the-promote)). `bin/runner/promote brief` is the same script, kept for a promote by hand.

```bash
bin/runner/fetch-env brief                 # once per machine
bin/runner/run-local brief --week 2026-W42 # renders to out/, sends nothing
PLANNING_PULLS=1 bin/runner/run-local brief --reuse   # retro files reused, planning pulls fresh
bin/runner/render-local brief              # instant re-render after a renderer edit
bin/runner/apply-job brief                 # how the live job differs from job.json; --apply to fix it
bin/runner/fire brief                      # run production now
```

`--reuse` reuses every pull on disk. `PLANNING_PULLS=1` beside it reuses the retro files (the ones that rotate a token and walk HubSpot) and pulls the planning half fresh, which is the loop for the pull scripts. The YNAB and Todoist tokens come from this machine's Keychain when `.env.local` lacks them (`runner_local_credentials` in `bin/runner/lib.sh`).

| File | Role |
|---|---|
| `Dockerfile` | `node:24-slim` plus curl, jq, tzdata, and a pinned Claude Code; runs as the non root `runner` user |
| `entrypoint.sh` | The pulls, the model call, the apply step, the merge, on the shared scaffold in `runners/lib/runner.sh` |
| `prompt.md` | The brief: the retro grading, the planning rules to read, the bands, the board, the JSON shape; `{{WEEK}}`, `{{NEXT_WEEK}}`, `{{MONDAY}}`, `{{SUNDAY}}`, `{{NEXT_MONDAY}}`, `{{NEXT_SUNDAY}}`, `{{TODAY}}`, `{{WORK}}`, `{{EUDY}}`, `{{HOMEBASE}}`, `{{ATELIC}}` are filled at run time |
| `ynab.mjs` | `pull` (accounts, categories, payees, the queue, three months of rows per budget), `week` (the typical against the pace, outliers, trips, into `spend.json`), `apply` (approve high rows at their category) |
| `inbox.mjs` | `pull` (every inbox message in both mailboxes with its labels and a link, plus each label list), `apply` (label, mark read, archive) |
| `calendar.mjs` | `pull` the week ahead on the three calendars, normalized to Denver, with the lint (overlaps, missing flanks, unlabeled) in `calendar-lint.json` |
| `linear.mjs` | `pull` the active ATE cycle with the fields What Counts as Triaged grades |
| `todoist.mjs` | `pull` the Schedule filter and the landing Monday |
| `job.json` | The Cloud Run job and the Cloud Scheduler entry, which `bin/runner/apply-job brief` makes the cloud match; the one file that says when it fires and whether writes are on |
| `mounts` | The Atelic checkout on this machine, mounted read only into a local container run in place of the deploy key clone |
| `tst/` | The spend split, the calendar lint and the shaping of each pull, on invented rows; `node --test runners/brief/tst/*.test.mjs`, run by the lint workflow |
| `plugins/atelic/scripts/lib/hubspot.mjs`, in the Atelic repo | The Atelic pull (its `week` command), run from an Atelic checkout: the one at `$ATELIC`, or a shallow clone over `ATELIC_DEPLOY_KEY`. The one copy of the funnel rules (ATE-656) |

## What the Model Reads

The rules are never copied into the image. A run clones Eudaimonia (the block doc, `schedule.md`, the Linear and calendar tool docs), homebase (the assist plugin's learned rules, payee map, email rules, label map, and the planning skill's learned rules; public, so no key) and the Atelic repo (`Tools/ynab.md`, `Tools/Google/gmail-labels.md`, the funnel rules), and the prompt names each file by path. A rule changed in any of the three is live on the next run and promotes nothing here.

## Pulls That Fail

The retro half's pulls stay fatal: a brief without its retrospective is not a brief. Each planning pull is bounded by `timeout`, never fatal, and recorded in `pulls.json`: a tracker that is down costs its section, which opens with "Not read this run" and the reason, and the footer lists it. A pull that fails removes any partial file so the model never reads half a pull.

The page lands at `out/email.html`, the draft at `out/brief.json`, and the YNAB plan at `out/plan.json`, which rides as the attachment.
