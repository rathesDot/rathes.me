import { styled } from "../../../../stitches.config"

export const Heading = styled("h1", {
  fontSize: "$2xl",
  fontWeight: "$bold",
  lineHeight: "$default",
  variants: {
    color: {
      white: {
        color: "$white",
      },
    },
  },
})

Heading.defaultProps = {
  color: "white",
}
