# The Sunday Retro Runner (ATE-471). A Cloud Run Job image: the entrypoint
# pulls the week from Strava, Gmail, and Todoist with curl, then headless
# Claude Code writes the retrospective from those files and Resend delivers it.
# Nothing here writes back to the world except the rotated Strava refresh
# token, which goes to the vault.
FROM node:20-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates curl jq tzdata \
    && rm -rf /var/lib/apt/lists/*

# Claude Code, pinned so a rebuild is a deliberate upgrade.
ARG CLAUDE_CODE_VERSION=2.1.247
RUN npm install -g "@anthropic-ai/claude-code@${CLAUDE_CODE_VERSION}"

# Non root, its own home so Claude Code has a writable config dir.
RUN useradd --create-home --shell /bin/bash runner
USER runner
WORKDIR /home/runner

COPY --chown=runner:runner entrypoint.sh /home/runner/entrypoint.sh
COPY --chown=runner:runner prompt.md /home/runner/prompt.md
COPY --chown=runner:runner render.jq /home/runner/render.jq
RUN chmod +x /home/runner/entrypoint.sh

ENV TZ=America/Denver
ENTRYPOINT ["/home/runner/entrypoint.sh"]
