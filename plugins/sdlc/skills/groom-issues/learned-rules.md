# Groom Issues: Learned Rules

Session specific gotchas and calibration captured from real grooming runs. These override the generic guidance in SKILL.md and reference/ when they conflict.

Read this file before each groom. Add to it after.

## Format

Each rule states the rule, the reason, and how to apply it. Keep them tight; the value is in the specifics.

## Rules

### CLI is the default tool, not MCP. Auth per workspace before grooming

When a user has both Linear MCP and Linear CLI available, default to the CLI for grooming actions. The MCP gets used only for read-only inspection when the CLI is not auth'd to the target workspace. Reasons: MCP cannot hard-delete, MCP fuzzy-maps state names imprecisely (the "Canceled" gotcha below), and the user may have explicitly requested CLI.

**Why:** Atelic groom 2026-05-10. Forni said "Let's default to using the CLI instead of the MCP" mid-session after observing MCP's `state: "Canceled"` mapping to "Duplicate" status (Linear has both as canceled-type). The CLI-first default avoids that surprise.

**How to apply:** Before starting a groom, check `linear auth list` and confirm the target workspace is configured. If not, prompt the user to run `linear auth login` and pick the workspace. Once auth'd, prefer CLI commands (`linear issue update`, `linear issue delete --confirm`) over MCP `save_issue`.

### MCP `save_issue` with `state: "Canceled"` may map to "Duplicate" status

The Linear MCP fuzzy-matches state names. Passing `state: "Canceled"` can land the issue in the "Duplicate" status (also a canceled-type, but semantically different — implies superseded by another issue). If you want literal "Canceled" via MCP, pass the explicit state ID for Canceled (visible from `list_issue_statuses`), not the name string.

**Why:** Surfaced on the first Atelic groom run when ATE-349 came back with `status: "Duplicate"` after a `state: "Canceled"` update.

**How to apply:** When canceling via MCP, either (a) accept the Duplicate-vs-Canceled imprecision since both hide the issue from active views, (b) pass the explicit Canceled state UUID, or (c) use the CLI: `linear issue update ATE-NNN --state Canceled`.

### Default Scope to Assignee == Requesting User, Not the Whole Cycle

The skill's scope step should default to filtering cycle issues where `assignee.name == user` unless the user explicitly says "groom the whole cycle." Otherwise you partition other people's tickets, confuse the capacity math, and force the user to redirect mid-walk.

**Why:** GROW Cycle 5 groom 2026-06-01. Initial dump showed 68 cycle tickets; Forni owned 42. Capacity math and the first partition table used the wrong denominator. Forni redirected on a Rich owned admin task with "Is this my ticket? Maybe we need to look at my tickets, please?"

**How to apply:** At scope, query the cycle, then immediately filter to `assignee.name == user` for the working set. Surface the full cycle count plus the per assignee distribution so the user can opt into a broader scope if they want. Default working set is always "your tickets."

### Linear `priority: 0` Is "No Priority," Not Urgent. Always Render `priorityLabel`

Linear priority integers: 1=Urgent, 2=High, 3=Normal, 4=Low, **0=No priority** (untriaged). Rendering the integer as `P0` makes untriaged tickets read as the most urgent thing in the cycle.

**Why:** GROW Cycle 5 groom 2026-06-01. Initial table rendered GROW-292 and GROW-295 as "P0" because of `priority: 0`. Both were untriaged. Wrong framing landed in a recommendation slate before being caught and re-rendered.

**How to apply:** In every table, sort key, and rationale string, use `priorityLabel` (the string Linear computes from the integer), never the integer. When sorting, treat `priority == 0` as Low for scheduling order, not as the top of the list.

### Verify "Shipped but Todo" Against the Team's Main Repo Before Partitioning

For each cycle groom, grep the team's primary code repo for commits matching the ticket key pattern since cycle start. Any ticket key that appears in a merged commit but still sits in Todo is state drift: probably Done in reality, never moved in Linear.

**Why:** GROW Cycle 5 groom 2026-06-01. Three tickets (GROW-280, GROW-289, GROW-292) shipped in PRs #324/#325/#326 but stayed Todo. Without the repo check they would have been classified as overstuffed cycle work. Only caught because Forni said "I think it's wrapped" on GROW-292, prompting the spot check that surfaced the other two.

