import React from "react"

import { PageLayout } from "../layouts"
import { List, ListItem, Paragraph, Meta, Heading1 } from "../components"

const NotFoundPage = () => (
  <PageLayout>
    <Meta title="404: Not found" />
    <div className="max-w-xl p-8">
      <Heading1>
        Looks like you are looking for a page that does not exist.
      </Heading1>
      <Paragraph>
        If you came here from a Google Search, feel free to go back and try a
        different search term. Otherwise, here are some things that you might
        have been looking for:
      </Paragraph>
      <List className="flex flex-col gap-2">
        <ListItem link="/">The homepage</ListItem>
        <ListItem link="/writing">My blog posts</ListItem>
        <ListItem link="/about">Information about myself</ListItem>
      </List>
    </div>
  </PageLayout>
)

export default NotFoundPage
