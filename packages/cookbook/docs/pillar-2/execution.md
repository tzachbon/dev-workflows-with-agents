# Execution

One task at a time. Review before moving on.

## The Execution Loop

```
Pick Task → Execute → Review → Verify → Compact → Next
```

Each cycle is focused and verifiable.

## One Task Per Conversation

Don't batch multiple tasks. Each task gets its own focused session.

| Don't | Do |
|-------|-----|
| "Implement the whole feature" | "Implement T001: Database Migration" |
| "Build the API and write tests" | "Implement T003: GET endpoint" |
| "Fix all the bugs" | "Fix the validation error in createPreset" |

## Provide Full Context

When starting a task, give the agent everything it needs:

```
Implement T004: Create Preset Endpoint

Here's the context:
- Requirements: [paste or attach spec.md]
- Design: [paste or attach design.md]
- Related code: [attach existing files]

Goal: Implement POST /api/presets with limit check (SC-001)
```

Don't make the agent search. Give it what it needs.

## Review Like a PR

Treat agent output like a junior developer's pull request:

1. **Read the changes** - Understand what was done
2. **Check against requirements** - Does it meet the spec?
3. **Look for edge cases** - What's missing?
4. **Verify style** - Does it match your patterns?
5. **Run tests** - Do they pass?

## Iterate When Needed

If something's wrong:

```
The validation is missing the name uniqueness check (SC-002).
Update the createPreset function to check for duplicate names.
```

Be specific about what's wrong and what you want.

## Verify Before Moving On

Before starting the next task:

1. **Run tests** - Confirm nothing broke
2. **Run linting** - Code style is correct
3. **Manual check** - Does it work as expected?

Don't accumulate broken state across tasks.

## Compact After Each Task

Use `/compact` to summarize and compress the conversation.

Why:
- Keeps context fresh for the next task
- Removes irrelevant back-and-forth
- Prevents "lost in the middle" degradation

```
/compact

Task T004 complete. Created POST /api/presets endpoint with:
- Input validation using Zod
- Preset limit check (max 50)
- Name uniqueness check
- Proper error responses
```

## Fresh Chat for Major Phases

Start a new conversation when:
- Moving to a new phase (Data → API → Tests)
- Context has become cluttered
- You've been going back and forth too much

Bring the spec documents into the new chat. Fresh context = better output.

## Handling Mistakes

When the agent makes a mistake:

1. **Be specific** - "Line 45 is wrong because..."
2. **Explain why** - "This violates SC-002 which requires..."
3. **Suggest fix** - "Instead, check the database before inserting"

Don't just say "this is wrong." Help the agent understand.

## Execution Checklist

For each task:

- [ ] Clear goal stated
- [ ] Full context provided (requirements, design, related code)
- [ ] Agent executed the task
- [ ] Output reviewed for correctness
- [ ] Tests pass
- [ ] Linting passes
- [ ] Compacted conversation
- [ ] Ready for next task

## Example Session

```
You: Implement T004: Create Preset Endpoint

[Attach: spec.md, design.md, existing preset.ts]

Goal: POST /api/presets with validation and limit check

---

Agent: [Implements the endpoint]

---

You: Looks good, but you forgot the name uniqueness check. 
See SC-002 in the requirements.

---

Agent: [Fixes the issue]

---

You: Perfect. Tests pass. /compact

Ready for T005.
```

Short, focused, verified.
