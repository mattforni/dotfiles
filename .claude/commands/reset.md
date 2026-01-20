Reset local environment for new development work.

Steps:
1. Checkout main branch
2. Pull latest from origin
3. Delete the local branch we were just working on (if any feature branch exists)

Run these git commands:
```bash
git checkout main && git pull origin main
```

Then prune remote tracking branches and identify merged local branches:
```bash
git fetch --prune
```

```bash
git branch -vv
```

For any branches showing `[gone]` (remote was deleted), delete them individually:
```bash
git branch -d <branch-name>
```

Note: Run branch cleanup as separate commands rather than a piped compound command to avoid permission issues.

Confirm the reset is complete by showing current branch and status.
