import { PropsWithChildren } from "react"
import { cva, VariantProps } from "class-variance-authority"

const wrapperStyles = cva(
  "relative block -mx-8 my-4 overflow-hidden rounded-lg [&_img]:object-cover [&_img]:object-center",
  {
    variants: {
      aspect: {
        "16/9": "aspect-video",
      },
    },
  }
)

export const ImageWrapper: React.FC<
  PropsWithChildren<VariantProps<typeof wrapperStyles>>
> = ({ children, aspect }) => (
  <span className={wrapperStyles({ aspect })}>{children}</span>
)
