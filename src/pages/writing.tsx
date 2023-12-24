import React, { useMemo, useState } from "react"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import matter from "gray-matter"

import path from "path"
import fs from "fs"

import {
  Link,
  List,
  ListItem,
  Paragraph,
  Meta,
  Heading1,
  TextField,
} from "../components"
import { SayHi } from "../patterns"
import { PageLayout } from "../layouts"

import { getSortedGroups, groupPostsByYear, Post } from "../utils"

import externalLinks from "../content/blog/externalLinks"

const Writings: React.FC<
  React.PropsWithChildren<InferGetStaticPropsType<typeof getStaticProps>>
> = ({ blogPosts }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredList: [string, Post[]][] = useMemo(() => {
    return blogPosts.map(([year, posts]) => {
      return [
        year,
        posts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.link.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      ]
    })
  }, [searchTerm, blogPosts])
  return (
    <PageLayout>
      <section className="max-w-xl p-8">
        <Meta title="Writings" />
        <section>
          <Heading1>Writing</Heading1>
          <Paragraph>
            From time to time, I do write. Sometime on my blog, but also on
            other blogs such as on{" "}
            <Link
              href="https://medium.com/@rathes"
              underlined
              className="text-neutral-50"
            >
              Medium
            </Link>
            . The topics, I write about are diverse. Obviously, I write about
            the web, but also about non-web topics like my mother tongue Tamil
            or even about movies or anime.
          </Paragraph>
          <Paragraph>
            I do write in English, German and Tamil. So if you do not understand
            the title, it may be that you do not speak the language. If you want
            me to translate a specific article, just drop a message{" "}
            <Link
              href="https://twitter.com/rswebdesigner"
              underlined
              className="text-neutral-50"
            >
              @rswebdesigner
            </Link>
          </Paragraph>
        </section>

        <section className="mt-12">
          <div className="mb-8">
            <TextField
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Filter list"
              placeholder="Filter list..."
            />
          </div>
          <div className="mt-12">
            <List title="Books & Whitepapers">
              <ListItem link="https://learn-tamil.com">
                A Guide To Basic Tamil Grammar
              </ListItem>
            </List>
          </div>

          {filteredList.map(([key, posts]) => {
            if (!posts.length) {
              return
            }

            return (
              <div className="mt-12" key={key}>
                <List title={key} className="flex flex-col gap-2">
                  {posts.map((post, index) => (
                    <ListItem link={post.link} key={index}>
                      {post.title}
                    </ListItem>
                  ))}
                </List>
              </div>
            )
          })}
        </section>
        <div className="mt-16">
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
