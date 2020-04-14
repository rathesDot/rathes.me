import React, { useState } from "react"
import {
  BodyText,
  Heading1,
  Heading2,
  Layout,
  Title,
} from "../components/fitness"
import styled from "styled-components"
import { ChevronLeft } from "../components/fitness/icons/ChevronLeft"

const Workout = styled.button`
  color: ${(props) => (props.active ? "#FAF089" : "#FFF")};
  margin-top: 29px;
  text-align: left;
`

const ActiveDate = styled(BodyText)`
  color: #faf089;
`

const WeekList = ({ onWorkoutSelect }) => (
  <Layout>
    <Layout.Header>
      <a href="https://github.com/rathesDot/rathes.me">Add Workout</a>
    </Layout.Header>
    <Layout.Main>
      <div>
        <Title>This week</Title>
        <Workout onClick={() => onWorkoutSelect("WOD")}>
          <Heading2>WOD — 01/04</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </Workout>
        <Workout onClick={() => onWorkoutSelect("WOD")}>
          <Heading2>WOD — 02/04</Heading2>
          <ActiveDate>Today</ActiveDate>
        </Workout>
        <Workout onClick={() => onWorkoutSelect("WOD")}>
          <Heading2>Run Day</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </Workout>
        <Workout onClick={() => onWorkoutSelect("WOD")}>
          <Heading2>Active Regeneration</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </Workout>
        <Workout onClick={() => onWorkoutSelect("WOD")}>
          <Heading2>5x5 Strength</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </Workout>
        <Workout onClick={() => onWorkoutSelect("WOD")}>
          <Heading2>Rest Day</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </Workout>
        <Workout onClick={() => onWorkoutSelect("WOD")}>
          <Heading2>Rest Day</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </Workout>
      </div>
    </Layout.Main>
  </Layout>
)

const WorkoutView = ({ onReturn }) => (
  <Layout>
    <Layout.Header>
      <button onClick={onReturn}>
        <ChevronLeft />
      </button>
    </Layout.Header>
    <Layout.Main>
      <Heading1>WOD 01/04</Heading1>
      <BodyText>Monday, May 14 at 10:00am</BodyText>
    </Layout.Main>
  </Layout>
)

const Fitness = () => {
  const [selectedWorkout, selectWorkout] = useState(null)

  if (selectedWorkout === null) {
    return <WeekList onWorkoutSelect={(workout) => selectWorkout(workout)} />
  }

  return <WorkoutView onReturn={() => selectWorkout(null)} />
}

export default Fitness
