# Claude Code OAuth Storage

Reference for how the `claude` binary stores credentials and how to isolate identities across accounts. Load when touching the `~/bin/claude` wrapper, `bin/claude-profiles-init.sh`, the Claude Code setup phase in `setup.sh`, or any future tooling that wants to read or supply Claude Code auth.

## Where Claude Code Stores OAuth Credentials

Current Claude Code binaries (verified as of May 2026 on the build shipping with `@anthropic-ai/claude-code` installed under `~/.local/bin/`) store OAuth credentials in macOS Keychain under a **per-CLAUDE_CONFIG_DIR service name**:

```
Claude Code-credentials-<hash>
```

The `<hash>` is derived from the `CLAUDE_CONFIG_DIR` path. Different config dirs get different hashed entries. There is also an unhashed `Claude Code-credentials` entry that newer Claude Code versions populate as a default; treat it as version-dependent and do not depend on it.

**There is no longer a single `claude-code-oauth` Keychain entry.** Older binaries and `~/.claude/references/headless-claude.md` mention that service name; on current builds it is not used by interactive logins. The retired `bin/run-mise` headless flow (pruned 2026-07-23, in git history) read a long lived token from that service; that path was independent of the interactive flow.

## Implications for Per-Account Isolation

Setting `CLAUDE_CONFIG_DIR` is sufficient to isolate accounts. Claude Code's native Keychain lookup uses the hashed service name derived from that config dir. No env-var token injection is needed.

The `~/bin/claude` wrapper accordingly does only one thing for auth: it sets `CLAUDE_CONFIG_DIR` based on the `.account` marker and exec's the real binary. An earlier draft (PRs #93 and #94) injected `CLAUDE_CODE_OAUTH_TOKEN` from a per-profile Keychain entry (`claude-code-oauth-<profile>`); PR #95 ripped that out as dead code after discovering the native isolation works.

## Bootstrap Idiom

To seed credentials for a new profile dir (e.g., `~/.claude-ryllc/`):

1. `cd` into a directory whose `.account` marker (or ambient profile) resolves to that profile.
2. Run `claude`. Since the hashed Keychain entry doesn't exist yet, Claude Code triggers a browser OAuth flow.
3. Sign in as the Anthropic account that should own this profile.
4. Claude Code writes the credential to `Claude Code-credentials-<hash>` for the active `CLAUDE_CONFIG_DIR`. Exit the session — the bootstrap is done.

No `security add-generic-password` step is needed.

## Debugging Cheat Sheet

| Question | Command |
|---|---|
| Which Claude credentials are in Keychain? | `security dump-keychain 2>/dev/null \| awk '/^keychain:/{kc=$0} /"svce"<blob>/{print}' \| grep -i 'claude\|anthropic' \| sort -u` |
| Which credential file is on disk (fallback path)? | `ls -la "$CLAUDE_CONFIG_DIR/.oauth-token" 2>&1` |
| What is the wrapper resolving to right now? | `claude` runs the wrapper at `~/bin/claude`; check `which -a claude` to confirm wrapper ordering, then read `~/bin/claude` to trace logic. |

## Related Files

- `~/Eudaimonia/Craft/Development/personal/homebase/bin/claude` — the wrapper
- `~/Eudaimonia/Craft/Development/personal/homebase/bin/claude-profiles-init.sh` — profile dir bootstrap (no auth)
- `~/Eudaimonia/Craft/Development/personal/homebase/setup.sh` — Claude Code phase that calls the bootstrap
- `bin/run-mise` (homebase git history; pruned 2026-07-23) — headless launchd-managed Claude (separate auth path via the `claude-code-oauth` service)

## When This Note Goes Stale

If Anthropic changes Claude Code's credential storage scheme again (e.g., moves to a different Keychain service name, or to a file under `~/.claude/`), update this note. Quickest signal: a fresh `claude` login on a fresh profile dir creates a Keychain entry not matching `Claude Code-credentials-<hash>`.
