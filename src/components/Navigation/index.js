import React from "react"
import { Link as RouterLink, graphql, useStaticQuery } from "gatsby"
import styled, { useTheme } from "styled-components"

import Logo from "../Logo"

import Link from "../Link"

const Separator = styled.span`
  display: inline-block;
  margin: 0 8px;
  color: ${props => props.theme.colors.silver.default};
  font-size: ${props => props.theme.fontSize.lg};
  font-family: ${props => props.theme.fontFamily.default};

  @media (max-width: 374px) {
    margin: 0 4px;
    font-size: ${props => props.theme.fontSize.base};
  }

  &:before {
    content: "/";
  }
`

const MenuItem = styled(Link)`
  color: ${props =>
    props.isCurrent
      ? props.theme.colors.white.default
      : props.theme.colors.silver.default};
  font-size: ${props => props.theme.fontSize.lg};
  font-family: ${props => props.theme.fontFamily.default};
  font-weight: 600;

  @media (max-width: 374px) {
    font-size: ${props => props.theme.fontSize.base};
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

  const theme = useTheme()

  return (
    <div className="mb-20 flex items-center md:justify-between lg:mt-8 lg:max-w-4xl">
      <Link element={RouterLink} to="/" aria-label="Home">
        <Logo
          color={
            window.location.pathname === "/"
              ? theme.colors.white.default
              : theme.colors.silver.default
          }
        />
      </Link>
      <Separator />
      <MenuItem
        isCurrent={window.location.pathname === "/about"}
        element={RouterLink}
        to="/about"
      >
        About
      </MenuItem>
      <Separator />
      <MenuItem
        isCurrent={window.location.pathname === "/resume"}
        href={data.resume.publicURL}
        aria-label="Resume"
      >
        Resume
      </MenuItem>
      <Separator />
      <MenuItem
        isCurrent={window.location.pathname === "/work"}
        element={RouterLink}
        to="/work"
      >
        Work
      </MenuItem>
      <Separator />
      <MenuItem
        isCurrent={window.location.pathname === "/writings"}
        element={RouterLink}
        to="/writings"
      >
        Writings
      </MenuItem>
    </div>
  )
}

export default Navigation
