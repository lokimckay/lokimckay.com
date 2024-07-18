import { defineConfig } from "astro/config";
import transformers from "./src/lib/shikiTransformers";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: "night-owl",
      transformers,
    },
  },
});
