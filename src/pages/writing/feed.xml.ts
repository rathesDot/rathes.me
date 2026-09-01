import rss from "@astrojs/rss"

import { FEED_PATH, SITE_URL } from "@/src/site.config"

import { getBlogPostsForFeed } from "@/services/blog"

export async function GET() {
  const posts = await getBlogPostsForFeed()

  return rss({
    title: "rathes.me",
    description:
      "I write about all sort of topics, not just tech! It could be related to start ups, design or just some of my personal thoughts",
    site: SITE_URL,
    // The feed advertises itself the same way the hand-rolled one did, which
    // needs the Atom namespace declared alongside it.
    xmlns: { atom: "http://www.w3.org/2005/Atom" },
    customData: `<language>en</language><atom:link href="${SITE_URL}${FEED_PATH}" rel="self" type="application/rss+xml"/>`,
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      link: post.url,
      pubDate: post.date,
    })),
  })
}
