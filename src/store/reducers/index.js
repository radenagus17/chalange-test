import { combineReducers } from "redux";
import UserReducer from "./user_reducer";
import UniversalReducer from "./universal_reducer";

const rootReducer = combineReducers({
  UserReducer,
  UniversalReducer,
});

export default rootReducer;
