---
theme: default
title: "Agent-Oriented Development"
info: |
  Review Presentation: How we changed the way we work
class: text-center
colorSchema: dark
drawings:
  persist: false
transition: slide-left
mdc: true
---

<div class="flex flex-col items-center justify-center h-full">
  <p class="text-lg opacity-50 mb-4">Review Presentation</p>
  <h1 class="text-5xl font-bold !leading-tight">Agent-Oriented<br/>Development</h1>
  <p class="text-xl opacity-60 mt-6">How we changed the way we work</p>

</div>

<!--
- Review presentation for engineering director
- Two parts: Zach covers the approach, Oren demos spec-driven development in practice
-->

---
layout: center
---

<div class="max-w-3xl">
  <h2 class="text-4xl font-bold mb-8 text-red-400">The Problem</h2>
  <div class="space-y-4 text-2xl leading-relaxed">
    <p class="opacity-90">But without structure, their output is <span class="text-red-400 font-semibold">inconsistent and unpredictable</span>.</p>
  </div>
  <div class="mt-10 p-5 rounded-xl bg-purple-400/10 border border-purple-400/30">
    <p class="text-xl"><span class="text-purple-400 font-semibold">The insight:</span> It's all a game of <span class="text-purple-400 font-semibold">context management</span> and making the output <span class="text-purple-400 font-semibold">more deterministic</span>.</p>
  </div>
</div>

<!--
- AI agents are powerful. Everyone uses them. But results vary wildly.
- The agent doesn't know your codebase, your patterns, or your intent. It only knows what you show it.
- The problem isn't the AI. It's how we feed it context.
- Our core insight: if you manage context well, output becomes predictable and high-quality.
-->

---
layout: center
---

<div class="max-w-4xl text-center">
  <p class="text-2xl opacity-50 mb-6">Our Goal</p>
  <p class="text-4xl font-bold leading-relaxed mb-8">Make the agent a <span class="text-cyan-400">first-class citizen</span><br/>in our development process.</p>
  <div class="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-8">
    <div class="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
      <p class="text-lg opacity-50 mb-2">Pillar 1</p>
      <p class="text-2xl font-bold text-cyan-400 leading-relaxed">Prepare Your<br/>Repo for Agents</p>
    </div>
    <div class="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
      <p class="text-lg opacity-50 mb-2">Pillar 2</p>
      <p class="text-2xl font-bold text-green-400 leading-relaxed">Agent-First<br/>Output</p>
    </div>
    <div class="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
      <p class="text-lg opacity-50 mb-2">Pillar 3</p>
      <p class="text-2xl font-bold text-pink-400 leading-relaxed">Working with<br/>Agents</p>
    </div>
  </div>
</div>

<!--
- Our goal: treat the agent as a first-class citizen, not an afterthought
- Pillar 1: Prepare Your Repo for Agents — make the codebase agent-ready with rule files, skills, and sub-agents
- Pillar 2: Agent-First Output — when we ship platform work, we ship agent tooling alongside it
- Pillar 3: Working with Agents — the spec-driven workflow that makes execution deterministic
- Three pillars: prepare your repo for agents (foundation) + agent-first output (what we ship) + working with agents (how we work)
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-4xl font-bold mb-6 text-cyan-400">Pillar 1: Prepare Your Repo for Agents</h2>
  <div class="flex items-center gap-6 mb-6">
    <div class="p-4 rounded-xl bg-cyan-400/10 border border-cyan-400/30 shrink-0">
      <p class="text-3xl leading-none">&#x1F5C4;&#xFE0F;</p>
    </div>
    <div>
      <p class="text-2xl font-semibold">Think of it like database indexes</p>
    </div>
  </div>
  <div class="p-5 rounded-xl bg-[#1a1a2e] border border-white/10 font-mono text-sm leading-relaxed mb-5">
    <p class="opacity-70">&#x1F4C1; <span class="text-white">product-experience-backend/</span></p>
    <p class="opacity-70 ml-4">&boxvr;&boxh; <span class="text-cyan-400 font-semibold">AGENTS.md</span></p>
    <p class="opacity-70 ml-4">&boxvr;&boxh; &#x1F4C1; services/</p>
    <p class="opacity-70 ml-8">&boxv;   &boxvr;&boxh; saved-filters/ &rarr; <span class="text-cyan-400 font-semibold">AGENTS.md</span></p>
    <p class="opacity-70 ml-8">&boxv;   &boxur;&boxh; notifications/ &rarr; <span class="text-cyan-400 font-semibold">AGENTS.md</span></p>
    <p class="opacity-70 ml-4">&boxur;&boxh; &#x1F4C1; packages/</p>
    <p class="opacity-70 ml-8">    &boxur;&boxh; logger/ &rarr; <span class="text-cyan-400 font-semibold">AGENTS.md</span></p>
  </div>
