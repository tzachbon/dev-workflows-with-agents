# Core Concepts

Before diving into the two pillars, you need shared vocabulary. Different tools use different names for the same ideas. This section aligns on definitions.

## The Core Insight

**Context is everything.**

- Provide context faster than the AI can find it
- Lean context beats bloated context
- Explicit beats implicit
- Structure enables speed

The agent only knows what you show it. Everything else is guessing.

## Vocabulary Overview

| Term | What It Is |
|------|------------|
| [Rules](/concepts/rules) | Instructions that guide agent behavior |
| [Steering Files](/concepts/steering-files) | Markdown files that direct the agent (AGENTS.md, .cursorrules) |
| [Commands](/concepts/commands) | Explicit instructions prefixed with `/` |
| [Skills](/concepts/skills) | Dynamic context the agent invokes when needed |
| [MCPs](/concepts/mcps) | Model Context Protocol - connect to external tools |
| [Agent Modes](/concepts/agent-modes) | Different modes for different tasks (Agent, Plan, Debug, Ask) |

## Why This Matters

When AI searches for context on its own, it burns tokens and often grabs more than needed. When you provide context explicitly, you do it precisely.

This principle applies to everything in this cookbook. Every configuration, every file structure decision, every agent setup serves one purpose: giving the AI the right context efficiently.
