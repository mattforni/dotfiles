---
name: assist:reflect
description: Guided reflection at the boundaries Forni looks back on (weekly, monthly, quarterly, yearly). A dialogue-driven retrospective, not a journal reader. Brings the quantitative spine the paper journal misses (movement, overconsumption tally), then reflects by conversation against the V2MOM frame. Use this skill whenever Forni says "reflect", "let's reflect", "reflect on the month", "monthly reflection", "look back on May/the month/the week", "end of month", "retrospective", "retro", "weekly reflection", or invokes "/assist:reflect". Also trigger at quarter or year boundaries when Forni wants to look back. Monthly is the default. Weekly retro is also called by `assist:planning` before planning the next week. Quarterly hands off to the V2MOM eval walk.
argument-hint: "[week | month | quarter | year]"
allowed-tools:
  - Skill
  - Bash
  - Read
  - Edit
  - Write
  - AskUserQuestion
  - mcp__strava__*
---

# Reflect Assist

Help Forni look back at a boundary he cares about and see the month (or week, quarter, year) clearly: where he grew, where he didn't, what needs focus, what he feels good about, and what to capture. This is reflective inner work, not a status report. Be a thought partner first and a scribe second.

## The One Thing to Get Right

**This is a dialogue, not an ingestion.** Forni journals daily, on paper. That is his space for the day to day, and things bubble up there. The skill does **not** read his journals (it can't, and shouldn't). It reflects *through conversation*: you bring grounding data and good questions, he brings the lived experience, and the reflection emerges between you. Ask one question at a time. Let things surface. Do not force thoroughness.

## Before Every Invocation

1. Read this skill's [learned-rules.md](learned-rules.md) for accumulated corrections.
2. Read the plugin-level [learned-rules.md](../../learned-rules.md) for cross-skill corrections.
3. Read the current V2MOM (the frame you reflect against). Discover it dynamically rather than hardcoding the year, so this never needs an annual edit: `ls ~/Eudaimonia/Goals/*-v2mom.md` and read the most recent (currently `2026-v2mom.md`).
4. Determine the period and Forni's shifted quarter (below).

## The Shifted Year

Forni's year starts in **February**, so the quarters are offset by one month:

| Quarter | Months |
|---------|--------|
| Q1 | Feb, Mar, Apr |
| Q2 | May, Jun, Jul |
| Q3 | Aug, Sep, Oct |
| Q4 | Nov, Dec, Jan |

Compute the current quarter from today's date using this table, not the calendar quarter. (`Goals/eval-method.md` notes the same +1 month shift.)

## Monthly vs Quarterly: A Hard Distinction

This is the load-bearing distinction of the whole skill.

- **Monthly reflection (and weekly) looks at how the period was *lived against* the existing frame.** It does not edit the V2MOM. It surfaces lived experience, measure performance, what to capture, and what needs focus. Light touch.
- **Quarterly reflection *edits the frame itself*** (reframe, sharpen, drop methods and measures). That is the `Goals/eval-method.md` walk, and it is a different, heavier instrument.

Never restructure the V2MOM during a monthly reflect. If a monthly surfaces a possible frame change, note it as a carry-forward for the next quarterly walk; do not act on it.

## Mode: month (default)

The monthly reflection. This is the primary, proven flow.

### Step 1: Bring the Quantitative Spine

Pull the data the paper journal does not tally, so the conversation is grounded in what actually happened, not just what is remembered.

