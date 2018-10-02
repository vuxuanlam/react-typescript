import * as React from "react";

class TaskForm extends React.Component<any, any>{
    public render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">Add New Task
                            <span className="fa fa-times-circle text-right" ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form>
                        <label> Task Name </label>
                        <div className="form-group">
                            <input type="text" className="form-control" id="" />
                        </div>
                        <label> Status </label>

                        <select name="status" className="form-control">
                            <option value="true">Activated</option>
                            <option value="false">Disabled</option>
                        </select>
                        <br />

                        <div className="text-center">

                            <button type="button" className="btn btn-primary mr-20">
                                <span className="fa fa-save mr-5"></span>Save
                                    </button>
                            <button type="button" className="btn btn-danger">
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