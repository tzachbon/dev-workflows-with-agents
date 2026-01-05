# Commands Example

Custom commands for common workflows.

## Command File Format

Commands in Cursor live in `.cursor/rules/` directory.

```markdown
---
description: Short description of what this command does
globs: ["**/*.ts", "**/*.tsx"]  # Optional: file patterns
---

# /command-name

Detailed instructions for the agent.
```

---

## Example: Clean Feature Flags

Remove feature flags from the codebase.

```markdown
---
description: Remove a feature flag and its conditional logic
globs: ["**/*.ts", "**/*.tsx"]
---

# /clean-flags

Remove feature flag usage from the codebase.

## Input Required

- Flag name to remove
- Whether to keep the enabled or disabled branch

## Steps

1. Search for all usages of the flag name
2. For each usage:
   - Identify the conditional (if/ternary)
   - Determine which branch to keep
   - Replace conditional with the kept branch
   - Remove unused imports
3. Search for flag definition/registration
4. Remove flag from LaunchDarkly config
5. Run linter to clean up unused code
6. Run tests to verify

## Example Transformation

Before:
if (featureFlags.isEnabled('new-dashboard')) {
  return <NewDashboard />
} else {
  return <OldDashboard />
}

After (keeping enabled branch):
return <NewDashboard />

## Validation

- All tests pass
- No remaining references to the flag
- No unused imports
```

---

## Example: Generate API Endpoint

Scaffold a new API endpoint.

```markdown
---
description: Generate a new API endpoint with full structure
globs: ["services/**/*.ts"]
---

# /new-endpoint

Generate a new API endpoint following project patterns.

## Input Required

- HTTP method (GET, POST, PUT, DELETE)
- Path (e.g., /api/users/:id)
- Request body type (if applicable)
- Response type
- Brief description

## Generated Files

1. Route handler in `src/routes/`
2. Service function in `src/services/`
3. Zod schemas in `src/schemas/`
4. Tests in `src/__tests__/`

## Template: Route Handler

import { FastifyPluginAsync } from 'fastify'
import { {Schema}RequestSchema, {Schema}ResponseSchema } from '../schemas/{name}'
import { {service}Service } from '../services/{name}'

const {name}Route: FastifyPluginAsync = async (fastify) => {
  fastify.{method}('{path}', {
    schema: {
      body: {Schema}RequestSchema,
      response: { 200: {Schema}ResponseSchema }
    },
    preHandler: [fastify.authenticate],
    handler: async (request, reply) => {
      const result = await {service}Service.{action}(request.body)
      return result
    }
  })
}

export default {name}Route

## Checklist

- [ ] Route follows RESTful conventions
- [ ] Authentication middleware applied
- [ ] Input validation with Zod
- [ ] Service layer for business logic
- [ ] Tests cover happy path and errors
```

---

## Example: Audit Security

Check for common security issues.

```markdown
---
description: Audit code for security vulnerabilities
globs: ["**/*.ts", "**/*.tsx", "**/*.js"]
---

# /audit-security

Scan the codebase for common security issues.

## Checks to Perform

### Injection Vulnerabilities
- SQL injection (raw queries with string concatenation)
- Command injection (exec, spawn with user input)
- Path traversal (file paths from user input)

### Authentication/Authorization
- Missing auth middleware on routes
- Hardcoded secrets or API keys
- Exposed sensitive data in responses

### Data Handling
- PII in logs
- Missing input validation
- Unsafe deserialization

### Dependencies
- Known vulnerable packages (check npm audit)
- Outdated critical dependencies

## Output Format

For each issue found:

### [SEVERITY] Issue Title

**Location**: `file:line`
**Description**: What the issue is
**Risk**: What could happen
**Fix**: How to resolve it

Example:
### [HIGH] SQL Injection Risk

**Location**: `src/services/user.ts:45`
**Description**: User input concatenated into SQL query
**Risk**: Attacker could execute arbitrary SQL
**Fix**: Use parameterized query

## Final Summary

- Total issues found
- By severity (Critical, High, Medium, Low)
- Recommended priority for fixes
```

---

## Example: File Cleanup

Remove dead code and TODOs.

```markdown
---
description: Clean up file by removing dead code and resolving TODOs
globs: ["**/*.ts", "**/*.tsx"]
---

# /file-cleanup

Clean up the specified file.

## Actions

1. **Remove dead code**
   - Unused imports
   - Unused variables
   - Unreachable code
   - Commented-out code blocks

2. **Resolve TODOs**
   - List all TODO/FIXME comments
   - For each: implement, remove, or create ticket

3. **Format and lint**
   - Run formatter
   - Fix lint errors

## Output

Before/after summary:
- Lines removed
- TODOs resolved
- Issues fixed

## Exclusions

Don't remove:
- JSDoc comments
- Type comments
- License headers
- Intentional TODO with ticket reference
```

---

## Creating Your Own Commands

1. **Identify repetition** - What do you ask the agent to do often?
2. **Document the pattern** - Write clear steps
3. **Add examples** - Show before/after
4. **Include validation** - How to verify it worked

Start with 3-5 commands. Add more as patterns emerge.

