import { styled } from "../../../../stitches.config"

const Link = styled("a", {
  color: "$white",
  textDecoration: "underline",

  variants: {
    color: {
      white: {
        color: "$white",
      },
    },
  },
})

export { Link }
