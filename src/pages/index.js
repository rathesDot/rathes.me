import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello World!</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
