---
title: social-media
created: 2026-04-13
updated: 2026-04-13
type: concept
tags: [tool, workflow, ai-ml]
sources: [raw/stars/2026-04-08.md]
---

# Social Media

Tools for social media research, content management, and platform interaction — from research skills that read Twitter threads to self-hosted scheduling platforms.

## What This Concept Covers

- **Research and monitoring** — searching, reading, and synthesizing social media content
- **Content management** — scheduling, publishing, and managing posts across platforms
- **Platform access** — programmatic access to Twitter/X, Discord, and other platforms
- **Agent integration** — giving AI agents social media capabilities

## Related Repos

- [[gitroomhq-postiz-app]] — Open-source social media management platform, self-hosted alternative to Buffer/Hootsuite
- [[rohunvora-x-research-skill]] — X/Twitter research skill for Claude Code — agentic search, thread following, synthesis
- [[steipete-discrawl]] — CLI for Discord with SQLite backend, local search and management

## Key Approaches

**Social media management (Postiz):**
- Schedule and publish across platforms
- Self-hosted, no vendor lock-in
- AI-assisted content creation
- Best for: teams managing multiple social accounts

**Research skills (x-research-skill):**
- Agent searches and reads Twitter/X content
- Thread following and synthesis
- Research-first, not posting
- Best for: market research, sentiment analysis, topic monitoring

**Platform data access (Discrawl):**
- Local SQLite database of Discord data
- Search and query without API limits
- Best for: Discord data analysis and archival

## When to Use

- **Postiz** — managing social media publishing workflow
- **x-research-skill** — agent-driven Twitter/X research
- **Discrawl** — local Discord data management and search

## Ecosystem

- Management: [[gitroomhq-postiz-app]]
- Research: [[rohunvora-x-research-skill]]
- Data: [[steipete-discrawl]]
- Related concepts: [[web-scraping]] (broader data extraction), [[agent-skills]] (social media as a skill), [[prediction-markets]] (social sentiment for forecasting)
