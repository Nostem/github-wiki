---
title: Building a Trading Bot
created: 2026-04-13
updated: 2026-04-13
type: query
tags: [ai-ml, workflow, tool]
sources: []
---

# Building a Trading Bot

Synthesized answer for: "How would I build an AI-powered trading bot using starred repos?"

## Recommended Stack

**Exchange connectivity:** [[ccxt-ccxt]] — unified API across 100+ crypto exchanges. Start here. One codebase handles Binance, Coinbase, Kraken, etc. Python and JavaScript support.

**For multi-agent trading strategy:** [[tauricresearch-tradingagents]] — decomposes trading into specialist agents (analyst, trader, risk manager). Best when you want multiple perspectives on each trade decision.

**For single-agent autonomous trading:** [[hkuds-ai-trader]] — fully automated agent that researches, analyzes, and executes. Simpler architecture, good for single-strategy bots.

**For agent-assisted (human-in-loop):** [[hkuds-vibe-trading]] — your personal trading agent with autonomous decision making but designed for closer human oversight.

**For quantitative research:** [[y-research-sbu-quantagent]] — research-grade framework for systematic strategy development and backtesting.

**For TradingView integration:** [[tradesdontlie-tradingview-mcp]] — connect your agent to TradingView charts via MCP for technical analysis.

## Architecture Decision Tree

- **Crypto only, multiple exchanges?** → CCXT + any agent framework
- **Need multi-perspective analysis?** → TradingAgents (specialist agents)
- **Want full autonomy?** → AI-Trader
- **Want human oversight?** → Vibe-Trading
- **Research/backtesting first?** → QuantAgent
- **Prediction markets (not financial)?** → [[polymarket-agents]], [[jon-becker-prediction-market-analysis]]

## Related Concepts

- [[ai-trading]] — broader trading ecosystem
- [[prediction-markets]] — if you're interested in prediction markets specifically
- [[multi-agent-orchestration]] — if building multi-agent trading architecture
