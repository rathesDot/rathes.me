import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { styled } from "../../../stitches.config"

import { Logo } from "../../components"

const Separator = styled("span", {
  color: "$slate11",
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

  "&::before": {
    content: "'/'",
  },
})

const MenuItem = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: 600,

  variants: {
    size: {
      default: {
        fontSize: "$base",
      },
      lg: {
        fontSize: "$lg",
      },
    },
  },
})

const Container = styled("nav", {
  alignItems: "center",
  color: "$slate11",
  display: "flex",
})

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
        <MenuItem size={{ "@xs": "default", "@sm": "lg" }}>
          <Logo />
        </MenuItem>
      </Link>
      <Separator size={{ initial: "default", "@xs": "large" }} />
      <Link activeStyle={{ color: "#FFF" }} to="/about">
        <MenuItem size={{ "@xs": "default", "@sm": "lg" }}>About</MenuItem>
      </Link>
      <Separator size={{ initial: "default", "@xs": "large" }} />
      <a href={data.resume.publicURL} aria-label="Resume">
        <MenuItem size={{ "@xs": "default", "@sm": "lg" }}>Resume</MenuItem>
      </a>
      <Separator size={{ initial: "default", "@xs": "large" }} />
      <Link activeStyle={{ color: "#FFF" }} to="/work">
        <MenuItem size={{ "@xs": "default", "@sm": "lg" }}>Work</MenuItem>
      </Link>
      <Separator size={{ initial: "default", "@xs": "large" }} />
      <Link activeStyle={{ color: "#FFF" }} to="/writings">
        <MenuItem size={{ "@xs": "default", "@sm": "lg" }}>Writings</MenuItem>
      </Link>
    </Container>
  )
}

export { Navigation }
