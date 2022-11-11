import React from "react"

import { PageLayout } from "../layouts"
import { List, ListItem, Paragraph, Meta, Heading } from "../components"

const NotFoundPage = () => (
  <PageLayout>
    <Meta title="404: Not found" />
    <div className="max-w-[640px]">
      <Heading level="heading1">
        Looks like you are looking for a page that does not exist.
      </Heading>
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
    </div>
  </PageLayout>
)

export default NotFoundPage
