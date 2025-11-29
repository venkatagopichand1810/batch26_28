
import {createStore } from "redux";
// import counterReducer from "./reducers/counterReducer";
import  todoReducer from "./reducers/counterReducer";

//create the redux store with reducer
// const store = createStore(counterReducer);
const store = createStore(todoReducer);

export default store