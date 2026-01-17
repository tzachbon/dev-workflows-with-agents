# Entry Points

Define clear entry points so the agent knows how to build, run, and test your project.

## Why Entry Points Matter

The agent needs to:
- Install dependencies
- Build the project
- Run tests
- Start the development server
- Deploy (sometimes)

If these aren't documented, the agent guesses. Guessing wastes time.

## Document in AGENTS.md

```markdown
## Commands

- `npm ci` - Install dependencies
- `npm run build` - Build all packages
- `npm run test` - Run tests
- `npm run dev` - Start development server
- `npm run lint` - Lint and format
```

## Use a Makefile

Makefiles provide discoverable, documented commands:

```makefile
.PHONY: install build test dev lint deploy

install:
	npm ci

build:
	npm run build

test:
	npm run test

dev:
	npm run dev

lint:
	npm run lint

deploy-prod:
	./scripts/deploy.sh production

deploy-staging:
	./scripts/deploy.sh staging
```

Benefits:
- `make <tab>` shows available commands
- Self-documenting
- Works across all platforms
- Agent can read and understand

## npm Scripts

If you prefer npm scripts, make them explicit:

```json
{
  "scripts": {
    "build": "turbo run build",
    "test": "vitest run",
    "test:watch": "vitest",
    "dev": "turbo run dev",
    "lint": "biome check .",
    "lint:fix": "biome check . --apply",
    "typecheck": "tsc --noEmit"
  }
}
```

## Clear Over Clever

Avoid complex command chains that are hard to understand:

```bash
# Hard to understand
npm run build && npm run test && npm run lint || exit 1

# Clear
make build
make test
make lint
```

## Document Flags and Options

If commands have important flags, document them:

```markdown
## Commands

- `npm run test` - Run all tests
- `npm run test -- --watch` - Watch mode
- `npm run test -- --filter=auth` - Run only auth tests
- `npm run build -- --filter=@company/api` - Build specific package
```

## Environment Setup

Document any required environment setup:

```markdown
## Setup

1. Copy `.env.example` to `.env`
2. Fill in required values (see comments in file)
3. Run `npm ci`
4. Run `npm run dev`

## Required Environment Variables

- `DATABASE_URL` - Postgres connection string
- `REDIS_URL` - Redis connection string
- `API_KEY` - External service API key
```

## Docker Commands

If you use Docker, document the commands:

```markdown
## Docker

- `docker compose up` - Start all services
- `docker compose up -d` - Start in background
- `docker compose down` - Stop all services
- `docker compose logs -f api` - Follow API logs
```

## The Goal

The agent should be able to:

1. Read your `AGENTS.md`
2. Understand how to get the project running
3. Execute commands without guessing

No hunting through README files, no guessing at command syntax.
