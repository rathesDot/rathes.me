import { styled } from "../../../stitches.config"

export const CodeBlock = styled("pre", {
  background: "$slate3",
  borderRadius: "10px",
  margin: "$4 -$8",
  overflow: "hidden",
  padding: "1em",
  color: "$slate12",
  fontFamily: "$mono",
  textAlign: "left",
  whiteSpace: "pre",
  wordSpacing: "normal",
  wordBreak: "normal",
  wordWrap: "normal",
  lineHeight: 1.5,

  tabSize: 4,

  hyphens: "none",

  '> code[class*="language-"]': {
    color: "$slate12",
    background: "none",
    fontFamily: "$mono",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: 1.5,

    tabSize: 4,

    hyphens: "none",
  },

  /* Inline code */
  ':not(pre) > code[class*="language-"]': {
    background: "$slate3",
    padding: "0.1em",
    borderRadius: "0.3em",
    whiteSpace: "normal",
  },

  ".token.comment": {
    color: "#d4d0ab",
  },

  ".token.prolog": {
    color: "#d4d0ab",
  },

  ".token.doctype": {
    color: "#d4d0ab",
  },

  ".token.cdata": {
    color: "#d4d0ab",
  },

  ".token.punctuation": {
    color: "$slate12",
  },

  ".token.property": {
    color: "#ffa07a",
  },

  ".token.tag": {
    color: "#ffa07a",
  },

  ".token.constant": {
    color: "#ffa07a",
  },

  ".token.symbol": {
    color: "#ffa07a",
  },

  ".token.deleted": {
    color: "#ffa07a",
  },

  "..token.boolean": {
    color: "#00e0e0",
  },

  ".token.number": {
    color: "#00e0e0",
  },

  ".token.selector": {
    color: "#abe338",
  },

  ".token.attr-name": {
    color: "#abe338",
  },

  ".token.string": {
    color: "#abe338",
  },

  ".token.char": {
    color: "#abe338",
  },

  ".token.builtin": {
    color: "#abe338",
  },

  ".token.inserted": {
    color: "#abe338",
  },

  ".token.operator": {
    color: "#00e0e0",
  },

  ".token.entity": {
    color: "#00e0e0",
    cursor: "help",
  },

  ".token.url": {
    color: "#00e0e0",
  },

  ".language-css .token.string": {
    color: "#00e0e0",
  },

  ".style .token.string": {
    color: "#00e0e0",
  },

  ".token.variable": {
    color: "#00e0e0",
  },

  ".token.atrule": {
    color: "#ffd700",
  },

  ".token.attr-value": {
    color: "#ffd700",
  },

  ".token.function": {
    color: "#ffd700",
  },

  ".token.keyword": {
    color: "#00e0e0",
  },

  ".token.regex": {
    color: "#ffd700",
  },

  ".token.important": {
    color: "#ffd700",
    fontWeight: "bold",
  },

  ".token.bold": {
    fontWeight: "bold",
  },

  ".token.italic": {
    fontStyle: "italic",
  },
})
