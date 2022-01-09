import { WorkoutSet } from "../../screens/exercisesScreen/utils/exerciseTypes";
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

    case "ADD_SET_IN_EXERCISE":
      return {
        ...state.exercises,
        exercises: state.exercises.map((exercise) => {
          if (exercise.id === action.payload.exerciseId) {
            const newSet: WorkoutSet = {
              id: action.payload.id,
              reps: action.payload.reps,
              weight: action.payload.weight,
            };

            return {
              ...exercise,
              sets: [...exercise.sets, newSet],
            };
          }

          return {
            ...exercise,
            sets: [...exercise.sets],
          };
        }),
      };

    case "DELETE_SET_IN_EXERCISE":
      return {
        ...state.exercises,
        exercises: state.exercises.map((exercise) => {
          if (exercise.id === action.payload.exerciseId) {
            return {
              ...exercise,
              sets: exercise.sets.filter((set) => set.id !== action.payload.id),
            };
          }

          return {
            ...exercise,
            sets: [...exercise.sets],
          };
        }),
      };

    default:
      return state;
  }
};
