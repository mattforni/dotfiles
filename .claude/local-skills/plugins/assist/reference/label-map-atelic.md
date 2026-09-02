# Atelic Label Map

The label taxonomy for the practice mailbox, `matt@atelic.me`. The personal
account has its own tree in [label-map.md](label-map.md), and the two never mix:
a label id is only meaningful against the account it came from. Label ids
resolve at runtime via `gws gmail users labels list`. Built 2026-09-02 against
the mailbox's first 130 messages.

Everything in this mailbox is the practice, so the top level cuts by what the
mail is about rather than by pillar. Always route to the most specific sublabel
that fits.

## Label Hierarchy

### Clients (💵)

- `💵 Clients` (parent) for client work with no engagement sublabel yet
- `💵 Clients/👨‍⚕️ WAMM`
- `💵 Clients/🪟 SkySpec`

One sublabel per engagement, named as the engagement is named under `Clients/`
in the Atelic repo. A client's own growth surfaces (their Search Console,
Business Profile, Analytics) go here, never under `📈 Growth`. A client's signed
agreement carries both this label and `⚖️ Legal`. Renamed from `💵 Customers` on
2026-09-02 to match the repo's language.

### Leads (👑)

- `👑 Leads` (parent) for a prospect in the funnel, lifecycle `Lead` in HubSpot
- `👑 Leads/📥 Inbound` for website form inquiries and unprompted arrivals
- `👑 Leads/📤 Outreach` for cold first touches, bumps, visits, and their replies

The three touch unit in `Outreach/README.md` is the motion behind the Outreach
sublabel. A lead that signs becomes a client, and the thread that closed it gets
relabeled to the client.

### Network (🤝)

Referral sources, introductions, and the warm circle: HubSpot lifecycle `Other`.
Not the funnel. A thank you after a research call, an intro from Carl or Stacy,
and a recruiter who is really a relationship all land here rather than in Leads.

### Money (🧾)

Invoices, payments, receipts, subscription billing, banking, payroll, and tax
correspondence for the entity. What `OPERATING.md` governs. Vendor billing goes
here even when the vendor's product mail goes to Tooling.

### Legal (⚖️)

Executed agreements, DocuSign envelopes, entity filings, registered agent
notices, and anything `ENTITY.md` or `Legal/` governs.

### Tooling (🛠️)

Vendor and platform notices only: account setup, invitations, changelogs,
security alerts, deprecations. Google Workspace, Linear, HubSpot, Cloudflare,
Vercel, GCP. Keep it narrow; it was the mailbox's junk drawer until 2026-09-02
and the money, growth, and legal labels exist to keep it that way.

### Growth (📈)

The practice's own search, analytics, and profile surfaces: atelic.me and
mattforni.com Search Console, Bing Webmaster Tools, the practice's own
Analytics, and the monthly funnel report. A client's equivalent goes under their
client label instead.

### Work Search (💼)

Job boards, applications, recruiters, and their confirmations arriving at the
practice address: Wellfound, Fractional Jobs, and the like. The log of record is
`Craft/Vocation/FY27-work-search.md`; this label is retrieval only.

### TPF (⚒️)

The Product Forge archive, including the forwarded thread set that came across
on 2026-08-20. Historical: the practice pitches, sends, and signs as Atelic.

## Routing Notes

- **The mailbox is the routing signal.** Work landing here is practice work, so
  its tasks are Linear issues and never Todoist tasks.
- **Tooling versus Money.** The same vendor sends both. A changelog is Tooling,
  a receipt is Money.
- **Growth versus the client.** Ask whose site the alert is about. Ours is
  Growth, theirs is their client label.
- **Leads versus Network.** Ask whether they are being sold to. In the funnel is
  Leads, warm circle is Network.

## Created Filters

| Criteria | Action | Added |
|---|---|---|
| `from:forms@atelic.me` | label `🛠️ Tooling`, skip inbox, mark read | before 2026-09-02 |
