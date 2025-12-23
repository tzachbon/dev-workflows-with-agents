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

## Why This Matters for Iteration

Pillar 2 focuses on **spec-driven development** - an iterative workflow where you plan, execute, review, and repeat. Pillar 1 prepares your repo so those iterations are fast and effective.

When your repo is agent-ready:
- The agent finds what it needs immediately
- Less back-and-forth debugging context issues
- Each iteration is faster than the last

---

## Steering Files: AGENTS.md

The most important file for AI-first development. A mini-README written **for AI agents**, not humans.

### What to include (300-400 words):
- **Project purpose** - What does this codebase do?
- **Entry points** - Where does execution start? (CLI, script, Makefile)
- **Key component locations** - Where to find services, utilities, configs
- **Domain-specific knowledge** - Business logic, naming conventions, patterns
- **What NOT to do** - Anti-patterns, deprecated approaches

### Placement strategy:
- **Root-level `AGENTS.md`** - Overview of entire project
- **Per-service/directory `AGENTS.md`** - Each major domain gets its own steering file
- **Point to documentation** - Link to `/docs` folders for deeper context

Example structure:
```
project/
├── AGENTS.md              # Project overview
├── services/
│   ├── auth/
│   │   ├── AGENTS.md      # Auth service context
│   │   └── ...
│   └── payments/
│       ├── AGENTS.md      # Payments service context
│       └── ...
└── docs/
    ├── architecture.md
    └── api-patterns.md
```

---

## Code Structure and Organization

Agents navigate your code like a new developer. Make it easy:

### Clear naming and structure
- **Descriptive file names** - `userAuthService.ts` not `service.ts`
- **Logical directory structure** - Group by domain, not by type
- **Avoid unnecessary indirection** - No dynamic imports, avoid metaprogramming

### Type hints and clarity
- **Type annotations everywhere** - Dramatically improves agent comprehension
- **Descriptive names** - No `tmp`, `data2`, `foo`
- **Local docstrings** - Clarify intent where types aren't enough

### What doesn't work:
- Implicit requirements (be explicit)
- Generic names that require hunting for meaning
- Deep inheritance hierarchies

---

## Executable Tests as Documentation

Tests serve double duty for AI agents:

- **Executable documentation** - Shows exactly how code should behave
- **Verification mechanism** - Agent can run tests to verify changes
- **Clear prompts** - "Make this test pass" is the clearest instruction

Even a small test suite with real examples helps dramatically.

---

## Entry Points

Define clear entry points:

- **CLI commands** with documented flags
- **Makefile targets** for common operations
- **npm scripts** that expose workflows

Example:
```bash
# Instead of: node src/index.js --config=prod --migrate
make deploy-prod  # Clear, documented, agent-friendly
```

---

## Context Management Tips

- **Re-index project** after major changes (force Cursor/tools to refresh)
- **Use file references** (`@path/file.ts:42-88`) not code dumps
- **Never dump entire codebase** into prompts - kills accuracy
- **Architecture diagrams in docs** - Agents can reference them

---

## Development Guidelines in Steering Files

Include explicit rules for:

- **Language patterns** - TypeScript conventions, naming rules
- **Common workflows** - Step-by-step guides for frequent tasks
- **Dependencies and tools** - What's used and why
- **Code patterns with examples** - Show, don't just tell

---

## The AI-First Codebase Mindset

Projects optimized for agent exploration from the start outperform retrofitted ones.

Think of your repo as having two audiences:
1. Human developers
2. AI agents

Both need clarity. Both benefit from structure. But agents need explicit context that humans often leave implicit.

---

## Quick Checklist

- [ ] Root `AGENTS.md` with project overview
- [ ] Per-service `AGENTS.md` for major domains
- [ ] Type hints on all public interfaces
- [ ] Clear entry points (Makefile, scripts)
- [ ] Basic test suite with real examples
- [ ] Documentation folder for architecture/patterns
- [ ] Explicit naming (no `utils.ts` with 50 unrelated functions)
