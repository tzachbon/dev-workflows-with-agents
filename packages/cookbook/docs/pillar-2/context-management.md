# Context Management

Keep conversations short. Manage what the agent sees.

## The Problem: Lost in the Middle

LLMs struggle with information buried in long conversations.

![Lost in the Middle](/lost-in-the-middle.png)

Important context at the start or middle of a conversation gets "forgotten" as the conversation grows. The model pays more attention to recent content and the very beginning.

## The Solution: Keep It Fresh

### Compact Regularly

Use `/compact` after:
- Each phase (planning → requirements → design → tasks)
- Each completed task
- Any significant milestone

```
/compact

Completed T004. POST /api/presets works with:
- Zod validation
- 50 preset limit
- Name uniqueness check
- All tests passing
```

### Fresh Chats for New Phases

Start a new conversation when:
- Moving to a different phase of work
- Context has become cluttered
- You've had too much back-and-forth

Bring the essential documents into the new chat.

### Summarize Instead of Scroll

Instead of referencing "what we discussed earlier," summarize:

```
# Bad
"Remember what we decided about the cache?"

# Good
"We're using Redis for caching with a 5-minute TTL."
```

## MCP Context Bloat

Each MCP adds tool definitions to your context window.

| MCPs Enabled | Context Used |
|--------------|--------------|
| 0 | Just your conversation |
| 5 | Hundreds of tokens for tool definitions |
| 10+ | Thousands of tokens gone |

More MCPs = less space for your actual work.

### Managing MCPs

**Be selective.** Enable only what you need for the current task:

| Task | MCPs to Enable |
|------|----------------|
| Implementing a ticket | Jira |
| Researching docs | Notion or Confluence |
| Debugging production | Database, logs |
| Code review | GitHub |

**Disable when done.** Don't leave all MCPs running.

## Document Sharding

For large specs, break into indexed sections:

```markdown
# spec.md - Index

1. [Overview](./spec-overview.md)
2. [Requirements](./spec-requirements.md)
3. [Design](./spec-design.md)
4. [Tasks](./spec-tasks.md)
```

Attach only what's needed for the current task:

```
Implementing T004: Create Preset Endpoint

Attaching:
- spec-requirements.md (for FR-002, SC-001, SC-002)
- spec-design.md (for API contract)
```

## Context Hierarchy

What to include, in order of importance:

1. **Current task** - What you're working on right now
2. **Relevant requirements** - Just the ones for this task
3. **Relevant design** - Just the parts needed
4. **Related code** - Files being modified
5. **General patterns** - Only if needed

Don't attach everything "just in case."

## Signs of Context Degradation

Watch for:
- Agent forgetting decisions made earlier
- Repeating information you already provided
- Contradicting itself
- Losing track of the current task

When this happens: `/compact` or start a fresh chat.

## Best Practices

| Practice | Why |
|----------|-----|
| One task per conversation | Focused context |
| Compact after each task | Reset for next task |
| Fresh chat for new phases | Clean slate |
| Attach only relevant files | Less noise |
| Summarize, don't reference | Explicit is better |
| Disable unused MCPs | More room for your work |

## The Full Loop with Context Management

```
Requirements (compact) → Design (compact) → Tasks (compact)
    ↓
T1 (compact) → T2 (compact) → T3 (compact) → ...
```

Each checkpoint is a compression point. Each task ends clean.
