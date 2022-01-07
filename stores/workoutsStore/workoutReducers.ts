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
          return {
            ...workout,
            exercises: workout.exercises.filter(
              (exercise) => exercise.id !== action.payload.id
            ),
          };
        }),
      };

    case "ADD_EXERCISE_IN_WORKOUT":
      return {
        ...state.workouts,
        workouts: state.workouts.map((workout) => {
          return {
            ...workout,
            exercises: workout.exercises.concat(action.payload),
          };
        }),
      };

    default:
      return state;
  }
};
