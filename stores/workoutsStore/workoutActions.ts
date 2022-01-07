import { createAction } from "typesafe-actions";
import { Exercise } from "../../screens/exercisesScreen/utils/exerciseTypes";

import { Workout } from "../../screens/workoutsScreen/utils/workoutTypes";

export const addNewWorkout = createAction("ADD_NEW_WORKOUT")<Workout>();

export const deleteWorkout = createAction("DELETE_WORKOUT")<Workout>();

export const deleteExerciseInWorkout = createAction(
  "DELETE_EXERCISE_IN_WORKOUT"
)<Exercise>();

export const addExerciseInWorkout = createAction("ADD_EXERCISE_IN_WORKOUT")<
  Exercise
>();