**How to apply:** During scope, run `git -C <main-repo> log origin/main --since="<cycle-start>" --grep="<TEAM>-" -i --oneline` (adjust `origin/main` to the team's default branch; run `git -C <main-repo> fetch origin` first so the ref is current). Cross reference each ticket key against Linear states. For shipped-but-Todo, surface as a batch: "verified shipped in PR #N — mark Done?" Querying `origin/main` rather than `HEAD` avoids false positives from unmerged commits on a local feature branch.

### Re-query the Cycle at the End of Partitioning to Catch Newly Added Tickets

Long groom sessions take an hour or more. New tickets land mid session. The final verification should re-pull the cycle and diff against the original working set so nothing slips through unclassified.

**Why:** GROW Cycle 5 groom 2026-06-01. GROW-296 (Aircall AICSR Spec) was created during the AICSR meeting Forni had cued up; landed in Cycle 5 between the initial JSON dump and the final partition. Only surfaced in the closing verification pass.

**How to apply:** After applying all approved changes, re-run the cycle query and diff `current_set - original_working_set`. Surface any newly-added tickets to the user as a final batch decision before declaring the groom complete.

### A team's deferral label is sacred. Do not include it in the stale sweep

The naive backlog stale-sweep heuristic (no priority + no recent activity + no assignee + no project) misfires on any team that uses a label like `👋 Later` to mean "intentionally deferred, save the intent." Items carrying that label are working as designed; bulk canceling them erases real intent.

**Why:** Surfaced on the first Atelic groom run (2026-05-10). Of 37 candidates that matched the naive stale heuristic, 32 carried `👋 Later`. Mass canceling would have lost 32 deliberately-parked aspirations.

**How to apply:** Detect the team's deferral convention before sweeping. Look at label distribution on Backlog issues; if a single non-priority label is on a large fraction of older items, treat it as the deferral signal and exclude it from the sweep. Stale candidates are then `(no priority + stale + no project + does not carry the deferral label)`. For Atelic, the label is `👋 Later`. For other teams, find the equivalent.

### Lifted from `zero:linear-groom`

The following rules came from real Growth team groom runs and are likely to apply to most cycle grooming work. Validate during cycle mode runs; promote into the rules above if they hold.

- **Pillar first matching trumps keyword matching.** A project's description lists its pillars. An issue that maps to a pillar belongs with that project in whichever cycle that project is in focus, regardless of surface level keyword matches to other cycles' bullets.
- **In Progress beats alignment.** When a ticket is In Progress or In Review, leave it in its current cycle even if the plan does not call for it. Disrupting flowing work is worse than temporary misalignment.
- **Default to next cycle and defer, not multi cycle projection.** When unsure whether work belongs in C5 vs C6, push to the next cycle and plan to re groom at its start.
- **Bulk delete is broken.** `linear issue delete --bulk <ids> --confirm` still prompts interactively in CLI v2.0.0. Loop single deletes. Bulk also pulls in child issues automatically.
- **`--state Backlog` clears the cycle field automatically.** Don't chain a separate cycle reset; the state change is sufficient.
- **Walk the gray zone individually with AskUserQuestion.** Forni's preferred UX: per ticket question with three to four labeled options (Keep / Move / Backlog / Cancel + recommended). Reserve batch tables for auto keep and structurally uniform clusters.
- **Course correction cascade.** When a directional decision lands mid groom (e.g., "kill X wholesale"), revisit earlier decisions in the same session that depended on the now stale assumption.
- **Bulk cross project moves trip the safety gate.** A loop of more than ~10 project reassignments via Bash gets denied as mass modification. Surface the explicit target list via AskUserQuestion before re attempting.
- **Effort matters in classification.** A title that sounds campaign shaped might be a 30 minute audit. Ask about effort when the cycle plan match is fuzzy. A low effort high value ticket can stay even if it does not perfectly match.
- **Capacity multiplier starts at 0.9.** First C3 run predicted 10 Keep but reality was 16; multiplier was too conservative at 0.6. Recalibrate per team.
- **Project deletion needs `--force`.** `linear project delete <id>` errors with "Interactive confirmation required." Issue delete uses `--confirm` instead. Different flag names for similar gates.

### The Reclaim Linear Sync Is Retired (2026-08-03); Grooming Feeds Hand Placement

Reclaim no longer schedules Linear work. The groom's scheduling output is honest due dates plus hand placed Craft calendar blocks (the plan-week placement step; conventions in `~/Eudaimonia/Admin/Tools/google-calendar.md` Work Holds).

**Why:** A full Monday (2026-08-03) went to fighting the sync's undocumented behavior: a fixed scale aware estimate mapping with nothing between 1h and 4h, increases only estimate sync, block sizes frozen at import, and a priority gate on incremental sync. Forni chose manual control. The post mortem lives in `~/Eudaimonia/Admin/Tools/reclaim.md`.

**How to apply:** Skip any Reclaim audit. During scope, check due dates against the real calendar; unscheduled work traces to an issue missing an honest due date or a calendar block. Estimates read as plain hours (ATE linear extended scale). If a Reclaim task for a Linear issue ever resurfaces, it is a zombie from before the retirement; flag it for deletion, and delete it only when the dispatch brief pre approves that action (the diff before apply gate still governs).

### Triage Means Four Fields, and the Cycle Means the Week

A groom is not done when the buckets are applied. It is done when every issue carries all four of a cognitive load label (🧠 Sharp / ⚖️ Medium / 🍃 Light), an hourly estimate, tagging that describes the work, and a due date matching where the work will actually be done, and when the cycle holds exactly the week's intended work with everything undated, unfittable, or unowned pushed to Backlog.

**Why:** Forni's own definition, given during the 2026-08-10 planning session: "everything has a cognitive estimate. It has an hourly estimate. We've got good tagging on it that makes sense and we feel good about when the due dates are." That same session reported a groomed board that still held an untriaged issue, a 7 point item with no priority, and a due date past the cycle end. He caught all three.

**How to apply:** Two drifts account for most of the damage, so check both on every run.

- **Deadline day pileup.** Due dates collect on the cycle's last day instead of the day the work will happen. On 2026-08-10 five issues carrying 14 hours all sat on one Friday against roughly 5 hours of capacity. Spread them across the days that will actually hold the work, and surface the arithmetic (estimate hours against available hours) when they do not fit.
- **Untriaged newcomers.** Issues created mid cycle arrive with no label, no estimate, and no date. The end of pass re query (see the rule above) is where they surface; treat every one as a Decision.

Before reporting a queue groomed, re pull it and read what is there. Do not describe the board from your own earlier actions.
