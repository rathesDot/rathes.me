import { styled } from "../../../../stitches.config"

export const Text = styled("span", {
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

export const TextBody = Text
TextBody.defaultProps = {
  size: "body",
}

export const TextSmall = Text
TextBody.defaultProps = {
  size: "small",
}
