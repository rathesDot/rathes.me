import path from "path"
import fs from "fs"
import { Metadata } from "next"
import matter from "gray-matter"

type Language = "en" | "de"

const fetchBlogPost = (lang: Language, slug: string) => {
  return fs.readFileSync(
    path.join(process.cwd(), `./src/content/blog/${lang}/${slug}.mdx`),
    "utf-8"
  )
}

const parseBlogPost = (source: string) => {
  return matter(source)
}

const getFrontmatter = async (
  lang: Language,
  slug: string
): Promise<Record<string, unknown>> => {
  const source = fetchBlogPost(lang, slug)
  const { data } = parseBlogPost(source)

  return data
}

export const getBlogPost = (lang: Language, slug: string) => {
  const source = fetchBlogPost(lang, slug)
  return parseBlogPost(source)
}

export const generateBlogMetaData = async (
  lang: Language,
  slug: string
): Promise<Metadata> => {
  const frontmatter = (await getFrontmatter(lang, slug)) as Record<
    string,
    string
  >

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      type: "article",
      locale: frontmatter.locale,
      images: frontmatter.image,
      title: frontmatter.title,
      authors: "@rswebdesigner",
    },
  }
}

export const generateBlogParams = (): { lang: Language; slug: string }[] => {
  const blogsPath = path.join(process.cwd(), "./src/content/blog")
  const languages = ["en", "de"]

  return languages
    .map((lang: Language) =>
      fs
        .readdirSync(path.join(blogsPath, lang))
        .map((entry) => ({ lang, slug: `${path.basename(entry, ".mdx")}` }))
    )
    .flat()
}
