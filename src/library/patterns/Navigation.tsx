import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { styled } from "../../../stitches.config"

export const MenuItem = styled("a", {
  display: "inline-block",
  color: "$gray600",
  fontSize: "$sm",
  fontFamily: "$base",
  fontWeight: "$bold",
  padding: "$1 $4",
  textDecoration: "none",

  mini: {
    fontSize: "$base",
  },

  mobile: {
    fontSize: "$lg",
  },
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
