# Renders the retro JSON into the Retro email: the atelic.me voice
# (Geist, cream, one orange accent) as Gmail safe table markup with every
# style inline. Invoked by entrypoint.sh as
#   jq -r --arg week ... --arg monday ... --arg sunday ... -f render.jq retro.json
# Design source: the Retro Email canvas, 2026-08-27; rebuilt mobile first
# 2026-08-31 after the wide tables proved unreadable on a phone.
#
# Mobile first, and one layout only. Gmail's support for <style> and media
# queries depends on the account type and the client, so nothing here relies
# on either: every record is a stacked block that reads at 320px and simply
# gets more air at 600px. The only true tables left are the ones that are
# genuinely tabular and narrow, a name and two small numbers.

def esc: tostring | gsub("&"; "&amp;") | gsub("<"; "&lt;") | gsub(">"; "&gt;");

def mono: "font-family:'Geist Mono',Menlo,Consolas,monospace;";
def sans: "font-family:Geist,'Helvetica Neue',Helvetica,Arial,sans-serif;";
def hair: "border-top:1px solid #ebe6db;";
def rule: "border-top:1px solid #d9d4c8;";

# HubSpot shouts its own vocabulary (NOT_A_FIT) and the week's kinds arrive
# lowercase. Both read as English here: split on underscores and spaces,
# capitalize every word, and leave the small words lower unless they lead.
def titlecase:
  ["a", "an", "the", "of", "in", "to", "for", "by"] as $small
  | (tostring | gsub("_"; " ") | split(" "))
  | to_entries
  | map(
      (.value | ascii_downcase) as $w
      | if $w == "" then ""
        elif (.key > 0) and (($small | index($w)) != null) then $w
        else ($w[0:1] | ascii_upcase) + ($w[1:])
        end)
  | join(" ");

# Money reads by sign: earned is green, given up is red, and an absent figure
# stays grey rather than claiming either.
def stage_ink($v):
  if ($v|tostring) == "-" or ($v|tostring) == "" then "#8a8272"
  elif ($v|tostring) | startswith("Closed Lost") then "#b3705e"
  else "#6b8b64" end;

def money_ink($v):
  if ($v|tostring) == "-" or ($v|tostring) == "" then "#8a8272"
  elif ($v|tostring) | startswith("-") then "#b3705e"
  else "#6b8b64" end;

# Without a column header above it a bare mark cannot say what it is answering,
# so the word travels with it. The glyph carries the verdict in colour and the
# word stays quiet, which keeps a column of nine no replies from reading as a
# wall of red.
def reply_chip($v):
  (if $v == "yes" then "#6b8b64" else "#b3705e" end) as $ink
  | (if $v == "yes" then "&#10003;" else "&#10007;" end) as $glyph
  | (if $v == "yes" then "Replied" else "No reply" end) as $word
  | "<span style=\"color:" + $ink + ";font-weight:600;\">" + $glyph + "</span>"
    + "<span style=\"color:#8a8272;\">&#160;" + $word + "</span>";

def touch_text($n):
  ($n|tostring) as $s
  | if $s == "1" then "1 touch" else $s + " touches" end;

def section_label($text):
  "<div style=\"" + mono + "font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#8a8272;padding:30px 0 10px 0;\">" + ($text|esc) + "</div>";

def sub_label($text):
  "<div style=\"" + mono + "font-size:11px;letter-spacing:0.8px;text-transform:uppercase;color:#151515;padding:22px 0 10px 0;\">" + ($text|esc) + "</div>";

def para($text; $color):
  "<p style=\"" + sans + "font-size:15px;line-height:1.55;color:" + $color + ";margin:16px 0 0 0;\">" + ($text|esc) + "</p>";

def empty_line($text):
  "<p style=\"" + sans + "font-size:14px;color:#8a8272;margin:0;" + rule + "padding-top:12px;\">" + $text + "</p>";

# ---------- the stacked list ----------
# One record per block rather than per row. A block can wrap at any width
# without a column collapsing, which is the whole reason the tables went.

def stack_row($inner; $first):
  (if $first then "" else hair end) as $top
  | "<tr><td style=\"padding:12px 0 11px 0;" + $top + "\">" + $inner + "</td></tr>";

