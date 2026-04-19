# Troubleshooting

Common mistakes, error handling patterns, and auth setup issues for the Linear CLI.

## Common Mistakes

### Hardcoding Team or Project Names

- Don't assume team structure
- Let the user specify or discover via Linear commands

```bash
# Discover available teams
linear team list
```

### Using Issue IDs Incorrectly

- Don't lowercase (bet-123) in commands
- Use proper case (BET-123) for consistency
- The CLI handles both, but uppercase is the convention

## Auth Setup Issues

### Not Authenticated

If commands fail with authentication errors:

1. Run `linear auth login`
2. Provide your Linear API token
3. Get a token from: **Linear Settings > Security & Access > Personal API keys**
4. Verify the connection with `linear issue list`

### Token Invalid or Expired

If commands return authentication errors:

1. Re-authenticate with `linear auth login`
2. Generate a new token in Linear settings if needed
3. Test with a simple command: `linear issue list`

### Permission Errors

If auth works but certain operations fail:

- The token may lack write permissions
- The user's Linear role may restrict certain operations
- Confirm the user has appropriate access in their Linear workspace

## Error Handling Patterns

### Command Failures

Always check for non-zero exit codes. Common failure modes:

| Error | Likely Cause | Resolution |
|-------|-------------|------------|
| Authentication error | Invalid or expired token | Run `linear auth login` |
| Not found | Wrong issue ID or team key | Verify the identifier |
| Rate limited | Too many requests | Wait and retry |
| Network error | Connectivity issue | Check internet connection |

### Graceful Degradation

When a Linear CLI command fails mid-workflow:

1. Report the specific error to the user
2. Do not retry silently
3. Suggest the most likely fix based on the error message
4. Offer to continue with remaining operations that don't depend on the failed one
