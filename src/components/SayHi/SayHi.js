import React from "react"

import Link from "../Link"
import { Box } from "../Box"

const SayHi = () => (
  <Box
    maxWidth="520px"
    fontFamily="default"
    fontSize="4xl"
    fontWeight={600}
    lineHeight={1.194444444444}
    textColor="white"
  >
    Work inquiry, question or something else?{" "}
    <Link
      aria-label="Send an E-Mail to hello@rathes.me"
      href="mailto:hello@rathes.me"
      underlined
    >
      Say hi!
    </Link>
  </Box>
)

export default SayHi
