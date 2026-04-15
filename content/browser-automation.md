---
title: browser-automation
created: 2026-04-13
updated: 2026-04-13
type: concept
tags: [browser, ai-ml, tool, workflow]
sources: [raw/stars/2026-04-08.md]
---

# Browser Automation

Programmatic control of web browsers for tasks like scraping, testing, form filling, and agent-driven web interaction. Goes beyond simple HTTP requests by executing JavaScript, handling dynamic content, and simulating real user behavior.

## What This Concept Covers

Browser automation spans a spectrum from simple page fetching to full autonomous web agents:

- **Navigation and interaction** — clicking, typing, scrolling, waiting for elements
- **Content extraction** — pulling structured data from rendered pages
- **Agent-driven browsing** — AI agents that autonomously navigate websites to complete tasks
- **Visual understanding** — screenshot-based analysis of page content

## Related Repos

- [[vercel-labs-agent-browser]] — Rust-based browser automation CLI designed for AI agents. Fast, headless, agent-native
- [[hyperbrowserai-hyperbrowser-app-examples]] — Managed browser automation platform with example applications
- [[steipete-discrawl]] — Discord CLI with SQLite backend, uses browser-like data access patterns
- [[d4vinci-scrapling]] — Python scraping with adaptive matching that survives site changes

## Key Approaches

**Headless browser control (Playwright/Puppeteer):**
- Full browser engine renders JavaScript
- Programmatic click/type/scroll via selectors
- Slower but handles all modern web apps
- Most coding agents use this under the hood

**Agent-native browser (agent-browser pattern):**
- Purpose-built for AI agents to use as a tool
- CLI-first interface with structured output
- Optimized for speed (Rust backend)
- Returns snapshots, screenshots, or extracted data

**Managed platforms (Hyperbrowser):**
- API-based, no local browser to manage
- Scales automatically with concurrency
- Cost per usage, good for production workloads

**Adaptive scraping (Scrapling):**
- Pattern matching survives DOM changes
- Less maintenance than CSS selector approaches
- Python-first, good for research pipelines

## When to Use

- **agent-browser** — when building an AI agent that needs web access as a tool
- **Hyperbrowser** — production workloads needing scale without infrastructure
- **Scrapling** — research pipelines scraping sites that change frequently
- **Playwright directly** — fine-grained control, testing, complex multi-step flows

## Ecosystem

- Core tools: [[vercel-labs-agent-browser]], [[hyperbrowserai-hyperbrowser-app-examples]]
- Resilient scraping: [[d4vinci-scrapling]]
- Related concepts: [[web-scraping]] (broader data extraction), [[coding-agents]] (agents that use browsers)
