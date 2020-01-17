import React from "react"
import { Link } from "gatsby"

import TextSmall from "../Typography/TextSmall"

const Footer = () => (
  <div className="flex justify-between text-silver-darker mt-4 lg:max-w-4xl">
    <TextSmall>&copy; 2020 — Rathes Sachchithananthan</TextSmall>
    <TextSmall element={Link} to="/legal">
      Legal Information
    </TextSmall>
  </div>
)

export default Footer
