---
title: awesome-claude-code-toolkit
created: 2026-04-08
updated: 2026-04-13
type: entity
stars: 1137
github: rohitg00/awesome-claude-code-toolkit
tags: [tool, javascript, ai-ml, workflow]
sources: [raw/stars/2026-04-08.md]
---

# awesome-claude-code-toolkit

Most comprehensive toolkit for Claude Code — 135 agents, 35 skills, 42 commands, 150+ plugins, 19 hooks, 15 rules, 7 templates, and 8 MCP configs.

## What It Does
The most comprehensive Claude Code extension toolkit — 850+ files including 176 plugins, 135 specialized agent personas, 35 curated skills, 42 slash commands, 20 lifecycle hooks, 14 MCP configurations, and 7 CLAUDE.md templates. Goes beyond simple lists: includes production workflows like pro-workflow (self-correcting memory + parallel worktrees), gstack (Garry Tan's CEO/Eng/QA agent team), claude-code-mcp (run Claude Code as an MCP server within Claude Code), claude-cost-optimizer (30-70% cost reduction), and AgentLint (validates repo compatibility across 33 dimensions). Also provides access to 400k+ skills via SkillKit marketplace integration.

## Key Features
- 176 plugins including pro-workflow, gstack, claude-cost-optimizer, AgentLint
- 135 agent personas: language experts (25 languages), cloud architects, security auditors, SREs
- 42 slash commands: /commit, /pr-create, /tdd, /plan (with risk assessment), /diagram (Mermaid), /checkpoint
- 20 hooks: destructive command blockers, secret leak prevention, session context loaders, commit guards
- 14 MCP configs: Full Stack (filesystem+GitHub+Postgres+Puppeteer), Research (papers+search), Observability (tracing+cost)
- 7 CLAUDE.md templates: Minimal, Standard, Monorepo, Enterprise
- SkillKit integration: `npx skillkit@latest search "react"` for 400k+ marketplace skills
- Companion apps: Opcode (desktop GUI), vibe-kanban (multi-agent orchestration), claude-mem (35k+ stars)

## Tech Stack
- Language: JavaScript
- License: Apache-2.0
- Install: /plugin marketplace add rohitg00/awesome-claude-code-toolkit

## Why I Starred It
This is the "apt-get install" for Claude Code capabilities. The pro-workflow plugin's self-correcting memory pattern is clever — it persists learnings across sessions. AgentLint checking repo compatibility across 33 dimensions before starting work saves debugging time. The 14 MCP configs are pre-tested setups rather than raw docs. The cost-optimizer alone could save significant API spend.

## Related
- [[voltagent-awesome-agent-skills]] (skill collections it draws from)
- [[voltagent-awesome-claude-code-subagents]] (smaller, focused subagent collection)
- [[anthropics-skills]] (official skill spec)
- [[behisecc-awesome-claude-skills]] (curated quality subset)
- [[obra-superpowers]] (methodology it extends)

## Use Cases
- Install pro-workflow for self-correcting memory + parallel worktree development
- Use /plan with risk assessment before starting complex features
- Run AgentLint to check if a repo is compatible with AI agents before attempting to work on it
- Set up claude-cost-optimizer to reduce API spend by 30-70%
- Use gstack to simulate a virtual engineering team (CEO review, Eng review, QA Lead)
- Browse MCP configs for pre-tested setups (Full Stack, Research, Observability)
- Search SkillKit marketplace for domain-specific skills: `npx skillkit@latest search "security"`