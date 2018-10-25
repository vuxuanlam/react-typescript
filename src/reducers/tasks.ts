import * as types from "../constant/ActionType";
var data = JSON.parse(localStorage.getItem("tasks"));
const uuidv4 = require('uuid/v4');
var initialState = data ? data : [];
var index: any;

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

        case types.SAVE_TASK:
            let task = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status
            };

            if (!task.id) {
                task.id = uuidv4();
                state.push(task)
            } else {
                index = findIndex(state, task.id);
                state[index] = task;
            }
            localStorage.setItem("tasks", JSON.stringify(state))
            return [...state] //copy tra ve array moi de tranh truyen tham chieu

        // case types.SAVE_TASK:
        //     console.log(action.task.id)
        //     return [...state]

        case types.DELETE_TASK:
            index = findIndex(state, action.task.id);
            if (index !== -1) {
                state.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(state));
            }
            return [...state]

        case types.UPDATE_STATUS:
            index = findIndex(state, action.id);
            if (index !== -1) {
                // state[index].status = !state[index].status viet the nay ko view ra dc
                state[index] = {
                    ...state[index],
                    status: !state[index].status
                };
                localStorage.setItem("tasks", JSON.stringify(state));
            }
            return [...state]

        default:
            return state
    }
}
export default myReducer;