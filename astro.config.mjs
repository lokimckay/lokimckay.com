import { defineConfig } from "astro/config";
import transformers from "./src/lib/shikiTransformers";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ltm.bio/",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "night-owl",
      transformers,
    },
  },
});
