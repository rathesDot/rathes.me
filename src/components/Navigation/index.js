import React from "react"
import { Link as RouterLink, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Logo from "../Logo"

import Link from "../Link"

const Separator = styled.span`
  display: inline-block;
  margin: 0 4px;
  color: ${props => props.theme.colors.silver.default};
  font-size: ${props => props.theme.fontSize.lg};
  font-family: ${props => props.theme.fontFamily.default};

  &:before {
    content: "/";
  }
`

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
        <Separator />
        <Link
          element={RouterLink}
          to="/about"
          className="font-bold lg:text-2xl lg:leading-none"
          color="white"
        >
          About
        </Link>
        <Separator />
        <Link
          href={data.resume.publicURL}
          className="font-bold lg:text-2xl lg:leading-none"
          aria-label="Resume"
          color="white"
        >
          Resume
        </Link>
        <Separator />
        <Link
          element={RouterLink}
          to="/work"
          className="font-bold lg:text-2xl lg:leading-none"
          color="white"
        >
          Work
        </Link>
        <Separator />
        <Link
          element={RouterLink}
          to="/writings"
          className="font-bold lg:text-2xl lg:leading-none"
          color="white"
        >
          Writings
        </Link>
      </div>
    </div>
  )
}

export default Navigation
