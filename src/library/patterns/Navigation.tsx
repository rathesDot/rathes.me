import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { styled } from "../../../stitches.config"

import { Link } from "../components/typography/Link"

export const MenuItem = styled("div", {
  display: "block",
  color: "$gray600",
  fontSize: "$sm",
  fontFamily: "$base",
  fontWeight: "$bold",

  "> a": {
    color: "$gray600",
    textDecoration: "none",
  },

  mini: {
    fontSize: "$base",
  },

  mobile: {
    fontSize: "$lg",
  },
})

const MenuBar = styled("nav", {
  alignItems: "center",
  display: "flex",
})

export const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      resume: file(relativePath: { eq: "files/resume.pdf" }) {
        publicURL
      }
    }
  `)

  return null
}
