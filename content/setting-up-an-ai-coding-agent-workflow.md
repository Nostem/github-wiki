---
title: Setting Up an AI Coding Agent Workflow
created: 2026-04-13
updated: 2026-04-13
type: query
tags: [ai-ml, devtools, workflow]
sources: []
---

# Setting Up an AI Coding Agent Workflow

Synthesized answer for: "How would I set up a productive AI coding agent workflow using starred repos?"

## Recommended Stack

**Core agent:** [[anthropics-claude-code]] — Anthropic's official coding agent. Terminal-based, understands your codebase, executes tasks via natural language. The default choice for most workflows.

**Alternative agents:** [[anomalyco-opencode]] — open-source from the Cursor team. [[ultraworkers-claw-code]] — Rust-based for speed. [[tabbyml-tabby]] — self-hosted Copilot alternative.

**Skills and extensions:** [[anthropics-skills]] — the canonical skill spec. [[voltagent-awesome-agent-skills]] — 1000+ skills across agents. [[voltagent-awesome-openclaw-skills]] — 5400+ OpenClaw skills.

**Agentic methodology:** [[obra-superpowers]] — TDD-enforced development workflow. Write failing tests first, agent implements to pass them. Prevents "vibe coding" drift.

**Subagents for specialization:** [[voltagent-awesome-claude-code-subagents]] — pre-built subagents for frontend, DevOps, review, etc. [[voltagent-awesome-codex-subagents]] — 130+ Codex subagents.

**Best practices:** [[shanraisshan-claude-code-best-practice]] — comprehensive guide covering prompt engineering, workflow patterns, and common pitfalls.

**System prompt reference:** [[x1xhlol-system-prompts-and-models-of-ai-tools]] — system prompts for 25+ AI coding tools. Study how other tools instruct their agents.

## Architecture Decision Tree

- **Just starting?** → Claude Code + anthropic-skills + best-practices guide
- **Want structured workflow?** → Superpowers (TDD methodology)
- **Need specialized agents?** → Subagent collections
- **Want to study how others build agents?** → system-prompts repo
- **Self-hosted alternative?** → Tabby

## Related Concepts

- [[coding-agents]] — broader coding agent ecosystem
- [[agent-skills]] — skill architecture and patterns
- [[claude-code-extensions]] — Claude Code specific ecosystem
- [[claude-code-subagents]] — subagent patterns
