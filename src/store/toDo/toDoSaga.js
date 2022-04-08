import { take, all, fork, takeEvery, call, put, takeLatest } from "redux-saga/effects";
import actions from "./toDoActionTypes";
import * as API from "../../helpers/axiosUtils";

const arrayToObject = (array) =>
  array.reduce((obj, item) => {
    obj[Object.keys(item)[0]] = item[Object.keys(item)[0]].reduce((obj2, item2, index) => {
      obj2[index] = item2.name;
      return obj2;
    }, []);
    return obj;
  }, {});

function* permissionFindAndSet(moduleName) {
  const user = JSON.parse(localStorage.getItem("salesUser"));
  const allPermissions = arrayToObject(user.permissions);
  const moduleBasePermission = allPermissions[moduleName];
  return moduleBasePermission;
}

function* fetchTodosSaga(action) {
  console.log("========================All Fetch========================");
  yield put({ type: actions.FETCH_TODOS_PENDING });
  try {
    // posts?_page=${page}&_limit=${perPage}
    let response = yield call(API.fetchDatas, `/posts?_page=${action.payload.page}&_limit=${action.payload.newPerPage}`);
    // const resultPermission = yield call(permissionFindAndSet, "post");
    yield put({
      type: actions.FETCH_TODOS_SUCCEESS,
      payload: { data: response},
    });
  } catch (error) {
    yield put({ type: actions.FETCH_TODOS_FAILE, payload: error });
  }
}

function* fetchTodoSaga(action) {
  console.log("========================Single Fetch========================");
  yield put({ type: actions.FETCH_TODO_PENDING });
  try {
    const response = yield call(API.fetchData, `/posts/${action.payload}`);
    yield put({ type: actions.FETCH_TODO_SUCCEESS, payload: response });
  } catch (error) {
    yield put({ type: actions.FETCH_TODO_FAILE, payload: error });
  }
}

function* fetchEditTodoSaga(action) {
  console.log("========================Edit Fetch========================");
  yield put({ type: actions.FETCH_EDIT_TODO_PENDING });
  try {
    const response = yield call(API.fetchEditData, `/posts/${action.payload}`);
    yield put({ type: actions.FETCH_EDIT_TODO_SUCCEESS, payload: response });
  } catch (error) {
    yield put({ type: actions.FETCH_EDIT_TODO_FAILE, payload: error });
  }
}

export function* addTodoSaga(action) {
  console.log("========================CREATE========================");
  const { data, historyObject } = action.payload;
  yield put({ type: actions.ADD_TODO_PENDING });
  try {
    const response = yield call(API.addData, "/posts", data);
    yield put({ type: actions.ADD_TODO_SUCCEESS, payload: response });
    yield action.payload.historyObject.push("/todo-list");
  } catch (error) {
    yield put({ type: actions.ADD_TODO_FAILE, payload: error });
  }
}

export function* editTodoSaga(action) {
  console.log("========================UPDATE========================");
  const { id, updateData, historyObject } = action.payload;
  yield put({ type: actions.EDIT_TODO_PENDING });
  try {
    const response = yield call(API.editData, `/posts/${id}`, updateData);
    yield put({ type: actions.EDIT_TODO_SUCCEESS, payload: response });
    yield action.payload.historyObject.push("/todo-list");
  } catch (error) {
    yield put({ type: actions.EDIT_TODO_FAILE, payload: error });
  }
}

export function* removeTodoSaga(action) {
  console.log("========================Delete========================");
  yield put({ type: actions.REMOVE_TODO_PENDING });
  try {
    const response = yield call(API.removeData, `/posts/${action.payload}`);
    yield put({ type: actions.REMOVE_TODO_SUCCEESS, payload: action.payload });
  } catch (error) {
    yield put({ type: actions.REMOVE_TODO_FAILE, payload: error });
  }
}

export function* toDoSaga() {
  yield takeLatest(actions.FETCH_TODOS_START, fetchTodosSaga);
  yield takeLatest(actions.FETCH_TODO_START, fetchTodoSaga);
  yield takeLatest(actions.FETCH_EDIT_TODO_START, fetchEditTodoSaga);
  yield takeLatest(actions.ADD_TODO_START, addTodoSaga);
  yield takeLatest(actions.EDIT_TODO_START, editTodoSaga);
  yield takeLatest(actions.REMOVE_TODO_START, removeTodoSaga);
}

export default toDoSaga;
