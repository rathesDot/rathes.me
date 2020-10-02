import { styled } from "../../../../stitches.config"

export const Text = styled("span", {
  color: "$gray600",
  variants: {
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
