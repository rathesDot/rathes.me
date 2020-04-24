import React from "react"
import styled from "styled-components"

const Element = styled.div`
  ${(props) =>
    props.fontFamily
      ? `font-family: ${props.theme.fontFamily[props.fontFamily]};`
      : undefined};
  ${(props) =>
    props.fontSize
      ? `font-size: ${props.theme.fontSize[props.fontSize]};`
      : undefined}
  ${(props) =>
    props.fontWeight ? `font-weight: ${props.fontWeight};` : undefined};
  ${(props) => (props.flex ? `flex: ${props.flex};` : undefined)};
  ${(props) =>
    props.lineHeight ? `line-Height: ${props.lineHeight};` : undefined}
  ${(props) =>
    props.textColor
      ? `color: ${props.theme.colors[props.textColor][props.textTint]};`
      : undefined}
  ${(props) =>
    props.backgroundColor
      ? `background-color: ${
          props.theme.colors[props.backgroundColor][props.backgroundTint]
        };`
      : undefined}
  display: ${(props) =>
    props.displayElement ? `${props.displayElement};` : undefined};
  margin-bottom: ${(props) => props.theme.spacing[props.marginBottom]};
  margin-top: ${(props) => props.theme.spacing[props.marginTop]};
  ${(props) => (props.maxWidth ? `max-width: ${props.maxWidth}` : undefined)};
  ${(props) =>
    props.minHeight ? `min-height: ${props.minHeight}` : undefined};
  padding: ${(props) => props.theme.spacing[props.padding]};
  padding-left: ${(props) => props.theme.spacing[props.paddingLeft]};
  ${(props) =>
    props.flexDirection ? `flex-direction: ${props.flexDirection}` : undefined};
  ${(props) =>
    props.justifyContent
      ? `justify-content: ${props.justifyContent}`
      : undefined};
  ${(props) =>
    props.alignItems ? `align-items: ${props.alignItems}` : undefined};
`

const Box = ({
  alignItems,
  backgroundColor,
  backgroundTint = "default",
  children,
  display = "block",
  element,
  fontFamily,
  fontSize,
  fontWeight,
  flexDirection,
  flex,
  justifyContent,
  lineHeight,
  marginTop,
  marginBottom,
  maxWidth,
  minHeight,
  padding,
  paddingLeft,
  textColor,
  textTint = "default",
  ...props
}) => {
  return (
    <Element
      as={element || "div"}
      alignItems={alignItems}
      backgroundColor={backgroundColor}
      backgroundTint={backgroundTint}
      children={children}
      displayElement={display}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      flexDirection={flexDirection}
      flex={flex}
      justifyContent={justifyContent}
      lineHeight={lineHeight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      maxWidth={maxWidth}
      minHeight={minHeight}
      padding={padding}
      paddingLeft={paddingLeft}
      textColor={textColor}
      textTint={textTint}
      {...props}
    >
      {children}
    </Element>
  )
}

export default Box
