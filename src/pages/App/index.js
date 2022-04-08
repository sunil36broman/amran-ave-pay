import React, { useState, useRef } from 'react'
import Home from './Home';
import RedirectPage from './RedirectPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import  "../../asset/css/style.css"
import Home2 from './Home2';

import ToDoList from "../ToDo/ToDoList";
import ToDoCreate from "../ToDo/ToDoCreate";
import ToDoSingle from "../ToDo/ToDoSingle";
import ToDoEdit from "../ToDo/ToDoEdit";



const App = () => {
  return (
    <Router>
      <Switch>
          <Route path="/redirect">
            <RedirectPage />
          </Route>
          <Route path="/home2">
            <Home2 />
          </Route>
          


        <Route
          path={`/todo-list`}
          component={ToDoList}
        />
        <Route
          
          path={`/todo-create`}
          component={ToDoCreate}
        />
        <Route
          
          path={`/todo-single/:id`}
          component={ToDoSingle}
        />
        <Route
         
          path={`/todo-edit/:id`}
          component={ToDoEdit}
        />

        <Route path="/">
            <Home />
        </Route>


        </Switch>
    </Router>
  )
}

export default App
