import React from "react"

import { PageLayout } from "../layouts"
import { Box, Heading1, List, Paragraph, Meta } from "../components"

const NotFoundPage = () => (
  <PageLayout>
    <Meta title="404: Not found" />
    <Box maxWidth="640px">
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
          <List.Item link="/">The homepage</List.Item>
          <List.Item link="/writings">My blog posts</List.Item>
          <List.Item link="/about">Information about myself</List.Item>
        </List>
      </Paragraph>
    </Box>
  </PageLayout>
)

export default NotFoundPage
