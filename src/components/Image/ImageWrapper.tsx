import { styled } from "../../../stitches.config"

export const ImageWrapper = styled("div", {
  borderRadius: "10px",
  margin: "$4 -$8",
  overflow: "hidden",
  position: "relative",

  img: {
    objectFit: "cover",
    objectPosition: "center center",
  },
})
