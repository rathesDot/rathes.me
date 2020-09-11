import React from "react"
import { Link } from "gatsby"
import { styled } from "../../stitches.config"

import Layout from "../components/Layout"

import SEO from "../library/components/SEO"
import { Heading1 } from "../library/components/typography/Heading"
import { Paragraph } from "../library/components/typography/Paragraph"
import { List, Item } from "../library/components/List"

const Box = styled("div", {
  maxWidth: 640,
})

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Box>
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
          <Item>
            <Link to="/">The homepage</Link>
          </Item>
          <Item>
            <Link to="/writings">My blog posts</Link>
          </Item>
          <Item link="/about">
            <Link to="/about">Information about myself</Link>
          </Item>
        </List>
      </Paragraph>
    </Box>
  </Layout>
)

export default NotFoundPage
