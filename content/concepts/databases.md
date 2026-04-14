---
title: databases
created: 2026-04-13
updated: 2026-04-13
type: concept
tags: [infrastructure, tool, library, ai-ml]
sources: []
---

# Databases

Storage engines and data persistence options for applications, agents, and projects — from embedded single-file databases to managed vector stores for AI workloads.

## What This Concept Covers

Choosing the right database depends on the workload:

- **Embedded databases** — no server, single file, zero config. Local-first apps and tools.
- **Relational databases** — structured data, joins, transactions. The default for most backends.
- **Vector databases** — embeddings storage and similarity search. Essential for RAG and semantic search.
- **Key-value stores** — fast cache, session state, pub/sub. High-throughput simple lookups.
- **Search engines** — full-text search over documents. Better than LIKE queries.
- **Analytics databases** — columnar storage for aggregating large datasets.

## Embedded Databases (No Server)

### SQLite
- Single file, zero config, runs everywhere
- FTS5 extension for full-text search
- Good enough for most local-first and single-user apps
- Used in: [[steipete-discrawl]] (Discord data), [[czlonkowski-n8n-mcp]] (workflow data)
- **When to use:** local apps, CLI tools, embedded storage, prototyping, single-user

### DuckDB
- Columnar analytics engine, runs in-process like SQLite
- Native support for Parquet, CSV, JSON querying
- OLAP workloads — aggregations over millions of rows
- **When to use:** data analysis, querying files without loading them, analytics pipelines

## Relational Databases (Server Required)

### PostgreSQL
- The default choice for production backends
- Full-text search (tsvector), JSONB for flexible schemas
- Massive extension ecosystem: pgvector, PostGIS, pg_cron
- Used in: [[gitroomhq-postiz-app]] (social media platform)
- **When to use:** production apps, complex queries, ACID transactions, multi-user

### MySQL / MariaDB
- Simpler than Postgres, widely deployed
- Good for read-heavy web apps
- **When to use:** existing MySQL infrastructure, simple web apps, WordPress-style platforms

## Vector Databases (AI/Embeddings)

### pgvector (Postgres extension)
- Vector similarity search inside Postgres — no separate service
- Combine relational queries with vector search
- Best for: teams already on Postgres wanting to add semantic search

### ChromaDB
- Python-native, purpose-built for embeddings
- Simple API, good for prototyping RAG pipelines
- Lightweight, runs in-process or as server
- Best for: Python projects, local development, quick RAG setup

### Qdrant
- Production-grade vector DB with filtering and payload storage
- Rust-based, high performance
- Best for: production semantic search, recommendation systems

### Weaviate
- Vector DB with built-in ML model integration
- GraphQL API, supports hybrid search (vector + keyword)
- Best for: enterprise search, multimodal applications

## Key-Value / Cache

### Redis
- In-memory key-value store, sub-millisecond latency
- Pub/sub, streams, sorted sets, Lua scripting
- Used for: session state, caching, rate limiting, queues
- **When to use:** caching, real-time features, session management

### KeyDB
- Redis-compatible, multi-threaded, faster
- Active-replication, flash storage support
- **When to use:** Redis workload but need more throughput

## Search Engines

### Elasticsearch
- Distributed search and analytics engine
- Full-text search, aggregations, real-time indexing
- Heavy operationally — JVM, cluster management
- **When to use:** production search at scale, log analytics

### Meilisearch
- Lightweight, fast, typo-tolerant search
- Easy to set up, REST API
- **When to use:** adding search to apps without Elasticsearch complexity

### Pagefind (static)
- Pre-built search index at build time
- Runs entirely in the browser, no server
- **When to use:** static sites, JAMstack, wiki search

### SQLite FTS5
- Full-text search built into SQLite
- No separate service needed
- Used in: [[steipete-discrawl]] for Discord message search
- **When to use:** local search over SQLite data

## Managed / Serverless

### Supabase
- Managed Postgres + auth + storage + edge functions
- Realtime subscriptions, row-level security
- Generous free tier
- Best for: full-stack apps wanting Postgres without ops

### Neon
- Serverless Postgres — scales to zero when idle
- Branching (like git for databases)
- Best for: serverless apps, preview environments, cost optimization

### Turso
- Managed SQLite at the edge — libSQL fork
- Replicated close to users, low latency reads
- Best for: edge apps wanting SQLite simplicity globally

### PlanetScale
- Managed MySQL with branching and non-blocking schema changes
- Vitess-based horizontal scaling
- Best for: MySQL apps at scale

### Convex
- Reactive backend-as-a-service
- TypeScript-native, real-time sync
- Best for: real-time collaborative apps

## Decision Matrix

| Need | First Choice | Alternative |
|------|-------------|-------------|
| Local app, single user | SQLite | DuckDB (analytics) |
| Production backend | PostgreSQL | MySQL |
| Semantic search / RAG | pgvector | ChromaDB, Qdrant |
| Caching / sessions | Redis | KeyDB |
| Full-text search | SQLite FTS5 / Meilisearch | Elasticsearch |
| Static site search | Pagefind | Algolia |
| Serverless / edge | Neon, Turso | Supabase |
| Real-time sync | Convex | Supabase Realtime |

## Related Concepts

- [[knowledge-management]] — databases backing knowledge bases
- [[agent-memory]] — vector stores for agent memory
- [[digital-garden]] — SQLite FTS5 for garden search, Pagefind for static search
- [[ai-trading]] — databases for market data and backtesting
- [[coding-agents]] — agents that interact with databases
