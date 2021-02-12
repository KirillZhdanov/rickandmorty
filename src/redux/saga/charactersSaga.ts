import { put, takeEvery, call } from "redux-saga/effects";
import {
  FETCH_CHARACTERS,
  setCharacters,
  FETCH_BY_ID,
  setById,
} from "../actions/actions";
import { Page, Id } from "../../models";

const fetchCharactersFromApi = (page: number) => {
  console.log("Page to fetch:", page);
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
};
const fetchCharacterById = (id: number) => {
  console.log("Id to fetch:", id);
  return fetch(`https://rickandmortyapi.com/api/character/${id}`);
};

function* fetchCharactersWorker(action: Page) {
  try {
    const response = yield call(fetchCharactersFromApi, action.page);
    const data = yield response.json();
    yield put(setCharacters(data));
  } catch (error) {
    throw new Error(`Fetch failed: ${error}`);
  }
}
function* fetchCharacterByIdWorker(action: Id) {
  try {
    const response = yield call(fetchCharacterById, action.id);
    const data = yield response.json();
    yield put(setById(data));
  } catch (error) {
    throw new Error(`Fetch failed: ${error}`);
  }
}

export function* characterWatcher() {
  yield takeEvery(FETCH_CHARACTERS, fetchCharactersWorker);
  yield takeEvery(FETCH_BY_ID, fetchCharacterByIdWorker);
}
