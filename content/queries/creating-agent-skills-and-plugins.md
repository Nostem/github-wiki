---
title: Creating Agent Skills and Plugins
created: 2026-04-13
updated: 2026-04-13
type: query
tags: [ai-ml, workflow, tool, devtools]
sources: []
---

# Creating Agent Skills and Plugins

Synthesized answer for: "How would I create agent skills or plugins using starred repos?"

## Recommended Stack

**The spec:** [[anthropics-skills]] — Anthropic's official skill definition. Start here to understand the interface (triggers, inputs, schema). This is the canonical reference.

**Skill collections for reference:** [[voltagent-awesome-agent-skills]] — 1000+ skills to study how others structure theirs. [[voltagent-awesome-openclaw-skills]] — 5400+ OpenClaw skills. [[alirezarezvani-claude-skills]] — 232+ Claude skills by domain.

**Best practices for writing:** [[mgechev-skills-best-practices]] — how to write professional-grade skills, validate them with LLMs, and maintain quality. The "how to write good skills" guide.

**Skill packaging/distribution:** [[rohitg00-skillkit]] — install, translate, and share skills across agents. Portable skill format.

**Skill tooling:** [[hesreallyhim-awesome-claude-code]] — hooks, slash-commands, and skill orchestration patterns.

**Subagents (skills++):** [[voltagent-awesome-claude-code-subagents]] — pre-built subagents that bundle multiple skills into domain-specialized agents.

## Architecture Decision Tree

- **Writing your first skill?** → anthropic-skills (spec) + skills-best-practices (guide)
- **Need examples to study?** → awesome-agent-skills collections
- **Packaging for distribution?** → SkillKit
- **Want to go beyond skills?** → Subagent collections
- **MCP as skill delivery?** → [[mcp-integrations]] concept

## Related Concepts

- [[agent-skills]] — skill architecture and patterns
- [[mcp-integrations]] — MCP as an alternative skill delivery mechanism
- [[claude-code-extensions]] — broader Claude Code extension ecosystem
- [[coding-agents]] — the agents that use skills
