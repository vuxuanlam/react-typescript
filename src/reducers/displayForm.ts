import * as types from "../constant/ActionType";
export var initialState = false;
var myReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.CLOSE_FORM:
            return false
        case types.OPEN_FORM:
            state = true
            return true
        default: return state
    }
}
export default myReducer;