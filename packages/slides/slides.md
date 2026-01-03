---
theme: default
title: Dev Workflow with Agents
info: |
  Workshop: How to work with AI agents in a structured, repeatable way
class: text-center
colorSchema: dark
drawings:
  persist: false
transition: slide-left
mdc: true
---

<div class="flex flex-col items-center justify-center h-full">
  <h1 class="text-6xl font-bold !leading-tight">Dev Workflow<br/>with Agents</h1>
  <p class="text-xl opacity-60 mt-6">A structured approach to working with AI agents</p>
</div>

<!--
- Welcome everyone
- This workshop: working with AI agents in a structured, repeatable way
- Assumption: you know LLMs, agents, tools
- Focus today: HOW to integrate them into your daily workflow
-->

---
layout: center
---

<div class="text-left max-w-2xl">
  <h2 class="text-4xl font-bold mb-8 text-red-400">The Problem</h2>
  <div class="space-y-4 text-2xl leading-relaxed">
    <p class="opacity-90">We know we need to use AI.</p>
    <p class="opacity-90">But <span class="text-red-400 font-semibold">"fix my bug"</span> doesn't work.</p>
    <p class="opacity-70 text-xl mt-6">It feels like we're doing the work <em>for</em> the AI.</p>
    <p class="opacity-70 text-xl">Sometimes it takes longer than just fixing it ourselves.</p>
    <p class="text-2xl mt-8 font-semibold opacity-90">Something's wrong.</p>
  </div>
</div>

<!--
- Ask: Who has felt this frustration?
- AI is capable, but vague prompts → vague results
- We end up babysitting, correcting, re-explaining
- Problem is not AI capability, it's how we communicate
-->

---
layout: center
class: text-center
---

<div class="flex flex-col justify-center items-center">
  <p class="text-5xl font-light leading-relaxed">"The problem isn't the AI.</p>
  <p class="text-5xl font-light leading-relaxed text-purple-400">It's how we use it."</p>
  <p class="mt-10 text-xl opacity-50">— @me </p>
</div>

<!--
- Core insight of the workshop
- AI is not bad at coding, we are bad at using it
- Rest of the presentation: how to fix that
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-4">
  <p class="text-2xl opacity-50">The Solution</p>
  <div class="text-5xl font-bold leading-relaxed">
    <p>Two pillars that make</p>
    <p>the workflow work</p>
  </div>
</div>

<!--
- Two parts to making this work
- First: prepare your codebase so the agent can thrive
- Second: adopt a structured workflow when executing tasks
- Both are equally important
-->

---
layout: center
---

<div class="grid grid-cols-2 gap-16 max-w-4xl">
  <div class="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
    <p class="text-lg opacity-50 mb-2">Pillar 1</p>
    <p class="text-3xl font-bold text-cyan-400 leading-relaxed">Prepare<br/>Your Repo</p>
    <p class="text-sm opacity-50 mt-4">Make your codebase agent-ready</p>
  </div>
  <div class="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
    <p class="text-lg opacity-50 mb-2">Pillar 2</p>
    <p class="text-3xl font-bold text-pink-400 leading-relaxed">Work With<br/>Your Agent</p>
    <p class="text-sm opacity-50 mt-4">The actual workflow</p>
  </div>
</div>

<!--
- Pillar 1: preparation (do it once, agent reuses forever)
- Pillar 2: execution (spec-driven development, iterative approach)
- We'll cover both in detail
- First: some vocabulary
-->

---
layout: center
---

<div class="max-w-3xl">
  <h2 class="text-4xl font-bold mb-8 text-cyan-400">Why prepare your repo?</h2>
  <div class="space-y-8">
    <div class="flex items-start gap-6">
      <div class="p-4 rounded-xl bg-cyan-400/10 border border-cyan-400/30 shrink-0">
        <p class="text-3xl">🗄️</p>
      </div>
      <div>
        <p class="text-2xl font-semibold mb-2">Think of it like database indexes</p>
        <p class="text-lg opacity-70">Queries hit indexes for fast access — not full table scans.</p>
      </div>
    </div>
    <div class="flex items-start gap-6">
      <div class="p-4 rounded-xl bg-cyan-400/10 border border-cyan-400/30 shrink-0">
        <p class="text-3xl">📁</p>
      </div>
      <div>
        <p class="text-2xl font-semibold mb-2">rule files = indexes for your repo</p>
        <p class="text-lg opacity-70">The agent gets context fast instead of scanning everything.</p>
      </div>
    </div>
    <div class="mt-8 p-6 rounded-xl bg-cyan-400/10 border border-cyan-400/30">
      <p class="text-xl"><span class="text-cyan-400 font-semibold">Result:</span> Faster responses, better accuracy, less wasted tokens.</p>
    </div>
  </div>
</div>

<!--
- Database analogy: without indexes, every query scans the full table
- Rule files = indexes for your repo
- Agent finds context fast
- Prepare once, agent benefits on every task
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-4">
  <p class="text-2xl opacity-50">But first</p>
  <p class="text-5xl font-bold">Let's get the vocabulary right</p>
</div>

<!--
- Before diving into pillars, we need shared vocabulary
- Terms: rules, commands, skills
- Different vendors use different names
- Let's align on definitions
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-4xl font-bold mb-6 text-purple-400">Rules</h2>
  <p class="text-2xl mb-8">Instructions that guide how the agent behaves.</p>
  <div class="grid grid-cols-3 gap-6">
    <div class="p-5 rounded-xl bg-blue-400/10 border border-blue-400/30 text-center">
      <p class="text-blue-400 font-semibold text-lg mb-2">User Rules</p>
      <p class="opacity-70 text-sm">Your personal preferences</p>
      <p class="opacity-50 text-xs mt-2">Apply to all your projects</p>
    </div>
    <div class="p-5 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-center">
      <p class="text-cyan-400 font-semibold text-lg mb-2">Workspace Rules</p>
      <p class="opacity-70 text-sm">Project-level guidance</p>
      <p class="opacity-50 text-xs mt-2">Lives in repo, shared with team</p>
    </div>
    <div class="p-5 rounded-xl bg-pink-400/10 border border-pink-400/30 text-center">
      <p class="text-pink-400 font-semibold text-lg mb-2">Subrules</p>
      <p class="opacity-70 text-sm">Scoped to directories</p>
      <p class="opacity-50 text-xs mt-2">Per-service or per-feature</p>
    </div>
  </div>
</div>

<!--
- Three levels of rules
- User rules: personal style, applies everywhere
- Workspace rules: project level, shared with team
- Subrules: scoped to directories, per-service context
-->

---
layout: center
---

<div class="max-w-3xl">
  <h2 class="text-4xl font-bold mb-4 text-cyan-400">Steering Files</h2>
  <p class="text-xl mb-2">Rule files are also called <span class="text-cyan-400 font-semibold">steering files</span>.</p>
  <p class="text-lg opacity-70 mb-6">They <em>steer</em> the agent in the direction you want.</p>
  <div class="p-6 rounded-xl bg-white/5 border border-white/10">
    <p class="text-sm opacity-50 mb-3">Different tools, same concept:</p>
    <div class="space-y-2 font-mono text-lg">
      <p><span class="text-cyan-400">AGENTS.md</span> — Generic, works everywhere</p>
      <p><span class="text-cyan-400">.cursorrules</span> — Cursor-specific</p>
      <p><span class="text-cyan-400">CLAUDE.md</span> — Claude Code</p>
    </div>
  </div>
