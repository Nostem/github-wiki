# GitHub Stars Wiki Schema

## Domain
My GitHub starred repositories — tools, libraries, projects, and the concepts/technologies they represent. The wiki captures what each repo does, why I starred it, and how it connects to other stars. This is a shared knowledge base for both human and AI agent use in research, synthesis, and project work.

## Conventions
- File names: lowercase, hyphens, no spaces (e.g., `huggingface-transformers.md`)
- Every wiki page starts with YAML frontmatter
- Use `[[wikilinks]]` to link between pages (minimum 2 outbound links per page)
- When updating a page, bump the `updated` date
- Every new page must be added to `index.md` under the correct section
- Every action appended to `log.md`

## Frontmatter
```yaml
---
title: Repo Name
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: entity | concept | comparison | query | summary
stars: N
github: owner/repo
tags: [from taxonomy below]
sources: [raw/articles/source-name.md]
---
```

## Tag Taxonomy

**Entity types:**
- `tool` — CLI tools, utilities, agents
- `library` — code libraries, frameworks, SDKs
- `platform` — platforms, services, hosting
- `research` — papers, publications, labs
- `learning` — tutorials, courses, documentation sites

**Technology categories:**
- `ai-ml` — machine learning, LLMs, transformers
- `devtools` — developer tooling, CLIs, editors
- `infrastructure` — cloud, containers, databases
- `web` — frontend, APIs, web frameworks
- `browser` — browser automation, extensions, devtools
- `language` — programming language specific (python, typescript, rust)
- `protocol` — protocols, standards, formats

**Use case tags:**
- `ui-ux` — UI frameworks, design systems, styling
- `workflow` — automation, scripting, pipelines
- `testing` — testing frameworks, CI/CD

**Status:**
- `starred` — currently starred
- `archived` — unstarred or superseded

Rule: every tag must appear in this taxonomy. Add new tags here before using.

## Page Thresholds
- **Create a repo page** when starred (entity)
- **Create a concept page** when a technology or pattern appears across 3+ repos
- **Create a comparison page** when comparing similar tools
- **Create a query page** when a synthesis answer is worth filing for reuse
- **DON'T create pages** for passing mentions, minor dependencies

## Entity Pages (repos)
One page per starred repo. Include:
- What it does (one-paragraph summary)
- Key features (bullet list)
- Tech stack / language
- Relationship to other repos [[wikilinks]]
- Why I starred it
- GitHub URL
- Use cases (how to apply it in a project)

## Concept Pages
One page per technology or pattern that spans multiple repos. Include:
- Definition / overview
- Related repos [[wikilinks]]
- Ecosystem (competing or complementary tools)
- Key techniques or patterns it enables
- When to use this vs alternatives

## Use Case Pages (queries/)
One page per synthesized answer to a recurring question. Example:
- "browser automation tools" → compiled from 5+ repos with different approaches
- "UI component libraries" → synthesis of what each does well, tradeoffs
- "typescript tooling" → unified view of ecosystem

These are written for both human and agent consumption — someone asking "how would I build X" should get a actionable answer.

## Cross-Reference Policy
Every entity page links to at least 2 related entities or concepts via [[wikilinks]].
Every concept page links to all repos that implement or relate to it.
This makes the wiki navigable for both human browsing and agent retrieval.

## Update Policy
When new information conflicts with existing content:
1. Newer stars data supersedes older
2. If contradictory, note both with dates and sources
3. Mark in frontmatter: `contradictions: [page-name]`

## Sources
- Star ingestion via GitHub API (stars list)
- Repo metadata from GitHub REST API
- README content via API or web
- Direct user notes on why starred