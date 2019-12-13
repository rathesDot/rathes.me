import React from "react"

const BlogList = ({ children }) => <div>{children}</div>

BlogList.Article = ({ title, link }) => (
  <a className="block text-white text-lg mb-2" href={link}>
    {title}
  </a>
)

export default BlogList
