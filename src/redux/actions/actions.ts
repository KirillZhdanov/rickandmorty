import {
  CharacterByIdActionPayload,
  CharactersActionPayload,
} from "../../models";
export const SET_CHARACTERS = "SET_CHARACTERS";
export const SET_BY_ID = "SET_BY_ID";
export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_BY_ID = "FETCH_BY_ID";

export const setCharacters = (payload: CharactersActionPayload) => ({
  type: SET_CHARACTERS,
  payload,
});
export const setById = (payload: CharacterByIdActionPayload) => ({
  type: SET_BY_ID,
  payload,
});
export const fetchCharacters = (payload: number) => ({
  type: FETCH_CHARACTERS,
  page: payload,
});
export const fetchById = (payload: number) => ({
  type: FETCH_BY_ID,
  id: payload,
});
