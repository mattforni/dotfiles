#!/usr/bin/env bash
# Shared email reporting helpers for headless Claude routines.
#
# Source from a wrapper script before calling email_report. The wrapper sets
# ROUTINE and LOG, then sources this file:
#
#     ROUTINE="Mise"
#     LOG="$HOME/.claude/debug/mise.log"
#     source "$HOME/bin/lib/email-report.sh"
#
# Required external tools: jq, curl, security, sed, mktemp, awk, tr.
#
# Reads:
#   - Resend API key from macOS Keychain (service "resend-api-key")
#   - Recipient address from ~/.config/headless-report/recipient (one line)
#
# Sends from: Claude <claude@atelic.me>. Verified domain on Resend.
#
# Body shape (kept stable so the same library can carry richer briefings
# later without changing the contract):
#
#     <h2>{emoji} {ROUTINE} — {timestamp}</h2>
#     {summary_html}                              ← TL;DR, callouts, the
#                                                   immediately scannable bit
#     <details><summary>Full output</summary>
#       <pre>{html_escape(full_text)}</pre>
#     </details>
#     {meta_block_html}
#
# The summary block is what makes the email self-contained: a reader sees
# what happened without expanding the full output or tailing a log. The
# wrapper builds it via build_summary_block (or its own logic) and passes
# raw HTML.
#
# When the daily email evolves beyond a status report (calendar pulls,
# training plan, news, etc.), extend the wrapper to pass richer
# summary_html or meta_block_html. The outer template stays put.

EMAIL_REPORT_RESEND_KEY_SERVICE="${EMAIL_REPORT_RESEND_KEY_SERVICE:-resend-api-key}"
EMAIL_REPORT_RECIPIENT_FILE="${EMAIL_REPORT_RECIPIENT_FILE:-$HOME/.config/headless-report/recipient}"
EMAIL_REPORT_SENDER="${EMAIL_REPORT_SENDER:-Claude <claude@atelic.me>}"
EMAIL_REPORT_API_URL="${EMAIL_REPORT_API_URL:-https://api.resend.com/emails}"
# Overrides the default "[<ROUTINE>] YYYY-MM-DD" subject. A daily routine wants
# the date; a weekly one wants its week, so the Outreacher sets this to
# "YYYY-Www Outreach" and matches the retro runner's "YYYY-Www Retro".
EMAIL_REPORT_SUBJECT="${EMAIL_REPORT_SUBJECT:-}"

# Usage: html_escape (reads from stdin, writes escaped HTML to stdout)
# Escapes &, <, > so untrusted text can be safely embedded in HTML body or
# attribute contexts. Does not handle quotes or single quotes; use only for
# element-content insertion, not for unquoted attribute values.
html_escape() {
  sed -e 's/&/\&amp;/g' -e 's/</\&lt;/g' -e 's/>/\&gt;/g'
}

# Usage: build_report_html <status> <summary_html> <full_text> <meta_block_html>
# Assembles the email body and writes it to stdout, sending nothing.
#
# email_report used to build this inline. It was pulled out so a local run can
# render exactly what production would mail and open it in a browser, which is
# the cheap half of the iterate-locally loop the Cloud Run runners already have
# (runners/README.md, "Iterate Locally, Then Promote"). Reads $ROUTINE.
build_report_html() {
  local status="$1"
  local summary_html="$2"
  local full_text="$3"
  local meta_block_html="$4"

  local emoji
  if [[ "$status" == "success" ]]; then emoji="✅"; else emoji="❌"; fi

  local timestamp
  timestamp=$(date '+%Y-%m-%d %H:%M')

  local routine_html
  routine_html=$(printf '%s' "${ROUTINE:-Routine}" | html_escape)

  local full_html=""
  if [[ -n "$full_text" ]]; then
    local escaped
    escaped=$(printf '%s' "$full_text" | html_escape)
    full_html="<details style=\"margin:0 0 12px 0;\"><summary style=\"cursor:pointer;color:#666;font-size:12px;padding:4px 0;\">Full output</summary><pre style=\"background:#f5f5f7;padding:12px;border-radius:6px;font-size:12px;line-height:1.4;overflow-x:auto;white-space:pre-wrap;margin:8px 0 0 0;\">$escaped</pre></details>"
  fi

  printf '%s' "<!DOCTYPE html><html><body style=\"font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;font-size:14px;color:#1d1d1f;line-height:1.5;\">
<h2 style=\"margin:0 0 8px 0;font-size:18px;\">$emoji $routine_html — $timestamp</h2>
$summary_html
$full_html
$meta_block_html
</body></html>"
}

