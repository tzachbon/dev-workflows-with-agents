# Pillar 2 Checklist

Use this checklist for spec-driven development.

## Planning Phase

- [ ] Started in Plan mode (not Agent mode)
- [ ] Agent restated the problem
- [ ] Agent proposed an approach
- [ ] Asked clarifying questions
- [ ] Validated assumptions
- [ ] Compacted before moving to requirements

## Requirements Phase

- [ ] Used structured format (EARS, Given/When/Then)
- [ ] Requirements are numbered (FR-001, SC-001)
- [ ] Acceptance criteria are testable
- [ ] Success criteria are measurable
- [ ] Priority assigned to user stories
- [ ] Compacted before moving to design

## Design Phase

- [ ] Data structures defined
- [ ] API contracts specified
- [ ] Diagrams for complex flows
- [ ] Decisions documented with rationale
- [ ] Compacted before moving to tasks

## Task Breakdown

- [ ] Tasks are atomic (one clear goal each)
- [ ] Tasks linked to requirements (Context: FR-001)
- [ ] Parallel tasks marked with [P]
- [ ] Dependencies identified
- [ ] Checkpoints added between phases

## Execution Phase

For each task:

- [ ] One task per conversation
- [ ] Full context provided (requirements, design, code)
- [ ] Output reviewed for correctness
- [ ] Requirements verified (check against FR/SC)
- [ ] Tests pass
- [ ] Linting passes
- [ ] Compacted after completion

## Context Management

- [ ] Using `/compact` after each phase
- [ ] Using `/compact` after each task
- [ ] Fresh chat for major phase transitions
- [ ] Only relevant MCPs enabled
- [ ] Attaching only needed files

## Common Pitfalls to Avoid

- [ ] NOT starting in Agent mode without planning
- [ ] NOT batching multiple tasks in one conversation
- [ ] NOT letting context grow too long
- [ ] NOT leaving all MCPs enabled
- [ ] NOT moving on without verifying the task works

## Quick Reference

### Mode Selection

| Situation | Mode |
|-----------|------|
| Breaking down work | Plan |
| Implementing a task | Agent |
| Fixing a bug | Debug |
| Asking questions | Ask |

### When to Compact

| Trigger | Action |
|---------|--------|
| Phase complete | `/compact` |
| Task complete | `/compact` |
| Conversation getting long | `/compact` |
| Agent forgetting context | New chat |

### Task Size Guide

| Time Estimate | Task Size |
|---------------|-----------|
| 5 minutes | Too small, combine |
| 10-30 minutes | Just right |
| 1+ hour | Too big, break down |

## The Mantra

> "Not all tasks require spec-ing, but all tasks require planning."

Simple fix? Plan → Execute.
Complex feature? Full spec workflow.

> "Measure twice, cut once."

Invest in planning to save on rework.
