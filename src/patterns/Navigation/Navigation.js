import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled, { useTheme } from "styled-components"

import { Logo } from "../../components"

const Separator = styled.span`
  display: inline-block;
  margin: 0 8px;
  color: ${(props) => props.theme.colors.silver.default};
  font-size: ${(props) => props.theme.fontSize.lg};
  font-family: ${(props) => props.theme.fontFamily.default};

  @media (max-width: 374px) {
    margin: 0 4px;
    font-size: ${(props) => props.theme.fontSize.base};
  }

  &:before {
    content: "/";
  }
`

const MenuItem = styled.span`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-family: ${(props) => props.theme.fontFamily.default};
  font-weight: 600;

  @media (max-width: 375px) {
    font-size: ${(props) => props.theme.fontSize.base};
  }

  @media (max-width: 320px) {
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`

const Container = styled.nav`
  align-items: center;
  color: ${(props) => props.theme.colors.silver.default};
  display: flex;
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
    <Container>
      <Link
        to="/"
        aria-label="Home"
        activeStyle={{ color: theme.colors.white.default }}
      >
        <MenuItem>
          <Logo />
        </MenuItem>
      </Link>
      <Separator />
      <Link activeStyle={{ color: theme.colors.white.default }} to="/about">
        <MenuItem>About</MenuItem>
      </Link>
      <Separator />
      <a href={data.resume.publicURL} aria-label="Resume">
        <MenuItem>Resume</MenuItem>
      </a>
      <Separator />
      <Link activeStyle={{ color: theme.colors.white.default }} to="/work">
        <MenuItem>Work</MenuItem>
      </Link>
      <Separator />
      <Link activeStyle={{ color: theme.colors.white.default }} to="/writings">
        <MenuItem>Writings</MenuItem>
      </Link>
    </Container>
  )
}

export { Navigation }
