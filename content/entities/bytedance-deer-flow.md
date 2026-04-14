---
title: bytedance-deer-flow
created: 2025-05-15
updated: 2026-04-08
type: entity
stars: 59211
github: bytedance/deer-flow
tags: [tool, ai-ml, research, workflow]
sources: [raw/stars/2026-04-08.md]
---

# bytedance-deer-flow

Long-horizon task support (minutes to hours). Sandboxed execution (safe code running). Research tasks that require browsing, analyzing, and synthesizing.




## What It Does
Deer Flow is a research-oriented agent framework designed for long-horizon tasks. Unlike coding agents that focus on single-file edits, Deer Flow can sustain multi-hour research tasks with proper memory management, sandboxed code execution, and hierarchical subagent orchestration.

## Key Features
- Long-horizon task support (minutes to hours)
- Sandboxed execution (safe code running)
- Persistent memory across sessions
- Skill composition (combine existing skills)
- Subagent orchestration (hierarchical agent teams)
- Message gateway (routing between components)
- Multi-language support (Python + Node.js)

## Tech Stack
- Language: Python (backend), Node.js (orchestration)

## Why I Starred It
Most agents are evaluated on short tasks. Deer Flow is explicitly designed for research tasks that take hours — this is a harder problem (memory, continuity, error recovery over long periods). The #1 GitHub trending spot after 2.0 launch signals real community validation.

## Related
- [[obra-superpowers]] — similar long-horizon agent design
- [[anthropics-claude-code]] — short-horizon coding agent (different design goals)
- [[claude-code-subagents]] — subagent patterns that Deer Flow implements
- [[autonomous-research]] — concept page for research-focused agents

## Use Cases
- Research tasks that require browsing, analyzing, and synthesizing
- Multi-hour coding projects with memory continuity
- Building agent pipelines that chain research + implementation
- Studying long-horizon agent architecture