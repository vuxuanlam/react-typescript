export var initialState = false

var myReducer = (state = this.initialState, action: any) => {
    if (action.type === "TOGGLE_STATUS") {
        state = !state;
    }
    return state;
}
export default myReducer;