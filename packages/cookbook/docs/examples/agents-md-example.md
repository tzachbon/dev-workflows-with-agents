# AGENTS.md Example

Real example from a production monorepo.

## Root-Level AGENTS.md

This goes at the root of your project.

```markdown
# Product Experience Backend

Monorepo using NPM workspaces, Turbo, Fastify, TypeScript, Vitest, Biome.

## Commands

- `npm ci` - Install dependencies
- `npm run build` - Build all packages
- `npm run test` - Run tests
- `npm run lint` - Lint and format check
- `npm run lint:fix` - Fix lint issues
- `npm run dev` - Start development servers

### Scoped Commands

- `npm run build --filter=@company/api` - Build specific package
- `npm run test --filter=saved-filters` - Test specific service

## Code Style

- Named exports only (no default exports)
- No `console.*`, use `@company/logger`
- No direct `process.env`, use `@company/config`
- Include `.ts` extensions in relative imports
- Semicolons required
- Single quotes for strings

## Structure

```
packages/       # Shared libraries
  ├── logger/
  ├── db-client/
  ├── validation/
  └── auth/

services/       # Deployable services
  ├── api/
  ├── saved-filters/
  └── notifications/
```

## Dependencies

- HTTP: Fastify
- Database: PostgreSQL with Drizzle ORM
- Cache: Redis
- Validation: Zod
- Testing: Vitest

## Never

- Manually edit OpenAPI specs (generated from Fastify schemas)
- Use `any` type (use `unknown` and narrow)
- Commit `.env` files (use `.env.example`)
- Skip database migrations (always migrate, never edit DB directly)
```

## Service-Level AGENTS.md

This goes in `services/saved-filters/AGENTS.md`.

```markdown
# Saved Filters Service

REST API for user-saved search filters.

## Links

- [Design Review](https://wiki.company.com/saved-filters-dr)
- [API Spec](https://api-docs.company.com/saved-filters)
- [Figma Designs](https://figma.com/file/xxx)
- [Runbook](https://wiki.company.com/saved-filters-runbook)

## Context

- CRUD operations for filter presets
- PostgreSQL for persistence
- Redis for caching frequently-accessed presets
- Max 50 presets per user

## Stack

- Framework: Fastify
- Database: Drizzle ORM
- Validation: Zod
- Auth: `@company/auth` middleware

## Tools

| Purpose | Package |
|---------|---------|
| Validation | `@company/validation` |
| Database | `@company/db-client` |
| Auth | `@company/auth` |
| Logging | `@company/logger` |

## Entry Points

- `src/server.ts` - Fastify server setup
- `src/routes/` - API route definitions
- `src/services/` - Business logic
- `src/db/` - Database schema and migrations

## Testing

npm run test                    # All tests
npm run test -- --watch         # Watch mode
npm run test -- presets.test.ts # Specific file
```

## Package-Level AGENTS.md

This goes in `packages/logger/AGENTS.md`.

```markdown
# Logger Package

Structured logging for all services.

## API

import { logger } from '@company/logger'

// Log levels
logger.debug('Debug message', { context })
logger.info('Info message', { context })
logger.warn('Warning message', { context })
logger.error('Error message', { error, context })

// With request context
logger.child({ requestId }).info('Request processed')

## Patterns

- Always pass context object as second argument
- Never log PII (emails, passwords, names)
- IDs are ok to log (user IDs, request IDs)
- Use structured data, not string concatenation
- Errors should include the error object

## Configuration

- `LOG_LEVEL` env var controls minimum level
- Production: 'info'
- Development: 'debug'
- Testing: 'silent'

## Examples

// Good
logger.info('User created', { userId: user.id })
logger.error('Database failed', { error, query: 'getUser' })

// Bad
logger.info(`User ${user.email} created`)  // PII in log
logger.error('Something went wrong')        // No context
console.log(user)                           // Don't use console
```

## Adapting These Examples

1. **Replace company-specific details** - Package names, links, tools
2. **Match your stack** - Fastify → Express, Drizzle → Prisma, etc.
3. **Add your conventions** - Whatever patterns your team uses
4. **Keep it updated** - AGENTS.md should evolve with your codebase

The best AGENTS.md is specific, concise, and maintained.

