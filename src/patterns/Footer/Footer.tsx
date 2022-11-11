import React from "react"
import Link from "next/link"
import { styled } from "../../../stitches.config"

import { Text } from "../../components"

const Separator = styled("span", {
  display: "inline-block",
  marginLeft: 8,
  marginRight: 8,
  color: "$slate11",
  fontSize: "$xs",
  fontFamily: "$default",

  "&::before": {
    content: `"/"`,
  },
})

const Footer = () => (
  <div>
    <Text color="slate11" size="small">
      &copy; 2020 — Rathes Sachchithananthan
    </Text>
    <Separator />
  </div>
)

export { Footer }
