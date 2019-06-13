import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout className="p-4">
    <SEO title="Home" />
    <h1 className="text-5xl font-bold leading-none text-white">
      Hi there, I’m Rathes Sachchithananthan and I’m a web developer currently
      living in Belgium
    </h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
