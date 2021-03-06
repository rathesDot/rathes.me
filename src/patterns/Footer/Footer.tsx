import React from "react"
import { Link } from "gatsby"
import { styled } from "../../../stitches.config"

import { Text } from "../../components"

const Separator = styled("span", {
  display: "inline-block",
  marginLeft: 8,
  marginRight: 8,
  color: "$gray600",
  fontSize: "$xs",
  fontFamily: "$default",

  "&::before": {
    content: `"/"`,
  },
})

const Footer = () => (
  <div>
    <Text color="gray600" size="small">
      &copy; 2020 — Rathes Sachchithananthan
    </Text>
    <Separator />
    <Link to="/legal">
      <Text color="gray600" size="small">
        Legal Information
      </Text>
    </Link>
  </div>
)

export { Footer }
