import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'AI Workflow Cookbook',
  description: 'A practical reference for working with AI agents',
  icon: '/icon.svg',
  logo: {
    light: '/logo-light.svg',
    dark: '/logo-dark.svg',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/tzachbon/dev-workflow-with-agents',
      },
    ],
  },
});
