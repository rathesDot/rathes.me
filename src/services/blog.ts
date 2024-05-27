import path from "path"
import fs from "fs"

export const generateBlogParams = (): { lang: string; slug: string }[] => {
  const blogsPath = path.join(process.cwd(), "./src/content/blog")
  const languages = ["en", "de"]

  return languages
    .map((lang) =>
      fs
        .readdirSync(path.join(blogsPath, lang))
        .map((entry) => ({ lang, slug: `${path.basename(entry, ".mdx")}` }))
    )
    .flat()
}
