import { styled } from "../../../../stitches.config"

const Link = styled("a", {
  color: "$gray600",
  textDecoration: "none",

  variants: {
    color: {
      white: {
        color: "$white",
      },
    },
  },
})

Link.defaultProps = {
  as: "a",
}

export { Link }
