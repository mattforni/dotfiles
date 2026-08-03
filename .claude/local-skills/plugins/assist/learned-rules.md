# Learned Rules

Rules added from triage corrections. Read on every invocation. These override default rules in reference/triage-rules.md.

## Sender Rules

- `heather.frechette@gmail.com` (Heather Frechette, HNGC secretary) -> 🍏 Constitution/🍾 Sobriety. Auto-reply "Thank you for your service! 🙏", then label and archive. HNGC = High Noon Group Conscience (AA home group business meeting).
- `info@bluesprucemaids.com` (Blue Spruce Maids cleaning reminders) -> 🍏 Constitution/🧖 Personal Care. Mark read, archive. Recurring 7-day cleaning reminders.
- `EnergyReport@xcelenergy.com` (Xcel Home Energy Report, usage marketing email distinct from actual Xcel bills) -> Informational only. Unsubscribe (URL only, no mailto) and archive without label. The actual Xcel utility bill goes to Bills; this monthly usage/marketing report has no value to keep.
- `dor_taxreminder-state.co.us@shared1.ccsend.com` (Colorado Department of Revenue withholding tax reminders) -> 🍏 Constitution/💰 Financial/💸 Taxes. Forni files a $0 return for these. Label, mark read, archive.
- `UHC@benefits.unitedhealthcare.com` with "UHC Rewards" subject -> 🍏 Constitution/🏥 Benefits + GREEN_STAR. Action: enroll in rewards program ($1000 potential). Keep in inbox until enrolled.
- `prime@amazon.com` membership change confirmations (renewal, cancellation) -> 📑 Admin/🛒 Purchases. Mark read, archive.
- `support@email.mill.com` (Mill food waste device) -> 📑 Admin/🛒 Purchases. Mark read, archive.
- `*@coestatematters.com` (Colorado Estate Matters, estate planning attorney) -> 🍏 Constitution/💰 Financial/📜 Trust (NOT Financial parent). Route to Phase 4 for manual review; auto-archive patterns will codify once enough subject lines are observed.
- `askme@blackblum.com` (Black+Blum houseware) -> 📑 Admin/🛒 Purchases. A brand "Thank you!" is usually a post-purchase receipt, not a promo, even with an unsubscribe header. Label Purchases, archive. Confirmed 2026-07-17.
- `cdle_ui-alerts@state.co.us` and any CDLE / Colorado Division of Unemployment Insurance correspondence (`*@state.co.us` UI notices: inactive-claim notices, reopen confirmations, determination letters, payment/certification alerts) -> label all three: 📑 Admin/🏛️ Government (Label_8590681278241891702) + 🍏 Constitution/💰 Financial (Label_13) + 🛠️ Craft/💼 Vocation (Label_8835009841782117271), then archive. Forni will receive many of these while the CO unemployment claim is active. The notices link to a portal (ColoradoUI.gov / MyUI+) and often don't name the document; the actual PDF is a download (lands in ~/Downloads as `<correspondenceID>.pdf` or `OpenFileDialog.pdf`). Standing obligation: the claim goes inactive if weekly certifications lapse; if a notice indicates inactivity, surface it as actionable (reopen at MyUI+). Working record: `~/Eudaimonia/Constitution/Financial/2026-unemployment.md`. Codified 2026-07-21.
- `do-not-reply@denvergov.org` "Denver Tax Return(s)/Charge Form(s) Now Available" -> the monthly **Denver OPT (Occupational Privilege Tax)** notice for RELIABLY YOURS LLC. It is a **$0 return** filed by hand in the eBiz Tax Center each month payroll is paused (the notice never names the period; only the portal does). How-to and filing log: RYLLC README "Denver OPT". Defer (create a follow-up to file), label 🍏 Constitution/💰 Financial/💸 Taxes, and **keep in inbox (with a star) until the $0 return is filed, then archive and clear stars** (do not archive the notice while filing is still pending). Only the paired "Received: Denver OPT Return (Period Ending ...)" confirmation is archive-on-sight: label Taxes, archive.

