# Tooling

Let tooling enforce rules automatically. The agent sees errors and learns.

## The Principle

Don't write "never use console.log" in your rule file. Set up ESLint to catch it.

When the agent makes a change:
1. Linter runs
2. Error appears
3. Agent sees the error
4. Agent fixes it

The feedback loop teaches the agent your rules automatically.

## Linters

Configure linters to catch common issues:

| Language | Linter |
|----------|--------|
| JavaScript/TypeScript | ESLint, Biome |
| Python | Ruff, Pylint, Flake8 |
| Swift | SwiftLint |
| Kotlin | ktlint, detekt |
| Go | golangci-lint |
| Rust | Clippy |

### Example: ESLint

```javascript
// eslint.config.js
export default [
  {
    rules: {
      'no-console': 'error',
      'no-unused-vars': 'error',
      'prefer-const': 'error'
    }
  }
]
```

### Example: Biome

```json
{
  "linter": {
    "rules": {
      "suspicious": {
        "noConsoleLog": "error"
      },
      "style": {
        "useConst": "error"
      }
    }
  }
}
```

## Static Analysis

Type checkers catch issues before runtime:

| Language | Tool |
|----------|------|
| TypeScript | tsc |
| Python | mypy, pyright |
| Kotlin | Kotlin compiler |
| Swift | Swift compiler |

### Example: TypeScript

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

The stricter your config, the more the agent learns from errors.

## Formatters

Formatters handle style so you don't have to write rules about it:

| Language | Formatter |
|----------|-----------|
| JavaScript/TypeScript | Prettier, Biome |
| Python | Black, Ruff |
| Swift | swift-format |
| Kotlin | ktfmt |
| Go | gofmt |
| Rust | rustfmt |

Agent makes changes → formatter runs → style is consistent.

## IDE Integration

Configure your IDE to show lint errors in real-time:

1. Install linter extensions
2. Enable "format on save"
3. Enable "lint on save"

The agent sees the same errors you see.

## Pre-commit Hooks

Run checks before commits:

```bash
# .husky/pre-commit
npm run lint
npm run typecheck
npm run test
```

Or use a tool like `lint-staged`:

```json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md}": ["prettier --write"]
  }
}
```

## What NOT to Put in Rule Files

If tooling can enforce it, let tooling do it:

| Don't Write This | Use This Instead |
|------------------|------------------|
| "Use 2 space indentation" | Prettier/Biome config |
| "Never use console.log" | ESLint rule |
| "Always use const" | ESLint prefer-const |
| "No unused imports" | TypeScript noUnusedLocals |
| "Sort imports" | ESLint import-order |

## What TO Put in Rule Files

Things tooling can't enforce:

- "Use `@company/logger` instead of console.log"
- "All API endpoints need authentication middleware"
- "Feature flags go in LaunchDarkly, not env vars"
- "Don't manually edit OpenAPI specs"

These require context and judgment that linters can't provide.
