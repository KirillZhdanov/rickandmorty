import { SET_CHARACTERS } from "../actions/actions";

const initialState = {
  characters: {
    info: { next: "1" },
    results: [{}],
  },
};
interface Action {
  type: string;
  payload: {
    info: {};
    results: [{}];
  };
}
export const charactersInfoReducer = (state = initialState, action: Action) => {
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
