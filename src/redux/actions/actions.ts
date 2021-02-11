export const SET_CHARACTERS = "SET_CHARACTERS";
export const FETCH_CHARACTERS = "FETCH_CHARACTERS";

export const setCharacters = (payload: object) => ({
  type: SET_CHARACTERS,
  payload,
});
export const fetchCharacters = (payload: number) => ({
  type: FETCH_CHARACTERS,
  page: payload,
});
