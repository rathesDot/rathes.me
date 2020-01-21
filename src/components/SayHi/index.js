import React from "react"
import styled from "styled-components"

import Link from "../Link"
import { Box } from "../Box"

const Container = styled(Box)`
  font-family: ${props => props.theme.fontFamily.default};
  font-size: ${props => props.theme.fontSize["4xl"]};
  color: ${props => props.theme.colors.white.default};
  font-weight: 600;
  max-width: 520px;
  line-height: 1.194444444444;
`

const SayHi = () => (
  <Container>
    Work inquiry, question or something else?{" "}
    <Link
      aria-label="Send an E-Mail to hello@rathes.me"
      href="mailto:hello@rathes.me"
      underlined
    >
      Say hi!
    </Link>
  </Container>
)

export default SayHi
