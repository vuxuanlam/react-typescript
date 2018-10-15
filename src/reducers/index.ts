import status from "./status";
import sort from "./sort";
import tasks from "./tasks";
import { combineReducers } from "redux";
const myReducer = combineReducers({
    status, //status : status
    sort: sort,//sort : {by : by, value : value}
    tasks: tasks
});

export default myReducer;