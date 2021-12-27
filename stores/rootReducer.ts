import { combineReducers } from "redux";
import { userReducer } from "./userStore/userReducers";

export const rootReducer = combineReducers({
  user: userReducer,
});
