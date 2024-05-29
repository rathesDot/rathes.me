import { NextPage } from "next"
import { PageLayout } from "../../layouts"
import { Heading1, Link, List, ListItem, Paragraph } from "../../components"
import { getFilteredBlogPosts } from "../../services/blog"

import { SayHi } from "../../patterns"

const WritingPage: NextPage<{
  searchParams: { [key: string]: string | string[] | undefined }
}> = ({ searchParams }) => {
  const posts = getFilteredBlogPosts(searchParams.q?.toString() || "")

  return (
    <PageLayout>
      <section className="max-w-xl p-8 md:px-14">
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

        <div className="mt-12">
          <List title="Books & Whitepapers">
            <ListItem link="https://learn-tamil.com">
              A Guide To Basic Tamil Grammar
            </ListItem>
          </List>

          {posts.map(([key, posts]) => {
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
        </div>
        <div className="mt-16">
          <SayHi />
        </div>
      </section>
    </PageLayout>
  )
}

export default WritingPage
