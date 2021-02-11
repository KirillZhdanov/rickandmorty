import { SET_BY_ID } from "../actions/actions";
import { CharacterByIdAction } from "../../interfaces";

const initialStateById = {
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
  state = initialStateById,
  action: CharacterByIdAction
) => {
  switch (action.type) {
    case SET_BY_ID:
      return { ...state, ...action.payload };
  }
  return state;
};
