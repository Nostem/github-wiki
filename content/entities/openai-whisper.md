---
title: openai-whisper
created: 2026-04-08
updated: 2026-04-08
type: entity
stars: 97341
github: openai/whisper
tags: [library, python, ai-ml]
sources: [raw/stars/2026-04-08.md]
---

# openai-whisper

Robust Speech Recognition via Large-Scale Weak Supervision — OpenAI's open-source speech-to-text model.

## What It Does
Whisper is a general-purpose speech recognition model trained on large-scale weakly-supervised audio data. It transcribes audio in multiple languages, handles noisy backgrounds, and works well out of the box. Available as a pip-installable Python package with a fast inference mode.

## Key Features
- Multilingual transcription (100+ languages)
- Strong noise robustness
- Multiple model sizes (tiny → large)
- Fast inference via ONNX runtime
- Pre-trained weights, open source

## Tech Stack
- Language: Python
- Framework: PyTorch / ONNX
- Model: Transformer-based encoder-decoder

## Why I Starred It
Go-to for speech-to-text in personal projects. Reliable, no API cost, runs locally. Good fit for agents that need to process audio — meeting transcripts, voice commands, etc.

## Related
- [[openclaw-starter-kit]] — could integrate Whisper as an agent tool
- [[lyogavin-airllm]] — optimization techniques for running large models locally
- [[x-research-skill]] — could transcribe audio from video content

## Use Cases
- Meeting transcription and summarization
- Voice command processing for agents
- Content accessibility ( captions, transcripts)
- Audio search and indexing