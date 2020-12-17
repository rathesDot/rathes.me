import { styled } from "../../../stitches.config"

import { colors } from "./colors"

export const Link = styled("a", {
  textDecoration: "none",

  variants: {
    color: colors,
    underlined: {
      true: {
        textDecoration: "underline",
      },
    },
  },
})
