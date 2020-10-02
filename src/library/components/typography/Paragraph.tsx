import { styled } from "../../../../stitches.config"

import { TextBody } from "./Text"

const Paragraph = styled(TextBody, {
  fontWeight: "$normal",
  lineHeight: "$loose",
  marginTop: "$3",
  marginBottom: "$6",
  maxWidth: "640px",
})

Paragraph.defaultProps = {
  as: "p",
  color: "gray600",
}

export { Paragraph }
