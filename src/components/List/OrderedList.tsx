import { styled } from "../../../stitches.config"

export const OrderedList = styled("ol", {
  backgroundColor: "$slate3",
  borderRadius: "10px",
  color: "$slate11",
  fontSize: "$sm",
  lineHeight: "$500",
  listStyleType: "decimal",
  marginBottom: "$8",
  marginTop: "$8",
  padding: "$12",

  "> li:not(:last-child)": {
    margin: "0 0 $4 0",
  },

  p: {
    margin: 0,
    fontSize: "$sm",
    lineLeight: 1.45,
    color: "$slate11",
  },
})
