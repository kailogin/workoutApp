import { ExerciseAction, ExerciseState } from "../exercisesStore/exerciseTypes";
import { UserAction, UserState } from "../userStore/userTypes";
import { WorkoutAction, WorkoutState } from "../workoutsStore/workoutsTypes";

export interface RootState {
  exercise: ExerciseState;
  workout: WorkoutState;
  user: UserState;
}

export type RootAction = UserAction | WorkoutAction | ExerciseAction;

export interface RootDispatch {
  (action: RootAction): void;
}
