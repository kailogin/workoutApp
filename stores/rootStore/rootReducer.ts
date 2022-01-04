import { AnyAction, combineReducers, Reducer } from "redux";
import { exerciseReducer } from "../exercisesStore/exerciseReducers";
import { userReducer } from "../userStore/userReducers";
import { workoutReducer } from "../workoutsStore/workoutReducers";

import { RootState } from "./rootTypes";

export const rootReducer: Reducer<RootState, any> = combineReducers({
  exercise: exerciseReducer,
  user: userReducer,
  workout: workoutReducer,
});
