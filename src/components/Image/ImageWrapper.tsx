import { PropsWithChildren } from "react"

export const ImageWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="relative my-4 -mx-8 overflow-hidden rounded-lg [&_img]:object-cover [&_img]:object-center">
    {children}
  </div>
)
