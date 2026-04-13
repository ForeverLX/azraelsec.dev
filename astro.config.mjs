// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://foreverlx.github.io',
  image: {
    service: passthroughImageService(),
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