# Usage: email_report <status> <summary_html> <full_text> <meta_block_html>
#   status:           "success" | "failure" — drives only the body H2 emoji.
#   summary_html:     raw HTML for the TL;DR block above the fold; the
#                     scannable bit. Empty string skips it.
#   full_text:        plain-text full output, HTML-escaped and wrapped in
#                     a collapsed <details><pre> block.
#   meta_block_html:  raw HTML appended after the full output (run metadata).
#
# Subject defaults to "[<ROUTINE>] YYYY-MM-DD" so the inbox stays calm and the
# user can scan by date; EMAIL_REPORT_SUBJECT replaces it outright for a
# routine whose natural unit is not the day. Status and reason live in the
# body either way, where there is room to be expressive.
#
# On success: returns 0.
# On failure: sets $email_error to a one-line reason and returns non-zero.
# Requires $ROUTINE to be set in the caller's environment.
#
# $email_error is this function's out-parameter: deliberately not `local`, and
# read by callers after a non-zero return (see .claude/references/headless-claude.md).
# Static analysis cannot see those cross-file reads, so every assignment to it
# looks unused. The directive sits here so it covers the whole function body.
# NB: a comment line beginning with the linter's own name is parsed as a
# directive, so keep explanatory prose from starting with it.
# shellcheck disable=SC2034
email_report() {
  local status="$1"
  local summary_html="$2"
  local full_text="$3"
  local meta_block_html="$4"
  email_error=""

  if [[ -z "${ROUTINE:-}" ]]; then
    email_error="ROUTINE env var unset; caller must export it before calling email_report"
    return 1
  fi

  local api_key
  api_key=$(security find-generic-password -s "$EMAIL_REPORT_RESEND_KEY_SERVICE" -w 2>>"${LOG:-/dev/stderr}")
  if [[ -z "$api_key" ]]; then
    email_error="Resend API key missing in Keychain (service $EMAIL_REPORT_RESEND_KEY_SERVICE)"
    return 2
  fi

  if [[ ! -r "$EMAIL_REPORT_RECIPIENT_FILE" ]]; then
    email_error="Recipient file missing or unreadable: $EMAIL_REPORT_RECIPIENT_FILE"
    return 3
  fi
  # Take the first non-empty, non-comment line. tr strips any trailing CR/LF or
  # accidental whitespace. This fails loud if the file ever grows comments or
  # multiple addresses, rather than silently sending to a Frankenstein recipient.
  local recipient
  recipient=$(awk 'NF && !/^[[:space:]]*#/ {print; exit}' "$EMAIL_REPORT_RECIPIENT_FILE" | tr -d '[:space:]')
  if [[ -z "$recipient" ]]; then
    email_error="Recipient file empty or only comments: $EMAIL_REPORT_RECIPIENT_FILE"
    return 4
  fi
  if [[ "$recipient" != *@*.* ]]; then
    email_error="Recipient does not look like an email address: $recipient"
    return 4
  fi

  local date_only subject html
  date_only=$(date '+%Y-%m-%d')
  subject="${EMAIL_REPORT_SUBJECT:-[$ROUTINE] $date_only}"
  html=$(build_report_html "$status" "$summary_html" "$full_text" "$meta_block_html")

  local payload
  payload=$(jq -n \
    --arg from "$EMAIL_REPORT_SENDER" \
    --arg to "$recipient" \
    --arg subject "$subject" \
    --arg html "$html" \
    '{from: $from, to: [$to], subject: $subject, html: $html}') || {
      email_error="jq failed to construct JSON payload"
      return 5
    }

  local resp_body resp_code curl_rc
  resp_body=$(mktemp -t headless-resend.XXXXXX) || {
    email_error="mktemp failed"
    return 6
  }
  resp_code=$(curl -sS -o "$resp_body" -w '%{http_code}' \
    --max-time 30 \
    -X POST "$EMAIL_REPORT_API_URL" \
    -H "Authorization: Bearer $api_key" \
    -H "Content-Type: application/json" \
    --data-binary "$payload" 2>>"${LOG:-/dev/null}")
  curl_rc=$?

  if [[ $curl_rc -ne 0 ]]; then
    email_error="curl failed (rc=$curl_rc) calling Resend API"
    rm -f "$resp_body"
    return 7
  fi

  if [[ ! "$resp_code" =~ ^2 ]]; then
    local resp_text
    resp_text=$(head -c 500 "$resp_body" 2>>"${LOG:-/dev/stderr}")
    email_error="Resend API HTTP $resp_code: $resp_text"
    rm -f "$resp_body"
    return 8
  fi

  rm -f "$resp_body"
  return 0
}

