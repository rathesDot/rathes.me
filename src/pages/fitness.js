import React, { useState } from "react"
import { BodyText, Heading2, Layout, Title } from "../components/fitness"
import styled from "styled-components"

const Day = styled.div`
  color: ${(props) => (props.active ? "#FAF089" : "#FFF")};
  margin-top: 29px;
`

const ActiveDate = styled(BodyText)`
  color: #faf089;
`

const WeekList = () => (
  <Layout>
    <Layout.Header>
      <a href="https://github.com/rathesDot/rathes.me">Add Workout</a>
    </Layout.Header>
    <Layout.Main>
      <div>
        <Title>This week</Title>
        <Day>
          <Heading2>WOD — 01/04</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </Day>
        <Day>
          <Heading2>WOD — 02/04</Heading2>
          <ActiveDate>Today</ActiveDate>
        </Day>
        <Day>
          <Heading2>Run Day</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </Day>
        <Day>
          <Heading2>Active Regeneration</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </Day>
        <Day>
          <Heading2>5x5 Strength</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </Day>
        <Day>
          <Heading2>Rest Day</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </Day>
        <Day>
          <Heading2>Rest Day</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </Day>
      </div>
    </Layout.Main>
  </Layout>
)

const Fitness = () => {
  const [selectedWorkout, selectWorkout] = useState(null)

  if (selectedWorkout === null) {
    return <WeekList />
  }

  return null
}

export default Fitness
