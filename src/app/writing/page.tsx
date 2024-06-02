import { NextPage, Metadata } from "next"

import { getFilteredBlogPosts } from "../../services/blog"

import { Link } from "../../components/Link"
import { Paragraph } from "../../components/Paragraph"
import { Heading1 } from "../../components/Heading"
import * as List from "../../components/List/List"

import { SayHi } from "../../patterns/SayHi"
import { Search } from "../../patterns/Search"

export const metadata: Metadata = {
  title: "Writing",
  description:
    "I write about all sort of topics, not just tech! It could be related to start ups, design or just some of my personal thoughts",
}

const WritingPage: NextPage<{
  searchParams: { [key: string]: string | string[] | undefined }
}> = ({ searchParams }) => {
  const posts = getFilteredBlogPosts(searchParams.q?.toString() || "")

  return (
    <section className="max-w-xl">
      <section>
        <Heading1>Writing</Heading1>
        <Paragraph>
          From time to time, I do write. Sometime on my blog, but also on other
          blogs such as on <Link href="https://medium.com/@rathes">Medium</Link>
          . The topics, I write about are diverse. Obviously, I write about the
          web, but also about non-web topics like my mother tongue Tamil or even
          about movies or anime.
        </Paragraph>
        <Paragraph>
          I do write in English, German and Tamil. So if you do not understand
          the title, it may be that you do not speak the language. If you want
          me to translate a specific article, just drop a message{" "}
          <Link href="https://twitter.com/rswebdesigner">@rswebdesigner</Link>
        </Paragraph>
      </section>

      <div className="mt-12">
        <div className="mb-8">
          <Search defaultValue={searchParams.q?.toString() || ""} />
        </div>
        <List.Root>
          <List.Title>Books & Whitepapers</List.Title>
          <List.Container>
            <List.Item>
              <List.Link href="https://learn-tamil.com">
                A Guide To Basic Tamil Grammar
              </List.Link>
            </List.Item>
          </List.Container>
        </List.Root>

        {posts.map(([key, posts]) => {
          if (!posts.length) {
            return
          }

          return (
            <div className="mt-12" key={key}>
              <List.Root>
                <List.Title>{key}</List.Title>
                <List.Container>
                  {posts.map((post, index) => (
                    <List.Item key={index}>
                      <List.Link href={post.link}>{post.title}</List.Link>
                    </List.Item>
                  ))}
                </List.Container>
              </List.Root>
            </div>
          )
        })}
      </div>
      <div className="mt-16">
        <SayHi />
      </div>
    </section>
  )
}

export default WritingPage
