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

export const deleteTask = (task: any) => {
    return {
        type: types.DELETE_TASK,
        task: task

    }
}

export const editTask = (task: any) => {
    return {
        type: types.EDIT_TASK,
        task
    }
}

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}
export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}

export const updateStatus = (id: any) => {
    return {
        type: types.UPDATE_STATUS,
        id
    }
}