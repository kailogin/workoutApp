import { UserFirstVisitAction } from "./userActions";

interface State {
  firstVisit: boolean;
}

const initialState = {
  firstVisit: true,
};

export const userReducer = (
  state: State = initialState,
  action: UserFirstVisitAction
) => {
  switch (action.type) {
    case "SET_FIRST_VISITED_STATE_FALSE":
      return {
        ...state,
        firstVisit: action.payload,
      };
    default:
      return state;
  }

  return state;
};
