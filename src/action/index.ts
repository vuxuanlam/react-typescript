import * as types from "../constant/ActionType"
export const status = () => {
    return {
        type: types.TOGGLE_STATUS
    }
}

export const sort = (sort: any) => {
    return {
        type: types.SORT,
        sort: sort
    }
}

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const addTask = (task: any) => {
    return {
        type: types.ADD_TASK,
        task: task
    }
}