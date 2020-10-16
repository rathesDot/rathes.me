import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { reset } from "stitches-reset"

import { styled, css } from "../../../stitches.config"

import { Navigation } from "../patterns/Navigation"
import { Footer } from "../patterns/Footer"

import { global } from "./global"

const MainContainer = styled("main", {
  backgroundColor: "$black",
  color: "$gray600",
  display: "flex",
  flexDirection: "column",
  fontFamily: "$default",
  justifyContent: "space-between",
  minHeight: "100vh",
  padding: "40px $4",

  tablet: {
    padding: "60px 0 32px 60px",
  },

  desktop: {
    padding: "110px 0 32px 110px",
  },
})

const BaseLayout: React.FC = ({ children }) => {
  css.global(reset)()
  const data = useStaticQuery(graphql`
    query {
      resume: file(relativePath: { eq: "files/resume.pdf" }) {
        publicURL
      }
    }
  `)

  return (
    <MainContainer>
      <Navigation
        items={[
          { title: "About", path: "/about" },
          { title: "Resume", path: data.resume.publicURL, isFile: true },
          { title: "Work", path: "/work" },
          { title: "Writings", path: "/writings" },
          { title: "UI", path: "/ui" },
        ]}
      />
      {children}
      <Footer />
    </MainContainer>
  )
}

export { BaseLayout }
