# Learned Rules

## Branch Naming

Sharpen sessions are branched as `YYYY-MM-DD-sharpen-saws` in every repo touched by the session (currently Eudy and homebase). Date first so branches sort chronologically; same branch name across repos so a given session's work correlates at a glance. (Reversed from the earlier `sharpen-YYYY-MM-DD` form on 2026-07-23 at Forni's direction.)

**Why:** Forni wants a consistent way to find any sharpen session's work across both repos without hunting commit messages, with the date leading so listings sort by session.

**How to apply:** At the start of the implementation step of a sharpen session, cut a worktree on the branch in each touched repo (`git -C <repo> worktree add <path> -b YYYY-MM-DD-sharpen-saws`), per the work-in-worktrees rule. If the branch already exists (rerun or continuation), enter its existing worktree instead.

## CronCreate Is Not a Level 7 Primitive

`CronCreate` (and by extension the `/loop` and `/schedule` skills that wrap it) only fires while a Claude REPL is live and idle. `durable: true` persists the job across Claude restarts but still requires a live session at fire time. Auto expires after 7 days either way.

**Why:** Discovered during the 2026-04-23 sharpen session. Attempted to schedule `/assist:mise` for weekday mornings. CronCreate reported the job as session-only even with `durable: true` passed explicitly, and the underlying mechanic requires an open REPL. Net effect: zero background autonomy unless Forni happens to be at Claude when the cron fires.

**How to apply:** When proposing a "schedule X to run in the background" sharpen move, do not default to CronCreate. For true OS-level scheduling on macOS, the right primitive is launchd (plist in `~/Library/LaunchAgents/`) invoking `claude -p "<slash command>"`. That is usually plan sized, not session sized. CronCreate is still useful for in-session reminders ("nudge me in 20 minutes") but not for daily morning routines.

## Audit Existing Feedback Channels Before Scaling Background Agents

Before proposing a new headless routine, audit the feedback channels on existing ones. If notifications are the only path for success/failure, that is a gap and the next move should harden it, not add another agent.

**Why:** 2026-05-07 sharpen session. Proposed extending the headless pattern from one routine (mise) to a second (Monday `/assist:plan-week`). Forni redirected: "Before we move on to automation another routine, we first need to get better at the feedback and backpressure mechanisms for mise. Right now, it fails silently sometimes (because my notifications are silenced) and even when it succeeds, it tries to tell me some things, but they get cut off in the notification and when I click through, I get nothing else." macOS notifications are best effort and load-bear too much when used as the source of truth.

**How to apply:**

- For each live headless routine, ask: "If this fails silently, how would Forni find out?" If the answer is "macOS notification" alone, that is insufficient.
- The current robust pattern is per-run email via Resend with API key in Keychain, recipient in `~/.config/headless-report/recipient`, osascript demoted to a redundant fallback. See `homebase/.claude/references/headless-claude.md` "Email reporting via Resend" section.
- Apply this scrutiny in proportion to schedule frequency. A weekly routine that fails silently for a week is much worse than a daily one that fails silently once.
- Adding a second routine without robust feedback compounds the problem because each new agent multiplies the surface area of silent failure.

## Structural Moves Get Plan Mode Before Any File Is Written

When the chosen sharpen move creates or reshapes a durable surface (an agent, a skill, a hook, a workflow), enter plan mode and walk the design with Forni before authoring anything. Ground the design in the authoring conventions (`~/.claude/references/skills.md`) and, for anything agent shaped, a fresh read of Anthropic's guidance; settle the ownership and orchestration forks with him one at a time, then build.

**Why:** 2026-08-13. The sharpener agent's first version was authored minutes after the pick with no plan: the skill ended up orchestrating the agent ("Step 1: dispatch the sharpener") when Forni wanted the agent to run the method, and the scan was delegated to three scouts when one context held it fine. Forni: "This feels like we didn't really think about this very hard and didn't really come up with a plan." The whole build was redone through plan mode the same session.

**How to apply:** "Implement the chosen move" (Phase 5) is not license to skip planning; session sized refers to total effort, including the plan. A structural move that cannot afford a planning pass is not session sized, so split it instead.

## Routines Are Not a Vault Grade L7 Primitive

Anthropic's cloud Routines run in environments with no secrets store, and the docs explicitly warn against placing credentials there (env vars are plaintext). A Routine can only carry credential free work, so any background move that draws from the vault cannot ship as one.

**Why:** 2026-08-13 afternoon session. The Sunday training retro spike disqualified Routines inside the research pass: the retro needs Strava reads and a Resend send, both vault credentials. Forni rejected shipping a credential poor partial as "punting the problem" and redirected to headless cloud runs with full vault access. Runtime picked: GCP Cloud Run Jobs fired by Cloud Scheduler with secrets injected natively from Secret Manager; GitHub Actions cron verified as the supported alternate, with subscription token auth official for both.

**How to apply:** When a board row proposes cloud scheduled background work, ask first what credentials it draws. Credential free, a Routine is the smallest rep. Anything touching the vault routes through Cloud Run Jobs plus Cloud Scheduler with native Secret Manager injection (pattern home: ATE-471, The Sunday Retro Runner). And a spike that surfaces a disqualifier is a pass, not a failure: name the disqualifier, pick the runtime that meets the real want, and do not ship the degraded version just to log a live artifact.
