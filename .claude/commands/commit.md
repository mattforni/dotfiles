---
allowed-tools:
  Bash(git add:*),
  Bash(git commit:*),
  Bash(git push:*),
  Bash(git stash:*),
  Bash(git branch:*),
  Bash(git diff:*),
  Bash(git rm:*),
  Bash(npm run lint),
  Bash(npm run test:*),
  Bash(gh pr create:*),
  Grep,
  Read,
  Edit,
  Bash(rm:*)
description: Full development workflow - dead code detection, lint, test, commit, push, and create PR
---

# /push Command

This command automates the complete development workflow: detects and removes dead code, runs quality checks, commits with informative messages, updates documentation, pushes to remote, and creates a PR.

## Workflow Steps

1. **Check git status** - Verify there are changes to commit
2. **Dead code detection** - Analyze diff for removed references and clean up unreferenced code
3. **Add all files** - Stage all changes for commit
4. **Run linter** - Execute `npm run lint` to check code quality
5. **Run tests** - Execute appropriate test commands to ensure quality
6. **Update documentation** - Make informative updates to CLAUDE.md and other project docs
7. **Generate commit message** - Analyze changes and create informative commit with proper attribution
8. **Push to remote** - Push the branch to origin with upstream tracking
9. **Create PR** - Open a pull request with comprehensive description

## Usage

Simply type `/push` to execute the full workflow. The command will:

- Analyze the git diff to detect removed references
- Automatically find and delete dead code (unreferenced components, functions, variables, types, etc.)
- Run appropriate quality checks on remaining code
- Generate appropriate commit messages with Claude attribution
- Update documentation if significant changes occurred
- Create a detailed PR with proper base branch selection

## Dead Code Detection

The command includes automatic dead code detection that:

1. **Analyzes the git diff** - Examines what references (imports, function calls, etc.) have been removed
2. **Identifies orphaned code** - Finds functions, components, types, or variables no longer referenced anywhere
3. **Auto-deletes dead code** - Removes unreferenced code to keep the codebase clean
4. **Reports cleanup actions** - Shows what was removed and why

**Examples of dead code detected:**

- Unused React components after refactoring
- Helper functions no longer called after changes
- TypeScript types/interfaces no longer used
- Unused imports that remain after code removal
- Test files for deleted components
- Styles for removed elements

**Safe deletion strategy:**

- Only deletes code that has ZERO references in the codebase
- Preserves exported members that might be used externally
- Checks both implementation and test files
- Confirms deletions before committing

## Documentation Updates

When significant patterns, decisions, or architectural changes are made:

- Update `CLAUDE.md` with new guidelines
- Add to relevant spec files if needed
- Document new patterns or conventions
- Preserve project-specific instructions and workflows

## Error Handling

If any step fails (linting, tests, or other checks), the process stops and reports the issue. No commits or pushes occur until all quality gates pass.

## Base Branch Selection

The command will intelligently select the appropriate base branch:

- Use `main` for most repositories
- Use `rebuild` if that's the primary development branch
- Adapt based on project-specific branching strategy
