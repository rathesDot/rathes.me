import React from "react"

const ReadingList = ({ children }) => <ul>{children}</ul>

export const Book = ({ author, title, link }) => (
  <li className="mb-3 leading-normal">
    <a className="text-white text-lg mb-2 " href={link}>
      <span className="block text-silver-darker tracking-wider text-sm">
        {author}
      </span>
      {title}
    </a>
  </li>
)

export default ReadingList
