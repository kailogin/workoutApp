import {
  ExerciseAction,
  initialExercisesState,
  ExerciseState,
} from "./exerciseTypes";

export const exerciseReducer = (
  state: ExerciseState = initialExercisesState,
  action: ExerciseAction
): ExerciseState => {
  console.warn(action.payload);

  switch (action.type) {
    case "ADD_NEW_EXERCISE":
      return {
        ...state.exercises,
        exercises: [...state.exercises, action.payload],
      };
    case "DELETE_EXERCISE":
      return {
        ...state,
        exercises: state.exercises.filter(
          (exercise) => exercise.id !== action.payload.id
        ),
      };
    case "MODIFY_EXERCISE": {
      const modifiedExercise = state.exercises.find(
        ({ id }) => id === action.payload.id
      );

      console.log(modifiedExercise);

      if (modifiedExercise) {
        return { ...state, exercises: [...state.exercises, modifiedExercise] };
      }

      return {
        ...state,
      };
    }
    default:
      return state;
  }

  return state;
};
