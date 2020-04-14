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
      {workout.workout.map((workoutPart, partIndex) => {
        if (workoutPart.type === "rest") {
          return (
            <RestTime
              key={`rest-${partIndex}`}
              value={`${workoutPart.time} rest`}
            />
          )
        }

        return (
          <Workout key={`workout-${partIndex}`}>
            {workoutPart.mode && <Workout.Mode value={workoutPart.mode} />}
            {workoutPart.exercises.map((exercise, exerciseIndex) => {
              if (exercise.name === "rest") {
                return (
                  <Workout.Rest
                    key={`workout-${partIndex}-rest-${exerciseIndex}`}
                    value={`${exercise.time} rest`}
                  />
                )
              }

              return (
                <Workout.Exercise
                  key={`workout-${partIndex}-exercise-${exerciseIndex}`}
                  name={exercise.name}
                  details={[
                    exercise.sets && `${exercise.sets} sets`,
                    exercise.reps && `${exercise.reps} reps`,
                    exercise.distance && `${exercise.distance}`,
                  ]
                    .filter((e) => !!e)
                    .join(" | ")}
                />
              )
            })}
          </Workout>
        )
      })}
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
