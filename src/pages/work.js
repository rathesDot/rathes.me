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
    <Layout className="p-4 relative">
      {isModalOpen && (
        <div className="bg-white text-black fixed inset-x-4 top-1/2 flex flex-col rounded -translateY-1/2">
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
      <h1 className="text-3xl font-bold leading-none text-white break-words xs:text-4xl">
        My work
      </h1>
      <p>
        I do work as a web developer at Teamleader right now but I also work on
        other side projects that are not only development related. If you want
        to see my development related things, I recommend that you visit my{" "}
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
            onClick={openModal}
          >
            A Guide To Basic Tamil Grammar
          </a>
        </li>
        <li className="my-6">
          <a
            className="block font-bold text-white text-xl leading-tight"
            href="#"
            onClick={openModal}
          >
            Localization as a Service for products
          </a>
        </li>
        <li className="my-6">
          <a
            className="block font-bold text-white text-xl leading-tight"
            href="#"
            onClick={openModal}
          >
            Track the progress of your fitness
          </a>
        </li>
      </ul>
      <p>
        I do also re-design existing interfaces and websites to improve my
        skills in creating user interfaces with a good UX.
      </p>
    </Layout>
  )
}

export default Work
