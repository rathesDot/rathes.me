import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import sc from "styled-components"

import { styled } from "../../../stitches.config"

import { Logo } from "../../components"

const Separator = styled("span", {
  color: "$gray600",
  display: "inline-block",
  fontFamily: "$default",
  fontSize: "$base",
  margin: "0 $2",

  variants: {
    size: {
      default: {
        margin: "0 $1",
        fontSize: "$base",
      },
      large: {
        margin: "0 $2",
        fontSize: "$lg",
      },
    },
  },

  "::before": {
    content: "'/'",
  },
})

const MenuItem = sc.span`
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

const Container = sc.nav`
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

  return (
    <Container>
      <Link to="/" aria-label="Home" activeStyle={{ color: "#FFF" }}>
        <MenuItem>
          <Logo />
        </MenuItem>
      </Link>
      <Separator size={{ initial: "default", xs: "large" }} />
      <Link activeStyle={{ color: "#FFF" }} to="/about">
        <MenuItem>About</MenuItem>
      </Link>
      <Separator size={{ initial: "default", xs: "large" }} />
      <a href={data.resume.publicURL} aria-label="Resume">
        <MenuItem>Resume</MenuItem>
      </a>
      <Separator size={{ initial: "default", xs: "large" }} />
      <Link activeStyle={{ color: "#FFF" }} to="/work">
        <MenuItem>Work</MenuItem>
      </Link>
      <Separator size={{ initial: "default", xs: "large" }} />
      <Link activeStyle={{ color: "#FFF" }} to="/writings">
        <MenuItem>Writings</MenuItem>
      </Link>
    </Container>
  )
}

export { Navigation }
