# Planning

Use Plan mode. Think with the agent before executing anything.

## Why Plan First

Planning is cheap. Execution is expensive.

In Plan mode, the agent:
- Analyzes the request
- Proposes an approach
- Breaks down the work
- Does NOT make changes

You can iterate on ideas without cost. Once you switch to Agent mode, changes happen.

## How to Plan

### 1. Start in Plan Mode

In Cursor, use the mode dropdown or prefix with `/plan`.

```
/plan I need to add a user preferences API that stores settings in Postgres
```

### 2. Ask Clarifying Questions

```
What edge cases should we handle?
What happens if the user doesn't exist?
Should settings be validated against a schema?
```

### 3. Iterate on Ideas

```
Actually, let's use Redis for caching frequently accessed settings.
What would the cache invalidation strategy look like?
```

### 4. Validate Assumptions

```
Check if our existing auth middleware works for this endpoint.
What does the current User model look like?
Are there similar patterns in the codebase?
```

## What Good Planning Looks Like

The agent should produce:

1. **Understanding of the problem** - Restates what you're trying to do
2. **Proposed approach** - High-level strategy
3. **Breakdown of work** - Steps to implement
4. **Questions** - Clarifications needed before proceeding
5. **Risks or considerations** - Things that might go wrong

## Example Planning Session

**You:**
```
/plan I need to add rate limiting to our API endpoints
```

**Agent:**
```
I'll analyze what's needed for rate limiting.

Current state:
- Using Fastify with our standard middleware stack
- Redis is available for distributed state
- No existing rate limiting

Proposed approach:
1. Use sliding window algorithm (more fair than fixed window)
2. Store counters in Redis for distributed limiting
3. Apply per-user limits for authenticated endpoints
4. Apply per-IP limits for public endpoints

Questions:
- What limits do you want? (e.g., 100 req/min per user)
- Should some endpoints be exempt?
- What response should rate-limited requests receive?

Risks:
- Redis latency adds to every request
- Need to handle Redis connection failures gracefully
```

Now you have a clear picture before any code is written.

## When to Use Plan Mode

| Situation | Use Plan Mode |
|-----------|---------------|
| New feature | Always |
| Complex bug fix | Yes |
| Refactoring | Yes |
| Simple one-liner | Skip it |
| "Add a comment" | Skip it |

## From Plan to Execution

Once the plan is solid:

1. Save the plan (or have the agent create `spec.md`)
2. Switch to Agent mode
3. Execute one task at a time
4. Refer back to the plan as needed

:::tip
If the plan reveals the task is bigger than expected, break it into multiple sessions. Each session should be focused on one coherent piece of work.
:::
