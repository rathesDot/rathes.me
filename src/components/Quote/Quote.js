import React from "react"

import { Box } from "../Box/Box"
import styled from "styled-components"

const QuoteContainer = styled(Box)`
  p {
    margin: 0;
    color: ${(props) => props.theme.colors.white.default};
    font-size: ${(props) => props.theme.fontSize["2xl"]};
    line-height: 1.35;
  }
`

const Quote = ({ children }) => (
  <QuoteContainer
    element="blockquote"
    backgroundColor="black"
    backgroundTint="light"
    marginTop={8}
    marginBottom={8}
    padding={4}
    textColor="white"
    fontSize="2xl"
  >
    {children}
  </QuoteContainer>
)

export default Quote
