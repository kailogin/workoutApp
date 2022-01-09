import { ActionType } from "typesafe-actions";
import { Exercise } from "../../screens/exercisesScreen/utils/exerciseTypes";

import * as actions from "./exerciseActions";
import { ExerciseConstants } from "./exerciseConstants";

export type ExerciseAction = ActionType<typeof actions>;

export type ExerciseState = {
  exercises: Exercise[];
};

export const initialExercisesState: ExerciseState = {
  exercises: ExerciseConstants,
};
