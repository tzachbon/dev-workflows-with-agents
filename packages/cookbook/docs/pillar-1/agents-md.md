# Writing AGENTS.md Files

The most important file for AI-first development. A mini-README written **for AI agents**, not humans.

## Root AGENTS.md

Every repo needs a root-level steering file. This gives the agent an overview of the entire project.

### What to Include (300-400 words)

Keep it concise. The agent doesn't need your life story.

| Section | Content |
|---------|---------|
| Project purpose | What does this codebase do? One paragraph. |
| Entry points | Where does execution start? CLI, script, Makefile |
| Key locations | Where to find services, utilities, configs |
| Commands | How to build, run, test, lint |
| Code style | Patterns and conventions |
| Never section | Anti-patterns, things tooling can't enforce |

### Example

```markdown
# Product Experience Backend

Monorepo using NPM workspaces, Turbo, Fastify, TypeScript, Vitest, Biome.

## Commands

- `npm ci` - Install dependencies
- `npm run build` - Build all packages  
- `npm run test` - Run tests
- `npm run lint` - Lint and format

## Code Style

- Named exports only
- No `console.*`, use logger
- No direct `process.env`, use config
- Include `.ts` extensions in imports

## Structure

- `packages/` - Shared libraries
- `services/` - Deployable services

## Never

- Manually edit OpenAPI specs (source of truth is Fastify route schemas)
```

## Per-Service AGENTS.md

Each major domain gets its own steering file with specific context.

### What to Include

| Section | Content |
|---------|---------|
| Links | Design review, API spec, Figma |
| Context | What this service does, what it uses |
| Tools | Which packages to use for common tasks |
| Domain knowledge | Business rules, edge cases |

### Example

```markdown
# Saved Filters Service

## Links

- [Design Review](https://wiki.company.com/saved-filters-dr)
- [API Spec](https://api-docs.company.com/saved-filters)
- [Figma Designs](https://figma.com/file/xxx)

## Context

REST API for user-saved search filters. Uses Postgres.

## Tools

- Validation: `@company/validation`
- Database: `@company/db-client`
- Auth: `@company/auth-middleware`
```

## Placement Strategy

```
project/
├── AGENTS.md              # Project overview
├── services/
│   ├── auth/
│   │   ├── AGENTS.md      # Auth service context
│   │   └── ...
│   └── payments/
│       ├── AGENTS.md      # Payments service context
│       └── ...
└── packages/
    ├── logger/
    │   ├── AGENTS.md      # Logger API, patterns
    │   └── ...
    └── server-utils/
        ├── AGENTS.md      # Utilities reference
        └── ...
```

The agent picks up the nearest AGENTS.md. More specific = more relevant.

:::tip
Focus on the **why**, not the **how**. The agent can figure out implementation details. Tell it what matters, not how to do everything.
:::

## Vendor Sync

Different tools use different file names:

```bash
# Create symlinks so all vendors read the same file
ln -s AGENTS.md .cursorrules
ln -s AGENTS.md CLAUDE.md
```

Update `AGENTS.md` once, all vendors stay in sync.

