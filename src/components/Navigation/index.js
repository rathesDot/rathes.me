import React, { useState } from "react"
import { Link as RouterLink, graphql, useStaticQuery } from "gatsby"

import Logo from "../Logo"

import Link from "../Link"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      resume: file(relativePath: { eq: "files/resume.pdf" }) {
        publicURL
      }
    }
  `)

  return (
    <div className="mb-20 md:flex md:items-center md:justify-between lg:mt-8 lg:max-w-4xl">
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <Link element={RouterLink} to="/" aria-label="Home">
          <Logo />
        </Link>
        <Link
          element={RouterLink}
          to="/about"
          className="font-bold mr-2 lg:text-2xl lg:leading-none"
          color="white"
        >
          About
        </Link>
        <Link
          href={data.resume.publicURL}
          className="font-bold mr-2 lg:text-2xl lg:leading-none"
          aria-label="Resume"
          color="white"
        >
          <span
            className="font-normal text-xl mr-2 text-silver lg:text-3xl"
            dangerouslySetInnerHTML={{ __html: "&sol;" }}
          ></span>
          Resume
        </Link>
        <Link
          element={RouterLink}
          to="/work"
          className="font-bold mr-2 lg:text-2xl lg:leading-none"
          color="white"
        >
          <span
            className="font-normal text-xl mr-2 text-silver lg:text-3xl"
            dangerouslySetInnerHTML={{ __html: "&sol;" }}
          ></span>
          Work
        </Link>
        <Link
          element={RouterLink}
          to="/writings"
          className="font-bold lg:text-2xl lg:leading-none"
          color="white"
        >
          <span
            className="font-normal text-xl mr-2 text-silver lg:text-3xl"
            dangerouslySetInnerHTML={{ __html: "&sol;" }}
          ></span>
          Writings
        </Link>
      </div>
    </div>
  )
}

export default Navigation
