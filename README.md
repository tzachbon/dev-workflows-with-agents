# Dev Workflow with Agents

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Cookbook](https://img.shields.io/badge/Cookbook-Live-green.svg)](https://tzachbon.github.io/dev-workflows-with-agents/)
[![Slides](https://img.shields.io/badge/Slides-Live-purple.svg)](https://tzachbon.github.io/dev-workflows-with-agents/slides/)

A workshop that teaches developers how to work with AI coding agents in a structured, repeatable way.

## What's Inside

This repository contains everything you need to run or participate in the workshop:

| Package | Description |
|---------|-------------|
| [**slides**](packages/slides/) | Slidev presentation covering core principles and tooling |
| [**cookbook**](packages/cookbook/) | RSPress documentation site for hands-on reference |

## Workshop Structure

1. **Presentation (30 min)** — Core principles and tooling orientation
2. **Hands-on Session** — Engineers work on real tasks with guidance
3. **Cookbook Reference** — Documentation to reference during hands-on work

## The Two Pillars

The workshop is built around two core ideas:

### Pillar 1: Prepare Your Repo

Make your codebase a place where AI agents can thrive:

- Add `AGENTS.md` steering files at project and directory levels
- Use clear naming, type hints, and logical structure
- Write executable tests that serve as documentation
- Document entry points (scripts, commands, APIs)

### Pillar 2: Work With Your Agent

Follow a structured workflow when executing tasks:

- Start with planning mode before execution
- Write specs iteratively (requirements → design → tasks)
- Work in small, reviewable chunks
- Manage context deliberately

## Quick Start

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/tzachbon/dev-workflows-with-agents.git
cd dev-workflows-with-agents

# Install dependencies
npm install
```

### Run the Slides

```bash
cd packages/slides
npm run dev
```

Open http://localhost:3030 to view the presentation.

### Run the Cookbook

```bash
cd packages/cookbook
npm run dev
```

Open http://localhost:3000 to view the documentation.

## Target Audience

Developers across web, mobile, and back-end stacks. The content is mostly stack-agnostic with practical examples.

**Assumed knowledge:** LLMs, agents, tools. We skip the basics and focus on practical application.

## Tools Covered

- **Cursor** — Primary demo tool
- **Claude Code** — Alternative agent environment
- **Slidev** — Presentation framework
- **RSPress** — Documentation site generator

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
