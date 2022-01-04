import { RootAction } from "../rootStore/rootTypes";
import { UserState } from "./userState";

const initialUserState = {
  isFirstVisit: true,
};

export const userReducer = (
  state: UserState = initialUserState,
  action: RootAction
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
