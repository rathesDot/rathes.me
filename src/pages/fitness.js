import React, { useState } from "react"
import styled from "styled-components"

import {
  BodyText,
  Heading1,
  Heading2,
  Layout,
  Title,
} from "../components/fitness"
import { ChevronLeft } from "../components/fitness/icons/ChevronLeft"
import { RestTime, Workout, Schedule } from "../components/fitness/patterns"

const ScheduleEntry = styled.button`
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
      <Schedule title="This week">
        <ScheduleEntry onClick={() => onWorkoutSelect("WOD")}>
          <Heading2>WOD — 01/04</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </ScheduleEntry>
        <ScheduleEntry onClick={() => onWorkoutSelect("WOD")}>
          <Heading2>WOD — 02/04</Heading2>
          <ActiveDate>Today</ActiveDate>
        </ScheduleEntry>
        <ScheduleEntry onClick={() => onWorkoutSelect("WOD")}>
          <Heading2>Run Day</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </ScheduleEntry>
        <ScheduleEntry onClick={() => onWorkoutSelect("WOD")}>
          <Heading2>Active Regeneration</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </ScheduleEntry>
        <ScheduleEntry onClick={() => onWorkoutSelect("WOD")}>
          <Heading2>5x5 Strength</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </ScheduleEntry>
        <ScheduleEntry onClick={() => onWorkoutSelect("WOD")}>
          <Heading2>Rest Day</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </ScheduleEntry>
        <ScheduleEntry onClick={() => onWorkoutSelect("WOD")}>
          <Heading2>Rest Day</Heading2>
          <BodyText>Monday, May 14 at 10:00am</BodyText>
        </ScheduleEntry>
      </Schedule>
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
      <Workout>
        <Workout.Mode>FOR TIME</Workout.Mode>
        <Workout.Exercise name="Dumbbell Clean" details="15 Reps | 10kg" />
        <Workout.Exercise name="Burpees" details="25 Reps" />
        <Workout.Exercise name="Russian Twists" details="50 Reps" />
        <Workout.Rest value="5 min rest" />
        <Workout.Exercise name="Russian Twists" details="100 Reps" />
      </Workout>
      <RestTime value="5 min rest" />
      <Workout>
        <Workout.Exercise name="Run" details="1mi" />
      </Workout>
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
