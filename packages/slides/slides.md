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
        <p><span class="text-pink-400">/cleanup</span> — Clean up comments</p>
      </div>
      <p class="opacity-50 text-xs mt-3">Anything you repeat → make it a command</p>
    </div>
  </div>
</div>

---
layout: center
---

<div class="max-w-3xl">
  <div class="flex items-center gap-3 mb-4">
    <h2 class="text-3xl font-bold text-green-400">Skills</h2>
    <span class="px-2 py-1 rounded bg-green-400/20 text-green-400 text-xs font-semibold">Advanced</span>
    <span class="px-2 py-1 rounded bg-yellow-400/20 text-yellow-400 text-xs font-semibold">Experimental</span>
  </div>
  <p class="text-xl mb-6">Modular capabilities that package instructions, scripts, and resources for specialized tasks.</p>
  <div class="p-5 rounded-xl bg-[#1a1a2e] border border-white/10 font-mono text-sm mb-6">
    <p class="opacity-50 text-xs mb-2">skills/generate-report/</p>
    <p class="opacity-70">├── SKILL.md <span class="text-white/40">← instructions + when to use</span></p>
    <p class="opacity-70">├── template.xlsx</p>
    <p class="opacity-70">├── format-data.py</p>
    <p class="opacity-70">└── brand-guidelines.md</p>
  </div>
  <div class="space-y-3 text-lg">
    <p class="opacity-70">• Agent decides when to load based on task relevance</p>
    <p class="opacity-70">• Can include executable scripts and templates</p>
    <p class="opacity-70">• Encapsulates organizational knowledge and procedures</p>
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

<div class="max-w-3xl">
  <h2 class="text-3xl font-bold mb-6 text-cyan-400">Pillar 1 Checklist</h2>
  <div class="space-y-3 text-lg">
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Root <code class="text-cyan-400">AGENTS.md</code> with project overview</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Per-service rule files with links to external docs</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Linting configured (ESLint, Biome, TypeScript strict)</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Clear entry points (Makefile, npm scripts)</span>
    </div>
    <div class="flex items-center gap-3 p-3 rounded-lg bg-white/5">
      <span class="text-cyan-400">☐</span>
      <span>Type hints on public interfaces</span>
    </div>
  </div>
</div>
