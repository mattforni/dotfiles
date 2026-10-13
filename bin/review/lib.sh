# shellcheck shell=bash
# Shared plumbing for bin/review/*: the findings shape the Claude reviewer
# fills, the state directory, the scorecard append, and the normaliser that
# turns the reviewer's raw output into the JSONL stream the lander parses.
#
# The rules (when a review runs, which reviewer gates, how findings are
# triaged) live in plugins/sdlc/reference/code-review.md. This file is
# mechanism only.

REVIEW_STATE="${REVIEW_STATE:-$HOME/.local/state/review}"
REVIEW_SCORECARD="$REVIEW_STATE/scorecard.tsv"
REVIEW_HEADER=$'ts\tkind\trepo\tpr\tsha\treviewer\tran\treason\tfindings\tfixed\tdeclined\theld_min\tseconds\tblocking'

die() { echo "${0##*/}: $*" >&2; exit 1; }
need() { command -v "$1" >/dev/null 2>&1 || die "$1 is required and not on PATH"; }

# The value of a long option, or a die: an option given without its value
# would otherwise end the script silently under set -e (shift 2 fails) or
# swallow the next option as the value. Call as: x=$(value "$@") || exit 1
value() { [[ $# -ge 2 && "$2" != -* ]] || die "$1 needs a value"; printf '%s' "$2"; }

# Print the header comment of the calling script as its usage text, to
# stderr when exiting non zero. The header runs from line 2 to the first line
# that is not a comment.
usage() {
  local code="${1:-0}" text
  text=$(sed -n '2,/^[^#]/p' "$0" | sed '$d' | sed 's/^# \{0,1\}//')
  if [[ "$code" -eq 0 ]]; then printf '%s\n' "$text"; else printf '%s\n' "$text" >&2; fi
  exit "$code"
}

review_state_dir() {
  mkdir -p "$REVIEW_STATE/runs" || die "cannot create $REVIEW_STATE"
  # Raw reviewer output is kept for forensics, not forever.
  find "$REVIEW_STATE/runs" -type f -mtime +14 -delete 2>/dev/null || true
  printf '%s' "$REVIEW_STATE"
}

# Append one TSV row, writing the header on first touch.
# Args, in column order after ts: kind repo pr sha reviewer ran reason findings
# fixed declined held_min seconds blocking. Tabs inside a value become spaces.
scorecard_append() {
  review_state_dir >/dev/null
  [[ -s "$REVIEW_SCORECARD" ]] || printf '%s\n' "$REVIEW_HEADER" >"$REVIEW_SCORECARD"
  local row field
  row=$(date -u +%Y-%m-%dT%H:%M:%SZ)
  for field in "$@"; do field="${field//$'\t'/ }"; field="${field//$'\n'/ }"; row+=$'\t'"${field//$'\r'/ }"; done
  printf '%s\n' "$row" >>"$REVIEW_SCORECARD"
}

# The shape the Claude reviewer is asked to return, appended to the system
# prompt of the headless run. The /code-review skill has a finding shape of
# its own with no severity in it, and for the first week that shape won: 1136
# of 1145 findings arrived ungraded and the normaliser stamped each one major
# (ATE-635). So the prompt names severity first, says the skill's shape lacks
# it, and defines the grades by what the change does in ordinary use. Read by
# bin/review/run.
# shellcheck disable=SC2034
REVIEW_SHAPE_PROMPT='Report the review findings as your entire final reply: one JSON array, no prose before or after it, no code fence. Each element has exactly these five keys, and an element missing any of them is invalid: "severity", "file" (repo relative path), "line" (integer), "summary" (one sentence), "failure_scenario" (concrete inputs or state and the wrong outcome). The /code-review skill has no severity in its own finding shape; add it to every finding here. Severity is one of "critical", "major", "minor", "info", and it grades the defect, not how sure you are of it. critical: in ordinary use the change loses or corrupts data, leaks a secret, or opens a security hole. major: the change as written does the wrong thing on a path that runs in ordinary use, with inputs or state you can name and that will occur, or it breaks a documented rule the change was meant to follow. minor: a real defect that needs unusual input or state to show, a missing guard against a failure nothing in the change makes likely, a hardening suggestion, or a stale comment or doc line. info: reuse, simplification, efficiency, naming. A hardening suggestion is never major. A defect the change neither introduced nor touched is at most minor. When a finding sits between two grades, give the lower. An empty array means no findings.'

# normalise_claude <raw.json> <rc> <sha> <seconds> <files>
# Prints finding lines then exactly one complete line for the claude reviewer.
# The complete line counts the findings, the blocking ones (critical or
# major), and the unrated ones: findings that arrived without a severity and
# were graded by the fallback rule, which fails closed (major when a failure
# scenario is given). An unrated count above zero means the shape prompt lost.
# raw.json is the --output-format json document from a headless run. Three
# shapes are accepted: structured_output.findings (the schema applied), a JSON
# array in the result text (optionally fenced), and anything else, which is
# reported as ran:false with the first 200 characters as the reason.
normalise_claude() {
  local raw="$1" rc="${2:-0}" sha="$3" seconds="${4:-0}" files="${5:-0}"
  if ! jq -e . "$raw" >/dev/null 2>&1; then
    jq -cn --arg sha "$sha" --argjson secs "$seconds" --argjson files "$files" \
      --arg reason "no json output (rc $rc): $(head -c 200 "$raw" 2>/dev/null | tr '\n' ' ')" \
      '{type:"complete",reviewer:"claude",ran:false,reason:$reason,findings:0,blocking:0,unrated:0,sha:$sha,seconds:$secs,files:$files}'
    return 0
  fi
  jq -c --arg sha "$sha" --argjson rc "$rc" --argjson secs "$seconds" --argjson files "$files" '
    def grades: ["critical","major","minor","info"];
    def complete(ran; reason; n; b; u):
      {type:"complete", reviewer:"claude", ran:ran, reason:reason, findings:n, blocking:b, unrated:u, sha:$sha, seconds:$secs, files:$files};
    def blocking: map(select(.severity == "critical" or .severity == "major")) | length;
    def unrated: map(select((.severity // "") as $s | (grades | index($s)) == null)) | length;
    def finding(sev):
      {type:"finding", reviewer:"claude",
       severity:((.severity // sev) as $s | if (grades | index($s)) != null then $s else "major" end),
       fileName:(.file // .fileName // ""),
       line:(.line // null),
       summary:(.summary // ""),
       failure_scenario:(.failure_scenario // "")};
    def fallback_sev: if ((.failure_scenario // "") | length) > 0 then "major" else "minor" end;
    def unfence: tostring | gsub("^\\s*```(json)?\\s*"; "") | gsub("\\s*```\\s*$"; "");
    # The findings array is accepted in two forms only: the whole reply
    # (optionally fenced), or one fenced json block inside prose. A bare
    # bracket fragment inside prose is not one, and an array holding anything
    # but objects is not one either: both fall through to ran:false, because a
    # prose reply normalised to "zero findings" would be a gate that fails open.
    def objects_only: if (type == "array") and (all(.[]; type == "object")) then . else null end;
    def arr: (unfence | try fromjson catch null | objects_only) as $a
      | if $a != null then $a
        else ((tostring | capture("```(json)?\\s*(?<a>\\[[\\s\\S]*?\\])\\s*```").a? // "")
              | try fromjson catch null | objects_only) end;
    if (.is_error // false) or $rc != 0 then
      complete(false; ((.result // "error") | tostring | gsub("\\s+"; " ") | .[0:200]); 0; 0; 0)
    elif ((.structured_output.findings? // null) | objects_only | type) == "array" then
      (.structured_output.findings | unrated) as $u
      | (.structured_output.findings | map(finding("major"))) as $f
      | ($f[]), complete(true; ""; ($f | length); ($f | blocking); $u)
    elif (((.result // "") | arr) | type) == "array" then
      (((.result // "") | arr) | unrated) as $u
      | (((.result // "") | arr) | map(finding(fallback_sev))) as $f
      | ($f[]), complete(true; ""; ($f | length); ($f | blocking); $u)
    else
      complete(false; ("unparseable output: " + ((.result // "") | tostring | gsub("\\s+"; " ") | .[0:200])); 0; 0; 0)
    end' "$raw"
}
