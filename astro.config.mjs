// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import purgecss from "astro-purgecss";
import compress from "astro-compress";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  base: "/resume_devops/",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    purgecss({
      variables: true,
      keyframes: false,
      safelist: {
        greedy: [
          /*astro*/
        ],
      },
      content: [process.cwd() + "/src/**/*.{astro,jsx,tsx,css,scss}"],
    }),
    compress({
      Image: false,
      SVG: false,
    }),
    icon({
      iconDir: "src/assets/icons",
    })
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      },
    },
  },
});
