import { Exercise } from "../../exercisesScreen/utils/exerciseTypes";

export type Workout = {
  exercises: Omit<Exercise, "description">[];
  id: string;
  muscleGroups: string;
  workoutName: string;
};
