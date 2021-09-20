import React from "react"
import postcss from "postcss"
import autoprefixer from "autoprefixer"
import { renderToString } from "react-dom/server"

import { getCssText } from "./stitches.config"

export const replaceRenderer = ({
  bodyComponent,
  setHeadComponents,
  replaceBodyHTMLString,
}) => {
  const bodyHTML = renderToString(bodyComponent)
  const styles = getCssText()

  setHeadComponents([
    <style
      data-stitches
      dangerouslySetInnerHTML={{
        __html: postcss([autoprefixer()]).process(styles),
      }}
    />,

    replaceBodyHTMLString(bodyHTML),
  ])
}
