import React from "react"
import { styled } from "../../../stitches.config"

import { Link } from "../../components"

const Container = styled("div", {
  color: "$slate12",
  fontFamily: "$display",
  fontSize: "$4xl",
  fontWeight: 600,
  lineHeight: "1.194444",
  maxWidth: 520,
})

export const SayHi: React.FC = () => (
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
