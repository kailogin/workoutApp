import { createAction } from "typesafe-actions";

import {
  Exercise,
  WorkoutSet,
} from "../../screens/exercisesScreen/utils/exerciseTypes";

export const addNewExercise = createAction("ADD_NEW_EXERCISE")<Exercise>();

export const deleteExercise = createAction("DELETE_EXERCISE")<Exercise>();

export const updateExerciseSet = createAction("UPDATE_EXERCISE_SET")<{
  sets: WorkoutSet[];
  exerciseId: string;
}>();

export const deleteSetInExercise = createAction("DELETE_SET_IN_EXERCISE")<
  WorkoutSet & { exerciseId: string }
>();

export const addSetInExercise = createAction("ADD_SET_IN_EXERCISE")<
  WorkoutSet & { exerciseId: string }
>();
