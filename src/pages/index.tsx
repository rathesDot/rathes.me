import React from "react"
import { NextPage } from "next"

import { styled } from "../../stitches.config"

import { Link, List, ListItem, Meta } from "../components"
import { PageLayout } from "../layouts"

const Container = styled("section", {})

const Introduction = styled("h1", {
  color: "$slate12",
  fontFamily: "$display",
  fontWeight: 600,
  lineHeight: "$400",
  overflowWrap: "break-word",
  maxWidth: 640,
  marginBottom: "$8",

  variants: {
    size: {
      small: {
        fontSize: "$lg",
      },
      default: {
        fontSize: "$xl",
      },
      large: {
        fontSize: "$2xl",
      },
    },
  },
})

const Section = styled("section", {
  marginBottom: "$24",
  marginTop: "$24",
})

const IndexPage: React.FC<NextPage> = () => (
  <PageLayout>
    <Meta title="Home" />
    <Container>
      <Introduction
        size={{ "@initial": "small", "@xs": "default", "@sm": "large" }}
      >
        I'm Rathes Sachchithananthan, a front-end engineer living in{" "}
        <Link underlined href="https://goo.gl/maps/E9c5uw5SLjSbLZ9G9">
          London
        </Link>{" "}
        interested in fitness, languages, books &amp; cooking.
      </Introduction>
      <Introduction
        as="p"
        size={{ "@initial": "small", "@xs": "default", "@sm": "large" }}
      >
        Currently, I work as a product engineer at{" "}
        <Link underlined href="https://www.intercom.com/">
          Intercom
        </Link>{" "}
        helping businesses building better customer relationships.
      </Introduction>
      <Introduction
        as="p"
        size={{ "@initial": "small", "@xs": "default", "@sm": "large" }}
      >
        Find out more about me on{" "}
        <Link underlined href="https://twitter.com/rswebdesigner">
          Twitter
        </Link>{" "}
        or{" "}
        <Link underlined href="https://www.instagram.com/tamizhographer/">
          Instagram
        </Link>
      </Introduction>

      <Section>
        <List title="Featured Posts">
          <ListItem link="/blog/en/introducing-maxout/">
            Building Maxout
          </ListItem>
          <ListItem link="/blog/en/from-couch-to-5k">
            From Couch to 5k — A simple way to get into running
          </ListItem>
          <ListItem link="/blog/en/how-to-slack/">How-To Slack</ListItem>
          <ListItem link="/blog/en/customer-experience-instead-of-features">
            Stop thinking in features. Start thinking in customer experience.
          </ListItem>
          <ListItem link="/blog/en/essential-metrics-saas-businesses/">
            Essential metrics for SaaS businesses
          </ListItem>
          <ListItem link="/blog/en/developing-meeting-culture-employees-love">
            Developing a meeting culture that your employees will love
          </ListItem>
        </List>
      </Section>
    </Container>
  </PageLayout>
)

export default IndexPage
