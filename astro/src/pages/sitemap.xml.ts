import { SITE_URL } from "@/src/site.config"

import { getAllBlogPosts } from "@/services/blog"
import { createSlug, getRatedBooks } from "@/services/books"

// Pages whose content has no date behind it. They deliberately omit lastmod
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

type SitemapEntry = { url: string; lastModified?: Date }

const toUrlElement = ({ url, lastModified }: SitemapEntry): string =>
  [
    "<url>",
    `<loc>${url}</loc>`,
    ...(lastModified
      ? [`<lastmod>${lastModified.toISOString()}</lastmod>`]
      : []),
    "</url>",
  ].join("\n")

export async function GET() {
  const posts = (await getAllBlogPosts())
    .flatMap(([, entries]) => entries)
    .filter((post) => !post.external)

  // The home page and the writing index both surface the newest post, so they
  // genuinely change when one is published.
  const latestPost = posts
    .map((post) => new Date(post.date))
    .reduce((latest, date) => (date > latest ? date : latest), new Date(0))

  const entries: SitemapEntry[] = [
    { url: SITE_URL, lastModified: latestPost },
    { url: `${SITE_URL}/writing`, lastModified: latestPost },
    ...UNDATED_PAGES.map((path) => ({ url: `${SITE_URL}${path}` })),
    ...posts.map((post) => ({
      url: `${SITE_URL}${post.link}`,
      lastModified: new Date(post.date),
    })),
    ...getRatedBooks().map((book) => ({
      url: `${SITE_URL}/reading/${createSlug(book)}`,
    })),
  ]

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(toUrlElement),
    "</urlset>",
  ]
    .join("\n")
    .concat("\n")

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  })
}
