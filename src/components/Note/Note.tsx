import { styled } from "../../../stitches.config"

export const Note = styled("p", {
  backgroundColor: "$gray900",
  color: "$gray500",
  marginBottom: "$8",
  marginTop: "$8",
  padding: "$4",
  fontSize: "$sm",

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
