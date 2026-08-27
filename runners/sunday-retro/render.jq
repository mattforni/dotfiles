# Renders the retro JSON into the Sunday Retro email: the atelic.me voice
# (Geist, cream, one orange accent) as Gmail safe table markup with every
# style inline. Invoked by entrypoint.sh as
#   jq -r --arg week ... --arg monday ... --arg sunday ... -f render.jq retro.json
# Design source: the Sunday Retro Email canvas, 2026-08-27.

def esc: tostring | gsub("&"; "&amp;") | gsub("<"; "&lt;") | gsub(">"; "&gt;");

def mono: "font-family:'Geist Mono',Menlo,Consolas,monospace;";
def sans: "font-family:Geist,'Helvetica Neue',Helvetica,Arial,sans-serif;";
def hair: "border-top:1px solid #ebe6db;";
def rule: "border-top:1px solid #d9d4c8;";

def section_label($text):
  "<div style=\"" + mono + "font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#8a8272;padding:28px 0 10px 0;\">" + ($text|esc) + "</div>";

def para($text; $color):
  "<p style=\"" + sans + "font-size:15px;line-height:1.55;color:" + $color + ";margin:16px 0 0 0;\">" + ($text|esc) + "</p>";

# Three column rows: mono day, bold name, soft detail. $muted greys the row.
def row3($a; $b; $c; $muted; $first):
  (if $first then "" else hair end) as $top
  | (if $muted then "#8a8272" else "#151515" end) as $ink
  | (if $muted then "#8a8272" else "#55503f" end) as $soft
  | "<tr>"
    + "<td style=\"" + mono + "font-size:12px;color:#8a8272;padding:11px 8px 9px 0;vertical-align:top;white-space:nowrap;" + $top + "\">" + ($a|esc) + "</td>"
    + "<td style=\"" + sans + "font-size:14px;font-weight:500;color:" + $ink + ";padding:11px 8px 9px 0;vertical-align:top;" + $top + "\">" + ($b|esc) + "</td>"
    + "<td style=\"" + sans + "font-size:14px;color:" + $soft + ";padding:11px 0 9px 0;vertical-align:top;" + $top + "\">" + ($c|esc) + "</td>"
    + "</tr>";

def table3(rows):
  "<table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"border-collapse:collapse;" + rule + "\">"
  + (rows | to_entries | map(row3(.value.a; .value.b; .value.c; .value.muted; .key == 0)) | join(""))
  + "</table>";

def coverage_head($text):
  "<td style=\"" + mono + "font-size:11px;letter-spacing:0.8px;text-transform:uppercase;color:#8a8272;padding:10px 8px 8px 0;\">" + $text + "</td>";

def coverage_row(r):
  (if ((r.logged|tostring) == "0" or (r.logged|tostring) == "no") then "#d63a10" else "#55503f" end) as $logged_color
  | "<tr>"
    + "<td style=\"" + sans + "font-size:14px;font-weight:500;color:#151515;padding:10px 8px 8px 0;vertical-align:top;" + hair + "\">" + (r.modality|esc) + "</td>"
    + "<td style=\"" + mono + "font-size:13px;color:#55503f;padding:10px 8px 8px 0;vertical-align:top;white-space:nowrap;" + hair + "\">" + (r.target|esc) + "</td>"
    + "<td style=\"" + mono + "font-size:13px;color:" + $logged_color + ";padding:10px 8px 8px 0;vertical-align:top;white-space:nowrap;" + hair + "\">" + (r.logged|esc) + "</td>"
    + "<td style=\"" + sans + "font-size:14px;color:#55503f;padding:10px 0 8px 0;vertical-align:top;" + hair + "\">" + (r.read|esc) + "</td>"
    + "</tr>";

def coverage_table(rows):
  "<table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"border-collapse:collapse;" + rule + "\">"
  + "<tr>" + coverage_head("Modality") + coverage_head("Target") + coverage_head("Logged") + coverage_head("Read") + "</tr>"
  + (rows | map(coverage_row(.)) | join(""))
  + "</table>";

def done_row(r; $first):
  (if $first then "" else hair end) as $top
  | "<tr>"
    + "<td style=\"" + mono + "font-size:12px;color:#8a8272;padding:11px 8px 9px 0;vertical-align:top;white-space:nowrap;" + $top + "\">" + (r.theme|esc) + "</td>"
    + "<td style=\"" + sans + "font-size:14px;color:#151515;padding:11px 0 9px 0;vertical-align:top;" + $top + "\">" + (r.item|esc) + "</td>"
    + "</tr>";

