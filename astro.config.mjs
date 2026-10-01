import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://maxj0201.github.io",
  base: "/Datacareernavigator",
  trailingSlash: "ignore",
  build: { format: "directory" },
  integrations: [
    // The archived 2024 site is kept for reference but not advertised to search engines.
    sitemap({ filter: (page) => !page.includes("/archive/") && !page.includes("/results") }),
  ],
});
