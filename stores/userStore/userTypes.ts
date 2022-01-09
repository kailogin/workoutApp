import { ActionType } from "typesafe-actions";

import * as actions from "./userActions";

export type UserAction = ActionType<typeof actions>;

export interface UserState {
  isFirstVisit: boolean;
}

export const initialUserState = {
  isFirstVisit: true,
};
