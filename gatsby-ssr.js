import React from "react"
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
      id="stitches"
      dangerouslySetInnerHTML={{
        __html: styles,
      }}
    />,

    replaceBodyHTMLString(bodyHTML),
  ])
}
