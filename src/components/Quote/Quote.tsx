import { styled } from "../../../stitches.config"

export const Quote = styled("blockquote", {
  backgroundColor: "$slate4",
  borderRadius: "10px",
  color: "$slate11",
  fontSize: "$lg",
  lineHeight: "$400",
  margin: "$8 -$8",
  padding: "$8",

  p: {
    margin: 0,
    color: "$slate11",
    fontSize: "$lg",
    lineHeight: "$500",
  },
})
