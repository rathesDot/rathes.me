import { Metadata, NextPage } from "next"
import Image from "next/image"

import { SayHi } from "../../patterns/SayHi"
import { Link, Separator } from "../../components"
import { Paragraph } from "../../components/Paragraph"
import { Heading1, Heading2, Heading3 } from "../../components/Heading"
import * as List from "../../components/List/List"

import CalaisTemplate from "../../assets/templates/calais.png"

export const metadata: Metadata = {
  title: "Work",
  description:
    "When I am not working at my day job, you will find me exploring new technology or design and working on some side projects. This is a list of the things I am working on at the moment.",
}

const WorkPage: NextPage = () => {
  return (
    <div>
      <section>
        <Heading1>My work</Heading1>
        <Paragraph>
          I work as a product engineer at Intercom at the moment, but I also
          love to work on side projects. They do not necessarily have to be
          development related. If you want to see my software engineering
          related things, I recommend you visit my{" "}
          <Link href="https://github.com/rathesDot">Github profile</Link>.
        </Paragraph>
      </section>

      <section className="my-16 flex flex-col gap-4">
        <Heading2 level="h4" className="text-neutral-400">
          Templates
        </Heading2>
        <section>
          <Image
            src={CalaisTemplate}
            alt="Preview of template named 'Calais'"
            width={480}
          />
          <div className="py-4">
            <Heading3 level="h2">Calais</Heading3>
            <Paragraph>
              A minimal personal portfolio template best for someone who wants
              to showcase their projects but also have their resume ready on
              their website.
            </Paragraph>

            <Link href="/store/calais">View template</Link>
          </div>
        </section>
      </section>

      <section className="my-16 flex max-w-xl flex-col gap-4">
        <Heading2 level="h4" className="text-neutral-400">
          Active projects
        </Heading2>
        <div className="flex flex-col gap-16">
          <section>
            <Heading3 level="h2">Maxout 2.0</Heading3>
            <Paragraph>
              After a first attempt as a workout planning app, Maxout 2.0 aims
              to be the single necessary app for anyone interested in leading a
              healthy lifestyle.
            </Paragraph>
            <Link
              underlined
              href="https://getmaxout.app"
              className="text-neutral-50"
            >
              View project
            </Link>
          </section>
          <section>
            <Heading3 level="h2">Learn Tamil Online</Heading3>
            <Paragraph>
              The mission of Learn Tamil Online is to keep the Tamil language
              alive which we want to achieve by bringing together the Tamil
              speaking community from all over the world and all necessary
              resources to learn Tamil.
            </Paragraph>
            <Link
              underlined
              href="https://learn-tamil.com"
              className="text-neutral-50"
            >
              View project
            </Link>
          </section>
          <section>
            <Heading3 level="h2">Espresso at home</Heading3>
            <Paragraph>
              A small project that I started to share everything I am learning
              while trying to recreate the Italian espresso feeling at home.
            </Paragraph>
            <Link
              underlined
              href="https://espresso-at-home.com"
              className="text-neutral-50"
            >
              View project
            </Link>
          </section>
          <section>
            <Heading3 level="h2">Kodi — Feature Management Service</Heading3>
            <Paragraph>
              The aim of this SaaS is to enable every team to use feature flags
              straight from the beginning.
            </Paragraph>
            <Link
              underlined
              href="https://getkodi.com"
              className="text-neutral-50"
            >
              View project
            </Link>
          </section>
        </div>
      </section>

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
      <section className="my-16 max-w-xl">
        <SayHi />
      </section>
    </div>
  )
}

export default WorkPage
