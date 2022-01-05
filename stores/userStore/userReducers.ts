import { initialUserState, UserAction, UserState } from "./userTypes";

export const userReducer = (
  state: UserState = initialUserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "SET_FIRST_VISITED_STATE":
      return {
        ...state,
        isFirstVisit: action.payload,
      };
    default:
      return state;
  }

  return state;
};
