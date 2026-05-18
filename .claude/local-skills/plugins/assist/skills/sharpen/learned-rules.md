# Learned Rules

## Branch naming

Sharpen sessions are branched as `sharpen-YYYY-MM-DD` in every repo touched by the session (currently Eudy and homebase). Same branch name across repos so a given session's work correlates at a glance.

**Why:** Forni wants a consistent way to find any sharpen session's work across both repos without hunting commit messages.

**How to apply:** At the start of the implementation step of a sharpen session, create the branch in each touched repo (`git -C <repo> checkout -b sharpen-YYYY-MM-DD`). If the branch already exists (rerun or continuation), check it out instead.

## CronCreate is not a Level 7 primitive

`CronCreate` (and by extension the `/loop` and `/schedule` skills that wrap it) only fires while a Claude REPL is live and idle. `durable: true` persists the job across Claude restarts but still requires a live session at fire time. Auto expires after 7 days either way.

**Why:** Discovered during the 2026-04-23 sharpen session. Attempted to schedule `/assist:mise` for weekday mornings. CronCreate reported the job as session-only even with `durable: true` passed explicitly, and the underlying mechanic requires an open REPL. Net effect: zero background autonomy unless Forni happens to be at Claude when the cron fires.

**How to apply:** When proposing a "schedule X to run in the background" sharpen move, do not default to CronCreate. For true OS-level scheduling on macOS, the right primitive is launchd (plist in `~/Library/LaunchAgents/`) invoking `claude -p "<slash command>"`. That is usually plan sized, not session sized. CronCreate is still useful for in-session reminders ("nudge me in 20 minutes") but not for daily morning routines.

## Audit existing feedback channels before scaling background agents

Before proposing a new headless routine, audit the feedback channels on existing ones. If notifications are the only path for success/failure, that is a gap and the next move should harden it, not add another agent.

**Why:** 2026-05-07 sharpen session. Proposed extending the headless pattern from one routine (mise) to a second (Monday `/assist:planning`). Forni redirected: "Before we move on to automation another routine, we first need to get better at the feedback and backpressure mechanisms for mise. Right now, it fails silently sometimes (because my notifications are silenced) and even when it succeeds, it tries to tell me some things, but they get cut off in the notification and when I click through, I get nothing else." macOS notifications are best effort and load-bear too much when used as the source of truth.

**How to apply:**
- For each live headless routine, ask: "If this fails silently, how would Forni find out?" If the answer is "macOS notification" alone, that is insufficient.
- The current robust pattern is per-run email via Resend with API key in Keychain, recipient in `~/.config/headless-report/recipient`, osascript demoted to a redundant fallback. See `homebase/.claude/references/headless-claude.md` "Email reporting via Resend" section.
- Apply this scrutiny in proportion to schedule frequency. A weekly routine that fails silently for a week is much worse than a daily one that fails silently once.
- Adding a second routine without robust feedback compounds the problem because each new agent multiplies the surface area of silent failure.
