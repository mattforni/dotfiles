# Code Review

The one place the review rules live. The lander agent, the `sdlc:land` skill, the merge gate hook, and every CLAUDE.md Code Review section point here and restate nothing. The mechanism is `~/bin/review/` in homebase; the account mechanics of each vendor live in `~/Eudaimonia/Admin/Tools/<vendor>.md`. Adopted 2026-10-07 (ATE-583), replacing a gate that was restated in nine files and capped at three reviews an hour.

## When a Review Runs

Every pull request that ships code gets a blocking review before it merges, and again after any push, because a review of a stale SHA gates nothing. Code means anything that runs or configures: scripts, hooks, runners, skills and agent definitions, plugin manifests, site and app source, templates, the UI package, artifact pages. The artifact repos, atelic.me, and pinole-app are in, since they go out into the real world.

What skips review is what already lands direct to main by each repo's landing heuristic: prose, a `.gitignore` change, brand assets, dated snapshots. That heuristic lives in the repo's CLAUDE.md and does not change here.

## The Reviewer

`review/run` asks one reviewer: **claude**, Claude Code's built in `/code-review` at high effort, run headless inside the worktree with read only git tools. The skill's findings carry a file, a line, a summary, and a failure scenario but no severity, and no prompt reaches it to add one, so a second short headless pass grades each finding from its own text. The run is uncapped, bills against the Max plan already paid for, and returns in about two minutes, with a hard stop at the run's timeout.

CodeRabbit and Codex were dropped on 2026-10-13 (ATE-635), on the first week of the scorecard. CodeRabbit had a free slot for 64 of 162 runs, found nothing in 34 of those, and no landing recorded a fix it caused. Codex was never wired, and a second paid reviewer made no sense while the first one's findings were arriving ungraded and blocking every landing. A PR bot on a public repo is a fallback whose absence never blocks a merge.

Ultrareview (`/code-review ultra`, `claude ultrareview`) is Forni's to launch by hand on a change that warrants it; it is billed separately and never dispatched from a lander or a script.

Anthropic reads every repo by construction, since Claude writes the code. Any other reviewer touching a client repo is a disclosure question under section 10 of the services agreement, not a technical one.

## Running It

```bash
~/bin/review/run <worktree> --effort high        # Bash timeout 600000
```

It changes into the worktree itself and reports the directory and HEAD in a leading `review_context` line, so the call carries no `cd`. Flags: `--base <ref>` (default the remote's default branch), `--effort low|medium|high|max`, `--max-findings N`, `--timeout <seconds>` (default 480, so it always returns inside the Bash call).

## Reading the Stream

One JSON object per line.

- `review_context`: `workingDirectory`, `repo`, `sha`, `base`, `files`, `reviewers`, `note` (a failed fetch is named here).
- `finding`: `reviewer`, `severity` (critical, major, minor, info), `fileName`, `line`, `summary`, `failure_scenario`.
- `complete`, exactly one: `reviewer`, `ran`, `reason`, `findings`, `blocking` (the findings at critical or major), `unrated` (findings the grading pass did not grade, each stamped major), `sha`, `seconds`, `files`.

**The gate is the claude `complete` line with `ran: true`.** The exit code says the same thing (0 only then) but read the line. An `unrated` count above zero means the grading pass failed, so every finding is stamped major and blocks: run the review once more, and if it is still unrated say so in the landing report, because that is a defect in the gate and not in the change.

A claude line with `ran: false` means nothing was reviewed, not that nothing was found. Retry once after sixty seconds. If it fails again, bail to Forni with the `reason`; a usage limit names its reset, which is reported as a clock time in the machine's zone, never a duration. There is no carve out for small or prose heavy PRs: an uncapped reviewer leaves no honest reason to merge unreviewed.

## Triage

Read the actual code before trusting any finding; reviewers misread control flow, the gate included. The blocking threshold is **major and above**: a run is clean when no such finding remains unaddressed. Major means the change as written does the wrong thing on a path that runs in ordinary use; a hardening suggestion, a guard against a failure nothing makes likely, and a defect the change neither introduced nor touched are minor at most, while data loss, a leaked secret, and a security hole are never below major. The grades are defined once, in the grading prompt in `bin/review/lib.sh`. Minor and info findings never hold a merge: take one when it is cheap and right, and otherwise leave it without a reply. Fix genuine issues, batch a round's fixes into one commit, push, and run the review again against the new HEAD. Decline false positives and style only churn with a reason in the landing report; when the finding came from a bot visible on the PR, reply there so the trail shows it was considered. Converge: never chase a moving target past two cycles without reporting in. Before merging, compare the PR's current head to the `sha` in the claude `complete` line; if they differ, review again.

## The Scorecard

Every run appends a row to `$HOME/.local/state/review/scorecard.tsv` (outside git, because landers write it and nothing on a primary checkout is edited). At merge, record the triage:

```bash
~/bin/review/landed <owner/repo> <pr> <reviewed sha> --fixed 2 --declined 1 --held-min 9
~/bin/review/scorecard --since 7d
```

Count the major and above findings across every pass on the pull request, not the last pass alone: a run row is written on every pass and a landing row once, so a tally of the last pass alone leaves the earlier passes looking like findings nobody triaged.

The scorecard is how a reviewer earns or loses its place: findings and blocking findings per run, how many were fixed against declined, and minutes held. Read it before adding, dropping, or paying for a reviewer.
