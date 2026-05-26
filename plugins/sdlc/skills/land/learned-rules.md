# SDLC Land: Learned Rules

Session-specific gotchas and decisions captured from real land cycles. These override the generic guidance in SKILL.md when they conflict.

Read this file before each land. Add to it after.

## Format

Each rule states the rule, the reason, and how to apply it.

## Rules

### Reply on the inline comment when declining a bot re-raise. Don't merge silently through it.

When Gemini (or CodeRabbit) re-raises an inline comment after it has already been addressed, post a brief reply on the comment before merging. A reply that says "Re-raise: already addressed in <sha>" closes the loop in the PR's audit trail. Silent declines leave the PR looking like the bot's concerns went unanswered; future reviewers (human or another bot) can't tell the difference between "ignored" and "considered and declined."

**Why:** Bots persist the original inline-comment IDs across review cycles, so the same item shows up again on the new SHA even though the code is fixed. Surfaced on ATE-367 app PR #36 (2026-05-25): two of three Gemini items on the second cycle were already-addressed re-raises. Replying to each kept the conversation honest.

**How to apply:** During step 4 of land, when triaging comments and identifying a re-raise (or any genuine decline where you disagree with the bot), post:

```
gh api -X POST repos/<owner>/<repo>/pulls/<PR>/comments/<comment_id>/replies \
  -f body="Re-raise: already addressed in <sha>."
```

Cost is one reply per declined comment. Apply for genuine declines too (where the bot is actually wrong), explaining *why* you are declining, not just that you are. Then check CI and merge once green; do not wait for the bot to figure out resolution itself.

### Do not gate merge on the bot's first review when CI is green and merge_state is CLEAN.

The land workflow's READY condition requires `LATEST_BOT_SHA == HEAD_SHA`, which means it polls until the bot reviews the current SHA. For low-risk PRs (doc-only, codify changes, small config edits), waiting on the bot's first review is pure overhead with no signal value. For code PRs, the bot's first cycle catches real bugs and is worth waiting on, but subsequent cycles often just re-raise (see prior rule) and don't justify another polling window.

**Why:** Surfaced twice in the same session (2026-05-25): on app PR #36 after iterate replies, and on doc-only PR #37. In both cases Forni asked "are we really still waiting?" while CI was already green and merge_state was CLEAN. The poll loop was waiting for Gemini to spin its review, not for any decision-relevant signal.

**How to apply:**

- **First cycle on a code PR:** wait for the bot review (real bug-catch value).
- **Subsequent cycles after iterate:** if CI is green and merge_state is CLEAN, merge. Do not wait for the bot to re-bless the new SHA.
- **Doc-only / config-only PRs:** merge as soon as CI is green and merge_state is CLEAN. Skip the bot poll entirely.

Operationally: kill the Monitor (TaskStop) and proceed to merge step. Don't wait the full timeout out of habit.
