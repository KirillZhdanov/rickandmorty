import { SET_BY_ID } from "../actions/actions";
import { CharacterByIdAction, Character } from "../../models";

const initialStateById: Character = {
  id: 1,
  name: "",
  image: "",
  status: "",
  gender: "",
  species: "",
  location: {
    name: "",
  },
};

export const characterByIDReducer = (
  state: Character = initialStateById,
  action: CharacterByIdAction
) => {
  switch (action.type) {
    case SET_BY_ID:
      return { ...state, ...action.payload };
  }
  return state;
};
