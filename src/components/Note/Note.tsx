import { styled } from "../../../stitches.config"

export const Note = styled("p", {
  backgroundColor: "$gray900",
  color: "$gray500",
  marginBottom: "$8",
  marginTop: "$8",
  padding: "$4",
  fontSize: "$sm",

  variants: {
    fontFamily: {
      mono: {
        fontFamily: "$mono",
      },
    },
  },
})
