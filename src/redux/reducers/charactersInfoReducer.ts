import { SET_CHARACTERS } from "../actions/actions";
import { CharactersAction } from "../../interfaces";

const initialState = {
  characters: {
    info: { next: "1" },
    results: [{}],
  },
};

export const charactersInfoReducer = (
  state = initialState,
  action: CharactersAction
) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        characters: {
          info: action.payload.info,
          results: [...state.characters.results, ...action.payload.results],
        },
      };
  }
  return state;
};
