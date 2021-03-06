import * as React from "react";
import * as ReactDOM from "react-dom";

import TaskManager from "./apps/TaskManagerApp";
import myReducer from "./reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(myReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <TaskManager />
    </Provider>,
    document.getElementById("taskManager")
);