# Learned Rules

## Branch naming

Sharpen sessions are branched as `sharpen-YYYY-MM-DD` in every repo touched by the session (currently Eudy and homebase). Same branch name across repos so a given session's work correlates at a glance.

**Why:** Forni wants a consistent way to find any sharpen session's work across both repos without hunting commit messages.

**How to apply:** At the start of the implementation step of a sharpen session, create the branch in each touched repo (`git -C <repo> checkout -b sharpen-YYYY-MM-DD`). If the branch already exists (rerun or continuation), check it out instead.

## CronCreate is not a Level 7 primitive

`CronCreate` (and by extension the `/loop` and `/schedule` skills that wrap it) only fires while a Claude REPL is live and idle. `durable: true` persists the job across Claude restarts but still requires a live session at fire time. Auto expires after 7 days either way.

**Why:** Discovered during the 2026-04-23 sharpen session. Attempted to schedule `/assist:mise` for weekday mornings. CronCreate reported the job as session-only even with `durable: true` passed explicitly, and the underlying mechanic requires an open REPL. Net effect: zero background autonomy unless Forni happens to be at Claude when the cron fires.

**How to apply:** When proposing a "schedule X to run in the background" sharpen move, do not default to CronCreate. For true OS-level scheduling on macOS, the right primitive is launchd (plist in `~/Library/LaunchAgents/`) invoking `claude -p "<slash command>"`. That is usually plan sized, not session sized. CronCreate is still useful for in-session reminders ("nudge me in 20 minutes") but not for daily morning routines.
