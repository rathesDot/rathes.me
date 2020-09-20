import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { styled } from "../../../stitches.config"

const MenuItem = styled("span", {
  display: "inline-block",
  color: "$gray600",
  fontSize: "$lg",
  fontFamily: "$base",
  margin: "0 $8",
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
