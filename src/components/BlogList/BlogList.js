import React from "react"

const BlogList = ({ children }) => <div>{children}</div>

BlogList.Article = ({ title, link, linkElement }) => {
  const Link = linkElement ?? `a`
  return (
    <Link className="block text-white text-lg mb-2" href={link}>
      {title}
    </Link>
  )
}

export default BlogList
