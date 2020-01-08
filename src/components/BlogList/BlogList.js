import React from "react"
import styled from "styled-components"
import { Link as RouterLink } from "gatsby"

import Link from "../Link"

const BlogListTitle = styled.h2`
  color: ${props => props.theme.colors.silver.darker};
  letter-spacing: ${props => props.theme.letterSpacing.wider};
  font-size: ${props => props.theme.fontSize.sm};
  margin-bottom: ${props => props.theme.spacing[2]};
`

const BlogLink = styled(Link)`
  display: block;
  font-size: ${props => props.theme.fontSize.lg};
  margin-bottom: ${props => props.theme.spacing[2]};
`

const BlogList = ({ children, title, ...rest }) => (
  <div {...rest}>
    {title && <BlogListTitle>{title}</BlogListTitle>}
    {children}
  </div>
)

BlogList.Article = ({ title, link }) => {
  const isExternal = link.startsWith("http")

  if (isExternal) {
    return (
      <BlogLink color="white" href={link}>
        {title}
      </BlogLink>
    )
  }

  return (
    <BlogLink element={RouterLink} color="white" to={link}>
      {title}
    </BlogLink>
  )
}

export default BlogList
