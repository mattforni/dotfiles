---
name: assist:wrap
description: Session wrap. Don't lose the thread, clean everything up, don't leave loose ends in your head. Scans every git repo touched this session for uncommitted or unpushed state, surfaces external commitments (pending replies, calendar holds, contract deadlines) from the recent conversation, prompts for codification of durable learnings, logs anything not handled into Todoist (today if pressing, next Monday otherwise), summarizes the session, and leaves the user ready to /exit cleanly. Use this skill whenever the user says "wrap", "wrap up", "wrap the session", "wrap this up", "wrapping up", "clean up before I exit", "signing off", "done for the day", or invokes /assist:wrap. Pairs with /assist:mise as the bookend. Mise opens the kitchen for service. Wrap closes it cleanly after.
allowed-tools:
  - Bash
  - Read
  - Glob
  - Grep
  - AskUserQuestion
  - Skill
  - mcp__claude_ai_Todoist__add-tasks
  - mcp__claude_ai_Todoist__find-projects
  - mcp__claude_ai_Todoist__find-tasks-by-date
  - mcp__claude_ai_Todoist__reschedule-tasks
---

# Wrap

End of session bookend. Don't lose the thread. Don't leave loose ends in your head.

The skill exists because the user was running the same end-of-session sweep manually: check git and PR state, scan recent work for unhandled commitments, decide what to codify, decide what to log to Todoist, exit. That is a routine. Routines should be automations.

## Before Every Invocation

1. Read this skill's local [learned-rules.md](learned-rules.md) for prior corrections.
2. Read the plugin-wide [../../learned-rules.md](../../learned-rules.md) for cross-skill corrections that also apply.

## Workflow

### Step 1: Build the Repo List

The repos to scan are the repos touched in this session, no more and no less. Do not maintain a fixed allowlist. Walk the conversation and any tool history for absolute paths used in Read, Edit, Write, or Bash calls. Resolve each path back to its containing git repo (`git -C <path> rev-parse --show-toplevel`). Deduplicate.

If the inference produces nothing (rare), fall back to the current working directory's repo only.

### Step 2: Git and PR State

For each repo in the list:

```bash
git -C "$REPO" status --porcelain
git -C "$REPO" rev-parse --abbrev-ref HEAD

# Unpushed commits, only when an upstream is configured. A new local
# branch has no @{u}; running the log against it would error.
if git -C "$REPO" rev-parse --abbrev-ref --symbolic-full-name @{u} >/dev/null 2>&1; then
  git -C "$REPO" log @{u}..HEAD --oneline
else
  echo "NO_UPSTREAM"
fi

# Open PRs, only when the repo has a GitHub remote. Derive the
# owner/name slug from gh itself rather than threading $OWNER through.
REPO_SLUG=$(gh -R "$REPO" repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null || true)
if [ -n "$REPO_SLUG" ]; then
  gh --repo "$REPO_SLUG" pr list --author @me --state open --json number,title,headRefName,reviewDecision
fi
```

Categorize per repo:

- **Clean.** Working tree clean, in sync with origin, no open PRs needing the user. Nothing to do.
- **Uncommitted changes.** Surface and ask: commit (via `/sdlc:checkpoint`), stash, or discard.
- **Unpushed commits.** Push, or leave intentionally with a note.
- **Open PR awaiting the user.** Blocks exit (see Step 9). Surface review comments and chain to `/sdlc:iterate`.
- **Open PR awaiting reviewer.** Blocks exit (see Step 9). Watch for review to land, then chain to `/sdlc:iterate` or `/sdlc:complete` as appropriate.
- **Merged PR with the branch still local.** Chain to `/sdlc:complete` via the Skill tool.

When the session already ran `/sdlc:complete`, this step is usually fast and returns clean for the main repo.

### Step 3: Surface External Commitments

Walk the recent session conversation for items that imply someone is waiting on the user, or the user is waiting on someone:

