---
name: browser-fleet
description: Parallelize real browser work across 2 to 5 agents, each driving its own isolated agent-browser session. Use when the same browser task repeats across many targets, like submitting contact forms across a prospect list, sweeping lodging sites for a trip, or scraping JS rendered pages. Triggers on "browser fleet", "parallel browsers", "fan out the browser", "submit these forms in parallel", or /browser-fleet. Not for single site sessions (plain agent-browser) or authenticated Brave profile flows (Playwright MCP).
---

# Browser Fleet

Fan browser work out across parallel subagents, each with its own isolated `agent-browser` session. Adopted from Greg's multi agent Chrome pattern 2026-07-23, collapsed onto our stack: `agent-browser --session <name>` gives per agent isolation natively (own cookies, tabs, refs), the Agent tool gives parallelism and result collection, so Greg's Chrome on ports scaffolding, per agent MCP configs, and chat.md coordination all disappear.

## Tool Choice

- **agent-browser** (this skill) for everything unauthenticated or freshly authenticated: forms, scraping, sweeps, verification. Lightest context per action.
- **Playwright MCP** only when the task needs the dedicated authenticated Brave profile with Bitwarden (banking, YNAB, logged in web apps). Keep its footprint shrinking.

## Execution

1. **Build the target list.** Each work item is one URL plus the actions to take there (form fields, data to extract). Chunk targets across 2 to 5 agents; don't over provision (10 forms wants 3 agents, not 5).
2. **Spawn agents in parallel** (single message, multiple Agent calls, or a Workflow pipeline for larger lists). Each agent's prompt includes:
   - Its session name: every command runs as `agent-browser --session fleet-<n> <command>`. Sessions are fully isolated from each other and from the default session.
   - The recipe: run `agent-browser skills get core` first; use `snapshot -i` refs and re-snapshot after every page change (refs go stale); `--session` on every single call; absolute binary path `/opt/homebrew/bin/agent-browser` inside shell loops (the sandbox strips PATH in loop bodies).
   - Its target chunk with exact per target instructions and what to return (structured results, not transcripts).
   - Cleanup: `agent-browser --session fleet-<n> close` when its chunk is done.
3. **Collect and report.** Agents return per target outcomes (submitted, blocked, captcha, data). Summarize wins, failures, and anything needing the user (captchas and logins bail, never guess credentials).

## Guardrails

- **Outward actions stay gated.** Submitting forms that send email or messages to real people is outbound comms: show the user the message content and target list before the fleet fires. Same rule as email sends.
- Cap at 5 concurrent sessions; each is a real headless browser.
- A hung daemon takes the whole fleet down: `pkill -f agent-browser`, rerun.

## Proven Use Cases

- Outreach contact forms across a prospect list (the July digital play sends).
- Lodging availability sweeps across booking sites for `assist:plan-trip`.
- Parallel JS rendered scraping where `read` alone isn't enough.
