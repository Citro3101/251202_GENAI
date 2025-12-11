import { defineConfig } from 'vite';

// Use a relative base and emit the build into /docs for GitHub Pages.
export default defineConfig({
  base: './',
  build: {
    outDir: 'docs',
  },
});
