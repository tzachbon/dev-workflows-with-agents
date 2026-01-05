# Steering Files

A markdown file that guides agent behavior. Written for the AI, not humans.

Steering files tell the agent: what the project does, where to find things, what patterns to follow, what to avoid.

## Common Steering File Names

Different tools use different names for the same concept:

| File | Tool |
|------|------|
| `AGENTS.md` | Generic, works everywhere |
| `.cursorrules` | Cursor-specific (legacy) |
| `CLAUDE.md` | Claude Code |

:::tip Pro Tip
Write one `AGENTS.md` and symlink the rest. Update once, all vendors stay in sync.
:::

```bash
# Create symlinks
ln -s AGENTS.md .cursorrules
ln -s AGENTS.md CLAUDE.md
```

## What to Include (300-400 words)

- **Project purpose** - What does this codebase do?
- **Entry points** - Where does execution start?
- **Key component locations** - Where to find services, utilities, configs
- **Commands** - How to build, run, test
- **Code style** - Patterns and conventions
- **Never section** - Things tooling cannot enforce

## Placement Strategy

Put steering files at every level of your repo:

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
└── docs/
    ├── architecture.md
    └── api-patterns.md
```

The agent picks up the nearest steering file. More specific = more relevant.

## Example: Root AGENTS.md

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
- Semicolons, single quotes

## Structure

- `packages/` - Shared libraries
- `services/` - Deployable services

## Never

- Manually edit OpenAPI specs (source of truth is Fastify route schemas)
```

## Example: Service-Level AGENTS.md

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

The agent can now reference your design docs, understand the tech stack, and use the right packages.