def done_table(rows):
  "<table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"border-collapse:collapse;" + rule + "\">"
  + (rows | to_entries | map(done_row(.value; .key == 0)) | join(""))
  + "</table>";

def empty_line($text):
  "<p style=\"" + sans + "font-size:14px;color:#8a8272;margin:12px 0 0 0;" + rule + "padding-top:12px;\">" + $text + "</p>";

def mark:
  "<svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" aria-hidden=\"true\"><text x=\"2\" y=\"19\" font-family=\"Geist, Helvetica, Arial, sans-serif\" font-size=\"22\" font-weight=\"600\" fill=\"#151515\">a</text><path d=\"M3 23 Q 13 20 23 23\" stroke=\"#fc4a1a\" stroke-width=\"2.4\" fill=\"none\" stroke-linecap=\"round\"></path></svg>";

. as $r
| ($week | split("-W") | .[1] | ltrimstr("0")) as $weeknum
| "<!doctype html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width\">"
  + "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap\">"
  + "<title>" + ($week|esc) + " Retro</title></head>"
  + "<body style=\"margin:0;padding:0;background:#f6f1e7;\">"
  + "<table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"background:#f6f1e7;\"><tr><td align=\"center\" style=\"padding:40px 16px;\">"
  + "<table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"760\" style=\"max-width:760px;width:100%;background:#fdfbf6;border:1px solid #ece8de;border-radius:20px;\"><tr><td style=\"padding:36px 44px;\">"

  # header
  + "<table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\"><tr>"
  + "<td style=\"vertical-align:middle;\"><table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td style=\"padding-right:10px;vertical-align:middle;\">" + mark + "</td>"
  + "<td style=\"" + mono + "font-size:12px;letter-spacing:1.2px;text-transform:uppercase;color:#55503f;vertical-align:middle;\">Sunday Retro</td></tr></table></td>"
  + "<td align=\"right\" style=\"" + mono + "font-size:12px;color:#8a8272;vertical-align:middle;\">" + ($monday|esc) + " to " + ($sunday|esc) + "</td>"
  + "</tr></table>"

  # title
  + "<div style=\"" + sans + "font-size:40px;font-weight:600;line-height:1.05;letter-spacing:-1px;color:#151515;padding-top:30px;\">Week <span style=\"color:#fc4a1a;\">" + ($weeknum|esc) + "</span></div>"
  + "<div style=\"" + sans + "font-size:17px;font-weight:300;line-height:1.45;color:#55503f;margin-top:12px;\">" + ($r.headline|esc) + "</div>"

  # movement
  + section_label("Movement")
  + (if ($r.movement|length) > 0
     then table3($r.movement | map({a: .day, b: .session, c: .detail, muted: false}))
     else empty_line("Nothing logged in Strava this week.") end)
  + section_label("Coverage")
  + coverage_table($r.coverage)
  + para($r.movement_read; "#151515")

  # overconsumption
  + section_label("Overconsumption")
  + (if ($r.takeout|length) > 0
     then done_table($r.takeout | map({theme: .day, item: .vehicle}))
     else empty_line("No takeout orders this week.") end)
  + para($r.takeout_read; "#151515")

  # done
  + section_label("Done")
  + (if ($r.done|length) > 0
     then done_table($r.done)
     else empty_line("No completed tasks worth naming.") end)

  # blind spots
  + section_label("Blind Spots")
  + "<p style=\"" + sans + "font-size:15px;line-height:1.55;color:#55503f;margin:0;" + rule + "padding-top:14px;\">" + ($r.blind_spots|esc) + "</p>"

  # footer
  + "<table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" width=\"100%\" style=\"margin-top:36px;border-top:1px solid #ece8de;\"><tr>"
  + "<td style=\"" + mono + "font-size:11px;color:#8a8272;padding-top:16px;\">Drafted by Claude for the Sunday session</td>"
  + "<td align=\"right\" style=\"" + mono + "font-size:11px;color:#8a8272;padding-top:16px;\">Strava, Gmail, Todoist</td>"
  + "</tr></table>"

  + "</td></tr></table>"
  + "</td></tr></table></body></html>"
