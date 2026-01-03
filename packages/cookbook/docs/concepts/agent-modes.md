# Agent Modes

Different modes for different tasks. Choose the right mode based on what you're trying to accomplish.

![Agent Modes Overview](/agent-modes.png)

## Available Modes

| Mode | Purpose | Tool Access |
|------|---------|-------------|
| **Agent** | Full execution - reads, writes, runs commands | Full |
| **Plan** | Think and propose without executing | Read only |
| **Debug** | Analyze errors, focus on fixing issues | Limited |
| **Ask** | Questions only, no tool access | None |

## Agent Mode

Full execution mode. The agent can:
- Read and write files
- Run terminal commands
- Search the codebase
- Make changes

Use when you're ready to implement and want the agent to do the work.

## Plan Mode

Think and propose without executing. The agent:
- Analyzes the request
- Proposes an approach
- Breaks down the work
- Does NOT make changes

:::tip
Start with Plan mode to think, switch to Agent mode to execute.
:::

Plan mode is cheap. Execution is expensive. Use planning to validate your approach before committing.

## Debug Mode

Focused on fixing issues. The agent:
- Analyzes error messages
- Traces through code
- Suggests fixes
- Can read files but changes are more controlled

Use when something is broken and you need focused debugging help.

## Ask Mode

Questions only. No file access, no tools.
- Get explanations
- Ask about concepts
- Discuss approaches

Use when you just want to talk through an idea without any code changes.

## Workflow Pattern

The typical pattern:

1. **Ask** - Clarify the problem, discuss approach
2. **Plan** - Break down the work, validate assumptions
3. **Agent** - Execute the plan one task at a time
4. **Debug** - Fix any issues that arise

## Switching Modes

In Cursor:
- Use the mode dropdown in the chat interface
- Or prefix with `/plan`, `/ask`, etc.

## When to Use Each

| Situation | Mode |
|-----------|------|
| "I want to implement feature X" | Plan first, then Agent |
| "Why is this breaking?" | Debug |
| "How does X work?" | Ask |
| "Build this for me" | Agent |
| "What's the best approach?" | Plan or Ask |
| "Review this code" | Ask |

## The Key Insight

Planning is measuring. Execution is cutting.

"Measure twice, cut once."

Invest time in planning to save time on rework. A few minutes in Plan mode can save hours of debugging Agent output.
