---
title: czlonkowski-n8n-mcp
created: 2025-06-07
updated: 2026-04-13
type: entity
stars: 17714
github: czlonkowski/n8n-mcp
tags: [tool, workflow, devtools]
sources: [raw/stars/2026-04-08.md]
---

# czlonkowski-n8n-mcp

A MCP for Claude Desktop / Claude Code / Windsurf / Cursor to build n8n workflows

## What It Does
An MCP (Model Context Protocol) server that gives AI assistants deep structured knowledge of 1,396 n8n workflow automation nodes — their properties, operations, and documentation. Goes beyond simple node lookup: validates workflow configurations against node schemas, searches 2,709 workflow templates, and can directly create/update/test/deploy n8n workflows via the n8n API. Average query time ~12ms via optimized SQLite. Has a free hosted tier (100 tool calls/day) at dashboard.n8n-mcp.com.

## Key Features
- 1,396 nodes covered (812 core + 584 community), 87% docs coverage
- 2,709 workflow templates with 100% metadata coverage
- 2,646 pre-extracted configurations from popular templates
- Node validation: minimal, full, runtime, and strict modes
- Workflow validation including AI Agent/LangChain logic
- Direct n8n API integration: create, update, test, deploy workflows
- n8n_audit_instance scans for 50+ secret patterns and security flaws
- ~12ms average query time
- 2,883 tests (100% passing)
- Free hosted tier available

## Tech Stack
- Language: TypeScript
- Storage: SQLite (optimized)
- Docker image: ~280MB
- License: MIT

## Why I Starred It
This bridges the gap between "AI that can describe workflows" and "AI that can actually build and deploy them." The validation engine is the key differentiator — instead of the agent guessing at node configurations, it validates against actual schemas before deploying. The n8n_audit_instance security scan is a bonus. Connects directly to our N8N workflow automation needs.

## Related
- [[anthropics-claude-code]] (primary MCP client)
- [[gitroomhq-postiz-app]] (Postiz has N8N integration)
- [[obra-superpowers]] (workflow methodology)

## Use Cases
- Build n8n workflows conversationally: describe what you want, agent creates and validates it
- Audit existing n8n instances for leaked secrets and security misconfigurations
- Search workflow templates to find proven patterns before building from scratch
- Validate workflow configurations before deployment to catch misconfigurations early
- Use the hosted tier for quick experiments without local setup
- Automate workflow deployment pipelines via the n8n management API
