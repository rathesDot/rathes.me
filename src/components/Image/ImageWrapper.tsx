import { HTMLProps, PropsWithChildren } from "react"
import { cva, VariantProps } from "../../../cva.config"

const wrapperStyles = cva({
  base: "relative block -mx-8 my-4 overflow-hidden [&_img]:object-cover [&_img]:object-center",
  variants: {
    aspect: {
      "16/9": "aspect-video",
    },
  },
})

export const ImageWrapper: React.FC<
  PropsWithChildren<
    VariantProps<typeof wrapperStyles> & HTMLProps<HTMLSpanElement>
  >
> = ({ children, aspect, className }) => (
  <span className={wrapperStyles({ aspect, className })}>{children}</span>
)
