import React from "react"
import { ThemeProvider } from "styled-components"

import { styled } from "../../../stitches.config"

import { Footer, Navigation } from "../../patterns"

import Global from "./global"
import theme from "../../../theme"

const MainContainer = styled("main", {
  backgroundColor: "$black",
  color: "$gray600",
  display: "flex",
  flexDirection: "column",
  fontFamily: "$default",
  justifyContent: "space-between",
  minHeight: "100vh",
  padding: "40px $4",

  variants: {
    padding: {
      md: {
        padding: "60px 0 32px 60px",
      },
      lg: {
        padding: "110px 0 32px 110px",
      },
    },
  },
})

const PageLayout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global />
    <MainContainer padding={{ md: "md", lg: "lg" }}>
      <Navigation />
      {children}
      <Footer />
    </MainContainer>
  </ThemeProvider>
)

export { PageLayout }
