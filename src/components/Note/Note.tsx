import { styled } from "../../../stitches.config"

export const Note = styled("p", {
  backgroundColor: "$slate3",
  borderRadius: "10px",
  color: "$slate11",
  lineHeight: "$500",
  marginBottom: "$8",
  marginTop: "$8",
  padding: "$5",

  variants: {
    fontFamily: {
      mono: {
        fontFamily: "$mono",
      },
    },
  },
})
