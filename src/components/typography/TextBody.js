import styled from "styled-components"

export const TextBody = styled.span`
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color][props.tint] : undefined};
  text-decoration: ${(props) => (props.underlined ? "underline" : "none")};
`
