import { styled } from "../../../stitches.config"

export const ImageWrapper = styled("span", {
  borderRadius: "10px",
  display: "block",
  margin: "$4 -$8",
  overflow: "hidden",
  position: "relative",

  img: {
    objectFit: "cover",
    objectPosition: "center center",
  },
})
