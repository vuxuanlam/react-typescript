import * as React from "react";
import { connect } from "react-redux";

class TaskItem extends React.Component<any, any> {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onEditTask = () => {
        this.props.onEditTask(this.props.task.id);
    }

    onDeleteTask = () => {
        this.props.onDeleteTask(this.props.task.id);
    }

    public render() {
        let { task, index } = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status === true ? "label label-success" : "label label-danger"}
                        onClick={this.onUpdateStatus}>
                        {task.status === true ? "Activated" : "Disable"}</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onEditTask}>
                        <span className="fa fa-pencil mr-5" ></span>Edit
                </button>
                    &nbsp;
                <button type="button" className="btn btn-danger" onClick={this.onDeleteTask}>
                        <span className="fa fa-trash mr-5"></span>Delete
                </button>
                </td>
            </tr >
        );
    }

}

const mapStateToProps = (state: any, action: any) => {
    return {

    }
}
const mapDispatchToprops = (dispatch: any, props: any) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToprops)(TaskItem);