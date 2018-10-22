import * as types from "../constant/ActionType";
//nen tao san initialState chu ko de rong
export var initialState = {
    name: "",
    status: -1
};
var myReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.FILTER_TABLE:
            return {
                name: action.filter.name,
                status: parseInt(action.filter.status, 10)
            }
        default: return state
    }
}
export default myReducer;