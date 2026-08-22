import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

// This Astro site is deployed as a second Netlify site and proxied in behind
// the main Next.js site's netlify.toml, route by route, during the migration.
export default defineConfig({
  site: "https://rathes.me",
  // Matches the rest of the site's URL convention (see getBlogPostUrl) —
  // no trailing slashes.
  trailingSlash: "never",
  build: {
    format: "file",
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
