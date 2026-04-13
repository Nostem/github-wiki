---
title: obra-superpowers
created: 2025-10-09
updated: 2026-04-13
type: entity
stars: 140582
github: obra/superpowers
tags: [tool, ai-ml, workflow]
sources: [raw/stars/2026-04-08.md]
---

# obra-superpowers

An agentic skills framework & software development methodology that works.

## What It Does
A complete software development methodology for AI coding agents. Moves agents away from guessing toward a disciplined, step-by-step engineering process. Core workflow: brainstorm with Socratic questioning → create design doc → work in git worktrees → write implementation plans for "an enthusiastic junior engineer with poor taste" → dispatch fresh subagents per task → enforce RED-GREEN-REFACTOR TDD (code written before tests is deleted) → two-stage review (spec compliance + code quality) → branch finalization. Works as a plugin for Claude Code, Cursor, Codex, Gemini CLI, GitHub Copilot, and OpenCode. Created by Jesse Vincent.

## Key Features
- Test-Driven Development enforced: write failing test first, code before tests gets deleted
- Subagent-driven development with two-stage review pipeline
- Git worktrees for isolated parallel development branches
- Writing-plans skill creates plans for "junior engineer with poor taste and no judgment"
- Systematic debugging: 4-phase root-cause-tracing with defense-in-depth
- Skills framework: composable skills (TDD, debugging, code review, plan writing)
- Meta-skill: writing-skills teaches how to create new skills within the framework
- Installation via plugin marketplace for 7+ coding agent platforms

## Tech Stack
- Language: Shell
- License: MIT
- Creator: Jesse Vincent (Prime Radiant)

## Why I Starred It
This is the gold standard for agentic development methodology. The "delete code written before tests" rule is radical but correct. The writing-plans skill alone transformed how I think about task decomposition. At 140k stars, it's the most adopted agentic framework. Our own agent setup mirrors several of its patterns (subagent delegation, systematic debugging).

## Related
- [[anthropics-claude-code]] (primary platform, uses skills format)
- [[anthropics-skills]] (official skill spec it implements)
- [[openclaw-openclaw]] (similar autonomous agent concept)
- [[voltagent-awesome-agent-skills]] (community skills that extend superpowers)

## Use Cases
- Enforce TDD discipline on AI coding agents — prevent vibe-coded solutions without tests
- Use writing-plans to decompose features into 2-5 minute tasks with exact file paths and verification steps
- Dispatch parallel subagents for independent tasks using git worktrees
- Run systematic-debugging skill for structured root-cause analysis instead of random code changes
- Use /requesting-code-review and /receiving-code-review to standardize the code review feedback loop
- Create new project-specific skills using the writing-skills meta-skill
