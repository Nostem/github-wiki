---
title: Coolify
created: 2026-04-15
updated: 2026-04-15
type: entity
stars: 52600
github: coollabsio/coolify
tags: [platform, infrastructure, tool, starred]
sources: []
---

# Coolify

An open-source, self-hostable PaaS that gives you the experience of Heroku, Netlify, or Vercel — but on your own infrastructure. You connect any SSH-accessible server (VPS, bare metal, Raspberry Pi), and Coolify handles deployments, SSL, domains, databases, environment variables, and CI/CD through a clean web UI. 52.6k stars, 204k+ servers running it worldwide, 672 releases — actively maintained and production-grade.

## Key Features

- **280+ one-click services** — Postgres, Redis, MySQL, MariaDB, n8n, Ghost, Minio, Gitea, and more; all launched with a single click on your own server
- **Zero vendor lock-in** — all configs live on your server; resources keep running even if you stop using Coolify
- **Multi-server management** — control multiple servers from one Coolify instance; scale horizontally without changing tools
- **Full application types** — static sites, full-stack apps, databases, Docker Compose stacks, private Docker registries
- **Automatic SSL** — Let's Encrypt certificates provisioned automatically per domain
- **Git-native deploys** — connect any GitHub, GitLab, or Gitea repo; push to deploy, with webhook support
- **Coolify Cloud option** — pay $5/month to have the Coolify instance itself managed (high-availability, email notifications, less maintenance) while your apps still run on your servers
- **API + CLI** — automate deployments, manage resources, and integrate with existing CI/CD pipelines

## Tech Stack

- **Language:** PHP (78%), Blade (19%), Shell (1%)
- **Framework:** Laravel + Livewire
- **UI:** Tailwind v4 + Vite
- **Queue:** Laravel Horizon
- **Database:** PostgreSQL (prod), SQLite (testing)
- **Testing:** Pest + Playwright
- **License:** Apache-2.0

## Use Cases

- Replace Vercel/Netlify for full-stack apps when free tier limits become costly
- Self-host databases (Postgres, Redis, MySQL) alongside your apps on one VPS
- Run 280+ open-source services (n8n, Ghost, Gitea, Minio) without per-service SaaS fees
- Build a multi-tenant deployment platform for a team or agency
- Deploy Docker Compose stacks directly from a repo to any SSH-accessible server
- Pair with a $5 Hetzner VPS for a complete production deployment stack under $10/month

## Deployment Cost Model

| Setup | Monthly Cost |
|---|---|
| Self-hosted Coolify + Hetzner CX22 | ~$4–6 (server only) |
| Coolify Cloud + your server | ~$5 (management fee) + server |
| Equivalent on Vercel (Pro) | $20+ beyond free tier |

## Why I Starred It

Best cost/control ratio for indie projects and small SaaS. The self-hosted PaaS layer removes 90% of ops friction (SSL, domains, env vars, restart policies) without locking you into a platform with opaque pricing. The 280+ one-click services make it a complete infrastructure platform, not just a deployment tool. Actively maintained with 591 contributors and Hetzner as a sponsor — not a side project.

## Related

- [[deployment-platforms]] — full map of managed, self-hosted, and raw VPS options
- [[databases]] — storage engines that Coolify can provision for you one-click
