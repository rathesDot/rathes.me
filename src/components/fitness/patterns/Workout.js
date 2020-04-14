import React from "react"
import styled from "styled-components"

import { BodyText, Heading3 } from "../index"

const Workout = styled.div`
  margin: 32px 0 0 4px;
`

const Mode = styled(BodyText)`
  font-weight: 700;
  color: #4a5568;
`

const Exercise = styled.div`
  border-left: 1px solid #4a5568;
  margin-left: 8px;
  padding: ${(props) =>
    props.rest ? "33px 23px 6px 23px" : "27px 23px 0 23px"};
  position: relative;

  &:first-of-type {
    margin-top: 12px;
    padding-top: 10px;
  }

  &:first-of-type:last-child {
    padding-top: 18px;
    border-left: none;

    &:after {
      border-left: 1px solid #4a5568;
      color: white;
      content: "";
      display: inline-block;
      left: 0;
      height: 29px;
      position: absolute;
      top: 0;
      width: 14px;
    }
  }

  &:not(:first-of-type):last-child {
    border-left: none;

    &:after {
      border-left: 1px solid #4a5568;
      color: white;
      content: "";
      display: inline-block;
      left: 0;
      height: 38px;
      position: absolute;
      top: 0;
      width: 14px;
    }
  }

  &:before {
    border-bottom: 1px solid #4a5568;
    color: white;
    content: "";
    display: inline-block;
    left: 0;
    height: ${(props) => (props.rest ? "8.5px" : "11px")};
    position: absolute;
    width: 14px;
  }
`

Workout.Mode = ({ value }) => <Mode>{value}</Mode>
Workout.Rest = ({ value }) => (
  <Exercise rest>
    <BodyText>{value}</BodyText>
  </Exercise>
)

Workout.Exercise = ({ name, details }) => (
  <Exercise>
    <Heading3>{name}</Heading3>
    <BodyText>{details}</BodyText>
  </Exercise>
)

export { Workout }
