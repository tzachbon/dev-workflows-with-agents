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

---
layout: center
class: text-center
---

<div class="flex flex-col justify-center items-center">
  <p class="text-5xl font-light leading-relaxed">"The problem isn't the AI.</p>
  <p class="text-5xl font-light leading-relaxed text-purple-400">It's how we use it."</p>
  <p class="mt-10 text-xl opacity-50">— @me </p>
</div>

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

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-4">
  <p class="text-2xl opacity-50">But first</p>
  <p class="text-5xl font-bold">Let's get the vocabulary right</p>
</div>

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

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-4">
  <p class="text-lg opacity-50">Pillar 1</p>
  <p class="text-5xl font-bold text-cyan-400">Prepare Your Repo</p>
  <p class="text-xl opacity-60 mt-4">Index your codebase for the agent</p>
</div>

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

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-4">
  <p class="text-lg opacity-50">Pillar 2</p>
  <p class="text-5xl font-bold text-pink-400">Work With Your Agent</p>
  <p class="text-xl opacity-60 mt-4">The execution workflow</p>
</div>

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

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-4xl font-bold mb-4 text-cyan-400">Spec-driven development</h2>
  <p class="text-xl opacity-60 mb-8">The solution: structure before execution</p>
  <div class="flex items-center justify-center gap-4 text-lg">
    <div class="px-4 py-3 rounded-xl bg-cyan-400/20 border border-cyan-400/30 text-cyan-400 font-semibold">Requirements</div>
    <span class="text-2xl opacity-40">→</span>
    <div class="px-4 py-3 rounded-xl bg-purple-400/20 border border-purple-400/30 text-purple-400 font-semibold">Plan</div>
    <span class="text-2xl opacity-40">→</span>
    <div class="px-4 py-3 rounded-xl bg-pink-400/20 border border-pink-400/30 text-pink-400 font-semibold">Design</div>
    <span class="text-2xl opacity-40">→</span>
    <div class="px-4 py-3 rounded-xl bg-amber-400/20 border border-amber-400/30 text-amber-400 font-semibold">Tasks</div>
    <span class="text-2xl opacity-40">→</span>
    <div class="px-4 py-3 rounded-xl bg-green-400/20 border border-green-400/30 text-green-400 font-semibold">Execute</div>
  </div>
  <p class="text-center mt-8 opacity-60">Define what you want before asking the agent to build it.</p>
</div>

---
layout: center
---

<div class="max-w-3xl">
  <div class="flex items-center gap-4 mb-6">
    <div class="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold text-xl">1</div>
    <h2 class="text-3xl font-bold text-cyan-400">Define requirements</h2>
  </div>
  <p class="text-xl opacity-60 mb-6">What are you trying to achieve? Write it down.</p>
  <div class="p-5 rounded-xl bg-[#1a1a2e] border border-white/10 font-mono text-sm">
    <p class="text-cyan-400 mb-2">## Requirements</p>
    <p class="opacity-70">- Users can save filter presets</p>
    <p class="opacity-70">- Presets persist across sessions</p>
    <p class="opacity-70">- Presets can be shared via URL</p>
    <p class="opacity-70">- Maximum 50 presets per user</p>
  </div>
  <p class="text-sm opacity-60 mt-4 text-center">Be explicit. The agent will implement exactly what you write.</p>
</div>

---
layout: center
---

<div class="max-w-3xl">
  <div class="flex items-center gap-4 mb-6">
    <div class="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center text-purple-400 font-bold text-xl">2</div>
    <h2 class="text-3xl font-bold text-purple-400">Plan and iterate</h2>
  </div>
  <p class="text-xl opacity-60 mb-6">Think through your approach. Refine your understanding.</p>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-purple-400 font-semibold mb-2">Use /plan mode</p>
      <p class="opacity-60 text-sm">Agent analyzes without executing. Proposes approach.</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-purple-400 font-semibold mb-2">Ask clarifying questions</p>
      <p class="opacity-60 text-sm">"What edge cases should we handle?"</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-purple-400 font-semibold mb-2">Iterate on the plan</p>
      <p class="opacity-60 text-sm">"Actually, let's use Redis instead of DB"</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10">
      <p class="text-purple-400 font-semibold mb-2">Validate assumptions</p>
      <p class="opacity-60 text-sm">"Check if existing auth middleware works here"</p>
    </div>
  </div>
</div>

---
layout: center
---

<div class="max-w-3xl">
  <div class="flex items-center gap-4 mb-6">
    <div class="w-12 h-12 rounded-full bg-pink-400/20 flex items-center justify-center text-pink-400 font-bold text-xl">3</div>
    <h2 class="text-3xl font-bold text-pink-400">Define the design</h2>
  </div>
  <p class="text-xl opacity-60 mb-6">How should it work? Make architecture decisions explicit.</p>
  <div class="p-5 rounded-xl bg-[#1a1a2e] border border-white/10 font-mono text-sm">
    <p class="text-pink-400 mb-2">## Design</p>
    <p class="opacity-70">- Store presets in PostgreSQL (users table FK)</p>
    <p class="opacity-70">- REST endpoints: GET/POST/DELETE /api/presets</p>
    <p class="opacity-70">- Share via encoded query param, not separate table</p>
    <p class="opacity-70">- Use existing validation middleware</p>
  </div>
  <p class="text-sm opacity-60 mt-4 text-center">Architecture decisions made here save debugging later.</p>
</div>

---
layout: center
---

<div class="max-w-3xl">
  <div class="flex items-center gap-4 mb-6">
    <div class="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 font-bold text-xl">4</div>
    <h2 class="text-3xl font-bold text-amber-400">Break into tasks</h2>
  </div>
  <p class="text-xl opacity-60 mb-6">Decompose into small, independent pieces.</p>
  <div class="space-y-2">
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-amber-400">☐</span>
      <span>Create presets database migration</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-amber-400">☐</span>
      <span>Add preset TypeBox schemas</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-amber-400">☐</span>
      <span>Implement GET /api/presets endpoint</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-amber-400">☐</span>
      <span>Implement POST /api/presets endpoint</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-amber-400">☐</span>
      <span>Add sharing via URL encoding</span>
    </div>
  </div>
</div>

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
    </div>
  </div>
</div>

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
    <div class="px-3 py-2 rounded-lg bg-green-400/20 text-green-400">Execute</div>
  </div>
  <div class="flex items-center justify-center gap-4 text-xs opacity-60 mb-8">
    <span>compact ↓</span>
    <span>compact ↓</span>
    <span>compact ↓</span>
    <span>compact ↓</span>
    <span>compact ↓</span>
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

---
layout: center
---

<div class="max-w-3xl">
  <h2 class="text-3xl font-bold mb-5 text-cyan-400">Pillar 2 Checklist</h2>
  <div class="grid grid-cols-2 gap-3 text-base">
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Write requirements before coding</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Use /plan mode first</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Document design decisions</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Break work into small tasks</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>One task per conversation</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Review output before next task</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>/compact after each phase</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Start new chat when context grows</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-orange-400">☐</span>
      <span>Disable unused MCPs to save context</span>
    </div>
  </div>
</div>
