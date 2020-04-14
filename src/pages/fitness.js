import React, { useState } from "react"

import data from "../content/fitness/data.json"

import { BodyText, Heading1, Layout } from "../components/fitness"
import { ChevronLeft } from "../components/fitness/icons/ChevronLeft"
import { RestTime, Workout, Schedule } from "../components/fitness/patterns"

const WeekList = ({ onWorkoutSelect }) => (
  <Layout>
    <Layout.Header>
      <a href="https://github.com/rathesDot/rathes.me">Add Workout</a>
    </Layout.Header>
    <Layout.Main>
      <Schedule title="This week">
        {data.map((entry, index) => (
          <Schedule.Entry
            title={entry.title}
            date={entry.date}
            key={`${entry.date}-${index}`}
            onClick={() => onWorkoutSelect(entry)}
          />
        ))}
        <Schedule.Entry
          title="WOD — 13/04"
          date="2020-04-13"
          onClick={() => onWorkoutSelect("WOD")}
        />
        <Schedule.Entry
          title="WOD — 14/04"
          date="2020-04-14"
          onClick={() => onWorkoutSelect("WOD")}
        />
        <Schedule.Entry
          title="Run Day"
          date="2020-04-15"
          onClick={() => onWorkoutSelect("WOD")}
        />
        <Schedule.Entry
          title="Active Regeneration"
          date="2020-04-16"
          onClick={() => onWorkoutSelect("WOD")}
        />
        <Schedule.Entry
          title="5x5 Strength"
          date="2020-04-17"
          onClick={() => onWorkoutSelect("WOD")}
        />
        <Schedule.Entry
          title="Rest Day"
          date="2020-04-18"
          onClick={() => onWorkoutSelect("WOD")}
        />
        <Schedule.Entry
          title="Rest Day"
          date="2020-04-19"
          onClick={() => onWorkoutSelect("WOD")}
        />
      </Schedule>
    </Layout.Main>
  </Layout>
)

const WorkoutView = ({ onReturn, workout }) => (
  <Layout>
    <Layout.Header>
      <button onClick={onReturn}>
        <ChevronLeft />
      </button>
    </Layout.Header>
    <Layout.Main>
      <Heading1>{workout.title}</Heading1>
      <BodyText>
        {new Date(workout.date).toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </BodyText>
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

  return (
    <WorkoutView
      workout={selectedWorkout}
      onReturn={() => selectWorkout(null)}
    />
  )
}

export default Fitness
