import React from "react"
import { renderToString } from "react-dom/server"

import { css } from "./stitches.config"

export const setup = ({ element }) => {
  const renderBody = () => renderToString(element)

  const collect = () => {
    const { styles, result: bodyHTML } = css.getStyles(renderBody)
    return { styles, bodyHTML }
  }

  return { collect }
}

export const replaceRenderer = ({
  bodyComponent,
  setHeadComponents,
  replaceBodyHTMLString,
}) => {
  const instance = setup({
    element: bodyComponent,
  })

  const { styles, bodyHTML } = instance.collect()

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
