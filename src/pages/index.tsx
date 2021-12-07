import React from "react"
import { PageProps } from "gatsby"

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

const Lists = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  maxWidth: 640,

  variants: {
    spacing: {
      small: {
        marginTop: "$8",
        marginBottom: "$8",
      },
      large: {
        marginTop: "$20",
        marginBottom: "$8",
      },
    },
  },
})

const ListContainer = styled(List, {
  margin: "$8 10px $8 0",
  minWidth: 150,
  maxWidth: 200,
})

const IndexPage: React.FC<PageProps> = () => (
  <PageLayout>
    <Meta title="Home" />
    <Container>
      <Introduction
        size={{ "@initial": "small", "@xs": "default", "@sm": "large" }}
      >
        I’m Rathes Sachchithananthan, a front-end engineer living in{" "}
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
      <Lists spacing={{ "@initial": "small", "@md": "large" }}>
        <ListContainer title="About Me">
          <ListItem
            subtitlePosition="above"
            subtitle="Working at"
            link="https://www.hussle.com"
          >
            —
          </ListItem>
          <ListItem
            subtitlePosition="above"
            subtitle="Living In"
            link="https://goo.gl/maps/E9c5uw5SLjSbLZ9G9"
          >
            London
          </ListItem>
          <ListItem
            subtitlePosition="above"
            subtitle="Working at"
            link="https://twitter.com/rswebdesigner"
          >
            @rswebdesigner
          </ListItem>
        </ListContainer>
        <ListContainer title="Current Projects">
          <ListItem
            subtitle="A simple and beautiful way to plan, schedule and track your workouts"
            link="https://getmaxout.app/"
          >
            Maxout
          </ListItem>
          <ListItem
            subtitle="Book and App to make learning the Tamil language easier"
            link="https://learn-tamil.com/"
          >
            Learn Tamil Online
          </ListItem>
        </ListContainer>
        <ListContainer title="My Writing">
          <ListItem link="https://getmaxout.app/blog/introducing-maxout/">
            Building Maxout
          </ListItem>
          <ListItem link="/blog/en/review-2020/">Looking back at 2020</ListItem>
          <ListItem link="https://getmaxout.app/blog/introducing-maxout/">
            Introducing Maxout
          </ListItem>
          <ListItem link="/blog/en/how-to-slack/">How-To Slack</ListItem>
        </ListContainer>
      </Lists>
    </Container>
  </PageLayout>
)

export default IndexPage
