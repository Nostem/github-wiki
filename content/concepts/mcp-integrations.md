---
title: mcp-integrations
created: 2026-04-13
updated: 2026-04-13
type: concept
tags: [ai-ml, protocol, infrastructure]
sources: [raw/stars/2026-04-08.md]
---

# MCP Integrations

Model Context Protocol (MCP) servers and integrations that give AI agents structured access to external tools, data sources, and services through a standardized interface.

## What This Concept Covers

MCP is Anthropic's protocol for connecting AI models to external capabilities:

- **MCP servers** — standalone processes that expose tools via the MCP protocol
- **Tool integration** — wrapping existing services (n8n, TradingView, design tools) as MCP tools
- **Agent connectivity** — how agents discover and invoke MCP-provided capabilities
- **Protocol standard** — the shared interface spec that makes tool exchange portable

## Related Repos

- [[czlonkowski-n8n-mcp]] — MCP server giving AI agents deep structured access to n8n's 1,396 workflow nodes
- [[tradesdontlie-tradingview-mcp]] — Connects Claude Code to TradingView for chart analysis
- [[jau123-meigen-ai-design-mcp]] — Local AI design tool exposed via MCP for agent-native design

## Key Approaches

**Service-specific MCP servers:**
- Wrap an existing platform (n8n, TradingView) as an MCP server
- Expose the platform's capabilities as structured tools
- Agent gets first-class access without custom integration code
- Best for: connecting agents to established platforms

**Agent-native design (MeiGen-MCP):**
- Design tools built specifically for agent consumption
- MCP as the delivery mechanism
- Agent can design as part of its normal workflow
- Best for: adding design capabilities to coding agents

**Ecosystem pattern:**
- MCP servers are discoverable — agents can find available tools
- Standardized schema means tools work across compatible agents
- Growing ecosystem of community-built MCP servers

## When to Use

- **n8n-mcp** — when agents need to create or manage automation workflows
- **TradingView-mcp** — financial analysis with chart access
- **MeiGen-MCP** — design as part of agent workflows

## Ecosystem

- Workflow: [[czlonkowski-n8n-mcp]]
- Finance: [[tradesdontlie-tradingview-mcp]]
- Design: [[jau123-meigen-ai-design-mcp]]
- Related concepts: [[agent-skills]] (MCP as skill delivery), [[ai-trading]] (trading via MCP), [[ui-ux-design]] (design via MCP)
