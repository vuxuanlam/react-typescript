import * as messages from "../constant/Message";
import * as types from "../constant/ActionType";

var initialState = messages.MSG_WELCOME;
var message = (state = initialState, action: any) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message;
        default: return state
    }
}

export default message;