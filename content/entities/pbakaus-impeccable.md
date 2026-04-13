---
title: pbakaus-impeccable
created: 2025-11-16
updated: 2026-04-13
type: entity
stars: 17096
github: pbakaus/impeccable
tags: [tool, ai-ml, ui-ux]
sources: [raw/stars/2026-04-08.md]
---

# pbakaus-impeccable

The design language that makes your AI harness better at design.

## What It Does
A design language and skill system that fights "AI slop" — the predictable design mistakes LLMs make (purple gradients, nested cards, poor contrast, bounce easing). Created by Paul Bakaus, it provides 7 domain-specific reference modules (typography, color/contrast, spatial design, motion, interaction, responsive, UX writing) and 18 commands that plug directly into Claude Code, Cursor, Gemini CLI, and other coding agents. Includes a standalone CLI that detects 24 specific anti-patterns without needing an AI harness.

## Key Features
- 7 design reference modules covering typography through UX writing
- 18 slash commands: /audit, /critique, /polish, /distill, /clarify, /harden, /bolder, /quieter, /overdrive, and more
- Commands are composable (e.g., /audit /normalize /polish blog)
- Standalone CLI for detecting 24 AI design anti-patterns
- Works with Cursor, Claude Code, Gemini CLI, Trae, Codex, OpenCode
- Uses OKLCH color space, tinted neutrals, accessibility-first approach

## Tech Stack
- Language: JavaScript
- License: Apache 2.0

## Why I Starred It
Every LLM produces the same generic UI patterns. Impeccable is the only tool I've seen that specifically targets and corrects AI-generated design bias. The /audit command alone is worth it — catches accessibility issues and sloppy spacing that agents consistently miss. Directly useful for any project where an AI generates frontend code.

## Related
- [[anthropics-claude-code]] (primary integration target)
- [[nextlevelbuilder-ui-ux-pro-max-skill]] (complementary design skill)
- [[pbakaus-impeccable]] [[obra-superpowers]] (skill methodology reference)


## Concepts
- [[ui-ux-design]]
## Use Cases
- Audit AI-generated UI code for accessibility violations and anti-patterns before shipping
- Use /craft for full shape-then-build design workflow with visual iteration
- Run /polish to align generated components with an existing design system
- Use /extract to pull reusable components and tokens from ad-hoc AI output into a proper design system
- Detect the 24 most common AI design mistakes (side-tab borders, purple gradients, dark glows) via standalone CLI
