import React from "react"
import postcss from "postcss"
import autoprefixer from "autoprefixer"

import { getCssString } from "./stitches.config"

export const replaceRenderer = ({
  setHeadComponents,
  replaceBodyHTMLString,
}) => {
  const styles = getCssString()

  setHeadComponents(
    styles
      .map((style) => postcss([autoprefixer()]).process(style))
      .map((sheet, i) => (
        <style
          key={i}
          data-stitches
          dangerouslySetInnerHTML={{ __html: sheet }}
        />
      ))
  )

  replaceBodyHTMLString(bodyHTML)
}
