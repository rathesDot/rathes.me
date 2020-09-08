import { styled } from "../../../stitches.config"

export const OrderedList = styled("ol", {
  backgroundColor: "$gray900",
  color: "$gray500",
  fontSize: "$sm",
  listStyleType: "decimal",
  marginBottom: "$8",
  marginTop: "$8",
  padding: "$6 $6 $6 $8",

  "> li:not(:last-child)": {
    margin: "0 0 $4 0",
  },

  p: {
    margin: 0,
    fontSize: "$sm",
    lineLeight: 1.45,
    color: "$gray500",
  },
})
