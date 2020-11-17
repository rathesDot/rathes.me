import React from "react"
import { renderToString } from "react-dom/server"

import { css } from "./stitches.config"

export const replaceRenderer = ({
  bodyComponent,
  setHeadComponents,
  replaceBodyHTMLString,
}) => {
  const renderBody = () => renderToString(bodyComponent)
  const { styles, result: bodyHTML } = css.getStyles(renderBody)

  setHeadComponents(
    styles.map((sheet, i) => (
      <style
        key={i}
        data-stitches
        dangerouslySetInnerHTML={{ __html: sheet }}
      />
    ))
  )

  replaceBodyHTMLString(bodyHTML)
}
