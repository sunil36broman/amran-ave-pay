const singularActionName = "TODO";
const pluralActionName = "TODOS";
export const FETCH_TODOS_START = "FETCH_" + pluralActionName + "S_START";
export const FETCH_TODOS_PENDING = "FETCH_" + pluralActionName + "_PENDING";
export const FETCH_TODOS_SUCCEESS = "FETCH_" + pluralActionName + "_SUCCEESS";
export const FETCH_TODOS_FAILE = "FETCH_" + pluralActionName + "_FAILE";

export const FETCH_TODO_START = "FETCH_" + singularActionName + "_START";
export const FETCH_TODO_PENDING = "FETCH_" + singularActionName + "_PENDING";
export const FETCH_TODO_SUCCEESS = "FETCH_" + singularActionName + "_SUCCEESS";
export const FETCH_TODO_FAILE = "FETCH_" + singularActionName + "_FAILE";

export const ADD_TODO_START = "ADD_" + singularActionName + "_START";
export const ADD_TODO_PENDING = "ADD_" + singularActionName + "_PENDING";
export const ADD_TODO_SUCCEESS = "ADD_" + singularActionName + "_SUCCEESS";
export const ADD_TODO_FAILE = "ADD_" + singularActionName + "_FAILE";

export const FETCH_EDIT_TODO_START =
  "FETCH_EDIT_" + singularActionName + "_START";
export const FETCH_EDIT_TODO_PENDING =
  "FETCH_EDIT_" + singularActionName + "_PENDING";
export const FETCH_EDIT_TODO_SUCCEESS =
  "FETCH_EDIT_" + singularActionName + "_SUCCEESS";
export const FETCH_EDIT_TODO_FAILE =
  "FETCH_EDIT_" + singularActionName + "_FAILE";

export const EDIT_TODO_START = "EDIT_" + singularActionName + "_START";
export const EDIT_TODO_PENDING = "EDIT_" + singularActionName + "_PENDING";
export const EDIT_TODO_SUCCEESS = "EDIT_" + singularActionName + "_SUCCEESS";
export const EDIT_TODO_FAILE = "EDIT_" + singularActionName + "_FAILE";

export const REMOVE_TODO_START = "REMOVE_" + singularActionName + "_START";
export const REMOVE_TODO_PENDING = "REMOVE_" + singularActionName + "_PENDING";
export const REMOVE_TODO_SUCCEESS =
  "REMOVE_" + singularActionName + "_SUCCEESS";
export const REMOVE_TODO_FAILE = "REMOVE_" + singularActionName + "_FAILE";

//export const "slider"+singularActionName = "REMOVE_"+singularActionName+"_FAILE";

export default {
  FETCH_TODOS_START,
  FETCH_TODOS_PENDING,
  FETCH_TODOS_SUCCEESS,
  FETCH_TODOS_FAILE,

  FETCH_TODO_START,
  FETCH_TODO_PENDING,
  FETCH_TODO_SUCCEESS,
  FETCH_TODO_FAILE,

  ADD_TODO_START,
  ADD_TODO_PENDING,
  ADD_TODO_SUCCEESS,
  ADD_TODO_FAILE,

  FETCH_EDIT_TODO_START,
  FETCH_EDIT_TODO_PENDING,
  FETCH_EDIT_TODO_SUCCEESS,
  FETCH_EDIT_TODO_FAILE,

  EDIT_TODO_START,
  EDIT_TODO_PENDING,
  EDIT_TODO_SUCCEESS,
  EDIT_TODO_FAILE,

  REMOVE_TODO_START,
  REMOVE_TODO_PENDING,
  REMOVE_TODO_SUCCEESS,
  REMOVE_TODO_FAILE,
};
