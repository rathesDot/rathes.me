import React from "react"
import styled from "styled-components"

import { Title } from "../index"

const Schedule = ({ title, children }) => (
  <>
    <Title>{title}</Title>
    {children}
  </>
)

export { Schedule }
