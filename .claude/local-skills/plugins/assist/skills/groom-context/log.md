# Grooming Log

A dated entry per groom-context pass: scope covered, what was culled, moved, merged, and migrated, and anything deferred. Co-located with the skill so history and tool never drift. Not auto-loaded; the skill appends here at Step 8.

Entry format:

```text
## YYYY-MM-DD

**Scope:** [full pass | layers covered | starting topic]
**Culled:** [what was removed]
**Relocated:** [what moved, and to where]
**Merged:** [duplicates collapsed to one home]
**Enforced:** [process gates migrated into a flow skill or hook]
**Deferred:** [what was left for next pass and why]
```

---

## 2026-07-04

**Scope:** Full pass, all layers plus the auto-memory store and Anthropic's published best practices as external ground truth (fetched live: memory docs, context engineering post, skills docs, Claude Code best practices). Run in the wake of two life changes that invalidated a broad swath of context: the Zero Homes W2 ended 2026-06-29 and the relationship with Jasmine ended.

**Reframed:** The "codify, don't memorize" policy in GC was reversed at Forni's direction. GC's Persistence section rewritten to Anthropic's division of labor (human rules in repo files, Claude learnings in auto memory); Context Architecture section updated (memory as a layer, under-200-line CLAUDE.md target, trim-before-adding); codify-context and groom-context skills updated to match.

**Culled (Zero):** Zero Work Inbox section, Daily Operations Standup rule, and Zero slotting rationale from the assist plugin learned rules; office day scaffolding from schedule.md (interim truthful skeleton, full rebuild deferred to a planning session); `Vocation/Zero/CLAUDE.md` collapsed to a records pointer (Storyblok playbook, Linear routing, leadership Slack IDs deleted; the public-web repo no longer exists locally); the dangling `Zero/.account` marker deleted; setup.sh no longer defaults fresh machines to the zero gws profile or loops over it; gws.md, README, hubspot.md, claude-code.md, resend.md updated to single-account reality; Zero Reclaim scheduling link dropped from GC and Eudy root.

**Culled (memory):** 12 memory files deleted (7 stale: home purchase, training pilot, Zero 401k and benefits, standup, Heads Down, the wrong Gemini claim; 5 duplicated in GC or Eudy root). 16 live memories kept in place under the new policy. MEMORY.md index rebuilt with a Life Transitions section.

**Culled (dead references):** `/assist:meals` and deleted pantry.md/staples.md refs in Nutrition CLAUDE.md; `personal/skillset/` phantom repo in the Eudy map; Naosu in all five encodings; Gmail MCP instructions in bd-email and job-apply (now gws) plus their dead `~/Craft/vocation/` paths; orphaned bd-email gmail-integration.md deleted; notion.md access section rewritten to the native connector truth.

**Relocated:** GC's Git Worktrees and Git and PR Gotchas sections → new `Admin/tools/github.md` (GC keeps a pointer); Strava OAuth mechanics from 14ers CLAUDE.md → `strava.md`; homebase review-bot footprints from Eudy root → homebase CLAUDE.md; measurements table from Eudy root → `Constitution/profile.md`.

**Merged:** Star semantics collapsed to one governing home (plugin learned rules; emails SKILL.md and triage-rules.md now point); weekly schedule to one home (schedule.md; Eudy root points, resolving four contradictions: High Noon day, Wednesday strength, contrast therapy, 21 vs 17 measures); gws profile mechanics to homebase CLAUDE.md + gws.md (GC points); scheduling link stated once.

**Enforced:** Review-before-merge prose demoted to pointers in GC (merge-gate hook + sdlc:land own it), completing the GROW-316 migration.

**Deferred:** Eudy root Relationship and Community paragraphs (personal wording, Forni approves separately); profile.md and Adventure Jasmine traveler profile handling; job-apply slimming (414 lines vs the 500 line ceiling it approaches with reference-file extraction); deeper Eudy root Communication Style extraction toward the 200 line target; `~/.claude-zero/` profile dir teardown (migration code left intact); budget Dating category and Jasmine label cleanup.

---

## 2026-06-09

**Scope:** Full pass, all five layers, via parallel per-layer readers. Inaugural run.

**Enforced:** Added a PreToolUse(Bash) merge-gate hook (`.claude/hooks/merge-gate.sh`) that fires a review/CI checklist on `gh pr merge`, non-blocking, nudging toward /sdlc:land. Closes the GROW-316 gap: the review-before-merge gate existed in `sdlc:land` and in `public-web/CLAUDE.md` prose but nothing surfaced it at merge time when a merge happened outside the flow.

**Relocated (GC → tool docs):** Slimmed GC from ~365 to ~223 lines by moving tool specifics to `Admin/tools/`: gws/Gmail command tables + Doc-from-markdown recipe → `gws.md`; Todoist conventions → `todoist.md`; new `notion.md` (MCP config), `google-calendar.md` (colorIds, transition/travel, flanking), `pdf-crop.md` (density-filter recipe). GC left with one-line pointers. This is the salience win against the original "rules lost in a too-large file" problem.

**Culled:** Stale Japan 2025/2026 planning block in `Craft/Adventure/CLAUDE.md` (trip completed; records remain in `2025 Japan/`).

**Security:** Removed a session-specific leaked-key TODO from `resend.md`, kept the general lesson. Flagged the actual key rotation to Forni (needs dashboard).

**Deferred / reason-declined:** Home-Purchase closing timeline (`Constitution/3033 Blake 118/Purchase/CLAUDE.md`) left intact — durable transaction history, not a misleading rule, only loads in-directory. Fitness lift-time conditional left intact — self-documenting, needs a calendar verify. The "never hard-code username" dup across Eudy-root and homebase-root CLAUDE.md left intact — homebase clones standalone, so each copy is defensible. The gws Profiles section in GC overlaps homebase CLAUDE.md "Account Profiles" + `gws.md` Access; left for a future pass.

**Skill tweak surfaced:** groom-context should ignore `.worktrees/` and `.claude/worktrees/` subtrees (67 of 85 zero CLAUDE.md files are ephemeral worktree copies, not real architecture).
