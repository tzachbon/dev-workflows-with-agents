# Rules

Instructions that guide how the agent behaves. Rules live inside steering files or IDE settings.

## Three Levels of Rules

### User Rules

Your personal preferences that apply across all your projects.

- Writing style preferences
- Formatting conventions you always use
- Personal workflow patterns

### Workspace Rules

Project-level guidance that lives in the repo and is shared with your team.

- In `.cursor/rules/` directory
- Or in project settings
- Committed to version control

### Subrules

Scoped to specific directories or file patterns.

- Per-service context in a monorepo
- Per-feature rules
- Activated based on file path

## Rule Types by Activation

| Type | When It Applies |
|------|-----------------|
| Always-applied | Active regardless of context |
| Auto-attached | Activates based on file patterns (e.g., TypeScript rules for `.ts` files) |
| Manual | You explicitly attach them |

## What Goes in Rules

Focus on things that tooling cannot enforce automatically:

- **Context** - "Monorepo with NPM workspaces, Turbo, Fastify"
- **Structure** - "Services in `services/`, shared libs in `packages/`"
- **Commands** - "Use `--filter` for specific packages"
- **Tools to use** - "For logging use `@company/logger`"
- **External links** - Design review, wiki, Figma, API docs
- **Domain knowledge** - "Feature flags managed in LaunchDarkly"

:::tip
Focus on the **why**, not the **how**. The agent can figure out implementation details.
:::

## What NOT to Put in Rules

Don't write rules that tooling can enforce:

- "Never use console.log" → Set up ESLint to catch it
- "Use 2 space indentation" → Configure Prettier
- "No unused imports" → TypeScript compiler handles it

The agent sees lint errors and learns the rules automatically. Let tooling be the enforcer.

