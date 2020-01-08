import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Link from "../components/Link"

import { Link as RouterLink } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="flex flex-col justify-center flex-grow">
      <section className="md:max-w-570px md:text-lg">
        <h1 className="text-3xl font-bold leading-none text-white break-words xs:text-4xl">
          Looks like you are looking for a page that does not exist.
        </h1>
        <p>Here are some things that you might have been looking for:</p>
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
        <p>
          Or if you came here from a Google Search, feel free to go back and try
          a different search term.
        </p>
      </section>
    </section>
  </Layout>
)

export default NotFoundPage
