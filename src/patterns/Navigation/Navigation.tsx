// @todo: Handle navigation active styles
import React, { useContext, useEffect, useMemo, useState } from "react"
import Link from "next/link"

import { styled } from "../../../stitches.config"

import { ThemeContext } from "../../layouts/PageLayout/PageLayout"

import { Heading, Logo } from "../../components"

const MenuItem = styled("span", {
  color: "$slate12",
  display: "block",
  padding: "$1 0",
  fontFamily: "$display",
  fontWeight: "500",

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
  position: "fixed",
  right: 0,
  top: 0,
  zIndex: 99,

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
  alignItems: "center",
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

const NavigatonBarSection = styled("div", {
  display: "flex",

  "> a": {
    display: "flex",
  },
})

const IconButton = styled("button", {
  borderRadius: "4px",
  color: "$slate12",
  display: "inline-block",
  padding: "$2",

  "&:hover": {
    background: "$slate4",
  },
})

const ThemeSwitch: React.FC<{
  theme: "dark" | "light"
  onToggle: () => void
}> = ({ onToggle, theme }) => {
  if (theme === undefined) {
    return null
  }

  if (theme === "dark") {
    return (
      <IconButton aria-label="Switch to light theme" onClick={onToggle}>
        <svg
          width={24}
          height={24}
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx={12} cy={12} r={5} />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </IconButton>
    )
  }

  return (
    <IconButton aria-label="Switch to dark theme" onClick={onToggle}>
      <svg
        width={24}
        height={24}
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </IconButton>
  )
}

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
    <IconButton
      aria-label={isOpen ? "Close Navigation" : "Open Navigation"}
      onClick={onToggle}
    >
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
    </IconButton>
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
  const [isOpen, setIsOpen] = useState(false)

  const { toggleTheme, theme } = useContext(ThemeContext)

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false)
      document.body.style.overflow = ""
    } else {
      setIsOpen(true)
      document.body.style.overflow = "hidden"
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <Container isOpen={isOpen}>
      <NavigationBar isOpen={isOpen}>
        <NavigatonBarSection>
          <Link href="/" aria-label="Home">
            <IconButton as="span">
              <Logo />
            </IconButton>
          </Link>
        </NavigatonBarSection>
        <NavigatonBarSection>
          <ThemeSwitch theme={theme} onToggle={toggleTheme}>
            Toggle
          </ThemeSwitch>
          <Hamburger isOpen={isOpen} onToggle={toggleMenu} />
        </NavigatonBarSection>
      </NavigationBar>
      <Menu isOpen={isOpen}>
        <Heading level="heading4" color="slate11">
          Navigation
        </Heading>
        <Link href="/about">
          <a>
            <MenuItem size={{ "@initial": "default", "@sm": "lg" }}>
              About
            </MenuItem>
          </a>
        </Link>

        <Link href="/files/resume.pdf">
          <a aria-label="Resume">
            <MenuItem size={{ "@initial": "default", "@sm": "lg" }}>
              Resume
            </MenuItem>
          </a>
        </Link>

        <Link href="/work">
          <a>
            <MenuItem size={{ "@initial": "default", "@sm": "lg" }}>
              Work
            </MenuItem>
          </a>
        </Link>

        <Link href="/writings">
          <a>
            <MenuItem size={{ "@initial": "default", "@sm": "lg" }}>
              Writings
            </MenuItem>
          </a>
        </Link>
      </Menu>
      <Menu isOpen={isOpen}>
        <Heading level="heading4" color="slate11">
          Current Projects
        </Heading>
        <a href="https://learn-tamil.com">
          <MenuItem size={{ "@initial": "default", "@sm": "lg" }}>
            Learn Tamil
          </MenuItem>
        </a>
        <a href="https://getmaxout.app">
          <MenuItem size={{ "@initial": "default", "@sm": "lg" }}>
            Maxout
          </MenuItem>
        </a>
      </Menu>
    </Container>
  )
}

export { Navigation }
