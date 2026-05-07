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
#     {note_html if subject_note}
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

html_escape() {
  sed -e 's/&/\&amp;/g' -e 's/</\&lt;/g' -e 's/>/\&gt;/g'
}

# Usage: email_report <status> <summary_html> <full_text> <meta_block_html>
#   status:           "success" | "failure" — drives only the body H2 emoji.
#   summary_html:     raw HTML for the TL;DR block above the fold; the
#                     scannable bit. Empty string skips it.
#   full_text:        plain-text full output, HTML-escaped and wrapped in
#                     a collapsed <details><pre> block.
#   meta_block_html:  raw HTML appended after the full output (run metadata).
#
# Subject is always "[<ROUTINE>] YYYY-MM-DD" so the inbox stays calm and the
# user can scan by date. Status and reason live in the body, where there is
# room to be expressive.
#
# On success: returns 0.
# On failure: sets $email_error to a one-line reason and returns non-zero.
# Requires $ROUTINE to be set in the caller's environment.
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
  api_key=$(security find-generic-password -s "$EMAIL_REPORT_RESEND_KEY_SERVICE" -w 2>/dev/null)
  if [[ -z "$api_key" ]]; then
    email_error="Resend API key missing in Keychain (service $EMAIL_REPORT_RESEND_KEY_SERVICE)"
    return 2
  fi

  if [[ ! -r "$EMAIL_REPORT_RECIPIENT_FILE" ]]; then
    email_error="Recipient file missing or unreadable: $EMAIL_REPORT_RECIPIENT_FILE"
    return 3
  fi
  local recipient
  recipient=$(tr -d '[:space:]' < "$EMAIL_REPORT_RECIPIENT_FILE")
  if [[ -z "$recipient" ]]; then
    email_error="Recipient file empty: $EMAIL_REPORT_RECIPIENT_FILE"
    return 4
  fi

  local emoji
  if [[ "$status" == "success" ]]; then emoji="✅"; else emoji="❌"; fi

  local date_only timestamp
  date_only=$(date '+%Y-%m-%d')
  timestamp=$(date '+%Y-%m-%d %H:%M')

  local subject="[$ROUTINE] $date_only"

  local full_html=""
  if [[ -n "$full_text" ]]; then
    local escaped
    escaped=$(printf '%s' "$full_text" | html_escape)
    full_html="<details style=\"margin:0 0 12px 0;\"><summary style=\"cursor:pointer;color:#666;font-size:12px;padding:4px 0;\">Full output</summary><pre style=\"background:#f5f5f7;padding:12px;border-radius:6px;font-size:12px;line-height:1.4;overflow-x:auto;white-space:pre-wrap;margin:8px 0 0 0;\">$escaped</pre></details>"
  fi

  local html
  html="<!DOCTYPE html><html><body style=\"font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;font-size:14px;color:#1d1d1f;line-height:1.5;\">
<h2 style=\"margin:0 0 8px 0;font-size:18px;\">$emoji $ROUTINE — $timestamp</h2>
$summary_html
$full_html
$meta_block_html
</body></html>"

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
    resp_text=$(head -c 500 "$resp_body" 2>/dev/null)
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
  subtype=$(printf '%s' "$result_json" | jq -r '.subtype // empty' 2>/dev/null)
  is_error=$(printf '%s' "$result_json" | jq -r '.is_error // false' 2>/dev/null)
  err_field=$(printf '%s' "$result_json" | jq -r '.error // empty' 2>/dev/null)
  result_text=$(printf '%s' "$result_json" | jq -r '.result // empty' 2>/dev/null)

  local denials_count=0
  denials_count=$(printf '%s' "$result_json" | jq -r '.permission_denials // [] | length' 2>/dev/null)
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
      denials_list=$(printf '%s' "$result_json" | jq -r '.permission_denials[] | "\(.tool_name // "?"): \(.tool_input // .reason // "?" | tostring)"' 2>/dev/null)
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
  duration_ms=$(printf '%s' "$result_json" | jq -r '.duration_ms // empty' 2>/dev/null)
  cost=$(printf '%s' "$result_json" | jq -r '.total_cost_usd // empty' 2>/dev/null)
  turns=$(printf '%s' "$result_json" | jq -r '.num_turns // empty' 2>/dev/null)
  session=$(printf '%s' "$result_json" | jq -r '.session_id // empty' 2>/dev/null)
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
