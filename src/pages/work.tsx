import React from "react"
import { NextPage } from "next"

import { styled } from "../../stitches.config"

import { PageLayout } from "../layouts"
import {
  Heading,
  Link,
  List,
  ListItem,
  Paragraph,
  Meta,
  Separator,
} from "../components"

import { SayHi } from "../patterns"

const Container = styled("section", {
  maxWidth: 640,
})

const Section = styled("section", {
  marginTop: "$32",
})

const SayHiContainer = styled("section", {
  marginBottom: "$32",
  marginTop: "$32",
})

const Work: React.FC<React.PropsWithChildren<NextPage>> = () => {
  return (
    <PageLayout>
      <Container>
        <Meta title="Work" />
        <Paragraph>
          I work as a front-end engineer at Hussle right now, but I also love to
          work on side projects. They do not necessarily have to be development
          related. If you want to see my software engineering related things, I
          recommend you visit my{" "}
          <Link color="slate12" href="https://github.com/rathesDot" underlined>
            Github profile
          </Link>
          .
        </Paragraph>
        <Section>
          <Heading level="heading2">Learn Tamil Online</Heading>
          <Paragraph>
            The first side project I am working on right now is to provide a
            platform for people that want to learn my mother language Tamil.
          </Paragraph>
          <Paragraph>
            In a first step, I'm working on a small book. I am then going to use
            that book as the foundation to build an app. My long term idea is to
            create a community around learning the language Tamil and the Tamil
            culture and history.
          </Paragraph>
          <Paragraph>
            Learn more about the project on{" "}
            <Link color="slate12" underlined href="https://learn-tamil.com">
              https://learn-tamil.com
            </Link>
          </Paragraph>
        </Section>
        <Section>
          <Heading level="heading2">Maxout</Heading>
          <Paragraph>
            During the pandemic in 2020, I started working on a small fitness
            app. It aims to help users reaching their fitness goals by making
            the planning and tracking of workouts easier.
          </Paragraph>
          <Paragraph>
            Compared to other apps on the market, my vision for Maxout is
            focussing on simplicity and beauty. You can read the full story
            about Maxout in this article{" "}
            <Link
              color="slate12"
              underlined
              href="https://getmaxout.app/blog/introducing-maxout/"
            >
              Introducing Maxout
            </Link>
            .
          </Paragraph>
          <Paragraph>
            Sign up for Maxout on{" "}
            <Link color="slate12" underlined href="https://getmaxout.app">
              https://getmaxout.app
            </Link>
          </Paragraph>
        </Section>
        <Section>
          <Heading level="heading2">Public Speaking</Heading>
          <Paragraph>
            In January 2019, I gave my first tech-related talk. Since it was an
            exciting experience, I will hopefully fill up this list with a few
            more of them. They do not only have to be about tech-related stuff
            but also about society related things as I did a few times in the
            past already.
          </Paragraph>
          <Paragraph>
            If you want me to give a talk at your meetup, conference, or even
            private events, feel free to message me. You can find the abstracts
            of my current ones below. Each of them is possible as a 20-, 30-,
            and 45-minutes version.
          </Paragraph>
          <List title="Tech Talks">
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
          <List title="Abstracts">
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
        </Section>
        <SayHiContainer>
          <SayHi />
        </SayHiContainer>
      </Container>
    </PageLayout>
  )
}

export default Work
