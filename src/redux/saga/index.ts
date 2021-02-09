import {all} from "redux-saga/effects"
import {characterWatcher} from "./charactersSaga";

export function* rootWatcher() {
    yield all([characterWatcher()])
}
