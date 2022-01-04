import { RootAction } from "../rootStore/rootTypes";
import { ExerciseState } from "./exerciseState";

const initialExerciseState = {};

export const exerciseReducer = (
  state: ExerciseState = initialExerciseState,
  action: RootAction
): ExerciseState => {
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
