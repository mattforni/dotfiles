# Learned Rules

## macOS Screenshot filenames contain narrow no-break spaces

`~/Screenshots/Screenshot YYYY-MM-DD at H.MM.SS PM.png` looks like it has regular spaces, but the byte between the seconds and `AM`/`PM` is U+202F (NARROW NO-BREAK SPACE), not U+0020.

**Why:** A literal `cp "Screenshot 2026-04-30 at 2.02.02 PM.png"` will fail with "No such file or directory" even though the file appears in `ls`. Burned ~2 minutes during the 2026-04-30 demo build trying to copy a dashboard screenshot.

**How to apply:** Reference these files via glob, not literal path. `cp ~/Screenshots/*"2.02.02"*"PM.png" <dest>` works because the glob matches the actual byte sequence.

## Forni cuts hard during planning — trust the cuts

In the 2026-04-30 deck plan, the initial cut had 8 Linear projects. Forni cut it to 4 in one round, dropping projects with no shipped artifacts (Estimate Experience, Minnesota Launch) and pre-tenure work that closed during his tenure (Website Performance, 26Q1 Content Foundations). This made the deck stronger.

**Why:** A deck does not need to be comprehensive. It needs to be true. Anything you have to apologize for ("we haven't done much there yet") weakens the rest.

**How to apply:** When proposing the project list / section count, present the maximal set and the recommended cuts in the same breath. Default to fewer sections, not more. If a section has only one slide of substance, fold it into a neighbor or drop it.

## "Where we're looking" slides want the live link, not a description

For dashboard / artifact slides, Forni prefers the title to BE the link to the live thing, with the screenshot underneath. No descriptive caption, no Slack channel callouts, no PR references.

**Why:** Demoing engineers can click through to verify. The screenshot is a snapshot; the link is the truth. Adding context paragraphs around it dilutes the evidence.

**How to apply:** Pattern is `<h2><a href="<live-url>" style="border-bottom: 2px solid var(--ry-orange);">Dashboard Name</a></h2>` followed by the screenshot. Nothing else.

## No decorative corner accents

Tried adding a thin orange-fade bar in the top-left of every content slide via `::before`. Forni called them "weird red dashes" and asked them removed.

**Why:** Decorative additions without a functional purpose read as design noise, not as intentional brand language. The gradient on accent words and the section-divider treatment are already carrying enough flavor.

**How to apply:** Resist adding decorative ornaments without an explicit ask. The splat reference deck has no corner marks; mirror that restraint.

## Demo pacing

For an internal engineering brown-bag, plan ~20 slides for ~20 minutes. About one slide per minute, with section dividers eating less time than content slides.

**Why:** 2026-04-30 demo landed cleanly at this pace. Tighter (12 slides / 10 min) felt rushed when previewed; looser (35 slides / 30 min) felt indulgent.

**How to apply:** Default to 18-22 slides for ~20 min slots. Use vertical sub-slides for "and here's the receipts" moments rather than adding top-level slides.

## Title naming

Forni names the deck. Working titles get refined or replaced once content is built. The 2026-04-30 deck went through "Six Weeks in Growth", "Filling the Top of the Funnel", and landed at "Start at the Beginning."

**Why:** The right title surfaces from sitting with the built artifact, not from planning. Pre-locking it forces a name the deck has to grow into.

**How to apply:** Use a clearly-marked working title in the plan. When the deck is mostly built, ask Forni to name it. Update the title slide and closing slide together.
