# Outreach Runner

Monday 06:00 Denver, from launchd. Runs the `outreacher` agent headlessly so the ATE-480 Weekly Outreach roster is rebuilt and drafted before the Tuesday desk block, then mails a status report as `YYYY-Www Outreach`.

Prep only. The agent never emails anyone, never moves a Lead Status, and never posts to a client surface. Every send waits for Forni's explicit yes inside the Tuesday block, one at a time, through `/lead:handle-outbound`.

## Running It

```bash
bin/runner/run-local outreach --reuse    # re-render the saved run, no network
bin/runner/run-local outreach            # run the agent, render, send nothing
bin/runner/run-scheduled outreach        # what launchd does, send included
```

`--week YYYY-Www` drafts another week. The work directory is `runners/outreach/out/`, which is also the agent's scratch directory and the only path it is allowed to write.

## Local Only, on Purpose

This runner has no Dockerfile, and `bin/runner/promote` will refuse it and say so. That is a position, not a gap. Two things keep it on this machine:

**It reads through the local CLIs.** HubSpot through `hs`, both mailboxes and the One Pager through `gws`, and it writes the roster through `linear`. All three are authenticated here, and `hs` and `gws` resolve which portal and which mailbox from the `.account` marker in the Atelic repo, which is why the entrypoint refuses to run from anywhere else. Reading the wrong CRM is the expensive failure, so that is a hard gate rather than a warning.

**Its customer path walk needs a real browser.** The method requires `agent-browser`, never `curl` alone, because a Cloudflare challenge, a per visit phone number, and a lazy loaded form all lie to a fetch. It keeps screenshots of anything it would cite.

Promoting it to Cloud Run would mean, roughly: a vaulted `authorized_user` JSON per Google identity so the mailbox reads go straight to the Gmail API the way the retro's already do, a HubSpot service key and a Linear key in the vault with the reads and the roster write moved to their HTTP APIs, a deploy key for the Atelic repo alongside the retro's Eudy one, the `outreacher` agent definition copied into the image, and a browser in the image. The last one is the only piece with no precedent in `runners/`, and it is a real jump in image size and memory. The browser is used on the bumps due path rather than across the whole roster, so a split where the walk stays local is also on the table.

## What It Reads

The agent definition is `.claude/agents/outreacher.md`, and it names its own sources of truth: the Outreach method, the voice, the ICP statement in the One Pager, HubSpot, the client board, and Linear. This runner adds nothing to that and deliberately carries no prompt of its own; the prompt is one line naming the week and the scratch directory, and everything else lives in the agent.

## Failure

The report is mailed on failure as well as success, with the reason on top and the last lines of the agent's output beneath it. A run that cannot deliver its report exits non zero so the log carries it, since nobody is watching at 06:00.

`SKIP_PULLS=1` replays the saved run in `out/result.json` with its saved exit status, which is how a failure gets looked at without paying for the agent again.
