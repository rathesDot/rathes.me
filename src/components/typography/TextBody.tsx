import styled from "styled-components"

export type TextBodyProps = {
  color?: "white" | "black" | "silver"
  tint?:
    | "default"
    | "light"
    | "lighter"
    | "lightest"
    | "dark"
    | "darker"
    | "darkest"
  underlined: boolean
}

export const TextBody = styled.span<TextBodyProps>`
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color][props.tint] : undefined};
  text-decoration: ${(props) => (props.underlined ? "underline" : "none")};
`
