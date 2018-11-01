import sort from "./sort";
import tasks from "./tasks";
import displayForm from "./displayForm";
import taskEditing from "./taskEditing";
import filterTask from "./filterTask";
import searchTask from "./searchTask";
import productList from "./productList";
import cart from "./cart";
import message from "./message";

import { combineReducers } from "redux";
const myReducer = combineReducers({
    sort: sort,//sort : {by : by, value : value}
    tasks: tasks,
    displayForm: displayForm,
    taskEditing: taskEditing,
    filterTask: filterTask,
    searchTask: searchTask,
    productList,
    cart,
    message
});

export default myReducer;