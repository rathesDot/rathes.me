import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import SayHi from "../components/SayHi"
import Link from "../components/Link"
import { Box } from "../components/Box"
import { Paragraph, Heading2 } from "../components/Typography"
import List from "../components/List/List"
import { Separator } from "../components/Separator"

const Work = ({ data }) => {
  return (
    <Layout>
      <Box maxWidth="640px" marginTop={32} element="section">
        <SEO title="Work" />
        <Paragraph>
          I work as a front-end engineer at Hussle right now but I also work on
          other side projects that are not only development related. If you want
          to see my development related things, I recommend that you visit my{" "}
          <Link color="white" href="https://github.com/rathesDot" underlined>
            Github profile
          </Link>
          .
        </Paragraph>
        <Box marginTop={32} element="section">
          <Heading2>Learn Tamil Online</Heading2>
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
        </Box>
        <Box marginTop={32} element="section">
          <Heading2>Public Speaking</Heading2>
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
            <List.Item
              link={data.rddUk.publicURL}
              subtitle="February 2019 at PHP UK Unconference"
            >
              Introduction to Readme Driven Development
            </List.Item>
            <List.Item
              link={data.rdd.publicURL}
              subtitle="January 2019 at PHP Gent"
            >
              Introduction to Readme Driven Development
            </List.Item>
          </List>
          <Separator />
          <List title="Abstracts">
            <List.Item
              link="/talks/meetings"
              subtitle="Developing a meeting culture that employees will love"
            >
              You probably don’t need that meeting
            </List.Item>
            <List.Item
              link="/talks/managing-time"
              subtitle="A talk about what people call time management"
            >
              You can't manage time
            </List.Item>
          </List>
        </Box>
        <Box element="section" marginTop={32} marginBottom={32}>
          <SayHi />
        </Box>
      </Box>
    </Layout>
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