</div>

<ProTip position="top-right">
  Write one <code>AGENTS.md</code> and symlink the rest. Update once, all vendors stay in sync.
</ProTip>

<!--
- Steering files direct the agent
- They are the "main" rule file
- Pro tip: write AGENTS.md, symlink to .cursorrules and CLAUDE.md
- One source of truth, all vendors stay in sync
-->

---
layout: center
---

<div class="max-w-4xl">
  <div class="flex items-center gap-3 mb-4">
    <div class="px-3 py-1 rounded-md bg-cyan-400/20 text-cyan-400 font-mono text-sm">AGENTS.md</div>
    <p class="opacity-50 text-sm">Real example from a production monorepo</p>
  </div>
  <div class="p-5 rounded-xl bg-[#1a1a2e] border border-white/10 font-mono text-xs leading-relaxed">
    <p class="text-cyan-400 mb-2"># Product Experience Backend</p>
    <p class="opacity-60 mb-3">Monorepo using NPM workspaces, Turbo, Fastify, TypeScript, Vitest, Biome.</p>
    <p class="text-cyan-400 mb-1">## Commands</p>
    <p class="opacity-60 mb-3"><span class="text-green-400">`npm ci`</span> · <span class="text-green-400">`npm run build`</span> · <span class="text-green-400">`npm run test`</span> · <span class="text-green-400">`npm run lint`</span></p>
    <p class="text-cyan-400 mb-1">## Code Style</p>
    <p class="opacity-60">Named exports only · No <span class="text-red-400">console.*</span> use logger · No direct <span class="text-red-400">process.env</span></p>
    <p class="opacity-60 mb-3">Include <span class="text-yellow-400">.ts</span> extensions · Semicolons · Single quotes</p>
    <p class="text-cyan-400 mb-1">## Structure</p>
    <p class="opacity-60 mb-3"><span class="text-yellow-400">packages/</span> shared libs · <span class="text-yellow-400">services/</span> deployable services</p>
    <p class="text-red-400 mb-1">## Never</p>
    <p class="opacity-60">Manually edit OpenAPI specs — source of truth is Fastify route schemas</p>
  </div>
</div>

<!--
- Real example from production
- Structure: project context, commands, code style, structure, never section
- Focus on the WHY, not the HOW
- Agent can figure out implementation
- "Never" section: things tooling cannot enforce
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-4xl font-bold mb-6 text-pink-400">Commands</h2>
  <p class="text-xl mb-6">Explicit instructions prefixed with <span class="font-mono text-pink-400">/</span></p>
  <div class="grid grid-cols-2 gap-6">
    <div class="p-5 rounded-xl bg-white/5 border border-white/10">
      <p class="text-pink-400 font-semibold mb-3">Native (from vendor)</p>
      <div class="space-y-2 font-mono text-base">
        <p><span class="text-pink-400">/plan</span> — Break down a task</p>
        <p><span class="text-pink-400">/compact</span> — Compress context</p>
        <p><span class="text-pink-400">/summarize</span> — Summarize conversation</p>
      </div>
    </div>
    <div class="p-5 rounded-xl bg-pink-400/10 border border-pink-400/30">
      <p class="text-pink-400 font-semibold mb-3">Custom (you create)</p>
      <div class="space-y-2 font-mono text-base">
        <p><span class="text-pink-400">/clean-flags</span> — Remove feature flags</p>
        <p><span class="text-pink-400">/gen-docs</span> — Generate documentation</p>
        <p><span class="text-pink-400">/file-cleanup</span> — Remove TODOs and dead code</p>
      </div>
      <p class="opacity-50 text-xs mt-3">Anything you repeat → make it a command</p>
    </div>
  </div>
</div>

<!--
- Commands are explicit triggers
- Native ones: from the vendor
- Custom commands: anything you repeat, make it a command
- Examples: clean feature flags, generate docs, cleanup dead code
- Think of patterns you do often
-->

---
layout: center
---

<div class="max-w-4xl">
  <div class="flex items-center gap-3 mb-4">
    <h2 class="text-3xl font-bold text-green-400">Skills</h2>
    <span class="px-2 py-1 rounded bg-green-400/20 text-green-400 text-xs font-semibold">Advanced</span>
    <span class="px-2 py-1 rounded bg-yellow-400/20 text-yellow-400 text-xs font-semibold">Experimental</span>
  </div>
  <div class="grid grid-cols-2 gap-6 mb-5">
    <div class="p-4 rounded-xl bg-cyan-400/10 border border-cyan-400/30">
      <p class="text-cyan-400 font-semibold mb-2">Rules</p>
      <p class="opacity-70 text-sm"><strong>Static</strong> — added to context automatically</p>
      <p class="opacity-50 text-xs mt-2">Always loaded, or triggered by path/pattern</p>
    </div>
    <div class="p-4 rounded-xl bg-green-400/10 border border-green-400/30">
      <p class="text-green-400 font-semibold mb-2">Skills</p>
      <p class="opacity-70 text-sm"><strong>Dynamic</strong> — agent invokes when needed</p>
      <p class="opacity-50 text-xs mt-2">LLM detects relevance and loads on demand</p>
    </div>
  </div>
  <div class="p-4 rounded-xl bg-[#1a1a2e] border border-white/10 font-mono text-sm mb-4">
    <p class="opacity-50 text-xs mb-2">skills/debug-ci/</p>
    <p class="opacity-70">├── SKILL.md <span class="text-white/40">← when to use + instructions</span></p>
    <p class="opacity-70">├── check-logs.sh</p>
    <p class="opacity-70">└── common-failures.md</p>
  </div>
  <p class="text-sm opacity-50 text-center">Agent working on CI? It loads the CI skill. Working on API? Different skill.</p>
</div>

<!--
- Key difference: Rules = static, Skills = dynamic
- Rules: always loaded based on path/pattern
- Skills: agent invokes when it detects relevance
- Skills can include multiple files: scripts, docs, templates
- Advanced, experimental: start with rules, add skills later
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-3xl font-bold mb-4 text-orange-400">MCPs (Model Context Protocol)</h2>
  <p class="text-lg opacity-60 mb-6">Connect your agent to external tools and services</p>
  <div class="grid grid-cols-4 gap-4 mb-6">
    <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
      <p class="text-2xl mb-2">📝</p>
      <p class="text-orange-400 font-semibold">Notion</p>
      <p class="opacity-50 text-xs">Docs, wikis</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
      <p class="text-2xl mb-2">🎫</p>
      <p class="text-orange-400 font-semibold">Jira</p>
      <p class="opacity-50 text-xs">Issues, tickets</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
      <p class="text-2xl mb-2">💬</p>
      <p class="text-orange-400 font-semibold">Slack</p>
      <p class="opacity-50 text-xs">Messages, channels</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
      <p class="text-2xl mb-2">🗄️</p>
      <p class="text-orange-400 font-semibold">Databases</p>
      <p class="opacity-50 text-xs">Query, explore</p>
    </div>
  </div>
  <div class="p-4 rounded-xl bg-orange-400/10 border border-orange-400/30">
    <p class="text-orange-400 font-semibold mb-2">Why MCPs matter</p>
    <p class="opacity-70 text-sm">Agent can fetch context from your actual tools. No copy-pasting tickets, no manual lookups. It reads Jira, searches Confluence, checks Slack history.</p>
  </div>
