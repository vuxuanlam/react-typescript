import * as React from "react";
import TaskForm from "../components/TaskForm";
import TaskControl from "../components/TaskControl";
import TaskList from "../components/TaskList";
import TaskItem from "components/TaskItem";
const uuidv4 = require('uuid/v4');

class TaskManagerApp extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            tasks: [],
            isDisplayForm: false
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

    onGenerate = () => {
        let tasks = [
            {
                id: uuidv4(),
                name: "react",
                status: true
            },
            {
                id: uuidv4(),
                name: "java",
                status: false
            },
            {
                id: uuidv4(),
                name: "type script",
                status: true
            }
        ]
        this.setState(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onToggleForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        });
    }

    public render() {
        let { tasks, isDisplayForm } = this.state; // let tasks= this.state.tasks; isDisplayForm = this.state.isDisplayForm
        // console.log(tasks);
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
                        <button type="button" className="btn btn-success" onClick={this.onGenerate}>Generator</button>
                        <TaskControl />
                        <TaskList tasks={tasks} />
                    </div>
                </div>
            </div>
        )
    }
}
export default TaskManagerApp;