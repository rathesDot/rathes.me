import React from "react"
import styled from "styled-components"

const TextSmall = ({
  children,
  element,
  color,
  tint = "default",
  ...props
}) => {
  const Element = styled(element || "span")`
    font-size: ${props => props.theme.fontSize.xs};
    color: ${props => (color ? props.theme.colors[color][tint] : undefined)};
  `

  return <Element {...props}>{children}</Element>
}

export default TextSmall
