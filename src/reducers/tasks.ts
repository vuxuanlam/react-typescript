import * as types from "../constant/ActionType";
export var data = JSON.parse(localStorage.getItem("tasks"));
const uuidv4 = require('uuid/v4');
export var initialState = data ? data : [];
// var initialState = [{
//     id:1,
//     name : "php",
//     status : true
// }]

var findIndex = (tasks: any, id: any) => {
    let result = -1;
    tasks.forEach((task: any, index: any) => {
        if (task.id === id) {
            result = index
        }
    });
    return result
}

var myReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state

        case types.ADD_TASK:
            let newTask = {
                id: uuidv4(),
                name: action.task.name,
                status: action.task.status ? true : false
            }
            state.push(newTask);
            localStorage.setItem("tasks", JSON.stringify(state))
            return [...state] //copy tra ve array moi de tranh truyen tham chieu

        case types.DELETE_TASK:
            let index = findIndex(state, action.task.id);
            if (index !== -1) {
                console.log(index);
                state.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(state));
            }
            return [...state]

        default:
            return state
    }
}
export default myReducer;