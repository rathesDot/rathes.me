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

export const Heading4 = styled(BaseHeading, {
  fontSize: "$xs",
  fontWeight: "$normal",
  lineHeight: "$2.5",
  textTransform: "uppercase",
  letterSpacing: "$widest",
})

Heading4.defaultProps = {
  as: "h4",
  color: "white",
}

Heading1.defaultProps = {
  as: "h1",
}
