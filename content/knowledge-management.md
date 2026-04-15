---
title: knowledge-management
created: 2026-04-13
updated: 2026-04-13
type: concept
tags: [ai-ml, tool, workflow, infrastructure]
sources: [raw/stars/2026-04-08.md]
---

# Knowledge Management

Personal knowledge bases, search engines, and structured information systems that help humans and AI agents organize, find, and connect information across documents and notes.

## What This Concept Covers

- **Personal knowledge bases** — Obsidian vaults, second brains, structured note systems
- **LLM-maintained knowledge** — AI agents that curate and organize your notes
- **Search and retrieval** — fast full-text search across personal documents
- **Knowledge graphs** — structured, interlinked information with relationships

## Related Repos

- [[nicholasspisak-second-brain]] — LLM-maintained personal knowledge base for Obsidian, based on Karpathy's LLM Wiki pattern
- [[kepano-obsidian-skills]] — Agent skills for Obsidian — Markdown, Bases, JSON Canvas
- [[tobi-qmd]] — Mini CLI search engine for docs, knowledge bases, meeting notes
- [[breferrari-obsidian-mind]] — Obsidian vault giving AI agents persistent memory
- [[ansub-wiki-os]] — Open-source web app for search, browsing, graphs, and local knowledge exploration

## Key Approaches

**LLM-maintained knowledge base (second-brain):**
- AI agent curates and organizes your Obsidian vault
- Auto-links related notes, creates summaries
- Based on Karpathy's LLM Wiki pattern
- Best for: Obsidian users wanting automated curation

**Agent-accessible vault (obsidian-skills, obsidian-mind):**
- Gives agents the ability to read/write Obsidian notes
- Agent can search, create, and link notes programmatically
- Best for: agent workflows that need persistent knowledge

**CLI search engine (qmd):**
- Fast full-text search across documents
- No server needed — runs locally
- Best for: quick lookups across large document collections

**Web-based knowledge OS (wiki-os):**
- Graph visualization and browsing interface
- Local-first, no cloud dependency
- Best for: visual exploration of knowledge graphs

## When to Use

- **second-brain** — automated Obsidian vault curation
- **obsidian-skills** — giving agents Obsidian access
- **qmd** — fast local search across documents
- **wiki-os** — visual graph exploration of knowledge
- **obsidian-mind** — agent memory backed by Obsidian

## Ecosystem

- Obsidian: [[kepano-obsidian-skills]], [[nicholasspisak-second-brain]], [[breferrari-obsidian-mind]]
- Search: [[tobi-qmd]]
- Web: [[ansub-wiki-os]]
- Related concepts: [[agent-memory]] (agent-specific memory), [[web-scraping]] (knowledge acquisition), [[presentation-markdown]] (knowledge output)
