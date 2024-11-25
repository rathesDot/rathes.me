import { NextPage } from "next"
import NextLink from "next/link"
import { ArrowUpRightIcon } from "@heroicons/react/16/solid"

import { Heading1, Heading2, heading } from "../components/Heading"
import { Link } from "../components/Link"
import { Card } from "../components/Card"
import * as List from "../components/List"

const HomePage: NextPage = () => {
  return (
    <main className="space-y-12 p-4">
      <section>
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
          Find out more about me on{" "}
          <Link href="https://pinkary.com/@tamizhographer" target="_blank">
            Pinkary
          </Link>
        </p>
      </section>
      <section>
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
      <section>
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
            <List.Item>
              <List.Link href="/">What happened in 2024 — A review</List.Link>
            </List.Item>
            <List.Item>
              <List.Link href="/">New hopes for social media</List.Link>
            </List.Item>
            <List.Item>
              <List.Link href="/">
                What does it mean to be successful?
              </List.Link>
            </List.Item>
            <List.Item>
              <List.Link href="/">
                Bringing back Burpril{" "}
                <ArrowUpRightIcon className="inline size-4" />
              </List.Link>
            </List.Item>
            <List.Item>
              <List.Link href="/">Shutting down Mozhi</List.Link>
            </List.Item>
          </List.Container>
        </List.Root>
      </section>
      <section>
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
            <List.Item>
              The Seven Deaths of Evelyn Hardcastle
              <List.Subtitle>by Stuart Turton</List.Subtitle>
            </List.Item>
            <List.Item>
              Butter
              <List.Subtitle>by Asako Yuzuki</List.Subtitle>
            </List.Item>
            <List.Item>
              Origins: How the Earth Shaped Human History
              <List.Subtitle>by Lewis Dartnell</List.Subtitle>
            </List.Item>
          </List.Container>
        </List.Root>
      </section>
    </main>
  )
}

export default HomePage
