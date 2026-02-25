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
fonts:
  sans: 'ArtifaktElement, Arial, sans-serif'
---

<div class="flex flex-col items-center justify-center h-full">
  <h1 class="text-5xl font-bold !leading-tight">Agent-Oriented<br/>Development</h1>
  <p class="text-xl text-[#666666] mt-6">How we changed the way we work</p>

</div>

<!--
- Review presentation for engineering director
- Two parts: Zach covers the approach, Oren demos spec-driven development in practice
-->

---
layout: center
---

<div class="max-w-3xl">
  <h2 class="text-4xl font-bold mb-8 text-[#FFC800]">The Problem</h2>
  <div class="space-y-4 text-2xl leading-relaxed">
    <p class="opacity-90">But without structure, their output is <span class="text-white font-semibold">inconsistent and unpredictable</span>.</p>
  </div>
  <div class="mt-10 p-5 rounded-xl bg-white/5 border border-white/10">
    <p class="text-xl"><span class="text-white font-semibold">The insight:</span> It's all a game of <span class="text-[#FFC800] font-semibold">context management</span> and making the output <span class="text-[#FFC800] font-semibold">more deterministic</span>.</p>
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
  <p class="text-xl text-[#a3a3a3] mb-4">Our Goal</p>
  <p class="text-3xl font-bold leading-snug mb-6">Make the agent a <span class="text-[#FFC800]">first-class citizen</span><br/>in our development process.</p>
  <div class="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-6">
    <div class="text-center p-5 rounded-2xl bg-white/5 border border-white/10">
      <p class="text-base text-[#a3a3a3] mb-1">Pillar 1</p>
      <p class="text-xl font-bold text-white leading-snug">Prepare Your<br/>Repo for <span class="text-[#FFC800]">Agents</span></p>
    </div>
    <div class="text-center p-5 rounded-2xl bg-white/5 border border-white/10">
      <p class="text-base text-[#a3a3a3] mb-1">Pillar 2</p>
      <p class="text-xl font-bold text-white leading-snug"><span class="text-[#FFC800]">Agent</span>-First<br/>Output</p>
    </div>
    <div class="text-center p-5 rounded-2xl bg-white/5 border border-white/10">
      <p class="text-base text-[#a3a3a3] mb-1">Pillar 3</p>
      <p class="text-xl font-bold text-white leading-snug">Working with<br/><span class="text-[#FFC800]">Agents</span></p>
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
  <h2 class="text-4xl font-bold mb-6 text-[#FFC800]">Pillar 1: Prepare Your Repo for Agents</h2>
  <div class="flex items-center gap-6 mb-6">
    <div>
      <p class="text-2xl font-semibold">Think of it like database indexes</p>
    </div>
  </div>
  <div class="p-5 rounded-xl bg-[#111111] border border-white/10 font-mono text-sm leading-relaxed mb-5">
    <p class="opacity-70"><span class="text-white">product-experience-backend/</span></p>
    <p class="opacity-70 ml-4">&boxvr;&boxh; <span class="text-[#FFC800] font-semibold">AGENTS.md</span></p>
    <p class="opacity-70 ml-4">&boxvr;&boxh; services/</p>
    <p class="opacity-70 ml-8">&boxv;   &boxvr;&boxh; saved-filters/ &rarr; <span class="text-[#FFC800] font-semibold">AGENTS.md</span></p>
    <p class="opacity-70 ml-8">&boxv;   &boxur;&boxh; notifications/ &rarr; <span class="text-[#FFC800] font-semibold">AGENTS.md</span></p>
    <p class="opacity-70 ml-4">&boxur;&boxh; packages/</p>
    <p class="opacity-70 ml-8">    &boxur;&boxh; logger/ &rarr; <span class="text-[#FFC800] font-semibold">AGENTS.md</span></p>
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
  <h2 class="text-3xl font-bold mb-8 text-[#FFC800] text-center">The Principles</h2>
  <div class="relative flex flex-col items-center gap-4">
    <!-- Main flow: Context → Agent → Output -->
    <div class="flex items-center justify-center gap-4">
      <div class="px-5 py-3 rounded-xl bg-[#FFC800]/10 border border-[#FFC800]/30 text-[#FFC800] font-semibold">Context</div>
      <span class="text-xl opacity-40">&rarr;</span>
      <div class="px-6 py-4 rounded-xl bg-white/10 border-2 border-white/20 text-white font-bold text-lg">Agent</div>
      <span class="text-xl opacity-40">&rarr;</span>
      <div class="px-5 py-3 rounded-xl bg-[#FFC800]/10 border border-[#FFC800]/30 text-[#FFC800] font-semibold">Output</div>
    </div>
    <!-- Feedback loop -->
    <div class="flex items-center justify-center gap-3">
      <div class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/70">Tooling</div>
      <span class="opacity-30">&middot;</span>
      <div class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/70">Tests</div>
      <span class="opacity-30">&middot;</span>
      <div class="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/70">Types</div>
    </div>
    <p class="text-sm opacity-30 mt-1">&uarr; feedback loop &mdash; agent sees errors, self-corrects &darr;</p>
  </div>
  <div class="flex justify-center gap-6 mt-8 text-sm opacity-50">
    <span><span class="text-[#FFC800]">Index</span> your repo</span>
    <span>&middot;</span>
    <span>Let <span class="text-[#FFC800]">tooling</span> enforce</span>
    <span>&middot;</span>
    <span><span class="text-[#FFC800]">Tests</span> as feedback</span>
    <span>&middot;</span>
    <span><span class="text-[#FFC800]">Types</span> as docs</span>
  </div>
</div>

<!--
- Four principles that guide how we prepare repos for agents
- Index once: rule files at every level of the repo, agent finds context instantly instead of scanning everything
- Let tooling enforce: linters, type checkers, formatters — the agent sees errors and self-corrects. Rule files are for guidance, not enforcement.
- Tests as feedback loops: agent writes code, tests fail, agent reads error, fixes — no human in the loop. You're not the bottleneck.
- Types as documentation: typed functions tell the agent exactly what to expect. Untyped code forces guessing.
-->

---
layout: center
---

<div class="max-w-4xl">
  <h2 class="text-3xl font-bold mb-5 text-[#FFC800]">What We Built</h2>
  <div class="space-y-2">
    <div class="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
      <span class="text-[#FFC800] shrink-0 font-bold">1</span>
      <p class="text-white font-semibold">AGENTS.md at every level</p>
      <p class="opacity-40 text-sm ml-auto">context, code style, commands</p>
    </div>
    <div class="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
      <span class="text-[#FFC800] shrink-0 font-bold">2</span>
      <p class="text-white font-semibold">Custom Skills</p>
      <p class="opacity-40 text-sm ml-auto">coding standards, scaffolding, changesets</p>
    </div>
    <div class="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
      <span class="text-[#FFC800] shrink-0 font-bold">3</span>
      <p class="text-white font-semibold">Sub-agents</p>
      <p class="opacity-40 text-sm ml-auto">planner, architect, reviewer, auditor</p>
    </div>
    <div class="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10">
      <span class="text-[#FFC800] shrink-0 font-bold">4</span>
      <p class="text-white font-semibold">Quality Gates</p>
      <p class="opacity-40 text-sm ml-auto">tests, types, lint — enforced</p>
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
  <h2 class="text-4xl font-bold mb-4 text-[#FFC800]">Pillar 2: Agent-First Output</h2>
  <p class="text-lg text-[#a3a3a3] mb-10">When we ship platform work, we ship agent tooling with it.</p>
  <div class="flex items-center justify-center gap-6">
    <div class="flex flex-col gap-3">
      <div class="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-lg font-semibold">New SDK</div>
      <div class="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-lg font-semibold">Migration Tool</div>
      <div class="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-lg font-semibold">Shared Library</div>
    </div>
    <div class="text-3xl opacity-40">&rarr;</div>
    <div class="flex flex-col gap-3">
      <div class="px-5 py-3 rounded-xl bg-[#FFC800]/10 border border-[#FFC800]/30 text-lg font-semibold text-[#FFC800]">Onboarding Skill</div>
      <div class="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-lg font-semibold text-white">Migration Agent</div>
      <div class="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-lg font-semibold text-white">Integration Guide</div>
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
  <h2 class="text-3xl font-bold mb-6 text-[#FFC800]">The Impact</h2>
  <div class="grid grid-cols-2 gap-6">
    <div class="p-5 rounded-xl bg-white/5 border border-white/10">
      <p class="text-[#a3a3a3] font-semibold mb-4">Before</p>
      <div class="space-y-3 text-sm">
        <p class="opacity-60">Teams wait for us to onboard them</p>
        <p class="opacity-60">Migration guides go unread</p>
        <p class="opacity-60">Support tickets for every integration</p>
      </div>
    </div>
    <div class="p-5 rounded-xl bg-[#FFC800]/10 border border-[#FFC800]/30">
      <p class="text-[#FFC800] font-semibold mb-4">After</p>
      <div class="space-y-3 text-sm">
        <p class="opacity-80">Agent invokes onboarding skill, self-onboards</p>
        <p class="opacity-80">Migration agent automates the upgrade</p>
        <p class="opacity-80">Teams adopt without hand-holding</p>
      </div>
    </div>
  </div>
  <div class="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-center">
    <p class="text-sm opacity-70">Adoption is faster. Support burden drops. Teams onboard without waiting for us.</p>
  </div>
</div>

<!--
- The before/after of agent-first output
- Before: teams depend on us for onboarding, migration guides collect dust, every integration generates support tickets
- After: their agent invokes our onboarding skill and gets up to speed autonomously. Migration agent handles the upgrade. Integration happens without hand-holding.
- The result: adoption is faster, support burden drops, and our platform work scales beyond our team's bandwidth
- This is the multiplier effect — we build once, agents distribute
-->

---
layout: center
---

