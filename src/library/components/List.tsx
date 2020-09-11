import React from "react"
import { styled } from "../../../stitches.config"

import { Heading4 } from "./typography/Heading"
import { TextBody } from "./typography/Text"

export type ListProps = {
  title: string
}

export const List: React.FC<ListProps> = ({ children, title }) => (
  <div>
    <Heading4>{title}</Heading4>
    <ul>{children}</ul>
  </div>
)

export const Item = styled(TextBody, {
  color: "$white",
  display: "block",
  margin: "$2 0",
  variants: {
    subtitle: {
      margin: "$4 0",
    },
  },
})

Item.defaultProps = {
  as: "li",
}
