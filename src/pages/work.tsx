import React from "react"
import { NextPage } from "next"
import Image from "next/image"
import RouterLink from "next/link"

import { PageLayout } from "../layouts"
import {
  link,
  Link,
  List,
  ListItem,
  Paragraph,
  Meta,
  Separator,
  Heading1,
  Heading2,
  Heading3,
} from "../components"

import { SayHi } from "../patterns"

import CalaisTemplate from "../assets/templates/calais.png"

const Work: React.FC<React.PropsWithChildren<NextPage>> = () => {
  return (
    <PageLayout>
      <Meta title="Work" />
      <section className="max-w-xl p-8 md:px-14">
        <Heading1>My work</Heading1>
        <Paragraph>
          I work as a product engineer at Intercom at the moment, but I also
          love to work on side projects. They do not necessarily have to be
          development related. If you want to see my software engineering
          related things, I recommend you visit my{" "}
          <RouterLink href="https://github.com/rathesDot">
            Github profile
          </RouterLink>
          .
        </Paragraph>
      </section>

      <section className="my-16 flex flex-col gap-4">
        <Heading2 size={4} className="mx-8 text-neutral-400 md:mx-14">
          Templates
        </Heading2>
        <section className="md:flex md:gap-8 md:px-14">
          <Image
            src={CalaisTemplate}
            alt="Preview of template named 'Calais'"
            width={480}
          />
          <div className=" max-w-md px-8 py-4">
            <Heading3 size={2}>Calais</Heading3>
            <Paragraph>
              A minimal personal portfolio template best for someone who wants
              to showcase their projects but also have their resume ready on
              their website.
            </Paragraph>

            <RouterLink
              href="/store/calais"
              className={link({ underlined: true })}
            >
              View template
            </RouterLink>
          </div>
        </section>
      </section>

      <section className="my-16 flex max-w-xl flex-col gap-4 p-8 md:px-14">
        <Heading2 size={4} className="text-neutral-400">
          Active projects
        </Heading2>
        <div className="flex flex-col gap-16">
          <section>
            <Heading3 size={2}>Maxout 2.0</Heading3>
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
            <Heading3 size={2}>Learn Tamil Online</Heading3>
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
            <Heading3 size={2}>Espresso at home</Heading3>
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
            <Heading3 size={2}>Kodi — Feature Management Service</Heading3>
            <Paragraph>
              The aim of this SaaS is to enable every team to use feature flags
              straight from the beginning.
            </Paragraph>
            <Link disabled className="italic text-neutral-50/30">
              Coming soon
            </Link>
          </section>
        </div>
      </section>

      <Separator className="mx-8 md:mx-14" />

      <section className="mt-16 max-w-xl p-8 md:px-14">
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
          <List title="Tech Talks" className="flex flex-col gap-6">
            <ListItem
              link="/talks/readme-driven-development-phpuk.pdf"
              subtitle="February 2019 at PHP UK Unconference"
            >
              Introduction to Readme Driven Development
            </ListItem>
            <ListItem
              link="/talks/readme-driven-development.pdf"
              subtitle="January 2019 at PHP Gent"
            >
              Introduction to Readme Driven Development
            </ListItem>
          </List>
          <Separator />
          <List title="Abstracts" className="flex flex-col gap-6">
            <ListItem
              link="/talks/meetings"
              subtitle="Developing a meeting culture that employees will love"
            >
              You probably don’t need that meeting
            </ListItem>
            <ListItem
              link="/talks/managing-time"
              subtitle="A talk about what people call time management"
            >
              You can't manage time
            </ListItem>
          </List>
        </div>
      </section>
      <section className="my-16 max-w-xl p-8 md:px-14">
        <SayHi />
      </section>
    </PageLayout>
  )
}

export default Work
