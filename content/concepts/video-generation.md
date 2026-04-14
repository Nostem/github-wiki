---
title: video-generation
created: 2026-04-13
updated: 2026-04-13
type: concept
tags: [ai-ml, tool, workflow]
sources: []
---

# Video Generation

AI systems that create, edit, and produce video content — from text-to-video generation to automated production pipelines, motion graphics, and long-form editing with AI agents.

## What This Concept Covers

- **Text-to-video** — describe a scene, get a video clip
- **Image-to-video** — animate a still image
- **Video editing with AI** — automated cuts, transitions, captioning
- **Production pipelines** — end-to-end video creation with AI agents
- **Motion graphics** — animated titles, lower thirds, data visualizations
- **Avatar/presenter videos** — AI-generated talking heads for presentations

## Related Repos

- [[calesthio-openmontage]] — World's first open-source agentic video production system. 12 pipelines, 52 production tools. Automate video production with AI agents handling scripting, footage selection, editing, and output
- [[minimax-ai-cli]] — CLI for MiniMax AI including video generation alongside text, image, speech, and music generation
- [[minimax-ai-skills]] — Official MiniMax skills including video and media generation capabilities

## Options by Category

### Frontier Video Models

**Sora (OpenAI)**
- Text-to-video, up to 1080p, 20 seconds
- Strong physics understanding and scene coherence
- Available through ChatGPT Plus/Pro
- Best for: high-quality short clips, concept visualization

**Veo 2 (Google DeepMind)**
- Text-to-video via Google AI Studio
- 4K output, cinematic quality
- Strong camera control (pan, tilt, zoom)
- Best for: cinematic clips, Google ecosystem

**Runway Gen-3 Alpha**
- Text-to-video, image-to-video, video-to-video
- Motion Brush for precise motion control
- Professional video editor integration
- Best for: creative professionals, video editing workflows

**Kling (Kuaishou)**
- Text-to-video up to 2 minutes
- Strong motion and physics
- Available via API and web interface
- Best for: longer-form clips, motion-heavy scenes

**Pika**
- Text-to-video, image-to-video
- Scene elements — modify specific parts of video
- Good stylization options
- Best for: stylized/animated clips, quick experiments

**MiniMax (Hailuo)**
- Text-to-video with strong character consistency
- Available via API, CLI, and skills
- Best for: character-driven videos, MiniMax ecosystem users

### Open Source / Self-Hosted

**Stable Video Diffusion (Stability AI)**
- Image-to-video, open weights
- Short clips (4-5 seconds)
- ComfyUI integration
- Best for: local image animation, open-source pipelines

**CogVideoX (THUDM / Zhipu)**
- Open-source text-to-video
- 5B and 2B parameter variants
- Good quality for open models
- Best for: self-hosted video generation, research

**AnimateDiff**
- Animate Stable Diffusion outputs
- Works with existing SD models and LoRAs
- Short animations from text or image
- Best for: creating animated content from SD workflows

**Mochi (Genmo)**
- Open-source video generation model
- Strong temporal consistency
- Apache 2.0 license
- Best for: open-source video generation, commercial use

### AI Video Editing / Production

**[[calesthio-openmontage]] (OpenMontage)**
- Agentic video production: 12 pipelines, 52 tools
- Agents handle scripting, footage search, editing, export
- Open-source, runs locally
- Best for: automated video production, content creation at scale

**Opus Clip**
- Long-form video → short clips for social media
- AI identifies highlights, adds captions
- Virality scoring
- Best for: repurposing podcasts/interviews for social

**Descript**
- Edit video by editing text transcript
- AI-powered filler word removal, eye contact correction
- Screen recording, podcasting
- Best for: talking-head videos, podcasts, educational content

**CapCut (ByteDance)**
- Free video editor with AI features
- Auto-captions, background removal, templates
- Mobile and desktop
- Best for: social media content, quick edits

**Pictory**
- Blog/article → video conversion
- AI selects stock footage to match script
- Best for: content repurposing, marketing videos

### Avatar / Presenter Videos

**HeyGen**
- AI avatar videos from text scripts
- Voice cloning, multi-language lip sync
- Best for: training videos, marketing, multilingual content

**Synthesia**
- Enterprise AI avatar platform
- 150+ avatars, 120+ languages
- Best for: corporate training, scalable presenter videos

**D-ID**
- Photo → talking head video
- API for programmatic generation
- Best for: bringing still images to life, simple presenter videos

### Motion Graphics

**Remotion**
- Programmatic video in React
- Code-based animations, data-driven visuals
- Best for: developer-created videos, data visualizations, automated graphics

**Rive**
- Real-time interactive animations
- State machine for animation logic
- Best for: animated UI elements, game assets, interactive content

**Lottie / Bodymovin**
- Lightweight vector animations
- Export from After Effects, render anywhere
- Best for: web/app animations, micro-interactions

## Production Pipeline Example

```
Script → AI generates script from topic
  ↓
Voice → TTS generates narration (ElevenLabs, MiniMax)
  ↓
Footage → AI selects/generates video clips (Runway, Sora)
  ↓
Edit → OpenMontage or Descript assembles
  ↓
Captions → Auto-caption (CapCut, Descript)
  ↓
Export → Final render
```

## Decision Matrix

| Need | First Choice | Alternative |
|------|-------------|-------------|
| Quick concept video | Sora | Runway Gen-3 |
| Cinematic quality | Veo 2 | Sora |
| Longer clips (1min+) | Kling | Runway Gen-3 |
| Local / self-hosted | CogVideoX | Stable Video Diffusion |
| Animate a still image | AnimateDiff + SD | Stable Video Diffusion |
| Automated production | [[calesthio-openmontage]] | Opus Clip + Descript |
| Talking head / avatar | HeyGen | Synthesia |
| Developer-created video | Remotion | Manim |
| Social media clips | Opus Clip | CapCut |
| Multi-modal CLI | [[minimax-ai-cli]] | — |

## Related Concepts

- [[image-generation]] — static image creation, often feeding into video
- [[speech-audio]] — TTS for narration, whisper for transcription
- [[agent-skills]] — video generation as an agent capability
- [[presentation-markdown]] — video as an output format alongside slides
- [[coding-agents]] — agents that produce video content
