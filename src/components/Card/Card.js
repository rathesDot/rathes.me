import styled from "styled-components"

import { Box } from "../Box"

const Card = styled(Box)`
  background-color: ${(props) => props.theme.colors.black.light};
  border: solid 1px ${(props) => props.theme.colors.black.lighter};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.white.default};
  padding: 12px 8px;
`

export default Card
