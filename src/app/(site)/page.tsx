import { NextPage } from "next"
import NextLink from "next/link"
import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import Image from "next/image"

import { getCurrentlyReading } from "@/services/books"
import { getLatestBlogposts } from "@/services/blog"

import { Heading1, Heading2, heading } from "@/components/Heading"
import { Link } from "@/components/Link"
import { Card } from "@/components/Card"
import * as List from "@/components/List"

import RuislipJeep from "@/assets/photos/202411_ruislip_jeep.jpg"
import Iceland1 from "@/assets/photos/202402_iceland_1.jpg"
import Iceland2 from "@/assets/photos/202402_iceland_2.jpg"

const HomePage: NextPage = () => {
  const books = getCurrentlyReading()
  const posts = getLatestBlogposts()

  return (
    <main className="space-y-12 py-4">
      <section className="mx-auto max-w-lg p-4 sm:px-0">
        <Heading1>
          I'm Rathes Sachchithananthan, a front-end engineer living in{" "}
          <Link href="https://goo.gl/maps/E9c5uw5SLjSbLZ9G9">London</Link>{" "}
          interested in fitness, languages, books &amp; cooking.
        </Heading1>
        <p className={heading({ level: "h1" })}>
          Currently, I work as a senior software engineer at{" "}
          <Link href="https://www.hubspot.com/">HubSpot</Link> helping
          businesses grow better.
        </p>
        <p className={heading({ level: "h1" })}>
          Follow me on <Link href="/links">Blueksy, Instagram and more</Link>.
        </p>
      </section>
      <section className="mx-auto max-w-lg p-4 sm:px-0">
        <header className="mb-2 flex items-center justify-between">
          <Heading2 level="small">Current projects</Heading2>
          <Link
            className={heading({ level: "small" })}
            href="/work"
            underlined={false}
          >
            See more
          </Link>
        </header>
        <ul className="space-y-2">
          <li>
            <Card asChild>
              <NextLink
                href="https://aheenam.com/templates/calais"
                target="_blank"
                className="flex items-center justify-between"
              >
                Calais Portfolio Template{" "}
                <ArrowUpRightIcon className="size-5 align-middle text-neutral-600 dark:text-neutral-200" />
              </NextLink>
            </Card>
          </li>
          <li>
            <Card>
              <NextLink
                className="flex items-center justify-between"
                href="https://getkodi.com/"
                target="_blank"
              >
                Kodi
                <ArrowUpRightIcon className="size-5 align-middle text-neutral-600 dark:text-neutral-200" />
              </NextLink>
            </Card>
          </li>
          <li>
            <Card>
              <NextLink
                className="flex items-center justify-between"
                href="https://learn-tamil.com/"
                target="_blank"
              >
                Learn Tamil Online
                <ArrowUpRightIcon className="size-5 align-middle text-neutral-600 dark:text-neutral-200" />
              </NextLink>
            </Card>
          </li>
        </ul>
      </section>
      <section className="mx-auto max-w-lg p-4 sm:px-0">
        <header className="mb-3 flex items-center justify-between">
          <Heading2 level="small">Latest blog posts</Heading2>
          <Link
            className={heading({ level: "small" })}
            href="/writing"
            underlined={false}
          >
            Read more
          </Link>
        </header>
        <List.Root>
          <List.Container>
            {posts.map((posts, index) => {
              return (
                <List.Item key={`post-${index}`}>
                  <List.Link href={posts.link}>
                    {posts.title}
                    {posts.external && (
                      <>
                        {" "}
                        <ArrowUpRightIcon className="inline size-4" />
                      </>
                    )}
                  </List.Link>
                </List.Item>
              )
            })}
          </List.Container>
        </List.Root>
      </section>
      <section className="mx-auto max-w-lg p-4 sm:px-0">
        <header className="mb-3 flex items-center justify-between">
          <Heading2 level="small">Currently reading</Heading2>
          <Link
            className={heading({ level: "small" })}
            href="/reading"
            underlined={false}
          >
            More books
          </Link>
        </header>
        <List.Root>
          <List.Container className="space-y-3">
            {books.map((book, index) => {
              return (
                <List.Item key={`book-${index}`}>
                  {book.title}
                  <List.Subtitle>by {book.author}</List.Subtitle>
                </List.Item>
              )
            })}
          </List.Container>
        </List.Root>
      </section>
      <section className="mx-auto max-w-[662px] p-4 sm:px-0">
        <header className="mx-auto mb-3 flex max-w-lg items-center justify-between">
          <Heading2 level="small">Latest shots</Heading2>
          <Link
            className={heading({ level: "small" })}
            href="/photography"
            underlined={false}
          >
            All photos
          </Link>
        </header>
        <div className="-mr-4">
          <div className="flex flex-nowrap items-start gap-4 overflow-x-auto pr-4 pb-2">
            <div className="flex-none">
              <Image
                src={RuislipJeep}
                width={210}
                alt="An old SUV on an autumn covered street"
              />
            </div>
            <div className="flex-none">
              <Image src={Iceland1} width={210} alt="work 1" />
            </div>
            <div className="flex-none">
              <Image src={Iceland2} width={210} alt="Van parked in snow" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage
