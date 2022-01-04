import { ExerciseState } from "../exercisesStore/exerciseState";
import { ExerciseAction } from "../exercisesStore/exerciseTypes";
import { UserState } from "../userStore/userState";
import { UserAction } from "../userStore/userTypes";
import { WorkoutState } from "../workoutsStore/workoutState";
import { WorkoutAction } from "../workoutsStore/workoutsTypes";

export interface RootState {
  exercise: ExerciseState;
  workout: WorkoutState;
  user: UserState;
}

export type RootAction = UserAction | WorkoutAction | ExerciseAction;

export interface RootDispatch {
  (action: RootAction): void;
}
