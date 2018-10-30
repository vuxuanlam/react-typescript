import * as types from "../constant/ActionType"

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

export const saveTask = (task: any) => {
    return {
        type: types.SAVE_TASK,
        task
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

export const resetEdit = () => {
    return {
        type: types.RESET_EDIT,
    }
}

export const filterTask = (filter: any) => {
    return {
        type: types.FILTER_TASK,
        filter
    }
}

export const searchTask = (keyword: any) => {
    return {
        type: types.SEARCH_TASK,
        keyword
    }
}

export const actAddToCart = (product: any, quantity: any) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}
