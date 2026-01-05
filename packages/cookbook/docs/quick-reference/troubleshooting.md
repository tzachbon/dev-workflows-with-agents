# Troubleshooting

Common issues and how to fix them.

---

## Agent Forgets Earlier Context

**Symptom:** Agent ignores decisions made earlier in the conversation.

**Cause:** "Lost in the middle" problem. LLMs struggle with information buried in long conversations.

**Fix:**
1. Use `/compact` to summarize and compress
2. Start a fresh chat for new phases
3. Repeat important context in your prompt
4. Keep conversations shorter

---

## Agent Produces Wrong Code Style

**Symptom:** Code doesn't match your patterns, uses wrong packages, violates conventions.

**Cause:** Missing or incomplete `AGENTS.md`.

**Fix:**
1. Create/update root `AGENTS.md`
2. Include code style rules explicitly
3. List tools and packages to use
4. Add "Never" section for anti-patterns

---

## Agent Doesn't Know How to Build/Run/Test

**Symptom:** Agent guesses at commands, tries wrong scripts.

**Cause:** Entry points not documented.

**Fix:**
1. Add Commands section to `AGENTS.md`
2. Include all common scripts
3. Document flags and options
4. Consider a Makefile for discoverability

---

## Slow or Degraded Responses

**Symptom:** Agent takes long to respond, output quality drops.

**Cause:** Too many MCPs enabled, context window bloated.

**Fix:**
1. Disable unused MCPs
2. Enable only what you need for current task
3. Use `/compact` to reduce conversation size
4. Start fresh chat if severely degraded

---

## Agent Makes Same Mistake Repeatedly

**Symptom:** You correct an error, agent makes it again.

**Cause:** Correction lost in context, or pattern not understood.

**Fix:**
1. Be explicit about what's wrong and why
2. Add the rule to `AGENTS.md` if it's a pattern
3. Set up linting to catch it automatically
4. Start fresh chat with the rule included upfront

---

## Agent Implements Wrong Thing

**Symptom:** Output doesn't match what you wanted.

**Cause:** Vague prompt, missing requirements.

**Fix:**
1. Use structured requirements (EARS, Given/When/Then)
2. Be specific about edge cases
3. Ask agent to restate the task before implementing
4. Use Plan mode first to validate understanding

---

## Tests Keep Failing

**Symptom:** Agent's code breaks existing tests.

**Cause:** Agent doesn't have test context, or tests not run.

**Fix:**
1. Attach relevant test files as context
2. Ask agent to run tests after changes
3. Include test patterns in `AGENTS.md`
4. Write failing test first, then ask to make it pass

---

## Agent Uses Deprecated APIs

**Symptom:** Code uses old patterns or deprecated functions.

**Cause:** Training data cutoff, missing guidance.

**Fix:**
1. Specify versions in `AGENTS.md`
2. Include "Never" section with deprecated patterns
3. Attach current API docs or examples
4. Explicitly state "use X instead of Y"

---

## Agent Creates Files in Wrong Locations

**Symptom:** New files don't follow project structure.

**Cause:** Structure not documented.

**Fix:**
1. Add Structure section to `AGENTS.md`
2. Show where different file types go
3. Include examples of existing structure
4. Be explicit: "Create this in `src/services/`"

---

## Agent Ignores Type Safety

**Symptom:** Uses `any`, skips type checks, produces type errors.

**Cause:** Not strict enough TypeScript, or rule not stated.

**Fix:**
1. Configure strict TypeScript (`strict: true`)
2. Add "no `any` type" to AGENTS.md Never section
3. Let type errors be visible to agent
4. Include type definitions as context

---

## Conversation Gets Confusing

**Symptom:** Multiple threads of work, agent confused about current task.

**Cause:** Too many topics in one conversation.

**Fix:**
1. One task per conversation
2. Start fresh chat for new topics
3. State current task explicitly at start
4. Use checkpoints between phases

---

## Agent Hallucinates APIs/Packages

**Symptom:** Agent suggests packages that don't exist or wrong API signatures.

**Cause:** Training data limitations.

**Fix:**
1. Attach actual docs or type definitions
2. Use Context7 MCP for up-to-date docs
3. Specify exact package versions
4. Verify suggestions before using

---

## Can't Get Agent to Use MCPs

**Symptom:** Agent doesn't search Jira, Notion, etc. when it should.

**Cause:** MCPs not configured, or agent doesn't know to use them.

**Fix:**
1. Verify MCPs are enabled in settings
2. Explicitly ask: "Search Jira for ticket ABC-123"
3. Check MCP server is running
4. Review MCP logs for connection issues

---

## General Debugging Steps

When something's not working:

1. **Check AGENTS.md** - Is the guidance there?
2. **Check context** - Did you attach relevant files?
3. **Check prompt** - Were you specific enough?
4. **Check mode** - Are you in the right mode?
5. **Check MCPs** - Are the right ones enabled?
6. **Start fresh** - Sometimes a new chat fixes everything

---

## When to Start Fresh

Start a new conversation when:

- Agent is confused about the current task
- You've had more than 10-15 back-and-forth exchanges
- You're moving to a new phase of work
- Output quality has noticeably degraded
- You've corrected the same issue multiple times

Fresh context produces better output.

