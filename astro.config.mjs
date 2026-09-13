// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { deployConfig } from './src/config.ts';

// https://astro.build/config
export default defineConfig({
  site: deployConfig.siteUrl,
  base: deployConfig.baseUrl,
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});
