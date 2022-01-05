import {
  WorkoutAction,
  initialWorkoutState,
  WorkoutState,
} from "./workoutsTypes";

export const workoutReducer = (
  state: WorkoutState = initialWorkoutState,
  action: WorkoutAction
): WorkoutState => {
  switch (action.type) {
    case "ADD_NEW_WORKOUT":
      return {
        ...state,
      };
    case "DELETE_WORKOUT":
      return {
        ...state,
      };
    case "MODIFY_WORKOUT":
      return {
        ...state,
      };
    default:
      return state;
  }

  return state;
};
