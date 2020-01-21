import React from "react"
import styled from "styled-components"

import { Heading4, TextBody, TextSmall } from "../Typography"
import { Box } from "../Box"

const Item = ({ children, subtitle }) => {
  const Title = styled(TextBody)`
    margin: ${props => props.theme.spacing[2]} 0;
  `

  const Subtitle = styled(TextSmall)`
    display: block;
  `

  return (
    <Title element="li" color="white">
      {children}
      <Subtitle color="silver">{subtitle}</Subtitle>
    </Title>
  )
}

const List = ({ title, children, ...props }) => (
  <Box {...props}>
    <Heading4>{title}</Heading4>
    <Box element="ul">{children}</Box>
  </Box>
)

List.Item = Item

export default List
