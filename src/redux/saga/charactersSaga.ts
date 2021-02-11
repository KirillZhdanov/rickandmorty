import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_CHARACTERS, setCharacters } from "../actions/actions";

const fetchCharactersFromApi = (page: number) => {
  console.log("Page to fetch:", page);
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
};
interface Action {
  type: string;
  page: number;
}
function* fetchCharacterWorker(action: Action) {
  try {
    const data = yield call(fetchCharactersFromApi, action.page);
    const json = yield call(() => new Promise((res) => res(data.json())));
    yield put(setCharacters(json));
  } catch (error) {
    //yield put(setError(error))
    throw new Error(`Fetch failed: ${error}`);
  }
}

export function* characterWatcher() {
  yield takeEvery(FETCH_CHARACTERS, fetchCharacterWorker);
}
