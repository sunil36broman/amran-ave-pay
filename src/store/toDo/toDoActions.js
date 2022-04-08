import actions from "./toDoActionTypes";

export const fetchTodosStart = (newPerPage, page) => ({
  type: actions.FETCH_TODOS_START,
  payload: {newPerPage:newPerPage, page:page},
});

export const fetchTodoStart = (id) => ({
  type: actions.FETCH_TODO_START,
  payload: id,
});

export const fetchTodoEditStart = (id) => ({
  type: actions.FETCH_EDIT_TODO_START,
  payload: id,
});

export const addTodoStart = (data, historyObject) => ({
  type: actions.ADD_TODO_START,
  payload: {
    data: data,
    historyObject: historyObject,
  },
});

export const editTodoStart = (id, updateData, historyObject) => ({
  type: actions.EDIT_TODO_START,
  payload: {
    id: id,
    updateData: updateData,
    historyObject: historyObject,
  },
});

export const removeTodoStart = (id) => ({
  type: actions.REMOVE_TODO_START,
  payload: id,
});
