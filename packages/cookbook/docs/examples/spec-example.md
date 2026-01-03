# Spec Example

Complete example of spec-driven development documents.

## The Feature

User preset saving: users can save, list, and delete search filter presets.

---

## spec.md - Requirements

```markdown
# User Presets Feature

## Overview

Allow users to save their search filter configurations as named presets
for quick reuse.

## User Stories

### US-001: Save Preset [P1]

As a user, I want to save my current search filters as a named preset
so I can quickly apply them later.

#### Acceptance Criteria

- AC-001: Given no existing presets, When user saves a preset,
  Then preset appears in their list
- AC-002: Given user has 50 presets, When user tries to save another,
  Then system shows limit reached error
- AC-003: Given user saves preset, When they reload the page,
  Then preset persists

### US-002: List Presets [P1]

As a user, I want to see all my saved presets so I can choose one to apply.

#### Acceptance Criteria

- AC-004: Given user has presets, When they open preset menu,
  Then all presets are shown with names
- AC-005: Given user has no presets, When they open preset menu,
  Then empty state is shown

### US-003: Delete Preset [P2]

As a user, I want to delete presets I no longer need.

#### Acceptance Criteria

- AC-006: Given user has a preset, When they delete it,
  Then it's removed from their list
- AC-007: Given user deletes last preset, When they view list,
  Then empty state is shown

## Functional Requirements

- FR-001: WHEN user submits valid preset THEN system SHALL save to database
- FR-002: WHEN validation fails THEN system SHALL return error with details
- FR-003: WHEN user requests presets THEN system SHALL return their presets only
- FR-004: WHEN user deletes preset THEN system SHALL verify ownership first

## Success Criteria

- SC-001: Maximum 50 presets per user
- SC-002: Preset names must be unique per user
- SC-003: Preset names max 100 characters
- SC-004: API response time < 200ms at p95

## Non-Functional Requirements

- NFR-001: All endpoints require authentication
- NFR-002: Presets are user-scoped (no cross-user access)
- NFR-003: Deleted presets are hard deleted (no soft delete)
```

---

## design.md - Technical Design

```markdown
# User Presets - Technical Design

## Data Model

### Preset Table

| Column | Type | Constraints |
|--------|------|-------------|
| id | SERIAL | PRIMARY KEY |
| user_id | INTEGER | NOT NULL, FK → users |
| name | VARCHAR(100) | NOT NULL |
| filters | JSONB | NOT NULL |
| created_at | TIMESTAMP | NOT NULL DEFAULT NOW() |
| updated_at | TIMESTAMP | NOT NULL DEFAULT NOW() |

Unique constraint: (user_id, name)
Index: user_id (for list queries)

### TypeScript Types

interface Preset {
  id: number
  userId: number
  name: string
  filters: FilterData
  createdAt: Date
  updatedAt: Date
}

interface FilterData {
  query?: string
  status?: string[]
  dateRange?: {
    start: string
    end: string
  }
  tags?: string[]
}

interface CreatePresetRequest {
  name: string
  filters: FilterData
}

interface PresetResponse {
  id: number
  name: string
  filters: FilterData
  createdAt: string
}

## API Design

### List Presets

GET /api/presets
Authorization: Bearer {token}

Response 200:
{
  "presets": PresetResponse[]
}

### Create Preset

POST /api/presets
Authorization: Bearer {token}
Content-Type: application/json

Request:
{
  "name": "My Preset",
  "filters": { ... }
}

Response 201:
{
  "id": 123,
  "name": "My Preset",
  "createdAt": "2024-01-15T10:30:00Z"
}

Errors:
- 400: Invalid input (validation failed)
- 409: Duplicate name
- 429: Preset limit reached (50)

### Delete Preset

DELETE /api/presets/:id
Authorization: Bearer {token}

Response 204: No content

Errors:
- 404: Preset not found
- 403: Not owner

## Sequence: Create Preset

sequenceDiagram
    Client->>API: POST /presets
    API->>Auth: Validate token
    Auth-->>API: User ID
    API->>Validation: Validate input
    Validation-->>API: Valid
    API->>DB: Count user presets
    DB-->>API: Count: 45
    API->>DB: Check name exists
    DB-->>API: Not found
    API->>DB: INSERT preset
    DB-->>API: Preset ID
    API-->>Client: 201 Created

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Storage | PostgreSQL | Already in stack, JSONB for filters |
| ORM | Drizzle | Team standard |
| Validation | Zod | Type inference, good errors |
| No caching | - | Low traffic, simple queries |
```

---

## tasks.md - Task Breakdown

```markdown
# User Presets - Tasks

## Phase 1: Data Layer

### T001: Database Migration

**Context**: Data model from design.md
**Goal**: Create presets table with schema

Subtasks:
1. Create migration file
2. Define columns per design
3. Add foreign key constraint
4. Add unique constraint (user_id, name)
5. Add index on user_id
6. Run migration

### T002: Type Definitions

**Context**: TypeScript types from design.md
**Goal**: Create Preset types and schemas

Subtasks:
1. Create types in `src/types/preset.ts`
2. Create Zod schemas for validation
3. Create Drizzle table definition

**CHECKPOINT**: Migration runs, types compile

## Phase 2: API Layer

### T003 [P]: GET /api/presets

**Context**: FR-003, API design
**Goal**: List user's presets

Subtasks:
1. Create route handler
2. Query presets by user ID
3. Map to response format
4. Add tests

### T004 [P]: POST /api/presets

**Context**: FR-001, FR-002, SC-001, SC-002
**Goal**: Create preset with validation

Subtasks:
1. Create route handler
2. Validate input with Zod
3. Check preset count (SC-001)
4. Check name uniqueness (SC-002)
5. Insert and return
6. Add tests

### T005 [P]: DELETE /api/presets/:id

**Context**: FR-004, API design
**Goal**: Delete preset with ownership check

Subtasks:
1. Create route handler
2. Find preset
3. Verify ownership
4. Delete and return 204
5. Add tests

**CHECKPOINT**: All endpoints work, tests pass

## Phase 3: Error Handling

### T006: Validation Errors

**Context**: FR-002
**Goal**: Consistent error response format

Subtasks:
1. Create error response type
2. Handle Zod validation errors
3. Return 400 with details

### T007: Business Logic Errors

**Context**: SC-001, SC-002
**Goal**: Handle limit and duplicate errors

Subtasks:
1. 429 for preset limit
2. 409 for duplicate name
3. Add tests for error cases

**CHECKPOINT**: All error cases handled, ready for review
```

---

## Using This Example

1. Copy the structure
2. Replace with your feature details
3. Adjust complexity to match your needs
4. Iterate based on feedback

Simple features need less. Complex features might need more.
