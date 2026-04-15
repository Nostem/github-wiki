---
title: agent-skills
created: 2026-04-08
updated: 2026-04-08
type: concept
tags: [ai-ml, workflow, tool]
sources: [raw/stars/2026-04-08.md]
---

# Agent Skills

A **skill** is a modular unit of capability that an AI agent can invoke to perform a specific task. Skills have a defined interface, implementation, and schema — making them composable building blocks for agentic systems.

## What This Concept Covers

Skills are how agents extend beyond their base capabilities. A base model can only do what it was trained to do. A skill adds a specific, structured capability — like searching the web, executing code, or processing a document.

## Related Repos

- [[anthropics-skills]] — the canonical Anthropic skill spec (official reference)
- [[voltagent-awesome-agent-skills]] — 1000+ skills across Codex, Claude, Gemini CLI, Cursor
- [[voltagent-awesome-openclaw-skills]] — 5400+ OpenClaw-specific skills
- [[behisecc-awesome-claude-skills]] — community-curated Claude skills

## Key Patterns

**Skill Structure (per Anthropic spec):**
- Defined interface (what triggers it, what inputs it accepts)
- Implementation (what it actually does)
- Schema (how it's registered and discovered)

**Skill vs Subagent:**
- Skill: focused capability, invoked by an agent
- Subagent: a complete agent configured for a domain, can call multiple skills

## When to Use Skills

- Need a specific capability that doesn't exist in base model (e.g., image processing, code execution)
- Want to reuse a capability across multiple agent projects
- Building a library of tools for an agent ecosystem

## Alternatives

Writing everything into the agent prompt directly — less modular, harder to reuse across projects.

## Ecosystem

- Official skill specs: [[anthropics-skills]]
- Community skill collections: [[voltagent-awesome-agent-skills]], [[voltagent-awesome-openclaw-skills]], [[behisecc-awesome-claude-skills]]
- Skills built on top: [[obra-superpowers]] (uses skills in agentic methodology)