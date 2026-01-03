# Pillar 1 Checklist

Use this checklist to verify your repo is agent-ready.

## Essential (Start Here)

- [ ] Root `AGENTS.md` with project overview
- [ ] Linting configured and enforced
- [ ] Type hints on public interfaces
- [ ] Entry points documented (build, run, test)
- [ ] Basic test suite with real examples

## Recommended

- [ ] Per-service `AGENTS.md` for major domains
- [ ] Static analysis configured (TypeScript strict, mypy, etc.)
- [ ] Formatters configured and running on save
- [ ] Clear directory structure (group by domain)
- [ ] Descriptive file and function names

## Advanced

- [ ] Custom commands for repetitive tasks
- [ ] Skills for complex procedures
- [ ] MCPs configured for external tools (Jira, Notion)
- [ ] Pre-commit hooks for automated checks
- [ ] Documentation folder for architecture/patterns

## Anti-patterns to Avoid

- [ ] No `utils.ts` files with 50 unrelated functions
- [ ] No deep inheritance hierarchies
- [ ] No dynamic imports or metaprogramming
- [ ] No magic strings or implicit conventions
- [ ] No undocumented environment requirements

## Quick Validation

Run through these questions:

1. **Can the agent find your AGENTS.md?**
   - Is it at the root of your repo?
   - Does it explain what the project does?

2. **Can the agent run your project?**
   - Are commands documented?
   - Does `npm install && npm run dev` work?

3. **Can the agent verify changes?**
   - Are there tests it can run?
   - Does linting catch common mistakes?

4. **Can the agent understand your code?**
   - Are there type hints?
   - Are names descriptive?

## Priority Order

If you're starting from zero:

1. **Day 1:** Create root `AGENTS.md`
2. **Day 2:** Set up linting (ESLint, Biome, etc.)
3. **Day 3:** Add type hints to main interfaces
4. **Week 1:** Document entry points in `AGENTS.md`
5. **Week 2:** Add per-service `AGENTS.md` files
6. **Ongoing:** Add tests that serve as specs

Don't try to do everything at once. Each improvement compounds.
