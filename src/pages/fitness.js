import React, { useState } from "react"
import {
  BodyText,
  Heading1,
  Heading2,
  Heading3,
  Layout,
  Title,
} from "../components/fitness"
import styled from "styled-components"
import { ChevronLeft } from "../components/fitness/icons/ChevronLeft"

const Workout = styled.button`
  color: ${(props) => (props.active ? "#FAF089" : "#FFF")};
  display: block;
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
    </Layout.Main>
  </Layout>
)

const Mode = styled(BodyText)`
  font-weight: 700;
  color: #4a5568;
`

const RestTime = styled(BodyText)`
  color: #4a5568;
  margin: 27px 0;
`

const ExercisesList = styled.div`
  margin: 32px 0 0 4px;
`

const Exercise = styled.div`
  border-left: 1px solid #4a5568;
  margin-left: 8px;
  padding: 27px 23px 0 23px;
  position: relative;

  &:first-of-type {
    margin-top: 12px;
    padding-top: 10px;
  }

  &:first-of-type:last-child {
    border-left: none;

    &:after {
      border-left: 1px solid #4a5568;
      color: white;
      content: "";
      display: inline-block;
      left: 0;
      height: 21px;
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
      <ExercisesList>
        <Mode>FOR TIME</Mode>
        <Exercise>
          <Heading3>Dumbbell Clean</Heading3>
          <BodyText>15 Reps | 10kg</BodyText>
        </Exercise>
        <Exercise>
          <Heading3>Burpees</Heading3>
          <BodyText>25 Reps</BodyText>
        </Exercise>
        <Exercise>
          <Heading3>Russian Twists</Heading3>
          <BodyText>50 Reps</BodyText>
        </Exercise>
        <Exercise rest>
          <BodyText>5 min rest</BodyText>
        </Exercise>
        <Exercise>
          <Heading3>Russian Twists</Heading3>
          <BodyText>100 Reps</BodyText>
        </Exercise>
      </ExercisesList>
      <RestTime>5 min rest</RestTime>
      <ExercisesList>
        <Exercise>
          <Heading3>Run</Heading3>
          <BodyText>1mi</BodyText>
        </Exercise>
      </ExercisesList>
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
