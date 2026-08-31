#!/usr/bin/env bash
# The Outreach Runner. Fires Monday 06:00 Denver from launchd, so the ATE-480
# Weekly Outreach roster is rebuilt and drafted before the Tuesday desk block.
#
# Shape: one headless Claude Code call running the `outreacher` agent, which
# does its own reads through the local CLIs, then one Resend send reporting
# what it did. Prep only. The agent never emails anyone, never moves a Lead
# Status, and never posts to a client surface; every send waits for Forni's
# explicit yes inside the Tuesday block.
#
# This runner is local only, and that is a design position rather than a gap.
# It reads HubSpot through `hs`, both mailboxes and the One Pager through
# `gws`, and it writes the roster through `linear`, all authenticated on this
# machine; and its customer path walk requires a real browser, because a
# Cloudflare challenge, a per visit phone number and a lazy loaded form all lie
# to a fetch. runners/outreach/README.md carries what promoting it to Cloud Run
# would actually take. Until then `bin/runner/run-scheduled outreach` is
# production and launchd is the scheduler.
#
# Secrets arrive as environment variables, injected by bin/runner/run-scheduled
# from this machine's vaults (and by Cloud Run from Secret Manager, if this
# runner is ever promoted):
#   CLAUDE_CODE_OAUTH_TOKEN   Keychain claude-code-oauth
#   RESEND_API_KEY            Keychain resend-api-key
# Plain configuration:
#   REPORT_RECIPIENT          where the report goes; locally this resolves to
#                             ~/.config/headless-report/recipient-outreach,
#                             which is the Atelic mailbox rather than the
#                             personal one, because this is Atelic work
#   REPORT_SENDER             defaults to Claude <claude@atelic.me>
#   ATELIC                    the practice repo, whose .account marker is what
#                             points hs and gws at the right identity
#   WEEK                      optional YYYY-Www override; default is this week
#   DRY_RUN                   1 renders the report and skips the send
#   SKIP_PULLS                1 replays the saved agent result instead of
#                             running the agent again
set -uo pipefail

SELF_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# The shared library sits beside this script inside an image and one level up
# in the repo, so both are tried rather than either being assumed.
for candidate in "$SELF_DIR/lib/runner.sh" "$SELF_DIR/../lib/runner.sh"; do
    if [[ -r "$candidate" ]]; then
        # shellcheck source=../lib/runner.sh
        . "$candidate"
        RUNNER_LIB="$candidate"
        break
    fi
done
if [[ -z "${RUNNER_LIB:-}" ]]; then
    echo "FATAL: cannot find runners/lib/runner.sh from $SELF_DIR" >&2
    exit 1
fi

DRY_RUN="${DRY_RUN:-0}"
SKIP_PULLS="${SKIP_PULLS:-0}"

WORK="${WORK:-$HOME/work}"
mkdir -p "$WORK"
LOG="$WORK/run.log"
exec > >(tee -a "$LOG") 2>&1

WEEK="${WEEK:-$(current_week)}"
MONDAY="$(week_monday "$WEEK")"
SUNDAY="$(shift_days "$MONDAY" 6)"
ATELIC="${ATELIC:-$HOME/Eudaimonia/Craft/Vocation/Atelic}"

# The banner shape is shared with the retro, and not only for the log's sake:
# run-local parses the week out of it so a draft can be re-rendered and mailed
# later without being told which week it belongs to a second time.
echo "=== $(date -Iseconds) outreach start: $WEEK ($MONDAY to $SUNDAY) ==="

# The retro runner mails "2026-W36 Retro"; this is its sibling and reads the
# same way. Both are weekly, so the week is the handle worth carrying and the
# day the send went out is noise. The bracketed "[Routine] YYYY-MM-DD" shape
# stays for daily status routines, where a Gmail filter archives on the tag.
SUBJECT="$WEEK Outreach"
SUCCESS_LINE="Outreach roster prepped for $WEEK"

RESULT_JSON="$WORK/result.json"
# The exit status rides in its own file because the failure worth replaying
# most often is a timeout, and a timeout leaves the result empty. An empty file
# can carry no status, and its existence cannot be trusted as the marker that a
# run happened either, so this one is the marker.
RESULT_RC="$WORK/result.rc"
REPORT_HTML="$WORK/email.html"

