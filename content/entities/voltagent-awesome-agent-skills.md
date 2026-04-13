---
title: awesome-agent-skills
created: 2026-04-08
updated: 2026-04-13
type: entity
stars: 14722
github: VoltAgent/awesome-agent-skills
tags: [tool, ai-ml, workflow]
sources: [raw/stars/2026-04-08.md]
---

# awesome-agent-skills

Claude Code Skills and 1,000+ agent skills from official dev teams and the community — compatible with Codex, Antigravity, Gemini CLI, Cursor, and others.

## What It Does
Hand-picked collection of 1,000+ agent skills from official engineering teams (Anthropic, Microsoft, Google, HashiCorp, Stripe, etc.) and the community. Unlike bulk AI-generated repos, these are real-world tools. Provides exact skill installation paths for 7 platforms: Claude Code (.claude/skills/), Cursor (.cursor/skills/), GitHub Copilot (.github/skills/), Gemini CLI (.gemini/skills/), Windsurf (.windsurf/skills/), Codex (.agents/skills/). Enforces quality standards: third-person descriptions, progressive disclosure (<100 tokens metadata, <500 lines body), no absolute paths, scoped tool declarations.

## Key Features
- Official teams: Anthropic (Office Suite, web-artifacts-builder, MCP builder), Microsoft (133+ Azure/AI Foundry skills), Google (Gemini API, Workspace CLI), HashiCorp (Terraform), Stripe
- Infrastructure: Cloudflare/Netlify deployment, Supabase/Neon/ClickHouse DB skills, DuckDB (attach + query local/remote files)
- Engineering: Figma-to-code (1:1 translation), Expo native UI, HuggingFace training (TRL/SFT/DPO)
- Community highlights: gstack (virtual engineering team), Trail of Bits (smart contract security), cybersecurity suite (753 skills mapped to MITRE ATT&CK), PM skills (100+ frameworks)
- Security scanners: Snyk Skill Security Scanner, Agent Trust Hub
- Quality standards: third-person descriptions, progressive disclosure, scoped tools, no absolute paths

## Tech Stack
- Content: Markdown (SKILL.md format per agent platform)
- License: Varies per skill

## Why I Starred It
The canonical cross-platform skill directory. The quality standards section is underrated — knowing what makes a good skill (scoped tools, progressive disclosure, no absolute paths) helps evaluate and create better skills. The official team skills (Microsoft's 133+ Azure skills, Google's Workspace CLI) are high-quality and actively maintained. The security notice is honest: "curated, not audited."

## Related
- [[anthropics-skills]] (official skill spec and source)
- [[behisecc-awesome-claude-skills]] (curated Claude-specific subset)
- [[rohitg00-awesome-claude-code-toolkit]] (Claude Code toolkit drawing from these)
- [[voltagent-awesome-openclaw-skills]] (OpenClaw-specific 5400+ skills)

## Use Cases
- Look up platform-specific installation paths when setting up skills on a new agent
- Find official Microsoft/Google/HashiCorp skills before relying on community alternatives
- Use Figma-to-code skill for 1:1 design implementation from Figma mocks
- Reference quality standards when creating new SKILL.md files
- Browse MITRE ATT&CK-mapped cybersecurity skills for security auditing
- Search SkillKit marketplace: `npx skillkit@latest search "<domain>"`