import path from "path"
import fs from "fs"
import { Metadata } from "next"
import matter from "gray-matter"

import { getSortedGroups, groupPostsByYear, Post } from "../utils"
import externalLinks from "../content/blog/externalLinks"

type Language = "en" | "de"

const languages = ["en", "de"]
const getBlogPath = () => path.join(process.cwd(), "./src/content/blog")

const getFileFromSlug = (slug: string): string => `${slug}.mdx`
const getSlugFromFile = (file: string): string => path.basename(file, ".mdx")

const fetchBlogPost = (lang: Language, file: string) => {
  return fs.readFileSync(path.join(getBlogPath(), `./${lang}/${file}`), "utf-8")
}

const parseBlogPost = (source: string) => {
  return matter(source)
}

const getFrontmatter = async (
  lang: Language,
  slug: string
): Promise<Record<string, unknown>> => {
  const source = fetchBlogPost(lang, getFileFromSlug(slug))
  const { data } = parseBlogPost(source)

  return data
}

export const getBlogPost = (lang: Language, slug: string) => {
  const source = fetchBlogPost(lang, getFileFromSlug(slug))
  return parseBlogPost(source)
}

const getPostsByLang = (lang: Language) =>
  fs.readdirSync(path.join(getBlogPath(), lang))

export const getAllBlogPosts = () => {
  const posts = languages
    .map((language: Language) =>
      getPostsByLang(language).map((entry) => {
        const source = fetchBlogPost(language, entry)
        const { data: frontmatter } = matter(source)

        return {
          link: `/blog/${language}/${getSlugFromFile(entry)}`,
          title: frontmatter.title,
          date: frontmatter.date,
        }
      })
    )
    .flat()

  return getSortedGroups(groupPostsByYear([...posts, ...externalLinks]))
}

export const getFilteredBlogPosts = (
  searchTerm?: string
): [string, Post[]][] => {
  const posts = getAllBlogPosts()

  if (!searchTerm || searchTerm === "") return posts

  return posts.map(([year, posts]) => {
    return [
      year,
      posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.link.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    ]
  })
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
  return languages
    .map((lang: Language) =>
      getPostsByLang(lang).map((entry) => ({
        lang,
        slug: `${path.basename(entry, ".mdx")}`,
      }))
    )
    .flat()
}
