import React from "react"
import styled from "styled-components"

const StyledLink = styled.a`
  color: ${(props) =>
    props.color ? props.theme.colors[props.color][props.tint] : undefined};
  text-decoration: ${(props) => (props.underlined ? "underline" : "none")};
`

export type LinkProps = {
  element?: React.ReactElement
  color?: "black" | "silver" | "white"
  tint?:
    | "lightest"
    | "lighter"
    | "light"
    | "default"
    | "dark"
    | "darker"
    | "darkest"
  isCurrent?: boolean
  underlined?: boolean
}

export const Link: React.FC<LinkProps> = ({
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
