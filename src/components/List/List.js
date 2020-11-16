import React from "react"
import styledComponent from "styled-components"
import { Link as RouterLink } from "gatsby"
import { styled } from "../../../stitches.config"

import { Heading4, TextBody, TextSmall } from "../Typography"
import { Box, Link } from "../"

const Title = styledComponent(TextBody)`
  margin: ${(props) =>
    props.subtitle ? props.theme.spacing[4] : props.theme.spacing[2]}
    0;
`

const Subtitle = styled(TextSmall, {
  display: "block",
})

const Item = ({ children, subtitle, link }) => {
  const isExternalLink = link && link.startsWith("http")

  return (
    <Title element="li" color="white" subtitle={subtitle}>
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

export const List = ({ title, children, ...props }) => (
  <Box {...props}>
    <Heading4 color="silver">{title}</Heading4>
    <Box element="ul">{children}</Box>
  </Box>
)

List.Item = Item
