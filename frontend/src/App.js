import React from "react";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { TodoList } from './components/todo/TodoList'
import { CreateTodo } from './components/todo/CreateTodo'
import { ShowTodo } from './components/todo/ShowTodo'
import { Signup } from './components/auth/Signup'
import { Login } from './components/auth/Login'
import { Header } from './components/auth/Header'


function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-secondary">
        <a href="/todos" className="navbar-brand">
          Todo
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/todos"} className="nav-link">
              Todo List
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              AddTodo
            </Link>
          </li>
          <li><Header/></li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/todos"]} component={TodoList} />
          <Route exact path="/add" component={CreateTodo} />
          <Route path="/todos/:id" component={ShowTodo} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
