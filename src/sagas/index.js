import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

function* fetchTodos() {
  const res = yield axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.data);

  yield put({ type: "TODOS_RECEIVED", payload: res });
}
function* actionWatcher() {
  yield takeLatest("GET_TODOS", fetchTodos);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