- Emails sent today (ball is in the counterparty's court — flag for tracking)
- Calendar holds placed but unconfirmed
- Tasks the user said they would do "today" or "this morning"
- Contract deadlines or external due dates touched in the session
- Drafts saved but not sent

Categorize each in three tiers:

- ⚠️ **Today.** Action required before end of day. The user is the blocker.
- 🟡 **Sliding.** Soft target, no external party blocked. The user's own commitment to themselves.
- ✅ **Awaiting counterparty.** Tracked, no action.

### Step 4: Dedupe Against Todoist

Before triaging anything, query Todoist for tasks that already cover the candidate loose ends. Surfacing items that are already scheduled is noise and forces the user to triage the same thing twice.

```text
mcp__claude_ai_Todoist__find-tasks-by-date(
  startDate: "today",
  daysCount: 4,          # covers today through next Monday on a weekday wrap
  overdueOption: "include-overdue",
  limit: 50,
)
```

Match each candidate against scheduled tasks by content keyword (lender name, attorney name, deadline phrase, task type). For each match:

- **On track (due today or in the future):** drop from the triage list entirely; the task is already covered
- **Overdue:** surface separately under a 🔴 **Overdue, already in Todoist** tier so the user can reschedule rather than treat them as new

Only the unmatched ⚠️ and 🟡 items proceed to Step 5 triage.

### Step 5: Triage Each Loose End

For each ⚠️ and 🟡 item, ask the user via AskUserQuestion with these options:

1. **Do now.** Handle in this session before exiting.
2. **Todoist today.** Log a task due today with duration 30m.
3. **Todoist Monday.** Log a task due next Monday for the Monday planning session, duration 30m.
4. **Drop.** Item is no longer relevant. Acknowledge and move on.

One question per item. Bulk decisions hide bad triage. Stick to ⚠️ and 🟡; ✅ items are tracking-only and don't need triage.

### Step 6: Codify Check

Walk the session for codifiable durables:

- New rules, preferences, or gotchas surfaced
- Patterns or conventions that became clear
- Workflow improvements worth saving

If candidates exist, ask the user whether to invoke `/assist:codify-context` via the Skill tool for each candidate. If nothing is codifiable, say so explicitly and skip. Most sessions skip. Forcing codify creates documentation bloat.

### Step 7: Todoist Logging

For each loose end the user triaged to "today" or "Monday", create a Todoist task:

- **Today:** `dueString: "today"`, `duration: "30m"`
- **Monday:** `dueString: "next Monday"`, `duration: "30m"`

For each 🔴 overdue item the user triaged to reschedule, use `mcp__claude_ai_Todoist__reschedule-tasks` rather than creating a new task. Preserves recurring patterns and existing context.

Task title conventions from global memory:

- Emoji prefix indicating task type (📧 email, 📞 call, 📝 form/doc, 🏠 home buying, 💼 vocation, etc.)
- Short title with a link to the source in Markdown format where available
- No parenthetical clarification
- Details go in a comment on the task, not in the description field

Use the project and section that best matches the loose-end's domain. Infer from context. Home buying tasks go under the home buying project; vocation tasks under 🛠️ Craft / 💼 Vocation; etc. Ask if the right project is genuinely ambiguous; otherwise infer and proceed.

### Step 8: Session Summary

One paragraph. Three beats:

1. What was the work? (one phrase)
2. What artifacts shipped? (PRs merged, files filed, decisions made, drafts sent)
3. What is queued for next time? (loose ends now in Todoist)

This is the breadcrumb for re-entry. The user's future self picks the thread back up from this paragraph.

### Step 9: Exit Readiness

The session is exit-ready only when every condition below holds:

- No uncommitted changes remain in any session-touched repo
- No unpushed commits remain, or any that do are intentional with a note
- **No PR the user authored this session is still open.** An open PR is not exit-ready state. Watch the PR through review (CodeRabbit, Gemini, human reviewers), chain to `/sdlc:iterate` when feedback lands, and to `/sdlc:complete` once merged.

When all conditions are met, end with one line: "Ready to /exit when you are."

When a PR is still open, end instead with the current state of the PR and the next action being taken on it (waiting for review, addressing feedback, merging, etc.). Do not declare exit readiness.

Do not invoke /exit automatically. The user controls the exit. The skill prepares the ground; the user walks off it.

## Why Each Step Matters

- **Session-touched repos, not a fixed allowlist.** The user works across many repos (Eudaimonia, homebase, skillset, zero repos, and ad-hoc clones). A fixed list either misses repos or scans noise. Inferring from session activity matches the actual blast radius.
- **Git scan first.** Highest-signal check. After `/sdlc:complete` this is usually fast and clean.
- **Three-tier categorization over flat list.** ⚠️/🟡/✅ separates "act now" from "track" from "ignore". A flat list of "follow-ups" is noise.
- **Dedupe against Todoist before triage.** The user already runs Todoist as the system of record for follow-ups. Surfacing tasks that are already scheduled there is noise and forces them to triage the same thing twice. The Step 4 query is the cheapest check available and removes the noisiest failure mode.
- **Triage one item at a time.** Bulk decisions hide bad triage. AskUserQuestion forces real choice per item.
- **Codify is opt-in, never mandatory.** Most sessions have no new durable rules. Prompt only when candidates exist; skip cleanly otherwise.
- **Todoist offload.** Anything not handled in-session goes to Todoist. Working memory should not carry loose ends across sessions. The Monday default channels non-urgent items into the existing Monday planning ritual.
- **Don't auto-exit.** Wrap prepares the exit; the user triggers it. Auto-exit would risk closing a session that still needs attention.
- **Open PRs block exit.** A PR sitting open after exit risks losing context for review-comment handling, drifts further from main, and breaks the rhythm of finishing what you start. Wrap is responsible for shepherding the PR through review and merge, not just opening it.

## Output Shape

```
Wrap complete ✓

Git / PRs:
  Eudaimonia (main): clean
  homebase (assist-wrap): 3 unpushed commits → pushed

External commitments:
  ⚠️ LBP waive form (sign today, due Monday)
  🟡 Jeff CPA follow-up (slid from 5/14)
  ✅ Bethany (Land Title) — awaiting her reply

Codify: nothing new this session

Logged to Todoist:
  📝 Sign LBP form (today, 30m)
  📞 Call Jeff re RYLLC 2024 (next Monday, 30m)

Summary: Locked the NEO loan at 6.375%, filed HOA Status Letter and Loan Estimate, shipped PRs #43 and #44. Two follow-ups in Todoist for Monday planning.

Ready to /exit when you are.
```

## Anti-patterns

- Do not scan systems beyond git/PRs and recent-session implications. Slack, every inbox folder, Todoist contents, calendar week ahead, none of those. Comprehensive scans create noise that obscures real loose ends.
- Do not log to Todoist without the user's explicit triage for that item. No automatic bulk-dump to Monday.
- Do not invoke /exit yourself. Wrap prepares; the user exits.
- Do not skip the summary even when there is "nothing to summarize." It is the re-entry breadcrumb.
- Do not force codify. If the session did not produce a durable rule, say so and move on.
- Do not maintain a fixed allowlist of repos. Repos to scan = repos touched in this session.
- Do not declare exit readiness while a PR the user authored this session is still open. Watch it through review and merge before saying "Ready to /exit when you are."

## Learned Rules

_(Empty. Populated as corrections accumulate over time.)_
