import React from "react"

const BlogList = ({ children, title, ...rest }) => (
  <div {...rest}>
    {title && (
      <h2 className="text-silver-darker tracking-wider text-sm mb-2">
        {title}
      </h2>
    )}
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
