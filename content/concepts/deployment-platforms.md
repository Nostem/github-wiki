---
title: Deployment Platforms
created: 2026-04-15
updated: 2026-04-15
type: concept
tags: [platform, infrastructure, workflow]
sources: []
---

# Deployment Platforms

The ecosystem of services and tools that take your code from a git repository to a running, publicly accessible application. Ranges from zero-config managed platforms (you push, they handle everything) to self-hosted PaaS layers you run on your own infrastructure.

## The Core Tradeoff

Every deployment option lives on a spectrum between **control** and **convenience**:

- **Managed platforms** (Vercel, Netlify) — no server management, instant global CDN, but vendor lock-in and costs that scale sharply past the free tier
- **Self-hosted PaaS** ([[coollabsio-coolify|Coolify]]) — you own the server, the PaaS layer abstracts the ops complexity; best cost/control ratio for most indie projects
- **Raw cloud VPS** — maximum control, maximum configuration burden; viable when you need something the PaaS layers can't express

## Managed / Serverless Platforms

These require no server management. You connect a GitHub repo and they handle build, deploy, CDN, SSL, and scaling.

### Frontend / Edge-First

| Platform | Best For | Strengths | Free Tier |
|---|---|---|---|
| **Vercel** | Next.js, React frontends | Best Next.js integration, deploy previews, edge functions | Yes (generous) |
| **Netlify** | JAMstack, static sites, serverless functions | Broadest JAMstack ecosystem, form handling, identity | Yes |
| **Cloudflare Pages + Workers** | Edge-first, global reach, DDoS protection | Unmatched global CDN, Workers for serverless, very generous limits | Very generous |

Vercel is the default for Next.js. Cloudflare is the default when you need global edge latency or serious DDoS protection.

### Full-Stack Platforms

| Platform | Best For | Billing Model |
|---|---|---|
| **Render** | Full-stack: web services, background workers, DBs | Usage-based; free tier spins down on inactivity |
| **Railway** | Fast iteration, full-stack with DBs | $5 credit/month, usage billing after |
| **Fly.io** | Containerized apps, edge VMs, low-latency | Per-VM billing; limited free |
| **AWS Amplify** | AWS-native, Next.js/React | Free tier; complex pricing at scale |
| **Firebase Hosting** | SPAs, Firebase-integrated apps | Storage + egress pricing; free tier |

Render is Netlify for full-stack. Railway has the smoothest DX for backend + DB combos. Fly.io is strongest when latency proximity to users matters.

## Self-Hosted PaaS

You bring a VPS; the PaaS handles the rest. Dramatically cheaper at scale.

| Platform | Notes | Best For |
|---|---|---|
| **[[coollabsio-coolify\|Coolify]]** | 52.6k stars, Docker-based, 280+ one-click services, clean UI | Best DX, most actively maintained, the default pick |
| **CapRover** | Older, simpler, also Docker-based | Minimal setups or when Coolify feels heavy |
| **Dokku** | Minimal Heroku clone, CLI-driven, git push deploys | Pure CLI preference, Heroku muscle memory |
| **Portainer** | Docker/Kubernetes management UI | Ops teams already managing containers directly |

Coolify is the clear leader here — 52k+ stars, 204k+ servers running it worldwide, 280+ one-click services (Postgres, Redis, n8n, Ghost, etc.). Install takes one `curl` command on any VPS.

## Raw Cloud VPS Providers

When you want maximum control or are running something the PaaS layers can't express:

| Provider | Notes | Price Anchor |
|---|---|---|
| **Hetzner** | Cheapest EU/US VMs, Coolify's main sponsor | ~$4–6/mo |
| **DigitalOcean** | App Platform (managed) or raw Droplets; good docs | ~$6/mo Droplet |
| **Linode/Akamai** | Solid mid-tier, global regions | ~$5/mo |
| **Fly.io** | Also a raw VM option at the edge | Per-VM billing |

Hetzner + Coolify is the best cost/control combination for most solo projects. Total cost: ~$5/month with zero platform markup.

## Decision Matrix

| Situation | Recommended |
|---|---|
| Pure Next.js frontend | Vercel (free tier) |
| Static site / JAMstack | Cloudflare Pages or Netlify |
| Full-stack app + DB, early-stage | Railway or Render |
| Cost-sensitive, comfortable with a VPS | Coolify + Hetzner |
| Self-hosted, need Docker Compose services | Coolify |
| Enterprise / AWS-native | AWS Amplify or ECS |
| Containerized app, edge latency matters | Fly.io |

## Key Patterns

- **Deploy previews** — Vercel and Netlify create isolated URLs per PR; great for design review
- **One-click services** — Coolify ships 280+ pre-configured services (databases, tools, CMS) you can deploy with one click on your own server
- **Edge functions** — Cloudflare Workers and Vercel Edge Functions run serverless code at the CDN layer, not a central region
- **No vendor lock-in** — Coolify explicitly keeps your apps running even if you stop using Coolify itself

## Related

- [[coollabsio-coolify]] — self-hosted PaaS, the open-source alternative to managed platforms
- [[databases]] — storage options that pair with deployment platforms
- [[infrastructure]] — broader cloud and container infrastructure context
