import styled from "styled-components"

export const Heading1 = styled.h1`
  font-size: ${(props) => props.theme.fontSize["2xl"]};
  font-weight: 600;
  line-height: 1.35;
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color][props.tint]
      : props.theme.colors.white.default};
`
