import React from "react"

const TextSmall = ({ children, element }) => {
  const Element = element || "span"

  return <Element>{children}</Element>
}

export default TextSmall