</div>

<!--
- MCPs connect your agent to external services
- Examples: Jira, Notion, Slack, databases
- Power: agent can fetch context from your actual tools
- Warning: each MCP consumes context (too many = bloated)
- We'll cover managing this in Pillar 2
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-3xl font-bold mb-4 text-purple-400">Agent Modes</h2>
  <p class="text-lg opacity-60 mb-6">Different modes for different tasks</p>
  <div class="flex gap-6 items-start">
    <img src="/images/agent-modes.png" class="rounded-xl shadow-lg max-h-48" />
    <div class="grid grid-cols-2 gap-4 flex-1">
      <div class="p-4 rounded-xl bg-white/5 border border-white/10">
        <p class="text-purple-400 font-semibold mb-1">Agent</p>
        <p class="opacity-60 text-sm">Full execution. Reads, writes, runs commands.</p>
      </div>
      <div class="p-4 rounded-xl bg-white/5 border border-white/10">
        <p class="text-cyan-400 font-semibold mb-1">Plan</p>
        <p class="opacity-60 text-sm">Think and propose. No execution. Use for brainstorming.</p>
      </div>
      <div class="p-4 rounded-xl bg-white/5 border border-white/10">
        <p class="text-amber-400 font-semibold mb-1">Debug</p>
        <p class="opacity-60 text-sm">Analyze errors. Focus on fixing issues.</p>
      </div>
      <div class="p-4 rounded-xl bg-white/5 border border-white/10">
        <p class="text-green-400 font-semibold mb-1">Ask</p>
        <p class="opacity-60 text-sm">Questions only. No tool access, just answers.</p>
      </div>
    </div>
  </div>
  <p class="text-sm opacity-50 mt-5 text-center">Start with Plan mode to think, switch to Agent mode to execute.</p>
</div>

<!--
- Different modes for different purposes
- Agent: full execution, reads/writes/runs commands
- Plan: think and propose, no execution (great for brainstorming)
- Debug: focused on fixing issues
- Ask: questions only, no tools
- Key pattern: Plan first, then Agent to execute
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-4">
  <p class="text-lg opacity-50">Pillar 1</p>
  <p class="text-5xl font-bold text-cyan-400">Prepare Your Repo</p>
  <p class="text-xl opacity-60 mt-4">Index your codebase for the agent</p>
</div>

<!--
- Now we dive into Pillar 1: preparation
- Making your codebase agent-friendly
- Do this work once, agent benefits on every task
-->

---
layout: center
---

<div class="max-w-3xl">
  <h2 class="text-3xl font-bold mb-6 text-cyan-400">The Core Principle</h2>
  <div class="p-6 rounded-xl bg-cyan-400/10 border border-cyan-400/30 mb-6">
    <p class="text-2xl leading-relaxed">You're <span class="text-cyan-400 font-semibold">indexing</span> your repo for the agent.</p>
    <p class="text-xl opacity-70 mt-3">Do it once. Agent reuses it forever.</p>
  </div>
  <div class="space-y-4 text-lg">
    <p class="opacity-80">Without indexes → agent scans everything, burns tokens, guesses</p>
    <p class="opacity-80">With indexes → agent finds context instantly, accurate responses</p>
  </div>
</div>

<!--
- Mental model: you are indexing your repo
- Without indexes: every query scans the full codebase
- With indexes: agent knows exactly where to look
- Invest time once, get returns on every future task
-->

---
layout: center
---

<ProTip position="top-right">
Focus on the <strong>why</strong>, not the <strong>how</strong>. The agent can figure out implementation details.
</ProTip>

<div class="max-w-4xl">
  <h2 class="text-3xl font-bold mb-4 text-cyan-400">What goes in rule files?</h2>
  <p class="text-lg opacity-60 mb-5">Things tooling <span class="text-cyan-400">can't</span> enforce automatically</p>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">Context</p>
      <p class="opacity-60 text-sm">"Monorepo with NPM workspaces, Turbo, Fastify"</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">Structure</p>
      <p class="opacity-60 text-sm">"Services in <code>services/</code>, shared libs in <code>packages/</code>"</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">Commands</p>
      <p class="opacity-60 text-sm">"Use <code>--filter</code> for specific packages"</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">Tools to use</p>
      <p class="opacity-60 text-sm">"For logging use <code>@adsk/logger</code>"</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">External links</p>
      <p class="opacity-60 text-sm">Design review, wiki, Figma, API docs</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">Domain knowledge</p>
      <p class="opacity-60 text-sm">"Feature flags managed in LaunchDarkly"</p>
    </div>
  </div>
</div>

<!--
- Six categories of content for rule files
- Focus on things tooling cannot enforce
- External links: agent becomes a portal to all your docs
- Pro tip: focus on the WHY, not the HOW
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-3xl font-bold mb-4 text-cyan-400">Let tooling do enforcement</h2>
  <p class="text-lg opacity-60 mb-6">Don't write "never do X" — let your tools catch it</p>
  <div class="grid grid-cols-3 gap-4">
    <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
      <p class="text-2xl mb-2">🔧</p>
      <p class="text-cyan-400 font-semibold">Linters</p>
      <p class="opacity-60 text-xs mt-2">ESLint, SwiftLint, ktlint, Ruff</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
      <p class="text-2xl mb-2">📘</p>
      <p class="text-cyan-400 font-semibold">Static Analysis</p>
      <p class="opacity-60 text-xs mt-2">TypeScript, mypy, detekt</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
      <p class="text-2xl mb-2">🎨</p>
      <p class="text-cyan-400 font-semibold">Formatters</p>
      <p class="opacity-60 text-xs mt-2">Prettier, swift-format, ktfmt</p>
    </div>
  </div>
  <div class="mt-6 p-4 rounded-xl bg-cyan-400/10 border border-cyan-400/30">
    <p class="text-center">Agent sees lint errors → learns the rules automatically</p>
  </div>
</div>

