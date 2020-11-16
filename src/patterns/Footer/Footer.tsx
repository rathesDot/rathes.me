import React from "react"
import { Link } from "gatsby"
import { styled } from "../../../stitches.config"

import { TextSmall } from "../../components"

const Separator = styled("span", {
  display: "inline-block",
  marginLeft: 8,
  marginRight: 8,
  color: "$gray600",
  fontSize: "$xs",
  fontFamily: "$default",

  ":before": {
    content: `"/"`,
  },
})

const Footer = () => (
  <div>
    <TextSmall css={{ color: "$gray600" }}>
      &copy; 2020 — Rathes Sachchithananthan
    </TextSmall>
    <Separator />
    <Link to="/legal">
      <TextSmall css={{ color: "$gray600" }}>Legal Information</TextSmall>
    </Link>
  </div>
)

export { Footer }
