# Codify Context Learned Rules

Corrections and calibration for how `assist:codify-context` should reason about where knowledge belongs and how it gets presented. Overrides SKILL.md. Read on every invocation.

- **Tool and CLI operational reference goes in the tool's own doc (placed per the placement rule), not GC, not a project CLAUDE.md.** The pull is to drop a tool gotcha into GC's section on that tool because that is where the related behavioral line lives. Resist: the trigger is nameable (the tool is in use), so the rule fails admission to GC and GC keeps at most its pointer. Codified 2026-05-21 after the gws attachment truncation gotcha almost landed in GC; restated on the trigger test 2026-09-03.

- **GC has one source of truth, homebase `.claude/CLAUDE.md`.** `~/.claude/CLAUDE.md` is a symlink to it, so an edit through either path hits the same file and the same homebase git history. The profile directories that once also linked to it retired 2026-08-12 (ATE-463).

- **Present deltas in the stream, as the final text of the turn.** Text preceding a tool call can render as a collapsed "Thought for Xs" marker in some views, and the AskUserQuestion dialog truncates content. Print the file by file deltas as the turn's last message, then let the user approve in plain chat. Never ask for approval in a message whose draft content lives only in mid turn text. Codified 2026-07-20 after three consecutive invisible draft rounds.

## A Promotion Deletes the Memory

When a codification lands in a rule file (a learned-rules.md, a tool doc, a CLAUDE.md, the output style), the auto memory that held the same learning is deleted in the same change, file and index line, across every project's memory store.

**Why:** 2026-10-14 sharpen. The loop ran memory to rule and never struck: seven Eudy memories written since 09-30 duplicated a rule written the same day, thirteen in all once checked, and the Atelic store had grown to 199 files with an 86 line index loading into every session there. Forni: "I very much like the codify step deleting the memory promoted."

**How to apply:** Step 5 greps `~/.claude/projects/*/memory/MEMORY.md` for the topic before writing and removes the match; Step 6 names what was struck. The sharpen session's Held question reads next week whether new memories still duplicate rules; the target is zero.