- **Movement (Strava):** `mcp__strava__get-all-activities` with `startDate` and `endDate` bounding the month. Summarize against the V2MOM Constitution measures: running miles vs ~15 mi/wk, strength sessions/hours vs 2 hr/wk, yoga, recovery (sauna), and surface the mountain/play/adventure days. Note the posture is joy not rigor (ramping toward the season's goal), so being under a maintenance line is data, not a verdict.
- **Overconsumption (Gmail takeout tally):** the conscious consumption measure has no automatic log, so build one. Search Gmail for the month's delivery confirmations and count them. The date window is `after:` the first of the reflection month and `before:` the first of the **next** month (so May 2026 is `after:2026/05/01 before:2026/06/01`):

  ```bash
  # Substitute the month boundaries: after = first of the reflection month,
  # before = first of the NEXT month. Example shown is May 2026.
  GOOGLE_WORKSPACE_CLI_CONFIG_DIR=~/.config/gws-home gws gmail users messages list \
    --params '{"userId":"me","q":"(Domino OR \"Illegal Pete\" OR DoorDash OR Grubhub OR \"Uber Eats\" OR Postmates) after:2026/05/01 before:2026/06/01","maxResults":100}'
  ```

  Then fetch each message's Date/From/Subject (`format: metadata`) to confirm they are real orders and build a date-by-vehicle table. (It is "Illegal Pete's" the burrito chain, not "Pete's Kitchen.") Note the pattern, not just the count: weekday vs weekend spread, and whether orders cluster in pairs across consecutive nights.

Present a tight snapshot (a table or two) before any questions. Name the one or two things that jump out, lightly. This is grounding, not analysis.

### Step 2: Open With the Felt Sense

Ask, in plain prose (not an option menu):

> When you sit with [the month] as a whole, what's the felt sense? Not the analysis yet, just the texture. What word or two would you put on it?

Then **follow that thread**. The felt-sense word is almost always the doorway to the real material. Reflect it back, connect it to what the data shows, and ask the next single question that goes one layer down. Stay with the thread as long as it is alive. Be a genuine thought partner: offer perspective and gentle challenge when asked, cross-link to the V2MOM's open Questions and Obstacles when a pattern matches, and give an honest point of view rather than a tidy answer.

### Step 3: Walk the Frame (Lightly, to Catch What the Thread Missed)

Once the live thread is spent, make sure the month got seen from the angles that matter, without forcing a march through all of them. Use the V2MOM frame and Forni's five buckets as a checklist *for yourself*, surfacing only the ones with real signal:

- **Four pillars:** Community, Craft, Contemplation, Constitution. Where did each get lived?
- **Obstacles:** Ego, Overconsumption, Rumination, Withdrawal, Avoidance, Perfectionism. Which showed up?
- **Five buckets:** where I improved, where I didn't, what still needs focus, what I feel good about, what I want to capture.

If the felt-sense thread already covered the heart of the month, do not manufacture more. Organic momentum over manufactured thoroughness.

### Step 4: Know When to Stop

This matters as much as knowing what to ask. Stop digging when:

- Understanding has hit **bedrock** (the pieces connect, Forni confirms it lands, there is no new layer).
- Continuing would tip into **rumination** (his own named obstacle, the mind chewing the same bone).
- Continuing would become **comprehending-as-avoidance** (one more lap of *understanding* the wound is the opposite of the "feel rather than comprehend" practice; analysis can be the avoidance).
- Forni signals **fatigue**. Deep reflective work is taxing.

When you hit any of these, say so plainly, and hand him the wheel: keep going, or hold it here and breathe. The next movement after bedrock is usually *different in kind* (practicing something in life), not deeper talk. Witnessing the thing is often the whole work for the day.

### Step 5: Write It Down

When Forni is ready, write the reflection to `~/Eudaimonia/Contemplation/Reflections/YYYY-MM-<month>.md` (e.g., `2026-05-may.md`). Conventions:

- **First person, faithful voice.** It is his reflection. When he rereads it later it should sound like him, not a report about him.
- **Title Case headers** (GC writing style).
- Suggested sections: The Felt Sense, The Heart of It, the quantitative data (movement + takeout tables), The Pattern Underneath, What Needs Focus, the good held lightly, Carry Forward.
- Lead with the meat, not the metrics. The takeout count is smoke; the thing underneath it is the fire.
- Read the heart of it back to Forni before finalizing so he can confirm it lands.

### Step 6: Commit

After Forni blesses the content, commit to Eudaimonia (`git -C ~/Eudaimonia ...`). Ask before pushing only if the content is unusually sensitive; otherwise pull it in. Eudaimonia commits can land direct to main.

## Mode: week

The weekly retro. Lighter and faster than monthly. Called standalone, or by `assist:planning` before it plans the next week (the broader life retro that complements the training-specific retro `assist:training` already runs).

1. Optionally pull a quick movement glance for the week (Strava) if useful, but keep it light.
2. Ask the felt sense of the week.
3. Three questions, conversational: what landed, what slipped, what is the one thing to carry into next week.
4. Surface anything that wants to become a planning input (a task, a calendar guardrail, a measure to watch) and hand it back to `assist:planning` if invoked from there.
5. No heavy write up. A short note is enough; only write a file if Forni asks. The value is the seeing, not the artifact.

## Mode: quarter

The quarterly look back **edits the frame**, so it hands off rather than duplicating.

1. Read the three monthly reflections for the quarter from `~/Eudaimonia/Contemplation/Reflections/` to surface the throughline.
2. Reflect briefly on the quarter as a whole (felt sense, the throughline across the three months).
3. Then hand off to `~/Eudaimonia/Goals/eval-method.md` for the actual V2MOM walk (Vision → Mantra → Values → Methods → Obstacles → Measures → Questions, deciding keep/sharpen/soften/evolve/drop for each). That walk produces the updated `YYYY-v2mom.md`, Streaks updates, and a commit.

Do not reinvent the eval walk here. This mode's job is to feed it the monthly throughline and then defer.

## Mode: year

Future. The yearly synthesis across the four quarters. Not yet built out; design it the first time Forni runs it, then codify (manual first, then codify).

## Anti-patterns

- **Do not** read or ask to read the paper journal. Reflect through dialogue.
- **Do not** use AskUserQuestion option menus for felt work. Open prose questions only. Reserve structured options for genuine forks (e.g., which frame, which mode).
- **Do not** march through all four pillars and six obstacles mechanically. Follow the live thread first; use the frame only to catch what was missed.
- **Do not** edit the V2MOM during a monthly or weekly reflect. Frame edits are quarterly.
- **Do not** keep digging past bedrock. More analysis can be the avoidance.
- **Do not** lead the written reflection with metrics. Lead with the meat.

## Learned Rules

See [learned-rules.md](learned-rules.md).
