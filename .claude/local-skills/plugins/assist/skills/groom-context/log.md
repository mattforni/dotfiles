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

## 2026-06-09

**Scope:** Full pass, all five layers, via parallel per-layer readers. Inaugural run.

**Enforced:** Added a PreToolUse(Bash) merge-gate hook (`.claude/hooks/merge-gate.sh`) that fires a review/CI checklist on `gh pr merge`, non-blocking, nudging toward /sdlc:land. Closes the GROW-316 gap: the review-before-merge gate existed in `sdlc:land` and in `public-web/CLAUDE.md` prose but nothing surfaced it at merge time when a merge happened outside the flow.

**Relocated (GC → tool docs):** Slimmed GC from ~365 to ~223 lines by moving tool specifics to `Admin/tools/`: gws/Gmail command tables + Doc-from-markdown recipe → `gws.md`; Todoist conventions → `todoist.md`; new `notion.md` (MCP config), `google-calendar.md` (colorIds, transition/travel, flanking), `pdf-crop.md` (density-filter recipe). GC left with one-line pointers. This is the salience win against the original "rules lost in a too-large file" problem.

**Culled:** Stale Japan 2025/2026 planning block in `Craft/Adventure/CLAUDE.md` (trip completed; records remain in `2025 Japan/`).

**Security:** Removed a session-specific leaked-key TODO from `resend.md`, kept the general lesson. Flagged the actual key rotation to Forni (needs dashboard).

**Deferred / reason-declined:** Home-Purchase closing timeline (`Constitution/3033 Blake 118/Purchase/CLAUDE.md`) left intact — durable transaction history, not a misleading rule, only loads in-directory. Fitness lift-time conditional left intact — self-documenting, needs a calendar verify. The "never hard-code username" dup across Eudy-root and homebase-root CLAUDE.md left intact — homebase clones standalone, so each copy is defensible. The gws Profiles section in GC overlaps homebase CLAUDE.md "Account Profiles" + `gws.md` Access; left for a future pass.

**Skill tweak surfaced:** groom-context should ignore `.worktrees/` and `.claude/worktrees/` subtrees (67 of 85 zero CLAUDE.md files are ephemeral worktree copies, not real architecture).
