import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
html {
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  border-top-width: 1px;
}

a {
  background-color: transparent;
  color: inherit;
  text-decoration: inherit;
}

abbr[title] {
  border-bottom: none;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: solid;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  white-space: normal;
  padding: 0;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
  resize: vertical;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

summary {
  display: list-item;
}

*,
::before,
::after {
  box-sizing: inherit;
  border-color: #e2e8f0;
  border-style: solid;
  border-width: 0;
}

button {
  background: transparent;
  padding: 0;
}

button:focus {
  outline: 5px auto 0;
}

ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

button,
[role="button"] {
  cursor: pointer;
}

table {
  border-collapse: collapse;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

pre,
code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  vertical-align: middle;
}

img,
video {
  max-width: 100%;
  height: auto;
}

body,
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

main,
details {
  display: block;
}

template,
[hidden] {
  display: none;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder,
input::-ms-input-placeholder,
textarea::-ms-input-placeholder,
input::placeholder,
textarea::placeholder {
  color: #a0aec0;
}

.gatsby-highlight {
  margin-bottom: ${props => props.theme.spacing[6]};
  margin-top: ${props => props.theme.spacing[6]};
}
`

export default Global