</div>

<!--
- The database index analogy: without indexes, every query is a full table scan
- Without indexes, every query scans the full table — slow, wasteful, inaccurate
- Rule files = indexes for your repo. The agent gets context fast.
- Rule files at every level of the monorepo guide the agent to the right context instantly
- Agent picks up the nearest rule file. More specific = more relevant context.
- This is indexing your repo for the agent. You do it once, agent reuses it forever.
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-3xl font-bold mb-6 text-cyan-400">What We Built</h2>
  <div class="grid grid-cols-2 gap-4">
    <div class="p-4 rounded-xl bg-cyan-400/10 border border-cyan-400/30">
      <p class="text-cyan-400 font-semibold">AGENTS.md at every level</p>
    </div>
    <div class="p-4 rounded-xl bg-pink-400/10 border border-pink-400/30">
      <p class="text-pink-400 font-semibold">Custom Skills</p>
    </div>
    <div class="p-4 rounded-xl bg-purple-400/10 border border-purple-400/30">
      <p class="text-purple-400 font-semibold">Sub-agents</p>
    </div>
    <div class="p-4 rounded-xl bg-amber-400/10 border border-amber-400/30">
      <p class="text-amber-400 font-semibold">Quality Gates</p>
    </div>
  </div>
</div>

<!--
- A complete agent system for our repositories
- AGENTS.md: Root, service, and package-level steering files guiding the agent with project context, code style, commands, and domain knowledge
- Custom Skills: Reusable, dynamic procedures the agent invokes when needed — coding standards, changeset generation, feature scaffolding
- Sub-agents: Specialized agents with isolated context — planner, architect, code reviewer, security auditor — each focused on their domain
- Quality Gates: Tests, types, lint — enforced, not suggested. Agent sees errors and self-corrects. Smaller, cleaner PRs as a result
- The mindset: Every development stage is agent-oriented. Output is designed not just for developers, but for agents too.
- Igor did extensive work platformizing this across our repos
- The key mindset shift: we now think about agents as consumers of every artifact we produce
- Every stage — from migration scripts to PR reviews — is designed to be agent-friendly
-->

---
layout: center
---

<div class="max-w-5xl">
  <h2 class="text-4xl font-bold mb-4 text-green-400">Pillar 2: Agent-First Output</h2>
  <p class="text-lg opacity-50 mb-10">When we ship platform work, we ship agent tooling with it.</p>
  <div class="flex items-center justify-center gap-6">
    <div class="flex flex-col gap-3">
      <div class="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-lg font-semibold">New SDK</div>
      <div class="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-lg font-semibold">Migration Tool</div>
      <div class="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-lg font-semibold">Shared Library</div>
    </div>
    <div class="text-3xl opacity-40">&rarr;</div>
    <div class="flex flex-col gap-3">
      <div class="px-5 py-3 rounded-xl bg-green-400/10 border border-green-400/30 text-lg font-semibold text-green-400">Onboarding Skill</div>
      <div class="px-5 py-3 rounded-xl bg-green-400/10 border border-green-400/30 text-lg font-semibold text-green-400">Migration Agent</div>
      <div class="px-5 py-3 rounded-xl bg-green-400/10 border border-green-400/30 text-lg font-semibold text-green-400">Integration Guide</div>
    </div>
  </div>
