import { NextPage, Metadata } from "next"

import * as Collapsible from "@radix-ui/react-collapsible"
import {
  ChevronRightIcon,
  ChevronDownIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/16/solid"

import { getFilteredBlogPosts } from "@/services/blog"

import { Search } from "@/patterns/Search"

import { Link } from "@/components/Link"
import { Paragraph } from "@/components/Paragraph"
import { heading, Heading1 } from "@/components/Heading"
import * as List from "@/components/List"

export const metadata: Metadata = {
  title: "Writing",
  description:
    "I write about all sort of topics, not just tech! It could be related to start ups, design or just some of my personal thoughts",
}

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

const WritingPage: NextPage<{
  searchParams: SearchParams
}> = async (props) => {
  const searchParams = await props.searchParams
  const posts = getFilteredBlogPosts(searchParams.q?.toString() || "")

  return (
    <main className="space-y-8 py-4 lg:py-8">
      <section className="mx-auto max-w-lg px-4 sm:px-0">
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
          <Link target="_blank" href="https://bsky.app/profile/rathes.me">
            on Bluesky
          </Link>
        </Paragraph>
      </section>

      <section className="space-y-8 py-4">
        <div className="mx-auto max-w-lg px-4 sm:px-0">
          <Search
            placeholder="Blog post title"
            defaultValue={searchParams.q?.toString() || ""}
          />
        </div>
        <div className="mx-auto max-w-lg px-4 sm:px-0">
          <Collapsible.Root
            asChild
            defaultOpen={!!searchParams.q && searchParams.q.toString() !== ""}
          >
            <List.Root>
              <Collapsible.Trigger
                className={heading({
                  level: "small",
                  className: "group flex cursor-pointer items-center gap-1",
                })}
              >
                <ChevronRightIcon className="size-4 group-data-[state='open']:hidden" />
                <ChevronDownIcon className="size-4 group-data-[state='closed']:hidden" />
                Books, recipes and more
              </Collapsible.Trigger>
              <Collapsible.Content>
                <List.Container className="mt-3 space-y-2 pl-5">
                  <List.Item>
                    <List.Link href="https://learn-tamil.com/books/guide-to-basic-tamil-grammar">
                      A Guide To Basic Tamil Grammar
                    </List.Link>
                  </List.Item>
                  <List.Item>
                    <List.Link href="/biryani">
                      Chicken biryani recipe
                    </List.Link>
                  </List.Item>
                </List.Container>
              </Collapsible.Content>
            </List.Root>
          </Collapsible.Root>
        </div>

        {posts.map(([key, posts]) => {
          if (!posts.length) {
            return
          }

          return (
            <div className="mx-auto max-w-lg px-4 sm:px-0" key={key}>
              <Collapsible.Root asChild defaultOpen>
                <List.Root>
                  <Collapsible.Trigger
                    className={heading({
                      level: "small",
                      className: "group flex cursor-pointer items-center gap-1",
                    })}
                  >
                    <ChevronRightIcon className="size-4 group-data-[state='open']:hidden" />
                    <ChevronDownIcon className="size-4 group-data-[state='closed']:hidden" />
                    {key}
                  </Collapsible.Trigger>
                  <Collapsible.Content>
                    <List.Container className="mt-3 space-y-2 pl-5">
                      {posts.map((post, index) => (
                        <List.Item key={index}>
                          <List.Link
                            href={post.link}
                            className="flex items-center gap-1"
                          >
                            {post.title}
                            {post.external && (
                              <ArrowUpRightIcon className="inline size-5 text-neutral-400" />
                            )}
                          </List.Link>
                        </List.Item>
                      ))}
                    </List.Container>
                  </Collapsible.Content>
                </List.Root>
              </Collapsible.Root>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default WritingPage
