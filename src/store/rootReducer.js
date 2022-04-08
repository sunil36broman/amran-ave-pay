import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from "redux-form";
import { Task } from './ducks/task'
import toDoReducer from "./toDo/toDoReducer";

const rootReducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  Task,
  toDoReducer,
})

export default rootReducer
