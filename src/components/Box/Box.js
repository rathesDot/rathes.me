import React from "react"
import styled from "styled-components"

const Box = ({ children, element, marginTop }) => {
  const Element = styled(element || "div")`
    margin-top: ${props => props.theme.spacing[marginTop]};
  `

  return <Element>{children}</Element>
}

export default Box