</div>

<!--
- The second pillar: every platform deliverable ships with agent tooling
- When we build an SDK, we also ship an onboarding skill — another team's agent can invoke it and get up to speed
- When we build a migration tool, we ship a migration agent that automates the upgrade for consuming teams
- When we build a shared library, we ship an integration guide that agents can reference
- The result: adoption is faster, support burden drops, and teams onboard without waiting for us
- This is agent-first output — designing not just for developers, but for their agents too
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-3xl font-bold mb-6 text-green-400">Traction & Recognition</h2>
  <div class="space-y-4">
    <div class="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
      <div class="text-2xl shrink-0 leading-none">&#x1F3C6;</div>
      <p class="font-semibold">Igor's AI Agent System for ACC Web Platform</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
      <div class="text-2xl shrink-0 leading-none">&#x1F3E4;</div>
      <p class="font-semibold">Architect's Forum Invitation</p>
    </div>
    <div class="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
      <div class="text-2xl shrink-0 leading-none">&#x1F310;</div>
      <p class="font-semibold">Organic Adoption Across Teams</p>
    </div>
  </div>
</div>

<!--
- First group in the organization to implement this and achieve results
- Igor: Comprehensive documentation and implementation. Published to Confluence and shared across the organization. Strong positive feedback from multiple teams.
- Architect's Forum: Don Whittle invited us to present — recognizing the approach as something the broader organization should learn from.
- Organic adoption: MC Engineering shared it as "a great foundation." Mobile team built their own .agents/ system. AutoCAD backend created an AI dev kit. APS exploring spec-driven development. Multiple teams independently adopting the patterns.
- Ben Burlingham from MC Engineering shared Igor's work as "a solid read" and "a great foundation"
- Shalom from mobile built an entire .agents/ system for their monorepo, inspired by this approach
- AutoCAD backend created their own AI dev kit repo
- APS One Graph team exploring spec-driven development for their hackathon
- We're not just doing this for ourselves — the org is taking notice
-->

---
layout: center
---

<div class="max-w-5xl">
  <h2 class="text-4xl font-bold mb-2 text-pink-400">Pillar 3: Working with Agents</h2>
  <p class="text-lg opacity-50 mb-8">Spec-Driven Development</p>
  <div class="flex items-center justify-center gap-3 text-base mt-6">
    <div class="px-4 py-3 rounded-xl bg-purple-400/20 border border-purple-400/30 text-purple-400 font-semibold">Research</div>
    <span class="text-xl opacity-40">&rarr;</span>
    <div class="px-4 py-3 rounded-xl bg-cyan-400/20 border border-cyan-400/30 text-cyan-400 font-semibold">Planning</div>
    <span class="text-xl opacity-40">&rarr;</span>
    <div class="px-4 py-3 rounded-xl bg-pink-400/20 border border-pink-400/30 text-pink-400 font-semibold">Design</div>
    <span class="text-xl opacity-40">&rarr;</span>
    <div class="px-4 py-3 rounded-xl bg-amber-400/20 border border-amber-400/30 text-amber-400 font-semibold">Tasks</div>
    <span class="text-xl opacity-40">&rarr;</span>
    <div class="px-4 py-3 rounded-xl bg-green-400/20 border border-green-400/30 text-green-400 font-semibold">Execution</div>
  </div>
</div>

<!--
- The most successful pattern we discovered
- Flow: research, planning, design, tasks, execution
- Why it works: Structure before execution — requirements, design, tasks are all written before any code
- Each phase produces artifacts the agent can reference
- Decisions compound: good requirements → good design → good tasks → good code
- The key insight: the execution phase becomes deterministic enough to offload
- If the spec is clear, the agent can execute autonomously
- This frees you to start the next feature while the previous one is being built
- The power: by the time you reach execution, the spec is so clear that the agent can work autonomously
- This is what makes the execution phase deterministic — you've already made all the decisions
- The agent just implements what was decided
-->

---
layout: center
---

