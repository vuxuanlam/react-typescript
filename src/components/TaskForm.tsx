import * as React from "react";

class TaskForm extends React.Component<any, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            name: "",
            status: false
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
        // console.log(this.state);
        this.props.onSubmit(this.state);
    }

    onCancel = () => {
        this.setState({
            name: "",
            status: false
        })
    }

    public render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Add New Task
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
                                <span className="fa fa-save mr-5"></span>Save
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

export default TaskForm;