status="failure"
fail_reason=""
result=""
rc=0

finish() {
    local summary meta full body
    summary="$(build_summary_block "$result" "$rc" "$SUCCESS_LINE")"
    meta="$(build_meta_block "$result" "$rc")"
    full="$(jq -r '.result // ""' <<<"$result" 2>/dev/null)"
    [[ -z "$full" ]] && full="$result"

    if [[ "$status" != "success" && -n "$fail_reason" ]]; then
        # A reason this script worked out itself beats one inferred from the
        # agent's JSON, so it goes on top rather than replacing the block.
        summary="<div style=\"background:#ffebee;border-left:4px solid #c62828;padding:10px 14px;border-radius:4px;margin:0 0 12px 0;\"><strong style=\"color:#b71c1c;\">$(printf '%s' "$fail_reason" | html_escape)</strong></div>$summary"
        echo "FAILED: $fail_reason"
    fi

    body="$(build_report_html "Outreach" "$status" "$summary" "$full" "$meta")"
    printf '%s' "$body" > "$REPORT_HTML"

    if [[ "$DRY_RUN" == "1" ]]; then
        # A dry run reports on stdout, where the person reading it already is.
        echo "dry run: subject \"$SUBJECT\""
        echo "dry run: rendered $REPORT_HTML"
        sleep 1
        [[ "$status" == "success" ]] || exit 1
        return
    fi

    # A failed delivery is a failed run: nobody is watching, so the log is the
    # only place left that could show it.
    send_email "$SUBJECT" "$body" || {
        echo "email: the report could not be delivered"
        sleep 1
        exit 1
    }
    sleep 1
    [[ "$status" == "success" ]] || exit 1
}
trap finish EXIT

