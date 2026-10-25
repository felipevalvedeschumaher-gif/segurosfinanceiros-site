import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://segurosfinanceiros.com.br',
  compressHTML: true,
  build: { format: 'file' },
});
