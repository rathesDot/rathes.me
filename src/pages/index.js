import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import OverviewInfo from "../components/OverviewInfo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="flex flex-col justify-center flex-grow">
      <h1 className="text-4xl font-bold leading-none text-white break-words xs:text-5xl md:max-w-570px md:leading-tight">
        Hi there, I’m Rathes Sachchithananthan and I’m a web developer currently
        living in Belgium
      </h1>
      <OverviewInfo />
    </section>
  </Layout>
)

export default IndexPage