- `rino@movementgyms.com` (Movement RiNo booking confirmations) -> trash on sight. Forni declined a skip-inbox filter and does not want these kept; no email-level unsubscribe exists (transactional). Killing them at the source means Movement account notification settings. 2026-07-24.
- `marketing@movementgyms.com` (Movement marketing) -> unsubscribed 2026-07-24 via portal link + trash. If more arrive, the unsubscribe did not stick; re-unsubscribe and trash.
- `info@atlasptco.ccsend.com` (Atlas Physical Therapy newsletter, Constant Contact) -> unsubscribed 2026-07-24 + trash. Audited for Atelic prospect fit 2026-07-24: weak to medium (strong existing web presence, only narrow booking-funnel gaps); Forni chose not to add to HubSpot. Do not re-audit unless he asks.
- `xcelenergy@email.opower.com` "Energy Action Day" (pre_peak_time opower stream, distinct from the Home Energy Report rule below in spirit) -> unsubscribe (URL only) + trash. Unsubscribed 2026-07-24.
- `gustonoreply@gusto.com` severance installment paydays (Zero Home Corporation): file the paystub PDF (Forni downloads it to ~/Downloads) to Drive folder `Compensation` (id `16YgL6ZhzIwkIo7vMn2HLW0Rz3v6Go7L_`) as `YYYY-MM-DD - Severance Paystub.pdf`, link it in a comment on the MyUI+ severance reporting task, then label Vocation + Financial and archive. 2026-07-24.

## Topic Rules

- **Home buying (purchase, mortgage, title, closing) is NOT Home Improvement.** Home purchase correspondence goes under 🍏 Constitution/💰 Financial + 🤝 Community/🏙️ Cities/🌇 Denver. The 🛠️ Craft/🏡 Home Improvement label is for actual improvement work (renovations, fixtures, tools), not the transaction of buying the home. Senders this applies to: NEO Home Loans, Trelora (greg@trelora.com), CTM eContracts, Land Title Guarantee Company, seller (Matt Bigelow), inspection vendors, HO6 insurance for the unit.

## Subject Rules

- **Pure marketing promos default to unsubscribe + trash, not archive.** A bare newsletter/offer with an unsubscribe header and no personal value gets the unsubscribe sent and the message trashed. Only keep (label + archive) when the sender is genuinely wanted, or when the "promo" is actually a receipt (see Black+Blum in Sender Rules). Confirmed 2026-07-17.

## Behavior Rules

- **CRITICAL: Check the actual system time before writing time-of-day greetings.** Do not assume morning/afternoon/evening. Run `date` or check the clock. This has caused errors in sent emails that cannot be corrected.
- When someone asks for availability to schedule a call/meeting, default to sharing the Reclaim scheduling link rather than proposing specific time slots. It's simpler and always up to date.
- When the user has reviewed and approved email drafts, send them directly if asked. Do not insist on creating drafts first. The review already happened in conversation.
- **The rule above does not extend to prospective or current clients.** For those, re-confirm on the final rendered email at send time regardless of prior conversational approval. The DCTC send (2026-07-20) went out on the words "go ahead and send it right now" when the intent was "schedule the send block"; the cost of one extra confirmation is always smaller than an unintended send.
- Stars mean action is needed from the user. Do not star informational emails. When in doubt whether an email needs action, read the full content first before assigning a star. A 1099 "available online" notice is informational (Coinbase handles it), not an action item.
- **When presenting an email for a triage decision, show the email itself.** Include a clickable Gmail link (`https://mail.google.com/mail/?authuser=<account>#search/rfc822msgid%3A<url-encoded-Message-ID>`, which is account-safe and tab-safe) and, when the decision depends on content, `open` that URL in the browser and/or quote the full body inline. Forni cannot decide on a paraphrase alone; "I can't tell you unless you show me the email." Codified 2026-07-22.
- **Email triage is strictly one email at a time. Never batch auto-process; never present a consolidated bulk triage plan.** Even when Forni says "get them all out of there," "clear them all," or similar, that phrasing means he wants to move efficiently, not that he is delegating the decisions. Present each email individually (sender, subject, what it is, proposed action), wait for his call, execute, then move to the next. The only safe pre-action is reading and classifying; every label / star / archive / trash decision is his, one at a time. **This supersedes Phase 2 (Silent Auto-Process)** — surface even high-confidence purchases one at a time rather than pre-processing them.

  **Why:** Codified 2026-06-01. Opened a triage session by auto-processing two purchases and presenting a grouped plan-table for ~21 emails with bulk-approve questions. Forni: "undo everything you did with the emails. I need you to consult with me first. This was not useful." After reverting, he said "One email at a time."

  **Amended 2026-08-02 (clerk proposal boards):** the one at a time rule governs decisions, not presentation. The clerk agent now pulls every inbox thread and returns one fully specified proposed disposition per thread, marked ✓ (rule backed) or ? (judgment). Forni reviews the whole board, corrects any rows, and the main session executes only the corrected board. That review pass replaces sequential per email questioning for ✓ proposals; ? items, outbound sends, and unsubscribes from possibly wanted senders still get an explicit question each. Auto processing before Forni's pass remains forbidden. Forni: clerk "should make suggestions that we can then just act upon or correct."
