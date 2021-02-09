import { combineReducers } from "redux";
import { charactersInfoReducer } from "./charactersInfoReducer";

const rootReducer = combineReducers({
  charactersInfoReducer,
});

export default rootReducer;
