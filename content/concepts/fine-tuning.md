---
title: fine-tuning
created: 2026-04-08
updated: 2026-04-08
type: concept
tags: [ai-ml, workflow]
sources: [raw/stars/2026-04-08.md]
---

# fine-tuning

Tools and platforms for training and fine-tuning open LLMs — making open-source models like Qwen, Llama, Gemma, DeepSeek, and Mistral better at specific domains or tasks through continued training.

## Definition
Fine-tuning is the process of continuing training on a base LLM to adapt it to specific domains, tasks, or behaviors. Unlike pre-training from scratch, fine-tuning is cheaper and faster while retaining most of the base model's capabilities. Popular approaches include LoRA (low-rank adaptation), QLoRA (quantized LoRA), and full fine-tuning.

## Related Repos
- [[unslothai-unsloth]] — 2-5x faster fine-tuning for open LLMs (60k stars)
- [[openai-whisper]] — Speech recognition model, fine-tuned from Whisper (97k stars)
- [[karpathy-autoresearch]] — AI agents that autonomously research LLM training (68k stars)

## Key Techniques
- **LoRA/QLoRA**: Memory-efficient fine-tuning via low-rank adapters
- **Quantization**: INT4/INT8 for reduced memory footprint
- **Domain adaptation**: Fine-tuning on domain-specific data
- **Task-specific tuning**: Models specialized for coding, math, etc.
- **Multi-GPU training**: Scaling fine-tuning across GPUs

## Ecosystem
- **Fine-tuning platforms**: Unsloth Studio, Axoltl, lit-llm
- **Base models**: Qwen3.5, Gemma 4, DeepSeek, Llama 3, Mistral
- **Training data**: SFT datasets, preference data for RLHF
- **Inference**: vLLM, llama.cpp, Ollama

## When to Use
Fine-tuning is appropriate when:
- Base model lacks domain-specific knowledge
- You need consistent output format or tone
- API costs for frontier models are prohibitive
- You want a self-hosted alternative to closed models

See [[shubhamsaboo-awesome-llm-apps]] for LLM applications that use fine-tuned models.