# What a run needs depends on what it will do. A dry run never sends, and a
# replayed run never calls the agent, so demanding everything every time would
# make the fast local loops impossible.
required=()
[[ "$SKIP_PULLS" == "1" ]] || required+=(CLAUDE_CODE_OAUTH_TOKEN)
[[ "$DRY_RUN" == "1" ]] || required+=(RESEND_API_KEY REPORT_RECIPIENT)
if (( ${#required[@]} )); then
    require "${required[@]}" || exit 1
fi

# ---------- preflight ----------
# The agent's whole job is reading systems of record through these, so a
# missing one is a failed run and not a degraded one. The 2026-08-31 outage was
# exactly this check firing correctly on a PATH that lacked $HOME/bin: the
# check was right and the PATH was wrong. bin/runner/lib.sh owns that PATH now.
if [[ "$SKIP_PULLS" != "1" ]]; then
    missing_tools=()
    for tool in claude jq curl timeout hs gws linear agent-browser; do
        command -v "$tool" &>/dev/null || missing_tools+=("$tool")
    done
    if (( ${#missing_tools[@]} )); then
        fail_reason="not on PATH: ${missing_tools[*]} (PATH=$PATH)"
        exit 1
    fi

    # The .account marker under this directory is what points hs at the Atelic
    # portal and gws at the atelic mailbox. Running from anywhere else silently
    # reads the wrong CRM, which is the expensive failure, so this is a hard
    # gate rather than a warning.
    if [[ ! -d "$ATELIC" ]]; then
        fail_reason="the Atelic repo is not at $ATELIC"
        exit 1
    fi
    cd "$ATELIC" || { fail_reason="cannot enter $ATELIC"; exit 1; }
fi

# ---------- the agent ----------
# Rather than --dangerously-skip-permissions, the invocation pre allows only
# what the agent needs. Each entry matches a single plain command; the agent is
# told to keep every Bash call that shape and to put multi step logic in a
# python script under the work dir.
ALLOWED_TOOLS=(
    "Bash(hs:*)"
    "Bash(gws:*)"
    # An allow rule does not match past an env assignment it does not
    # recognize, so the profile pinned form the agent is told to use needs its
    # own entries.
    "Bash(GWS_FORCE_PROFILE=atelic gws:*)"
    "Bash(GWS_FORCE_PROFILE=personal gws:*)"
    "Bash(linear:*)"
    "Bash(curl:*)"
    # The customer path walk runs in a real browser, never curl alone.
    "Bash(agent-browser:*)"
    "Bash(python3:*)"
    "Bash(security:*)"
    "Bash(date:*)"
    "Bash(cat:*)"
    "Bash(ls:*)"
    "Read"
    "Grep"
    "Glob"
    "WebFetch"
    "WebSearch"
    "Write($WORK/*)"
)

ATTEMPT_TIMEOUT="${ATTEMPT_TIMEOUT:-45m}"
MAX_ATTEMPTS="${MAX_ATTEMPTS:-2}"
RETRY_BACKOFF_SECONDS=15
# claude -p can die mid stream on a long session and exit non zero. These are
# worth one more attempt; anything else is a real failure and is reported as
# one rather than burning a second agent run on it.
TRANSIENT='socket connection was closed|API Error|overloaded|Connection error|terminated'

if [[ "$SKIP_PULLS" == "1" ]]; then
    if [[ ! -f "$RESULT_RC" ]]; then
        fail_reason="SKIP_PULLS is set but no saved run is in $WORK; run once without it"
        exit 1
    fi
    # Both halves come back, so a saved failure replays as that failure rather
    # than as a success that fails the predicate a moment later. Rendering the
    # wrong failure would be worse than rendering none: the whole reason to
    # replay a run locally is that the failure email is the one nobody has ever
    # read before trusting it.
    result="$(cat "$RESULT_JSON" 2>/dev/null)" || result=""
    rc="$(cat "$RESULT_RC")"
    [[ "$rc" =~ ^[0-9]+$ ]] || rc=1
    echo "agent: replaying the run saved in $WORK (exit $rc)"
else
    prompt="Prep the ATE-480 Weekly Outreach roster for ISO week $WEEK. Scratch directory for scripts and the roster file: $WORK. Run the full method in your definition and end with the success line."
    stderr_file="$WORK/claude-stderr.txt"
    attempt=1
    while :; do
        echo "=== $(date -Iseconds) claude attempt $attempt/$MAX_ATTEMPTS (timeout $ATTEMPT_TIMEOUT) ==="
        result="$(timeout "$ATTEMPT_TIMEOUT" claude -p "$prompt" \
            --agent outreacher \
            --allowedTools "${ALLOWED_TOOLS[@]}" \
            --output-format json 2>"$stderr_file")"
        rc=$?
        [[ $rc -eq 0 ]] && break

        transient=false
        if [[ $rc -eq 124 ]]; then
            transient=true
            echo "attempt $attempt timed out after $ATTEMPT_TIMEOUT"
        elif { printf '%s' "$result"; cat "$stderr_file" 2>/dev/null; } | grep -qiE "$TRANSIENT"; then
            transient=true
            echo "attempt $attempt hit a transient API error (exit $rc)"
        fi

        if [[ "$transient" == true && $attempt -lt $MAX_ATTEMPTS ]]; then
            echo "retrying in ${RETRY_BACKOFF_SECONDS}s"
            attempt=$((attempt + 1))
            sleep "$RETRY_BACKOFF_SECONDS"
            continue
        fi
        break
    done

    # Saved on every real run, successes and failures alike, so SKIP_PULLS can
    # put the very same JSON and the very same exit status back through the
    # reporting path.
    printf '%s' "$result" > "$RESULT_JSON"
    printf '%s' "$rc" > "$RESULT_RC"
fi

if [[ $rc -ne 0 ]]; then
    fail_reason="claude exited $rc: $(head -c 400 "$WORK/claude-stderr.txt" 2>/dev/null)"
    exit 1
fi

# Exit zero is not enough: `claude -p` answers an unknown agent with exit 0 and
# "Unknown skill" as text, so the success line the agent is told to end with is
# what actually confirms the roster was written.
if ! jq -e --arg line "$SUCCESS_LINE" \
    '.subtype == "success" and .is_error == false and ((.result // "") | contains($line))' \
    <<<"$result" >/dev/null 2>&1; then
    fail_reason="the agent did not confirm the roster: expected \"$SUCCESS_LINE\""
    exit 1
fi

echo "agent: roster prepped (cost $(jq -r '.total_cost_usd // "?"' <<<"$result") USD)"
status="success"
