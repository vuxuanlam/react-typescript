import * as React from "react";
import TaskForm from "../components/TaskForm";
import TaskControl from "../components/TaskControl";
import TaskList from "../components/TaskList";
import TaskItem from "components/TaskItem";
import { filter } from "minimatch";
const uuidv4 = require('uuid/v4');

class TaskManagerApp extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            tasks: [],
            isDisplayForm: false,
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
        if (this.state.isDisplayForm && this.state.taskEditing !== null) {
            this.setState({
                isDisplayForm: true,
                taskEditing: null
            });
        }
        else {
            this.setState({
                isDisplayForm: !this.state.isDisplayForm,
                taskEditing: null
            });
        }
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        });
    }

    onSubmit = (data: any) => {

        //this.state là cái bất biến (Ko nên cố gắng thay đổi nó) nên việc dùng push là đang cố thay đổi nó. Trong trường hợp này ko bị lỗi, nhưng nếu sau đó dùng lifecycle medthods như componentDidUpdate thì sẽ ko sử dụng đc. Trong trường hợp thầy dùng Push rồi dùng setState thì setState wasted. 
        // => dung concat

        // onSubmitForm = (data) => {
        //     var {tasks} = this.state;
        //     if (data.id === ""){
        //       data.id = this.generateID();
        //       tasks = tasks.concat(data);
        //     } else {
        //       var index = this.findIndex(data.id);
        //       tasks[index] = data;
        //     }
        //     this.setState({
        //       tasks: tasks,
        //       taskEditing: null
        //     })
        //     localStorage.setItem("tasks", JSON.stringify(tasks));
        //   }
        let { tasks } = this.state;
        if (data.id === "") {
            data.id = uuidv4();
            tasks.push(data);
        }
        else {
            let index = this.findIndex(data.id);
            tasks[index] = data;
        }
        this.setState({
            tasks: tasks,
            isDisplayForm: false
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onUpdateStatus = (id: any) => {
        // console.log(id)
        let { tasks } = this.state;
        let index = this.findIndex(id);
        if (index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            });
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }

    onEditTask = (id: any) => {
        let { tasks } = this.state;
        let index = this.findIndex(id);
        let taskEditing = tasks[index];
        this.setState({
            isDisplayForm: true,
            taskEditing: taskEditing
        })
    }

    onDeleteTask = (id: any) => {
        let { tasks } = this.state;
        let index = this.findIndex(id);
        if (index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            })
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
        // console.log(id);
    }

    onSearch = (keyword: any) => {
        this.setState({
            keyword: keyword
        });
    }

    onSort = (sortBy: any, sortValue: any) => {
        console.log(sortBy, sortValue);
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
        let { tasks, isDisplayForm, taskEditing, filter, keyword } = this.state; // let tasks= this.state.tasks; isDisplayForm = this.state.isDisplayForm
        if (filter) {
            if (filter.name) {
                tasks = tasks.filter((task: any) => {
                    return task.name.toLowerCase().indexOf(filter.name) !== -1;
                });
            }
            tasks = tasks.filter((task: any) => {
                if (filter.status === -1) {
                    return task;
                } else {
                    return task.status === (filter.status === 1 ? true : false)
                }
            });
        }

        if (keyword) {
            tasks = tasks.filter((task: any) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            })
        }
        if (sortBy === "name") {
            tasks.sort((a, b) => {
                if (a.name > b.name) return sortValue;
                else if (a.name < b.name) return -sortValue;
                else return 0;
            });
        }
        else (sortBy === "value"){
            tasks.sort((a, b) => {
                if (a.name > b.name) return -sortValue;
                else if (a.name < b.name) return sortValue;
                else return 0;
            });
        }
        let eleTaskForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm} taskEditing={taskEditing} /> : "";

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
                        <TaskControl onSearch={this.onSearch} onSort={this.onSort} />
                        <TaskList onUpdateStatus={this.onUpdateStatus} onEditTask={this.onEditTask} onDeleteTask={this.onDeleteTask} onFilter={this.onFilter} tasks={tasks} />
                    </div>
                </div>
            </div>
        )
    }
}
export default TaskManagerApp;