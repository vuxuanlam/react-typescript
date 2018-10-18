import * as React from "react";
import TaskForm from "../components/TaskForm";
import TaskControl from "../components/TaskControl";
import TaskList from "../components/TaskList";
import TaskItem from "components/TaskItem";
import { filter } from "minimatch";
import { findIndex } from "lodash";
import Demo from '../components/Demo';
import { connect } from "react-redux";
import * as actions from "../action/index"

const uuidv4 = require('uuid/v4');

class TaskManagerApp extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            taskEditing: null,
            filter: {
                name: "",
                status: "-1"
            },
            keyword: "",
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
    }

    // onEditTask = (id: any) => {
    //     let { tasks } = this.state;
    //     let index = this.findIndex(id);
    //     let taskEditing = tasks[index];
    //     this.setState({
    //         isDisplayForm: true,
    //         taskEditing: taskEditing
    //     })
    // }

    onSearch = (keyword: any) => {
        this.setState({
            keyword: keyword
        });
    }

    onSort = (sortBy: any, sortValue: any) => {
        // console.log(sortBy, sortValue);
        this.setState({
            sort: {
                by: sortBy,
                value: sortValue
            }
        })
    }

    onFilter = (filterName: any, filterStatus: any) => {
        filterStatus = parseInt(filterStatus, 10);
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        });
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
        let { taskEditing, filter, keyword, sort } = this.state; // let tasks= this.state.tasks; isDisplayForm = this.state.isDisplayForm
        let isDisplayForm = this.props.isDisplayForm;
        // if (filter) {
        //     if (filter.name) {
        //         tasks = tasks.filter((task: any) => {
        //             return task.name.toLowerCase().indexOf(filter.name) !== -1;
        //         });
        //     }
        //     tasks = tasks.filter((task: any) => {
        //         if (filter.status === -1) {
        //             return task;
        //         } else {
        //             return task.status === (filter.status === 1 ? true : false)
        //         }
        //     });
        // }

        // if (keyword) {
        //     tasks = tasks.filter((task: any) => {
        //         return task.name.toLowerCase().indexOf(keyword) !== -1;
        //     })
        // // }
        // if (sort.by === "name") {
        //     tasks.sort((a: any, b: any) => {
        //         if (a.name > b.name) return sort.value;
        //         else if (a.name < b.name) return -sort.value;
        //         else return 0;
        //     });
        // }
        // else if (sort.by === "status") {
        //     tasks.sort((a: any, b: any) => {
        //         if (a.status > b.status) return sort.value;
        //         else if (a.status < b.status) return -sort.value;
        //         else return 0;
        //     });
        // }
        let eleTaskForm = isDisplayForm ? <TaskForm taskEditing={taskEditing} /> : "";

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Task Manager App </h1>
                    <Demo />
                    <hr />
                </div>
                <div className="row">
                    <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
                        {eleTaskForm}
                    </div>
                    <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" className="btn btn-primary mr-20" onClick={this.onToggleForm}>Add New Task</button>
                        <TaskControl onSearch={this.onSearch} onSort={this.onSort} />
                        <TaskList onFilter={this.onFilter} />
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskManagerApp);