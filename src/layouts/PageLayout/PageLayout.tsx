import React from "react"
import styled, { ThemeProvider } from "styled-components"

import { Box } from "../../components"

import { Footer, Navigation } from "../../patterns"

import Global from "./global"
import theme from "../../../theme"

const MainContainer = styled(Box)`
  padding: 40px ${(props) => props.theme.spacing["4"]};

  @media (min-width: 768px) {
    padding: 60px 0 32px 60px;
  }

  @media (min-width: 1200px) {
    padding: 110px 0 32px 110px;
  }
`

const PageLayout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global />
    <MainContainer
      backgroundColor="black"
      display="flex"
      element="main"
      flexDirection="column"
      fontFamily="default"
      justifyContent="space-between"
      minHeight="100vh"
      textColor="silver"
    >
      <Navigation />
      {children}
      <Footer />
    </MainContainer>
  </ThemeProvider>
)

export { PageLayout }