import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Link from "../components/Link"

import { Link as RouterLink } from "gatsby"
import { Box } from "../components/Box"
import { Heading1, Paragraph } from "../components/Typography"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Box maxWidth="640px">
      <Heading1>
        Looks like you are looking for a page that does not exist.
      </Heading1>
      <Paragraph>
        Here are some things that you might have been looking for:
      </Paragraph>
      <p>
        <Link
          element={RouterLink}
          color="white"
          to="/"
          className="block text-lg mb-2"
        >
          The homepage
        </Link>
        <Link
          element={RouterLink}
          color="white"
          to="/writings"
          className="block text-lg mb-2"
        >
          Things I write about
        </Link>
        <Link
          element={RouterLink}
          color="white"
          to="/about"
          className="block text-lg mb-2"
        >
          Information about myself
        </Link>
      </p>
      <Paragraph>
        Or if you came here from a Google Search, feel free to go back and try a
        different search term.
      </Paragraph>
    </Box>
  </Layout>
)

export default NotFoundPage
