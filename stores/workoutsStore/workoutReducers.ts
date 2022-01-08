import { Exercise } from "../../screens/exercisesScreen/utils/exerciseTypes";
import {
  WorkoutAction,
  initialWorkoutState,
  WorkoutState,
} from "./workoutsTypes";

export const workoutReducer = (
  state: WorkoutState = initialWorkoutState,
  action: WorkoutAction
): WorkoutState => {
  console.warn("workoutAction:", action);

  switch (action.type) {
    case "ADD_NEW_WORKOUT":
      return {
        ...state.workouts,
        workouts: [...state.workouts, action.payload],
      };

    case "DELETE_WORKOUT":
      return {
        ...state.workouts,
        workouts: state.workouts.filter(
          (workout) => workout.id !== action.payload.id
        ),
      };

    case "DELETE_EXERCISE_IN_WORKOUT":
      return {
        ...state.workouts,
        workouts: state.workouts.map((workout) => {
          if (workout.id === action.payload.workoutId) {
            return {
              ...workout,
              exercises: workout.exercises.filter(
                (exercise) => exercise.id !== action.payload.id
              ),
            };
          }

          return {
            ...workout,
            exercises: [...workout.exercises],
          };
        }),
      };

    case "ADD_EXERCISE_IN_WORKOUT":
      return {
        ...state.workouts,
        workouts: state.workouts.map((workout) => {
          if (workout.id === action.payload.workoutId) {
            const newExercise: Exercise = {
              category: action.payload.category,
              exerciseName: action.payload.exerciseName,
              id: action.payload.id,
              description: action.payload.description,
            };

            return {
              ...workout,
              exercises: [...workout.exercises, newExercise],
            };
          }

          return {
            ...workout,
            exercises: [...workout.exercises],
          };
        }),
      };

    default:
      return state;
  }
};
