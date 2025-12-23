# Pillar 1: Prepare Your Repo

Make your codebase a place where agents can thrive.

---

## The Core Principle: Context is Key

**Provide context to the AI faster than it would take the AI to find it itself.**

Why this matters:

- When AI searches for context on its own, it's wasteful. It takes time, burns tokens, and often grabs more than needed.
- When you provide context, you do it precisely. Exactly what's needed, nothing more.
- Lean context produces better output. Bloated context degrades quality.

This principle applies to everything below. Every configuration, every file structure decision, every agent setup - all serve one purpose: giving the AI the right context efficiently.

**Lean context. Always. This will be repeated.**

---

## How to Provide Context

Structure your repo so context flows to the agent naturally:

- Agent configuration files (MD files describing agent roles and expected outputs)
- Sub-agents for different domains (e.g., separate agents for filters, preferences, utilities)
- Clear directory structure so agents can work on isolated scopes

---

## Sub-Agents Pattern

Large monolithic agents don't work well. Instead, use an orchestrator that delegates to specialized sub-agents:

- Each sub-agent has a dedicated role and limited scope
- Smaller context per agent leads to more deterministic results
- Easier to review and validate output

---

## Notes

(Add guidelines as we iterate)
