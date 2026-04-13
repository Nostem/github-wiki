---
title: multi-agent-orchestration
created: 2026-04-08
updated: 2026-04-08
type: concept
tags: [ai-ml, workflow]
sources: [raw/stars/2026-04-08.md]
---

# multi-agent-orchestration

Platforms and frameworks for coordinating multiple AI agents to work together on complex tasks — enabling swarm intelligence, role-based specialization, and hierarchical task decomposition.

## Definition
Multi-agent orchestration platforms coordinate multiple AI agents, each with potentially different capabilities, to collaboratively solve complex problems. Agents may be specialized (researcher, coder, reviewer) or homogeneous (swarm). Communication patterns include hierarchical (one agent delegates), peer-to-peer (agents negotiate), and funnel (output feeds input).

## Related Repos
- [[ruvnet-ruflo]] — Agent orchestration for Claude, multi-agent swarms (30k stars)
- [[bytedance-deer-flow]] — Long-horizon SuperAgent harness (59k stars)
- [[msitarzewski-agency-agents]] — Complete AI agency with specialized agents (75k stars)
- [[openclaw-openclaw]] — Cross-platform AI assistant with skills ecosystem (351k stars)
- [[nousresearch-hermes-agent]] — Self-improving agent with OpenClaw (35k stars)

## Key Techniques
- **Role specialization**: Different agents for research, coding, review, execution
- **Hierarchical delegation**: Manager agent decomposes and delegates tasks
- **Swarm coordination**: Peer agents collaborate on shared objectives
- **Memory sharing**: Agents share context and learned information
- **MCP integration**: Model Context Protocol for tool access standardization

## Ecosystem
- **Orchestration platforms**: RuView, OpenClaw, Hermes Agent
- **Agent harnesses**: deer-flow, Agency Agents, ClawCode
- **Skill frameworks**: Superpowers, OpenClaw skills

## When to Use
Multi-agent orchestration is appropriate when:
- Problems decompose naturally into specialized sub-tasks
- Multiple perspectives or approaches need to be combined
- Tasks require different tool sets or knowledge domains
- Resilience to individual agent failures is needed

Compare to [[coding-agents]] when a single agent with code context is sufficient.

