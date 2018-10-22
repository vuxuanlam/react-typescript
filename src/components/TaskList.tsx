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

        this.props.onFilterTable(filter)
        this.setState({
            [name]: value
        })
    }

    public render() {
        let { tasks, filterTable } = this.props;
        if (filterTable) {
            if (filterTable.name) {
                tasks = tasks.filter((task: any) => {
                    return task.name.toLowerCase().indexOf(filterTable.name) !== -1;
                });
            }
            tasks = tasks.filter((task: any) => {
                if (filterTable.status === -1) {
                    return task;
                } else {
                    return task.status === (filterTable.status === 1 ? true : false)
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
        filterTable: state.filterTable
    }
}

const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
        onFilterTable: (filter: any) => {
            dispatch(actions.filterTable(filter))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);