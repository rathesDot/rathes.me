import React from "react"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import matter from "gray-matter"

import path from "path"
import fs from "fs"

import { Link, List, ListItem, Paragraph, Meta } from "../components"
import { SayHi } from "../patterns"
import { PageLayout } from "../layouts"

import { getSortedGroups, groupPostsByYear, Post } from "../utils"

import externalLinks from "../content/blog/externalLinks"

const Writings: React.FC<
  React.PropsWithChildren<InferGetStaticPropsType<typeof getStaticProps>>
> = ({ blogPosts }) => {
  return (
    <PageLayout>
      <section className="max-w-[640px]">
        <Meta title="Writings" />
        <Paragraph>
          From time to time, I do write. Sometime on my blog, but also on other
          blogs such as on{" "}
          <Link
            href="https://medium.com/@rathes"
            underlined
            className="text-neutral-900 dark:text-neutral-50"
          >
            Medium
          </Link>
          . The topics, I write about are diverse. Obviously, I write about the
          web, but also about non-web topics like my mother tongue Tamil or even
          about movies or anime.
        </Paragraph>
        <Paragraph>
          I do write in English, German and Tamil. So if you do not understand
          the title, it may be that you do not speak the language. If you want
          me to translate a specific article, just drop a message{" "}
          <Link
            href="https://twitter.com/rswebdesigner"
            underlined
            className="text-neutral-900 dark:text-neutral-50"
          >
            @rswebdesigner
          </Link>
        </Paragraph>

        <section className="mt-32">
          <div className="mt-12">
            <List title="Books & Whitepapers">
              <ListItem link="https://learn-tamil.com">
                A Guide To Basic Tamil Grammar
              </ListItem>
            </List>
          </div>

          {blogPosts.map(([key, posts]) => (
            <div className="mt-12" key={key}>
              <List title={key}>
                {posts.map((post, index) => (
                  <ListItem link={post.link} key={index}>
                    {post.title}
                  </ListItem>
                ))}
              </List>
            </div>
          ))}
        </section>
        <div className="my-32">
          <SayHi />
        </div>
      </section>
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps<{
  blogPosts: [string, Post[]][]
}> = async () => {
  const blogsPath = path.join(process.cwd(), "./src/content/blog")
  const languages = ["en", "de"]

  const posts = languages
    .map((language) => {
      return fs.readdirSync(path.join(blogsPath, language)).map((entry) => {
        const { data: frontmatter } = matter(
          fs
            .readFileSync(path.join(blogsPath, language, entry), {
              encoding: "utf-8",
            })
            .toString()
        )

        return {
          link: `/blog/${language}/${path.basename(entry, ".mdx")}`,
          title: frontmatter.title,
          date: frontmatter.date.toString(),
        }
      })
    })
    .flat()

  return {
    props: {
      blogPosts: getSortedGroups(
        groupPostsByYear([...posts, ...externalLinks])
      ),
    },
  }
}

export default Writings
