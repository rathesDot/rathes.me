import React from "react"
import postcss from "postcss"
import autoprefixer from "autoprefixer"

import { getCssString } from "./stitches.config"

export const replaceRenderer = ({ setHeadComponents }) => {
  const styles = getCssString()

  setHeadComponents([
    <style
      data-stitches
      dangerouslySetInnerHTML={{
        __html: postcss([autoprefixer()]).process(styles),
      }}
    />,
  ])
}
