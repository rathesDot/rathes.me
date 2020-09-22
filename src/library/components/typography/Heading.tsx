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

export const Heading2 = styled(BaseHeading, {
  fontSize: "$lg",
  fontWeight: "$bold",
  lineHeight: "$1.66",
})

export const Heading3 = styled(BaseHeading, {
  fontSize: "$sm",
  fontWeight: "$bold",
  lineHeight: "$1.45",
})

export const Heading4 = styled(BaseHeading, {
  fontSize: "$xs",
  fontWeight: "$normal",
  lineHeight: "$2.5",
  textTransform: "uppercase",
  letterSpacing: "$widest",
})

Heading1.defaultProps = {
  as: "h1",
}

Heading2.defaultProps = {
  as: "h2",
}

Heading3.defaultProps = {
  as: "h3",
}

Heading4.defaultProps = {
  as: "h4",
  color: "white",
}
