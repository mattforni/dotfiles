---
name: assist:codify
description: Codify knowledge from the current session into the appropriate location using progressive disclosure. Use this skill whenever the user says "codify" followed by a topic, wants to capture something they just figured out, asks to document a pattern or convention, or says something like "we should write this down" or "future me needs to know this." Also trigger when the user discovers a gotcha, foot-gun, or non-obvious behavior worth preserving. Works for both project directories (three-layer CLAUDE.md/README.md pattern) and skill directories (Learned Rules in SKILL.md). Named after the "plan, delegate, assess, codify" Level 4 compounding loop.
argument-hint: "<topic> [in <directory>]"
allowed-tools:
  - Bash
  - Read
  - Edit
  - Write
  - Glob
  - Grep
  - AskUserQuestion
---

# Codify Assist

Codify knowledge from the current conversation into documentation that serves two audiences: humans (README.md) and Claude Code (CLAUDE.md). The goal is progressive disclosure where each layer adds depth without duplicating the others.

## Before Every Invocation

1. Read [learned-rules.md](../../learned-rules.md) for any prior corrections about documentation style or placement
2. Identify the **topic** from the user's input or the current conversation
3. Identify the **target directory** where the knowledge belongs. If the user specifies a directory, use it. If not, infer from context (the directory most closely related to the topic). Ask if ambiguous.

## Determining the Target Type

Before writing anything, determine whether the target is a **project directory** or a **skill directory**. The approach differs significantly.

**Skill directory** (any path under `.claude/` containing a `SKILL.md`): Knowledge goes into the SKILL.md file's `## Learned Rules` section. Do not create README.md files in skill directories. SKILL.md is the single source of truth for a skill. If a Learned Rules section does not exist, create one at the end of the file.

**Project directory** (everything else, e.g., Eudaimonia): Use the three-layer pattern described below.

## The Three Layers (Project Directories Only)

Knowledge is stored in three layers. Each layer has a distinct audience and level of detail. Never duplicate content across layers. Each layer references the next. This pattern applies to project directories only, not skill directories.

### Layer 1: Root CLAUDE.md (Discovery)

The root `CLAUDE.md` of the project. One line per topic, pointing to the deeper CLAUDE.md. This is what Claude Code reads at session start to know where knowledge lives.

**Format:** Add a line under a relevant section (or create one) like:
```
- **[Topic]**: See `path/to/CLAUDE.md` for conventions
```

### Layer 2: Directory CLAUDE.md (Conventions)

A concise file in the target directory. Written for Claude Code. Contains only the rules and patterns needed to work correctly in this area.

**What goes here:**
- Do this, not that patterns
- Key constraints or gotchas (one line each)
- A pointer to README.md for full explanation

**What does NOT go here:**
- Explanations of why
- Code examples longer than one line
- Background or history

**Format:**
```markdown
# [Directory/Topic Name]

See [README.md](README.md) for full documentation.

## Conventions

- [Rule 1]
- [Rule 2]
- [Do this, not that pattern]
```

### Layer 3: README.md (Full Documentation)

A thorough document in the target directory. Written for humans who encounter this topic for the first time.

**What goes here:**
- What the thing is and how it works
- Code examples showing correct and incorrect usage (when applicable)
- Gotchas, foot-guns, and lessons learned
- A directory/reference table if the folder contains multiple related files
- Context that helps someone understand *why* the conventions exist

**Structure varies by topic, but a good default:**
```markdown
# [Topic]

[1-2 paragraph explanation of what this is and why it matters]

## How It Works

[Core mechanics, with examples]

## Common Patterns

[Correct usage with code/examples]

## Pitfalls

[What goes wrong and why, with incorrect examples marked clearly]

## Reference

[Directory table, links, or related resources if applicable]
```

## Workflow

### Step 1: Gather context

Review the current conversation for relevant knowledge. Identify:
- What was learned (the core insight)
- Where it applies (which directory or domain)
- What went wrong or was confusing (the foot-guns)
- What the correct approach is

If the conversation does not contain enough context, ask the user to fill gaps. One question at a time.

### Step 2: Check existing documentation

**For skill directories:** Read the target SKILL.md. Look for an existing `## Learned Rules` section. If one exists, you will append to it. If not, you will create one at the end of the file.

**For project directories:** Read the target directory's README.md and CLAUDE.md if they exist. The goal is to update rather than overwrite. If files exist, integrate the new knowledge into the existing structure. Also check the root CLAUDE.md for any existing pointer to this directory.

### Step 3: Draft the changes

**For skill directories:** Draft the new learned rules as bullet points and present them to the user. Show only what you are adding, not the full file. The user wants to see the delta.

**For project directories:** Write a draft of the README.md content and **present it to the user for review**. Do not write it to a file yet. If a README.md already exists, present the proposed changes (additions or modifications) rather than the full file.

### Step 4: Write the files

After the user approves:

**For skill directories:**
1. **Add to or create the `## Learned Rules` section** in the target SKILL.md

**For project directories:**
1. **Write or update the README.md** in the target directory
2. **Write or update the CLAUDE.md** in the target directory (extract conventions from the README, keep it concise, point back to README)
3. **Update the root CLAUDE.md** with a discovery pointer if one does not already exist

### Step 5: Confirm

Tell the user what was created or updated, with file paths. Keep it brief.

## Adapting to Context

Not every topic involves code. The three layer structure works for any domain:

- **Codebase pattern**: README explains the architecture, CLAUDE.md lists the conventions, root CLAUDE.md points to it
- **Workflow or process**: README documents the full process with rationale, CLAUDE.md captures the key steps and rules, root CLAUDE.md points to it
- **Tool or technology**: README is a getting started guide, CLAUDE.md has the "use this, not that" patterns, root CLAUDE.md points to it
- **Personal knowledge**: README captures the full context and reasoning, CLAUDE.md has the actionable takeaways, root CLAUDE.md points to it

The principle is the same regardless of domain: essentials where they are always visible, depth one step away, discovery at the root.

## What Makes Good Documentation Here

- **README should stand alone.** Someone who has never seen the conversation should be able to read it and understand the topic.
- **CLAUDE.md should be skimmable in seconds.** If Claude Code has to read more than 20 lines to understand the conventions, it is too long.
- **Root pointer should be one line.** It exists only so the knowledge is discoverable.
- **Examples beat abstractions.** Show the right way and the wrong way side by side when possible.
- **Date the knowledge when it matters.** If a gotcha is version specific or likely to change, note when it was learned so future readers can assess freshness.
