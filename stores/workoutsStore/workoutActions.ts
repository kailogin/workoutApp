import { createAction } from "typesafe-actions";

import { Workout } from "../../screens/workoutsScreen/utils/workoutTypes";

export const addNewWorkout = createAction("ADD_NEW_WORKOUT")<Workout>();

export const deleteWorkout = createAction("DELETE_WORKOUT")<Workout>();

export const modifyWorkout = createAction("MODIFY_WORKOUT")<Workout>();
