---
paths:
  - "**/.github/workflows/*.yml"
  - "**/.github/workflows/*.yaml"
---

# CI Runs on Pull Requests Only

A repo's check workflow (lint, tests, build) runs on `pull_request` and nothing else: it is the check before a merge into `main`, never a second run after the merge, and a newer push to the same pull request cancels the run before it. That is the default for every new repository, and a template's `ci.yml` carries it so every repo seeded from one starts there.

```yaml
on:
  pull_request:
    branches: [main]

concurrency:
  group: ci-${{ github.event.pull_request.number || github.ref }}
  cancel-in-progress: true
```

A direct push to `main` runs no CI, so its local gates are its only gate. The rule is about the check workflow alone: a deploy or publish workflow (on a tag, on push to `main`) and a scheduled one (a canary, a link check) keep the triggers their job needs. Homebase is the exception: it is public, its minutes are free, and its prose lands direct to `main`, so its lint keeps running on push as the alarm.
