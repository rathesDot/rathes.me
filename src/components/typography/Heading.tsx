import { styled } from "../../../stitches.config"

import { colors } from "./colors"

export const Heading = styled("h1", {
  fontSize: "$2xl",
  fontWeight: 600,
  lineHeight: "$1.35",

  variants: {
    color: colors,

    level: {
      heading1: {
        fontSize: "$2xl",
        fontWeight: 600,
        lineHeight: "$1.35",
      },
      heading2: {
        fontSize: "$lg",
        fontWeight: 600,
        lineHeight: "$1.66",
      },
      heading3: {
        fontSize: "$sm",
        fontWeight: 600,
        lineHeight: "$1.45",
      },
      heading4: {
        fontSize: "$xs",
        fontWeight: 400,
        lineHeight: "$2.5",
        textTransform: "uppercase",
        letterSpacing: "$widest",
      },
    },
  },
  defaultVariants: {
    color: "white",
  },
})
