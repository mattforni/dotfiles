---
allowed-tools:
  Bash(git add:*),
  Bash(git commit:*),
  Bash(git push:*),
  Bash(git stash:*),
  Bash(git branch:*),
  Bash(npm run lint),
  Bash(npm run test:*),
  Bash(gh pr create:*)
description: Full development workflow - lint, test, commit, push, and create PR
---

# /push Command

This command automates the complete development workflow: runs quality checks, commits with informative messages, updates documentation, pushes to remote, and creates a PR.

## Workflow Steps

1. **Check git status** - Verify there are changes to commit
2. **Add all files** - Stage all changes for commit  
3. **Run linter** - Execute `npm run lint` to check code quality
4. **Run tests** - Execute appropriate test commands to ensure quality
5. **Update documentation** - Make informative updates to CLAUDE.md and other project docs
6. **Generate commit message** - Analyze changes and create informative commit with proper attribution
7. **Push to remote** - Push the branch to origin with upstream tracking
8. **Create PR** - Open a pull request with comprehensive description

## Usage

Simply type `/push` to execute the full workflow. The command will:
- Automatically determine what changed and run appropriate checks
- Generate appropriate commit messages with Claude attribution
- Update documentation if significant changes occurred  
- Create a detailed PR with proper base branch selection

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