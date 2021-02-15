import { combineReducers } from "redux";
import { charactersInfoReducer } from "./charactersInfoReducer";
import { characterByIDReducer } from "./characterByIDReducer";

const rootReducer = combineReducers({
  characterByIDReducer,
  charactersInfoReducer,
});

export default rootReducer;