# Usage: build_summary_block <claude_json_result> <exit_code> <expected_pattern>
# Builds a scannable TL;DR HTML block for the email above-the-fold area.
#
# On success (exit 0, subtype=success, is_error=false, .result contains
# expected_pattern): emits a green callout with the first non-empty line
# of .result.
#
# On failure: emits a red callout with the most likely reason (subtype,
# is_error, error field, last meaningful lines of .result), plus a
# permission_denials list when non-empty.
#
# Output is one line of HTML. Pass directly as summary_html to email_report.
build_summary_block() {
  local result_json="$1"
  local rc="$2"
  local expected_pattern="$3"

  local subtype is_error err_field result_text
  subtype=$(printf '%s' "$result_json" | jq -r '.subtype // empty' 2>>"${LOG:-/dev/stderr}")
  is_error=$(printf '%s' "$result_json" | jq -r '.is_error // false' 2>>"${LOG:-/dev/stderr}")
  err_field=$(printf '%s' "$result_json" | jq -r '.error // empty' 2>>"${LOG:-/dev/stderr}")
  result_text=$(printf '%s' "$result_json" | jq -r '.result // empty' 2>>"${LOG:-/dev/stderr}")

  local denials_count=0
  denials_count=$(printf '%s' "$result_json" | jq -r '.permission_denials // [] | length' 2>>"${LOG:-/dev/stderr}")
  [[ -z "$denials_count" ]] && denials_count=0

  local is_success=false
  if [[ "$rc" -eq 0 ]] && [[ "$subtype" == "success" ]] && [[ "$is_error" == "false" ]]; then
    if [[ -z "$expected_pattern" ]] || printf '%s' "$result_text" | grep -qF -- "$expected_pattern"; then
      is_success=true
    fi
  fi

  local out=""

  if [[ "$is_success" == "true" ]]; then
    local first_line
    first_line=$(printf '%s' "$result_text" | awk 'NF {print; exit}')
    [[ -z "$first_line" ]] && first_line="Completed."
    local first_line_html
    first_line_html=$(printf '%s' "$first_line" | html_escape)
    out+="<div style=\"background:#e8f5e9;border-left:4px solid #43a047;padding:10px 14px;border-radius:4px;margin:0 0 12px 0;\"><strong style=\"color:#1b5e20;\">$first_line_html</strong></div>"
  else
    local reason=""
    if [[ "$rc" -ne 0 ]]; then
      reason="Process exit $rc"
    elif [[ -n "$err_field" ]]; then
      reason=$(printf '%s' "$err_field" | tr '\n' ' ' | head -c 200)
    elif [[ "$is_error" == "true" ]]; then
      reason="is_error=true in result JSON"
    elif [[ "$subtype" != "success" ]] && [[ -n "$subtype" ]]; then
      reason="subtype=$subtype"
    elif [[ -n "$expected_pattern" ]]; then
      reason="missing expected pattern: $expected_pattern"
    else
      reason="unknown failure"
    fi
    local reason_html
    reason_html=$(printf '%s' "$reason" | html_escape)
    out+="<div style=\"background:#ffebee;border-left:4px solid #c62828;padding:10px 14px;border-radius:4px;margin:0 0 12px 0;\"><strong style=\"color:#b71c1c;\">$reason_html</strong></div>"

    if [[ -n "$result_text" ]]; then
      local tail_lines
      tail_lines=$(printf '%s' "$result_text" | awk 'NF' | tail -n 8)
      if [[ -n "$tail_lines" ]]; then
        local tail_html
        tail_html=$(printf '%s' "$tail_lines" | html_escape)
        out+="<p style=\"margin:0 0 4px 0;font-size:12px;color:#666;\"><strong>Last lines of output</strong></p>"
        out+="<pre style=\"background:#fff5f5;border-left:3px solid #ef5350;padding:10px 12px;border-radius:0 4px 4px 0;font-size:12px;line-height:1.4;overflow-x:auto;white-space:pre-wrap;margin:0 0 12px 0;\">$tail_html</pre>"
      fi
    fi

    if [[ "$denials_count" -gt 0 ]]; then
      local denials_list
      denials_list=$(printf '%s' "$result_json" | jq -r '.permission_denials[] | "\(.tool_name // "?"): \(.tool_input // .reason // "?" | tostring)"' 2>>"${LOG:-/dev/stderr}")
      local denials_html
      denials_html=$(printf '%s' "$denials_list" | html_escape)
      out+="<p style=\"margin:0 0 4px 0;font-size:12px;color:#666;\"><strong>Permission denials ($denials_count)</strong></p>"
      out+="<pre style=\"background:#fff8e1;border-left:3px solid #ffa000;padding:10px 12px;border-radius:0 4px 4px 0;font-size:12px;line-height:1.4;overflow-x:auto;white-space:pre-wrap;margin:0 0 12px 0;\">$denials_html</pre>"
    fi
  fi

  printf '%s' "$out"
}

