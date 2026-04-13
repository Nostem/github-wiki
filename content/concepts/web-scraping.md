---
title: web-scraping
created: 2026-04-08
updated: 2026-04-08
type: concept
tags: [web, browser, tool, python, typescript]
sources: [raw/stars/2026-04-08.md]
---

# Web Scraping

Automated extraction of data from websites — from single pages to full-scale crawls. Used for research, data collection, and feeding content into knowledge systems.

## What This Concept Covers

Web scraping encompasses:
- Fetching web pages (HTML, JSON)
- Parsing and extracting structured data
- Handling dynamic content (JavaScript-rendered)
- Resilience against site changes
- Scalability (single request to distributed crawl)

## Related Repos

- [[d4vinci-scrapling]] — Python, adaptive matching handles site changes automatically
- [[hyperbrowserai-hyperbrowser-app-examples]] — TypeScript, managed browser automation platform
- [[x-research-skill]] — uses browser automation for social media research

## Key Approaches

**Selector-based** (traditional):
- Find elements via CSS/XPath selectors
- Fast but brittle — breaks when site changes
- Most libraries use this

**Adaptive matching** (Scrapling):
- AI-like pattern matching finds elements even when selectors change
- More resilient to site updates
- Slower but much less maintenance

**Browser automation** (Playwright/Puppeteer):
- Real browser renders JavaScript
- Handles dynamic content
- Higher overhead, slower

**Managed platforms** (Hyperbrowser):
- API-based, no infrastructure to manage
- Scales automatically
- Cost per usage

## When to Use

- [[d4vinci-scrapling]] — when you need resilient scraping that doesn't break on site updates
- [[hyperbrowserai-hyperbrowser-app-examples]] — when you want managed infrastructure, don't want to run browsers
- [[x-research-skill]] — research-focused scraping with built-in result processing

## For This Wiki

The [[raw/stars/2026-04-08.md]] source data for starred repos comes from GitHub API — not scraped. But when building wiki content from web sources, these tools are the reference.