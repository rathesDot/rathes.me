import RSS from "rss"
import path from "path"
import fs from "fs"
import matter from "gray-matter"

type Language = "en" | "de"

const languages: Language[] = ["en", "de"]
const getBlogPath = () => path.join(process.cwd(), "./src/data/blog")
const getSlugFromFile = (file: string): string => path.basename(file, ".mdx")

const getPostsByLang = (lang: Language) =>
  fs.readdirSync(path.join(getBlogPath(), lang))

const fetchBlogPost = (lang: Language, file: string) => {
  return fs.readFileSync(path.join(getBlogPath(), `./${lang}/${file}`), "utf-8")
}

const getAllPostsForFeed = () => {
  const posts = languages
    .map((language) =>
      getPostsByLang(language).map((entry) => {
        const source = fetchBlogPost(language, entry)
        const { data: frontmatter } = matter(source)

        return {
          link: `/blog/${language}/${getSlugFromFile(entry)}`,
          title: frontmatter.title,
          date: frontmatter.date,
          description: frontmatter.description || "",
        }
      })
    )
    .flat()

  return posts.sort((a, b) =>
    Date.parse(a.date) < Date.parse(b.date)
      ? 1
      : Date.parse(b.date) < Date.parse(a.date)
        ? -1
        : 0
  )
}

export async function GET() {
  const feed = new RSS({
    title: "rathes.me",
    description:
      "I write about all sort of topics, not just tech! It could be related to start ups, design or just some of my personal thoughts",
    site_url: "https://rathes.me",
    feed_url: "https://rathes.me/writing/feed.xml",
    language: "en",
    pubDate: new Date(),
  })

  const posts = getAllPostsForFeed()

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      url: `https://rathes.me${post.link}`,
      date: new Date(post.date),
      description: post.description,
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
