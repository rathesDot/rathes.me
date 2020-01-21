import React from "react"
import styled from "styled-components"

const Box = ({ children, element, marginTop, ...props }) => {
  const Element = styled(element || "div")`
    margin-top: ${props => props.theme.spacing[marginTop]};
  `

  return <Element {...props}>{children}</Element>
}

export default Box
