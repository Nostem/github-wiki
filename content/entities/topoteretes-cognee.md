---
title: topoteretes-cognee
created: 2025-10-20
updated: 2026-04-08
type: entity
stars: 15873
github: topoteretes/cognee
tags: [library, python, ai-ml]
sources: [raw/stars/2026-04-08.md]
---

# topoteretes-cognee

6-line setup for basic memory. Multiple storage backends (vector DB, graph, etc.). Give any agent persistent memory across sessions.




## What It Does
Cognee is a memory layer for AI agents. Instead of stuffing all context into every prompt (expensive and limited), agents store structured knowledge in cognee and retrieve only what's relevant to the current task. Supports multiple storage backends and retrieval strategies.

## Key Features
- 6-line setup for basic memory
- Multiple storage backends (vector DB, graph, etc.)
- Configurable retrieval strategies
- Works with any LLM
- Knowledge graph construction from unstructured data

## Tech Stack
- Language: Python
- Integrates with: any LLM API

## Why I Starred It
Memory is what separates "stateless query" from "persistent agent." Every agent project eventually hits the context window limit — cognee is a concrete solution. The "6 lines" claim is compelling: if it delivers on simplicity, it's the go-to memory layer for agent projects. Worth comparing to building custom retrieval pipelines.

## Related
- [[qwenlm-qwen-agent]] — agent framework that likely needs memory like this — agent methodology; memory is a core requirement
- [[shubhamsaboo-awesome-llm-apps]] — LLM app patterns that often need memory


## Concepts
- [[agent-memory]]
- [[digital-garden]]
- [[databases]]
## Use Cases
- Give any agent persistent memory across sessions
- Build RAG pipelines for agent knowledge retrieval
- Manage long-term memory for multi-turn conversations
- Structure unstructured documents into queryable knowledge