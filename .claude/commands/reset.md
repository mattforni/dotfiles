Reset local environment for new development work.

Steps:
1. Checkout main branch
2. Pull latest from origin
3. Delete the local branch we were just working on (if any feature branch exists)

Run these git commands:
```bash
git checkout main && git pull origin main
```

Then identify and delete any local feature branches that have been merged (branches marked as [gone] on remote):
```bash
git fetch --prune
git branch -vv | grep ': gone]' | awk '{print $1}' | xargs -r git branch -d
```

Confirm the reset is complete by showing current branch and status.
