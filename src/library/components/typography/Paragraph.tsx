import { styled } from "../../../../stitches.config"

import { TextBody } from "./Text"

const Paragraph = styled(TextBody, {
  color: "$gray600",
  fontWeight: "$normal",
  lineHeight: "$loose",
  marginTop: "$3",
  marginBottom: "$6",
  maxWidth: "640px",
})

Paragraph.defaultProps = {
  as: "p",
}

export { Paragraph }
