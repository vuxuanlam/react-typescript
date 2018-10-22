import * as React from "react";
import * as actions from "../action/index"
import { connect } from "react-redux"


class TaskForm extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            id: "",
            name: "",
            status: false
        }
    }

    componentWillMount() {
        if (this.props.taskEditing) {
            this.setState({
                id: this.props.taskEditing.id,
                name: this.props.taskEditing.name,
                status: this.props.taskEditing.status
            })
            console.log("abc");

        }
    }

    componentWillReceiveProps(nextProps: any) {
        console.log(nextProps);
        if (nextProps && nextProps.taskEditing) {
            this.setState({
                id: nextProps.taskEditing.id,
                name: nextProps.taskEditing.name,
                status: nextProps.taskEditing.status
            })
        } else if (!nextProps.taskEditing) {
            this.setState({
                id: "",
                name: "",
                status: false
            })
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event: any) => {
        let name = event.target.name;
        let value = event.target.value;
        if (name === "status") {
            value = event.target.value === "true" ? true : false
        }
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event: any) => {
        event.preventDefault();
        this.props.onSaveTask(this.state);
        this.onCloseForm();
    }

    onCancel = () => {
        this.setState({
            name: "",
            status: false
        })
    }

    onSave = () =>{
        this.setState({
            id: '',
            name: "",
            status: false
        })
    }

    public render() {
        let { id } = this.state;

        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title"> {id === "" ? "Add New Task" : "Edit Task"}
                        <span className="fa fa-times-circle text-right" onClick={this.onCloseForm} ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <label> Task Name </label>
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} required />
                        </div>
                        <label> Status </label>

                        <select name="status" className="form-control" value={this.state.status} onChange={this.onChange}>
                            <option value="true">Activated</option>
                            <option value="false">Disabled</option>
                        </select>
                        <br />

                        <div className="text-center">

                            <button type="submit" className="btn btn-primary mr-20">
                                <span className="fa fa-save mr-5" onClick = {this.onSave} ></span>Save
                                    </button>
                            <button type="button" className="btn btn-danger" onClick={this.onCancel}>
                                <span className="fa fa-close mr-5"></span>Cancel
                                    </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        taskEditing: state.taskEditing
    }
}

const mapDispatchToProps = (dispatch: any, props: any) => {
    return {
        onSaveTask: (task: any) => {
            dispatch(actions.saveTask(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);