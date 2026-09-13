// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import devRoutes from './src/integrations/dev-routes.ts';
import { deployConfig } from './src/config.ts';

// https://astro.build/config
export default defineConfig({
  site: deployConfig.siteUrl,
  base: deployConfig.baseUrl,
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap(),
    devRoutes([
      { 
        pattern: '/og-preview', 
        entrypoint: 'src/dev-routes/og-preview.astro' 
      },
    ]),
  ]
});
