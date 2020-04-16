import React, { useState } from "react"
import isThisWeek from "date-fns/isThisWeek"

import data from "../content/fitness/data.json"

import { BodyText, Heading1, Layout } from "../components/fitness"
import { ChevronLeft } from "../components/fitness/icons/ChevronLeft"
import { RestTime, Workout, Schedule } from "../components/fitness/patterns"

const WeekList = ({ onWorkoutSelect }) => {
  return (
    <Layout>
      <Layout.Header>
        <a href="https://github.com/rathesDot/rathes.me">Add Workout</a>
      </Layout.Header>
      <Layout.Main>
        <Schedule title="This week">
          {data
            .filter((entry) => {
              return isThisWeek(new Date(entry.date), { weekStartsOn: 1 })
            })
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .map((entry, index) => (
              <Schedule.Entry
                title={entry.title}
                date={entry.date}
                key={`${entry.date}-${index}`}
                onClick={() => onWorkoutSelect(entry)}
              />
            ))}
        </Schedule>
      </Layout.Main>
    </Layout>
  )
}

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
                    exercise.time && `${exercise.time}`,
                    exercise.weight && `${exercise.weight}`,
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
