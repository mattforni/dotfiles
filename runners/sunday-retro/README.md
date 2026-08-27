# The Sunday Retro Runner

A Cloud Run Job (`sunday-retro`, project `atelic`, region `us-central1`) that fires every Sunday at 07:00 Denver, pulls the ISO week from Strava, Gmail, and Todoist with curl, has headless Claude Code draft the retrospective as JSON, renders it into the branded email with `render.jq`, and sends it through Resend as `YYYY-Www Retro`. Read only against the world except the rotated Strava refresh token, which it writes back to the vault. Tracked as ATE-471.

The runtime one pager (why Cloud Run over Routines and launchd, the service account and its secrets, the schedule, the rebuild and test fire recipe, the traps) lives in Eudy at `Admin/Tools/cloud-run.md`. Edit the files here, then rebuild and point the job at the new image:

```bash
gcloud builds submit runners/sunday-retro --tag us-central1-docker.pkg.dev/atelic/runners/sunday-retro:latest --project=atelic
gcloud run jobs update sunday-retro --project=atelic --region=us-central1 --image=us-central1-docker.pkg.dev/atelic/runners/sunday-retro:latest
gcloud run jobs execute sunday-retro --project=atelic --region=us-central1 --wait
```

| File | Role |
|---|---|
| `Dockerfile` | `node:20-slim` plus curl, jq, tzdata, and a pinned Claude Code; runs as the non root `runner` user |
| `entrypoint.sh` | The pulls, the `claude -p` call (Read as its only tool), the render, the send, and the Strava write back |
| `prompt.md` | The retro brief: the block's grading, the JSON shape, the voice rules; `{{WEEK}}`, `{{MONDAY}}`, `{{SUNDAY}}`, `{{TODAY}}`, `{{WORK}}` are filled at run time |
| `render.jq` | The email template: Geist on cream with one orange accent, Gmail safe tables, every style inline |
