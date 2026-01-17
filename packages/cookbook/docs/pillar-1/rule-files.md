# Rule Files

Per-module rule files provide scoped context for different parts of your codebase.

## Why Per-Module Rules

A root `AGENTS.md` gives the overview. But when the agent is working on a specific service, it needs specific context:

- Which packages to use
- Links to relevant documentation
- Service-specific patterns
- Domain knowledge

## Structure

```
project/
├── AGENTS.md                    # Root: monorepo standards
├── services/
│   ├── saved-filters/
│   │   └── AGENTS.md            # Routes, schemas, links
│   └── notifications/
│       └── AGENTS.md            # Different context
└── packages/
    ├── logger/
    │   └── AGENTS.md            # API, patterns
    └── server-utils/
        └── AGENTS.md            # Utilities
```

## What Goes in Module Rules

| Category | Examples |
|----------|----------|
| External links | Design review, API spec, Figma, wiki |
| Context | What this module does, tech stack |
| Tools | Which shared packages to use |
| Patterns | Module-specific conventions |
| Domain | Business rules, edge cases |

## Example: Service Rule File

```markdown
# Notifications Service

## Links

- [Design Review](https://wiki.company.com/notifications-dr)
- [API Spec](https://api-docs.company.com/notifications)
- [Email Templates](https://figma.com/file/xxx)

## Context

Handles all user notifications: email, push, in-app.
Uses Redis for queuing, SendGrid for email.

## Tools

- Queue: `@company/queue-client`
- Email: `@company/email-service`
- Templates: `@company/template-engine`

## Patterns

- All notifications go through the queue, never send directly
- Use template IDs, not raw HTML
- Rate limit per user: 10 notifications/minute
```

## Example: Package Rule File

```markdown
# Logger Package

## API

import { logger } from '@company/logger'

logger.info('message', { context })
logger.error('message', { error, context })
logger.debug('message', { context })

## Patterns

- Always include context object
- Never log PII (emails, names, IDs are ok)
- Use structured logging, not string concatenation

## Configuration

Logger reads from `LOG_LEVEL` env var.
Defaults to 'info' in production, 'debug' in development.
```

## Benefits

1. **Agent gets relevant context** - Working on notifications? Gets notification docs.
2. **Links become portals** - Agent can reference your actual design docs
3. **Patterns are explicit** - No guessing about service-specific conventions
4. **Domain knowledge is captured** - Business rules are documented where they apply

## Keep It Lean

Each rule file should be 100-200 words. Focus on what's unique to that module. Don't repeat what's in the root `AGENTS.md`.

:::tip
If you find yourself copying the same content to multiple rule files, move it to the root `AGENTS.md` instead.
:::
