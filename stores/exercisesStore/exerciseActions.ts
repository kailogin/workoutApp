import { createAction } from "typesafe-actions";

import { Exercise } from "../../screens/exercisesScreen/utils/exerciseTypes";

export const addNewExercise = createAction("ADD_NEW_EXERCISE")<Exercise>();

export const deleteExercise = createAction("DELETE_EXERCISE")<Exercise>();

export const modifyExercise = createAction("MODIFY_EXERCISE")<Exercise>();