def stack_table(items):
  "<table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"border-collapse:collapse;" + rule + "\">"
  + (items | to_entries | map(stack_row(.value; .key == 0)) | join(""))
  + "</table>";

def wrap_row($cells):
  "<table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"border-collapse:collapse;\"><tr>" + $cells + "</tr></table>";

# A headline cell and a right aligned tag, pushed to opposite edges of the
# block. The two never meet in the middle, so the eye can run straight down
# either margin.
def head_line($left; $right):
  wrap_row(
    "<td style=\"" + sans + "font-size:15px;font-weight:500;line-height:1.35;color:#151515;padding-right:10px;vertical-align:baseline;\">" + $left + "</td>"
    + (if $right == "" then ""
       else "<td align=\"right\" style=\"" + mono + "font-size:12px;line-height:1.5;white-space:nowrap;vertical-align:baseline;\">" + $right + "</td>"
       end));

# The date holds the left margin and the name takes the right, so a stack of
# rows reads as two aligned columns rather than one ragged line.
def edge_line($day; $name):
  wrap_row(
    "<td style=\"" + mono + "font-size:12px;color:#8a8272;vertical-align:baseline;padding-right:10px;white-space:nowrap;\">" + ($day|esc) + "</td>"
    + "<td align=\"right\" style=\"" + sans + "font-size:15px;font-weight:500;line-height:1.35;color:#151515;vertical-align:baseline;\">" + ($name|esc) + "</td>");

# Facts laid out on a grid across the full width. Spacing does the separating,
# so nothing needs a punctuation mark between the columns. The last column is
# right aligned in both grids: it is the one every row carries, so anchoring it
# to the right edge gives the block two clean margins instead of one.
def grid_cell($html; $width; $align):
  "<td width=\"" + $width + "\" align=\"" + $align + "\" style=\"" + mono + "font-size:12px;line-height:1.5;color:#8a8272;padding-top:6px;vertical-align:top;\">" + $html + "</td>";

def grid4($values):
  wrap_row(
    ($values | to_entries
     | map(grid_cell(.value; "25%"; (if .key == 3 then "right" else "left" end)))
     | join("")));

def grid3($values):
  ["40%", "30%", "30%"] as $w
  | ["left", "center", "right"] as $a
  | wrap_row(
      ($values | to_entries
       | map(grid_cell(.value; $w[.key]; $a[.key]))
       | join("")));

# ---------- movement ----------
# The detail arrives as one comma joined string of two to four facts. Each is
# routed to the quarter its unit belongs to rather than filling from the left,
# so time sits under time and heart rate under heart rate whether or not the
# session also carried a distance. A lift leaves the distance and elevation
# columns empty, which is the truth about a lift.
#
# Duration takes the last column and the right edge, out of unit order, because
# it is the one fact every session has: a lift with nothing else to report
# still lands on the margin instead of floating in the middle of the row.
# Anything unrecognized joins the heart rate column rather than being dropped.
def slot($x):
  if ($x | endswith(" mi")) then 0
  elif ($x | endswith(" ft")) then 1
  elif ($x | endswith(" min")) then 3
  else 2 end;

def detail_cells($s):
  ($s | tostring | split(", ")) as $p
  | reduce $p[] as $x (["", "", "", ""];
      slot($x) as $i
      | .[$i] = (if .[$i] == "" then $x else .[$i] + " " + $x end))
  | map(esc);

def move_item(r):
  edge_line(r.day; r.session)
  + grid4(detail_cells(r.detail));

# ---------- overconsumption ----------
def takeout_item(r):
  edge_line(r.day; r.vehicle);

# ---------- coverage ----------
# The one shape that stays a table, because a label and two small numbers fit
# any phone. Ungraded, the miss colour marks only a target missed outright,
# because a partial week is still a week, and a row with no target never earns
# it at all. Graded, every row carrying a target is scored: met or beaten reads
# green, short reads red. A value that is not a number cannot be compared, so
# it stays neutral rather than inventing a verdict.
def coverage_ink($logged; $target; $graded):
  ($logged|tostring) as $l
  | ($target|tostring) as $t
  | (try ($l|tonumber) catch null) as $ln
  | (try ($t|tonumber) catch null) as $tn
  | if $t == "" then "#151515"
    elif $graded then
      (if $ln == null or $tn == null then "#151515"
       elif $ln >= $tn then "#6b8b64"
       else "#b3705e" end)
    elif $l == "0" then "#b3705e"
    else "#151515"
    end;

