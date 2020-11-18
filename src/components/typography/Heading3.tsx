import styled from "styled-components"

export type Heading3Props = {
  color?: "white" | "black" | "silver"
  tint?:
    | "default"
    | "light"
    | "lighter"
    | "lightest"
    | "dark"
    | "darker"
    | "darkest"
}

export const Heading3 = styled.h3<Heading3Props>`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 600;
  line-height: 1.45;
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color][props.tint]
      : props.theme.colors.white.default};
`
