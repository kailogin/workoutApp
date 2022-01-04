import { ActionType } from "typesafe-actions";
import * as actions from "./userActions";

export type UserAction = ActionType<typeof actions>;
