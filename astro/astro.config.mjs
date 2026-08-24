import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  site: "https://rathes.me",
  // The site's URL convention is flat and without trailing slashes.
  trailingSlash: "never",
  build: {
    format: "file",
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
