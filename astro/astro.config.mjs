import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import icon from "astro-icon"

export default defineConfig({
  site: "https://rathes.me",
  integrations: [icon()],
  // The site's URL convention is flat and without trailing slashes.
  trailingSlash: "never",
  build: {
    format: "file",
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
