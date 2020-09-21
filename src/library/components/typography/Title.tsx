import { styled } from "../../../../stitches.config"

export const Title = styled("h1", {
  color: "$white",
  fontFamily: "$default",
  fontSize: "$3xl",
  fontWeight: "$bold",
  lineHeight: "$default",
  overflowWrap: "break-word",
  maxWidth: "640px",

  mobile: {
    fontSize: "$4xl",
  },

  variants: {
    color: {
      white: {
        color: "$white",
      },
    },
  },
})
