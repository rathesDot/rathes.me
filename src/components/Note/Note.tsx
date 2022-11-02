import { styled } from "../../../stitches.config"

export const Note = styled("span", {
  backgroundColor: "$slate3",
  borderRadius: "10px",
  color: "$slate11",
  display: "block",
  lineHeight: "$500",
  margin: "$8 -$8",
  padding: "$8",

  variants: {
    fontFamily: {
      mono: {
        fontFamily: "$mono",
      },
    },
  },
})
