---
title: agent-memory
created: 2026-04-13
updated: 2026-04-13
type: concept
tags: [ai-ml, infrastructure, workflow]
sources: [raw/stars/2026-04-08.md]
---

# Agent Memory

Persistent memory systems that let AI agents retain context, learn from past interactions, and improve retrieval quality over time — moving beyond stateless conversations.

## What This Concept Covers

Agent memory addresses the fundamental limitation of LLM context windows:

- **Session memory** — capturing what happened during a coding session for later recall
- **Long-term knowledge** — persistent facts, preferences, and learned patterns
- **Adaptive retrieval** — memory systems that improve which memories they surface based on usage
- **Portable memory** — memory that follows the agent across tools and projects

## Related Repos

- [[thedotmack-claude-mem]] — Automatically captures everything Claude Code does, makes it searchable
- [[topoteretes-cognee]] — Knowledge engine for agent memory with queryable graph storage
- [[vectorize-io-hindsight]] — Adaptive memory that learns from retrieval patterns
- [[campfirein-byterover-cli]] — Portable memory layer that works across coding agents
- [[martian-engineering-lossless-claw]] — Lossless context management plugin for OpenClaw
- [[breferrari-obsidian-mind]] — Obsidian vault giving AI agents persistent memory

## Key Approaches

**Capture-and-recall (claude-mem):**
- Logs agent actions during sessions
- Searchable history of what was done and why
- Simple but effective — like a changelog for agent behavior

**Knowledge graphs (Cognee):**
- Structured memory as a graph, not flat text
- Queryable relationships between entities
- Scales better than raw context stuffing

**Adaptive memory (Hindsight):**
- Learns which memories are actually useful
- Improves retrieval quality over time
- Reduces noise in memory recall

**Portable memory (Byterover):**
- Memory that persists across different agents and tools
- Agent-agnostic format
- Critical for multi-tool workflows

**Context window management (Lossless-Claw):**
- Manages what stays in active context vs what goes to memory
- Prevents context overflow while maintaining coherence
- Technical approach to the context budget problem

## When to Use

- **claude-mem** — simple session capture for Claude Code users
- **Cognee** — complex knowledge domains needing structured memory
- **Hindsight** — when retrieval quality matters more than storage
- **Byterover** — working across multiple agents/tools
- **Lossless-Claw** — OpenClaw users hitting context limits
- **obsidian-mind** — Obsidian users wanting agent-accessible knowledge

## Ecosystem

- Capture: [[thedotmack-claude-mem]]
- Knowledge engines: [[topoteretes-cognee]], [[vectorize-io-hindsight]]
- Portability: [[campfirein-byterover-cli]]
- Context management: [[martian-engineering-lossless-claw]]
- Vault-based: [[breferrari-obsidian-mind]]
- Related concepts: [[knowledge-management]] (broader KB systems), [[agent-skills]] (memory as a skill)
