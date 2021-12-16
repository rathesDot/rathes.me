import { styled } from "../../../stitches.config"

export const CodeBlock = styled("pre", {
  $$background: "hsla(206 12% 89.5% / 5%)",
  $$text: "$colors$slate12",
  $$syntax1: "$colors$slate9",
  $$syntax2: "$colors$slate11",
  $$syntax3: "$colors$slate10",
  $$syntax4: "$colors$slate8",
  $$comment: "$colors$slate8",
  $$removed: "$colors$red10",
  $$added: "$colors$green10",

  background: "$$background",
  borderRadius: "10px",
  margin: "$4 -$8",
  overflow: "hidden",
  padding: "1em",
  color: "$slate11",
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
    color: "$slate11",
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

  ".token.parameter": {
    color: "$$text",
  },

  ".token.tag, .token.class-name, .token.selector, .token.selector .class, .token.function":
    {
      color: "$$syntax1",
    },

  ".token.attr-value, .token.class, .token.string, .token.number, .token.unit, .token.color":
    {
      color: "$$syntax2",
    },

  ".token.attr-name, .token.keyword, .token.rule, .token.operator, .token.pseudo-class, .token.important":
    {
      color: "$$syntax3",
    },

  ".token.punctuation, .token.module": {
    color: "$$syntax4",
  },

  ".token.property": {
    color: "$$syntax1",
  },

  ".token.comment": {
    color: "$$comment",
  },

  ".token.atapply .token:not(.rule):not(.important)": {
    color: "inherit",
  },

  ".language-shell .token:not(.comment)": {
    color: "inherit",
  },

  ".language-css .token.function": {
    color: "inherit",
  },

  ".token.unchanged": {
    color: "$$syntax1",
  },

  ".token.deleted:not(.prefix), .token.inserted:not(.prefix)": {
    display: "block",
    px: "$4",
    mx: "-$4",
  },

  ".token.deleted:not(.prefix)": {
    color: "$$removed",
  },

  ".token.inserted:not(.prefix)": {
    color: "$$added",
  },

  ".token.deleted.prefix, .token.inserted.prefix": {
    userSelect: "none",
  },
})
