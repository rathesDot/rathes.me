import { styled } from "../../../stitches.config"

export const TextField = styled("input", {
  alignItems: "center",
  all: "unset",
  backgroundColor: "$slate5",
  borderRadius: 4,
  boxShadow: `0 0 0 1px $colors$slate5`,
  boxSizing: "border-box",
  color: "white",
  display: "inline-flex",
  fontSize: 15,
  justifyContent: "center",
  height: 35,
  lineHeight: 1,
  maxWidth: 480,
  padding: "0 10px",
  width: "100%",

  "&:focus": { boxShadow: `0 0 0 2px $colors$slate6` },
})
