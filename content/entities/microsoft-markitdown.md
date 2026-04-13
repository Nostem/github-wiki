---
title: microsoft/markitdown
created: 2026-04-13
updated: 2026-04-13
type: entity
stars: 105940
github: microsoft/markitdown
tags: [tool, devtools, workflow]
sources: [raw/stars/2026-04-13.md]
---

# microsoft/markitdown

Microsoft's Python tool for converting files and office documents to Markdown. Supports PDF, PowerPo

## What It Does
Microsoft's Python tool for converting files and office documents to Markdown. Supports PDF, PowerPoint, Word, Excel, images (with OCR), audio (with transcription), HTML, CSV, JSON, XML, and ZIP archives. Designed as a lightweight utility for LLM ingestion pipelines.

## Key Features
- Converts: PDF, PPTX, DOCX, XLSX, images, audio, HTML, CSV, JSON, XML, ZIP
- Image OCR and audio transcription built-in
- CLI tool and Python library
- Plugin system for extending format support
- LLM-friendly output formatting
- Batch conversion support

## Tech Stack
- Language: Python
- License: MIT

## Why I Starred It
Every LLM pipeline eventually needs to convert arbitrary document formats to text. This handles the common cases without writing custom parsers.

## Related
- [[anthropics-claude-code]]
- [[shubhamsaboo-awesome-llm-apps]]

## Use Cases
- Convert office documents to Markdown for LLM context ingestion
- Batch-convert PDF research papers to text for wiki source material
- Extract text from images and scanned documents via OCR
- Transcribe audio files to text for documentation
- Build document processing pipelines that output clean Markdown
