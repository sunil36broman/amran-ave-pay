import { all,fork } from 'redux-saga/effects'
import { watchFetchUser } from './ducks/task'
import toDoSaga from "./toDo/toDoSaga";

export default function* rootSaga() {
  yield all([
    watchFetchUser(),
    fork(toDoSaga),
  ])
}
