# SDLC Land: Learned Rules

Session-specific gotchas and decisions captured from real land cycles. These override the generic guidance in SKILL.md when they conflict.

Read this file before each land. Add to it after.

## Format

Each rule states the rule, the reason, and how to apply it.

## Rules

### Reply on the inline comment when declining a bot re-raise. Don't merge silently through it

When Gemini (or CodeRabbit) re-raises an inline comment after it has already been addressed, post a brief reply on the comment before merging. A reply that says "Re-raise: already addressed in <sha>" closes the loop in the PR's audit trail. Silent declines leave the PR looking like the bot's concerns went unanswered; future reviewers (human or another bot) can't tell the difference between "ignored" and "considered and declined."

**Why:** Bots persist the original inline-comment IDs across review cycles, so the same item shows up again on the new SHA even though the code is fixed. Surfaced on ATE-367 app PR #36 (2026-05-25): two of three Gemini items on the second cycle were already-addressed re-raises. Replying to each kept the conversation honest.

**How to apply:** During step 4 of land, when triaging comments and identifying a re-raise (or any genuine decline where you disagree with the bot), post:

```bash
gh api -X POST repos/<owner>/<repo>/pulls/<PR>/comments/<comment_id>/replies \
  -f body="Re-raise: already addressed in <sha>."
```

Cost is one reply per declined comment. Apply for genuine declines too (where the bot is actually wrong), explaining *why* you are declining, not just that you are. Then check CI and merge once green; do not wait for the bot to figure out resolution itself.

### Detect review bots proactively and as a set, not from the current PR's reviews

Step 2 must learn which bots review the repo without waiting on the current PR, and must allow more than one. A just-opened PR has zero reviews, so reading only its reviews returns empty and the loop concludes "no bot configured," then merges on green CI, racing past the first pass. And a repo can run several bots at once.

**Why:** Surfaced on dev-tools PR #19 (2026-06-15). The repo has Gemini configured, but the PR was brand new with fast CI (one format check, green in under a minute). Detection read only PR #19's reviews (empty), so the loop merged on CLEAN and Gemini posted 10 seconds later. The merge was defensible (doc-only PR, see the doc-only rule below), but the agent wrongly reported "no bot configured" — a detection failure. Probing while fixing it revealed homebase runs BOTH CodeRabbit and Gemini, so single-bot detection was wrong in a second way.

**How to apply:** Union two signals into a BOT_LOGINS set (see Step 2). Signal A is a live HEAD probe of check-suite app slugs and commit-status contexts — instant, and the only no-wait signal that catches CodeRabbit (it posts a `coderabbitai` check suite and a pending `CodeRabbit` status within seconds). Signal B scans recent PRs for reviewer logins — the only way to catch review-only bots like Gemini, which leave no footprint on the commit until they post. The installed-apps API would be authoritative but returns 401/404 to a user token. Step 3 then waits for every bot in the set to clear HEAD. Residual cold-start gap: a repo whose first-ever PR is the one being landed has no history for Signal B, so a review-only bot stays invisible until it posts — accept the early merge there (rare, self-corrects next PR).

### Do not gate merge on the bot's first review when CI is green and merge_state is CLEAN

The land workflow's READY condition requires `LATEST_BOT_SHA == HEAD_SHA`, which means it polls until the bot reviews the current SHA. For low-risk PRs (doc-only, codify changes, small config edits), waiting on the bot's first review is pure overhead with no signal value. For code PRs, the bot's first cycle catches real bugs and is worth waiting on, but subsequent cycles often just re-raise (see prior rule) and don't justify another polling window.

**Why:** Surfaced twice in the same session (2026-05-25): on app PR #36 after iterate replies, and on doc-only PR #37. In both cases Forni asked "are we really still waiting?" while CI was already green and merge_state was CLEAN. The poll loop was waiting for Gemini to spin its review, not for any decision-relevant signal.

**How to apply:**

- **First cycle on a code PR:** wait for the bot review (real bug-catch value).
- **Subsequent cycles after iterate:** if CI is green and merge_state is CLEAN, merge. Do not wait for the bot to re-bless the new SHA.
- **Doc-only / config-only PRs:** merge as soon as CI is green and merge_state is CLEAN. Skip the bot poll entirely.

Operationally: kill the Monitor (TaskStop) and proceed to merge step. Don't wait the full timeout out of habit.

### Match the Review Bot by Its `[bot]`-Suffixed Login, Not the App Slug

A review's `.user.login` carries a `[bot]` suffix (`gemini-code-assist[bot]`, `coderabbitai[bot]`), but the check-suite **app slug** that Step 2's Signal A probe reads (`.check_suites[].app.slug`) is the bare `gemini-code-assist`. So a bot that lands in `BOT_LOGINS` via the slug probe never matches Step 3's `select(.user.login == "$bot")`: it stays stuck in `PENDING`, READY never fires, and the Monitor spins to timeout even though the review already landed on HEAD. Signal B (which reads `.user.login` from prior reviews) gets the suffix right; the slug path and any bare name hardcoded from a repo CLAUDE.md mention are the traps.

**Why:** Surfaced on public-web PR #383 (2026-06-15), running the then-installed single-`BOT_LOGIN` land flow hardcoded to `gemini-code-assist`. The poll matched nothing and the monitor ran on while Gemini's review sat on HEAD the whole time (Forni: "still waiting? seems wrong"). public-web's CLAUDE.md names the bot `gemini-code-assist` without the suffix, which seeds the mistake.

**How to apply:** Before comparing against `.user.login`, normalize every `BOT_LOGINS` entry to the `[bot]` form (append `[bot]` to a bare slug, or strip `[bot]` from both sides of the comparison). If a poll loop is silent past the bot's normal latency, confirm the exact string with `gh api repos/<owner>/<repo>/pulls/<PR>/reviews --jq '.[].user.login'` before assuming "no review yet."
