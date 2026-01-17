# Pillar 1: Prepare Your Repo

Make your codebase a place where agents can thrive.

## The Core Principle

Think of it like database indexes.

- **Without indexes** → queries scan the full table, slow and wasteful
- **With indexes** → queries hit indexes for fast access

Rule files are indexes for your repo. The agent gets context fast instead of scanning everything.

**Result:** Faster responses, better accuracy, less wasted tokens.

## Why This Matters

You're **indexing** your repo for the agent. Do it once, agent reuses it forever.

| Without Preparation | With Preparation |
|---------------------|------------------|
| Agent scans everything | Agent finds context instantly |
| Burns tokens searching | Lean, focused context |
| Guesses at patterns | Knows your conventions |
| Each iteration is slow | Each iteration is fast |

## What You'll Set Up

| Component | Purpose |
|-----------|---------|
| [AGENTS.md files](/pillar-1/agents-md) | Steering files at root and per-service |
| [Rule files](/pillar-1/rule-files) | Per-module context and links |
| [Code structure](/pillar-1/code-structure) | Naming, types, flat hierarchies |
| [Tests](/pillar-1/tests) | Executable specs the agent can run |
| [Entry points](/pillar-1/entry-points) | Clear build/run/test commands |
| [Tooling](/pillar-1/tooling) | Linting and static analysis |

## The AI-First Codebase Mindset

Your repo has two audiences:
1. Human developers
2. AI agents

Both need clarity. Both benefit from structure. But agents need explicit context that humans often leave implicit.

Projects optimized for agent exploration from the start outperform retrofitted ones.

## Quick Start

1. Create a root `AGENTS.md` with project overview
2. Set up linting and static analysis
3. Add type hints to public interfaces
4. Document entry points (how to build, run, test)

See the [full checklist](/pillar-1/checklist) for comprehensive setup.
