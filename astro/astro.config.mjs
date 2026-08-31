import { defineConfig, fontProviders } from "astro/config"
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
  // Inter ships with the site instead of coming from fonts.googleapis.com, so
  // no third-party stylesheet sits in front of the first paint. The file comes
  // from the @fontsource-variable/inter package, which keeps the build offline
  // and reproducible, and it is the same variable font Google served: all four
  // weights the site uses come out of one request. Only the latin subset is
  // declared -- nothing in the content reaches into latin-ext, and the glyphs
  // that go past both (Tamil, hiragana, box drawing) fall back to a system
  // font either way.
  fonts: [
    {
      name: "Inter Variable",
      cssVariable: "--font-inter",
      provider: fontProviders.local(),
      display: "swap",
      options: {
        variants: [
          {
            weight: "100 900",
            style: "normal",
            src: [
              "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
            ],
          },
        ],
      },
    },
  ],
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
