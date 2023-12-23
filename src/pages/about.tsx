import React from "react"
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

import books from "../../data/books.json"

const AboutMe: React.FC<React.PropsWithChildren<NextPage>> = () => (
  <PageLayout>
    <Meta title="About me" />
    <div className="max-w-xl p-8">
      <Heading1 size={2}>
        I'm a front-end engineer with over 10 years of web experience.
      </Heading1>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit
        nunc massa, condimentum accumsan lectus luctus vitae. Vestibulum commodo
        porta neque eget semper. Phasellus non dictum metus. Pellentesque
        pretium est quis aliquet tempus.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit
        nunc massa, condimentum accumsan lectus luctus vitae. Vestibulum commodo
        porta neque eget semper. Phasellus non dictum metus. Pellentesque
        pretium est quis aliquet tempus.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit
        nunc massa, condimentum accumsan lectus luctus vitae. Vestibulum commodo
        porta neque eget semper. Phasellus non dictum metus. Pellentesque
        pretium est quis aliquet tempus.
      </Paragraph>

      <div className="my-32">
        <SayHi />
      </div>
    </div>
  </PageLayout>
)

export default AboutMe
