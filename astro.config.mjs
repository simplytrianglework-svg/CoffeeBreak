// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // or the workers.dev URL if you haven't attached a custom domain yet
  // ...rest of your existing config
  site: 'https://coffeebreak.simply-triangle.workers.dev',

  integrations: [sitemap()]
});