# Usage: build_meta_block <claude_json_result> <exit_code>
# Builds an HTML <table> with run metadata: duration, cost, turns, exit
# code, session id. Output is one line. Safe to embed directly in email body.
build_meta_block() {
  local result_json="$1"
  local rc="$2"
  local duration_ms cost turns session
  duration_ms=$(printf '%s' "$result_json" | jq -r '.duration_ms // empty' 2>>"${LOG:-/dev/stderr}")
  cost=$(printf '%s' "$result_json" | jq -r '.total_cost_usd // empty' 2>>"${LOG:-/dev/stderr}")
  turns=$(printf '%s' "$result_json" | jq -r '.num_turns // empty' 2>>"${LOG:-/dev/stderr}")
  session=$(printf '%s' "$result_json" | jq -r '.session_id // empty' 2>>"${LOG:-/dev/stderr}")
  local duration_s=""
  if [[ -n "$duration_ms" ]]; then
    duration_s=$(awk -v ms="$duration_ms" 'BEGIN { printf "%.1fs", ms/1000 }')
  fi
  local cost_fmt=""
  if [[ -n "$cost" ]]; then
    cost_fmt=$(awk -v c="$cost" 'BEGIN { printf "$%.4f", c }')
  fi
  local rows=""
  [[ -n "$duration_s" ]] && rows+="<tr><td style=\"padding:2px 12px 2px 0;color:#888;\">duration</td><td style=\"padding:2px 0;\">$duration_s</td></tr>"
  [[ -n "$cost_fmt" ]] && rows+="<tr><td style=\"padding:2px 12px 2px 0;color:#888;\">cost</td><td style=\"padding:2px 0;\">$cost_fmt</td></tr>"
  [[ -n "$turns" ]] && rows+="<tr><td style=\"padding:2px 12px 2px 0;color:#888;\">turns</td><td style=\"padding:2px 0;\">$turns</td></tr>"
  rows+="<tr><td style=\"padding:2px 12px 2px 0;color:#888;\">exit code</td><td style=\"padding:2px 0;\">$rc</td></tr>"
  [[ -n "$session" ]] && rows+="<tr><td style=\"padding:2px 12px 2px 0;color:#888;\">session</td><td style=\"padding:2px 0;font-family:ui-monospace,Menlo,monospace;font-size:11px;\">$session</td></tr>"
  printf '<table style="border-collapse:collapse;font-size:12px;color:#444;margin-top:16px;">%s</table>' "$rows"
}

