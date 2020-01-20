import React from "react"
import styled from "styled-components"

const TextBody = ({ children, element, color, tint = "default", ...props }) => {
  const Element = styled(element || "span")`
    font-size: ${props => props.theme.fontSize.base};
    color: ${props => (color ? props.theme.colors[color][tint] : undefined)};
  `

  return <Element {...props}>{children}</Element>
}

export default TextBody
