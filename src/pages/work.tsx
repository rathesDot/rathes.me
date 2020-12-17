import React from "react"
import { graphql, PageProps, StaticQueryProps } from "gatsby"

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
  marginTop: "$32",
  maxWidth: 640,
})

const Section = styled("section", {
  marginTop: "$32",
})

const SayHiContainer = styled("section", {
  marginBottom: "$32",
  marginTop: "$32",
})

type TalksProps = {
  data: { rdd: { publicURL: string }; rddUk: { publicURL: string } }
}

const Work: React.FC<PageProps & TalksProps> = ({ data }) => {
  return (
    <PageLayout>
      <Container>
        <Meta title="Work" />
        <Paragraph>
          I work as a front-end engineer at Hussle right now but I also work on
          other side projects that are not only development related. If you want
          to see my development related things, I recommend that you visit my{" "}
          <Link color="white" href="https://github.com/rathesDot" underlined>
            Github profile
          </Link>
          .
        </Paragraph>
        <Section>
          <Heading level="heading2">Learn Tamil Online</Heading>
          <Paragraph>
            The side project I am working on right now is to provide a platform
            for people that want to learn my mother language Tamil.
          </Paragraph>
          <Paragraph>
            In a first step, I'm working on a small book that I will use as the
            foundation to build an app and a community around learning the
            language Tamil and also learning about the Tamil culture and
            history.
          </Paragraph>
          <Paragraph>
            Learn more about the project on{" "}
            <Link color="white" underlined href="https://learn-tamil.com">
              https://learn-tamil.com
            </Link>
          </Paragraph>
        </Section>
        <Section>
          <Heading level="heading2">Public Speaking</Heading>
          <Paragraph>
            In January 2019, I gave my first tech-related talk. Since it was an
            exciting experience, I will hopefully fill up this list with a few
            more talks, not only about tech-related stuff but also about society
            related things as I did a few times in the past already.
          </Paragraph>
          <Paragraph>
            If you want me to give a talk at your meetup, conference, or even
            private events, feel free to message me. You can find the abstracts
            of my current talks below. Each of them is possible as a 20-, 30-,
            and 45-minutes talk.
          </Paragraph>
          <List title="Tech Talks">
            <ListItem
              link={data.rddUk.publicURL}
              subtitle="February 2019 at PHP UK Unconference"
            >
              Introduction to Readme Driven Development
            </ListItem>
            <ListItem
              link={data.rdd.publicURL}
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

export const query = graphql`
  query {
    rdd: file(relativePath: { eq: "talks/readme-driven-development.pdf" }) {
      publicURL
    }
    rddUk: file(
      relativePath: { eq: "talks/readme-driven-development-phpuk.pdf" }
    ) {
      publicURL
    }
  }
`

export default Work
