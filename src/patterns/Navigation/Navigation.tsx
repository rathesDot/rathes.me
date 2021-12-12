import React, { useMemo, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { styled } from "../../../stitches.config"

import { Heading, Logo } from "../../components"

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
  color: "$slate12",
  display: "block",
  padding: "$1 0",
  fontFamily: "$display",
  fontWeight: "500",

  [`& ${Separator}`]: {
    color: "$slate12",
    fontSize: "$lg",
    marginLeft: "0",
  },

  variants: {
    size: {
      default: {
        fontSize: "$lg",
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

  variants: {
    isOpen: {
      true: {
        background: "$slate4",
      },
      false: {
        background: "transparent",
        position: "relative",
      },
    },
  },
})

const NavigationBar = styled("div", {
  boxSizing: "content-box",
  color: "$slate12",
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "640px",

  variants: {
    isOpen: {
      true: {
        padding: "$8",

        "@md": {
          padding: "$16",
        },

        "@lg": {
          padding: "$24 $32",
        },
      },
      false: {
        marginBottom: "$16",
        padding: "0",

        "@lg": {
          marginBottom: "$32",
        },
      },
    },
  },
})

const Hamburger: React.FC<{ isOpen: boolean; onToggle: () => void }> = ({
  isOpen,
  onToggle,
}) => {
  const iconPaths = useMemo(
    () =>
      isOpen
        ? ["M15 5L5 15", "M5 5L15 15"]
        : ["M2.5 7.5H17.5", "M2.5 12.5H17.5"],
    [isOpen]
  )

  return (
    <button onClick={onToggle}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {iconPaths.map((p, i) => (
          <path
            key={i}
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

const Menu = styled("div", {
  paddingLeft: "$8",
  paddingRight: "$8",
  marginTop: "$8",

  variants: {
    isOpen: {
      true: {
        display: "block",

        "@md": {
          paddingLeft: "$16",
          paddingRight: "$16",
        },

        "@lg": {
          paddingLeft: "$32",
          paddingRight: "$32",
        },
      },
      false: {
        display: "none",
      },
    },
  },
})

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      resume: file(relativePath: { eq: "files/resume.pdf" }) {
        publicURL
      }
    }
  `)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container isOpen={isOpen}>
      <NavigationBar isOpen={isOpen}>
        <Link to="/" aria-label="Home" activeStyle={{ color: "#FFF" }}>
          <Logo />
        </Link>
        <Hamburger isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      </NavigationBar>
      <Menu isOpen={isOpen}>
        <Heading level="heading4" color="slate11">
          Navigation
        </Heading>
        <Link activeStyle={{ color: "#FFF" }} to="/about">
          <MenuItem size={{ "@initial": "default", "@sm": "lg" }}>
            <Separator size={{ "@initial": "default", "@xs": "large" }} />
            About
          </MenuItem>
        </Link>

        <a href={data.resume.publicURL} aria-label="Resume">
          <MenuItem size={{ "@initial": "default", "@sm": "lg" }}>
            <Separator size={{ "@initial": "default", "@xs": "large" }} />
            Resume
          </MenuItem>
        </a>

        <Link activeStyle={{ color: "#FFF" }} to="/work">
          <MenuItem size={{ "@initial": "default", "@sm": "lg" }}>
            <Separator size={{ "@initial": "default", "@xs": "large" }} />
            Work
          </MenuItem>
        </Link>

        <Link activeStyle={{ color: "#FFF" }} to="/writings">
          <MenuItem size={{ "@initial": "default", "@sm": "lg" }}>
            <Separator size={{ "@initial": "default", "@xs": "large" }} />
            Writings
          </MenuItem>
        </Link>
      </Menu>
      <Menu isOpen={isOpen}>
        <Heading level="heading4" color="slate11">
          Current Projects
        </Heading>
        <a href="https://learn-tamil.com">
          <MenuItem size={{ "@initial": "default", "@sm": "lg" }}>
            <Separator size={{ "@initial": "default", "@xs": "large" }} />
            Learn Tamil
          </MenuItem>
        </a>
        <a href="https://getmaxout.app">
          <MenuItem size={{ "@initial": "default", "@sm": "lg" }}>
            <Separator size={{ "@initial": "default", "@xs": "large" }} />
            Maxout
          </MenuItem>
        </a>
      </Menu>
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
