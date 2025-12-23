# Dev Workflow with Agents

A workshop repo for slides and hands-on exercises that teach developers how to work with AI agents in a structured, repeatable way.

## Audience

Developers across web, mobile, and back-end stacks. Content is mostly stack-agnostic with practical examples.

## Tools

- Cursor
- Claude Code

## Workshop Format

Each engineer brings one or two real tasks they need to complete. We guide them through best practices for completing those tasks fully with AI, no manual coding.

The goal: help developers understand a workflow they can replicate. Define the task clearly, break it into steps, and let the agent execute with minimal intervention.

## Core Concepts

### Context Engineering

Context is everything. Smaller, focused context produces better output than dumping an entire project into the conversation. The key is giving the AI exactly what it needs, nothing more.

### Preparing Your Repo for AI

Before working with agents, your codebase should be structured for them:

- Agent configuration files (MD files describing agent roles and expected outputs)
- Sub-agents for different domains (e.g., separate agents for filters, preferences, utilities)
- Clear directory structure so agents can work on isolated scopes

### Sub-Agents Pattern

Large monolithic agents don't work well. Instead, use an orchestrator that delegates to specialized sub-agents:

- Each sub-agent has a dedicated role and limited scope
- Smaller context per agent leads to more deterministic results
- Easier to review and validate output

## Workshop Flow

1. **Bring a real task** - Each participant opens a ticket or feature they need to complete
2. **Plan with the agent** - Use planning mode in Cursor to break down the work
3. **Choose the right model** - Match model capabilities to task complexity
4. **Divide the work** - Split into small, reviewable chunks
5. **Review and iterate** - Check AI output, refine context, repeat

The hands-on approach is critical. Reading about AI workflows doesn't break the barrier. Sitting down with a real task and working through it does.