# Usage: email_raw <subject> <html-file>
#   Sends an HTML document verbatim as the body, with the given subject,
#   from the same sender and to the same recipient as email_report.
#
# email_report wraps its content in this library's own template, which is
# right for a status report and wrong for anything that renders a finished
# document. The Sunday retro renders its own HTML and needs it delivered
# untouched, so this is the second door: same Keychain read, same recipient
# file, no template.
#
# It exists so a local preview of a runner's email does not have to grow its
# own credential path. Production sending stays inside the runner, which is
# injected with the key from the vault and never reads the Keychain at all.
#
# Sets email_error and returns non zero on failure, matching email_report.
# shellcheck disable=SC2034
email_raw() {
  local subject="$1" html_file="$2"
  email_error=""

  [[ -r "$html_file" ]] || { email_error="cannot read $html_file"; return 1; }

  # `|| true` on each substitution because bin/runner/mail sources this under
  # `set -e`, where a failing assignment would take the caller down before the
  # error below could ever be set or read.
  local api_key
  api_key=$(security find-generic-password -s "$EMAIL_REPORT_RESEND_KEY_SERVICE" -w 2>/dev/null || true)
  [[ -n "$api_key" ]] || {
    email_error="Resend API key missing in Keychain (service $EMAIL_REPORT_RESEND_KEY_SERVICE)"
    return 2
  }

  [[ -r "$EMAIL_REPORT_RECIPIENT_FILE" ]] || {
    email_error="Recipient file missing or unreadable: $EMAIL_REPORT_RECIPIENT_FILE"
    return 3
  }
  local recipient
  recipient=$(grep -vE '^\s*(#|$)' "$EMAIL_REPORT_RECIPIENT_FILE" | head -n1 | tr -d '[:space:]') || true
  [[ -n "$recipient" ]] || { email_error="no recipient in $EMAIL_REPORT_RECIPIENT_FILE"; return 3; }

  local payload body code
  payload=$(jq -n --arg from "$EMAIL_REPORT_SENDER" --arg to "$recipient" \
    --arg subject "$subject" --rawfile html "$html_file" \
    '{from: $from, to: [$to], subject: $subject, html: $html}') || {
    email_error="could not build the Resend payload"; return 4; }

  body=$(mktemp -t runner-resend.XXXXXX) || { email_error="mktemp failed"; return 4; }
  code=$(curl -sS --max-time 30 -o "$body" -w '%{http_code}' \
    -X POST "$EMAIL_REPORT_API_URL" \
    -H "Authorization: Bearer $api_key" \
    -H "Content-Type: application/json" \
    -d "$payload") || true
  if [[ "$code" =~ ^2 ]]; then
    echo "sent \"$subject\" to $recipient"
    rm -f "$body"
    return 0
  fi
  email_error="Resend returned HTTP $code: $(head -c 300 "$body")"
  rm -f "$body"
  return 5
}
