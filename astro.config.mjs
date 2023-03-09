import unoCss from "unocss/astro";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [unoCss(), mdx()]
});