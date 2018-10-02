import * as React from "react";

class TaskItem extends React.Component<any, any> {
    public render() {
        let { task, index } = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status === true ? "label label-success" : "label label-danger"}>{task.status === true ? "Activated" : "Disable"}</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5" ></span>Edit
                </button>
                    &nbsp;
                <button type="button" className="btn btn-danger">
                        <span className="fa fa-trash mr-5"></span>Delete
                </button>
                </td>
            </tr >
        );
    }

}
export default TaskItem;