<!--
- Don't write "never use console.log" in your rule file
- Set up ESLint to catch it
- Agent sees the error, learns the rule
- Works across ecosystems: Swift, Kotlin, Python, Go
- Let tooling be the enforcer, rule files are for guidance
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-3xl font-bold mb-3 text-cyan-400">Rule files at every level</h2>
  <div class="p-4 rounded-xl bg-[#1a1a2e] border border-white/10 font-mono text-xs leading-tight">
    <p class="opacity-70">📁 <span class="text-white">product-experience-backend/</span></p>
    <p class="opacity-70 ml-4">├── <span class="text-cyan-400 font-semibold">AGENTS.md</span> <span class="text-white/40">← monorepo standards</span></p>
    <p class="opacity-70 ml-4">├── 📁 services/</p>
    <p class="opacity-70 ml-8">│   ├── saved-filters/ → <span class="text-cyan-400 font-semibold">AGENTS.md</span> <span class="text-white/40">← routes, schemas, links</span></p>
    <p class="opacity-70 ml-8">│   └── notifications/ → <span class="text-cyan-400 font-semibold">AGENTS.md</span> <span class="text-white/40">← different context</span></p>
    <p class="opacity-70 ml-4">└── 📁 packages/</p>
    <p class="opacity-70 ml-8">    ├── logger/ → <span class="text-cyan-400 font-semibold">AGENTS.md</span> <span class="text-white/40">← API, patterns</span></p>
    <p class="opacity-70 ml-8">    └── server-utils/ → <span class="text-cyan-400 font-semibold">AGENTS.md</span> <span class="text-white/40">← utilities</span></p>
  </div>
  <p class="text-sm opacity-60 mt-3 text-center">Agent picks up the nearest rule file. More specific = more relevant.</p>
</div>

<!--
- Rule files at every level of your monorepo
- Root AGENTS.md: overall standards, shared patterns
- Service-level: specific context, links, tools
- Agent picks up the nearest one
- More specific = more relevant
-->

---
layout: center
---

