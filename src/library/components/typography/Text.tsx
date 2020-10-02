import { styled } from "../../../../stitches.config"

export const Text = styled("span", {
  color: "$gray600",
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
    size: {
      body: {
        fontSize: "$base",
      },
      small: {
        fontSize: "$xs",
      },
    },
  },
})

export const TextBody = styled(Text, {})
TextBody.defaultProps = {
  size: "body",
}

export const TextSmall = styled(Text, {})
TextSmall.defaultProps = {
  size: "small",
}
