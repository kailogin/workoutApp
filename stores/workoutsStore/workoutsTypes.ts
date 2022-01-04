import { ActionType } from "typesafe-actions";
import * as actions from "./workoutActions";

export type WorkoutAction = ActionType<typeof actions>;
