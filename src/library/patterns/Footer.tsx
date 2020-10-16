import React from "react"
import { Link } from "gatsby"
import { styled } from "../../../stitches.config"

import { TextSmall } from "../components/typography/Text"

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

const FooterLink = styled(TextSmall, {
  color: "$gray600",

  "> a": {
    color: "$gray600",
    textDecoration: "none",
  },

  "a.active": {
    color: "$white",
  },
})

export const Footer: React.FC = () => (
  <div>
    <TextSmall css={{ color: "$gray600" }}>
      &copy; 2020 — Rathes Sachchithananthan
    </TextSmall>
    <Separator />
    <FooterLink>
      <Link to="/legal" activeClassName="active">
        Legal Information
      </Link>
    </FooterLink>
  </div>
)
