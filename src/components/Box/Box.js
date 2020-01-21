import React from "react"
import styled from "styled-components"

const Box = ({ children, element }) => {
  const Element = styled(element || "div")

  return <Element>{children}</Element>
}

export default Box
