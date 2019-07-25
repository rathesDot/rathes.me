import React, { useState } from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Work = ({ data }) => {
  const [isModalOpen, setModalState] = useState(false)

  const openModal = () => {
    setModalState(true)
  }

  const closeModal = () => {
    setModalState(false)
  }

  return (
    <Layout className="p-4 relative md:p-8">
      {isModalOpen && (
        <div className="bg-white text-black fixed inset-x-4 top-1/2 flex flex-col rounded -translateY-1/2 md:w-2/3 md:left-0 md:right-0 md:mx-auto">
          <button
            className="text-silver-darkest px-4 pt-4 pb-1 tracking-wider text-sm uppercase self-end"
            onClick={closeModal}
          >
            Close
          </button>
          <div className="p-4">
            <h1 className="text-xl leading-none">Sorry!</h1>
            <p className="leading-normal">
              Unfortunately, I haven't managed to finish all pages on this
              website. But I'm doing my best to get all pages online as soon as
              possible!
            </p>
            <p className="leading-normal">
              I you want to get information on this project, feel free to reach
              out to me!
            </p>
          </div>
        </div>
      )}
      <SEO title="Work" />
      <section className="md:max-w-570px md:text-lg">
        <h1 className="text-3xl font-bold leading-none text-white break-words xs:text-4xl">
          My work
        </h1>
        <p>
          I do work as a web developer at Teamleader right now but I also work
          on other side projects that are not only development related. If you
          want to see my development related things, I recommend that you visit
          my{" "}
          <a
            className="text-white underline"
            href="https://github.com/rathesDot"
          >
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
            <button
              className="block text-white text-lg leading-tight text-left"
              href="#"
              onClick={openModal}
            >
              A Guide To Basic Tamil Grammar
            </button>
          </li>
          <li className="my-6">
            <button
              className="block text-white text-lg leading-tight text-left"
              href="#"
              onClick={openModal}
            >
              Localization as a Service for products
            </button>
          </li>
          <li className="my-6">
            <button
              className="block text-white text-lg leading-tight text-left"
              href="#"
              onClick={openModal}
            >
              Track the progress of your fitness
            </button>
          </li>
        </ul>
        <h2 className="text-3xl font-bold leading-none text-white break-words xs:text-4xl">
          Talks
        </h2>
        <p>
          In January 2019, I gave my first tech-related talk. Since it was an
          exciting experience, I will hopefully fill up this list with a few
          more talks, not only about tech-related stuff but also about society
          related things as I did a few times in the past already.
        </p>
        <p>
          If you want me to give a talk at your meetup, conference or even
          private events, feel free to message me.
        </p>
        <div className="mt-8">
          <h2 className="text-silver-darker tracking-wider text-sm mb-4">
            Tech Talks
          </h2>
          <ul>
            <li className="mb-4 leading-tight">
              <a className="block text-white text-lg" href={data.rdd.publicURL}>
                Introduction to Readme Driven Development
              </a>
              <span>
                (January 2019 at <a href="https://php.gent">PHP Gent</a>)
              </span>
            </li>
            <li className="mb-4 leading-tight">
              <a
                className="block text-white text-lg"
                href={data.rddUk.publicURL}
              >
                Introduction to Readme Driven Development
              </a>
              <span>
                (February 2019 at{" "}
                <a href="https://www.phpconference.co.uk/">
                  PHP UK Unconference
                </a>
                )
              </span>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

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

export default Work
