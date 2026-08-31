import { getCollection, type CollectionEntry } from "astro:content"

import { SITE_URL } from "@/src/site.config"

import externalLinks from "@/data/blog/externalLinks"

export type Language = "en" | "de"
export type BlogEntry = CollectionEntry<"blog">

export type Post = {
  title: string
  date: string
  link: string
  external?: boolean
  lang?: string
}

const languages: Language[] = ["en", "de"]

export const getBlogPostUrl = (lang: Language, slug: string): string =>
  lang === "en" ? `/blog/${slug}` : `/de/blog/${slug}`

// Frontmatter stores POSIX-style locales (en_US, de_DE); HTML lang needs BCP-47
export const toBcp47 = (locale: unknown, fallback: string): string =>
  typeof locale === "string" && locale !== ""
    ? locale.replace(/_/g, "-")
    : fallback

// Collection ids mirror the paths under src/data/blog, so "en/some-slug".
export const getLanguage = (entry: BlogEntry): Language =>
  entry.id.split("/")[0] as Language

export const getSlug = (entry: BlogEntry): string => entry.id.split("/")[1]

export const getPostsByLanguage = async (
  language: Language
): Promise<BlogEntry[]> =>
  (await getCollection("blog")).filter(
    (entry) => getLanguage(entry) === language
  )

// Most posts exist in one language only; hreflang is emitted just for the few
// that are genuinely published as translations of each other.
export const getTranslations = async (slug: string): Promise<Language[]> => {
  const posts = await getCollection("blog")

  return languages.filter((language) =>
    posts.some((entry) => entry.id === `${language}/${slug}`)
  )
}

const toPost = (entry: BlogEntry): Post => {
  const language = getLanguage(entry)

  return {
    link: getBlogPostUrl(language, getSlug(entry)),
    title: entry.data.title,
    date: entry.data.date.toISOString(),
    external: false,
    lang: toBcp47(entry.data.locale, language),
  }
}

export const getAllBlogPosts = async (): Promise<[string, Post[]][]> => {
  const posts = (await getCollection("blog")).map(toPost)

  return getSortedGroups(
    groupPostsByYear([
      ...posts,
      ...externalLinks.map((post) => ({ ...post, external: true })),
    ])
  )
}

export const getBlogPostsForFeed = async (): Promise<
  { title: string; url: string; date: Date; description: string }[]
> =>
  (await getCollection("blog"))
    .map((entry) => ({
      title: entry.data.title,
      url: `${SITE_URL}${getBlogPostUrl(getLanguage(entry), getSlug(entry))}`,
      date: entry.data.date,
      description: entry.data.description || "",
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime())

export const groupPostsByYear = (posts: Post[]): { [key: number]: Post[] } => {
  return posts
    .sort((a, b) =>
      Date.parse(a.date) < Date.parse(b.date)
        ? 1
        : Date.parse(b.date) < Date.parse(a.date)
          ? -1
          : 0
    )
    .reduce(
      (list, post) => {
        ;(list[new Date(Date.parse(post.date)).getFullYear()] =
          list[new Date(Date.parse(post.date)).getFullYear()] || []).push(post)
        return list
      },
      {} as { [key: number]: Post[] }
    )
}

export const getSortedGroups = (groups: { [key: number]: Post[] }) => {
  return Object.entries(groups).sort((a, b) => (a < b ? 1 : b < a ? -1 : 0))
}
