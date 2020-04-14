import React from "react"
import styled from "styled-components"

import { BodyText, Heading2, Title } from "../index"

const Schedule = ({ title, children }) => (
  <>
    <Title>{title}</Title>
    {children}
  </>
)

const Entry = styled.button`
  color: ${(props) => (props.active ? "#FAF089" : "#FFF")};
  display: block;
  margin-top: 29px;
  text-align: left;
`

const ActiveDate = styled(BodyText)`
  color: #faf089;
`

Schedule.Entry = ({ title, date, onClick }) => (
  <Entry onClick={onClick}>
    <Heading2>{title}</Heading2>
    {new Date(date).toDateString() === new Date().toDateString() ? (
      <ActiveDate>Today</ActiveDate>
    ) : (
      <BodyText>{date}</BodyText>
    )}
  </Entry>
)

export { Schedule }
