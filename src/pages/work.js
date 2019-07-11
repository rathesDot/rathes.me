import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Work = ({ data }) => (
  <Layout className="p-4">
    <SEO title="Work" />
    <h1 className="text-3xl font-bold leading-none text-white break-words xs:text-4xl">
      My work
    </h1>
    <p>
      I do work as a web developer at Teamleader right now but I also work on
      other side projects that are not only development related. If you want to
      see my development related things, I recommend that you visit my{" "}
      <a className="text-white underline" href="https://github.com/rathesDot">
        Github profile
      </a>
      .
    </p>
    <p>
      Below you can find my current side projects that are all still work in
      progress.
    </p>
    <ul className="my-10">
      <li className="my-6">
        <a
          className="block font-bold text-white text-xl leading-tight"
          href="#"
        >
          A Guide To Basic Tamil Grammar
        </a>
      </li>
      <li className="my-6">
        <a
          className="block font-bold text-white text-xl leading-tight"
          href="#"
        >
          Localization as a Service for products
        </a>
      </li>
      <li className="my-6">
        <a
          className="block font-bold text-white text-xl leading-tight"
          href="#"
        >
          Track the progress of your fitness
        </a>
      </li>
    </ul>
    <p>
      I do also re-design existing interfaces and websites to improve my skills
      in creating user interfaces with a good UX.
    </p>
  </Layout>
)

export default Work
