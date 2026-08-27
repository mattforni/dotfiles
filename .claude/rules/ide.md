---
paths:
  - "ide/**"
---

# Antigravity IDE Settings and Extensions

Loaded when the IDE settings or the extension list is read.

## Development Environment

- `.vimrc` - Vim editor configuration
- `.screenrc` - GNU Screen configuration
- `ide/settings.json` - Antigravity user settings, deployed to `~/Library/Application Support/Antigravity IDE/User/settings.json`
- `ide/extensions.txt` - Curated extension list, read out of the repo by `setup.sh` and never deployed to `$HOME`

**Antigravity does not carry every extension the VS Code marketplace does.** It
resolves from its own registry, so an ID that exists upstream can still fail with
"Extension not found". `hridoy.rails-snippets` and `wilfison.haml-boostrap` were
dropped on 2026-08-11 for exactly this reason. Check availability before adding
an ID, and treat a not-found failure as an absent extension rather than a typo.
`setup.sh` also reports anything installed that the list does not name, so the
list and the editor stay reconcilable in both directions.
