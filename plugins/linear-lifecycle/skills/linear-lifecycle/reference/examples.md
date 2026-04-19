# Command Examples

Detailed walkthroughs for each Linear CLI operation.

## Creating Issues

**User request:** "Create a Linear issue for fixing the avatar crop bug"

**Command:**

```bash
linear issue create -t "Fix avatar crop bug" \
  --team BET \
  -d "Avatar images are cropping incorrectly on mobile devices. Need to adjust aspect ratio handling."
```

**Key rules:**

- Use `--team TEAM_KEY` (get from user's Linear workspace, e.g. BET, ENG)
- Use `-t` for title, `-d` for description
- Keep description clear and concise

**Response to user:**

```markdown
Created issue BET-145: Fix avatar crop bug
https://linear.app/your-workspace/issue/BET-145
```

## Starting Work on an Issue

**User request:** "Start working on bet-123"

**Command:**

```bash
linear issue view BET-123
```

**Response to user:**

```markdown
Issue: BET-123 - Implement dark mode toggle
Status: Todo
Description: Add a toggle in settings to switch between light and dark themes.
Labels: feature, ui

Creating branch bet-123-implement-dark-mode-toggle...
```

Then create the branch and proceed with development.

## Updating Issue Status

**User request:** "Update bet-456 to in progress"

**Command:**

```bash
linear issue update BET-456 -s "In Progress"
```

**Response to user:**

```markdown
Updated BET-456 to In Progress
```

## Adding Comments

**User request:** "Add comment to bet-789 about the refactor being done"

**Command:**

```bash
linear issue comment add BET-789 "Comment text here"
```

**Response to user:**

```markdown
Added comment to BET-789
```

## Completing Work

**User request:** "Close bet-789, PR merged"

**Step 1: Add completion comment:**

```bash
linear issue comment add BET-789 "Comment text here"
```

**Step 2: Update status to done:**

```bash
linear issue update BET-789 -s "Done"
```

**Response to user:**

```markdown
Marked BET-789 as Done
Added completion comment
```
