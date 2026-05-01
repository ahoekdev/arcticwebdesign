// @ts-check
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

import react from "@astrojs/react";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [
    react(),
    sanity({
      projectId: "677exyo6",
      dataset: "production",
      useCdn: false, // for static builds
    }),
  ],
});
