import { Exercise } from "../../exercisesScreen/utils/exerciseTypes";

// TODO: Workout defined and type for redux etc.
// Store that in redux?
export type WorkoutTypes = {
  exercises: Exercise[];
  id: string;
  muscleGroups: string;
  workoutName: string;
};
