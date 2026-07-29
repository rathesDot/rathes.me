import type { MetadataRoute } from "next"

import { SITE_URL } from "@/src/site.config"

import { getAllBlogPosts } from "@/services/blog"
import { generateBookParams } from "@/services/books"

// Pages whose content has no date behind it. They deliberately omit lastModified
// rather than reporting the build date: a lastmod that changes on every deploy
// teaches crawlers to distrust it, which costs recrawls on genuinely edited pages.
const UNDATED_PAGES = [
  "/about",
  "/work",
  "/reading",
  "/photography",
  "/biryani",
  "/links",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllBlogPosts()
    .flatMap(([, entries]) => entries)
    .filter((post) => !post.external)

  // The home page and the writing index both surface the newest post, so they
  // genuinely change when one is published.
  const latestPost = posts
    .map((post) => new Date(post.date))
    .reduce((latest, date) => (date > latest ? date : latest), new Date(0))

  return [
    { url: SITE_URL, lastModified: latestPost },
    { url: `${SITE_URL}/writing`, lastModified: latestPost },
    ...UNDATED_PAGES.map((path) => ({ url: `${SITE_URL}${path}` })),
    ...posts.map((post) => ({
      url: `${SITE_URL}${post.link}`,
      lastModified: new Date(post.date),
    })),
    ...generateBookParams().map(({ slug }) => ({
      url: `${SITE_URL}/reading/${slug}`,
    })),
  ]
}
