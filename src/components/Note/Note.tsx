import { styled } from "../../../stitches.config"

export const Note = styled("p", {
  backgroundColor: "$slate3",
  borderRadius: "10px",
  color: "$slate11",
  fontSize: "$sm",
  lineHeight: "$500",
  marginBottom: "$8",
  marginTop: "$8",
  padding: "$5",

  variants: {
    nested: {
      true: {
        margin: 0,
        padding: "0 0 0 $4",
      },
    },
    fontFamily: {
      mono: {
        fontFamily: "$mono",
      },
    },
  },
})
