import React from "react"
import { Link } from "gatsby"
import { styled } from "../../../stitches.config"

import { TextSmall } from "../Typography/TextSmall"

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
    <TextSmall css={{ color: "$gray600" }} as={Link} to="/legal">
      Legal Information
    </TextSmall>
  </div>
)

export default Footer
