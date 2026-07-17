# Headless Claude on macOS

Build recurring `claude -p` automations that run on launchd, survive sleep, auth
from Keychain, and fail visibly. Based on the 2026-04-23 implementation of
L7 mise; see Eudy's `LEVELS.md` and homebase's `bin/run-mise` for the reference
implementation. (The scheduled mise plist was retired 2026-07-16; `run-mise`
remains for manual runs and as the template for new routines.)

## When to use this pattern

Recurring tasks on a predictable schedule that do not need human judgment each
run: morning syncs, weekly triage, nightly build checks.

## When NOT to use it

- **CronCreate / /loop / /schedule**: session only. Fires only while a Claude
  REPL is live and idle; auto expires after 7 days. Useful for in session
  reminders, not daily routines. See sharpen skill's `learned-rules.md`.
- **pmset schedule wake**: forces the laptop awake at a specific time. Burns
  battery and disrupts sleep. Usually overkill for morning prep.

## The three pieces

1. **LaunchAgent plist** at `~/Library/LaunchAgents/com.<user>.<label>.plist`
2. **Wrapper script** at `~/bin/run-<something>` (bash, handles auth and invocation)
3. **OAuth token in Keychain** (or gitignored file as fallback)

### LaunchAgent

`StartCalendarInterval` fires at the scheduled time. If the Mac is asleep at
fire time, launchd catches up on next wake (one catch up per missed window).
`RunAtLoad: false` so `launchctl bootstrap` does not fire the job immediately.

Plists do not expand `$HOME` or `~`. Template with placeholders and substitute
at install time:

    <string>{{HOME}}/bin/run-something</string>

Install flow (in your setup script):

- `sed "s|{{HOME}}|$HOME|g" template.plist > ~/Library/LaunchAgents/<label>.plist`
- `launchctl bootout gui/<uid>/<label>` if already loaded
- `launchctl bootstrap gui/<uid> <rendered-plist>`
- Skip the bootout+bootstrap cycle if the rendered content is unchanged AND
  the agent is already loaded, else every setup run kills an in flight job.

### Wrapper script

Sets PATH (launchd's env is empty), loads auth, invokes claude, parses JSON,
fires a macOS notification on failure. Skeleton:

    #!/usr/bin/env bash
    set -uo pipefail
    export PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"

    LOG="$HOME/.claude/debug/<name>.log"
    mkdir -p "$(dirname "$LOG")"

    notify_failure() {
      osascript -e "display notification \"$1\" with title \"<Name>\"" 2>/dev/null || true
    }

    {
      # Auth: Keychain first, file fallback.
      token=$(security find-generic-password -s "<service-name>" -w 2>/dev/null) || token=""
      [[ -n "$token" ]] && export CLAUDE_CODE_OAUTH_TOKEN="$token"

      result=$(claude -p "/<plugin>:<skill>" \
        --allowedTools "Bash(git:*)" "Read" "Skill" \
        --output-format json)
      rc=$?
      echo "$result"

      [[ $rc -ne 0 ]] && notify_failure "exit $rc" && exit "$rc"

      # Positive confirmation: require the skill's expected success string.
      if ! echo "$result" | jq -e '.subtype == "success" and .is_error == false and ((.result // "") | contains("<expected>"))' >/dev/null 2>&1; then
        notify_failure "skill did not complete"
        exit 1
      fi
    } >> "$LOG" 2>&1

### Auth via Keychain

One time setup (interactive): `claude setup-token` opens a browser for OAuth
and prints a long lived token. Store it:

    security add-generic-password -a "$USER" -s "<service-name>" -w "<token>" -T /usr/bin/security -U

Flags:

- `-T /usr/bin/security` restricts ACL to the `security` CLI. Prefer over
  `-A` (any app) per the 2026-04-23 Gemini review on Eudy PR #19.
- `-U` updates in place so the item is not briefly deleted.

Retrieve in wrapper via `security find-generic-password -s <name> -w`.

Keep a gitignored `~/.claude/.oauth-token` as a fallback for environments
without Keychain (CI, containers). Wrapper should try Keychain first.

## Permissions: --allowedTools over --dangerously-skip-permissions

Pre allow only the tools the skill actually needs. `claude --help` documents
the example `"Bash(git *) Edit"` so `Bash(pattern)` syntax is supported.

Known valid tool names: `Read`, `Edit`, `Write`, `Bash`, `Skill`. `SlashCommand`
is unverified (as of 2026-04-23) but harmless to include while uncertain.

Verify the allowlist covers everything by checking `permission_denials` in the
JSON output; an empty array means the list was sufficient.

Note: even with `--dangerously-skip-permissions`, writes to `.claude/`, `.git/`,
`.vscode/`, `.idea/`, `.husky/` still prompt. For a true no prompt run in those
paths, use `--allowedTools` with explicit patterns instead.

**Compound shell commands cannot be allowlisted.** A `Bash(git:*)` entry matches
only a single bare `git ...` invocation. A multi-statement command (a `for`
loop, piped commands, `cmd1 && cmd2`, anything with shell control flow) matches
no single-prefix entry and is denied every run, even when each inner command
would be allowed on its own. When a skill needs mechanical multi-step shell in a
headless run, extract it into a committed script and allowlist that one path
(e.g. `Bash(./bin/sync-marketplaces:*)`). Bonus: far fewer model turns spent
authoring loops, which shrinks the window for a transient API/socket drop. The
mise marketplace-sync step thrashed on denied loops for a week before this fix
(PR #109, 2026-06-09).

## Success detection

Exit code alone is not enough. `claude -p "/unknown:skill"` returns 0 with
"Unknown skill" as text output. Require positive confirmation via JSON:

    jq -e '.subtype == "success" and .is_error == false and ((.result // "") | contains("<expected>"))'

Where `<expected>` is the distinctive success string the skill emits.

## Gotchas

- **Two claude binaries**: `~/.local/bin/claude` (user install, has plugins)
  vs `/opt/homebrew/bin/claude` (brew, lacks plugin context). Put
  `$HOME/.local/bin` first in PATH or skills resolve to "Unknown skill".
- **Do not merge stderr into stdout** when capturing JSON. `claude -p ...
  --output-format json 2>&1` corrupts the JSON with any stderr byte, and `jq`
  silently fails via `// empty`. Redirect stderr to the surrounding log block.
- **Keychain must be unlocked**. Works on wake for the logged in user on a
  personal machine. Locked keychain (e.g., separate lockdown policy) breaks
  the flow.
- **`id -u` via subshell in bash `local`**: `local var="$(id -u)"` masks the
  return value (ShellCheck SC2155). Split declare and assign.
- **Transient API/socket drops on long runs**: `claude -p` can die mid-stream
  with `API Error: The socket connection was closed unexpectedly` and exit
  non-zero, especially on long sessions. Wrap the invocation in a `timeout` with
  a single retry on a transient signature (`socket connection was closed|API
  Error|overloaded|Connection error`); a clean skill-level abort (e.g. a merge
  conflict) should not match and should report immediately. Idempotent routines
  are safe to retry. Reference impl: `bin/run-mise` (PR #109, 2026-06-09).

## Email reporting via Resend

macOS notifications are best effort: silenced by Focus, get truncated, and
have no click through to a record. Treat them as a redundant fallback, not
the source of truth. The source of truth is an email per run.

Shared library: `bin/lib/email-report.sh`. Routine-agnostic. Wrappers source
it and set `ROUTINE` and `LOG` before calling `email_report`.

    ROUTINE="Mise"
    LOG="$HOME/.claude/debug/mise.log"
    SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    source "$SCRIPT_DIR/lib/email-report.sh"

Reads:

- API key from macOS Keychain (service `resend-api-key`, sending-only scope).
- Recipient from `~/.config/headless-report/recipient` (one line, gitignored,
  shared across all routines).
- Sender hardcoded to `Claude <claude@atelic.me>` (override via
  `EMAIL_REPORT_SENDER` env var if a routine needs a distinct identity).

Output:

- Subject is always `[<Routine>] YYYY-MM-DD` regardless of status. Status
  and any failure reason live in the body so the inbox stays calm and date
  sortable; filter to a Gmail label by routine prefix.
- **The bracketed routine tag is load bearing** (2026-07-17): Gmail filters
  archive report mail by subject tag while interactive claude@atelic.me mail
  (review asks, anything needing action) stays in the inbox. When adding a
  new routine, add its `[Tag]` to the archive filter's subject terms, and
  never give an interactive email a bracketed subject prefix. Full
  convention: `~/Eudaimonia/Admin/tools/resend.md`.
- Body: status heading, optional reason note, `<pre>` block with the
  skill's `.result` text (HTML escaped), metadata table (duration, cost,
  turns, exit code, session id).
- On any failure (missing key, missing recipient, curl error, Resend HTTP
  non-2xx): sets `email_error` and returns non-zero. Wrapper falls back to
  osascript notification carrying the email error.

Tool entry: `Eudy/Admin/tools/resend.md` for vendor context, alternatives
considered, and pricing. JSON payload assembled via `jq -n --arg ...` to
dodge bash escaping pitfalls; HTML escaping via `sed`.

Wrapper sourcing trick: `BASH_SOURCE != $0` short circuits the main block
in each wrapper, so `source ~/bin/run-<routine>` exposes the lib helpers
for ad hoc testing without firing the routine.

Adding a new headless routine: copy `bin/run-mise`, swap `ROUTINE`,
`LOG`, the slash command, the `--allowedTools` set, and the success
predicate. Email path is reused unchanged.

## Reference

- `claude --help` for current flag list
- `launchd.plist(5)` and `security(1)` man pages
- L7 mise source: `homebase/bin/run-mise`, `homebase/setup.sh`'s
  `install_launchagents` phase (no plists are tracked today; the mise
  plist was retired 2026-07-16)
- Resend API: https://resend.com/docs/api-reference/emails/send-email
