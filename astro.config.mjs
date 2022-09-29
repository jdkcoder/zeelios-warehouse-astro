import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
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
  integrations: [image(), vue({ reactivityTransform: true })]
});