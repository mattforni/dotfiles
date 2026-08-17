---
name: report-unemployment
description: File the weekly Colorado unemployment payment request in MyUI+ from the FY27 work search log. Builds the reportable activity slate for the just ended claim week, drives MyUI+ through agent-browser attached to Forni's real Brave, walks the weekly payment request screens, and stops hard at both certifications for Forni's explicit yes. Use whenever Forni says "report unemployment", "request UI payment", "file the weekly claim", "MyUI+", mentions the Monday payment request task, or invokes /assist:report-unemployment. The unemployment-claimer agent carries this method for background dispatch.
---

# Report Unemployment

The weekly motion that turns the work search log into a filed MyUI+ payment request. The log is already kept in audit shape; this skill moves the week into the state system and captures the confirmation trail. The `unemployment-claimer` agent runs this method in the background and bails to Forni at every gate; run it inline when Forni wants to drive together.

## Where Truth Lives

- **The log**: `~/Eudaimonia/Craft/Vocation/FY27-work-search.md`. Weekly sections in MyUI+ audit shape. The slate comes from here, and the confirmation number goes back here.
- **The claim**: `~/Eudaimonia/Constitution/Financial/FY27-unemployment.md`. Claimant ID, effective date, benefit year end.
- **The task**: Todoist "💰 Request UI Payment in MyUI+", recurring every Monday at 17:00. Completing it after submission is the last step.
- **The site**: the [MyUI+ claimant portal](https://myui.clouduim.cdle.state.co.us/Claimant/Core/Login.ASPX), sign in via ID.me. System hours 04:00 to 19:00 MT, nightly processing 22:00 to 03:00 MT.

## The Slate

Claim weeks run Sunday through Saturday; the Monday task files for the week that ended two days earlier. Pull the matching week section from the log and keep only what was genuinely completed:

- **Applications actually submitted** report as job applications with outcome Applied.
- **Supporting activities** (listings reviews, job platform registrations and profiles) report with outcome No Decision.
- **Excluded**: postings that closed before anything went out, roles declined on fit, anything still in flight. If it would not survive an audit, it stays off.
- The cadence targets five activities (three applications plus two supporting, per the FY27 plan). Fewer than five is reported honestly, never padded.

## Browser Mechanics

The agent-browser bundled Chromium cannot pass the ID.me Cloudflare challenge, headed or not; the check spins forever on the automation fingerprint. Attach to Forni's real Brave instead:

1. Quit Brave gracefully (`osascript -e 'quit app "Brave Browser"'`) and wait for the process to exit.
2. Relaunch with the port: `open -a "Brave Browser" --args --remote-debugging-port=9222 --restore-last-session`.
3. Verify the port with `curl -s http://localhost:9222/json/version`, then confirm Brave itself owns it with `lsof -nP -i :9222 | grep LISTEN`. Do not check the JSON's `Browser` field: Brave is Chromium and reports `Chrome/<version>` there, never its own name, so that test can only ever fail. A listener that is not Brave means a stale process holds the port, so stop rather than attach. Then `agent-browser --session myui connect 9222`.
4. Open MyUI+ in a new tab and pin it (`tab new <url>`, `tab list`, `tab <id> --pin-tab`). Unpinned, the session follows whatever tab Forni focuses.

If a fresh ID.me login or MFA is needed, hand the keyboard to Forni and wait. An existing session redirects the login URL straight into the claimant flow.

## The Flow

Nothing on this site responds reliably to a snapshot ref click; drive every control by DOM id, and read the section and error state rather than trusting a reported success. Ids and the entry path are in [learned-rules.md](learned-rules.md).

1. **Confirm the week.** Start from My Claim Status and open the specific week row whose dates match the slate, not a generic start button. Only one week is ever certifiable, and the next week's row shows the date it opens.
2. **Basic Questions are Forni's answers** (work, earnings, offers, able, available). Inline, walk them with him; a background run bails to the main session the moment the section is not already Complete, per the agent contract. Forni may hand the whole section over ("I trust you to answer these"), and most of it genuinely is derivable from the record: offers, refusals, quits, discharges, layoffs, holidays, able, available, and work search all follow from the log and the week. **Two never are, no matter how broad the authorization: whether he worked (self employment counts, so any Atelic work is work) and whether he received severance, retirement pay, 401(K), or pension.** Only he knows those, a wrong answer is a false certification under penalty of perjury, and a blanket yes does not create knowledge. Ask those two, answer the rest, and say which is which.
3. **Activity count**: select the radio matching the slate size (Five or More at cadence).
4. **One form per activity**, saved individually. Field ids, dropdown mapping, and the ASPX gotchas live in [learned-rules.md](learned-rules.md). Verify each save by the numbered activity list growing.
5. **Work Search Plan** checkboxes describe the coming week's intent: inquire online, apply online, interview online and by phone, other activities.
6. **GATE: work search certification.** Checkbox plus initials (MGF), then FINISH. Requires Forni's explicit yes in that moment.
7. **Summary readback.** Read every section back to Forni in full: Basic Questions answers, all activities, the plan.
8. **GATE: penalty of perjury certification and Submit.** Requires Forni's explicit yes in that moment. Two gates, two yeses; never batch them.
9. **Capture and close.** Record the confirmation number, submitted week, and timestamp. Inline, append a confirmation line to the week's section in the log; a background run reports the number and leaves the append to the main session. Complete the Todoist task and report the number.

## Activity Type Mapping

| Log activity | MyUI+ type of activity option |
|---|---|
| Application submitted | Completed a job application in person, by mail, or online with an employer who may reasonably be expected to have openings for suitable work. |
| Listings or alert review | Reviewed job listings on the internet, newspapers or professional journals. |
| Job platform registration, profile, or resume upload | Used online job matching systems, including Connecting Colorado, to submit applications/resumes, search for matches or request referrals, and/or apply for jobs. |
| Networking conversation | Networked with colleagues or friends. |
| Interview or screen | Interviewed with a potential employer in person or by telephone. |

Contact method is Online for the standard motion. Contact information takes the posting URL. Position title and platform go in Additional Information; the form has no position field.
