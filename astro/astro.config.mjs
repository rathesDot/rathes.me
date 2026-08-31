import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import icon from "astro-icon"
import mdx from "@astrojs/mdx"
import { unified } from "@astrojs/markdown-remark"
import rehypeHighlight from "rehype-highlight"

export default defineConfig({
  site: "https://rathes.me",
  integrations: [icon(), mdx()],
  // The site's URL convention is flat and without trailing slashes.
  trailingSlash: "never",
  build: {
    format: "file",
  },
  markdown: {
    // The posts are rendered through the same remark/rehype pipeline the Next
    // site used, so the generated markup keeps matching what globals.css
    // styles -- rehype-highlight's hljs class names in particular.
    // Astro's own Shiki highlighting stays off; rehype-highlight below does
    // the job instead.
    syntaxHighlight: false,
    processor: unified({
      // The Next pipeline left quotes and dashes as written.
      smartypants: false,
      rehypePlugins: [rehypeHighlight],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
