# Pillar 2: Work With Your Agent

The actual workflow when executing tasks.

## The Problem

"Fix my bug" doesn't work. Vague prompts produce vague results.

The LLM doesn't have your mental model. It interprets literally. Without structure, you end up babysitting, correcting, and re-explaining.

## The Solution: Spec-Driven Development

Work with AI is iterative by design. You don't write once and ship. You **plan, execute, review, iterate**.

```
Plan → Requirements → Design → Tasks → Execute
```

Brainstorm first, then define what you want.

## The Workflow

| Phase | What You Do |
|-------|-------------|
| [Planning](/pillar-2/planning) | Use Plan mode to think before executing |
| [Requirements](/pillar-2/requirements) | Define WHAT using structured formats |
| [Design](/pillar-2/design) | Define HOW with diagrams and data structures |
| [Tasks](/pillar-2/tasks) | Break into atomic, executable chunks |
| [Execution](/pillar-2/execution) | One task at a time, review before moving on |

## Context is Everything

The agent only knows what you show it.

| What You Assume | What Actually Works |
|-----------------|---------------------|
| "It should know the codebase" | Attach relevant files |
| "It remembers our last chat" | Provide explicit context |
| "It understands the business" | Be specific about intent |

## The Fresh Chat Protocol

New session for each major phase. Keep conversations short.

Why:
- LLMs struggle with info buried in long conversations ("lost in the middle")
- Context degrades over time
- Fresh context produces better output

Use `/compact` after each phase AND after each task.

## Not Everything Needs Full Spec

Simple bug fix? Plan first, execute. No spec needed.

Complex feature? Full workflow with requirements, design, tasks.

**But all tasks require planning.** Think before you act.

> "Measure twice, cut once."

## Quick Start

1. Start in Plan mode to break down the work
2. Define requirements if the task is complex
3. Execute one task at a time
4. Review and iterate
5. Compact before moving to the next task

See the [full checklist](/pillar-2/checklist) for the complete workflow.
