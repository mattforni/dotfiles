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
- **Email triage is strictly one email at a time. Never batch auto-process; never present a consolidated bulk triage plan.** Even when Forni says "get them all out of there," "clear them all," or similar, that phrasing means he wants to move efficiently, not that he is delegating the decisions. Present each email individually (sender, subject, what it is, proposed action), wait for his call, execute, then move to the next. The only safe pre-action is reading and classifying; every label / star / archive / trash decision is his, one at a time. **This supersedes Phase 2 (Silent Auto-Process)** — surface even high-confidence purchases one at a time rather than pre-processing them.

  **Why:** Codified 2026-06-01. Opened a triage session by auto-processing two purchases and presenting a grouped plan-table for ~21 emails with bulk-approve questions. Forni: "undo everything you did with the emails. I need you to consult with me first. This was not useful." After reverting, he said "One email at a time."
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

- **Daily Operations Standup** is informational only. Forni does not attend; it is a placeholder in case he ever wants to drop in. Do not treat it as a conflict or a busy block.
- Never move, reschedule, or delete existing calendar events without explicit permission. Always present the proposed change and wait for approval.
- Events booked via Reclaim.ai scheduling links were scheduled by other people. Extra caution required.
- Deleting or moving adjacent events can cause Reclaim to auto-reschedule nearby flexible events as a side effect. Warn about this.

## Slotting Rules

- **Personal admin tasks slot to morning windows, not afternoon.** Afternoons fill with Zero work and meetings; admin only reliably lands in the morning. Default to slotting Todoist personal tasks (admin, errands, paperwork, follow ups, calls) before the workday starts. Use afternoon slots only when the task explicitly requires business hours (e.g., calling an office that opens at 09:00) or when no morning slot exists.

  **Why:** Codified 2026-05-18 (Wk 3 planning session). Initial slot for 📝 Clio Intake and 🏥 Establish Primary Care landed at 15:00–16:00. Forni redirected: "I just don't tend to have time later in the day with work. It just doesn't really work that way." Afternoon slots in practice get displaced by work even when calendar shows them open.

  **How to apply:** When triaging Schedule filter tasks, default to morning slots. Strong morning windows: Mon 7:00–10:00 (deep AM at office), Tue/Wed 7:00–10:30 (Heads Down container), Thu 7:30–8:00 (post SPRC pre meetings), Fri 7:00–11:30 (large WFH block). Use afternoon only as a fallback.

## Zero Work Inbox

The default triage-rules.md / label-map.md taxonomy is Forni's **personal** life (Family, Sobriety, the four pillars). The **Zero work inbox** (mattf@zerohomes.io, active under the `zero` gws profile) has a completely separate label set. Those personal labels do not exist there. **When triaging in a Zero directory subtree, confirm which inbox Forni means before scanning** — the active gws profile being `zero` does not by itself mean he wants the work inbox triaged.

Zero workspace user labels: `🏦 Vendors`, `🛠️ Tooling`, `📈 Growth`, `📈 Growth/📍 Local Rank`, `📈 Growth/⚙️ Sales Automation`, `💻 Engineering`, `🫂 Partners`, `👯‍♀️ People Ops`, `🤝 Meetings`, `🏥 Benefits`, `📝 Documents`, `💸 Expenses`, `🫠 Personal`.

Routing conventions (established 2026-06-01):

- **Vendor evaluations** (inbound sales demos, tools being assessed) → `🏦 Vendors` + `🛠️ Tooling` + `📈 Growth` (parent). E.g. the Podium-replacement / speed-to-lead bake-off (Aircall, Talkdesk, Avoca, Regal, Hatch).
- **Live sales-automation tooling / infrastructure** (a tool actually in the stack, or automation work) → `📈 Growth/⚙️ Sales Automation` + `🛠️ Tooling`. E.g. Podium support threads, scheduler attribution, CCEF auto-create-contact automation, building a teammate's scheduler.
- **GBP / local listings / local SEO** → `📈 Growth/📍 Local Rank`. E.g. MapRanking, Google Business Profile appeals, signage-for-GBP threads, business-directory listing invites.
- **Customer-reported app/product bugs** → `💻 Engineering`, and route the extracted bug to the **#engineering** Slack channel (tag the relevant engineer; Danny Pier is Lead Mobile Engineer for app bugs), then archive the email — the work lives in Slack/eng, not the inbox.
- Work that spawns follow-up → cut a **GROW** Linear ticket (Growth Team, assign Forni, Todo) and let the ticket be the source of truth; star the email per the star-semantics rule (`YELLOW_STAR` if we owe the move, `GREEN_STAR` if waiting on someone else).

## Codification Rules

- **No half step phase numbering.** When inserting a new phase into an existing skill or document, renumber subsequent phases rather than creating `Phase 4.5` or `Phase 3.5`. Half steps look like patches; integer sequences look like deliberate structure.

  **Why:** Surfaced 2026-05-18 when adding an interrogation phase to `assist:plan-training` retro mode. Initial draft used `Phase 4.5` for the new step. Forni redirected: "let's not codify things in general as half steps. So phase four and a half or phase three and a half, let's just go with moving the other phases backwards."

  **How to apply:** New phase goes at its integer position. Every phase after it shifts up by one. Update body cross references (e.g., "continue to Phase 5") and any references in learned-rules.md or other skills that point at numbered phases. Worth a final grep for `Phase [0-9]\.[0-9]` to catch stragglers.

## Created Filters

## Spend Categorization

Rules for `assist:handle-budget`. The payee map is [reference/payee-map.md](reference/payee-map.md); these corrections override it.

Mechanics (hard-won, do not rediscover):

- Write through the YNAB REST API directly (`curl` plus Keychain `YNAB_ACCESS_TOKEN`), never the `ynab` MCP. The MCP read output hides the transaction and category IDs needed to write.
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
