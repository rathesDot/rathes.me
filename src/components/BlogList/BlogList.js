import React from "react"
import styled from "styled-components"

const BlogListTitle = styled.h2`
  color: #ccc;
  letter-spacing: 0.05em;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`

const BlogList = ({ children, title, ...rest }) => (
  <div {...rest}>
    {title && <BlogListTitle>{title}</BlogListTitle>}
    {children}
  </div>
)

BlogList.Article = ({ title, link, linkElement }) => {
  const Link = linkElement ?? `a`
  return (
    <Link className="block text-white text-lg mb-2" href={link}>
      {title}
    </Link>
  )
}

export default BlogList