<div class="max-w-4xl text-center">
  <h2 class="text-4xl font-bold mb-6 text-green-400">This Unlocks Parallelism</h2>
  <p class="text-xl opacity-60 mb-8">One developer. Multiple features in flight.</p>
  <div class="flex items-center justify-center gap-4 mb-8">
    <div class="flex flex-col items-center gap-2">
      <div class="px-4 py-3 rounded-xl bg-purple-400/20 border border-purple-400/30 text-purple-400 font-semibold text-sm">You: spec Feature B</div>
      <div class="px-4 py-3 rounded-xl bg-cyan-400/20 border border-cyan-400/30 text-cyan-400 font-semibold text-sm">You: spec Feature C</div>
    </div>
    <div class="flex flex-col items-center gap-1">
      <span class="opacity-40 text-sm">meanwhile</span>
      <span class="text-2xl opacity-40">&harr;</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="px-4 py-3 rounded-xl bg-green-400/20 border border-green-400/30 text-green-400 font-semibold text-sm">Agent: executes Feature A</div>
      <div class="px-4 py-3 rounded-xl bg-green-400/20 border border-green-400/30 text-green-400 font-semibold text-sm">Agent: executes Feature B</div>
    </div>
    <div class="flex flex-col items-center gap-1">
      <span class="opacity-40">&rarr;</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="px-3 py-2 rounded-lg bg-white/10 text-sm">PR</div>
      <div class="px-3 py-2 rounded-lg bg-white/10 text-sm">PR</div>
    </div>
  </div>
</div>

<!--
- Because execution is deterministic, you can offload it to the agent
- While the agent executes Feature A, you're already speccing Feature B
- This is genuine parallel development — not more people, just better workflow
- The result: More features delivered, more PRs opened, faster iteration — with the same team size.
- This is exactly what Oren will now demonstrate
-->

---
layout: center
class: text-center
---

<div class="flex flex-col items-center gap-6">
  <p class="text-lg opacity-50">Let's see it in action</p>
  <p class="text-4xl font-bold text-pink-400 !leading-snug">Spec-Driven Development<br/>in Practice</p>
</div>

<!--
- Hand off to Oren
- How spec-driven development enables parallel work, accelerates delivery, and increases PR throughput
- Oren will demo how he uses spec-driven development day-to-day
- Show real workflow: speccing features, parallel agent execution, PR output
-->

---
layout: center
---

<div class="max-w-3xl text-center">
  <h2 class="text-4xl font-bold mb-8 text-cyan-400">What's Next</h2>
  <div class="space-y-4 text-left max-w-xl mx-auto">
    <div class="flex items-center gap-4 p-4 rounded-xl bg-cyan-400/5 border border-cyan-400/20">
      <span class="text-cyan-400 text-xl shrink-0 leading-none">&rarr;</span>
      <p class="font-semibold">Every repo, <span class="text-cyan-400">agent-ready</span></p>
    </div>
    <div class="flex items-center gap-4 p-4 rounded-xl bg-green-400/5 border border-green-400/20">
      <span class="text-green-400 text-xl shrink-0 leading-none">&rarr;</span>
      <p class="font-semibold">Every output ships with <span class="text-green-400">agent tooling</span></p>
    </div>
    <div class="flex items-center gap-4 p-4 rounded-xl bg-pink-400/5 border border-pink-400/20">
      <span class="text-pink-400 text-xl shrink-0 leading-none">&rarr;</span>
      <p class="font-semibold">Every workflow, <span class="text-pink-400">agent-partnered</span></p>
    </div>
  </div>
</div>

<!--
- Every repo, agent-ready: expand AGENTS.md, skills, and sub-agents across all repositories — make agent onboarding instant
- Every output ships with agent tooling: when we build SDKs, migration tools, or shared libraries, agent skills and guides ship alongside them — adoption without hand-holding
- Every workflow, agent-partnered: spec-driven development becomes the default — parallel execution, deterministic output, faster delivery
- We're building the future of development: not just writing code, but organizing agents to multiply our impact
-->
