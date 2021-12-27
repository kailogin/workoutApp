import { createAction } from "typesafe-actions";

export const setFirstVisitedStateFalse = createAction(
  "SET_FIRST_VISITED_STATE_FALSE"
)<boolean>();

export interface UserFirstVisitAction {
  readonly type: "SET_FIRST_VISITED_STATE_FALSE";
  payload: boolean;
}

export type UserAction = UserFirstVisitAction;
