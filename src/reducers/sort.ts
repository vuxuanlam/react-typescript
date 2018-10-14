export var initialState = {
    by: "name",
    value: 1
}
var myReducer = (state = this.initialState, action: any) => {
    if (action.type === "SORT") {
        let { by, value } = action.sort;
        return { by, value };
    }
    return state;
}
export default myReducer;