import { styled } from "../../../stitches.config"

export const TextSmall = styled("span", {
  fontSize: "$xs",

  variants: {
    color: {
      silver: {
        color: "$gray600",
      },
    },
  },
})
