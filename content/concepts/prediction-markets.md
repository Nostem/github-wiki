---
title: prediction-markets
created: 2026-04-13
updated: 2026-04-13
type: concept
tags: [ai-ml, tool, workflow]
sources: [raw/stars/2026-04-08.md]
---

# Prediction Markets

Collective intelligence platforms and AI systems for forecasting events — aggregating signals, analyzing market data, and generating predictions.

## What This Concept Covers

- **Market data collection** — scraping and structuring prediction market prices
- **Forecasting engines** — swarm intelligence and aggregation models for prediction
- **Agent-based analysis** — AI agents that research and bet on prediction markets
- **Signal synthesis** — combining market data with news, research, and sentiment

## Related Repos

- [[jon-becker-prediction-market-analysis]] — Framework for collecting and analyzing prediction market data (Polymarket, Metaculus)
- [[polymarket-agents]] — Python framework and CLI for deploying autonomous agents on Polymarket
- [[666ghj-mirofish]] — Universal swarm intelligence engine for prediction and forecasting

## Key Approaches

**Market data analysis (prediction-market-analysis):**
- Structured collection from Polymarket, Metaculus, and others
- Historical price tracking and trend analysis
- Statistical methods for identifying mispriced markets
- Best for: research, backtesting, systematic analysis

**Autonomous trading agents (polymarket-agents):**
- Agents that analyze and place bets on prediction markets
- Combines market data with news/sentiment analysis
- Automated position management
- Best for: hands-off prediction market participation

**Swarm intelligence (MiroFish):**
- Collective intelligence model for forecasting
- Aggregates signals from multiple sources
- Not market-specific — general forecasting engine
- Best for: complex multi-factor predictions

## When to Use

- **prediction-market-analysis** — researching and analyzing market data systematically
- **polymarket-agents** — autonomous participation in prediction markets
- **MiroFish** — general forecasting with swarm intelligence

## Ecosystem

- Data: [[jon-becker-prediction-market-analysis]]
- Agents: [[polymarket-agents]]
- Forecasting: [[666ghj-mirofish]]
- Related concepts: [[ai-trading]] (financial markets), [[multi-agent-orchestration]] (swarm patterns)
