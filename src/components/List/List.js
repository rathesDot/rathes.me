import React from "react"
import styled from "styled-components"
import { Link as RouterLink } from "gatsby"

import { Heading4, TextBody, TextSmall } from "../Typography"
import { Box } from "../Box"
import Link from "../Link"

const Item = ({ children, subtitle, link }) => {
  const Title = styled(TextBody)`
    margin: ${props =>
        subtitle ? props.theme.spacing[4] : props.theme.spacing[2]}
      0;
  `

  const Subtitle = styled(TextSmall)`
    display: block;
  `

  const isExternalLink = link && link.startsWith("http")

  return (
    <Title element="li" color="white">
      <Link
        {...(isExternalLink ? { href: link } : { to: link })}
        element={isExternalLink ? "a" : RouterLink}
      >
        {children}
        {subtitle && <Subtitle color="silver">{subtitle}</Subtitle>}
      </Link>
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
