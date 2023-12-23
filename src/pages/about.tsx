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
  "relative delay-100 after:h-8 after:bg-gradient-to-t after:from-neutral-950 after:absolute after:bottom-0 after:inset-x-0 transition-all overflow-hidden",
  {
    variants: {
      open: {
        false: "max-h-56 after:opacity-100",
        true: "max-h-[540px] after:opacity-0",
      },
    },
  }
)

const AboutMe: React.FC<React.PropsWithChildren<NextPage>> = () => {
  const [open, setOpen] = useState(false)
  return (
    <PageLayout>
      <Meta title="About me" />
      <div className="max-w-xl p-8">
        <Heading1 size={2}>
          I'm a front-end engineer with over 10 years of web experience.
        </Heading1>
        <div className={readMore({ open })}>
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
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="mt-4 inline-block text-white underline underline-offset-2"
        >
          {open ? "Read less" : "Continue Reading"}
        </button>

        <div className="my-32">
          <SayHi />
        </div>
      </div>
    </PageLayout>
  )
}

export default AboutMe
