import { Exercise } from "../../exercisesScreen/utils/exerciseTypes";

export type Workout = {
  exercises: Exercise[];
  id: string;
  muscleGroups: string;
  workoutName: string;
};
