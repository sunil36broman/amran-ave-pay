import actions from "./toDoActionTypes";

let initialState = {
  todos: [],
  todo: null,
  editTodo: null,
  fetching: false,
  error: null,
  permissions: [],
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_TODOS_PENDING:
    case actions.FETCH_TODO_PENDING:
    case actions.ADD_TODO_PENDING:
    case actions.FETCH_EDIT_TODO_PENDING:
    case actions.EDIT_TODO_PENDING:
    case actions.REMOVE_TODO_PENDING:
      state = {
        ...state,
        fetching: true,
      };
      break;

    case actions.FETCH_TODOS_SUCCEESS:
      state = {
        ...state,
        fetching: false,
        todos: action.payload.data,
        // permissions: action.payload.permissions,
      };
      break;

    case actions.FETCH_TODOS_FAILE:
      state = {
        ...state,
        todos: [],
        permissions: [],
        fetching: false,
        error: action.payload,
      };
      break;

    case actions.FETCH_TODO_SUCCEESS:
      state = {
        ...state,
        fetching: false,
        todo: action.payload,
      };
      break;

    case actions.FETCH_TODO_FAILE:
      state = {
        ...state,
        todo: null,
        fetching: false,
        error: action.payload,
      };
      break;

    case actions.FETCH_EDIT_TODO_SUCCEESS:
      state = {
        ...state,
        fetching: false,
        editTodo: action.payload,
      };
      break;

    case actions.FETCH_EDIT_TODO_FAILE:
      state = {
        ...state,
        editTodo: null,
        fetching: false,
        error: action.payload,
      };
      break;

    case actions.ADD_TODO_SUCCEESS:
      state = {
        ...state,
        todos: [action.payload, ...state.todos],
        fetching: false,
        error: null,
      };
      break;

    case actions.EDIT_TODO_SUCCEESS:
      state = {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              ...action.payload,
            };
          }
          return todo;
        }),
        fetching: false,
      };
      break;

    case actions.REMOVE_TODO_SUCCEESS:
      state = {
        ...state,
        fetching: false,
        todos: state.todos.filter((single, i) => single.id !== action.payload),
      };
      break;

    case actions.ADD_TODO_FAILE:
    case actions.EDIT_TODO_FAILE:
    case actions.REMOVE_TODO_FAILE:
      state = {
        ...state,
        fetching: false,
        error: action.payload.error,
      };
      break;

    default:
      state = {
        ...state,
      };
      break;
  }
  return state;
};

export default toDoReducer;
