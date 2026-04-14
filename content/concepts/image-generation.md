---
title: image-generation
created: 2026-04-13
updated: 2026-04-13
type: concept
tags: [ai-ml, tool, workflow]
sources: []
---

# Image Generation

AI systems that create images from text prompts, modify existing images, or generate variations — from photorealistic renders to artistic illustrations, logos, and UI mockups.

## What This Concept Covers

- **Text-to-image** — describe what you want, get an image
- **Image-to-image** — transform or restyle an existing image
- **Inpainting/outpainting** — edit specific regions or extend image boundaries
- **Upscaling** — increase resolution and detail of existing images
- **Control/composition** — fine-grained control over layout, pose, style
- **Prompt engineering** — crafting effective prompts for desired output quality

## Related Repos

- [[youmind-openlab-awesome-nano-banana-pro-prompts]] — 10,000+ curated prompts for AI image generation via Google's Gemini (Nano Banana Pro). Study prompt patterns across 16 languages
- [[f-prompts-chat]] — Community prompt library including image generation prompts for multiple models
- [[minimax-ai-cli]] — CLI for MiniMax AI including image generation alongside text, video, speech, and music
- [[minimax-ai-skills]] — Official MiniMax skills including image and media generation capabilities

## Options by Category

### Frontier Models (Highest Quality)

**DALL-E 3 (OpenAI)**
- Text-to-image via ChatGPT or API
- Strong prompt understanding, good text rendering
- Built-in safety filters
- Best for: quick generation through ChatGPT, production use via API

**Midjourney**
- Highest aesthetic quality for artistic images
- Discord-based interface (web UI in development)
- Strong community, style reference support
- Best for: artistic, stylized, high-aesthetic images

**FLUX (Black Forest Labs)**
- Open-weight models (FLUX.1 Schnell, Dev, Pro)
- Excellent prompt adherence and text rendering
- Fast inference, especially Schnell variant
- Best for: open-source deployment, production pipelines, when you need control over the model

**Google Imagen 3**
- High-quality text-to-image via Google AI Studio / Vertex AI
- Strong photorealism and prompt understanding
- Best for: Google ecosystem integration, enterprise use

**Ideogram**
- Best-in-class text rendering in images (logos, signs, typography)
- Good prompt adherence for design-oriented images
- Best for: images containing readable text, logo mockups, design work

### Open Source / Self-Hosted

**Stable Diffusion 3 / SDXL (Stability AI)**
- Most widely used open-source image models
- Massive ecosystem: ComfyUI, Automatic1111, Fooocus
- LoRA fine-tuning for custom styles
- ControlNet for precise composition control
- Best for: local generation, custom model training, maximum control

**ComfyUI**
- Node-based workflow editor for Stable Diffusion
- Visual pipeline building — chain models, LoRAs, upscalers, samplers
- Most powerful SD interface for complex workflows
- Best for: power users, complex multi-step pipelines, batch production

**Fooocus**
- Simplified Stable Diffusion UI (Midjourney-like experience)
- One-click install, good defaults
- Best for: getting started with local SD without complexity

**AUTOMATIC1111 / Forge WebUI**
- Feature-rich web interface for Stable Diffusion
- Extensions ecosystem, img2img, inpainting, upscaling
- Best for: SD users wanting a full-featured GUI

### API Services

**Replicate**
- Run open-source models (SDXL, FLUX, etc.) via API
- Pay per inference, no GPU management
- Best for: adding image generation to apps without GPU infrastructure

**Fireworks AI**
- Fast inference for open models
- Low latency, competitive pricing
- Best for: production API calls needing speed

**Together AI**
- Inference platform for open models
- SDXL, FLUX, and others available
- Best for: batch generation, fine-tuning hosting

### Specialized

**Leonardo.ai**
- Platform with multiple models, fine-tuning, and asset management
- Game asset and concept art focus
- Best for: game dev, concept art teams

**Playground AI**
- Social platform for image generation
- Multiple models, community gallery
- Best for: exploration, inspiration, social sharing

**Adobe Firefly**
- Trained on licensed/public domain content
- Integrated into Photoshop, Illustrator
- Best for: commercial work needing IP-safe images

## Prompt Engineering Tips

| Technique | Example | Effect |
|-----------|---------|--------|
| Specific subject | "Golden retriever puppy sitting on a red velvet couch" | More accurate composition |
| Style reference | "in the style of Studio Ghibli" | Consistent aesthetic |
| Lighting | "dramatic side lighting, golden hour" | Mood and depth |
| Camera | "macro lens, shallow depth of field" | Perspective control |
| Quality tags | "8k, highly detailed, professional photography" | Sharpness boost |
| Negative prompt | "blurry, low quality, watermark" | Avoid common artifacts |

## Decision Matrix

| Need | First Choice | Alternative |
|------|-------------|-------------|
| Quick generation (no setup) | ChatGPT (DALL-E 3) | Midjourney |
| Highest artistic quality | Midjourney | FLUX Pro |
| Best text in images | Ideogram | DALL-E 3 |
| Local / self-hosted | FLUX Schnell + ComfyUI | SDXL + Fooocus |
| Production API | FLUX via Replicate | Fireworks AI |
| Custom style training | SDXL LoRA | FLUX fine-tuning |
| Commercial-safe | Adobe Firefly | DALL-E 3 (with license) |
| Learning prompt patterns | [[youmind-openlab-awesome-nano-banana-pro-prompts]] | [[f-prompts-chat]] |

## Related Concepts

- [[ui-ux-design]] — image generation for UI mockups and design assets
- [[presentation-markdown]] — images for slides and documents
- [[agent-skills]] — image generation as an agent capability
- [[coding-agents]] — agents that generate images as part of workflows
