import React from "react"
import styled from "styled-components"

const TextSmall = ({ children, element, ...props }) => {
  const Element = styled(element || "span")`
    font-size: ${props => props.theme.fontSize.xs};
  `

  return <Element {...props}>{children}</Element>
}

export default TextSmall