<div class="max-w-5xl">
  <h2 class="text-4xl font-bold mb-2 text-[#FFC800]">Pillar 3: Working with Agents</h2>
  <p class="text-lg text-[#a3a3a3] mb-8">Spec-Driven Development</p>
  <div class="flex items-center justify-center gap-3 text-base mt-6">
    <div class="px-4 py-3 rounded-xl bg-[#FFC800]/20 border border-[#FFC800]/30 text-[#FFC800] font-semibold">Research</div>
    <span class="text-xl opacity-40">&rarr;</span>
    <div class="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#D5D5CB] font-semibold">Planning</div>
    <span class="text-xl opacity-40">&rarr;</span>
    <div class="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#D5D5CB] font-semibold">Design</div>
    <span class="text-xl opacity-40">&rarr;</span>
    <div class="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-[#D5D5CB] font-semibold">Tasks</div>
    <span class="text-xl opacity-40">&rarr;</span>
    <div class="px-4 py-3 rounded-xl bg-[#FFC800]/20 border border-[#FFC800]/30 text-[#FFC800] font-semibold">Execution</div>
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
  <h2 class="text-4xl font-bold mb-6 text-[#FFC800]">This Unlocks Parallelism</h2>
  <p class="text-xl text-[#666666] mb-8">One developer. Multiple features in flight.</p>
  <div class="flex items-center justify-center gap-4 mb-8">
    <div class="flex flex-col items-center gap-2">
      <div class="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm">You: spec Feature B</div>
      <div class="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm">You: spec Feature C</div>
    </div>
    <div class="flex flex-col items-center gap-1">
      <span class="opacity-40 text-sm">meanwhile</span>
      <span class="text-2xl opacity-40">&harr;</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="px-4 py-3 rounded-xl bg-[#FFC800]/10 border border-[#FFC800]/30 text-[#FFC800] font-semibold text-sm">Agent: executes Feature A</div>
      <div class="px-4 py-3 rounded-xl bg-[#FFC800]/10 border border-[#FFC800]/30 text-[#FFC800] font-semibold text-sm">Agent: executes Feature B</div>
    </div>
    <div class="flex flex-col items-center gap-1">
      <span class="opacity-40">&rarr;</span>
    </div>
    <div class="flex flex-col items-center gap-2">
      <div class="px-3 py-2 rounded-lg bg-white/10 text-white text-sm">PR</div>
      <div class="px-3 py-2 rounded-lg bg-white/10 text-white text-sm">PR</div>
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
  <p class="text-lg text-[#a3a3a3]">Let's see it in action</p>
  <p class="text-4xl font-bold text-[#FFC800] !leading-snug">Spec-Driven Development<br/>in Practice</p>
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

<div class="max-w-3xl text-center flex flex-col gap-8">
  <p class="text-3xl font-bold text-[#FFC800]">Parallel Workflows — Kickoff</p>
  <p class="opacity-60 text-lg">Kicking off agent work in the background while speccing the next feature</p>
  <video controls class="rounded-xl shadow-2xl max-h-96 mx-auto">
    <source src="/static/ai_demo_1.mp4" type="video/mp4" />
  </video>
</div>

<!--
- Demo: starting multiple agents working on different features simultaneously
- While one agent implements, you can spec the next feature
- Real parallel development in action
-->

---
layout: center
---

<div class="max-w-3xl text-center flex flex-col gap-8">
  <p class="text-3xl font-bold text-[#FFC800]">Parallel Workflows — Results</p>
  <p class="opacity-60 text-lg">Seeing what agents accomplished while we were working</p>
  <video controls class="rounded-xl shadow-2xl max-h-96 mx-auto">
    <source src="/static/ai_demo_2.mp4" type="video/mp4" />
  </video>
</div>

<!--
- Demo: reviewing the output from parallel agent work
- Multiple PRs ready for review from different agents
- Spec-driven approach ensures consistent quality across parallel tracks
-->

---
layout: center
---

<div class="max-w-3xl text-center">
  <h2 class="text-4xl font-bold mb-8 text-[#FFC800]">What's Next</h2>
  <div class="space-y-4 text-left max-w-xl mx-auto">
    <div class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
      <span class="text-[#FFC800] text-xl shrink-0 leading-none">&rarr;</span>
      <p class="font-semibold">Every repo, <span class="text-[#FFC800]">agent-ready</span></p>
    </div>
    <div class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
      <span class="text-[#FFC800] text-xl shrink-0 leading-none">&rarr;</span>
      <p class="font-semibold">Every output ships with <span class="text-[#FFC800]">agent tooling</span></p>
    </div>
    <div class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
      <span class="text-[#FFC800] text-xl shrink-0 leading-none">&rarr;</span>
      <p class="font-semibold">Every workflow, <span class="text-[#FFC800]">agent-partnered</span></p>
    </div>
  </div>
</div>

<!--
- Every repo, agent-ready: expand AGENTS.md, skills, and sub-agents across all repositories — make agent onboarding instant
- Every output ships with agent tooling: when we build SDKs, migration tools, or shared libraries, agent skills and guides ship alongside them — adoption without hand-holding
- Every workflow, agent-partnered: spec-driven development becomes the default — parallel execution, deterministic output, faster delivery
- We're building the future of development: not just writing code, but organizing agents to multiply our impact
-->
