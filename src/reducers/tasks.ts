import * as types from "../constant/ActionType";
import { stat } from "fs";
export var data = JSON.parse(localStorage.getItem("tasks"))
export var initialState = data ? data : [];
// var initialState = [{
//     id:1,
//     name : "php",
//     status : true
// }]

var myReducer = (state = initialState, action: any) => {
    switch (action.types) {
        case types.LIST_ALL: return state
        default: return state
    }
}
export default myReducer;