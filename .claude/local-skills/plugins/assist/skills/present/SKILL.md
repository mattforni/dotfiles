---
name: present
description: Build a polished reveal.js presentation deck for an internal demo, talk, or share-out. Generates a single-file HTML deck with RYLLC brand styling, served locally via `npm run preso`. Use this skill whenever Forni says "build a presentation", "make a deck", "let's prep a demo", "create a preso", references an upcoming demo or talk that needs slides, or invokes `/assist:present`. Also trigger when Forni wants to walk through work to an audience and asks how to assemble it. Decks live under `preso/YYYY-MM-DD_<slug>/` in whichever repo the work was done.
argument-hint: "[optional context, e.g., 'six weeks of growth eng' or 'mtm pilot pitch']"
allowed-tools:
  - Bash
  - Read
  - Edit
  - Write
  - Glob
  - Grep
  - WebFetch
  - AskUserQuestion
  - TodoWrite
---

# Present Assist

Build presentations that feel designed, not auto-generated. Single-file reveal.js decks with the RYLLC visual language, served locally, lived in a dated folder per deck.

## Before Every Invocation

1. Read this skill's [learned-rules.md](learned-rules.md) for any prior corrections.
2. Confirm the host repo: decks live in the repo where the work itself lives (e.g., `growth/preso/...`, `mtm/preso/...`). Not in homebase or Eudaimonia.
3. Confirm the deck slug + date. Default folder: `preso/YYYY-MM-DD_<slug>/`. Slug should be 2-5 lowercase words separated by hyphens.

## Tooling Stack

- **reveal.js 5.x** via CDN (no bundler, no npm install for the deck itself)
- Single `index.html` per deck
- Lato (Google Fonts) is the default; introduce a serif display font only when the brief warrants it
- Slide viewport: `1280 x 720` (reveal.js defaults set in init script). Treat 720px tall as a hard ceiling
- Served locally via `npx http-server` wrapped in `bin/preso.sh`
- Hot reload via `-c-1` no-cache flag
- No Vercel by default. Deploy only when explicitly asked

## Brand

