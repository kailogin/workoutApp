import { createAction } from "typesafe-actions";

import {
  Exercise,
  WorkoutSet,
} from "../../screens/exercisesScreen/utils/exerciseTypes";

export const addNewExercise = createAction("ADD_NEW_EXERCISE")<Exercise>();

export const deleteExercise = createAction("DELETE_EXERCISE")<Exercise>();

export const updateExercise = createAction("UPDATE_EXERCISE")<Exercise>();

export const deleteSetInExercise = createAction("DELETE_SET_IN_EXERCISE")<
  WorkoutSet & { exerciseId: string }
>();

export const addSetInExercise = createAction("ADD_SET_IN_EXERCISE")<
  WorkoutSet & { exerciseId: string }
>();