- **Star semantics (governing rule, applies to BOTH personal and work inboxes; supersedes the green/yellow definitions in triage-rules.md).** The star answers "who has the ball":
  - 🟡 **YELLOW_STAR** = waiting on *us* — we owe the next move (a reply or an action we're responsible for).
  - 🟢 **GREEN_STAR** = waiting on *someone else*, kept in inbox to track / keep in scope.
  - 🔴 **RED_STAR** = same as yellow (waiting on us) but urgent or overdue.
  - **No star + archive** when nothing needs tracking.
  - **Always strip every star when archiving** (archived = unstarred). Pass the full star set in `removeLabelIds` on archive: `STARRED`, `YELLOW_STAR`, `GREEN_STAR`, `RED_STAR`. (In Forni's Google Workspace accounts these colored-star IDs are exposed as **system labels** and work in both `addLabelIds` and `removeLabelIds` via gws — confirmed in use. This differs from consumer Gmail, where colored stars are undocumented `^ss_` IDs; do not "simplify" this rule to `STARRED`-only.)

## Domain Rules

- Precedence: apply exact sender rules first; apply these wildcard domain rules second for known high-confidence automations.
- `*@gusto.com` -> 🛠️ Craft/💼 Vocation; if about getting paid, also 🍏 Constitution/💰 Financial. Archive.
- `*@getsentry.com` (Sentry) -> 🛠️ Craft/💻 Development. Weekly reports: mark read, archive. Individual issue alerts: GREEN_STAR, keep in inbox.
- `*@email.claude.com` (Claude Team) -> 🛠️ Craft/💻 Development. Archive. Also add link to Notion AI Research page (3326231ededc809caebdd0c8dc22297d) under "# Claude Team Emails" heading. Link title = email subject.
- `*@billerpayments.com` (DHMP/Denver Health) -> 🍏 Constitution/🏥 Healthcare. Archive.
- Anthem Blue Cross (`*@anthem.com`) -> 🍏 Constitution/🏥 Healthcare + 📑 Admin/🧾 Bills. Autopay, archive.

## Todoist Rules

- When triaging notes/bookmarks that get moved to their proper location (Notion, Eudaimonia, etc.), delete the Todoist task. Do not complete it. These were never real tasks.
- Task titles: emoji prefix + short linked title (e.g., "📧 [Follow Up with Jeff](link)"). Details go in a comment, not the description.

## Calendar Rules

- Never move, reschedule, or delete existing calendar events without explicit permission. Always present the proposed change and wait for approval.
- Events booked via Reclaim.ai scheduling links were scheduled by other people. Extra caution required.
- Deleting or moving adjacent events can cause Reclaim to auto-reschedule nearby flexible events as a side effect. Warn about this.
- **Never schedule an event over a transition block.** Transitions exist to hold that space; placing an errand or event on top of one defeats the point. Find the next clear slot after the transition instead. Codified 2026-08-02 after a Sprouts run was placed over the post High Noon transition.

## Slotting Rules

- **Mornings are for deep work only; lighter cognitive tasks slot to afternoons.** The 07:30 to 11:00 morning window (anchors shortened 2026-08-02: routine 06:00 to 07:00, transition 07:00 to 07:30) holds anything that needs hard thinking or unbroken time. Admin, errands, follow ups, calls, and easier financial chores go to afternoons.

  **Why:** Codified 2026-08-02 (W32 planning). Forni: "let's try to do everything that's like deep work, things that require me to think hard or to have uninterrupted time, into the morning slots." This REVERSES the 2026-05-18 morning admin rule, which belonged to the Zero W2 era; do not resurrect it.

  **How to apply:** During slotting, classify each task by cognitive load (the 1️⃣ Tough / 2️⃣ Middlest / 3️⃣ Easy labels are the signal): Tough goes to mornings, Easy to afternoons, Middlest by judgment. Reclaim work blocks follow the same shape via due dates and block moves.

- **Every slotted task carries an effort label and a pillar project.** When slotting, set one of 1️⃣ Tough / 2️⃣ Middlest / 3️⃣ Easy by effort, and move the task out of Inbox into its pillar project (🍏 Constitution, 🧠 Contemplation, 🤝 Community, 🛠️ Craft). Codified 2026-08-02 after a slotting pass left both off.

- **Never destroy contact info when retitling a task.** A bare email address or phone number as a task title IS the payload; a rename must carry it into the description or a mailto link in the title. Codified 2026-08-02 after a retitle stripped an email address and left the task unactionable.

## Codification Rules

- **No half step phase numbering.** When inserting a new phase into an existing skill or document, renumber subsequent phases rather than creating `Phase 4.5` or `Phase 3.5`. Half steps look like patches; integer sequences look like deliberate structure.

  **Why:** Surfaced 2026-05-18 when adding an interrogation phase to `assist:plan-training` retro mode. Initial draft used `Phase 4.5` for the new step. Forni redirected: "let's not codify things in general as half steps. So phase four and a half or phase three and a half, let's just go with moving the other phases backwards."

  **How to apply:** New phase goes at its integer position. Every phase after it shifts up by one. Update body cross references (e.g., "continue to Phase 5") and any references in learned-rules.md or other skills that point at numbered phases. Worth a final grep for `Phase [0-9]\.[0-9]` to catch stragglers.

## Created Filters

- `from:prime@amazon.com` -> label `📑 Admin/🛒 Purchases` (Label_36), skip inbox, mark read. Covers Prime membership change confirmations (renewal, cancellation). Created 2026-07-19 (filter id `ANe1BmgLdzmPdmLA1kKHrY5Ce3ATguMnHizDC8hwO5SrnA`). Supersedes the `prime@amazon.com` sender rule for future mail.
- `from:invoice+statements+acct_1KZOA5IV1bWPnvOA@stripe.com` -> label `📑 Admin/🛒 Purchases` (Label_36), skip inbox, mark read. Mill Industries receipts (sent via Stripe; keyed on Mill's Stripe account id so other merchants' Stripe receipts are unaffected). Created 2026-07-19 (filter id `ANe1BmhzwjKUgvTRe6iUswZbobYCISVCcr2Tq6e5GQur1g`).

- `from:mcinfo@ups.com` -> label `📑 Admin/🛒 Purchases` (Label_36), skip inbox, **leave unread** (Forni wants them unread in the label so he can still notice deliveries). Created 2026-07-22 (filter id `ANe1BmhcvGLrUpeRN2yfGNvcjBy7tSEwy2Y4b8MJOg3icg`).

- `from:climatebase.org` -> label `🛠️ Craft/🌦️ Climate` (Label_3939245566499170881), skip inbox, leave unread. Covers all Climatebase mail on the domain (newsletter via `climateweeknetwork@`, account mail via `alerts@`, any job alerts), per Forni's "everything from Climatebase" directive. Created 2026-08-03 (filter id `ANe1BmgW_Dr0M3-yRaocBulO8kS8ira5qkrjpZrK27V7vw`).

## Spend Categorization

Rules for `assist:handle-budget`. The payee map is [reference/payee-map.md](reference/payee-map.md); these corrections override it.

Mechanics (hard-won, do not rediscover):

- Write through the YNAB REST API directly (`curl` plus Keychain service `ynab-token`), never the `ynab` MCP. The MCP read output hides the transaction and category IDs needed to write.
- Imported transactions land **unapproved**, and categorizing does NOT approve them. Approve as the final step (`approved: true`) or the changes never flow into budget views. This is the usual cause of "my changes aren't showing up."
- YNAB clients use delta sync. After API writes, an open app or web session needs a hard refresh to display them.
- Payee names carry HTML entities (`&amp;`). Decode before matching.
- Budget IDs: Personal `a55b71e6-76e4-46d9-a5c6-336b36ddd14c`, RYLLC `e0d471f0-bf90-452c-8232-b1153b7411be`.

Conventions:

- Trips are itemized into real categories with a memo `<emoji> <Trip Name>` (e.g. `🏔️ Crested Butte`, `⛷️ Vail`), NOT a YNAB flag. Quarantines vacation from the everyday baseline while keeping a per-trip total. Non-discretionary trip-time charges (vehicle repair) stay untagged.
- Admin is not a generic catch-all. Estate and legal bills go to `📑 Admin / ⚖️ Legal`. Home-purchase costs (down payment, lender fees, inspection) go to `📑 Admin / 🏡 3033 Blake St Home Purchase`.
- A couples outing or show with Jasmine can be `🍿 Entertainment` or `❤️ Dating`; ask. Forni chose Entertainment for The Empire Strips Back.

Payee corrections (session 2026-06-29):

- `7-Eleven` -> `🚬 Nicotine` (confirmed, buys nicotine there).
- `Bunny and Clyde's` -> `☕️ Caffeine` (Salida coffee).
- `Body Jewelry`, `Easy Steez Vintage` -> `🧥 Clothing`.
- `Gem Figueroa` (friend, Venmo) -> context dependent; was `🍿 Entertainment` (a movie).
- `Badfish SUP` -> `🎒 Gear`. `Rhino Air`, `Discount Tire`, `Costco Gas` -> `🚙 Transportation`.
- `Amazon` history is split (~52%); always confirm, never auto.

Payee corrections (session 2026-07-18):

- `Illegalpetes` (Toast POS variant of Illegal Pete's) -> `🍟 Fast Food`.
- Santa Barbara trip (July 8 to 14): itemize each charge into its real category (coffee -> `☕️ Caffeine`, pool/swim like Cal Lutheran Pool -> `🧗 Movement`, restaurants -> `🍽️ Dining Out`, groceries -> `🛒 Groceries`, lodging -> `🌏 Adventure`) AND stamp the memo `💍 Santa Barbara` so it totals as a trip. Do NOT dump the whole cluster into `🌏 Adventure`; Forni corrected exactly this ("coffee shops are coffee, Cal Lutheran Pool is Athlete"). The memo, not the category, is what quarantines the trip. Nicotine buys (ARCO, 7-Eleven) inside a trip window stay in `🚬 Nicotine` untagged, to keep the growth-edge total honest.

Payee cleanup mechanics (session 2026-07-18, hard-won):

- **Renaming a payee to an existing name does NOT merge them via the API.** It just creates a second payee with the same display name (verified: renamed `Illegalpetes` -> `Illegal Pete's` and ended with two `Illegal Pete's` records). The app merges on rename; the public API does not.
- **The real merge primitive is transaction reassignment.** Get the duplicate's transactions (`GET /payees/{id}/transactions`), PATCH each with `payee_id` = the canonical payee, and the source drains to 0 transactions.
- **The API cannot delete payees** (no DELETE endpoint). Emptied/orphan payees are removed by YNAB's own maintenance (unused payees auto-purge), but not on demand. For an immediate purge of hundreds of orphans, use the app's Manage Payees screen (multi-select delete / Combine). Native Renaming Rules to strip Venmo quoted-note sprawl are also app-only.
- Only bother merging clusters where **two or more spellings both have transactions**; single-used-plus-orphan clusters need no action since the orphan auto-purges. Most Venmo note-variants (e.g. Azam Mughal 15 variants, 0 txns) are pure orphans.

Atelic budget policy (session 2026-07-23, tree rebuilt with an accountant's hat; these govern the Atelic budget only, not Personal):

- **Tree shape:** four groups. 💾 Software (🤖 AI Tools, 🖥️ Infrastructure, 🧰 Productivity), 🛠️ Operations (📶 Connectivity, 🚗 Mileage, 🤝 Client Meals, 🛫 Travel, 📦 Supplies, 🔖 Fees and Filings, 🏢 Workspace), 🧑‍🎓 Education (📚 Learning, 🎤 Conferences), 📑 Admin (💵 Salary, 🏦 SEP IRA, 💸 Payroll Taxes, 💼 CO Unemployment, 🙋 Personal). Vendor level detail lives in payee reports, never in per vendor categories.
- **🙋 Personal is the pressure valve.** Any personal charge that hits the business card books there (a nondeductible owner distribution). No repayment gymnastics, no forced deduction. Precedents: Spotify, solo coffee and meals, Denver Tool Library, Yung Pueblo, driver license renewals, Costco membership, Archipelago, GEICO history, Toggle renters history, Anthem dental history, Strava.
- **Meals gate (hard rule): every meal or coffee charge on Atelic requires a memo naming who and why** (`🤝 w/ Titus, TPF working dinner`). No memo means ask Forni one at a time; solo eating books to 🙋 Personal. Himchuli Indian defaults to Titus (Product Forge), still confirm. IRS substantiation is amount, date, place, purpose, attendee; the transaction carries the first three, the memo the last two.
- **Car is the mileage method.** No car insurance on Atelic; Forni logs client trips in MileIQ and the business reimburses per mile into 🚗 Mileage. GEICO must never reappear on the business card.
- **Starlink is 100% business** (field connectivity for remote work, not home internet; home internet is $30 through the HOA and off the books). Phone and cloud storage (Mint Mobile, iCloud, Google One) run at 100% as solo practice tools.
- **Gusto service fees are 🔖 Fees and Filings, not 💵 Salary.** Salary is only actual payroll. Wyoming Secretary of State annual reports also land in Fees and Filings.
- **History recategorization is management books, not tax amendment.** Filed returns are untouched by YNAB moves; do not agonize over closed years when reclassifying history.
- The mechanics rule above (write via REST API, approve as the final step, hard refresh open clients) applies doubly here: **the web app's stale delta sync will claim categories still have transactions after API moves; hard refresh the page before deleting categories in the app.** Category create, rename, and delete are app only; drive them via the Playwright browser.
