import { styled } from "../../../stitches.config"

export const Heading = styled("h1", {
  fontSize: "$2xl",
  fontWeight: 600,
  lineHeight: "$1.35",

  variants: {
    color: {
      black: {
        color: "$black",
      },
      white: {
        color: "$white",
      },
      gray400: {
        color: "$gray400",
      },
      gray500: {
        color: "$gray500",
      },
      gray600: {
        color: "$gray600",
      },
      gray700: {
        color: "$gray700",
      },
      gray800: {
        color: "$gray800",
      },
      gray900: {
        color: "$gray900",
      },
    },
  },
})
