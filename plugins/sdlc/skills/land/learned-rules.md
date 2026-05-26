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
