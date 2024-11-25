import { Metadata, NextPage } from "next"
import Image from "next/image"
import NextLink from "next/link"

import { ArrowUpRightIcon } from "@heroicons/react/16/solid"

import { Separator } from "../../components/Separator"
import { Link } from "../../components/Link"
import { Paragraph } from "../../components/Paragraph"
import { heading, Heading1, Heading2, Heading3 } from "../../components/Heading"
import { Card } from "../../components/Card"
import * as List from "../../components/List"

import CalaisPreview from "../../assets/images/calais-preview.png"
import LearnTamilPreview from "../../assets/images/learn-tamil-preview.png"
import KodiPreview from "../../assets/images/kodi-preview.png"

export const metadata: Metadata = {
  title: "Work",
  description:
    "When I am not working at my day job, you will find me exploring new technology or design and working on some side projects. This is a list of the things I am working on at the moment.",
}

const WorkPage: NextPage = () => {
  return (
    <main className="space-y-12 py-4">
      <section className="px-4">
        <Heading1>My work</Heading1>
        <Paragraph>
          I work as a product engineer at Intercom at the moment, but I also
          love to work on side projects. They do not necessarily have to be
          development related. If you want to see my software engineering
          related things, I recommend you visit my{" "}
          <Link href="https://github.com/rathesDot">Github profile</Link>.
        </Paragraph>
      </section>

      <div className="space-y-16 py-8">
        <section className="space-y-8">
          <div className="px-4">
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
          <div className="overflow-hidden pl-4">
            <Image
              src={CalaisPreview}
              alt="Preview of template named 'Calais'"
              height={400}
              className="max-w-none"
            />
          </div>
        </section>

        <section className="space-y-8">
          <div className="px-4">
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
          <div className="overflow-hidden">
            <Image
              src={LearnTamilPreview}
              alt="Image showcasing a book cover on the left and two screens of the Learn Tamil App in the center and right"
              height={350}
              className="-ml-40 max-w-none"
            />
          </div>
        </section>

        <section className="space-y-8">
          <div className="px-4">
            <header className="mb-1 flex items-center justify-between">
              <Heading2>Kodi</Heading2>
              <Link
                className={heading({ level: "small" })}
                href="https://getkodi.com"
                target="_blank"
                underlined={false}
              >
                Visit page <ArrowUpRightIcon className="inline size-4" />
              </Link>
            </header>
            <Paragraph>
              My vision for this SaaS is to establish a feature flag and release
              management platform that enables small startups and indiehackers
              to ship more confidently and increase their tolerance towards
              experimenting and exploring
            </Paragraph>
          </div>
          <div className="overflow-hidden pl-4 drop-shadow">
            <Image
              src={KodiPreview}
              alt="Screenshot of the Kodi dashboard"
              height={340}
              className="max-w-none"
            />
          </div>
        </section>

        <section className="space-y-4">
          <div className="px-4">
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
          <ul className="space-y-2 px-4">
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
                  href="https://espresso-at-home.com"
                  target="_blank"
                >
                  Espresso at home
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

      <Separator />

      <section className="mt-16">
        <Heading2 className="scroll-mt-32" id="public-speaking">
          Public Speaking
        </Heading2>
        <Paragraph>
          In January 2019, I gave my first tech-related talk. Since it was an
          exciting experience, I will hopefully fill up this list with a few
          more of them. They do not only have to be about tech-related stuff but
          also about society related things as I did a few times in the past
          already.
        </Paragraph>
        <Paragraph>
          If you want me to give a talk at your meetup, conference, or even
          private events, feel free to message me. You can find the abstracts of
          my current ones below. Each of them is possible as a 20-, 30-, and
          45-minutes version.
        </Paragraph>
        <div className="mt-12">
          <List.Root>
            <List.Title>Tech talks</List.Title>
            <List.Container>
              <List.Item>
                <List.Link href="/talks/readme-driven-development-phpuk.pdf">
                  <List.Subtitle>
                    February 2019 at PHP UK Unconference
                  </List.Subtitle>
                  Introduction to Readme Driven Development
                </List.Link>
              </List.Item>
              <List.Item>
                <List.Link href="/talks/readme-driven-development.pdf">
                  <List.Subtitle>January 2019 at PHP Gent</List.Subtitle>
                  Introduction to Readme Driven Development
                </List.Link>
              </List.Item>
            </List.Container>
          </List.Root>
          <Separator />
          <Heading2 level="h4" className="text-neutral-400">
            Abstracts
          </Heading2>
          <article className="my-6">
            <Heading3 className="mb-2">
              You probably don't need that meeting
              <span className="block text-base font-medium text-neutral-500">
                Developing a meeting culture that employees will love
              </span>
            </Heading3>
            <p className="mb-2 text-base text-neutral-400 antialiased">
              Be honest with yourself. How many of your meetings do you think
              were useful? And how many of them were productive? In this talk,
              we will talk about developing a meeting culture that everybody in
              the company will love!
            </p>
            <p className="mb-2 text-base text-neutral-400 antialiased">
              You will learn how to avoid unnecessary meetings, how other types
              of communication can be more effective and efficient. You will
              also learn how to conduct those unavoidable meetings so that they
              are productive and don't feel like a waste of time.
            </p>
            <p className="mb-2 text-base text-neutral-400 antialiased">
              After this talk, you will be able to avoid useless meetings and
              make the necessary meetings more productive.
            </p>
          </article>
          <article className="my-6">
            <Heading3 className="mb-2">
              You can't manage time
              <span className="block text-base font-medium text-neutral-500">
                A talk about what people call time management
              </span>
            </Heading3>
            <p className="mb-2 text-base text-neutral-400 antialiased">
              How many different things did you already try out to be more
              productive and get more things done? How many tools do you own to
              accomplish more? And did it help?
            </p>
            <p className="mb-2 text-base text-neutral-400 antialiased">
              This talk focusses on what time management is about, why you can't
              manage time. You will learn about the emotional aspect of time
              management and the essential habits that will help you to get more
              things done.
            </p>
            <p className="mb-2 text-base text-neutral-400 antialiased">
              After this talk, you will have an idea of what you can work on if
              you want to get more things done. And you will understand what
              time management means.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default WorkPage
