import React from "react"
import styled from "styled-components"

const Link = ({
  children,
  element,
  color,
  tint = "default",
  isCurrent,
  ...props
}) => {
  const Element = styled(element || "a")`
    color: ${props => (color ? props.theme.colors[color][tint] : undefined)};
  `

  return <Element {...props}>{children}</Element>
}

export default Link
