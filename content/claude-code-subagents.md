---
title: claude-code-subagents
created: 2026-04-08
updated: 2026-04-08
type: concept
tags: [ai-ml, workflow, tool, shell]
sources: [raw/stars/2026-04-08.md]
---

# Claude Code Subagents

A **subagent** is a specialized Claude Code agent configured for a specific domain or task — e.g., a frontend developer subagent, a DevOps subagent. Rather than a general-purpose agent that does everything poorly, a subagent is an expert in one area.

## What This Concept Covers

Subagents solve the "jack of all trades" problem:
- General agent: decent at everything, expert at nothing
- Subagent: focused expertise in one domain

Example subagent types:
- Frontend developer (writes UI, knows frameworks)
- DevOps engineer (CI/CD, deployments, infra)
- Security auditor (finds vulnerabilities, reviews code)
- Research analyst (reads papers, synthesizes findings)

## Related Repos

- [[voltagent-awesome-claude-code-subagents]] — 100+ pre-built subagents, the main reference
- [[x-research-skill]] — a research subagent for X/Twitter
- [[rohitg00-awesome-claude-code-toolkit]] — 135 agents included (broader than just subagents)
- [[obra-superpowers]] — methodology for building subagent-based workflows

## Subagent vs Skill

| | Skill | Subagent |
|---|---|---|
| Scope | Single capability | Full agent for a domain |
| Calls tools | Yes | Yes (and can call skills) |
| Knows domain | No | Yes |
| Composition | Composes into agents | Composes into systems |

A subagent can call multiple skills. Skills are building blocks; subagents are specialized workers.

## When to Use Subagents

- Need expert-level performance in a specific domain
- Building multi-agent systems (different subagents for different tasks)
- Want to reuse domain expertise across projects

## Relationship to Agent Skills

Subagents often call skills. [[voltagent-awesome-claude-code-subagents]] and [[obra-superpowers]] both show how skills compose into subagent workflows.