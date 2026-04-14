# Wiki Log

> Chronological record of all wiki actions. Append-only.
> Format: `## [YYYY-MM-DD] action | subject`
> Actions: ingest, update, query, lint, create, archive, delete

## [2026-04-08] create | GitHub Stars Wiki initialized
- Domain: GitHub starred repositories
- Structure created with SCHEMA.md, index.md, log.md

## [2026-04-08] ingest | First 15 stars (oldest, sorted by created asc)
- Fetched via unauthenticated GitHub API
- Sorted: oldest first, page 1 of stars
- Total: 15 repos ingested
- Created entity pages for all 15
- Raw data saved to: raw/stars/2026-04-08.md

## [2026-04-08] create | Concept pages (3)
- concepts/agent-skills.md — Skill patterns, specs, and collections
- concepts/web-scraping.md — Scraping approaches: adaptive, browser automation, managed
- concepts/claude-code-subagents.md — Subagent vs skill, 100+ pre-built subagents
- Cross-referenced with entity pages via [[wikilinks]]

## [2026-04-08] update | Index updated
- Total pages: 18 (15 entities + 3 concepts)
- All new pages added to index.md under correct sections
## [2026-04-08] ingest | Daily star ingestion — Run 2
- GitHub API: fetched all 115 starred repos (sorted by created asc)
- Compared against 15 existing entity pages — found 100 new repos
- Fetched full details for 39 repos (API batches, respecting rate limits)
- Created 39 new entity pages in entities/
- Created 5 new concept pages: coding-agents, multi-agent-orchestration, autonomous-research, fine-tuning, claude-code-extensions
- Raw batch data appended to: raw/stars/2026-04-08.md (added 39 repos)
- Updated index.md: now 33 entities + 8 concepts = 41 total pages
- New entity pages all have minimum 2 wikilinks to existing pages

## [2026-04-13] update | Enrichment pass — 12 entity pages
- Fetched actual README content via GitHub API + web_extract for 12 thinnest entity pages
- Pages enriched: pbakaus-impeccable, gitroomhq-postiz-app, qwenlm-qwen-agent, obra-superpowers, czlonkowski-n8n-mcp, codecrafters-io-build-your-own-x, public-apis-public-apis, jaywcjlove-awesome-mac, behisecc-awesome-claude-skills, rohitg00-awesome-claude-code-toolkit, voltagent-awesome-agent-skills, lyogavin-airllm
- Changes: expanded "What It Does" from generic GitHub taglines to specific technical descriptions; added concrete use cases (5-6 per page); improved Key Features with real capabilities; enriched "Why I Starred It" with personal relevance; added Tech Stack details (license, framework); improved cross-references
- All 12 pages updated to 2026-04-13 in frontmatter

## [2026-04-13] ingest | Remaining 112 starred repos
- Fetched all 143 starred repos via GitHub API
- Compared against 34 existing entity pages — found 112 missing repos
- Fetched README content for top 55 repos (highest stars)
- Created 112 new entity pages with specific descriptions from READMEs
- Top enriched (README-backed): f/prompts.chat, microsoft/markitdown, github/spec-kit, sherlock-project/sherlock, msitarzewski/agency-agents, karpathy/autoresearch, unslothai/unsloth, and 48 more
- Remaining 57 repos created with descriptions based on GitHub metadata
- Total wiki now: 146 entities + 8 concepts = 154 pages
- Index regenerated with all pages sorted by stars

## [2026-04-13] ingest | No new stars
- Fetched all 143 starred repos via GitHub API
- Compared against 146 existing entity pages (case-insensitive)
- 0 new repos found
- 3 unstarred repos noted: f-prompts-chat, openclaw-starter-kit, x-research-skill
- Total pages: 146 entities + 8 concepts = 154

## [2026-04-13] create | Concept synthesis pass (13 new concepts)
- Full synthesis across 146 entity pages to identify missing concept clusters
- New concepts created:
  - browser-automation — agent-browser, hyperbrowser, discrawl, scrapling
  - ai-trading — tradingagents, ai-trader, ccxt, vibe-trading, quantagent, nofx
  - agent-memory — claude-mem, cognee, hindsight, byterover-cli, lossless-claw, obsidian-mind
  - ui-ux-design — ui-ux-pro-max, impeccable, design-systems, design-md, meigen-mcp
  - speech-audio — whisper, insanely-fast-whisper, transcribe-anything
  - presentation-markdown — marp, markitdown, pretext
  - prediction-markets — prediction-market-analysis, polymarket-agents, mirofish
  - agent-self-improvement — self-evolution, metaclaw, openspace, autoresearchclaw
  - mcp-integrations — n8n-mcp, tradingview-mcp, meigen-ai-design-mcp
  - knowledge-management — second-brain, obsidian-skills, qmd, obsidian-mind, wiki-os
  - cli-universal — cli-anything, googleworkspace-cli, minimax-cli, clawteam
  - social-media — postiz-app, x-research-skill, discrawl
  - agent-orchestration-platforms — flowise, ruflo, paperclip, multica
- Backlinks added to 50 entity pages
- Total pages: 146 entities + 21 concepts = 167

## [2026-04-13] update | Index rewrite — full descriptions
- Rewrote all 146 entity index entries with full 2-3 sentence descriptions
- Regenerated entity page first paragraphs from features/use cases (146 pages)
- Fixed word-break artifacts from original 100-char truncation
- Index entries now include: what it does, key differentiator, primary use case
- Total pages: 172 (146 entities + 21 concepts + 5 queries)

## [2026-04-13] create | Use-case query pages (5)
- queries/building-a-trading-bot.md — CCXT, TradingAgents, AI-Trader, Vibe-Trading
- queries/building-a-personal-knowledge-base.md — Obsidian skills, Cognee, qmd, wiki-os
- queries/setting-up-an-ai-coding-agent-workflow.md — Claude Code, skills, subagents, TDD
- queries/building-a-web-scraping-pipeline.md — Scrapling, agent-browser, Hyperbrowser
- queries/creating-agent-skills-and-plugins.md — Anthropic spec, best practices, SkillKit
- Each page includes: recommended stack, architecture decision tree, related concepts

## [2026-04-13] create | Concept: digital-garden
- Knowledge systems built on bidirectional linking, graph structures, and organic growth
- Related repos: second-brain, obsidian-skills, obsidian-mind, wiki-os, qmd, cognee
- Covers: LLM-curated gardens, agent-native vaults, graph visualization, structured graphs
- Includes comparison table: digital garden vs traditional KB
- Backlinks added to 6 entity pages
- Total pages: 173 (146 entities + 22 concepts + 5 queries)
