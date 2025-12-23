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
  <p class="text-5xl font-light leading-relaxed text-purple-400">It's what we feed it."</p>
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
        <p class="text-2xl font-semibold mb-2">Steering files = indexes for your repo</p>
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

<div class="max-w-3xl">
  <h2 class="text-4xl font-bold mb-8 text-cyan-400">Steering Files</h2>
  <div class="space-y-6 text-xl leading-relaxed">
    <p class="text-2xl">Markdown files that guide agent behavior.</p>
    <p class="opacity-70">Written for the <span class="text-cyan-400 font-semibold">AI</span>, not humans.</p>
    <div class="mt-8 p-6 rounded-xl bg-white/5 border border-white/10">
      <p class="text-sm opacity-50 mb-3">Examples</p>
      <div class="space-y-2 font-mono text-lg">
        <p><span class="text-cyan-400">AGENTS.md</span> — Project or directory-level guidance</p>
        <p><span class="text-cyan-400">.cursorrules</span> — Cursor-specific rules</p>
        <p><span class="text-cyan-400">CLAUDE.md</span> — Claude Code guidance</p>
      </div>
    </div>
  </div>
</div>

<ProTip position="top-right">
  Write one <code>AGENTS.md</code> and symlink to <code>.cursorrules</code>, <code>CLAUDE.md</code>, etc. Update once, all vendors stay in sync.
</ProTip>

---
layout: center
---

<div class="max-w-3xl">
  <h2 class="text-4xl font-bold mb-8 text-cyan-400">What goes in a Steering File?</h2>
  <div class="grid grid-cols-2 gap-6">
    <div class="p-5 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">Project purpose</p>
      <p class="opacity-70 text-sm">What does this codebase do?</p>
    </div>
    <div class="p-5 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">Entry points</p>
      <p class="opacity-70 text-sm">Where does execution start?</p>
    </div>
    <div class="p-5 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">Key locations</p>
      <p class="opacity-70 text-sm">Where to find services, utilities, configs</p>
    </div>
    <div class="p-5 rounded-xl bg-white/5 border border-white/10">
      <p class="text-cyan-400 font-semibold mb-2">Domain knowledge</p>
      <p class="opacity-70 text-sm">Business logic, patterns, conventions</p>
    </div>
    <div class="p-5 rounded-xl bg-white/5 border border-white/10 col-span-2">
      <p class="text-red-400 font-semibold mb-2">What NOT to do</p>
      <p class="opacity-70 text-sm">Anti-patterns, deprecated approaches, common mistakes</p>
    </div>
  </div>
</div>

---
layout: center
---

<div class="max-w-3xl">
  <h2 class="text-4xl font-bold mb-8 text-purple-400">Rules</h2>
  <div class="space-y-6 text-xl leading-relaxed">
    <p class="text-2xl">Specific directives that constrain agent behavior.</p>
    <p class="opacity-70">Rules live in steering files or IDE settings.</p>
    <div class="mt-8 grid grid-cols-2 gap-4">
      <div class="p-5 rounded-xl bg-white/5 border border-white/10">
        <p class="text-purple-400 font-semibold mb-2">Workspace rules</p>
        <p class="opacity-70 text-sm">Apply to entire project</p>
      </div>
      <div class="p-5 rounded-xl bg-white/5 border border-white/10">
        <p class="text-purple-400 font-semibold mb-2">User rules</p>
        <p class="opacity-70 text-sm">Personal preferences, all projects</p>
      </div>
      <div class="p-5 rounded-xl bg-white/5 border border-white/10">
        <p class="text-purple-400 font-semibold mb-2">Always-applied</p>
        <p class="opacity-70 text-sm">Active regardless of context</p>
      </div>
      <div class="p-5 rounded-xl bg-white/5 border border-white/10">
        <p class="text-purple-400 font-semibold mb-2">Auto-attached</p>
        <p class="opacity-70 text-sm">Activate based on file patterns</p>
      </div>
    </div>
  </div>
</div>

---
layout: center
---

<div class="max-w-3xl">
  <h2 class="text-4xl font-bold mb-8 text-pink-400">Commands</h2>
  <div class="space-y-6 text-xl leading-relaxed">
    <p class="text-2xl">Explicit instructions that trigger agent behaviors.</p>
    <p class="opacity-70">Usually prefixed with <span class="font-mono text-pink-400">/</span></p>
    <div class="mt-8 p-6 rounded-xl bg-white/5 border border-white/10">
      <p class="text-sm opacity-50 mb-4">In Cursor</p>
      <div class="space-y-3 font-mono text-lg">
        <p><span class="text-pink-400">/edit</span> — Edit selected code</p>
        <p><span class="text-pink-400">/chat</span> — Start conversation</p>
        <p><span class="text-pink-400">/agent</span> — Full agent mode with tool access</p>
      </div>
    </div>
  </div>
</div>

---
layout: center
---

<div class="max-w-3xl">
  <h2 class="text-4xl font-bold mb-8 text-amber-400">Context</h2>
  <div class="space-y-6 text-xl leading-relaxed">
    <p class="text-2xl">Everything the agent can "see" when processing.</p>
    <div class="mt-6 grid grid-cols-2 gap-4 text-lg">
      <div class="p-4 rounded-xl bg-white/5 border border-white/10">
        <p class="opacity-90">Files you've opened</p>
      </div>
      <div class="p-4 rounded-xl bg-white/5 border border-white/10">
        <p class="opacity-90">Steering files & rules</p>
      </div>
      <div class="p-4 rounded-xl bg-white/5 border border-white/10">
        <p class="opacity-90">Conversation history</p>
      </div>
      <div class="p-4 rounded-xl bg-white/5 border border-white/10">
        <p class="opacity-90">System prompts</p>
      </div>
    </div>
    <div class="mt-8 p-6 rounded-xl bg-amber-400/10 border border-amber-400/30">
      <p class="text-amber-400 font-semibold">Key insight:</p>
      <p class="opacity-90 mt-2">Context has a limit. Lean, focused context beats dumping everything in.</p>
    </div>
  </div>
</div>

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-6">
  <p class="text-2xl opacity-50">The Core Insight</p>
  <p class="text-6xl font-bold text-amber-400">Context is everything.</p>
  <div class="mt-8 text-xl opacity-70 space-y-2">
    <p>Provide context faster than the AI can find it</p>
    <p>Lean context beats bloated context</p>
    <p>Explicit beats implicit</p>
  </div>
</div>

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-4">
  <p class="text-2xl opacity-50">Now let's dive into</p>
  <p class="text-5xl font-bold text-cyan-400">Pillar 1: Prepare Your Repo</p>
</div>
