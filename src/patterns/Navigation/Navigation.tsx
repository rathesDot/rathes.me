import React, { useMemo, useState } from "react"
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
  background: "$slate4",
  bottom: 0,
  left: 0,
  position: "absolute",
  right: 0,
  top: 0,
})

const NavigationBar = styled("div", {
  color: "$slate12",
  display: "flex",
  justifyContent: "space-between",
  padding: "$8",
})

const Hamburger = () => {
  const [isOpen, setOpenState] = useState(false)

  const iconPaths = useMemo(
    () =>
      isOpen
        ? ["M2.5 7.5H17.5", "M2.5 12.5H17.5"]
        : ["M15 5L5 15", "M5 5L15 15"],
    [isOpen]
  )

  return (
    <button onClick={() => setOpenState(!isOpen)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {iconPaths.map((p) => (
          <path
            d={p}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: "all 0.2s" }}
          />
        ))}
      </svg>
    </button>
  )
}

const Navigation = () => {
  return (
    <Container>
      <NavigationBar>
        <Link to="/" aria-label="Home" activeStyle={{ color: "#FFF" }}>
          <Logo />
        </Link>
        <Hamburger />
      </NavigationBar>
    </Container>
  )
}

const NavigationOld = () => {
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
