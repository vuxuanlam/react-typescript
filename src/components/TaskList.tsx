import * as React from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";
import * as actions from "../action/index"

class TaskList extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            filterName: "",
            filterStatus: "-1"
        }
    }

    onChange = (event: any) => {
        let { name, value } = event.target;
        let filter = {
            name: name === "filterName" ? value : this.state.filterName,
            status: name === "filterStatus" ? value : this.state.filterStatus
        };

        this.props.onFilterTask(filter)
        this.setState({
            [name]: value
        })
    }

    public render() {
        let { tasks, filterTask, keyword } = this.props;
        if (keyword) {
            tasks = tasks.filter((task: any) => {
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            })
        }

        if (filterTask) {
            if (filterTask.name) {
                tasks = tasks.filter((task: any) => {
                    return task.name.toLowerCase().indexOf(filterTask.name) !== -1;
                });
            }
            tasks = tasks.filter((task: any) => {
                if (filterTask.status === -1) {
                    return task;
                } else {
                    return task.status === (filterTask.status === 1 ? true : false)
                }
            });
        }
        let { filterName, filterStatus } = this.state;
        let eleTask = tasks.map((task: any, index: any) => {
            return <TaskItem
                key={task.id}
                index={index + 1}
                task={task}
            />;
        });

        return (
            <div className="row mt-15">

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                    <table className="table  table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">No</th>
                                <th className="text-center">Task Name</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" className="form-control" name="filterName" value={filterName} onChange={this.onChange} />
                                </td>
                                <td>
                                    <select name="filterStatus" className="form-control" value={filterStatus} onChange={this.onChange}>
                                        <option value={-1}>All</option>
                                        <option value={0}>Desabled</option>
                                        <option value={1}>Activated</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {eleTask}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        tasks: state.tasks,
        filterTask: state.filterTask,
        keyword: state.searchTask
    }
}

const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
        onFilterTask: (filter: any) => {
            dispatch(actions.filterTask(filter))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);