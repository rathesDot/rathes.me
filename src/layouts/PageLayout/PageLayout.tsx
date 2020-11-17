import React from "react"
import styled, { ThemeProvider } from "styled-components"

import { Footer, Navigation } from "../../patterns"

import Global from "./global"
import theme from "../../../theme"

const MainContainer = styled.main`
  background-color: ${(props) => props.theme.colors["black"]["default"]};
  color: ${(props) => props.theme.colors["silver"]["default"]};
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.fontFamily["default"]};
  justify-content: space-between;
  min-height: 100vh;
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
    <MainContainer>
      <Navigation />
      {children}
      <Footer />
    </MainContainer>
  </ThemeProvider>
)

export { PageLayout }
