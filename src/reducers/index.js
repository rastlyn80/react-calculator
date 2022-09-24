import { combineReducers } from "redux";

import calcReducer from "./calcReducer";

export default combineReducers({
  calculator: calcReducer,
});
