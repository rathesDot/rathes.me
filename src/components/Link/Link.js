import React from "react"
import styled from "styled-components"

const StyledLink = styled.a`
  color: ${props =>
    props.color ? props.theme.colors[props.color][props.tint] : undefined};
  text-decoration: ${props => (props.underlined ? "underline" : "none")};
`

const Link = ({
  children,
  element,
  color,
  tint = "default",
  isCurrent,
  underlined,
  ...props
}) => {
  return (
    <StyledLink
      as={element || "a"}
      color={color}
      tint={tint}
      underlined={underlined}
      {...props}
    >
      {children}
    </StyledLink>
  )
}

export default Link
