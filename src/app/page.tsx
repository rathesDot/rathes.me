import { NextPage } from "next"
import NextLink from "next/link"
import { Link } from "../components/Link"
import { Heading1, Heading2, heading } from "../components/Heading"
import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import { Card } from "../components/Card"

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
    </main>
  )
}

export default HomePage
