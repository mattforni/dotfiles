# Headless Claude on macOS

Build recurring `claude -p` automations that run on launchd, survive sleep, auth
from Keychain, and fail visibly. Based on the 2026-04-23 implementation of
L7 mise; see Eudy's `LEVELS.md` for the story. The first reference
implementation, `bin/run-mise`, was pruned 2026-07-23 along with the rest of
the mise automation (the plist went 2026-07-16). **The live reference is
`bin/run-outreacher`** with `launchagents/com.mattforni.outreacher.plist`
(added 2026-08-26): a Monday routine that runs the `outreacher` agent through
`claude -p --agent outreacher` to rebuild the Atelic outreach roster. Cloud
scheduling drawing credentials from the Secret Manager vault
(`~/Eudaimonia/Admin/Tools/secret-manager.md`) is the direction for routines
whose credentials can leave the machine; this one reads Gmail through gws,
whose tokens are local by design, so it stays on launchd.

**Running an agent, not a skill.** `claude -p "<prompt>" --agent <name>`
makes a user level agent definition (`~/.claude/agents/<name>.md`) the main
thread, model and all, so a routine can share one definition with the
interactive `Agent` tool instead of carrying a skill copy. The agent's own
prose has to enforce the single command rule below, because the allowlist
cannot.

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
fires a macOS notification on failure.

**Copy the PATH below verbatim; it is longer than it looks like it needs to
be.** `$HOME/bin` carries the `gws` and `hs` shims, and
`$HOME/.local/share/mise/shims` is how a non interactive shell reaches what
`mise activate` wires for an interactive one, which is where the real `hs`
lives as an npm global under mise managed node. The Outreacher shipped without
either and every Monday run died in preflight on `hs not on PATH` (2026-08-31),
loudly and correctly, but a routine whose preflight is thinner would have run
half a job instead. Keep the wrapper and its plist in step: launchd reads its
own `EnvironmentVariables` and never sources a shell.

Skeleton:

    #!/usr/bin/env bash
    set -uo pipefail
    export PATH="$HOME/bin:$HOME/.local/bin:$HOME/.local/share/mise/shims:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"

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

### Iterating locally

A launchd routine that can only be exercised by waiting for its next window is
a routine nobody changes. `bin/run-outreacher` carries the same three loop
shape the Cloud Run runners have (`runners/README.md`), scaled down to a
wrapper script:

| Loop | Command | Costs | Use it when |
|---|---|---|---|
| Render | `run-outreacher --dry-run --reuse` | nothing, no network | changing the subject, the summary block, the email body |
| Draft | `run-outreacher --dry-run` | one agent run | changing the prompt, the allowlist, the success predicate |
| Real | `run-outreacher` | one agent run, one send | what launchd does, and the last check before trusting it |

`--dry-run` renders the email to the scratch dir and opens it instead of
sending, `--reuse` replays the JSON the last real run saved to
`$SCRATCH/result.json`, `--week` drafts another week, and `--no-open` leaves
the file alone. The local loops also tee to the terminal rather than only the
log, since a run being watched should be visible.

Two pieces of the wrapper exist to make this work and are worth keeping in any
new routine: the result JSON is saved on every real run, successes and failures
alike, and every reporting path goes through one `deliver` function rather than
calling `email_report` directly. Failure reports matter most here, because a
failure email is the one nobody has ever looked at before it is trusted.

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
  `$HOME/.local/bin` ahead of `/opt/homebrew/bin` or skills resolve to
  "Unknown skill". Entries before it are fine as long as they hold no
  `claude`, which is why `$HOME/bin` can lead.
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
  are safe to retry. Reference impl: `bin/run-mise` in git history (PR #109,
  2026-06-09; pruned 2026-07-23).

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

- Subject defaults to `[<Routine>] YYYY-MM-DD` regardless of status. Status
  and any failure reason live in the body so the inbox stays calm and date
  sortable; filter to a Gmail label by routine prefix.
- **A routine whose unit is the week sets `EMAIL_REPORT_SUBJECT` instead**, to
  `YYYY-Www <Name>`. The Cloud Run retro has always mailed `2026-W36 Retro`
  and the Outreacher joined it on 2026-08-31 with `2026-W36 Outreach`. A
  weekly briefing is read on the morning it lands, so the week is the handle
  worth carrying and the send date is noise. Daily status routines keep the
  bracketed default.
- **The bracketed routine tag is load bearing** (2026-07-17): Gmail filters
  archive report mail by subject tag while interactive <claude@atelic.me> mail
  (review asks, anything needing action) stays in the inbox. That is precisely
  why the weekly briefings drop it: they are meant to be read, not filed. When
  adding a daily status routine, add its `[Tag]` to the archive filter's
  subject terms, and never give an interactive email a bracketed subject
  prefix. Full convention: `~/Eudaimonia/Admin/Tools/resend.md`.
- Body: status heading, optional reason note, `<pre>` block with the
  skill's `.result` text (HTML escaped), metadata table (duration, cost,
  turns, exit code, session id).
- On any failure (missing key, missing recipient, curl error, Resend HTTP
  non-2xx): sets `email_error` and returns non-zero. Wrapper falls back to
  osascript notification carrying the email error.

Tool entry: `Eudy/Admin/Tools/resend.md` for vendor context, alternatives
considered, and pricing. JSON payload assembled via `jq -n --arg ...` to
dodge bash escaping pitfalls; HTML escaping via `sed`.

Wrapper sourcing trick: `BASH_SOURCE != $0` short circuits the main block
in each wrapper, so `source ~/bin/run-<routine>` exposes the lib helpers
for ad hoc testing without firing the routine.

Adding a new headless routine: recover `bin/run-mise` from git history as
the starting template, swap `ROUTINE`, `LOG`, the slash command, the
`--allowedTools` set, and the success predicate. Email path is reused
unchanged.

## Reference

- `claude --help` for current flag list
- `launchd.plist(5)` and `security(1)` man pages
- L7 mise source: homebase git history (`bin/run-mise` pruned 2026-07-23;
  the mise plist retired 2026-07-16). The generic `install_launchagents`
  phase remains in `setup.sh` for future plists.
- Resend API: <https://resend.com/docs/api-reference/emails/send-email>
