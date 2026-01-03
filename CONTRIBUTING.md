# Contributing to Dev Workflow with Agents

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## How to Contribute

### Reporting Issues

If you find a bug or have a suggestion:

1. Check existing issues to avoid duplicates
2. Open a new issue with a clear title and description
3. Include steps to reproduce (for bugs)
4. Add relevant labels if possible

### Submitting Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Run the linter (`npm run check` in the relevant package)
5. Commit with a clear message
6. Push to your fork
7. Open a Pull Request

### Pull Request Guidelines

- Keep changes focused and atomic
- Update documentation if needed
- Follow existing code style
- Add tests for new functionality when applicable

## Development Setup

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/dev-workflow-with-agents.git
cd dev-workflow-with-agents

# Install dependencies
npm install
```

### Running Locally

**Slides:**
```bash
cd packages/slides
npm run dev
```

**Cookbook:**
```bash
cd packages/cookbook
npm run dev
```

## Code Style

This project uses [Biome](https://biomejs.dev/) for linting and formatting.

```bash
# Check for issues
npm run check

# Auto-fix issues
npm run format
```

## Project Structure

```
dev-workflow-with-agents/
├── packages/
│   ├── slides/          # Slidev presentation
│   └── cookbook/        # RSPress documentation
├── AGENTS.md            # AI agent steering file
├── PILLAR_1_*.md        # Detailed pillar documentation
├── PILLAR_2_*.md
└── README.md
```

## Content Guidelines

### For Slides

- Keep slides concise and visual
- Use the existing component patterns (e.g., `ProTip.vue`)
- Test presentations work in both presenter and audience modes

### For Cookbook

- Write for developers who will reference during hands-on work
- Include practical, copy-paste-ready examples
- Keep explanations concise but complete
- Use MDX features for interactive elements when helpful

## Questions?

Open an issue for any questions about contributing.
