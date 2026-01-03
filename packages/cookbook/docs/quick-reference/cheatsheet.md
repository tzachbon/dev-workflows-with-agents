# Cheatsheet

One-page reference for working with AI agents.

---

## Agent Modes

| Mode | Use For |
|------|---------|
| **Plan** | Breaking down work, brainstorming |
| **Agent** | Executing tasks, making changes |
| **Debug** | Fixing bugs, tracing errors |
| **Ask** | Questions without code changes |

**Pattern:** Plan first, then Agent to execute.

---

## The Workflow

```
Plan → Requirements → Design → Tasks → Execute
         ↓              ↓        ↓         ↓
      (compact)    (compact)  (compact)  (compact each)
```

---

## Commands

| Command | Purpose |
|---------|---------|
| `/plan` | Think without executing |
| `/compact` | Compress conversation |
| `/summarize` | Summarize what happened |

---

## EARS Requirements Format

```
WHEN [trigger] THEN system SHALL [behavior]
```

Example:
```
FR-001: WHEN user submits form THEN system SHALL validate input
```

---

## Given/When/Then

```
Given [context]
When [action]
Then [result]
```

Example:
```
Given user has no presets
When user saves a preset
Then preset appears in list
```

---

## Task Format

```markdown
## T001: Task Name

**Context**: FR-001, SC-002
**Goal**: Single clear objective

### Subtasks
1. First step
2. Second step
3. Third step
```

Mark parallel tasks with `[P]`.

---

## AGENTS.md Template

```markdown
# Project Name

Brief description.

## Commands

- `npm ci` - Install
- `npm run build` - Build
- `npm run test` - Test
- `npm run dev` - Development

## Code Style

- Key conventions
- Important patterns

## Structure

- `src/` - Source code
- `tests/` - Tests

## Never

- Things to avoid
```

---

## Context Rules

| Do | Don't |
|-----|-------|
| Attach relevant files | Attach everything |
| Be specific | Be vague |
| One task per chat | Batch multiple tasks |
| Compact regularly | Let context grow |
| Enable needed MCPs | Enable all MCPs |

---

## Compact Triggers

- After each phase (requirements → design → tasks)
- After each completed task
- When conversation gets long
- When agent forgets context

---

## Review Checklist

For each task output:

- [ ] Meets requirements
- [ ] Tests pass
- [ ] Linting passes
- [ ] Matches code style
- [ ] No obvious bugs

---

## Quick Diagnosis

| Problem | Solution |
|---------|----------|
| Agent forgets context | `/compact` or new chat |
| Vague output | More specific prompt |
| Wrong patterns | Check AGENTS.md exists |
| Slow responses | Reduce MCPs |
| Missing info | Attach relevant files |

---

## File Naming

| File | Purpose |
|------|---------|
| `AGENTS.md` | Steering file (root and per-service) |
| `spec.md` | Requirements document |
| `design.md` | Technical design |
| `tasks.md` | Task breakdown |

---

## Priority Labels

| Label | Meaning |
|-------|---------|
| P1 | Must have |
| P2 | Should have |
| P3 | Nice to have |
| [P] | Parallel (no dependencies) |

---

## The Mantras

> "Context is everything."

> "Plan first, execute second."

> "One task per conversation."

> "Measure twice, cut once."
