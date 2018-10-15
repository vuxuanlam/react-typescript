import * as React from "react";
import { createStore } from "redux";
import { status, sort } from "../action/index";
import myReducer from "../reducers/index";

class Demo extends React.Component<any, any> {
    OnClick = (event: any) => {
        const store = createStore(myReducer);
        console.log("Default", store.getState());
        store.dispatch(status());
        console.log("TOGGLE_STATUS", store.getState());

        store.dispatch(sort({
            by: "name",
            value: -1
        }
        ));
        console.log("SORT", store.getState());
    }

    public render() {
        return (
            <div>
                <h1>REDUX SAMPLE APP</h1>

                <button type="button" className="btn btn-danger" onClick={this.OnClick}>button</button>

            </div>
        )
    }
}
export default Demo;