RYLLC palette, mirrored from the [splat](https://github.com/mattforni/splat) deck:

| Var | Hex | Use |
|---|---|---|
| `--ry-soft-black` | `#151515` | Background |
| `--ry-orange` | `#FC4A1A` | Primary accent |
| `--ry-gold` | `#F7B733` | Secondary accent |
| `--ry-soft-white` | `#F1F1F1` | Body text |
| `--ry-white` | `#FFFFFF` | Headings |

Signature accent: `linear-gradient(120deg, var(--ry-orange), var(--ry-gold))` clipped to text. Use it sparingly for one or two accent words per slide, or for the section divider headlines.

## Workflow

### Step 1: Pick the spine before writing slides

The deck is more than a project list. Find the **narrative spine** that organizes everything else, and check it back with Forni before drafting slides.

Useful spines for growth / engineering work:

- **AARRR pirate funnel**, locating the work at one stage (Acquisition, Activation, etc.)
- **Define → Attribute → Observe → Feed** (the loop Forni uses for any new system)
- **Before / After** with a single inflection moment in the middle
- **Build order** when the work has clear sequential layers

A spine is good if every slide in the deck nests cleanly under it without a "miscellaneous" bucket. If you need a "miscellaneous" act, the spine is wrong.

### Step 2: Find the payoff slide first

The Impact / Payoff slide is the single most important slide. Find the headline number(s) before drafting the rest of the deck. Build backward from there.

For business demos: a metric that moved, a goal that was hit, a leak that was sealed. Pull from the live source (HubSpot dashboard, PostHog insight, Linear cycle stats) and verify numbers against the screen at draft time so the deck does not lie at presentation time.

For technical demos: a benchmark, a regression eliminated, a complexity reduction (lines of code, queries, API hops).

### Step 3: Source the structure

Before writing slides, pull the structural source of truth:

- **Linear projects** (for growth / product work): `mcp__claude_ai_Linear__list_projects` filtered to the right team. Projects become acts or sub-acts.
- **Roadmap doc** (when one exists): the doc's section structure usually maps cleanly to slide structure.
- **Git history**: `git log --since=<start-date>` and `gh pr list --state merged --limit 50` for evidence per project.
- **Live dashboards**: HubSpot, PostHog, Slack canvases — for receipts.

### Step 4: Draft the deck against the splat template

Splat (`mattforni/splat`) is the canonical reference. Pull its style block verbatim:

```bash
gh api repos/mattforni/splat/contents/pres/index.html --jq '.content' | base64 -d > /tmp/splat-pres.html
```

Lift the `<style>` block (about lines 14-318 of splat's pres/index.html) and the reveal.js init script (about lines 980-994). The reusable class library covers most slide patterns. See [the splat CLAUDE.md](https://github.com/mattforni/splat/blob/main/CLAUDE.md) for the class catalog.

Slide patterns:

- **Title** — `<section class="v-center">` with a small eyebrow above and a thin (200 weight) headline with one accent-gradient word
- **Section dividers** — large gradient h2 (about 3.6em) with an eyebrow label like `Act I` or `What's next`
- **Stat cards** — three-column `.stat-grid` with framed cards on the Impact slide
- **Receipts** — actual screenshot of the dashboard / artifact, shown after the headline numbers
- **Two-column splits** — `.split` with two `.callout-box` children for before/after or paired ideas

Nest content slides inside an outer `<section>` per act so vertical navigation works naturally.

### Step 5: File layout

Always:

```
<host-repo>/
├── package.json          # one-time setup; references bin/preso.sh
├── bin/preso.sh          # one-time setup; serves any preso/<folder>/
└── preso/
    └── YYYY-MM-DD_<slug>/
        ├── index.html
        ├── README.md     # short orienter for this specific deck
        └── assets/       # images / screenshots
```

If `package.json` and `bin/preso.sh` already exist in the repo, skip step. If not, scaffold them on first deck. Pattern is in `growth/preso/2026-04-30_six-weeks-in-growth/` as the canonical example.

### Step 6: Run, iterate visually

```bash
npm run preso                                  # serves the most recent deck
npm run preso 2026-04-30_six-weeks-in-growth   # serves a specific deck
```

Refresh the browser to see edits (`-c-1` disables caching). Keyboard: arrow keys, `f` for fullscreen, `s` for speaker notes, `esc` for overview.

### Step 7: Fix overflow first

Slide overflow on 720px tall is the most common bug. Triage in this order:

1. Reduce vertical content density before reducing font sizes
2. Cut a paragraph rather than shrinking text below 0.75em
3. Move sub-content into a vertical sub-slide (`<section>` inside a parent `<section>`)
4. Default body sizes that fit reliably: h1 2.0-2.4em, h2 1.5-1.8em, body 0.85em line-height 1.4

### Step 8: Title last

Forni names the deck himself, often only after the content is mostly there. Do not pre-lock the title in the planning phase. Use a working title and ask once the deck is built.

## Codify Bridge

After the deck ships and the demo lands, prompt Forni: "Anything from this build worth codifying via `assist:codify-context`?" Common candidates:

- A new narrative spine that worked well (add to "Useful spines" above)
- A class or layout pattern worth promoting from this deck into the splat reference
- A category of demo (recurring quarterly, board update, weekly all-hands) that would benefit from a sub-skill or argument

## Output Shape

A `present` session produces:

1. A `preso/YYYY-MM-DD_<slug>/` folder with `index.html`, `README.md`, `assets/`
2. Top-level `package.json` and `bin/preso.sh` if not present
3. A live `localhost:3000` running the deck
4. A feature branch (suggested: `preso/<slug>`) with the work committed

Push and PR only when explicitly asked. Demo timing usually means commit-and-keep-local through the talk, then PR after.

## Anti-patterns

- **Do not** start writing slides before settling the spine. The spine is the deck.
- **Do not** put PR counts or commit counts on the Impact slide unless the audience is engineering-only and the count itself is the news. Business audiences need outcomes (calls booked, cycle time, revenue), not throughput proxies.
- **Do not** add decorative elements (corner accents, dividers, asymmetric borders) without an explicit ask. They read as "weird marks", not as design intent.
- **Do not** introduce new fonts mid-build. The Lato + thin-weight-as-hierarchy pairing carries most decks.
- **Do not** deploy to Vercel by default. Local-only is the norm.
- **Do not** name the deck before Forni does. Use a working title.

## Reference

- [splat](https://github.com/mattforni/splat) — canonical reveal.js + RYLLC reference deck
- [growth/preso/2026-04-30_six-weeks-in-growth/](https://github.com/zero-decarb/growth/tree/main/preso/2026-04-30_six-weeks-in-growth) — first invocation of this skill, full worked example
- [reveal.js docs](https://revealjs.com/) — slide framework

## Learned Rules

See [learned-rules.md](learned-rules.md).
