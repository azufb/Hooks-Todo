import { combineReducers } from "redux";
import todos from "./todos";
import completedTodos from "./completedTodos";

export default combineReducers({ todos, completedTodos });