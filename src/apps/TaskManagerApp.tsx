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

    onToggleForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        });
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
        data.id = uuidv4();
        tasks.push(data);
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
        console.log(id);
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
        let { tasks, isDisplayForm } = this.state; // let tasks= this.state.tasks; isDisplayForm = this.state.isDisplayForm
        // console.log(tasks);
        let eleTaskForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm} /> : "";

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
                        <TaskList onUpdateStatus={this.onUpdateStatus} onEditTask={this.onEditTask} onDeleteTask={this.onDeleteTask} tasks={tasks} />
                    </div>
                </div>
            </div>
        )
    }
}
export default TaskManagerApp;