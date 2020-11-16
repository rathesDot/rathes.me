import styled from "styled-components"

export type Heading2Props = {
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

export const Heading2 = styled.h2<Heading2Props>`
  font-size: ${(props) => props.theme.fontSize["lg"]};
  font-weight: 600;
  line-height: 1.66666666666;
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color][props.tint]
      : props.theme.colors.white.default};
`
