import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Work = ({ data }) => (
  <Layout className="p-4">
    <SEO title="Work" />
    <h1 className="text-3xl font-bold leading-none text-white break-words xs:text-4xl">
      My work
    </h1>
  </Layout>
)

export default Work
