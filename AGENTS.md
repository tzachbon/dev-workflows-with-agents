# Dev Workflow with Agents

A workshop repo for slides and hands-on exercises that teach developers how to work with AI agents in a structured, repeatable way.

## Audience

Developers across web, mobile, and back-end stacks. Content is mostly stack-agnostic with practical examples.

Assumed knowledge: LLMs, agents, tools. We skip the basics and focus on practical application.

## Tools

- Cursor (primary demo tool)
- Claude Code
- Slidev (presentation)
- RSPress (cookbook/documentation)

## Workshop Structure

1. **Presentation (30 min)** - Core principles and tooling orientation
2. **Hands-on session** - Each engineer works on their real tasks with guidance
3. **Cookbook** - RSPress documentation site as reference during hands-on

---

## Core Concepts

Before diving into the pillars, we need shared vocabulary.

### Steering File

A markdown file that guides agent behavior. Written for the AI, not humans.

Examples:
- `AGENTS.md` - Project or directory-level guidance
- `.cursorrules` - Cursor-specific rules (legacy, now replaced by rules in settings)
- `CLAUDE.md` - Claude Code specific guidance

Steering files tell the agent: what the project does, where to find things, what patterns to follow, what to avoid.

### Rules

Specific directives that constrain or guide agent behavior. Rules live inside steering files or IDE settings.

Types of rules:
- **Workspace rules** - Apply to the entire project (in `.cursor/rules/` or project settings)
- **User rules** - Personal preferences that apply across all projects
- **Always-applied rules** - Rules that are always active regardless of context
- **Auto-attached rules** - Rules that activate based on file patterns (e.g., apply TypeScript rules when editing `.ts` files)

### Context

Everything the agent can "see" when processing a request. The input to the model.

Context includes:
- The files you've opened or referenced
- Steering files and rules
- Conversation history
- System prompts from the IDE

**Key insight:** Context has a limit (context window). Lean, focused context produces better output than dumping everything in.

### Tools

Actions the agent can take beyond generating text. Tools extend agent capabilities.

Built-in tools:
- File read/write
- Terminal commands
- Web search
- Code search/grep

Custom tools via MCP (Model Context Protocol):
- Database queries
- API calls
- External service integrations

### Commands

Explicit instructions that trigger specific agent behaviors. Usually prefixed with `/`.

Examples in Cursor:
- `/edit` - Edit selected code
- `/chat` - Start conversation
- `/agent` - Full agent mode with tool access

### Skills (Notepads/Context Snippets)

Reusable context that you can attach to conversations. Pre-written knowledge the agent can reference.

Examples:
- API documentation snippets
- Common patterns in your codebase
- Domain-specific knowledge

In Cursor, these are called **Notepads**. In other tools, they might be called snippets, context, or knowledge bases.

### Planning Mode vs Agent Mode

Two distinct ways to work with AI:

- **Planning mode** - Agent analyzes and proposes without executing. Good for breaking down complex tasks.
- **Agent mode** - Full execution with tools. Agent can read files, run commands, make changes.

Use planning first, then switch to agent mode for execution.

### System Prompt

The hidden instructions that tell the AI how to behave. Set by the IDE/tool, not visible to you.

You influence the system prompt through:
- Steering files
- Rules
- IDE settings

---

## The Core Insight

**Context is everything.**

- Provide context faster than the AI can find it
- Lean context beats bloated context
- Explicit beats implicit
- Structure enables speed

---

## Two Pillars

The core principles of working with agents break into two parts:

### Pillar 1: Prepare Your Repo

Make your codebase a place where agents can thrive. Structure, configuration, and context boundaries.

**Key concepts:**
- Steering files (`AGENTS.md`) at root and per-service
- Type hints and explicit naming
- Executable tests as documentation
- Clear entry points
- Documentation directories for architecture/patterns

### Pillar 2: Work With Your Agent

The actual workflow when executing tasks. Planning, prompting, reviewing, iterating.

**Key concepts:**
- Spec-driven development (iterative by design)
- Planning mode before execution
- Model selection based on task
- Small, reviewable chunks
- Continuous iteration

---

See dedicated files for each pillar:

- [Pillar 1: Prepare Your Repo](./PILLAR_1_PREPARE_REPO.md)
- [Pillar 2: Work With Your Agent](./PILLAR_2_WORK_WITH_AGENT.md)
