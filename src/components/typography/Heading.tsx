import { styled } from "../../../stitches.config"

import { colors } from "./colors"

export const Heading = styled("h1", {
  fontSize: "$2xl",
  fontWeight: 600,
  lineHeight: "$400",

  variants: {
    color: colors,

    level: {
      heading1: {
        fontSize: "$2xl",
        fontWeight: 600,
        lineHeight: "$400",
      },
      heading2: {
        fontSize: "$lg",
        fontWeight: 600,
        lineHeight: "$500",
      },
      heading3: {
        fontSize: "$sm",
        fontWeight: 600,
        lineHeight: "$450",
      },
      heading4: {
        fontSize: "$xs",
        fontWeight: 400,
        lineHeight: "$800",
        textTransform: "uppercase",
        letterSpacing: "$widest",
      },
    },
  },
  defaultVariants: {
    color: "slate12",
  },
})
