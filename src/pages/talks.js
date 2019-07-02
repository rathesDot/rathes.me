import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Talks = ({ data }) => (
  <Layout className="p-4">
    <SEO title="Talks" />
    <h1 className="text-3xl font-bold leading-none text-white break-words xs:text-4xl">
      Talks
    </h1>
    <p>
      In January 2019, I gave my first tech-related talk. Since it was an
      exciting experience, I will hopefully fill up this list with a few more
      talks, not only about tech-related stuff but also about society related
      things as I did a few times in the past already.
    </p>
    <p>
      If you want me to give a talk at your meetup, conference or even private
      events, feel free to message me.
    </p>
    <div className="mt-8">
      <h2 className="text-silver-darker tracking-wider text-sm mb-4">
        Tech Talks
      </h2>
      <ul>
        <li className="mb-4 leading-tight">
          <a
            className="block text-white text-lg"
            target="_blank"
            href={data.rdd.publicURL}
          >
            Introduction to Readme Driven Development
          </a>
          <span>
            (January 2019 at <a href="https://php.gent">PHP Gent</a>)
          </span>
        </li>
        <li className="mb-4 leading-tight">
          <a
            className="block text-white text-lg"
            target="_blank"
            href={data.rddUk.publicURL}
          >
            Introduction to Readme Driven Development
          </a>
          <span>
            (February 2019 at{" "}
            <a href="https://www.phpconference.co.uk/">PHP UK Unconference</a>)
          </span>
        </li>
      </ul>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    rdd: file(relativePath: { eq: "talks/readme-driven-development.pdf" }) {
      publicURL
    }
    rddUk: file(
      relativePath: { eq: "talks/readme-driven-development-phpuk.pdf" }
    ) {
      publicURL
    }
  }
`

export default Talks
