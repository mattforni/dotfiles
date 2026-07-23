export const meta = {
  name: 'chatroom',
  description: 'Role diverse agents debate a problem across rounds with full cross visibility, returning the transcript for orchestrator synthesis',
  whenToUse: 'Architecture decisions, design tradeoffs, venture strategy: anywhere adversarial multi round reasoning beats independent one shot verdicts. Adopted from Greg\'s Agent Chatrooms pattern 2026-07-23.',
}

// args: string problem, or {problem, context?, roles?, rounds?}
const cfg = typeof args === 'string' ? { problem: args } : (args || {})
const problem = cfg.problem
if (!problem) throw new Error('chatroom needs a problem: pass args as a string or {problem, context?, roles?, rounds?}')
const context = cfg.context || 'none provided'
const R = cfg.rounds === undefined ? 3 : cfg.rounds
if (!Number.isInteger(R) || R < 1 || R > 10) throw new Error('chatroom rounds must be an integer between 1 and 10')

// Default software roles; caller overrides with domain sets, e.g. product
// (user advocate / business strategist / engineer) or strategy
// (optimist / skeptic / synthesizer).
const roles = cfg.roles || [
  { name: 'Architect', framing: 'thinks in systems, interfaces, and long term maintainability' },
  { name: 'Pragmatist', framing: 'optimizes for shipping fast with minimal complexity and good enough solutions' },
  { name: 'Critic', framing: 'hunts edge cases, failure modes, security holes, and unstated assumptions' },
]
if (!Array.isArray(roles) || roles.length === 0 || roles.some(r => !r || typeof r.name !== 'string' || typeof r.framing !== 'string')) {
  throw new Error('chatroom roles must be a non empty array of {name, framing} strings')
}

const RESPONSE = {
  type: 'object',
  properties: {
    position: { type: 'string', description: 'One sentence stance' },
    agreements: { type: 'string', description: 'What other agents got right (rounds 2+)' },
    disagreements: { type: 'string', description: 'Where you still differ and why (rounds 2+)' },
    proposal: { type: 'string', description: 'Your concrete recommendation, refined each round' },
    concerns: { type: 'string', description: 'What could go wrong with your own approach' },
    confidence: { type: 'number', description: '1 to 10 confidence in your refined position' },
  },
  required: ['position', 'proposal', 'confidence'],
}

const rounds = []
for (let r = 1; r <= R; r++) {
  const history = rounds
    .map((entries, i) =>
      `ROUND ${i + 1}:\n` +
      entries
        .map(e => `${e.role}: position: ${e.position}\n  proposal: ${e.proposal}\n  agreements: ${e.agreements || 'n/a'}\n  disagreements: ${e.disagreements || 'n/a'}\n  concerns: ${e.concerns || 'n/a'}\n  confidence: ${e.confidence}`)
        .join('\n\n'))
    .join('\n\n')

  const opening = `This is Round 1 of a multi agent debate. State your initial position. Be specific and concrete: propose actual solutions, not vague principles. Take a clear stance and make your reasoning explicit, because other agents will challenge it in later rounds.`
  const debate = `This is Round ${r} of a multi agent debate. Read the previous discussion carefully:\n\n${history}\n\nRespond to the strongest counterargument against your position, concede the points other agents got right, hold the disagreements that are real, and refine your proposal. Do NOT repeat your previous position; change your mind if a better argument appeared.`

  const entries = await parallel(roles.map(role => () =>
    agent(
      `You are ${role.name}: ${role.framing}.\n\nPROBLEM:\n${problem}\n\nCONTEXT:\n${context}\n\n${r === 1 ? opening : debate}`,
      { label: `${role.name} r${r}`, phase: `Round ${r}`, schema: RESPONSE },
    )))

  const clean = entries.map((e, i) => (e ? { role: roles[i].name, ...e } : null)).filter(Boolean)
  rounds.push(clean)
  log(`round ${r}: confidence ${clean.map(e => `${e.role} ${e.confidence}`).join(', ')}`)

  // Early stop when everyone is confident after at least one debate round.
  // The orchestrator still verifies the proposals actually align before
  // calling it consensus; confidence alone can mean a confident deadlock.
  if (r >= 2 && clean.length > 1 && clean.every(e => e.confidence >= 8)) {
    log('high confidence across all agents; stopping early for orchestrator review')
    break
  }
}

return { problem, roles: roles.map(r => r.name), roundsRun: rounds.length, rounds }
