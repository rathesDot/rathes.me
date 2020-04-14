import React from "react"
import styled from "styled-components"

import { BodyText } from "../index"

const RestTime = styled(({ value, ...otherProps }) => (
  <BodyText {...otherProps}>{value}</BodyText>
))`
  color: #4a5568;
  margin: 27px 0;
`

export { RestTime }
