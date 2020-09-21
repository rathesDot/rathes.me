import React from "react"
import { PageProps } from "gatsby"
import { reset } from "stitches-reset"

import { css } from "../../stitches.config"

const Ui: React.FC<PageProps> = () => {
  css.global(reset)

  return null
}

export default Ui
