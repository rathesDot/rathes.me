import { HTMLAttributes } from "react"

import { cva } from "class-variance-authority"

const styles = cva("my-8 w-6 border-2 border-neutral-700/90")

export const Separator: React.FC<HTMLAttributes<HTMLHRElement>> = ({
  className,
  ...props
}) => <hr className={styles({ className })} {...props} />
