# Skills

Dynamic context that the agent invokes when needed. An advanced, experimental feature.

:::warning
Skills are experimental. Start with rules, add skills later once you're comfortable.
:::

## Rules vs Skills

| Aspect | Rules | Skills |
|--------|-------|--------|
| Loading | Static - added to context automatically | Dynamic - agent invokes when needed |
| Trigger | Always loaded, or triggered by path/pattern | LLM detects relevance and loads on demand |
| Size | Keep lean (300-400 words) | Can include multiple files |

## Skill Structure

A skill is a directory with multiple supporting files:

```
skills/
└── debug-ci/
    ├── SKILL.md           # When to use + instructions
    ├── check-logs.sh      # Helper script
    └── common-failures.md # Reference documentation
```

The `SKILL.md` file tells the agent when to invoke the skill and what to do.

## Example: Debug CI Skill

```markdown
# Debug CI Skill

## When to Use

Invoke this skill when:
- CI pipeline fails
- User mentions build errors
- Debugging test failures in CI

## Instructions

1. First, run `check-logs.sh` to fetch recent CI logs
2. Check `common-failures.md` for known issues
3. Look for patterns in the error output
4. Suggest fixes based on the failure type

## Common Patterns

- Timeout errors: Usually memory or resource limits
- Dependency errors: Check lockfile, clear cache
- Test failures: Check for flaky tests, missing env vars
```

## When to Create a Skill

Create a skill when you notice a **recurring pattern** that requires:

- Multiple steps
- External scripts or tools
- Reference documentation
- Specific domain knowledge

Good candidates:

| Skill | Purpose |
|-------|---------|
| Onboarding | Setup, credentials, local dev environment |
| Deployment | Deploy, rollback, monitoring setup |
| Debug CI | Logs, traces, common CI fixes |
| Database | Migration patterns, query optimization |

## In Cursor

Skills in Cursor are called **Notepads**. They serve as reusable context you can attach to conversations.

Create a notepad for:
- API documentation snippets
- Common patterns in your codebase
- Domain-specific knowledge

The agent won't automatically invoke notepads. You attach them manually when relevant.

