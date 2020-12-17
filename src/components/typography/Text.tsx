import { styled } from "../../../stitches.config"

import { colors } from "./colors"

export const Text = styled("span", {
  fontSize: "$base",

  variants: {
    color: colors,
  },
})
