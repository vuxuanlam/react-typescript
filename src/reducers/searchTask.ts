import * as types from "../constant/ActionType";
//nen tao san initialState chu ko de rong
export var initialState = "";
var myReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.SEARCH_TASK:
            return action.keyword;
        default: return state
    }
}
export default myReducer;