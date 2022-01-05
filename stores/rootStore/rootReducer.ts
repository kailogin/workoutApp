import { combineReducers, Reducer } from "redux";

import { exerciseReducer } from "../exercisesStore/exerciseReducers";
import { userReducer } from "../userStore/userReducers";
import { workoutReducer } from "../workoutsStore/workoutReducers";
import { RootAction, RootState } from "./rootTypes";

export const rootReducer: Reducer<RootState, RootAction> = combineReducers({
  exercise: exerciseReducer,
  user: userReducer,
  workout: workoutReducer,
});
