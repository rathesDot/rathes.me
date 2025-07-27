import { Metadata, NextPage } from "next"
import Image from "next/image"
import NextLink from "next/link"

import { ArrowUpRightIcon } from "@heroicons/react/16/solid"

import { Link } from "@/components/Link"
import { Paragraph } from "@/components/Paragraph"
import { heading, Heading1, Heading2 } from "@/components/Heading"
import { Card } from "@/components/Card"

import CalaisPreview from "@/assets/images/calais-preview.png"
import LearnTamilPreview from "@/assets/images/learn-tamil-preview.png"
import KodiPreview from "@/assets/images/kodi-preview.png"

export const metadata: Metadata = {
  title: "Work",
  description:
    "When I am not working at my day job, you will find me exploring new technology or design and working on some side projects. This is a list of the things I am working on at the moment.",
}

const WorkPage: NextPage = () => {
  return (
    <main className="space-y-12 py-4 lg:py-8">
      <section className="mx-auto max-w-lg px-4 sm:px-0">
        <Heading1>My work</Heading1>
        <Paragraph>
          I work as a product engineer at Intercom at the moment, but I also
          love to work on side projects. They do not necessarily have to be
          development related. If you want to see my software engineering
          related things, I recommend you visit my{" "}
          <Link href="https://github.com/rathesDot">Github profile</Link>.
        </Paragraph>
      </section>

      <div className="space-y-16 py-8 lg:space-y-32 lg:py-16">
        <section className="space-y-8">
          <div className="mx-auto max-w-lg px-4 sm:px-0">
            <header className="mb-1 flex items-center justify-between">
              <Heading2>Calais</Heading2>
              <Link
                className={heading({ level: "small" })}
                href="https://aheenam.com/templates/calais"
                target="_blank"
                underlined={false}
              >
                Visit page <ArrowUpRightIcon className="inline size-4" />
              </Link>
            </header>
            <Paragraph>
              I created this personal portfolio theme as an exploration for my
              own website here. Even though I did not end up with making this
              radical change, I really like this minimal approach with a single
              accent color.
            </Paragraph>
          </div>
          <div className="overflow-hidden pl-4 sm:pl-0">
            <Image
              src={CalaisPreview}
              alt="Preview of template named 'Calais'"
              height={400}
              className="mx-auto max-w-none"
            />
          </div>
        </section>

        <section className="space-y-8">
          <div className="mx-auto max-w-lg px-4 sm:px-0">
            <header className="mb-1 flex items-center justify-between">
              <Heading2>Learn Tamil Online</Heading2>
              <Link
                className={heading({ level: "small" })}
                href="https://learn-tamil.com/"
                target="_blank"
                underlined={false}
              >
                Visit page <ArrowUpRightIcon className="inline size-4" />
              </Link>
            </header>
            <Paragraph>
              My own mother tongue is one of the oldest languages that's still
              in use and it is really close to my heart to keep this language
              alive.
            </Paragraph>
            <Paragraph>
              With Learn Tamil Online, I want to build a platform of various
              resource that help with learning the language, starting with a
              book about{" "}
              <Link
                target="_blank"
                href="https://learn-tamil.com/books/guide-to-basic-tamil-grammar"
              >
                basic Tamil grammar
              </Link>{" "}
              and{" "}
              <Link href="https://learn-tamil.com/resources/tamil-song-lyrics">
                Tamil song lyrics
              </Link>{" "}
              that you can read in Tamil but also tap to read transliterated.
            </Paragraph>
          </div>
          <div className="@container overflow-hidden">
            <Image
              src={LearnTamilPreview}
              alt="Image showcasing a book cover on the left and two screens of the Learn Tamil App in the center and right"
              height={350}
              className="-ml-40 max-w-none @[456px]:mx-auto"
            />
          </div>
        </section>

        <section className="space-y-8">
          <div className="mx-auto max-w-lg px-4 sm:px-0">
            <header className="mb-1 flex items-center justify-between">
              <Heading2>Kodi</Heading2>
              <span
                className={heading({
                  level: "small",
                  className: "text-yellow-700",
                })}
              >
                Temporarily closed
              </span>
            </header>
            <Paragraph>
              My vision for this SaaS is to establish a feature flag and release
              management platform that enables small startups and indiehackers
              to ship more confidently and increase their tolerance towards
              experimenting and exploring
            </Paragraph>
          </div>
          <div className="overflow-hidden pl-4 drop-shadow sm:pl-0">
            <Image
              src={KodiPreview}
              alt="Screenshot of the Kodi dashboard"
              height={340}
              className="mx-auto max-w-none"
            />
          </div>
        </section>

        <section className="space-y-4">
          <div className="mx-auto max-w-lg px-4 sm:px-0">
            <header className="mb-1 flex items-center justify-between">
              <Heading2>Other projects</Heading2>
            </header>
            <Paragraph>
              I love to explore and try out many different things. That's what
              makes side projects a lot more enjoyable and feel less like
              another job.
            </Paragraph>
            <Paragraph>
              Below is an incomplete list of other projects that I work on from
              time to time.
            </Paragraph>
          </div>
          <ul className="mx-auto max-w-lg space-y-2 px-4 sm:px-0">
            <li>
              <Card asChild>
                <NextLink
                  href="https://getmaxout.app"
                  target="_blank"
                  className="flex items-center justify-between"
                >
                  Maxout 2.0
                  <ArrowUpRightIcon className="size-5 align-middle text-neutral-600 dark:text-neutral-200" />
                </NextLink>
              </Card>
            </li>
            <li>
              <Card>
                <NextLink
                  className="flex items-center justify-between"
                  href="/blog/en/closing-mozhi"
                >
                  Mozhi
                </NextLink>
              </Card>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}

export default WorkPage
