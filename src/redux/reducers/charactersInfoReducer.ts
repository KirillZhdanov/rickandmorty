import { SET_CHARACTERS } from "../actions/actions";
import { CharactersAction, CharactersInfoState } from "../../models";

const initialState: CharactersInfoState = {
  info: {
    pages: 1,
    next: "1",
  },
  results: [],
};

export const charactersInfoReducer = (
  state: CharactersInfoState = initialState,
  action: CharactersAction
) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        info: { ...action.payload.info },
        results: [...state.results, ...action.payload.results],
      };
  }
  return state;
};
