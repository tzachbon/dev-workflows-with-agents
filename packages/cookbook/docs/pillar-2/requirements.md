# Requirements

Use structured formats. The agent implements exactly what you write.

## Why Structured Requirements

Vague requirements produce vague implementations.

| Vague | Structured |
|-------|------------|
| "Add user settings" | "WHEN user updates settings THEN system SHALL persist to database" |
| "Handle errors" | "WHEN validation fails THEN system SHALL return 400 with error details" |

Structured formats force clarity.

## EARS Format

Easy Approach to Requirements Syntax. Simple pattern:

```
WHEN [trigger] THEN system SHALL [behavior]
```

### Examples

```markdown
## Requirements

- **FR-001**: WHEN user submits form THEN system SHALL validate all fields
- **FR-002**: WHEN validation fails THEN system SHALL show error messages
- **FR-003**: WHEN form is valid THEN system SHALL save to database
- **FR-004**: WHEN save succeeds THEN system SHALL redirect to dashboard
```

FR = Functional Requirement. Number them for traceability.

## User Stories with Acceptance Criteria

Combine user stories with Given/When/Then:

```markdown
## US-001: Save Filter Presets [P1]

As a user, I want to save my search filters so I can reuse them later.

### Acceptance Criteria

- **AC-001**: Given no existing presets, When user saves a preset, Then preset appears in list
- **AC-002**: Given 50 existing presets, When user tries to save, Then system shows limit error
- **AC-003**: Given a preset exists, When user deletes it, Then it's removed from list
```

P1/P2/P3 indicates priority.

## Success Criteria

Define what "done" means:

```markdown
## Success Criteria

- **SC-001**: Max 50 presets per user
- **SC-002**: Preset names must be unique per user
- **SC-003**: Presets load in under 200ms
- **SC-004**: All operations require authentication
```

## Non-Functional Requirements

Don't forget the -ilities:

```markdown
## Non-Functional Requirements

- **NFR-001**: API response time < 200ms at p99
- **NFR-002**: Support 1000 concurrent users
- **NFR-003**: Data encrypted at rest
- **NFR-004**: Audit log for all mutations
```

## Linking Requirements

Reference requirements in tasks and tests:

```markdown
## Task: Implement preset validation

Context: FR-002, SC-001, SC-002

Steps:
1. Add validation schema for preset input
2. Check preset count before save (SC-001)
3. Check name uniqueness (SC-002)
4. Return appropriate error responses (FR-002)
```

When the agent implements this task, it knows exactly what constraints apply.

## Template

```markdown
# Feature: [Name]

## Overview
[One paragraph description]

## User Stories

### US-001: [Story Name] [Priority]
As a [user type], I want to [action] so that [benefit].

#### Acceptance Criteria
- AC-001: Given [context], When [action], Then [result]
- AC-002: ...

## Functional Requirements

- FR-001: WHEN [trigger] THEN system SHALL [behavior]
- FR-002: ...

## Success Criteria

- SC-001: [Measurable criterion]
- SC-002: ...

## Non-Functional Requirements

- NFR-001: [Performance/security/etc. requirement]
```

## Keep It Lean

Don't over-specify. Write enough to:
1. Clarify what you want
2. Define boundaries
3. Enable verification

If a requirement is obvious, skip it. Focus on things that could be misunderstood.

:::tip
Requirements are a conversation tool. Write them, share with the agent, refine based on questions. They're not a contract.
:::
