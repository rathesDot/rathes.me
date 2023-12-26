import React, { useState } from "react"
import RouterLink from "next/link"
import { NextPage } from "next"

import { PageLayout } from "../layouts"

import {
  Heading1,
  Heading2,
  List,
  ListItem,
  Paragraph,
  Meta,
  Separator,
} from "../components"

import { SayHi } from "../patterns"

import { cva } from "class-variance-authority"

const readMore = cva(
  "relative delay-100 after:h-8 after:bg-gradient-to-t after:from-neutral-950 after:absolute after:bottom-0 after:inset-x-0 transition-all overflow-hidden md:columns-2 md:after:hidden md:[&>p]:mt-0 md:mt-8 md:gap-12 lg:columns-3 lg:max-w-5xl",
  {
    variants: {
      open: {
        false: "max-h-56 after:opacity-100 md:max-h-none",
        true: "max-h-[540px] after:opacity-0 md:max-h-none",
      },
    },
  }
)

const AboutMe: React.FC<React.PropsWithChildren<NextPage>> = () => {
  const [open, setOpen] = useState(false)
  return (
    <PageLayout>
      <Meta title="About me" />
      <div className="max-w-[720px] p-8 md:px-14 lg:max-w-none">
        <Heading1 className="lg:max-w-2xl">
          I'm a front-end engineer with over 10 years of web experience.
        </Heading1>
        <section className={readMore({ open })}>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            suscipit nunc massa, condimentum accumsan lectus luctus vitae.
            Vestibulum commodo porta neque eget semper. Phasellus non dictum
            metus. Pellentesque pretium est quis aliquet tempus.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            suscipit nunc massa, condimentum accumsan lectus luctus vitae.
            Vestibulum commodo porta neque eget semper. Phasellus non dictum
            metus. Pellentesque pretium est quis aliquet tempus.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            suscipit nunc massa, condimentum accumsan lectus luctus vitae.
            Vestibulum commodo porta neque eget semper. Phasellus non dictum
            metus. Pellentesque pretium est quis aliquet tempus.
          </Paragraph>
        </section>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="mt-4 inline-block text-white underline underline-offset-2 md:hidden"
        >
          {open ? "Read less" : "Continue Reading"}
        </button>

        <section className="mt-12 md:mt-32">
          <List title="Work Experience" className="md:flex md:gap-12">
            <div className="flex flex-col gap-6">
              <ListItem subtitle="December 2021 — now">
                Product Engineer 3 / Intercom
              </ListItem>
              <ListItem subtitle="April 2021 — November 2021">
                Engineering Team Lead / Hussle
              </ListItem>
              <ListItem subtitle="February 2020 — March 2021">
                Senior Frontend Engineer / Hussle
              </ListItem>
              <ListItem subtitle="May 2018 — January 2020">
                Software Engineer / Teamleader
              </ListItem>
              <ListItem subtitle="May 2016 — October 2021">
                Founder / Aheenam
              </ListItem>
            </div>
            <div className="mt-6 flex flex-col gap-6 md:mt-0">
              <ListItem subtitle="November 2016 — April 2018">
                Web Developer / netinsiders
              </ListItem>
              <ListItem subtitle="October 2015 — January 2018">
                Co-Founder / Kernwerk
              </ListItem>
              <ListItem subtitle="June 2011 — March 2014">
                Product Assistant / Kopierland GmbH
              </ListItem>
              <ListItem subtitle="June 2006 — March 2016">
                Web Designer / rathesDot (CreativeCreation)
              </ListItem>
            </div>
          </List>
          <a
            href="/files/resume.pdf"
            className="mt-8 inline-flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <span className="text-sm md:text-base">Download CV</span>
          </a>
        </section>

        <div className="mt-16 md:mt-32">
          <SayHi />
        </div>
      </div>
    </PageLayout>
  )
}

export default AboutMe
