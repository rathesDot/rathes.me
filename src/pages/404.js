import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout
    className="p-4 md:p-8"
    contentClassName="flex flex-col justify-center"
  >
    <SEO title="404: Not found" />
    <section className="md:max-w-570px md:text-lg">
      <h1 className="text-3xl font-bold leading-none text-white break-words xs:text-4xl">
        Looks like you are looking for a page that does not exist.
      </h1>
      <p>Here are some things that you might have been looking for:</p>
      <p>
        <Link to="/" className="block text-white text-lg mb-2">
          The homepage
        </Link>
        <Link to="/writings" className="block text-white text-lg mb-2">
          Things I write about
        </Link>
        <Link to="/about" className="block text-white text-lg mb-2">
          Information about myself
        </Link>
      </p>
      <p>
        Or if you came here from a Google Search, feel free to go back and try a
        different search term.
      </p>
    </section>
  </Layout>
)

export default NotFoundPage
