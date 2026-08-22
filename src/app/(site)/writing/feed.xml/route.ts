import RSS from "rss"

import { getBlogPostsForFeed } from "@/services/blog"
import { SITE_URL, FEED_PATH } from "@/src/site.config"

export async function GET() {
  const feed = new RSS({
    title: "rathes.me",
    description:
      "I write about all sort of topics, not just tech! It could be related to start ups, design or just some of my personal thoughts",
    site_url: SITE_URL,
    feed_url: `${SITE_URL}${FEED_PATH}`,
    language: "en",
    pubDate: new Date(),
  })

  getBlogPostsForFeed().forEach((post) => {
    feed.item({
      title: post.title,
      url: post.url,
      date: post.date,
      description: post.description,
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
