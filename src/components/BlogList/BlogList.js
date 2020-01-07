import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const BlogListTitle = styled.h2`
  color: ${props => props.theme.colors.silver.darker};
  letter-spacing: ${props => props.theme.letterSpacing.wider};
  font-size: ${props => props.theme.fontSize.sm};
  margin-bottom: ${props => props.theme.spacing[2]};
`

const InternalLink = styled(Link)`
  color: ${props => props.theme.colors.white};
  display: block;
  font-size: ${props => props.theme.fontSize.lg};
  margin-bottom: ${props => props.theme.spacing[2]};
`

const ExternalLink = styled.a`
  color: ${props => props.theme.colors.white};
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
    return <ExternalLink href={link}>{title}</ExternalLink>
  }

  return <InternalLink to={link}>{title}</InternalLink>
}

export default BlogList
