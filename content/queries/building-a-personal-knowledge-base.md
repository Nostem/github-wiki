---
title: Building a Personal Knowledge Base
created: 2026-04-13
updated: 2026-04-13
type: query
tags: [ai-ml, workflow, tool, infrastructure]
sources: []
---

# Building a Personal Knowledge Base

Synthesized answer for: "How would I build an AI-maintained personal knowledge base using starred repos?"

## Recommended Stack

**If you use Obsidian:** [[kepano-obsidian-skills]] — gives your agent skills for reading, writing, and managing Obsidian notes. Combined with [[nicholasspisak-second-brain]] which is an LLM-maintained vault based on Karpathy's LLM Wiki pattern — the agent curates and organizes your notes automatically.

**For agent memory specifically:** [[breferrari-obsidian-mind]] — Obsidian vault designed to give AI coding agents persistent memory. Works with Claude Code and Codex.

**For fast document search:** [[tobi-qmd]] — CLI search engine for docs, knowledge bases, meeting notes. Fast full-text search, no server needed.

**For structured knowledge graphs:** [[topoteretes-cognee]] — knowledge engine that builds queryable graph storage. Better than flat note systems for complex domains.

**For web-based browsing:** [[ansub-wiki-os]] — open-source app for search, browsing, graphs, and local knowledge exploration. Visual interface for navigating your knowledge.

## Architecture Decision Tree

- **Already use Obsidian?** → obsidian-skills + second-brain for automated curation
- **Starting fresh?** → Cognee for structured memory, or second-brain for Obsidian-first
- **Need fast search across docs?** → qmd
- **Want visual graph exploration?** → wiki-os
- **Agent needs memory across sessions?** → See [[agent-memory]] concept

## Related Concepts

- [[knowledge-management]] — broader knowledge systems
- [[agent-memory]] — agent-specific memory patterns
- [[web-scraping]] — for populating your KB from web sources