def cov_head($text; $align; $width):
  "<td align=\"" + $align + "\"" + (if $width == "" then "" else " width=\"" + $width + "\"" end)
  + " style=\"" + mono + "font-size:11px;letter-spacing:0.8px;text-transform:uppercase;color:#8a8272;padding:0 0 9px 0;\">" + $text + "</td>";

def coverage_row($name; $logged; $target; $graded):
  coverage_ink($logged; $target; $graded) as $ink
  | "<tr>"
    + "<td style=\"" + sans + "font-size:15px;font-weight:500;color:#151515;padding:11px 8px 10px 0;vertical-align:top;line-height:1.35;" + hair + "\">" + ($name|esc) + "</td>"
    + "<td align=\"right\" width=\"64\" style=\"" + mono + "font-size:14px;font-weight:500;color:" + $ink + ";padding:11px 0 10px 0;vertical-align:top;white-space:nowrap;" + hair + "\">" + ($logged|esc) + "</td>"
    + "<td align=\"right\" width=\"64\" style=\"" + mono + "font-size:14px;color:#8a8272;padding:11px 0 10px 0;vertical-align:top;white-space:nowrap;" + hair + "\">" + ($target|esc) + "</td>"
    + "</tr>";

def coverage_table($first_head; rows; $graded):
  "<table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"border-collapse:collapse;\">"
  + "<tr>" + cov_head($first_head; "left"; "") + cov_head("Logged"; "right"; "64") + cov_head("Target"; "right"; "64") + "</tr>"
  + (rows | map(coverage_row(.a; .b; .c; $graded)) | join(""))
  + "</table>";

