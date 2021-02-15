import { SET_CHARACTERS } from "../actions/actions";
import { CharactersAction, charactersInfoState } from "../../models";

const initialState: charactersInfoState = {
  characters: {
    info: {
      pages: 10,
      next: "1",
      prev: "1",
    },
    results: [
      {
        id: 1,
        name: "",
        image: "",
        status: "",
        gender: "",
        species: "",
        location: {
          name: "",
        },
      },
    ],
  },
};

export const charactersInfoReducer = (
  state: charactersInfoState = initialState,
  action: CharactersAction
) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        characters: {
          info: { ...action.payload.info },
          results: [...state.characters.results, ...action.payload.results],
        },
      };
  }
  return state;
};
