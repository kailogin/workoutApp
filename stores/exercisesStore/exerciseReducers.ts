import {
  ExerciseAction,
  initialExercisesState,
  ExerciseState,
} from "./exerciseTypes";

export const exerciseReducer = (
  state: ExerciseState = initialExercisesState,
  action: ExerciseAction
): ExerciseState => {
  switch (action.type) {
    case "ADD_NEW_EXERCISE":
      return {
        ...state,
      };
    case "DELETE_EXERCISE":
      return {
        ...state,
      };
    case "MODIFY_EXERCISE":
      return {
        ...state,
      };
    default:
      return state;
  }

  return state;
};
