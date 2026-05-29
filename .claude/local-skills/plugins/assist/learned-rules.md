# Learned Rules

Rules added from triage corrections. Read on every invocation. These override default rules in reference/triage-rules.md.

## Sender Rules

- `scheduling@acuityscheduling.com` (NAOSU SAUNA) -> 🍏 Constitution/🧖 Personal Care (NOT Athlete)
- `heather.frechette@gmail.com` (Heather Frechette, HNGC secretary) -> 🍏 Constitution/🍾 Sobriety. Auto-reply "Thank you for your service! 🙏", then label and archive. HNGC = High Noon Group Conscience (AA home group business meeting).
- `info@bluesprucemaids.com` (Blue Spruce Maids cleaning reminders) -> 🍏 Constitution/🧖 Personal Care. Mark read, archive. Recurring 7-day cleaning reminders.
- `EnergyReport@xcelenergy.com` (Xcel Home Energy Report, usage marketing email distinct from actual Xcel bills) -> Informational only. Unsubscribe (URL only, no mailto) and archive without label. The actual Xcel utility bill goes to Bills; this monthly usage/marketing report has no value to keep.
- `dor_taxreminder-state.co.us@shared1.ccsend.com` (Colorado Department of Revenue withholding tax reminders) -> 🍏 Constitution/💰 Financial/💸 Taxes. Forni files a $0 return for these. Label, mark read, archive.
- `UHC@benefits.unitedhealthcare.com` with "UHC Rewards" subject -> 🍏 Constitution/🏥 Benefits + GREEN_STAR. Action: enroll in rewards program ($1000 potential). Keep in inbox until enrolled.
- `prime@amazon.com` membership change confirmations (renewal, cancellation) -> 📑 Admin/🛒 Purchases. Mark read, archive.
- `support@email.mill.com` (Mill food waste device) -> 📑 Admin/🛒 Purchases. Mark read, archive.
- `*@coestatematters.com` (Colorado Estate Matters, estate planning attorney) -> 🍏 Constitution/💰 Financial/📜 Trust (NOT Financial parent). Route to Phase 4 for manual review; auto-archive patterns will codify once enough subject lines are observed.

## Topic Rules

- **Home buying (purchase, mortgage, title, closing) is NOT Home Improvement.** Home purchase correspondence goes under 🍏 Constitution/💰 Financial + 🤝 Community/🏙️ Cities/🌇 Denver. The 🛠️ Craft/🏡 Home Improvement label is for actual improvement work (renovations, fixtures, tools), not the transaction of buying the home. Senders this applies to: NEO Home Loans, Trelora (greg@trelora.com), CTM eContracts, Land Title Guarantee Company, seller (Matt Bigelow), inspection vendors, HO6 insurance for the unit.

## Subject Rules

## Behavior Rules

- **CRITICAL: Check the actual system time before writing time-of-day greetings.** Do not assume morning/afternoon/evening. Run `date` or check the clock. This has caused errors in sent emails that cannot be corrected.
- When someone asks for availability to schedule a call/meeting, default to sharing the Reclaim scheduling link rather than proposing specific time slots. It's simpler and always up to date.
- When the user has reviewed and approved email drafts, send them directly if asked. Do not insist on creating drafts first. The review already happened in conversation.
- Stars mean action is needed from the user. Do not star informational emails. When in doubt whether an email needs action, read the full content first before assigning a star. A 1099 "available online" notice is informational (Coinbase handles it), not an action item.

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

- **Daily Operations Standup** is informational only. Forni does not attend; it is a placeholder in case he ever wants to drop in. Do not treat it as a conflict or a busy block.
- Never move, reschedule, or delete existing calendar events without explicit permission. Always present the proposed change and wait for approval.
- Events booked via Reclaim.ai scheduling links were scheduled by other people. Extra caution required.
- Deleting or moving adjacent events can cause Reclaim to auto-reschedule nearby flexible events as a side effect. Warn about this.

## Slotting Rules

- **Personal admin tasks slot to morning windows, not afternoon.** Afternoons fill with Zero work and meetings; admin only reliably lands in the morning. Default to slotting Todoist personal tasks (admin, errands, paperwork, follow ups, calls) before the workday starts. Use afternoon slots only when the task explicitly requires business hours (e.g., calling an office that opens at 09:00) or when no morning slot exists.

  **Why:** Codified 2026-05-18 (Wk 3 planning session). Initial slot for 📝 Clio Intake and 🏥 Establish Primary Care landed at 15:00–16:00. Forni redirected: "I just don't tend to have time later in the day with work. It just doesn't really work that way." Afternoon slots in practice get displaced by work even when calendar shows them open.

  **How to apply:** When triaging Schedule filter tasks, default to morning slots. Strong morning windows: Mon 7:00–10:00 (deep AM at office), Tue/Wed 7:00–10:30 (Heads Down container), Thu 7:30–8:00 (post SPRC pre meetings), Fri 7:00–11:30 (large WFH block). Use afternoon only as a fallback.

## Codification Rules

- **No half step phase numbering.** When inserting a new phase into an existing skill or document, renumber subsequent phases rather than creating `Phase 4.5` or `Phase 3.5`. Half steps look like patches; integer sequences look like deliberate structure.

  **Why:** Surfaced 2026-05-18 when adding an interrogation phase to `assist:training` retro mode. Initial draft used `Phase 4.5` for the new step. Forni redirected: "let's not codify things in general as half steps. So phase four and a half or phase three and a half, let's just go with moving the other phases backwards."

  **How to apply:** New phase goes at its integer position. Every phase after it shifts up by one. Update body cross references (e.g., "continue to Phase 5") and any references in learned-rules.md or other skills that point at numbered phases. Worth a final grep for `Phase [0-9]\.[0-9]` to catch stragglers.

## Created Filters
