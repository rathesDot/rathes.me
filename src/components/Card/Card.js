import styled from "styled-components"

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.black.light};
  border: solid 1px ${(props) => props.theme.colors.black.lighter};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.white.default};
  padding: 12px 8px;
`

export default Card
