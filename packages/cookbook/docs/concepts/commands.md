# Commands

Explicit instructions that trigger specific agent behaviors. Usually prefixed with `/`.

## Native Commands

Commands provided by the IDE or tool:

| Command | Purpose |
|---------|---------|
| `/plan` | Break down a task without executing |
| `/compact` | Compress context to save tokens |
| `/summarize` | Summarize the conversation |
| `/edit` | Edit selected code |
| `/chat` | Start a conversation |
| `/agent` | Full agent mode with tool access |

## Custom Commands

Anything you repeat often should become a command. You create these yourself.

Examples:

| Command | Purpose |
|---------|---------|
| `/clean-flags` | Remove feature flags from codebase |
| `/gen-docs` | Generate documentation |
| `/file-cleanup` | Remove TODOs and dead code |
| `/new-service` | Scaffold a new service |
| `/audit-security` | Check for security issues |

## Creating Custom Commands

In Cursor, custom commands live in `.cursor/commands/` with a specific format.

Example command file:

```markdown
---
description: Clean up feature flags
globs: ["**/*.ts", "**/*.tsx"]
---

# /clean-flags

Remove all feature flags that match the provided flag name.

## Steps

1. Search for all usages of the flag
2. Evaluate the flag's default value
3. Replace conditional logic with the default branch
4. Remove imports and unused code
5. Run tests to verify

## Example

Before:
if (featureFlags.isEnabled('new-dashboard')) {
  return <NewDashboard />
}
return <OldDashboard />

After (if flag defaults to true):
return <NewDashboard />
```

## When to Create a Command

Look at your chat history. What do you ask repeatedly?

| Pattern | Command Idea |
|---------|-------------|
| Repetitive tasks | `/clean-flags`, `/update-deps`, `/gen-docs` |
| Code review patterns | `/audit-security`, `/check-a11y`, `/find-todos` |
| Scaffolding | `/new-service`, `/add-endpoint`, `/gen-test` |
| Cleanup | `/remove-logs`, `/fix-imports`, `/update-deprecated` |

:::tip
Start with 3-5 commands. Add more as patterns emerge. If you do it more than twice, make it a command.
:::

