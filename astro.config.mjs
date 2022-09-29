import { defineConfig } from 'astro/config';
import svgLoader from 'vite-svg-loader';
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [svgLoader()],
  },
  experimental: {
    integrations: true,
    reactivityTransform: true,
  },
  integrations: [
    vue({ reactivityTransform: true })]
});