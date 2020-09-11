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
