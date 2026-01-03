# Tasks

Break work into atomic units with full context.

![Slice of Cake - Break into small pieces](/images/slice-of-cake.png)

## Why Break Into Tasks

Large prompts fail. The agent loses focus, makes mistakes, or goes off track.

Small, focused tasks:
- Have clear goals
- Are easy to verify
- Can be done in one conversation
- Build on each other

## Task Structure

Each task needs:

| Component | Purpose |
|-----------|---------|
| ID | Reference for tracking (T001, T002) |
| Title | What the task accomplishes |
| Context | Links to requirements, design decisions |
| Goal | Single clear objective |
| Subtasks | Breakdown if needed |

## Task Format

```markdown
## T001: Database Migration

**Context**: FR-001, PostgreSQL decision
**Goal**: Create presets table with proper schema

### Subtasks
1. Create migration file
2. Define table schema (id, user_id, name, filters, timestamps)
3. Add foreign key to users table
4. Add unique constraint on (user_id, name)
5. Run migration and verify
```

## Parallel Tasks

Mark tasks that can run independently with `[P]`:

```markdown
## T003 [P]: GET endpoint

**Context**: FR-001, API design
**Goal**: Implement GET /api/presets

## T004 [P]: POST endpoint

**Context**: FR-002, API design  
**Goal**: Implement POST /api/presets

## T005 [P]: DELETE endpoint

**Context**: FR-003, API design
**Goal**: Implement DELETE /api/presets/:id
```

These can be done in any order or simultaneously.

## Linked Context

Reference requirements and design in each task:

```markdown
## T006: Add validation

**Context**: FR-002, SC-001, SC-002, Zod decision
**Goal**: Validate preset input before save

### Requirements covered
- FR-002: Return errors on invalid input
- SC-001: Enforce 50 preset limit
- SC-002: Ensure unique names per user
```

The agent knows exactly what constraints to implement.

## Task Dependencies

Show what depends on what:

```markdown
## Task Order

1. T001: Database Migration
2. T002: Type Definitions (depends on T001)
3. T003-T005 [P]: API Endpoints (depend on T002)
4. T006: Validation (depends on T003-T005)
5. T007: Tests (depends on all above)
```

## Checkpoints

Add checkpoints after logical groups:

```markdown
## Phase 1: Foundation
- T001: Database Migration
- T002: Type Definitions
- **CHECKPOINT**: Verify schema, types compile

## Phase 2: API
- T003-T005 [P]: API Endpoints
- T006: Validation
- **CHECKPOINT**: All endpoints work, validation tested

## Phase 3: Polish
- T007: Error handling
- T008: Logging
- **CHECKPOINT**: Ready for review
```

## Full Tasks File Example

```markdown
# Tasks: User Presets Feature

## Overview
Implement user preset save/load functionality.

## Phase 1: Data Layer

### T001: Database Migration
**Context**: ERD, PostgreSQL
**Goal**: Create presets table

### T002: Type Definitions  
**Context**: Data structures from design
**Goal**: Define Preset, CreatePresetRequest types

**CHECKPOINT**: Run migration, verify types compile

## Phase 2: API Layer

### T003 [P]: List Presets Endpoint
**Context**: API design - GET /api/presets
**Goal**: Return user's presets

### T004 [P]: Create Preset Endpoint
**Context**: API design - POST /api/presets, SC-001
**Goal**: Create with limit check

### T005 [P]: Delete Preset Endpoint
**Context**: API design - DELETE /api/presets/:id
**Goal**: Delete with ownership check

**CHECKPOINT**: Test all endpoints manually

## Phase 3: Validation & Tests

### T006: Input Validation
**Context**: FR-002, Zod
**Goal**: Validate all inputs

### T007: Unit Tests
**Context**: All requirements
**Goal**: Test coverage for happy path and errors

**CHECKPOINT**: All tests pass, ready for PR
```

## Keep Tasks Small

A good task:
- Takes 10-30 minutes to implement
- Has one clear goal
- Can be verified independently
- Fits in one conversation

If a task feels too big, break it down further.

:::tip
When you give a task to the agent, include the full context: "Implement T004, here's the requirements doc and design doc." Don't make the agent search for context.
:::
