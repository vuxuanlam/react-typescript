import * as React from "react";
import TaskForm from "../components/TaskForm";
import TaskControl from "../components/TaskControl";
import TaskList from "../components/TaskList";
import TaskItem from "components/TaskItem";
import { filter } from "minimatch";
import { findIndex } from "lodash";
import { connect } from "react-redux";
import * as actions from "../action/index"

const uuidv4 = require('uuid/v4');

class TaskManagerApp extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            sort: {
                by: "",
                value: 1
            }
        }
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
        }
    }

    onToggleForm = () => {
        this.props.onToggleForm();
        this.props.onReset();
    }

    findIndex = (id: any) => {
        let { tasks } = this.state;
        let result = -1;
        tasks.forEach((task: any, index: any) => {
            if (task.id === id) {
                result = index
            }
        });
        return result
    }

    public render() { 
        let isDisplayForm = this.props.isDisplayForm;
        let eleTaskForm = isDisplayForm ? <TaskForm /> : "";

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Task Manager App </h1>
                    <hr />
                </div>
                <div className="row">
                    <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                        {eleTaskForm}
                    </div>
                    <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" className="btn btn-primary mr-20" onClick={this.onToggleForm}>Add New Task</button>
                        <TaskControl />
                        <TaskList />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        isDisplayForm: state.displayForm
    }
}
const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggleForm())
        },
        onReset: () =>{
            dispatch(actions.resetEdit())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskManagerApp);