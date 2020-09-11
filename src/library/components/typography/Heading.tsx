import { styled } from "../../../../stitches.config"

export const BaseHeading = styled("h3", {
  variants: {
    color: {
      white: {
        color: "$white",
      },
    },
  },
})

BaseHeading.defaultProps = {
  color: "white",
}

export const Heading1 = styled(BaseHeading, {
  fontSize: "$2xl",
  fontWeight: "$bold",
  lineHeight: "$default",
})

Heading1.defaultProps = {
  as: "h1",
}
