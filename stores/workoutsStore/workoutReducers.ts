import { RootAction } from "../rootStore/rootTypes";
import { WorkoutState } from "./workoutState";

const initialWorkoutState = {};

export const workoutReducer = (
  state: WorkoutState = initialWorkoutState,
  action: RootAction
): WorkoutState => {
  // switch (action.type) {
  //   case "SET_FIRST_VISITED_STATE":
  //     return {
  //       ...state,
  //       isFirstVisit: action.payload,
  //     };
  //   default:
  //     return state;
  // }

  return state;
};
