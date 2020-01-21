import React from "react"
import styled from "styled-components"

const Box = ({ children, element, marginTop, marginBottom, ...props }) => {
  const Element = styled(element || "div")`
    margin-bottom: ${props => props.theme.spacing[marginBottom]};
    margin-top: ${props => props.theme.spacing[marginTop]};
  `

  return <Element {...props}>{children}</Element>
}

export default Box
