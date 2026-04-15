---
title: airllm
created: 2026-04-08
updated: 2026-04-13
type: entity
stars: 15150
github: lyogavin/airllm
tags: [library, python, ai-ml, infrastructure]
sources: [raw/stars/2026-04-08.md]
---

# lyogavin-airllm

70B on 4GB GPU, 405B on 8GB GPU — no quantization needed. No quality loss: no pruning, distillation, or aggressive compression. Run 70B+ models on a work laptop with 4GB GPU for offline/private inference.





## What It Does
Optimization framework for running massive LLMs on consumer-grade GPUs. Runs 70B models on a 4GB GPU and 405B models (Llama 3.1) on an 8GB GPU — without quantization, distillation, or pruning. Works by decomposing models layer-by-layer and loading them on demand, preserving full model quality. Supports Llama 3.1 (405B), Llama 3 (70B), Qwen 2.5, Mixtral, ChatGLM, Baichuan, Mistral, InternLM. Optional block-wise quantization (4bit/8bit) adds 3x speed boost with negligible accuracy loss. Works on Linux and macOS (Apple Silicon). Interface mirrors HuggingFace AutoModel.

## Key Features
- 70B on 4GB GPU, 405B on 8GB GPU — no quantization needed
- No quality loss: no pruning, distillation, or aggressive compression
- HuggingFace-compatible AutoModel interface
- Block-wise quantization for 3x speedup (4bit/8bit optional)
- Supports: Llama 3.1/3, Qwen 2.5, Mixtral, ChatGLM, Baichuan, Mistral, InternLM
- Cross-platform: Linux + macOS (Apple Silicon)
- CPU inference supported as of v2.10.1
- Prefetching overlaps loading and computation

## Tech Stack
- Language: Python
- Framework: PyTorch
- Optional: bitsandbytes (for quantization), mlx (macOS)
- Author: Gavin Li

## Why I Starred It
Removes the GPU barrier for experimenting with very large models. The "no quantization" claim is the differentiator — most solutions sacrifice quality to fit on small GPUs. For privacy-sensitive work or offline scenarios (like nuclear plant environments where cloud access is restricted), running 70B locally on a modest GPU is valuable. The HuggingFace-compatible API means minimal code changes.

## Related
- [[openai-whisper]] (another model optimized for local inference)
- [[qwenlm-qwen-agent]] (agent framework that could run on AirLLM-optimized models)
- [[obra-superpowers]] (agentic framework that could use local model inference)

## Use Cases
- Run 70B+ models on a work laptop with 4GB GPU for offline/private inference
- Experiment with Llama 3.1 405B without renting expensive cloud GPUs
- Deploy large models in environments with restricted cloud access
- Use 4bit block-wise quantization for 3x speedup when quality tradeoff is acceptable
- Test and compare different large models locally before committing to cloud deployment
- Run inference on Apple Silicon Macs without cloud dependency