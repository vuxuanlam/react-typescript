import status from "./status";
import sort from "./sort";
import tasks from "./tasks";
import displayForm from "./displayForm";
import taskEditing from "./taskEditing"
import { combineReducers } from "redux";
const myReducer = combineReducers({
    status, //status : status
    sort: sort,//sort : {by : by, value : value}
    tasks: tasks,
    displayForm: displayForm,
    taskEditing: taskEditing
});

export default myReducer;