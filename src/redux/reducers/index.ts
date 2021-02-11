import { combineReducers } from "redux";
import { charactersInfoReducer } from "./charactersInfoReducer";
import { characterByIDReducer } from "./characterByIDReducer";

const rootReducer = combineReducers({
  charactersInfoReducer,
  characterByIDReducer,
});

export default rootReducer;
