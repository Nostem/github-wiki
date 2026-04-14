---
title: public-apis
created: 2016-03-20
updated: 2026-04-13
type: entity
stars: 420163
github: public-apis/public-apis
tags: [devtools, protocol, learning]
sources: [raw/stars/2026-04-08.md]
---

# public-apis

Hundreds of free APIs across 50+ categories. Each entry has: auth type, HTTPS indicator, CORS support flag. Find free weather, finance, geocoding, or stock market APIs for projects without signing up for 1....





## What It Does
The definitive community-curated directory of free public APIs, maintained by APILayer and community contributors. Each entry includes metadata: auth type (apiKey, OAuth, None), HTTPS support, and CORS compatibility. Organized across 50+ categories including Animals, Development Tools, Finance/Crypto, Geocoding, Government Open Data, Health, Machine Learning, Media/Entertainment, Security, Social Media, and Transportation. Also features a programmatic API (davemachado/public-api) for accessing the list itself.

## Key Features
- Hundreds of free APIs across 50+ categories
- Each entry has: auth type, HTTPS indicator, CORS support flag
- Categories: Finance (Alpha Vantage, Fixer), Geocoding (ipapi, Mapbox), Science (NASA, SpaceX), Security (VirusTotal, HaveIBeenPwned), Social (Discord, Reddit, Telegram)
- Featured APILayer APIs: IPstack, Marketstack, Weatherstack, Numverify, Fixer, Aviationstack
- Notable entries: JSONPlaceholder (fake data), Httpbin (HTTP testing), icanhazdadjoke, CORS Proxy
- Programmatic access via davemachado/public-api project
- 417k+ stars, 45k+ forks

## Tech Stack
- Primary: Python (96.8%) — for tooling/contribution scripts
- Content: Markdown tables
- License: MIT

## Why I Starred It
When you need an external data source for any project, this is the first place to look. The auth/HTTPS/CORS metadata per entry saves time — no need to click through to docs just to check if an API is free and supports HTTPS. Relevant for anything from the trading bot (finance APIs) to the agent system (search/scraping APIs).

## Related
- [[anthropics-skills]] (agent skills that use APIs)
- [[obra-superpowers]] (workflow context for API integration)

## Use Cases
- Find free weather, finance, geocoding, or stock market APIs for projects without signing up for 10 services
- Check auth type and CORS support before integrating — avoid surprises mid-implementation
- Discover APIs for agent tool integrations (weather, search, translation, etc.)
- Reference for nuclear plant data visualization (government open data APIs)
- Build testing environments with JSONPlaceholder and Httpbin
