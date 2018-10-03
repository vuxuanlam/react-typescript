import * as React from "react";
import TaskItem from "./TaskItem";

class TaskList extends React.Component<any, any>{

    public render() {
        let tasks = this.props.tasks;  //{ tasks } = this.props;
        let eleTask = tasks.map((task: any, index: any) => {
            return <TaskItem key={task.id} index={index + 1} task={task} onUpdateStatus={this.props.onUpdateStatus} onEditTask={this.props.onEditTask} onDeleteTask={this.props.onDeleteTask} />;
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
                                    <input type="text" className="form-control" name="filterName" />
                                </td>
                                <td>
                                    <select name="filterStatus" className="form-control">
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

export default TaskList;