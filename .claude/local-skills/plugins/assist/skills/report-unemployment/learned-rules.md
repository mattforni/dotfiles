# Learned Rules

Rules earned from real MyUI+ filings. Append with a date; prune when superseded.

- **2026-08-11 · The dropdown ids are swapped relative to their labels.** The type of activity select is `ddlContactmethod` and the contact method select is `ddlContactType`. Map by element id, never by name.
- **2026-08-11 · Set dropdowns by element id or they silently revert.** Selecting via accessibility refs reports success while `ddlContactmethod` and `ddlResults` stay on Select One. Target `#ctl00_ctl00_cphMain_cphMain_ddlContactmethod`, `#ctl00_ctl00_cphMain_cphMain_ddlContactType`, and `#ctl00_ctl00_cphMain_cphMain_ddlResults` directly, and verify with an eval of `selectedOptions` before every save.
- **2026-08-11 · Text field ids are stable across entries.** `#txtDate` (MM/DD/YYYY), `#txtEmployerAgencyNA`, `#txtContactInformation`, `#txtAddlContInfo`. Snapshot refs go stale after every save; re-grab the Save this Work-Search ref each time, and confirm the save by the numbered list growing.
- **2026-08-11 · The page's Errors heading is not an error.** It labels the claimant info block (name, claimant ID, claim ID). Real validation failures appear inline at the field.
- **2026-08-11 · Hidden dialog templates litter every page.** Inactivity warning, session expired, and nightly processing modals sit in the DOM permanently; ignore them unless they are actually visible.
- **2026-08-11 · The bundled Chromium cannot pass the ID.me Cloudflare challenge.** Headed mode with a human clicking still spins forever on the automation fingerprint. Attaching to real Brave over CDP is the only working path, and the debug port must be present at launch, so a graceful quit and relaunch is part of the flow.
- **2026-08-11 · Pin the tab before filling.** An attached session follows Forni's focused tab, so his mid-entry HubSpot browse retargets fill commands. `tab list`, then `tab <id> --pin-tab`, immediately after opening MyUI+.
- **2026-08-11 · The flow can resume mid-stream.** Sections already completed (Basic Questions from an earlier attempt) show Complete on the Weekly Payment Request hub and are not re-asked. Read the hub state before assuming a fresh start, and read completed answers back at the Summary gate.
- **2026-08-11 · Todoist task `6h37cRQQ6fPGXJ5F` is the Monday payment request task.** Recurring every Monday at 17:00; completing it after submission rolls it to the next week.
