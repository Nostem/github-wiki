---
title: autonomous-research
created: 2026-04-08
updated: 2026-04-08
type: concept
tags: [ai-ml, workflow]
sources: [raw/stars/2026-04-08.md]
---

# autonomous-research

AI agents that autonomously conduct research tasks — gathering information, synthesizing findings, and producing reports with minimal human intervention. These agents handle long-horizon tasks where planning, adaptation, and multi-source synthesis are required.

## Definition
Autonomous research agents are AI systems designed to deeply investigate topics, questions, or domains over extended time horizons. They browse the web, read papers, analyze data, and iteratively refine their understanding. Unlike short-response Q&A, they produce comprehensive research outputs.

## Related Repos
- [[karpathy-autoresearch]] — Karpathy's single-GPU nanochat research agent (68k stars)
- [[virattt-dexter]] — Autonomous financial research agent (21k stars)
- [[koala73-worldmonitor]] — Geopolitical intelligence dashboard (47k stars)
- [[affaan-m-everything-claude-code]] — Agent harness with research capabilities (145k stars)
- [[bytedance-deer-flow]] — Long-horizon SuperAgent for research and creation (59k stars)

## Key Techniques
- **Iterative research loops**: Plan → search → synthesize → gaps → repeat
- **Multi-source synthesis**: Web, papers, databases combined
- **Long-horizon planning**: Multi-step task decomposition
- **Adaptive depth**: Auto-determine when research is sufficient
- **Report generation**: Structured output with citations

## Ecosystem
- **Research agents**: AutoResearch, Dexter, deer-flow, WorldMonitor
- **Training**: Karpathy's autoresearch (LLM training automation)
- **Financial**: Dexter (stocks, markets)
- **OSINT**: WorldMonitor (geopolitics, news)

## When to Use
Autonomous research agents are appropriate when:
- Topic requires browsing multiple sources over extended time
- Manual research would take hours for a human
- Questions have no single definitive answer
- Synthesis across multiple domains is needed

