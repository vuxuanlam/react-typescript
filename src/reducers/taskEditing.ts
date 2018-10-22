import * as types from "../constant/ActionType";
//nen tao san initialState chu ko de rong
export var initialState = {
    id: "",
    name: "",
    status: false
};
var myReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.EDIT_TASK:
            return action.task
        case types.RESET_EDIT:
            return initialState
        default: return state
    }
}
export default myReducer;