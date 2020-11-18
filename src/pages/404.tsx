import React from "react"

import { PageLayout } from "../layouts"
import { Heading1, List, ListItem, Paragraph, Meta } from "../components"
import { styled } from "../../stitches.config"

const Container = styled("div", {
  maxWidth: 640,
})

const NotFoundPage = () => (
  <PageLayout>
    <Meta title="404: Not found" />
    <Container>
      <Heading1>
        Looks like you are looking for a page that does not exist.
      </Heading1>
      <Paragraph>
        If you came here from a Google Search, feel free to go back and try a
        different search term. Otherwise, here are some things that you might
        have been looking for:
      </Paragraph>
      <Paragraph>
        <List>
          <ListItem link="/">The homepage</ListItem>
          <ListItem link="/writings">My blog posts</ListItem>
          <ListItem link="/about">Information about myself</ListItem>
        </List>
      </Paragraph>
    </Container>
  </PageLayout>
)

export default NotFoundPage
