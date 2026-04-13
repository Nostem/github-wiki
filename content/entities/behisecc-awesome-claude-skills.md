---
title: awesome-claude-skills
created: 2026-04-08
updated: 2026-04-13
type: entity
stars: 8264
github: BehiSecc/awesome-claude-skills
tags: [tool, ai-ml, workflow]
sources: [raw/stars/2026-04-08.md]
---

# awesome-claude-skills

A curated list of Claude Skills — community skills for extending Claude Code.

## What It Does
Curated collection of Claude skills organized by domain — development, documents/media, data/research, collaboration, and security. Stands out from larger collections by including specific niche tools: VibeSec-Skill for web app security scanning, 125+ scientific skills for bioinformatics/ML, read-only SQL execution for Postgres/MySQL/MSSQL, office document skills (docx/pdf/pptx/xlsx), text-to-speech via ElevenLabs and Google TTS, DeFi portfolio analytics across 20+ chains, and a 69,000-skill directory at agentskill.sh. Also includes meta-tools like agnix (linter for agent configs) and skill-creator (official template for building new skills).

## Key Features
- Development: web-artifacts-builder, TDD skill, git worktrees, AWS CDK, Terraform, Azure DevOps, Move language
- Documents: docx/pdf/pptx/xlsx skills, RevealJS presentations, EPUB generation, YouTube transcript summarization
- Data/Research: read-only SQL for Postgres/MySQL/MSSQL, 125+ scientific skills, paper-search (250M+ works via OpenAlex), DeFi analytics
- Security: VibeSec-Skill, OWASP Top 10:2025, FFUF integration, PII sanitizer
- Collaboration: Kanban board, Linear integration, ClickUp CLI, Google Workspace
- Meta: agentskill.sh (69k+ skills), Agent Almanac (317 skills), OpenPaw (38-skill personal assistant bundle), agnix config linter

## Tech Stack
- Content: Markdown (SKILL.md format)
- License: Varies per skill

## Why I Starred It
Different curation philosophy than VoltAgent — focuses on quality and domain depth over raw count. The VibeSec security skill is directly useful for web projects. The read-only SQL skills are a safer pattern than full MCP database access. The paper-search skill using OpenAlex (no API key needed) is valuable for research. Good complement to the broader VoltAgent list.

## Related
- [[voltagent-awesome-agent-skills]] (broader cross-platform collection)
- [[rohitg00-awesome-claude-code-toolkit]] (overlapping Claude Code skills)
- [[anthropics-skills]] (official skill spec)

## Use Cases
- Find Claude-specific skills not in broader cross-platform lists
- Use VibeSec to audit web apps for OWASP Top 10 vulnerabilities
- Search 250M+ academic papers with paper-search (no API key, uses OpenAlex)
- Execute safe read-only SQL queries against production databases
- Convert markdown or chat logs into Kindle-ready EPUB files
- Use agnix to lint SKILL.md files for spec compliance before publishing