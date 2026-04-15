---
title: qwenlm-qwen-agent
created: 2023-09-22
updated: 2026-04-13
type: entity
stars: 15929
github: QwenLM/Qwen-Agent
tags: [library, ai-ml, platform]
sources: [raw/stars/2026-04-08.md]
---

# qwenlm-qwen-agent

Function calling with parallel tool invocation (default). MCP support for external tool servers (SQLite, filesystem, etc.). Build production agent applications on open-source Qwen models.





## What It Does
Official agent framework from the Qwen team, built on Qwen 3.0+ models. Provides atomic components (LLMs, tools) and high-level components (agents) for building production LLM applications. Supports function calling with parallel tool use, MCP (Model Context Protocol) for external tool integration, a Docker-sandboxed code interpreter, and RAG with 1M+ token context. This is the backend powering chat.qwen.ai. Includes BrowserQwen (Chrome extension) and specialized agents like parallel document QA.

## Key Features
- Function calling with parallel tool invocation (default)
- MCP support for external tool servers (SQLite, filesystem, etc.)
- Docker-containerized code interpreter for safe execution
- RAG solution passing 1M-token needle-in-haystack tests
- Custom tool creation via @register_tool decorator and BaseTool class
- Supports DashScope API, vLLM, and Ollama self-hosted backends
- DeepPlanning benchmark for agent evaluation
- BrowserQwen Chrome extension built on the framework

## Tech Stack
- Language: Python (91.4%)
- Framework: PyTorch
- License: Apache-2.0

## Why I Starred It
The Qwen ecosystem is the strongest open-source alternative to closed agent frameworks. The 1M+ token RAG that outperforms native long-context models is a real differentiator. The MCP integration means it plugs into the same tool ecosystem as Claude. Good reference for how to build a clean agent framework with proper tool abstraction.

## Related
- [[anthropics-claude-code]] (similar agent framework, MCP-compatible)
- [[obra-superpowers]] (agentic methodology)
- [[shubhamsaboo-awesome-llm-apps]] (LLM app patterns)
- [[topoteretes-cognee]] (knowledge/memory engine for agents)

## Use Cases
- Build production agent applications on open-source Qwen models
- Use the code interpreter for data analysis workflows with Docker sandboxing
- Implement RAG over large document collections (1M+ tokens) for knowledge-intensive tasks
- Create custom tools via the @register_tool decorator and compose them into agent pipelines
- Benchmark agent planning capabilities using the DeepPlanning evaluation suite
- Self-host an agent backend with vLLM or Ollama instead of relying on cloud APIs
