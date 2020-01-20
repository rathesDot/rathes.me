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

const MenuItem = styled(Link)`
  color: ${props =>
    props.isActive
      ? props.theme.colors.white.default
      : props.theme.colors.silver.default};
  font-size: ${props => props.theme.fontSize.lg};
  font-family: ${props => props.theme.fontFamily.default};
  font-weight: 600;
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
        <MenuItem element={RouterLink} to="/about">
          About
        </MenuItem>
        <Separator />
        <MenuItem href={data.resume.publicURL} aria-label="Resume">
          Resume
        </MenuItem>
        <Separator />
        <MenuItem element={RouterLink} to="/work">
          Work
        </MenuItem>
        <Separator />
        <MenuItem element={RouterLink} to="/writings">
          Writings
        </MenuItem>
      </div>
    </div>
  )
}

export default Navigation
