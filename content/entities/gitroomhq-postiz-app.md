---
title: gitroomhq-postiz-app
created: 2023-07-08
updated: 2026-04-13
type: entity
stars: 27933
github: gitroomhq/postiz-app
tags: [platform, web, ai-ml]
sources: [raw/stars/2026-04-08.md]
---

# gitroomhq-postiz-app

The ultimate social media scheduling tool, with a bunch of AI

## What It Does
Open-source social media management platform — a self-hostable alternative to Buffer, Hypefury, and TweetHunter. Supports scheduling posts across X/Twitter, Bluesky, Mastodon, Discord, Facebook, Instagram, LinkedIn, and TikTok. Uses official OAuth flows (no scraping, no storing API keys). Has a full REST API for automation via N8N, Make.com, and Zapier. Also offers a Postiz-as-a-Service mode for SaaS companies to embed social scheduling into their own products with multi-tenant isolation.

## Key Features
- Multi-platform scheduling: X, Bluesky, Mastodon, Discord, Facebook, Instagram, LinkedIn, TikTok
- AI-enhanced content optimization and scheduling
- Team collaboration with commenting and post exchange
- Full public REST API for headless automation
- N8N node and Make.com integration out of the box
- Postiz-as-a-Service: multi-tenant, headless API for embedding in other products
- Self-hosted version has full parity with cloud
- ~3M Docker downloads

## Tech Stack
- Language: TypeScript (73.5%)
- Frontend: Next.js (React)
- Backend: NestJS
- Database: PostgreSQL via Prisma
- Workflow: Temporal
- License: AGPL-3.0

## Why I Starred It
Self-hostable social media scheduling with real API integrations is rare. The Postiz-as-a-Service angle is interesting — if I ever needed to embed social scheduling into a product, this provides multi-tenant isolation and a headless API without building from scratch. The N8N integration connects directly to our workflow automation.

## Related
- [[czlonkowski-n8n-mcp]] (N8N workflow automation, integrates with Postiz API)
- [[shubhamsaboo-awesome-llm-apps]] (AI app patterns)
- [[gitroomhq-postiz-app]] [[obra-superpowers]] (workflow methodology reference)

## Use Cases
- Self-host social media scheduling for personal brand or team without monthly SaaS fees
- Automate content posting pipelines via N8N workflows triggered by content calendars
- Embed social scheduling into a SaaS product using Postiz-as-a-Service headless API
- Use the REST API to build custom dashboards or integrate with existing content tools
- Run analytics on post engagement across multiple platforms from a single interface
