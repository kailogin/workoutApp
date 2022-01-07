import {
  ExerciseAction,
  initialExercisesState,
  ExerciseState,
} from "./exerciseTypes";

export const exerciseReducer = (
  state: ExerciseState = initialExercisesState,
  action: ExerciseAction
): ExerciseState => {
  console.warn("exerciseAction:", action);

  switch (action.type) {
    case "ADD_NEW_EXERCISE":
      return {
        ...state.exercises,
        exercises: [...state.exercises, action.payload],
      };
    case "DELETE_EXERCISE":
      return {
        ...state.exercises,
        exercises: state.exercises.filter(
          (exercise) => exercise.id !== action.payload.id
        ),
      };
    case "MODIFY_EXERCISE": {
      // TODO: TEST THIS
      return {
        ...state.exercises,
        exercises: state.exercises.map((exercise) => {
          if (exercise.id === action.payload.id) {
            return action.payload;
          }

          return exercise;
        }),
      };
    }

    default:
      return state;
  }
};
