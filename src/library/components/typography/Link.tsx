import { styled } from "../../../../stitches.config"

const Link = styled("a", {
  color: "$white",

  variants: {
    color: {
      white: {
        color: "$white",
      },
    },
    underlined: {
      true: {
        textDecoration: "underline",
      },
      false: {
        textDecoration: "none",
      },
    },
  },
})

Link.defaultProps = {
  underlined: true,
}

export { Link }
