# Parallel Agent Execution

Run multiple AI agents on different tasks simultaneously without blocking your main workflow.

## The Problem

When you kick off a task with an agent, you typically wait for it to finish before starting the next one. For long-running tasks or multiple features, this creates a bottleneck.

## The Solution: Git Worktrees

Git worktrees let you have multiple working directories, each on a different branch, all sharing the same repository data. Each agent works in isolation, and you review PRs as they come in.

```
your-project/          ← You work here (main)
../worktrees/
  ├── feature-auth/    ← Agent 1 works here
  └── feature-filters/ ← Agent 2 works here
```

## Tool Support

### Cursor Background Agents

Cursor has built-in support. When you start a background task:

1. Agent creates an isolated worktree
2. Works on the task independently
3. Opens a PR when done
4. You continue working in your main directory

No setup required.

### Claude Code (Manual Setup)

Claude Code doesn't have native worktree support yet. Set it up manually:

```bash
# Create a worktree for a feature branch
git worktree add ../worktrees/my-feature feature-branch

# Open that directory in Claude Code
cd ../worktrees/my-feature

# When done, clean up
git worktree remove ../worktrees/my-feature
```

## When to Use

- **Parallel features**: Multiple independent tasks that don't conflict
- **Long-running tasks**: Agent works in background while you continue
- **Risky experiments**: Let agent try things without affecting your main work
- **PR review workflow**: Multiple PRs in progress, each in its own worktree

## Key Commands

| Command | Description |
|---------|-------------|
| `git worktree add <path> <branch>` | Create a new worktree |
| `git worktree list` | Show all active worktrees |
| `git worktree remove <path>` | Clean up a worktree |

## Further Reading

- [Git Worktree Documentation](https://git-scm.com/docs/git-worktree)

