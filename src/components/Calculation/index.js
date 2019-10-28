import React from "react"

const Note = ({ element, children }) => {
  const Element = element || "p"

  return (
    <Element className="bg-black-lighter p-4 -mx-4 font-mono">
      {children}
    </Element>
  )
}

export default Note
