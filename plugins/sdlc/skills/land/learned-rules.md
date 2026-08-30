# SDLC Land: Learned Rules

Session-specific gotchas and decisions captured from real land cycles. These override the generic guidance in SKILL.md when they conflict.

Read this file before each land. Add to it after.

## Format

Each rule states the rule, the reason, and how to apply it.

## Rules

### The Gate Is the CodeRabbit CLI, Run Locally on the Branch

`coderabbit review --base origin/main --committed --agent`, run against the branch's current HEAD, is the review gate before any merge, on every repo. The PR bot is a fallback on public repos and nothing at all on private ones. Never hold a merge waiting for it.

**Why:** On a private repo the free plan posts a walkthrough comment and never a review object, so a loop that polls for a review polls forever and a gate built on it reads green on nothing. Across `mattforni/pinole-app` PRs 69, 71, 72, and 73 the `reviews` array was empty every time. Free also allows only one PR review per developer per hour, which is what "CodeRabbit is slow" actually was: the first comment lands in about ten seconds, and the second look inside the hour is what waits. pinole-app #73 sat 39 minutes past green CI on exactly this, and the CLI reviewed the same diff in about two minutes and found a real bug the PR bot had not. Adopted by Forni 2026-08-29.

**How to apply:** Run the CLI in Step 2 before you look at anything else, and again after every push, since a review of a stale SHA gates nothing. Parse the JSONL rather than the exit code, which is undocumented. The CLI needs a working directory and has no flag for one, so drive it through a wrapper script that changes directory internally. Free tier allows three CLI reviews an hour, so spend them on real HEADs. On a public repo, where the free Open Source plan reviews properly, read whatever bot findings have already arrived and triage them like any others, but merge on your own CLI run plus CI regardless. Mechanics, rate limits, and the JSONL shape live in `~/Eudaimonia/Admin/Tools/coderabbit.md`.

### Reply on an Inline Comment When Declining a Bot Re-Raise, Don't Merge Silently Through It

When the PR bot on a public repo re-raises an inline comment after it has already been addressed, post a brief reply before merging. A reply that says "Re-raise: already addressed in <sha>" closes the loop in the PR's audit trail. Silent declines leave the PR looking like the concern went unanswered, and a future reviewer cannot tell the difference between "ignored" and "considered and declined."

**Why:** Bots persist the original inline-comment IDs across review cycles, so the same item shows up again on the new SHA even though the code is fixed. Surfaced on ATE-367 app PR #36 (2026-05-25): two of three items on the second cycle were already-addressed re-raises. Replying to each kept the conversation honest.

**How to apply:** During Step 4, when triaging a re-raise or any genuine decline where you disagree, post:

```bash
gh api -X POST repos/<owner>/<repo>/pulls/<PR>/comments/<comment_id>/replies \
  -f body="Re-raise: already addressed in <sha>."
```

Cost is one reply per declined comment. Apply it for genuine declines too, explaining *why* you are declining rather than just that you are. Findings that came from your own CLI run are private to you, so they need no reply; they need a line in your summary.

### Never Read a Green Check Suite as Evidence That a Review Happened

CodeRabbit posts a commit status and a check suite whether or not it produced a review, and it posts a passing one during a rate limit cooldown as well. A status colour therefore says nothing about whether anyone read the diff.

**Why:** This is the failure that made a bot shaped gate feel safe while gating on nothing, and it is why the gate is the CLI's own findings output rather than any signal GitHub renders.

**How to apply:** Judge the gate on the CLI run against the current HEAD and on CI's own real checks. Treat every bot signal as informational.

### Merge on the CLI Review Plus CI, Regardless of Change Size

Once the CLI review has run clean on the current HEAD and CI is green, merge. There is no separate wait to skip for a doc-only change and none to sit through for a code change, because the gate now costs a couple of minutes instead of an hour.

**Why:** The old rule carved doc-only and follow-up cycles out of the bot poll because waiting was pure overhead with no signal value, which Forni called out twice in one session (2026-05-25) with CI green and merge_state CLEAN. The carve out existed to route around bot latency. The CLI removed the latency, so the exception is no longer needed and the review runs on everything, which is the stronger position.

**How to apply:** Run the CLI on every land. Do not wait for anything else. Kill the CI Monitor as soon as it reports READY rather than waiting a window out of habit.

### Branch Parity Checks Compare Against the Merge Base, Not Bare Main

After a squash merge, `git diff origin/main <branch>` shows phantom differences whenever main has moved past the branch.

**Why:** The squash rewrites the change as a new commit on main, so the branch's own commits are no longer ancestors and a plain diff reads as unmerged work.

**How to apply:** Verify that the PR merged your exact HEAD SHA rather than diffing against main.

### Gemini Code Assist (Consumer App) Was Sunset 2026-07-17

Historical Gemini reviews sitting in a repo's closed PRs do not mean a live bot. Do not build a wait around one, and do not post `/gemini review`.
