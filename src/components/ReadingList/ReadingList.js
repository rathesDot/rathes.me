import React from "react"

import Link from "../Link"

const ReadingList = ({ children }) => <ul className="list-none">{children}</ul>

export const Book = ({ author, title, link }) => (
  <li className="mb-3 leading-normal">
    <Link color="white" className="text-lg mb-2 " href={link}>
      <span className="block text-silver-darker tracking-wider text-sm">
        {author}
      </span>
      {title}
    </Link>
  </li>
)

export default ReadingList
