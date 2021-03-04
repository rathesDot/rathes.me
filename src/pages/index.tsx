import React from "react"
import { PageProps } from "gatsby"

import { styled } from "../../stitches.config"

import { List, ListItem, Meta } from "../components"
import { PageLayout } from "../layouts"

const Container = styled("section", {})

const Introduction = styled("h1", {
  color: "$white",
  fontFamily: "$default",
  fontSize: "$3xl",
  fontWeight: 600,
  lineHeight: "$400",
  overflowWrap: "break-word",
  maxWidth: 640,

  variants: {
    size: {
      default: {
        fontSize: "$3xl",
        margin: "$16 0",
      },
      large: {
        fontSize: "$4xl",
        margin: "$20 0",
      },
    },
  },
})

const IndexPage: React.FC<PageProps> = () => (
  <PageLayout>
    <Meta title="Home" />
    <Container>
      <Introduction size={{ initial: "default", xs: "large" }}>
        Hi there, I’m Rathes Sachchithananthan and I’m a web developer currently
        living in London
      </Introduction>
      <List title="About Me">
        <ListItem subtitle="Working at" link="https://www.hussle.com">
          Hussle
        </ListItem>
        <ListItem
          subtitle="Living In"
          link="https://goo.gl/maps/E9c5uw5SLjSbLZ9G9"
        >
          London
        </ListItem>
        <ListItem
          subtitle="Working at"
          link="https://twitter.com/rswebdesigner"
        >
          @rswebdesigner
        </ListItem>
      </List>
    </Container>
  </PageLayout>
)

export default IndexPage