# ---------- leads ----------
# Status, what happened this week, and the running touch count on the same
# three column grid in both lead tables, so the two read as one list. A
# disqualification reason rides under the status it belongs to rather than
# claiming a column that stands empty for every open lead.
def lead_item(r):
  head_line(r.company|esc; reply_chip(r.replied))
  + grid3([
      (r.status|titlecase|esc)
      + (if (r.reason // "") != ""
         then "<div style=\"color:#a39a88;padding-top:2px;\">" + (r.reason|titlecase|esc) + "</div>"
         else "" end),
      (r.kind|titlecase|esc),
      touch_text(r.touches)
    ]);

def lead_block($heading; rows; $empty):
  sub_label($heading)
  + (if (rows|length) > 0 then stack_table(rows | map(lead_item(.))) else empty_line($empty) end);

# ---------- deals ----------
# A deal carries seven figures, which is three columns too many for a phone.
# It becomes a card instead: the company and its status on top, then the money
# as label and value pairs that can never run off the right edge.
def deal_line($k; $v; $top; $strong):
  "<tr>"
  + "<td style=\"" + sans + "font-size:13px;color:#8a8272;padding:7px 0 6px 0;vertical-align:top;" + $top + "\">" + $k + "</td>"
  + "<td align=\"right\" style=\"" + mono + "font-size:14px;font-weight:" + (if $strong then "600" else "500" end) + ";color:" + money_ink($v) + ";padding:7px 0 6px 0;vertical-align:top;white-space:nowrap;" + $top + "\">" + ($v|esc) + "</td>"
  + "</tr>";

def deal_card(r):
  "<table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"background:#f8f4ea;border:1px solid #ece8de;border-radius:12px;\"><tr><td style=\"padding:16px 16px 14px 16px;\">"
  + "<div style=\"" + sans + "font-size:16px;font-weight:600;line-height:1.3;color:#151515;\">" + (r.company|esc) + "</div>"
  + "<div style=\"" + mono + "font-size:12px;letter-spacing:0.6px;text-transform:uppercase;color:" + stage_ink(r.stage) + ";padding-top:5px;\">" + (r.stage|esc) + "</div>"
  + "<table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"border-collapse:collapse;margin-top:12px;\">"
  + deal_line("Build"; r.build; ""; false)
  + deal_line("Operate"; r.operate; hair; false)
  + deal_line("Trade"; r.trade; hair; false)
  + deal_line("Cash"; r.cash; rule; false)
  + deal_line("Total"; r.total; hair; true)
  + "</table>"
  + "</td></tr></table>";

def deal_block($heading; rows; $empty):
  sub_label($heading)
  + (if (rows|length) > 0
     then (rows | to_entries | map((if .key == 0 then "" else "<div style=\"height:12px;line-height:12px;\">&#160;</div>" end) + deal_card(.value)) | join(""))
     else empty_line($empty) end);

. as $r
| ($week | split("-W") | .[1] | ltrimstr("0")) as $weeknum
| "<!doctype html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">"
  + "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap\">"
  + "<title>" + ($week|esc) + " Retro</title></head>"
  + "<body style=\"margin:0;padding:0;background:#f6f1e7;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;\">"
  + "<table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"background:#f6f1e7;\"><tr><td align=\"center\" style=\"padding:24px 12px;\">"
  + "<table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"600\" style=\"max-width:600px;width:100%;background:#fdfbf6;border:1px solid #ece8de;border-radius:16px;\"><tr><td style=\"padding:28px 20px 26px 20px;\">"

  # header: the week, and the range it covers beneath it. Side by side, the
  # range crowded the title off the screen on a phone.
  + "<div style=\"" + sans + "font-size:34px;font-weight:600;line-height:1.1;letter-spacing:-0.8px;color:#151515;\">Week <span style=\"color:#fc4a1a;\">" + ($weeknum|esc) + "</span></div>"
  + "<div style=\"" + mono + "font-size:12px;color:#8a8272;padding-top:7px;\">" + ($monday|esc) + " to " + ($sunday|esc) + "</div>"

  # headline
  + "<div style=\"" + sans + "font-size:17px;font-weight:300;line-height:1.5;color:#55503f;margin-top:18px;\">" + ($r.headline|esc) + "</div>"

  # movement
  + section_label("Movement")
  + (if ($r.movement|length) > 0
     then stack_table($r.movement | map(move_item(.)))
     else empty_line("Nothing logged in Strava this week.") end)
  + section_label("Coverage")
  + coverage_table("Modality"; ($r.coverage | map({a: .modality, b: (.logged|tostring), c: (.target|tostring)})); false)
  + para($r.movement_read; "#151515")

  # overconsumption
  + section_label("Overconsumption")
  + (if ($r.takeout|length) > 0
     then stack_table($r.takeout | map(takeout_item(.)))
     else empty_line("No takeout orders this week.") end)
  + para($r.takeout_read; "#151515")

  # atelic
  + section_label("Atelic")
  + deal_block("Deals"; ($r.atelic.opportunities // []); "No deal moved this week.")
  + lead_block("Open Leads"; ($r.atelic.open_leads // []); "No lead was touched this week.")
  + lead_block("Closed Leads"; ($r.atelic.closed_leads // []); "Nothing closed this week.")
  + sub_label("The Week")
  + coverage_table("Measure"; (($r.atelic.coverage // []) | map({a: .measure, b: (.logged|tostring), c: (.target|tostring)})); true)
  + para($r.atelic_read; "#151515")

  # blind spots
  + section_label("Blind Spots")
  + "<p style=\"" + sans + "font-size:15px;line-height:1.55;color:#55503f;margin:0;" + rule + "padding-top:14px;\">" + ($r.blind_spots|esc) + "</p>"

  # footer
  + "<div style=\"margin-top:34px;border-top:1px solid #ece8de;padding-top:16px;\">"
  + "<div style=\"" + mono + "font-size:11px;line-height:1.6;color:#8a8272;\">Drafted by Claude for the planning session</div>"
  + "<div style=\"" + mono + "font-size:11px;line-height:1.6;color:#8a8272;\">Strava, Gmail, HubSpot</div>"
  + "</div>"

  + "</td></tr></table>"
  + "</td></tr></table></body></html>"
