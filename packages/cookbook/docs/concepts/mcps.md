# MCPs (Model Context Protocol)

Connect your agent to external tools and services. MCPs extend what the agent can do beyond reading and writing files.

## What MCPs Enable

Instead of copy-pasting from other tools, the agent can:

- Read Jira tickets directly
- Search Confluence/Notion docs
- Check Slack history
- Query databases
- Call internal APIs

## Common MCPs

| MCP | Purpose |
|-----|---------|
| Notion | Read docs, wikis, knowledge bases |
| Jira | Read and create issues, check ticket details |
| Slack | Search messages, check channel history |
| Database | Query, explore schema |
| GitHub | Read PRs, issues, code |
| Browser | Navigate and interact with web pages |

## Why MCPs Matter

The agent can fetch context from your actual tools. No more:
- "Let me copy this Jira ticket description..."
- "Here's what the Confluence doc says..."
- "I found this in Slack..."

The agent reads the source directly.

## The Tradeoff: Context Bloat

![MCP Context Bloat](/images/mcp-context-bloat.jpeg)

:::warning
More MCPs = less context for your actual work.
:::

Each MCP adds tool definitions to the context window:
- 10 MCPs × 50 tools = thousands of tokens consumed
- Less room for your code and conversation
- Response quality can degrade

## Managing MCP Bloat

**Be selective.** Enable only what you need for the current task.

| Task | MCPs to Enable |
|------|----------------|
| Implementing a Jira ticket | Jira only |
| Researching architecture | Notion/Confluence only |
| Debugging production issue | Database + logs |
| Code review | GitHub only |

**Disable when not in use.** If you're not using Slack search, turn off the Slack MCP.

## Configuration

MCPs are configured in your IDE settings. In Cursor, go to Settings → MCP to enable/disable servers.

Example MCP config:

```json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["@notionhq/mcp-server"]
    },
    "jira": {
      "command": "npx", 
      "args": ["@atlassian/mcp-jira"]
    }
  }
}
```

## Best Practices

1. **Start with zero MCPs** - Add only when you need external context
2. **One or two at a time** - Keep context lean
3. **Disable after use** - Don't leave all MCPs running
4. **Check token usage** - If responses degrade, you may have too many enabled
