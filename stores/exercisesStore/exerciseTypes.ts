import { ActionType } from "typesafe-actions";
import * as actions from "./exerciseActions";

export type ExerciseAction = ActionType<typeof actions>;