<div class="max-w-4xl">
  <div class="flex items-center gap-3 mb-3">
    <span class="text-white/40">📂</span>
    <span class="text-lg opacity-60">Inside</span>
    <div class="px-3 py-1 rounded-md bg-cyan-400/20 text-cyan-400 font-mono text-sm">services/saved-filters/AGENTS.md</div>
  </div>
  <div class="p-4 rounded-xl bg-[#1a1a2e] border border-white/10 font-mono text-sm leading-relaxed">
    <p class="text-cyan-400 mb-2"># Saved Filters Service</p>
    <p class="text-cyan-400 mb-1">## Links</p>
    <p class="opacity-60">• <span class="text-blue-400">[Design Review](https://wiki.company.com/saved-filters-dr)</span></p>
    <p class="opacity-60">• <span class="text-blue-400">[API Spec](https://api-docs.company.com/saved-filters)</span></p>
    <p class="opacity-60 mb-2">• <span class="text-blue-400">[Figma Designs](https://figma.com/file/xxx)</span></p>
    <p class="text-cyan-400 mb-1">## Context</p>
    <p class="opacity-60 mb-2">REST API for user-saved search filters. Uses Postgres.</p>
    <p class="text-cyan-400 mb-1">## Tools</p>
    <p class="opacity-60">• Validation: <span class="text-green-400">@adsk/validation</span></p>
    <p class="opacity-60">• Database: <span class="text-green-400">@adsk/db-client</span></p>
    <p class="opacity-60">• Auth: <span class="text-green-400">@adsk/auth-middleware</span></p>
  </div>
</div>

<!--
- Double-click into a service-level rule file
- Links: design review, API spec, Figma (agent can reference)
- Context: what this service does
- Tools: which packages to use for validation, database, auth
- Gives the agent everything it needs for this specific service
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-3xl font-bold mb-4 text-cyan-400">Beyond rule files</h2>
  <p class="text-lg opacity-60 mb-6">More ways to make your repo agent-friendly</p>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">🏗️ Code structure</p>
      <p class="opacity-60 text-sm">Clear naming, flat hierarchies, avoid metaprogramming</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">📝 Type hints</p>
      <p class="opacity-60 text-sm">Types dramatically improve agent comprehension</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">🧪 Executable tests</p>
      <p class="opacity-60 text-sm">"Make this test pass" is the clearest prompt</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">🚀 Entry points</p>
      <p class="opacity-60 text-sm">Document how to build, run, test</p>
    </div>
  </div>
</div>

<!--
- Rule files are not the only thing
- Code structure: clear naming, avoid metaprogramming
- Type hints: dramatically improve comprehension
- Tests: executable documentation
- Entry points: how to build, run, test
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-3xl font-bold mb-4 text-cyan-400">Types help agents</h2>
  <div class="grid grid-cols-2 gap-6">
    <div class="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
      <p class="text-red-400 font-semibold mb-3">❌ Hard to understand</p>
      <div class="font-mono text-sm opacity-80">
        <p>function process(data, opts) {</p>
        <p class="ml-4">const result = transform(data)</p>
        <p class="ml-4">return result</p>
        <p>}</p>
      </div>
    </div>
    <div class="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
      <p class="text-green-400 font-semibold mb-3">✓ Clear intent</p>
      <div class="font-mono text-sm opacity-80">
        <p>function process(</p>
        <p class="ml-4">data: <span class="text-cyan-400">UserInput</span>,</p>
        <p class="ml-4">opts: <span class="text-cyan-400">ProcessOptions</span></p>
        <p>): <span class="text-cyan-400">ProcessResult</span> {</p>
      </div>
    </div>
  </div>
  <p class="text-sm opacity-60 mt-4 text-center">Same applies to Swift protocols, Kotlin data classes, Go structs</p>
</div>

<!--
- Types are documentation for the agent
- Left: vague function, agent has to guess
- Right: clear types, agent knows exactly what to do
- Applies to all typed languages: TypeScript, Swift, Kotlin, Go
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-3xl font-bold mb-4 text-cyan-400">Tests as executable specs</h2>
  <div class="p-5 rounded-xl bg-[#1a1a2e] border border-white/10 font-mono text-sm">
    <p class="text-green-400 mb-2">// Instead of describing what you want...</p>
    <p class="opacity-60 mb-4">"Add a function that filters users by role and returns sorted by name"</p>
    <p class="text-green-400 mb-2">// Write a failing test</p>
    <p class="opacity-80">it('filters users by role', () => {</p>
    <p class="opacity-80 ml-4">const users = [{ name: 'Alice', role: 'admin' }, { name: 'Bob', role: 'user' }]</p>
    <p class="opacity-80 ml-4">const result = filterByRole(users, 'admin')</p>
    <p class="opacity-80 ml-4">expect(result).toEqual([{ name: 'Alice', role: 'admin' }])</p>
    <p class="opacity-80">})</p>
  </div>
  <p class="text-lg opacity-80 mt-4 text-center">"Make this test pass" → unambiguous goal</p>
</div>

<!--
- Tests are the clearest prompt you can give
- Instead of describing what you want, write a failing test
- "Make this test pass" is unambiguous
- Test defines the contract, agent implements it
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-3xl font-bold mb-4 text-cyan-400">Creating useful commands</h2>
  <p class="text-lg opacity-60 mb-5">Look at your chat history. What do you ask repeatedly?</p>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">🔄 Repetitive tasks</p>
      <p class="opacity-60 text-sm">"Clean up feature flags", "Update dependencies", "Generate docs"</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">🔍 Code review patterns</p>
      <p class="opacity-60 text-sm">"Check for security issues", "Audit accessibility", "Find TODO comments"</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">🏗️ Scaffolding</p>
      <p class="opacity-60 text-sm">"Create new service", "Add API endpoint", "Generate test file"</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">🧹 Cleanup</p>
      <p class="opacity-60 text-sm">"Remove console.logs", "Fix import order", "Update deprecated APIs"</p>
    </div>
  </div>
  <p class="text-sm opacity-50 mt-4 text-center">Start with 3-5 commands. Add more as patterns emerge.</p>
</div>

<!--
- Look at your chat history: what do you ask repeatedly?
- Four categories: repetitive tasks, code review, scaffolding, cleanup
- Start with 3-5 commands, add more as patterns emerge
- If you do it more than twice, make it a command
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-3xl font-bold mb-4 text-cyan-400">When to create a skill</h2>
  <p class="text-lg opacity-60 mb-5">Patterns you use repeatedly, but not every time. Keep them modular.</p>
  <div class="grid grid-cols-3 gap-4 mb-5">
    <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
      <span class="text-2xl">📚</span>
      <p class="text-cyan-400 font-semibold mt-2">Onboarding</p>
      <p class="opacity-50 text-xs mt-1">Setup, credentials, local dev</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
      <span class="text-2xl">🚀</span>
      <p class="text-cyan-400 font-semibold mt-2">Deployment</p>
      <p class="opacity-50 text-xs mt-1">Deploy, rollback, monitoring</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
      <span class="text-2xl">🐛</span>
      <p class="text-cyan-400 font-semibold mt-2">Debug CI</p>
      <p class="opacity-50 text-xs mt-1">Logs, traces, common fixes</p>
    </div>
  </div>
  <div class="p-4 rounded-xl bg-green-400/10 border border-green-400/30">
    <p class="text-green-400 font-semibold mb-2">The key insight</p>
    <p class="opacity-70 text-sm">You don't need a skill for every task. Create one when you notice a <strong>recurring pattern</strong> that requires multiple steps, scripts, or external docs. The agent will invoke it when relevant.</p>
  </div>
</div>

<!--
- Skills are for recurring patterns, not every task
- Good examples: onboarding, deployment, debugging CI
- Key insight: agent invokes skills dynamically when it detects relevance
- Start simple, add skills as patterns emerge
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-3xl font-bold mb-5 text-cyan-400">Pillar 1 Checklist</h2>
  <div class="grid grid-cols-2 gap-3 text-base">
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Root <code class="text-cyan-400">AGENTS.md</code> with project overview</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Per-module rule files with external links</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Linting and static analysis configured</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Type hints on public interfaces</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Entry points documented (build, run, test)</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Tests that serve as executable specs</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Custom commands for repetitive tasks</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Skills for complex procedures (optional)</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-orange-400">☐</span>
      <span>MCPs configured for your tools (Jira, Notion, etc.)</span>
    </div>
  </div>
</div>

<!--
- Takeaway checklist for Pillar 1
- Start with basics: root AGENTS.md, linting, types
- Add module-level rule files as your repo grows
- MCPs are optional but powerful
- Don't try to do everything at once, iterate
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-4">
  <p class="text-lg opacity-50">Pillar 2</p>
  <p class="text-5xl font-bold text-pink-400">Work With Your Agent</p>
  <p class="text-xl opacity-60 mt-4">The execution workflow</p>
</div>

<!--
- Now we move to Pillar 2: the actual workflow
- Pillar 1 was about preparation, Pillar 2 is about execution
- This is spec-driven development: plan, then execute
-->

---
layout: center
---

<div class="max-w-5xl">
  <h2 class="text-3xl font-bold mb-6 text-red-400 text-center">What doesn't work</h2>
  <div class="grid grid-cols-2 gap-8 items-center">
    <div>
      <p class="text-xl opacity-80 mb-4">"Slice a piece of cake"</p>
      <div class="p-4 rounded-xl bg-red-500/10 border border-red-500/30 mb-4">
        <p class="text-red-400 font-semibold mb-2">Vague prompts</p>
        <p class="opacity-60 text-sm">"Fix my bug"</p>
        <p class="opacity-60 text-sm">"Build this feature"</p>
        <p class="opacity-60 text-sm">"Make it work"</p>
      </div>
      <p class="text-sm opacity-60">The LLM doesn't have your mental model.<br/>It will interpret literally.</p>
    </div>
    <div class="flex items-center justify-center">
      <img src="/images/slice-of-cake.png" class="rounded-xl max-h-72 shadow-2xl" />
    </div>
  </div>
</div>

<!--
- The cake image: my wife asked me to slice a piece of cake
- I sliced it vertically, she meant horizontally
- Same with AI: vague prompts → literal, wrong interpretations
- The LLM doesn't have your mental model
-->

---
layout: center
---

<div class="max-w-3xl text-center">
  <h2 class="text-4xl font-bold mb-6 text-amber-400">Context is everything</h2>
  <p class="text-2xl mb-8 opacity-80">The agent only knows what you show it.</p>
  <div class="grid grid-cols-2 gap-6 text-left">
    <div class="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
      <p class="text-red-400 font-semibold mb-2">❌ What you assume</p>
      <p class="opacity-60 text-sm">"It should know the codebase"</p>
      <p class="opacity-60 text-sm">"It remembers our last chat"</p>
      <p class="opacity-60 text-sm">"It understands the business"</p>
    </div>
    <div class="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
      <p class="text-green-400 font-semibold mb-2">✓ What actually works</p>
      <p class="opacity-60 text-sm">Attach relevant files</p>
      <p class="opacity-60 text-sm">Provide explicit context</p>
      <p class="opacity-60 text-sm">Be specific about intent</p>
    </div>
  </div>
</div>

<!--
- Context is everything
- Agent only knows what you show it
- Common assumptions that fail: it knows the codebase, remembers last chat
- What works: attach relevant files, explicit context, specific intent
- This is why spec-driven development matters
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-4xl font-bold mb-4 text-cyan-400">Spec-driven development</h2>
  <p class="text-xl opacity-60 mb-8">The solution: structure before execution</p>
  <div class="flex items-center justify-center gap-4 text-lg">
    <div class="px-4 py-3 rounded-xl bg-purple-400/20 border border-purple-400/30 text-purple-400 font-semibold">Plan</div>
    <span class="text-2xl opacity-40">→</span>
    <div class="px-4 py-3 rounded-xl bg-cyan-400/20 border border-cyan-400/30 text-cyan-400 font-semibold">Requirements</div>
    <span class="text-2xl opacity-40">→</span>
    <div class="px-4 py-3 rounded-xl bg-pink-400/20 border border-pink-400/30 text-pink-400 font-semibold">Design</div>
    <span class="text-2xl opacity-40">→</span>
    <div class="px-4 py-3 rounded-xl bg-amber-400/20 border border-amber-400/30 text-amber-400 font-semibold">Tasks</div>
    <span class="text-2xl opacity-40">→</span>
    <div class="px-4 py-3 rounded-xl bg-green-400/20 border border-green-400/30 text-green-400 font-semibold">Execute</div>
  </div>
  <p class="text-center mt-8 opacity-60">Brainstorm first, then define what you want.</p>
</div>

<!--
- Core of spec-driven development
- Five phases: Plan, Requirements, Design, Tasks, Execute
- Brainstorm first with Plan mode, then define what you want
- Structure before execution, always
-->

---
layout: center
---

<div class="max-w-3xl">
  <div class="flex items-center gap-4 mb-6">
    <div class="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center text-purple-400 font-bold text-xl">1</div>
    <h2 class="text-3xl font-bold text-purple-400">Plan and brainstorm</h2>
  </div>
  <p class="text-xl opacity-60 mb-6">Use Plan mode. Think with the agent before executing anything.</p>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-purple-400 font-semibold mb-2">Start in /plan mode</p>
      <p class="opacity-60 text-sm">Agent analyzes without executing. Proposes approach.</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-purple-400 font-semibold mb-2">Ask clarifying questions</p>
      <p class="opacity-60 text-sm">"What edge cases should we handle?"</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-purple-400 font-semibold mb-2">Iterate on ideas</p>
      <p class="opacity-60 text-sm">"Actually, let's use Redis instead of DB"</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-purple-400 font-semibold mb-2">Validate assumptions</p>
      <p class="opacity-60 text-sm">"Check if existing auth middleware works here"</p>
    </div>
  </div>
</div>

<!--
- Step 1: Plan and brainstorm
- Use Plan mode, agent thinks without executing
- Ask clarifying questions, iterate on ideas, validate assumptions
- This is cheap, execution is expensive
- Think first
-->

---
layout: center
---

<div class="max-w-4xl">
  <div class="flex items-center gap-4 mb-5">
    <div class="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold text-xl">2</div>
    <h2 class="text-3xl font-bold text-cyan-400">Define requirements</h2>
  </div>
  <p class="text-lg opacity-60 mb-4">Use structured formats. The agent implements exactly what you write.</p>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 rounded-xl bg-[#1a1a2e] border border-white/10 font-mono text-xs">
      <p class="text-cyan-400 mb-2">## EARS Format</p>
      <p class="opacity-70 mb-1"><span class="text-purple-400">WHEN</span> [trigger] <span class="text-purple-400">THEN</span> system <span class="text-purple-400">SHALL</span> [behavior]</p>
      <p class="opacity-50 text-xs mt-2 mb-1">Example:</p>
      <p class="opacity-70">- <span class="text-cyan-400">FR-001</span>: WHEN user submits form THEN system SHALL validate</p>
      <p class="opacity-70">- <span class="text-cyan-400">FR-002</span>: WHEN validation fails THEN system SHALL show error</p>
    </div>
    <div class="p-4 rounded-xl bg-[#1a1a2e] border border-white/10 font-mono text-xs">
      <p class="text-cyan-400 mb-2">## User Story + Acceptance</p>
      <p class="opacity-70 mb-1"><span class="text-amber-400">[P1]</span> Save filter presets</p>
      <p class="opacity-50 text-xs mt-2 mb-1">Acceptance:</p>
      <p class="opacity-70">- <span class="text-green-400">Given</span> no presets, <span class="text-green-400">When</span> user saves, <span class="text-green-400">Then</span> preset appears</p>
      <p class="opacity-70">- <span class="text-cyan-400">SC-001</span>: Max 50 presets per user</p>
    </div>
  </div>
  <p class="text-xs opacity-50 mt-3 text-center">FR = Functional Requirement · SC = Success Criteria · P1/P2/P3 = Priority</p>
</div>

<!--
- Step 2: Define requirements
- Use structured formats: EARS, user stories, acceptance criteria
- Requirements are the WHAT, be specific
- Agent implements exactly what you write
-->

---
layout: center
---

<div class="max-w-5xl">
  <div class="flex items-center gap-4 mb-4">
    <div class="w-12 h-12 rounded-full bg-pink-400/20 flex items-center justify-center text-pink-400 font-bold text-xl">3</div>
    <h2 class="text-3xl font-bold text-pink-400">Define the design</h2>
    <span class="px-3 py-1 rounded bg-pink-400/20 text-pink-400 text-sm ml-auto">HOW it works</span>
  </div>
  <p class="text-lg opacity-60 mb-5">Architecture decisions, data structures, flows, and interfaces.</p>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 rounded-xl bg-[#1a1a2e] border border-white/10">
      <p class="text-pink-400 text-sm font-semibold mb-3">📊 Diagrams (Mermaid)</p>
      <div class="text-sm font-mono opacity-80 space-y-1">
        <p>• <span class="text-cyan-400">sequenceDiagram</span> → API flows</p>
        <p>• <span class="text-cyan-400">erDiagram</span> → DB schema</p>
        <p>• <span class="text-cyan-400">flowchart</span> → Logic paths</p>
        <p>• <span class="text-cyan-400">classDiagram</span> → OOP structure</p>
      </div>
    </div>
    <div class="p-4 rounded-xl bg-[#1a1a2e] border border-white/10">
      <p class="text-pink-400 text-sm font-semibold mb-3">🗃️ Data Structures</p>
      <div class="text-sm font-mono opacity-80 space-y-1">
        <p class="text-amber-400">interface Preset {</p>
        <p class="ml-3">id: number</p>
        <p class="ml-3">userId: number</p>
        <p class="ml-3">filters: FilterData</p>
        <p class="text-amber-400">}</p>
      </div>
    </div>
    <div class="p-4 rounded-xl bg-[#1a1a2e] border border-white/10">
      <p class="text-pink-400 text-sm font-semibold mb-3">🔌 API Contracts</p>
      <div class="text-sm font-mono opacity-80 space-y-1">
        <p><span class="text-green-400">POST</span> /api/presets → 201: { id, name }</p>
        <p><span class="text-cyan-400">GET</span> /api/presets → 200: Preset[]</p>
        <p><span class="text-red-400">DELETE</span> /api/presets/:id → 204</p>
      </div>
    </div>
    <div class="p-4 rounded-xl bg-[#1a1a2e] border border-white/10">
      <p class="text-pink-400 text-sm font-semibold mb-3">⚖️ Decisions + Rationale</p>
      <div class="text-sm opacity-80 space-y-1">
        <p><span class="text-white">PostgreSQL</span> <span class="opacity-50">- already in stack, JSONB support</span></p>
        <p><span class="text-white">REST</span> <span class="opacity-50">- simpler, fits CRUD pattern</span></p>
      </div>
    </div>
  </div>
</div>

<!--
- Step 3: Define the design
- Design is the HOW: diagrams, data structures, APIs, decisions
- Use Mermaid for diagrams: sequence, ERD, flowchart
- Document decisions with rationale
- Agent can reference this later
-->

---
layout: center
---

<div class="max-w-5xl flex gap-6">
  <div class="flex-[2]">
    <div class="flex items-center gap-4 mb-4">
      <div class="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 font-bold text-xl">4</div>
      <h2 class="text-3xl font-bold text-amber-400">Break into tasks</h2>
    </div>
    <p class="text-lg opacity-60 mb-4">Atomic units with full context</p>
    <div class="grid grid-cols-2 gap-3">
      <div class="p-3 rounded-xl bg-amber-400/10 border border-amber-400/30">
        <p class="text-amber-400 font-semibold mb-1">🎯 Atomic chunks</p>
        <p class="opacity-60 text-sm">One clear goal per task</p>
      </div>
      <div class="p-3 rounded-xl bg-purple-400/10 border border-purple-400/30">
        <p class="text-purple-400 font-semibold mb-1">⚡ Parallel markers</p>
        <p class="opacity-60 text-sm"><code>[P]</code> for tasks that can run together</p>
      </div>
      <div class="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/30">
        <p class="text-cyan-400 font-semibold mb-1">📋 Subtasks</p>
        <p class="opacity-60 text-sm">Break complex tasks into steps</p>
      </div>
      <div class="p-3 rounded-xl bg-pink-400/10 border border-pink-400/30">
        <p class="text-pink-400 font-semibold mb-1">🔗 Linked context</p>
        <p class="opacity-60 text-sm">Reference FR-*, design decisions</p>
      </div>
    </div>
  </div>
  <div class="flex-1 p-4 rounded-xl bg-[#0d0d1a] border border-amber-400/30 font-mono text-xs self-start">
    <p class="text-amber-400 font-bold mb-3">📄 tasks.md</p>
    <div class="space-y-3 opacity-80">
      <div>
        <p class="text-amber-400">## T001: DB Migration</p>
        <p class="text-white/50">Context: <span class="text-cyan-400">FR-001</span>, <span class="text-pink-400">PostgreSQL</span></p>
        <p class="text-white/50">Goal: Create presets table</p>
      </div>
      <div>
        <p class="text-amber-400">## T002: Schemas</p>
        <p class="text-white/50">Context: <span class="text-pink-400">Data Structures</span></p>
        <p class="text-white/50">Goal: Define Preset types</p>
      </div>
      <div>
        <p class="text-amber-400">## T003 <span class="text-purple-400">[P]</span>: GET endpoint</p>
        <p class="text-white/50">Context: <span class="text-cyan-400">FR-001</span>, <span class="text-pink-400">API</span></p>
        <p class="text-white/50">Goal: GET /api/presets</p>
      </div>
    </div>
  </div>
</div>

<!--
- Step 4: Break into tasks
- One file, many tasks
- Each task has context, goal, linked requirements
- Mark parallel tasks with [P]
- Break complex tasks into subtasks
- Agent knows the full context from the links
-->

---
layout: center
---

<div class="max-w-3xl">
  <div class="flex items-center gap-4 mb-6">
    <div class="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center text-green-400 font-bold text-xl">5</div>
    <h2 class="text-3xl font-bold text-green-400">Execute one at a time</h2>
  </div>
  <p class="text-xl opacity-60 mb-6">Work on each task separately. Review before moving on.</p>
  <div class="grid grid-cols-3 gap-4 text-center">
    <div class="p-4 rounded-xl bg-green-400/10 border border-green-400/30">
      <p class="text-3xl mb-2">🎯</p>
      <p class="text-green-400 font-semibold">Focus</p>
      <p class="opacity-60 text-sm">One task per conversation</p>
    </div>
    <div class="p-4 rounded-xl bg-green-400/10 border border-green-400/30">
      <p class="text-3xl mb-2">👀</p>
      <p class="text-green-400 font-semibold">Review</p>
      <p class="opacity-60 text-sm">Check output before next task</p>
    </div>
    <div class="p-4 rounded-xl bg-green-400/10 border border-green-400/30">
      <p class="text-3xl mb-2">🔄</p>
      <p class="text-green-400 font-semibold">Iterate</p>
      <p class="opacity-60 text-sm">Refine until correct</p>
    </div>
  </div>
  <p class="text-sm opacity-60 mt-6 text-center">Treat agent output like a junior dev PR. Verify, don't trust blindly.</p>
</div>

<!--
- Step 5: Execute one at a time
- One task per conversation
- Review before moving on
- Treat agent output like a junior dev PR
- Verify, don't trust blindly
- Compact after each task to keep context fresh
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-3xl font-bold mb-4 text-cyan-400">Tools for spec-driven development</h2>
  <p class="text-lg opacity-60 mb-4">The workflow generates structured files at each phase</p>
  <div class="flex items-center justify-center gap-2 text-xs mb-4">
    <div class="px-3 py-1 rounded bg-cyan-400/20 text-cyan-400 font-mono">spec.md</div>
    <span class="opacity-40">→</span>
    <div class="px-3 py-1 rounded bg-pink-400/20 text-pink-400 font-mono">design.md</div>
    <span class="opacity-40">→</span>
    <div class="px-3 py-1 rounded bg-amber-400/20 text-amber-400 font-mono">tasks.md</div>
    <span class="opacity-40">→</span>
    <div class="px-3 py-1 rounded bg-green-400/20 text-green-400 font-mono">implement</div>
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 rounded-xl bg-purple-400/10 border border-purple-400/30">
      <p class="text-purple-400 font-semibold mb-2 text-sm">GitHub Spec Kit</p>
      <p class="text-xs opacity-50 mb-2">specify init my-project --ai claude</p>
      <div class="font-mono text-xs opacity-70 space-y-1">
        <p><span class="text-purple-400">/speckit.specify</span> → spec.md (EARS, stories)</p>
        <p><span class="text-purple-400">/speckit.plan</span> → design.md + data-model.md</p>
        <p><span class="text-purple-400">/speckit.tasks</span> → tasks.md (phases, markers)</p>
        <p><span class="text-purple-400">/speckit.implement</span> → execute with TDD</p>
      </div>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2 text-sm">Key patterns from tooling</p>
      <div class="text-xs opacity-70 space-y-1">
        <p>• <span class="text-green-400">EARS format</span> for requirements</p>
        <p>• <span class="text-green-400">Given/When/Then</span> acceptance criteria</p>
        <p>• <span class="text-green-400">[Story: US1]</span> links for traceability</p>
        <p>• <span class="text-green-400">[P]</span> markers for parallel tasks</p>
        <p>• <span class="text-green-400">Checkpoints</span> after each user story</p>
      </div>
    </div>
  </div>
</div>

<!--
- Tools that help with spec-driven development
- GitHub Spec Kit provides custom commands for the full workflow
- Key patterns: EARS format, Given/When/Then, linked stories, parallel markers
- Adopt these patterns manually or use the tooling
-->

---
layout: center
---

<div class="flex flex-col items-center gap-6">
  <p class="text-lg opacity-50">Now that we have our workflow...</p>
  <p class="text-5xl font-bold text-amber-400">Patterns for execution</p>
  <p class="text-xl opacity-60 mt-4">Fresh Chat Protocol: new session for each major phase</p>
</div>

<!--
- Segue: now let's talk about execution patterns
- Fresh Chat Protocol: new session for each major phase
- These are the habits that make the workflow work
-->

---
layout: center
---

<div class="max-w-5xl">
  <h2 class="text-3xl font-bold mb-2 text-red-400">Keep conversations short</h2>
  <div class="flex gap-4 items-center mb-4">
    <p class="opacity-60">Use:</p>
    <span class="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-400 font-mono">/compact</span>
    <span class="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-400 font-mono">/summarize</span>
    <span class="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-cyan-400 font-mono">New chat</span>
  </div>
  <div class="flex gap-6 items-center">
    <img src="/images/lost-in-the-middle.png" class="rounded-xl max-h-80 shadow-2xl" />
    <div class="flex-1">
      <p class="text-amber-400 font-bold text-xl mb-3">⚠️ Lost in the middle</p>
      <p class="opacity-80 text-lg leading-relaxed">LLMs struggle with information buried in long conversations. Important context at the start or middle gets "forgotten".</p>
      <p class="text-green-400 font-semibold mt-4">→ Compact after each phase</p>
      <p class="text-green-400 font-semibold">→ Compact after each task</p>
      <p class="text-cyan-400 text-sm mt-3 opacity-80">Large specs? Use document sharding: break into indexed sections.</p>
    </div>
  </div>
</div>

<!--
- Critical: keep conversations short
- LLMs struggle with info buried in long conversations ("lost in the middle")
- Use /compact after each phase AND after each task
- Start new chats for major phases
- Context degrades over time
-->

---
layout: center
---

<div class="max-w-5xl">
  <h2 class="text-3xl font-bold mb-3 text-orange-400">MCP context bloat</h2>
  <p class="text-lg opacity-60 mb-4">More tools = less space for your actual work</p>
  <div class="grid grid-cols-2 gap-6 items-center">
    <div class="flex justify-center">
      <img src="/images/mcp-context-bloat.jpeg" class="rounded-xl max-h-56 shadow-2xl" />
    </div>
    <div class="space-y-3">
      <div class="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
        <p class="text-red-400 font-semibold mb-1 text-sm">Too many MCPs enabled</p>
        <p class="opacity-60 text-xs">10 MCPs × 50 tools = thousands of tokens gone</p>
      </div>
      <div class="p-3 rounded-xl bg-green-500/10 border border-green-500/30">
        <p class="text-green-400 font-semibold mb-1 text-sm">Be selective</p>
        <p class="opacity-60 text-xs">Enable only what you need. Disable when not in use.</p>
      </div>
    </div>
  </div>
</div>

<!--
- Warning about MCPs: more tools = less context for your work
- Each MCP adds tool definitions to context
- 10 MCPs can eat thousands of tokens
- Be selective, enable only what you need for the current task
- Disable MCPs when not in use
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-3xl font-bold mb-6 text-cyan-400">The full loop</h2>
  <div class="flex items-center justify-center gap-2 text-sm mb-4">
    <div class="px-3 py-2 rounded-lg bg-cyan-400/20 text-cyan-400">Requirements</div>
    <span class="opacity-40">→</span>
    <div class="px-3 py-2 rounded-lg bg-purple-400/20 text-purple-400">Plan</div>
    <span class="opacity-40">→</span>
    <div class="px-3 py-2 rounded-lg bg-pink-400/20 text-pink-400">Design</div>
    <span class="opacity-40">→</span>
    <div class="px-3 py-2 rounded-lg bg-amber-400/20 text-amber-400">Tasks</div>
    <span class="opacity-40">→</span>
    <div class="px-2 py-2 rounded-lg bg-green-400/20 text-green-400 flex items-center gap-1 text-xs">
      <span>T1</span><span class="opacity-40">→</span><span>T2</span><span class="opacity-40">→</span><span>T3</span>
    </div>
  </div>
  <div class="flex items-center justify-center gap-4 text-xs opacity-60 mb-6">
    <span>compact ↓</span>
    <span>compact ↓</span>
    <span>compact ↓</span>
    <span>compact ↓</span>
    <span class="text-green-400">compact after each ↓</span>
  </div>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="font-semibold mb-2">Each phase is a checkpoint</p>
      <p class="opacity-60 text-sm">Summarize, save decisions, start fresh for next phase</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="font-semibold mb-2">Decisions compound</p>
      <p class="opacity-60 text-sm">Good requirements → good design → good tasks → good code</p>
    </div>
  </div>
</div>

<!--
- Full loop visualized
- Each phase has a checkpoint
- Compact and summarize before moving on
- Notice: compact after each task, not just after each phase
- Decisions compound: good requirements → good code
-->

---
layout: center
---

<div class="max-w-3xl text-center flex flex-col gap-6">
  <p class="text-5xl font-bold">
    Not all tasks require <span class="text-amber-400">spec-ing</span>,
  </p>
  <p class="text-5xl font-bold">
    but all tasks require <span class="text-cyan-400">planning</span>.
  </p>
  <p class="mt-8 opacity-60 text-xl">Simple bug fix? Plan first, execute. Complex feature? Full spec workflow.</p>
</div>

<!--
- Important disclaimer
- Not every task needs the full spec workflow
- Simple bug fix? Just plan and execute
- Complex feature? Full workflow with requirements, design, tasks
- But ALL tasks require planning
- Think before you act
-->

---
layout: center
---

<div class="max-w-2xl text-center">
  <p class="text-4xl font-light italic leading-relaxed opacity-90">
    "Measure twice, cut once."
  </p>
  <p class="mt-8 text-lg opacity-60">— A wise man told me that</p>
</div>

<!--
- Old wisdom applies to AI
- Measure twice, cut once
- Planning is measuring, execution is cutting
- Invest in planning, save on rework
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-3xl font-bold mb-5 text-cyan-400">Pillar 2 Checklist</h2>
  <div class="grid grid-cols-2 gap-2 text-sm">
    <div class="flex items-center gap-3 p-2 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Use EARS format for requirements (FR-001, SC-001)</span>
    </div>
    <div class="flex items-center gap-3 p-2 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Write Given/When/Then acceptance criteria</span>
    </div>
    <div class="flex items-center gap-3 p-2 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Document design decisions with rationale</span>
    </div>
    <div class="flex items-center gap-3 p-2 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Add [Story: US1] links to tasks for traceability</span>
    </div>
    <div class="flex items-center gap-3 p-2 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Mark parallel tasks with [P]</span>
    </div>
    <div class="flex items-center gap-3 p-2 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Add checkpoints after each user story</span>
    </div>
    <div class="flex items-center gap-3 p-2 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>One task per conversation</span>
    </div>
    <div class="flex items-center gap-3 p-2 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>/compact after each phase and task</span>
    </div>
    <div class="flex items-center gap-3 p-2 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Fresh chat for each major phase</span>
    </div>
    <div class="flex items-center gap-3 p-2 rounded-lg bg-white/5">
      <span class="text-orange-400">☐</span>
      <span>Disable unused MCPs to save context</span>
    </div>
  </div>
</div>

<!--
- Takeaway checklist for Pillar 2
- Start with basics: EARS format, acceptance criteria, one task per conversation
- Build up to checkpoints and fresh chats as you get comfortable
- MCP management is important: disable what you don't need
-->

---
layout: center
---

<div class="text-center">
  <p class="text-6xl font-bold mb-8">Thank you!</p>
  <p class="text-2xl opacity-60">Questions?</p>
</div>

<!--
- Thank you for attending
- Now it's time for the hands-on session
- Refer to the cookbook for reference
- Questions?
-->
