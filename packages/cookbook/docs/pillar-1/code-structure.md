# Code Structure

Agents navigate your code like a new developer. Make it easy.

## Clear Naming

Descriptive file names tell the agent what's inside without reading the file.

| Bad | Good |
|-----|------|
| `service.ts` | `userAuthService.ts` |
| `utils.ts` | `dateFormatUtils.ts` |
| `index.ts` (with 50 functions) | `authMiddleware.ts`, `rateLimiter.ts` |
| `helpers.ts` | `validationHelpers.ts` |

## Logical Directory Structure

Group by domain, not by type.

```
# Bad: grouped by type
src/
├── controllers/
│   ├── userController.ts
│   └── orderController.ts
├── services/
│   ├── userService.ts
│   └── orderService.ts
└── models/
    ├── userModel.ts
    └── orderModel.ts

# Good: grouped by domain
src/
├── users/
│   ├── userController.ts
│   ├── userService.ts
│   └── userModel.ts
└── orders/
    ├── orderController.ts
    ├── orderService.ts
    └── orderModel.ts
```

When the agent works on users, everything is in one place.

## Type Hints

Types are documentation for the agent. They dramatically improve comprehension.

```typescript
// Bad: agent has to guess
function process(data, opts) {
  const result = transform(data)
  return result
}

// Good: agent knows exactly what to do
function process(
  data: UserInput,
  opts: ProcessOptions
): ProcessResult {
  const result = transform(data)
  return result
}
```

This applies to all typed languages:
- TypeScript: interfaces, type aliases
- Python: type hints, dataclasses
- Swift: protocols, structs
- Kotlin: data classes
- Go: structs, interfaces

## Avoid Metaprogramming

Dynamic code is hard for agents to follow.

| Avoid | Prefer |
|-------|--------|
| Dynamic imports | Static imports |
| Runtime-generated code | Explicit code |
| Magic decorators | Explicit function calls |
| Reflection | Direct references |

```typescript
// Hard to follow
const handler = require(`./handlers/${type}`)

// Easy to follow
import { userHandler } from './handlers/user'
import { orderHandler } from './handlers/order'

const handlers = { user: userHandler, order: orderHandler }
```

## Flat Hierarchies

Deep nesting makes navigation difficult.

```
# Hard to navigate
src/modules/core/services/auth/providers/oauth/google/index.ts

# Easier
src/auth/googleOAuthProvider.ts
```

Aim for 2-3 levels of nesting maximum.

## Descriptive Variable Names

Avoid abbreviations and single-letter names in important code.

```typescript
// Bad
const u = getUser(id)
const r = await u.getPosts()
const f = r.filter(p => p.published)

// Good
const user = getUser(userId)
const posts = await user.getPosts()
const publishedPosts = posts.filter(post => post.published)
```

## What Doesn't Work

| Pattern | Problem |
|---------|---------|
| Implicit requirements | Agent can't read your mind |
| Generic names | Requires hunting for meaning |
| Deep inheritance | Hard to trace behavior |
| Convention over configuration | Conventions aren't visible |
| Magic strings | No type checking, easy to miss |

Make the implicit explicit. If it matters, write it down.
